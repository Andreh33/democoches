"use client";

import { useEffect, useState, useCallback } from "react";

const KEY = "as_compare_v1";
const MAX = 3;

let listeners = new Set<() => void>();
let state: number[] = [];
let initialized = false;

function load() {
  if (typeof window === "undefined") return;
  try {
    const raw = window.localStorage.getItem(KEY);
    state = raw ? (JSON.parse(raw) as number[]) : [];
  } catch {
    state = [];
  }
}
function persist() {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  }
  listeners.forEach((l) => l());
}

export function useCompare() {
  const [, force] = useState(0);

  useEffect(() => {
    if (!initialized) {
      load();
      initialized = true;
    }
    const cb = () => force((n) => n + 1);
    listeners.add(cb);
    cb();
    return () => {
      listeners.delete(cb);
    };
  }, []);

  const has = useCallback((id: number) => state.includes(id), []);
  const toggle = useCallback((id: number) => {
    if (state.includes(id)) {
      state = state.filter((i) => i !== id);
    } else if (state.length < MAX) {
      state = [...state, id];
    }
    persist();
  }, []);
  const clear = useCallback(() => {
    state = [];
    persist();
  }, []);
  const remove = useCallback((id: number) => {
    state = state.filter((i) => i !== id);
    persist();
  }, []);

  return { ids: state, has, toggle, clear, remove, max: MAX };
}
