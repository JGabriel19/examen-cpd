const questions = [
  {
    question:
      "¿Qué unidad de almacenamiento tiene partes mecánicas en movimiento?",
    options: ["SSD", "NVMe", "HDD", "eMMC"],
    answer: 2,
  },
  {
    question:
      "¿Qué componente controla el arranque inicial del sistema antes de cargar el sistema operativo?",
    options: ["Chipset", "BIOS o UEFI", "Controlador SATA", "VRM"],
    answer: 1,
  },
  {
    question:
      "¿Qué característica de la RAM indica cuántos datos puede transferir por ciclo?",
    options: ["Frecuencia", "Latencia", "Canal", "Ancho de banda"],
    answer: 3,
  },
  {
    question:
      "¿Qué tipo de memoria mantiene los datos incluso cuando el equipo está apagado?",
    options: ["RAM", "Cache L1", "ROM", "Registro del CPU"],
    answer: 2,
  },
  {
    question: "¿Cuál es la función del VRM en la placa madre?",
    options: [
      "Controlar la velocidad del ventilador",
      "Regular el voltaje que llega al procesador",
      "Aumentar la capacidad de la memoria RAM",
      "Gestionar la transferencia de datos USB",
    ],
    answer: 1,
  },
  {
    question:
      "¿Qué tipo de ranura se utiliza comúnmente para instalar tarjetas gráficas?",
    options: ["AGP", "PCI Express x16", "ISA", "SATA"],
    answer: 1,
  },
  {
    question:
      "¿Qué parámetro de la RAM influye directamente en la velocidad de respuesta?",
    options: ["Latencia (CL)", "Voltaje", "Tamaño físico", "Color del módulo"],
    answer: 0,
  },
  {
    question:
      "¿Qué sucede si el sistema no reconoce el dispositivo de arranque?",
    options: [
      "El sistema se reinicia automáticamente",
      "El BIOS/UEFI muestra un error de ‘Boot Device not found’",
      "El procesador deja de funcionar",
      "La fuente de poder se apaga",
    ],
    answer: 1,
  },
  {
    question: "¿Cuál es la función del bus de datos?",
    options: [
      "Proteger el sistema ante sobretensiones",
      "Transportar la información entre los componentes",
      "Regular la energía del CPU",
      "Refrigerar los circuitos eléctricos",
    ],
    answer: 1,
  },
  {
    question: "¿Qué significa que una memoria RAM funcione en 'Dual Channel'?",
    options: [
      "Usa dos tipos diferentes de módulos RAM",
      "Duplica la capacidad máxima de la placa madre",
      "Permite que dos módulos trabajen en paralelo aumentando el ancho de banda",
      "Evita el sobrecalentamiento del procesador",
    ],
    answer: 2,
  },
  {
    question: "¿Qué parte del CPU ejecuta operaciones aritméticas y lógicas?",
    options: ["Unidad de control", "ALU", "Cache", "BIOS"],
    answer: 1,
  },
  {
    question: "¿Cuál es la principal función del disipador térmico?",
    options: [
      "Aumentar el voltaje del procesador",
      "Reducir la temperatura del CPU o GPU",
      "Almacenar energía eléctrica",
      "Controlar el flujo de datos",
    ],
    answer: 1,
  },
  {
    question: "¿Qué tipo de conector se utiliza para discos SSD SATA?",
    options: ["M.2", "SATA Data y SATA Power", "PCI Express", "USB 3.2"],
    answer: 1,
  },
  {
    question:
      "¿Qué significa la certificación 80 Plus Gold en una fuente de poder?",
    options: [
      "Que es compatible con energía solar",
      "Que ofrece al menos 87% de eficiencia energética",
      "Que puede alimentar tres GPUs a la vez",
      "Que funciona únicamente a 220V",
    ],
    answer: 1,
  },
  {
    question:
      "¿Qué tipo de memoria almacena instrucciones que no deben modificarse?",
    options: ["RAM", "ROM", "Cache", "DRAM"],
    answer: 1,
  },
  {
    question: "¿Qué mejora ofrece la tecnología NVMe frente a SATA en SSDs?",
    options: [
      "Menor tamaño físico",
      "Mayor velocidad de transferencia al usar PCIe",
      "Mayor compatibilidad con discos antiguos",
      "Mejor resistencia al calor",
    ],
    answer: 1,
  },
  {
    question: "¿Qué ocurre si el procesador alcanza temperaturas excesivas?",
    options: [
      "El sistema entra en modo de protección o se apaga automáticamente",
      "Aumenta su rendimiento temporalmente",
      "Se reinicia el BIOS automáticamente",
      "El ventilador deja de girar",
    ],
    answer: 0,
  },
  {
    question:
      "¿Qué componente determina la compatibilidad del procesador en una placa madre?",
    options: ["Socket del CPU", "Tipo de RAM", "Fuente de poder", "BIOS"],
    answer: 0,
  },
  {
    question: "¿Cuál es el propósito principal del bus PCIe?",
    options: [
      "Conectar dispositivos de almacenamiento antiguos",
      "Proporcionar energía a los ventiladores",
      "Conectar dispositivos de alta velocidad como GPU o SSD NVMe",
      "Permitir comunicación inalámbrica",
    ],
    answer: 2,
  },
  {
    question:
      "¿Qué tipo de mantenimiento ayuda a prolongar la vida útil del hardware?",
    options: [
      "Eliminar el polvo y revisar las temperaturas regularmente",
      "Reiniciar el sistema cada hora",
      "Usar voltajes superiores para mayor rendimiento",
      "Desactivar los ventiladores cuando no se usen",
    ],
    answer: 0,
  },
];
