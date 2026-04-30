"use client";

import { Suspense, useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  useGLTF,
  PerspectiveCamera,
} from "@react-three/drei";
import { MeshoptDecoder } from "three/examples/jsm/libs/meshopt_decoder.module.js";
import * as THREE from "three";

const MODEL_URL = "/models/hero-car.glb";

const setupLoader = (loader: unknown) => {
  (loader as { setMeshoptDecoder: (d: typeof MeshoptDecoder) => void })
    .setMeshoptDecoder(MeshoptDecoder);
};

useGLTF.preload(MODEL_URL, undefined, undefined, setupLoader as never);

function HeroCar({ paused }: { paused: boolean }) {
  const { scene } = useGLTF(MODEL_URL, undefined, undefined, setupLoader as never);
  const group = useRef<THREE.Group>(null);
  const target = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Center & normalise scene size to a known footprint.
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    box.getSize(size);
    const center = new THREE.Vector3();
    box.getCenter(center);
    scene.position.sub(center);
    const targetWidth = 3.2; // world units along X
    const scaleFactor = targetWidth / Math.max(size.x, 0.0001);
    scene.scale.setScalar(scaleFactor);
    // Drop it onto the ground plane.
    const newBox = new THREE.Box3().setFromObject(scene);
    scene.position.y -= newBox.min.y;

    scene.traverse((obj) => {
      if ((obj as THREE.Mesh).isMesh) {
        const m = obj as THREE.Mesh;
        m.castShadow = true;
        m.receiveShadow = true;
        const mat = m.material as
          | THREE.MeshStandardMaterial
          | THREE.MeshStandardMaterial[];
        const mats = Array.isArray(mat) ? mat : [mat];
        for (const x of mats) {
          if (x && "envMapIntensity" in x) {
            x.envMapIntensity = 1.1;
          }
        }
      }
    });
  }, [scene]);

  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -((e.clientY / window.innerHeight) * 2 - 1);
      target.current = { x: x * 0.12, y: y * 0.05 };
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!group.current) return;
    if (!paused) group.current.rotation.y += delta * 0.18;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      target.current.y,
      0.05,
    );
  });

  return (
    <group ref={group}>
      <primitive object={scene} />
    </group>
  );
}

function Scene({ paused }: { paused: boolean }) {
  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight
        position={[6, 10, 6]}
        intensity={1.4}
        castShadow
        shadow-mapSize={[2048, 2048]}
        shadow-bias={-0.0005}
      />
      <directionalLight position={[-6, 4, -4]} intensity={0.55} color="#c88a4a" />
      <Suspense fallback={null}>
        <Environment preset="studio" environmentIntensity={0.65} />
      </Suspense>

      <PerspectiveCamera makeDefault position={[6, 2.4, 7]} fov={26} />

      <HeroCar paused={paused} />

      <ContactShadows
        position={[0, -0.02, 0]}
        opacity={0.55}
        scale={9}
        blur={2.4}
        far={3.5}
      />
    </>
  );
}

function Fallback() {
  return (
    <div className="absolute inset-0 grid place-items-center">
      <svg
        viewBox="0 0 320 120"
        className="h-32 w-auto opacity-30"
        aria-hidden="true"
      >
        <path
          d="M30 80 L70 50 L130 50 L160 35 L240 35 L280 60 L290 80 L30 80 Z"
          fill="none"
          stroke="currentColor"
          strokeWidth={1}
        />
        <circle cx={90} cy={80} r={14} fill="none" stroke="currentColor" />
        <circle cx={240} cy={80} r={14} fill="none" stroke="currentColor" />
      </svg>
    </div>
  );
}

export function Hero3D() {
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const cb = () => setReduced(mq.matches);
    mq.addEventListener("change", cb);
    return () => mq.removeEventListener("change", cb);
  }, []);

  if (!mounted || reduced) return <Fallback />;

  return (
    <div
      className="absolute inset-0"
      onPointerEnter={() => setPaused(true)}
      onPointerLeave={() => setPaused(false)}
    >
      <Canvas dpr={[1, 2]} shadows gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <Scene paused={paused} />
        </Suspense>
      </Canvas>
    </div>
  );
}
