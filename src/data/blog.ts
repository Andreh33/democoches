export type BlogVariant =
  | "checklist"
  | "fuel"
  | "badge"
  | "scale"
  | "shield"
  | "cash"
  | "calendar"
  | "odometer";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: number;
  publishedAt: string; // ISO date
  author: string;
  variant: BlogVariant;
  keywords: string[];
  body: { heading: string; paragraphs: string[] }[];
}

export const posts: BlogPost[] = [
  {
    slug: "comprar-coche-segunda-mano-checklist-12-puntos",
    title:
      "Cómo comprar un coche de segunda mano sin arrepentirte: la checklist de 12 puntos",
    excerpt:
      "La compraventa de un coche de ocasión se decide en los detalles. Te dejamos la lista que aplicamos nosotros antes de añadir cualquier vehículo a nuestro inventario.",
    category: "Guía de compra",
    readTime: 8,
    publishedAt: "2026-04-12",
    author: "Equipo AutoSelect",
    variant: "checklist",
    keywords: [
      "comprar coche segunda mano",
      "checklist coche usado",
      "consejos coche ocasión",
      "concesionario Sevilla",
      "garantía coche segunda mano",
    ],
    body: [
      {
        heading: "Antes de mirar el coche, mira al vendedor",
        paragraphs: [
          "El primer filtro de cualquier compra de un vehículo de segunda mano no es la mecánica, sino la procedencia. Pregunta directamente cuántos propietarios anteriores ha tenido, en qué tipo de uso lo han tenido (particular, empresa, alquiler, taxi) y si el libro de mantenimiento se conserva completo. Un vendedor que duda en estas tres preguntas básicas es un vendedor que no ha hecho los deberes — o que prefiere que tú no los hagas.",
          "En España, los datos oficiales de un vehículo se consultan en la sede electrónica de la DGT mediante el informe de un coche por matrícula. Cuesta menos de 10 € y te ahorra disgustos: muestra cargas, embargos, baja temporal y el histórico de cambios de titular. Antes de pagar la señal, pídelo siempre.",
        ],
      },
      {
        heading: "Doce puntos que aplicamos nosotros antes de comprarlo",
        paragraphs: [
          "1. Cotejar el número de bastidor (VIN) del salpicadero, el del compartimento motor y el de la documentación. Cualquier discrepancia es motivo de descarte automático.",
          "2. Revisar el cuentakilómetros contra el libro de revisiones, las facturas y el histórico de la ITV. Si el último kilometraje declarado en la ITV es superior al que marca el cuadro, el cuentakilómetros se ha manipulado.",
          "3. Inspeccionar las holguras de las ruedas con el coche elevado: rótulas, manguetas y silentblocks delatan kilómetros más allá de lo declarado.",
          "4. Comprobar el estado de los neumáticos. Desgastes asimétricos indican problemas de geometría o suspensión.",
          "5. Examinar los frenos completos: pastillas, discos, latiguillos. Reemplazarlos no es caro, pero saber su estado real ayuda a negociar el precio.",
          "6. Conectar un equipo OBD-II y leer todos los módulos. No solo errores activos: también los códigos pendientes y el histórico congelado.",
          "7. Probar el coche en frío. Un motor que ya está a temperatura cuando llegas oculta arranques difíciles, humos azules y testigos intermitentes.",
          "8. Hacer una prueba mínima de 20 minutos que incluya ciudad, autovía y al menos una rampa pronunciada. La caja de cambios y el embrague se delatan en condiciones distintas.",
          "9. Verificar la operatividad de TODA la electrónica: climatizador, asientos eléctricos, sensores, cámaras, infoentretenimiento, conectividad inalámbrica.",
          "10. Comprobar el estado real de carrocería y pintura con un medidor de espesor. Una zona muy gruesa indica chapa o masilla.",
          "11. Revisar el habitáculo buscando humedades, especialmente en alfombras delanteras y traseras y en el maletero.",
          "12. Pedir todas las llaves originales. Si el coche solo tiene una, presupuesta entre 150 y 400 € la copia, según marca.",
        ],
      },
      {
        heading: "Lo que no se ve también vale dinero",
        paragraphs: [
          "Más allá del coche en sí, hay tres documentos que dan o quitan tranquilidad: el contrato de compraventa, la garantía y el certificado de revisión. La garantía mínima legal en compraventa profesional es de un año desde 2022; cualquier vendedor que intente reducirla por escrito está contraviniendo la ley.",
          "En AutoSelect Sevilla incorporamos a nuestro inventario solo los coches que pasan estos doce puntos sin reparos, los acompañamos con doce meses de garantía y entregamos por escrito el resultado de la revisión de 150 puntos. Si tienes dudas con un coche que estás valorando, escríbenos por WhatsApp con la matrícula: la primera opinión es gratuita.",
        ],
      },
    ],
  },
  {
    slug: "diesel-gasolina-hibrido-electrico-2026",
    title:
      "Diésel, gasolina, híbrido o eléctrico: qué motor te conviene en 2026",
    excerpt:
      "El mejor combustible no es el más moderno: es el que encaja con tus kilómetros, tus rutas y tu presupuesto. Una guía honesta para elegir sin marketing.",
    category: "Análisis",
    readTime: 9,
    publishedAt: "2026-03-28",
    author: "Equipo AutoSelect",
    variant: "fuel",
    keywords: [
      "diésel o gasolina 2026",
      "coche híbrido segunda mano",
      "coche eléctrico ocasión",
      "etiqueta ECO Sevilla",
      "qué coche comprar",
    ],
  body: [
      {
        heading: "Ningún combustible es la respuesta universal",
        paragraphs: [
          "Antes de elegir, ordena tu propio uso. ¿Cuántos kilómetros recorres al año? ¿Qué porcentaje es ciudad y qué porcentaje es autovía? ¿Necesitas entrar en una zona de bajas emisiones (ZBE)? ¿Puedes cargar en casa o en el trabajo? Estas cuatro preguntas filtran el 90% de las falsas dudas que la gente trae al concesionario.",
          "Vamos a darte una guía rápida y a explicar después por qué cada caso funciona. Resumen: si haces más de 25.000 km/año mayoritariamente en autovía y no tienes restricciones de etiqueta DGT, el diésel sigue ganando. Si haces menos de 12.000 km y vives en ZBE, el híbrido auto-recargable es difícil de batir. Si tienes plaza con enchufe propio y trayectos urbanos predominantes, el eléctrico convence — sin el enchufe, todavía no.",
        ],
      },
      {
        heading: "Diésel: el campeón silencioso de la autovía",
        paragraphs: [
          "El diésel moderno con etiqueta C de la DGT (Euro 6 desde septiembre de 2015) sigue siendo la opción más eficiente para autovía. Consumos reales por debajo de 5 l/100 km, autonomías superiores a 1.000 km con un depósito y una mecánica diseñada para durar 300.000 km sin sobresaltos. Si tu vida es comercial, autopista o rutas largas, no busques más.",
          "Los puntos en contra: prohibición de circulación creciente en grandes ciudades (Madrid Centro, Barcelona ZBE), cuestiones de aparcamiento regulado y un coste de mantenimiento ligeramente superior por inyectores, filtro de partículas y EGR. Si tu vida transcurre en Sevilla capital o en otra ZBE, mira las restricciones actualizadas antes de comprar.",
        ],
      },
      {
        heading: "Híbrido auto-recargable: la jugada inteligente para ciudad",
        paragraphs: [
          "Toyota lleva 25 años perfeccionando esta tecnología y se nota. Un Corolla 125H, un C-HR 2.0 o un Yaris 116H consumen 4,5 l/100 km en uso real urbano sin necesidad de enchufar nada. Etiqueta ECO de la DGT, acceso garantizado a todas las ZBE actuales y futuras y mantenimiento sin sorpresas: las marcas niponas garantizan la batería híbrida hasta diez años o 185.000 km si haces los servicios oficiales.",
          "El precio de salida es entre 2.000 y 3.000 € superior al equivalente gasolina, pero si haces 15.000 km/año mayoritariamente en ciudad lo amortizas en cuatro o cinco años solo en gasolina. La pega: en autovía sostenida, el híbrido pierde su ventaja porque depende del motor térmico al 100%.",
        ],
      },
      {
        heading: "Híbrido enchufable (PHEV): solo si lo enchufas",
        paragraphs: [
          "Un PHEV es un coche extraordinario si tienes plaza con enchufe en casa. Si la enchufas cada noche, harás los trayectos urbanos en eléctrico puro y solo encenderás el motor en viajes largos. Si no la enchufas, estás conduciendo un coche pesado con mecánica compleja y consumos similares al gasolina equivalente. La etiqueta CERO de la DGT compensa el sobreprecio sólo si la usas.",
        ],
      },
      {
        heading: "Eléctrico de segunda mano: ya hay opciones serias",
        paragraphs: [
          "El mercado de eléctricos de ocasión 2020-2022 está estabilizado en precios. Un Hyundai Kona EV, un Kia e-Niro o un Renault Zoe 50 kWh en buen estado pueden ser una compra excelente para uso urbano y trayectos cortos, siempre con las dos condiciones: poder cargar en tu domicilio y tener un segundo coche para los viajes largos puntuales. Si esos requisitos no se cumplen, el eléctrico todavía no es la elección racional.",
          "Antes de comprar un eléctrico de segunda mano, exige el certificado de salud de la batería (state of health). Una pérdida superior al 15% respecto al estado nuevo se traduce en autonomía real notablemente menor.",
        ],
      },
      {
        heading: "La pregunta que casi nadie hace",
        paragraphs: [
          "¿Cuánto vale el coche dentro de tres años? El valor residual depende muchísimo de la mecánica y la marca. En el momento de escribir esto, un híbrido japonés del segmento C pierde alrededor del 30% en tres años. Un diésel premium alemán bien mantenido, alrededor del 35%. Un eléctrico chino reciente, hasta el 55%. Si quieres minimizar el coste real de uso, no solo cuentes el combustible: cuenta también lo que perderás al venderlo.",
        ],
      },
    ],
  },
  {
    slug: "etiqueta-dgt-explicada-sevilla-zbe",
    title:
      "Etiqueta DGT explicada: cómo afecta tu próxima compra y tus desplazamientos por Sevilla",
    excerpt:
      "Verde, azul, amarillo, sin etiqueta: lo que cada distintivo significa para tu coche, tu bolsillo y tu rutina diaria.",
    category: "Normativa",
    readTime: 6,
    publishedAt: "2026-03-15",
    author: "Equipo AutoSelect",
    variant: "badge",
    keywords: [
      "etiqueta ambiental DGT",
      "ZBE Sevilla",
      "distintivo medioambiental coche",
      "coche etiqueta C",
      "comprar coche etiqueta ECO",
    ],
    body: [
      {
        heading: "Qué etiqueta corresponde a cada coche",
        paragraphs: [
          "La DGT clasifica los vehículos en cuatro categorías y un grupo sin distintivo. CERO emisiones es para eléctricos puros, eléctricos de autonomía extendida y PHEV con más de 40 km de autonomía homologada. ECO incluye los híbridos auto-recargables, los híbridos enchufables que no llegan a esos 40 km y los vehículos de gas natural o GLP con etiqueta C de fondo. C es para gasolina matriculados desde enero de 2006 y diésel matriculados desde septiembre de 2015 (Euro 6). B agrupa los gasolina entre enero de 2001 y diciembre de 2005, y los diésel entre enero de 2006 y agosto de 2015.",
          "Los vehículos anteriores a esos umbrales no tienen distintivo. Esa única letra que falta es la diferencia entre poder entrar en cualquier ciudad de España o tener restricciones en buena parte de los centros urbanos.",
        ],
      },
      {
        heading: "Qué supone cada etiqueta en Sevilla",
        paragraphs: [
          "Sevilla activó su Zona de Bajas Emisiones de manera escalonada. En el momento de redactar este artículo, los vehículos sin etiqueta de no residentes tienen el acceso restringido al casco histórico delimitado por la SE-30 en franjas concretas. La normativa avanza progresivamente, así que conviene consultar la Ordenanza Municipal de Movilidad antes de hacer una compra a largo plazo.",
          "Si tu uso es mayoritariamente comercial y entras a clientes en el centro varias veces por semana, descarta cualquier vehículo sin etiqueta o con etiqueta B. La diferencia de precio frente a un C o ECO se amortiza en sanciones evitadas en menos de un año.",
        ],
      },
      {
        heading: "Cómo se mira la etiqueta sin sticker físico",
        paragraphs: [
          "El distintivo físico no es obligatorio salvo en algunos municipios. Lo que sí es definitivo es la consulta en la sede electrónica de la DGT, donde introduciendo la matrícula sale la categoría exacta. Si compras un coche y el vendedor te dice 'lleva la pegatina pero no tengo claro cuál', haz tú la comprobación oficial: en algunos modelos las versiones se diferencian solo por el motor y la categoría cambia.",
        ],
      },
      {
        heading: "Inversión defensiva: comprar pensando en 2030",
        paragraphs: [
          "Las restricciones por etiqueta tenderán a endurecerse, no a relajarse. La normativa europea Euro 7 entra en vigor para vehículos nuevos en 2026-2027. Los planes de las grandes ciudades europeas apuntan a expulsar todo lo que no sea CERO o ECO en horizontes 2030-2035. Si compras un coche para conservarlo más de cinco años, hazlo pensando en ese escenario.",
          "El consejo práctico: descarta cualquier vehículo sin etiqueta o B excepto si lo usas para zonas rurales o como segundo coche puntual. Para uso principal urbano-mixto, busca al menos C; ideal ECO. Para uso intensivo de centro urbano, considera ECO o CERO si la red de cargadores te encaja.",
        ],
      },
    ],
  },
  {
    slug: "tasacion-coche-factores-influyen",
    title:
      "Cuánto vale tu coche actual: los factores que más influyen en la tasación",
    excerpt:
      "El precio justo de tu coche no es lo que dice una guía de tasación rápida. Entender los seis factores que inciden te ayuda a negociar con argumentos.",
    category: "Vender tu coche",
    readTime: 7,
    publishedAt: "2026-03-02",
    author: "Equipo AutoSelect",
    variant: "scale",
    keywords: [
      "tasación coche segunda mano",
      "vender mi coche Sevilla",
      "valor coche usado",
      "cuánto vale mi coche",
      "tasamos tu coche",
    ],
    body: [
      {
        heading: "Lo que pagamos por tu coche, en primera persona",
        paragraphs: [
          "Cuando un cliente nos trae su coche para que se lo tasemos, no estamos jugando a regatear: estamos calculando el precio al que podríamos venderlo en menos de dos meses con margen razonable, descontados los costes de revisión, garantía y financiación. Hay seis factores que pesan más que el resto, y vale la pena conocerlos para entender por qué un coche idéntico al tuyo en Wallapop puede ofertarse 4.000 € más caro que la tasación que te ofrecemos.",
        ],
      },
      {
        heading: "1. Marca, modelo y versión exacta",
        paragraphs: [
          "Dos coches del mismo modelo y año pero con motorizaciones distintas pueden tener una diferencia de 3.000-5.000 € de mercado. Un Audi A3 30 TDI 116 CV no se cotiza igual que un 35 TDI 150 CV S line, y un Volkswagen Golf 1.6 TDI 115 CV vale claramente menos que un GTI 245 CV de la misma generación. Cuando tases tu coche, asegúrate de que la versión que aparece en el ficheo corresponde con la real.",
        ],
      },
      {
        heading: "2. Kilometraje contrastado",
        paragraphs: [
          "El kilometraje pesa, pero pesa más cuando se puede acreditar. Un coche con kilometraje contenido para su edad y libro de mantenimiento al día puede valer entre 1.500 y 3.000 € más que el mismo coche con un libro incompleto. Si tienes facturas de mantenimiento, súmalas a la documentación: aceleran la decisión y suben el precio que podemos pagar.",
        ],
      },
      {
        heading: "3. Estado mecánico real",
        paragraphs: [
          "La revisión rápida que hacemos en quince minutos detecta cualquier problema relevante: humo en arranque, ruidos de cadena de distribución, claqueo de inyectores, holguras en suspensión, óxido en bajos. Cualquier intervención mecánica pendiente la valoramos en el coste real con repuesto original y mano de obra de taller especializado, no en el coste 'de pieza barata'. Esa diferencia explica por qué la tasación profesional puede ser inferior a la oferta inicial de un particular.",
        ],
      },
      {
        heading: "4. Estado estético y carrocería",
        paragraphs: [
          "Un coche que entra al concesionario con golpes evidentes, ralladuras profundas, plásticos rotos o tapicería con manchas pierde rápido en tasación: cada zona requiere su propia intervención. La buena noticia es que detalles pequeños como un detallado profesional, una limpieza interior a fondo o el cambio de un faro plástico oxidado pueden subir el valor más de lo que cuesta hacerlos.",
        ],
      },
      {
        heading: "5. Demanda actual del modelo",
        paragraphs: [
          "Hay coches que se venden solos y coches que se quedan tres meses en el escaparate. Un híbrido japonés con etiqueta ECO se mueve en cuestión de días; un monovolumen diésel sin etiqueta puede tardar meses. La demanda actual es un factor que cambia con la temporada y la zona: en Sevilla los SUV familiares y los compactos premium tienen una rotación muy alta.",
        ],
      },
      {
        heading: "6. Documentación y propietarios",
        paragraphs: [
          "Un coche de un único propietario particular con todas las revisiones en concesionario oficial vale, en términos prácticos, lo que vale: el comprador final paga ese plus. Un coche con tres propietarios anteriores y mantenimiento mixto en talleres independientes pierde unos cientos de euros, aunque mecánicamente esté igual de bien.",
        ],
      },
      {
        heading: "Cómo te tasamos en menos de 24 horas",
        paragraphs: [
          "Mándanos por WhatsApp la matrícula, los kilómetros y dos o tres fotos generales del coche. En menos de 24 horas te respondemos con un rango razonable. Si el rango te encaja, fijamos una cita rápida en nuestras instalaciones para inspección, y la oferta final queda cerrada. Si la cifra te conviene, podemos descontarla del coche que vayas a comprar con nosotros o transferirte el dinero en el mismo día.",
        ],
      },
    ],
  },
  {
    slug: "garantia-12-meses-coche-segunda-mano",
    title:
      "Garantía de 12 meses en coche de ocasión: qué cubre, qué no, y por qué importa más de lo que crees",
    excerpt:
      "La garantía legal es una protección potente — pero hay matices que conviene entender antes de firmar el contrato de compraventa.",
    category: "Marco legal",
    readTime: 6,
    publishedAt: "2026-02-18",
    author: "Equipo AutoSelect",
    variant: "shield",
    keywords: [
      "garantía coche segunda mano",
      "garantía 12 meses",
      "coche ocasión Sevilla",
      "Ley garantía vehículos",
      "compra coche profesional",
    ],
    body: [
      {
        heading: "Lo que dice la ley",
        paragraphs: [
          "Desde la transposición de la Directiva 2019/771 al ordenamiento español en 2022, los vehículos de ocasión vendidos por un profesional cuentan con una garantía legal mínima de un año, ampliable hasta dos por contrato. La garantía cubre defectos de conformidad: averías que existían en el momento de la entrega, aunque se manifiesten meses después. La carga de la prueba la asume el vendedor durante todo el primer año.",
          "Esto significa, en la práctica, que cualquier avería relevante que aparezca en los doce meses posteriores a la entrega es responsabilidad del vendedor profesional, salvo que pueda demostrar que el cliente ha hecho un uso indebido o la avería es ajena al estado del coche en el momento de la venta.",
        ],
      },
      {
        heading: "Qué entra y qué no entra",
        paragraphs: [
          "Entran: motor y elementos internos, caja de cambios, sistema eléctrico y electrónico, sistema de refrigeración, dirección, suspensión, frenos (componentes mecánicos), sistemas de inyección, climatización, sistemas de seguridad pasiva (airbags, cinturones), batería principal en eléctricos.",
          "No entran: elementos de desgaste por uso normal (pastillas de freno, neumáticos, escobillas, filtros, aceite), daños por accidente o negligencia, incidencias derivadas de modificaciones no autorizadas, daños estéticos no preexistentes, mantenimiento periódico del que es responsable el cliente.",
        ],
      },
      {
        heading: "Cláusulas que invalidan la garantía",
        paragraphs: [
          "El contrato puede establecer condiciones razonables para mantener la garantía vigente: realizar el mantenimiento periódico en plazos, no superar el kilometraje contratado para esa garantía, llevar las averías a talleres autorizados. Lo que no puede hacer el contrato es reducir el plazo legal por debajo de un año, ni excluir tipos de avería que la ley considera defectos de conformidad.",
          "Si te ofrecen una garantía más corta o con exclusiones tan amplias que vacían su contenido, estás ante una práctica contraria a la normativa. Un vendedor serio no necesita esos atajos.",
        ],
      },
      {
        heading: "Garantía extendida: cuándo merece la pena",
        paragraphs: [
          "Algunas marcas y aseguradoras ofrecen pólizas de garantía extendida más allá del primer año legal. Suelen cubrir un segundo año con condiciones similares, en torno a 200-400 € adicionales. ¿Merece la pena? Depende del coche. Para un compacto generalista bien mantenido, probablemente no. Para una berlina premium con mecánica compleja, suspensiones electrónicas o cajas DSG, probablemente sí: una sola intervención de caja automática puede superar los 3.000 €.",
        ],
      },
      {
        heading: "Cómo lo hacemos nosotros",
        paragraphs: [
          "En AutoSelect Sevilla incluimos en el precio doce meses de garantía sin letra pequeña, cubriendo todo lo que la ley contempla y un poco más: añadimos cobertura de batería de arranque y limpiaparabrisas durante los primeros 90 días. La garantía se ejecuta en talleres asociados y, en buena parte de los casos, podemos coordinarla en nuestras instalaciones para evitar desplazamientos.",
        ],
      },
    ],
  },
  {
    slug: "financiar-coche-o-pagar-al-contado",
    title:
      "Financiar el coche o pagar al contado: cuándo cada opción tiene sentido",
    excerpt:
      "El interés bajo cambia el cálculo. Vemos los tres escenarios típicos para decidir con números, no con sensaciones.",
    category: "Financiación",
    readTime: 7,
    publishedAt: "2026-02-04",
    author: "Equipo AutoSelect",
    variant: "cash",
    keywords: [
      "financiar coche segunda mano",
      "préstamo coche ocasión",
      "calculadora financiación coche",
      "TIN TAE coche",
      "comprar coche al contado",
    ],
    body: [
      {
        heading: "El reflejo cultural y los números",
        paragraphs: [
          "Buena parte de los compradores españoles llegan al concesionario con la convicción de que pagar al contado es siempre mejor. Hace veinte años, con tipos de interés del 9-12%, esa lógica era impecable. Hoy las cosas son menos automáticas: las financiaciones especializadas en automoción se mueven entre el 6% y el 8% TIN nominal, y el dinero líquido tiene alternativas razonables que rentan por encima del 3% sin riesgo apreciable. Antes de decidir, ordenemos los escenarios.",
        ],
      },
      {
        heading: "Escenario 1: tienes el dinero pero quieres conservar liquidez",
        paragraphs: [
          "Si pagar al contado te dejaría sin colchón de imprevistos o te obligaría a sacar dinero de inversiones con coste fiscal, la financiación es la respuesta racional. Una cuota mensual con un 7% TIN puede ser perfectamente compatible con dejar tu dinero en un fondo monetario o en un depósito remunerado al 3-3,5%. El diferencial nominal es mayor que cero, pero si tu liquidez te da tranquilidad ante un imprevisto, ese coste es una prima de seguridad razonable.",
        ],
      },
      {
        heading: "Escenario 2: lo financias todo desde cero",
        paragraphs: [
          "Si necesitas financiar el 100% del coche y tu capacidad de ahorro mensual es justa, prudencia: la cuota debe encajar en menos del 25% de tu ingreso neto mensual, ojo a la TAE final (que incluye todos los costes, no solo el TIN), y nunca firmes plazos superiores a 7 años para un coche de ocasión. Más allá de eso estás pagando intereses sobre un activo que ya vale menos del préstamo pendiente.",
          "Negocia siempre la entrada: pasar de 0% a 20% de entrada suele bajar el TIN que la entidad ofrece y reduce drásticamente los intereses totales pagados.",
        ],
      },
      {
        heading: "Escenario 3: tienes el dinero y prefieres simplificar",
        paragraphs: [
          "Pagar al contado simplifica: una operación, una transferencia, un dueño. Si la diferencia entre lo que rentaría tu dinero y el coste de la financiación es menos de 1,5 puntos al año, la simplificación tiene un valor por sí misma. En cifras concretas, sobre un coche de 25.000 € a 5 años, esa diferencia rara vez supera los 500-700 € totales — un coste asumible si lo que ganas es no tener una operación financiera abierta durante años.",
        ],
      },
      {
        heading: "Cuota final flexible: el truco que pocos cuentan",
        paragraphs: [
          "Algunas financiaciones ofrecen una cuota final ('valor futuro garantizado') que se sitúa entre el 25% y el 40% del precio del coche. Pagas cuotas mensuales bajas durante 3-4 años y, al final, eliges entre tres caminos: liquidar la cuota final y quedarte el coche, devolverlo y olvidarte, o cambiarlo por otro empezando una nueva operación. Es una herramienta interesante para quien rota de coche cada pocos años, pero conviene que entiendas la TAE real con esa cuota final incluida.",
        ],
      },
      {
        heading: "Lo que ofrecemos nosotros",
        paragraphs: [
          "Trabajamos con varias entidades financieras especializadas en automoción y comparamos por ti. Nos cuentas tu perfil, te montamos dos o tres opciones razonables y eliges. Sin presión, sin productos vinculados que no necesitas, sin penalizaciones por amortización anticipada. La calculadora de financiación de la web te da una primera aproximación; el precio final, después del estudio, suele ser igual o mejor.",
        ],
      },
    ],
  },
  {
    slug: "itv-distribucion-mantenimiento-calendario-real",
    title:
      "ITV, distribución y mantenimiento: el calendario real de un coche de ocasión",
    excerpt:
      "Los coches de segunda mano viven mejor cuando el calendario se respeta. Te dejamos las fechas y kilometrajes que importan, marca a marca.",
    category: "Mantenimiento",
    readTime: 8,
    publishedAt: "2026-01-22",
    author: "Equipo AutoSelect",
    variant: "calendar",
    keywords: [
      "ITV coche usado",
      "cambio distribución coche",
      "mantenimiento coche segunda mano",
      "calendario revisión coche",
      "intervalo cambio aceite",
    ],
    body: [
      {
        heading: "ITV: cada cuánto y qué mirar antes",
        paragraphs: [
          "En España, la primera ITV de un turismo se realiza a los 4 años de matriculación. A partir de ahí, cada 2 años hasta los 10 años de antigüedad y, después, anualmente. Si compras un coche de segunda mano, comprueba en la pegatina del parabrisas la fecha de la próxima ITV y, si está cerca, plantea pasarla antes de la entrega: descubrirás cualquier imprevisto en el mejor momento posible para negociarlo.",
          "Antes de pasar la ITV, mira: gomas (dibujo mínimo 1,6 mm), reglaje de luces, holguras de dirección, escape sin ruidos atípicos, holguras del cinturón. La mayoría de rechazos en ITV son por causas pequeñas, pero acumuladas pueden suspender la inspección.",
        ],
      },
      {
        heading: "Distribución: la avería que arruina motores",
        paragraphs: [
          "El sistema de distribución sincroniza el cigüeñal con los árboles de levas. Si la correa o cadena fallan, las válvulas chocan con los pistones y la avería se valora en miles de euros. Por eso es la intervención más importante del mantenimiento de un coche de ocasión.",
          "Los intervalos típicos son: PSA-Stellantis (Citroën, Peugeot, Opel, Toyota Aygo) 100.000-150.000 km o 6 años; Renault-Dacia 90.000-150.000 km según motor; Volkswagen-Audi-SEAT-Skoda con cadena no requieren mantenimiento programado pero conviene revisarla a partir de 150.000 km; BMW y Mercedes-Benz casi todos llevan cadena de distribución sin servicio programado; Toyota híbridos llevan cadena con vida útil similar a la del motor; algunos motores 1.0 EcoBoost de Ford requieren correa sumergida en aceite con intervalos cortos (60.000-90.000 km).",
          "Pide siempre la factura del último cambio de distribución. Si no aparece y el kilometraje supera el intervalo, presupuesta la intervención antes de comprar.",
        ],
      },
      {
        heading: "Cambio de aceite y filtros",
        paragraphs: [
          "El intervalo de cambio de aceite varía según motor y aceite específico. Un fabricante puede recomendar 30.000 km en uso normal, pero la vida real es otra: tráfico denso, ralentís largos, recorridos cortos en frío. La regla razonable para un coche de ocasión que ya tiene kilómetros: cambia aceite y filtro cada 15.000 km o una vez al año, lo que llegue antes. El sobrecoste es mínimo y la mecánica te lo agradece.",
          "Filtro de habitáculo cada 20.000 km o cada año (en zonas con polen como Sevilla, mejor anual). Filtro de aire cada 30.000-40.000 km. Filtro de combustible diésel cada 60.000 km, gasolina cada 60.000-80.000 km.",
        ],
      },
      {
        heading: "Líquido de frenos y refrigerante",
        paragraphs: [
          "Líquido de frenos: cada dos años, sin excepciones. Es higroscópico (absorbe humedad) y pierde rendimiento con el tiempo. La intervención cuesta 60-90 € y es básica. Líquido refrigerante: cada cuatro años o 60.000 km como referencia, aunque algunos vehículos llevan refrigerantes de larga duración con intervalos mayores. Si compras un coche con desgaste, comprueba el estado del líquido (color y densidad) y plantea cambiarlo aunque no haya tocado plazo.",
        ],
      },
      {
        heading: "Embrague y caja de cambios",
        paragraphs: [
          "El embrague de un coche manual no tiene un kilometraje fijo: depende mucho del estilo de conducción. Con conductor cuidadoso pueden durar 200.000 km o más; con conductor agresivo o muchos arranques en pendiente, pueden no llegar a 100.000. Un coche con embrague que patina, ruido al pisar el pedal o problemas de engranar marchas es candidato directo a presupuestar la intervención (700-1.500 € según modelo).",
          "Cajas DSG y similares de doble embrague llevan filtro y aceite específico que conviene cambiar cada 60.000 km. Las cajas convertidoras (clásicas automáticas) suelen pedir cambio de aceite a los 60.000-80.000 km a pesar de que algunos fabricantes hablen de 'aceite para toda la vida'. La realidad de la vida útil es siempre distinta.",
        ],
      },
      {
        heading: "Lo que entregamos nosotros",
        paragraphs: [
          "Cualquier coche que sale de AutoSelect tiene la ITV pasada (o programada para el día siguiente a la entrega), aceite y filtros revisados o cambiados, distribución comprobada o sustituida si corresponde, líquido de frenos en plazo y todos los sistemas verificados. El registro de la revisión 150 puntos se entrega firmado por el taller para que sepas exactamente qué se ha tocado y qué tienes por delante en los próximos 12 meses.",
        ],
      },
    ],
  },
  {
    slug: "kilometros-manipulados-cinco-senales",
    title:
      "Cinco señales que delatan un coche con kilómetros manipulados",
    excerpt:
      "El cuentakilómetros se modifica con un dispositivo de 200 €. Detectarlo requiere mirar más allá de la pantalla del cuadro.",
    category: "Detección de fraude",
    readTime: 6,
    publishedAt: "2026-01-08",
    author: "Equipo AutoSelect",
    variant: "odometer",
    keywords: [
      "kilómetros manipulados",
      "cuentakilómetros trucado",
      "fraude coche segunda mano",
      "detectar coche trucado",
      "comprar coche seguro",
    ],
    body: [
      {
        heading: "Por qué sigue ocurriendo",
        paragraphs: [
          "La manipulación del cuentakilómetros es una de las prácticas más persistentes del mercado de ocasión. La razón es económica: por cada 50.000 km que se 'restan' a un coche, su precio puede subir entre 1.500 y 3.500 € según modelo. Con un equipo OBD-II adquirido en cualquier portal por menos de 200 €, una manipulación dura cinco minutos. La buena noticia: detectarla es relativamente fácil si sabes dónde mirar.",
        ],
      },
      {
        heading: "1. Cotejo con el histórico de la ITV",
        paragraphs: [
          "Cada vez que un coche pasa la ITV se registra el kilometraje declarado. Esa información figura en el informe oficial que puedes solicitar online. Si el coche actual marca menos kilómetros que cualquier ITV previa, la manipulación es evidente. Antes de pagar la señal de cualquier vehículo, pide ese informe; el vendedor profesional debería facilitártelo, y si es particular, lo puedes obtener tú mismo.",
        ],
      },
      {
        heading: "2. Estado del volante, palanca y pedalera",
        paragraphs: [
          "Las superficies que tocan las manos y los pies envejecen de forma directamente proporcional al uso. Un volante con la zona de las 10 y las 2 con piel pulida o brillante, un pomo de cambio con la rosca lateral marcada, pedales de freno y embrague con el caucho desgastado y la pintura asomando: estas señales son congruentes con coches por encima de los 150.000-200.000 km.",
          "Si el cuadro marca 60.000 km pero el volante parece haber visto la luz de mil amaneceres, algo no encaja.",
        ],
      },
      {
        heading: "3. Asientos y tapicería",
        paragraphs: [
          "El asiento del conductor recibe entradas y salidas constantes. La banda lateral exterior, los costados de la base y la zona lumbar son las primeras en dar señales: hilos sueltos, hundimientos, costuras tensas. Coches con menos de 100.000 km mantienen las bandas laterales firmes; coches con 200.000 km y más, las suelen tener vencidas.",
          "Mira también la alfombra del lado del conductor: el desgaste por la entrada del talón en el lateral izquierdo es un indicador casi infalible.",
        ],
      },
      {
        heading: "4. Estado mecánico interno",
        paragraphs: [
          "Algunos elementos delatan kilometraje real con independencia del cuadro: el estado de la cadena de distribución (visible al destapar la culata en marcas como BMW, donde un tensor estirado canta los 200.000 km), holgura de árboles de transmisión, ruidos de cojinetes en el alternador o la bomba de agua, juego en rótulas de dirección. Un mecánico de confianza identifica estas señales en una inspección de quince minutos.",
        ],
      },
      {
        heading: "5. Servicios mostrados en módulos electrónicos",
        paragraphs: [
          "Al manipular el cuentakilómetros del cuadro, los kilometrajes guardados en otros módulos electrónicos del coche (centralita de motor, ABS, gestión de transmisión) no siempre se actualizan a la vez. Un equipo de diagnóstico profesional lee los kilómetros de cada módulo. Si la centralita de motor marca 220.000 km y el cuadro marca 90.000, no necesitas más pruebas.",
          "Servicios postventa de marca pueden facilitar el histórico oficial del coche introduciendo el VIN. Las marcas premium (BMW, Audi, Mercedes-Benz) tienen registros de mantenimiento centralizados y revisar el VIN en la red oficial es una salvaguardia adicional.",
        ],
      },
      {
        heading: "Cómo lo cubrimos en la revisión 150 puntos",
        paragraphs: [
          "El protocolo que aplicamos en cada coche que entra a nuestro inventario incluye específicamente este cotejo: kilometraje del cuadro, kilometraje OBD de todos los módulos accesibles y kilometraje del histórico oficial de ITV. Si los tres no concuerdan, el coche no entra a la venta. Es una de las razones por las que descartamos siete de cada diez coches que se nos ofrecen para tasación.",
        ],
      },
    ],
  },
];

export function getPostBySlug(slug: string) {
  return posts.find((p) => p.slug === slug) ?? null;
}

export function getRelatedPosts(slug: string, limit = 3) {
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];
  return posts
    .filter((p) => p.slug !== slug)
    .sort((a, b) => {
      const sameCat = (p: typeof a) => (p.category === current.category ? 0 : 1);
      return sameCat(a) - sameCat(b);
    })
    .slice(0, limit);
}
