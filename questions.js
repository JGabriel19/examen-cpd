const questions = [
  {
    question: "¿Qué función principal cumple el chipset en la placa madre?",
    options: [
      "Almacenar datos del sistema operativo",
      "Regular la velocidad del ventilador",
      "Gestionar la comunicación entre CPU, RAM y dispositivos",
      "Proteger el procesador del sobrecalentamiento",
    ],
    answer: 2,
  },
  {
    question: "¿Qué diferencia principal existe entre BIOS y UEFI?",
    options: [
      "BIOS permite interfaces gráficas, UEFI no",
      "UEFI soporta discos mayores a 2TB, BIOS no",
      "BIOS es más moderna que UEFI",
      "UEFI solo funciona en sistemas de 32 bits",
    ],
    answer: 1,
  },
  {
    question:
      "¿Cuál es el componente encargado de ejecutar las instrucciones del sistema?",
    options: ["Chipset", "CPU", "RAM", "GPU"],
    answer: 1,
  },
  {
    question: "La memoria caché del procesador se utiliza para:",
    options: [
      "Guardar permanentemente archivos del usuario",
      "Acelerar el acceso a datos e instrucciones frecuentes",
      "Ampliar la capacidad de la RAM",
      "Proteger el sistema ante fallos de energía",
    ],
    answer: 1,
  },
  {
    question:
      "¿Qué tecnología permite que un procesador ejecute múltiples hilos por núcleo?",
    options: ["Dual Channel", "Hyper-Threading", "Turbo Boost", "ECC"],
    answer: 1,
  },
  {
    question:
      "¿Qué parámetro es más importante al evaluar el rendimiento de una tarjeta de video?",
    options: [
      "Capacidad de almacenamiento",
      "Frecuencia de reloj y número de núcleos CUDA o Stream",
      "Voltaje de alimentación",
      "Tipo de conector HDMI",
    ],
    answer: 1,
  },
  {
    question: "¿Qué tipo de memoria utiliza principalmente una GPU moderna?",
    options: ["DDR3", "DDR4", "GDDR6", "LPDDR5"],
    answer: 2,
  },
  {
    question:
      "¿Qué componente es más crítico para mantener una buena temperatura en el CPU?",
    options: [
      "Disipador térmico y ventilador",
      "Fuente de poder",
      "Tarjeta de sonido",
      "Chipset",
    ],
    answer: 0,
  },
  {
    question: "¿Qué ocurre si la memoria RAM tiene una latencia más alta?",
    options: [
      "Mayor velocidad de transferencia",
      "Menor consumo energético",
      "Menor rendimiento en acceso a datos",
      "No afecta el rendimiento general",
    ],
    answer: 2,
  },
  {
    question: "¿Cuál de las siguientes memorias es volátil?",
    options: ["ROM", "SSD", "RAM", "HDD"],
    answer: 2,
  },
  {
    question:
      "¿Qué unidad de medida se usa para expresar la velocidad de un procesador?",
    options: ["GHz", "MB/s", "V", "°C"],
    answer: 0,
  },
  {
    question: "¿Cuál es una ventaja de los SSD sobre los HDD?",
    options: [
      "Mayor capacidad por menor precio",
      "Mayor velocidad de lectura y escritura",
      "Mayor resistencia a temperatura",
      "Mayor capacidad de recuperación de datos",
    ],
    answer: 1,
  },
  {
    question: "¿Qué formato de unidad es más común en laptops modernas?",
    options: ["M.2 NVMe", "IDE", "SATA III 3.5”", "SCSI"],
    answer: 0,
  },
  {
    question: "¿Qué sucede si la fuente de poder (PSU) es insuficiente?",
    options: [
      "Aumenta el rendimiento del CPU",
      "Se apaga o reinicia el sistema bajo carga",
      "Mejora la estabilidad de la GPU",
      "No afecta al hardware",
    ],
    answer: 1,
  },
  {
    question:
      "¿Qué característica define la eficiencia de una fuente de poder certificada 80 Plus?",
    options: [
      "Menor ruido del ventilador",
      "Mayor tiempo de vida útil",
      "Menor pérdida de energía en calor",
      "Voltaje variable",
    ],
    answer: 2,
  },
  {
    question:
      "¿Cuál de los siguientes no es un conector de energía para la placa madre?",
    options: ["ATX 24 pines", "EPS 8 pines", "PCIe 6/8 pines", "SATA Data"],
    answer: 3,
  },
  {
    question:
      "¿Qué función cumple la pasta térmica en el sistema de refrigeración?",
    options: [
      "Evitar la condensación en el CPU",
      "Reducir la fricción del ventilador",
      "Mejorar la transferencia de calor entre CPU y disipador",
      "Enfriar directamente la fuente de poder",
    ],
    answer: 2,
  },
  {
    question: "¿Qué tipo de almacenamiento utiliza celdas NAND?",
    options: ["HDD", "SSD", "DVD", "RAM"],
    answer: 1,
  },
  {
    question:
      "¿Qué componente se encarga de transformar corriente alterna en continua?",
    options: [
      "GPU",
      "Fuente de poder (PSU)",
      "Placa madre",
      "Refrigerador líquido",
    ],
    answer: 1,
  },
  {
    question: "¿Qué componente suele tener un VRM integrado?",
    options: ["Placa madre", "SSD", "Memoria RAM", "Tarjeta de red"],
    answer: 0,
  },
];
