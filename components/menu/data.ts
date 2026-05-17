import { Microscope, FlaskConical, Thermometer, Compass, Calculator, Ruler, Activity, Beaker, Biohazard, Dna, Droplet, Droplets, Flame, Gauge, Layers, Magnet, MicroscopeIcon, Pipette, Scale, Stethoscope, Syringe, TestTube, TestTubes, Wind, Atom, Brain, Heart, Leaf, RotateCcw, Apple, Box, Zap } from "lucide-react";
import React from "react";

export interface ItemData {
  id: string;
  name: string;
  scientificName?: string;
  subtitle: string;
  category: string;
  group: string;
  icon: React.ReactNode;
  image: string;
  emoji: string;
  details: {
    [key: string]: string;
  };
  quiz?: {
    question: string;
    options: string[];
    answer: number;
  };
  controls?: {
    label: string;
    unit: string;
    min: number;
    max: number;
    defaultValue: number;
  }[];
  history?: {
    user: string;
    date: string;
    action: string;
  }[];
  learningContent?: {
    steps: string[];
    tips: string[];
    fact: string;
    principle: string;
  };
  glbPath?: string;
  whatIsIt?: string;
  howItWorksTitle?: string;
  howItWorks?: string;
  whatIsItFor?: {
    text: string;
    uses: { label: string; icon: string }[];
  };
  educationalFact?: string;
  additionalInfo?: {
    [key: string]: string;
  };
}

const instruments: ItemData[] = [
  {
    id: "autoclave",
    name: "Autoclave",
    group: "Esterilización",
    subtitle: "Esterilización por vapor",
    category: "Instrumentos",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Autoclave.png",
    glbPath: "/modelos-3D/instrumentos/autoclave.glb",
    emoji: "",
    details: {
      "Método de esterilización": "Vapor saturado a presión (calor húmedo)",
      "Temperatura de operación": "121-134 °C",
      "Presión de trabajo": "15-30 psi",
      "Tiempo de ciclo": "20-60 min",
      "Capacidad": "20 Litros",
      "Uso recomendado": "Esterilización de material, medios de cultivo y vidrio de laboratorio."
    },
    learningContent: {
      steps: ["Verificar nivel de agua", "Cargar material", "Cerrar y programar"],
      tips: ["No abrir hasta despresurizar", "Usar guantes térmicos"],
      fact: "El vapor es más efectivo que el calor seco.",
      principle: "Desnaturalización de proteínas por calor húmedo."
    },
    whatIsIt: "El autoclave es un instrumento que utiliza vapor de agua a alta presión y temperatura para eliminar microorganismos presentes en materiales, equipos y medios de cultivo.",
    howItWorksTitle: "¿CÓMO FUNCIONA?",
    howItWorks: "El autoclave genera vapor de agua que se introduce en la cámara sellada. La combinación de alta temperatura y presión permite que el vapor penetre en los materiales y destruya microorganismos mediante la desnaturalización de sus proteínas y componentes celulares.",
    whatIsItFor: {
      text: "Se utiliza para esterilizar materiales y equipos que pueden resistir altas temperaturas y humedad. Es esencial en procesos donde se requiere eliminar microorganismos para garantizar condiciones adecuadas de trabajo e investigación.",
      uses: [
        { label: "Laboratorios clínicos", icon: "flask" },
        { label: "Investigación científica", icon: "microscope" },
        { label: "Industria farmacéutica", icon: "pill" },
        { label: "Instituciones educativas", icon: "graduation" }
      ]
    },
    educationalFact: "El vapor a presión es capaz de eliminar esporas bacterianas, que son estructuras muy resistentes y no se destruyen con métodos de esterilización convencionales como el calor seco.",
    additionalInfo: {
      "Categoría": "Instrumento de esterilización",
      "Tipo de laboratorio": "Microbiología, Química, Clínico",
      "Nivel de precisión": "Alta",
      "Mantenimiento": "Requiere inspección periódica"
    }
  },
  {
    id: "calefactora",
    name: "Calefactora",
    group: "Calentamiento",
    subtitle: "Placa de agitación térmica",
    category: "Instrumentos",
    icon: React.createElement(Thermometer, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Calefactora.png",
    glbPath: "/modelos-3D/instrumentos/placa_calefactora.glb",
    emoji: "",
    details: {
      "Temp Max": "350 °C",
      "Placa": "Cerámica",
      "Control": "Digital",
      "Uso": "Calentamiento de soluciones",
      "Voltaje": "110/220V",
      "Estado": "Operativo"
    },
    learningContent: {
      steps: ["Conectar a la red", "Colocar recipiente", "Ajustar temperatura"],
      tips: ["No tocar la placa caliente", "Limpiar derrames de inmediato"],
      fact: "Algunas incluyen agitación magnética.",
      principle: "Transferencia de calor por conducción."
    },
    whatIsIt: "La calefactora o plancha de calentamiento es un instrumento de laboratorio diseñado para aplicar calor de forma controlada a soluciones y materiales. Muchos modelos integran agitación magnética, lo que permite mezclar y calentar simultáneamente.",
    howItWorksTitle: "¿CÓMO FUNCIONA?",
    howItWorks: "Convierte energía eléctrica en calor mediante resistencias internas. La temperatura se regula por un control digital o analógico que ajusta la corriente. Cuando incorpora agitación, un campo magnético rotatorio mueve una barra magnética colocada dentro del recipiente.",
    whatIsItFor: {
      text: "Se usa para calentar reactivos, disolver sustancias, mantener temperaturas constantes y realizar reacciones químicas que requieren calor controlado.",
      uses: [
        { label: "Síntesis química", icon: "flask" },
        { label: "Disolución de sólidos", icon: "droplets" },
        { label: "Reacciones con calor", icon: "thermometer" },
        { label: "Agitación de mezclas", icon: "settings" }
      ]
    },
    educationalFact: "Las planchas de calentamiento con agitación magnética eliminan la necesidad de agitadores mecánicos, reduciendo la contaminación y aumentando la reproducibilidad de los experimentos.",
    additionalInfo: {
      "Categoría": "Instrumento de calentamiento",
      "Tipo de laboratorio": "Química, Biología, Farmacia",
      "Nivel de precisión": "Alta (±1°C)",
      "Mantenimiento": "Limpieza periódica de la placa"
    }
  },
  {
    id: "gradilla",
    name: "Gradilla",
    group: "Soporte",
    subtitle: "Soporte para tubos de ensayo",
    category: "Instrumentos",
    icon: React.createElement(Layers, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Gradilla.png",
    glbPath: "/modelos-3D/instrumentos/gradilla.glb",
    emoji: "",
    details: {
      "Capacidad": "24 tubos",
      "Material": "Polipropileno",
      "Tipo": "Apilable",
      "Resistencia": "Autoclavable",
      "Uso": "Soporte de tubos de ensayo",
      "Estado": "Nuevo"
    },
    learningContent: {
      steps: ["Colocar en superficie plana", "Insertar tubos", "Organizar por códigos"],
      tips: ["Evitar sobrecarga", "Lavar después de usar"],
      fact: "Existen de metal, madera y plástico.",
      principle: "Organización y seguridad en el manejo de muestras."
    },
    whatIsIt: "La gradilla es un soporte de laboratorio utilizado para sostener tubos de ensayo de forma vertical y ordenada. Está fabricada en materiales resistentes como polipropileno, acero inoxidable o madera, y es indispensable para mantener el orden durante experimentos.",
    howItWorksTitle: "¿CÓMO FUNCIONA?",
    howItWorks: "Su estructura cuenta con orificios calibrados de diámetro estándar (usualmente 16 mm) en los que encajan los tubos de ensayo. El diseño garantiza estabilidad para evitar que los tubos se inclinen o caigan durante la manipulación de muestras.",
    whatIsItFor: {
      text: "Permite organizar y mantener seguros múltiples tubos de ensayo durante preparaciones, reacciones y análisis en el laboratorio.",
      uses: [
        { label: "Organización de muestras", icon: "box" },
        { label: "Análisis clínicos", icon: "microscope" },
        { label: "Reacciones en serie", icon: "flask" },
        { label: "Almacenamiento temporal", icon: "settings" }
      ]
    },
    educationalFact: "En algunos laboratorios de alta throughput, se usan gradillas automatizadas que transportan los tubos por rieles para procesamiento robótico de muestras.",
    additionalInfo: {
      "Categoría": "Instrumento de soporte",
      "Tipo de laboratorio": "Clínico, Microbiología, Química",
      "Capacidad típica": "12 a 30 tubos",
      "Materiales comunes": "Polipropileno, acero, madera"
    }
  },
  {
    id: "incubadora",
    name: "Incubadora",
    group: "Cultivo",
    subtitle: "Crecimiento microbiológico",
    category: "Instrumentos",
    icon: React.createElement(Activity, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Incubadora.png",
    glbPath: "/modelos-3D/instrumentos/incubadora.glb",
    emoji: "",
    details: {
      "Rango Temp": "Ambiente a 70°C",
      "Precisión": "±0.5°C",
      "Capacidad": "50 Litros",
      "Uso": "Cultivo microbiológico",
      "Control": "PID Microprocesado",
      "Estado": "En uso"
    },
    learningContent: {
      steps: ["Precalentar equipo", "Introducir muestras", "Cerrar puerta hermética"],
      tips: ["No abrir innecesariamente", "Monitorear temperatura"],
      fact: "La mayoría se ajustan a 37°C (temp. corporal).",
      principle: "Ambiente controlado para crecimiento celular."
    },
    whatIsIt: "La incubadora de laboratorio es un equipo diseñado para mantener condiciones controladas de temperatura, humedad y en algunos casos CO₂, creando un ambiente óptimo para el crecimiento de microorganismos, células y tejidos vivos.",
    howItWorksTitle: "¿CÓMO FUNCIONA?",
    howItWorks: "Utiliza resistencias eléctricas y un sistema de ventilación interno para distribuir el calor de manera uniforme. Un termostato de precisión (control PID) regula la temperatura para mantenerla constante dentro de ±0.5°C. Las incubadoras de CO₂ inyectan gas para simular condiciones fisiológicas.",
    whatIsItFor: {
      text: "Es fundamental para cultivar bacterias, hongos, células eucariotas y realizar ensayos de incubación a temperatura fisiológica o ambiental controlada.",
      uses: [
        { label: "Cultivo bacteriano", icon: "flask" },
        { label: "Cultivo celular", icon: "dna" },
        { label: "Ensayos enzimáticos", icon: "atom" },
        { label: "Investigación médica", icon: "microscope" }
      ]
    },
    educationalFact: "Las incubadoras de CO₂ mantienen el pH del medio de cultivo celular al controlar la concentración de dióxido de carbono (normalmente al 5%), imitando las condiciones del organismo vivo.",
    additionalInfo: {
      "Categoría": "Instrumento de cultivo",
      "Tipo de laboratorio": "Microbiología, Biología celular, Clínico",
      "Temperatura estándar": "37°C (humano), 28°C (hongos)",
      "Mantenimiento": "Descontaminación periódica del interior"
    }
  },
  {
    id: "matraz",
    name: "Matraz",
    group: "Volumetría",
    subtitle: "Mezcla de soluciones químicas",
    category: "Instrumentos",
    icon: React.createElement(Beaker, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Matraz.png",
    glbPath: "/modelos-3D/instrumentos/matraz.glb",
    emoji: "",
    details: {
      "Volumen": "250 mL",
      "Tipo": "Erlenmeyer",
      "Material": "Borosilicato 3.3",
      "Uso": "Mezcla de soluciones",
      "Boca": "Angosta",
      "Estado": "Limpio"
    },
    learningContent: {
      steps: ["Lavar con agua destilada", "Verter líquido", "Agitar circularmente"],
      tips: ["No calentar bruscamente", "Usar tapón adecuado"],
      fact: "Su forma evita salpicaduras al agitar.",
      principle: "Contencción y mezcla de reactivos químicos."
    },
    whatIsIt: "El matraz Erlenmeyer es un recipiente de vidrio borosilicato con base cónica, cuerpo cónico y cuello cilíndrico estrecho. Es uno de los instrumentos más versátiles del laboratorio químico, ampliamente usado para mezclar, calentar y almacenar soluciones.",
    howItWorksTitle: "¿CÓMO SE UTILIZA?",
    howItWorks: "Su cuello estrecho minimiza la evaporación y las salpicaduras al agitar. El vidrio borosilicato 3.3 soporta cambios bruscos de temperatura sin romperse. Puede usarse directamente sobre la llama o la plancha de calentamiento, y sellarse con tapones de hule o algodón.",
    whatIsItFor: {
      text: "Ideal para preparar y mezclar soluciones químicas, llevar a cabo titulaciones, cultivar microorganismos en medios líquidos y almacenar reactivos de forma segura.",
      uses: [
        { label: "Titulaciones", icon: "droplets" },
        { label: "Cultivo en medio líquido", icon: "flask" },
        { label: "Mezcla de reactivos", icon: "settings" },
        { label: "Almacenamiento temporal", icon: "box" }
      ]
    },
    educationalFact: "El matraz fue diseñado en 1861 por el químico alemán Richard Erlenmeyer. Su forma cónica es perfecta para agitación circular sin derrames, una técnica esencial en las titulaciones.",
    additionalInfo: {
      "Categoría": "Instrumento de volumetría",
      "Tipo de laboratorio": "Química, Microbiología, Farmacia",
      "Tolerancia de temperatura": "Hasta 500°C (boro 3.3)",
      "Mantenimiento": "Lavar con agua destilada y secar invertido"
    }
  },
  {
    id: "microscopio",
    name: "Microscopio",
    group: "Óptico",
    subtitle: "Análisis de muestras celulares",
    category: "Instrumentos",
    icon: React.createElement(Microscope, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Microscopio.png",
    glbPath: "/modelos-3D/instrumentos/microscopio.glb",
    emoji: "",
    details: {
      "Tipo": "Binocular",
      "Aumento Max": "1000x",
      "Iluminación": "LED",
      "Uso": "Observación de muestras",
      "Objetivos": "4x, 10x, 40x, 100x",
      "Estado": "Calibrado"
    },
    learningContent: {
      steps: ["Enchufar y encender", "Colocar portaobjetos", "Enfocar con 4x"],
      tips: ["Limpiar lentes con papel seda", "Bajar platina al terminar"],
      fact: "Permite ver estructuras invisibles al ojo humano.",
      principle: "Magnificación mediante refracción de luz."
    },
    whatIsIt: "El microscopio óptico binocular es un instrumento de precisión que utiliza lentes de vidrio y luz visible para magnificar estructuras biológicas y materiales a nivel microscópico. Permite observar células, bacterias y tejidos con gran detalle.",
    howItWorksTitle: "¿CÓMO FUNCIONA?",
    howItWorks: "La luz (LED o halógena) pasa a través del condensador y la muestra en el portaobjetos. Las lentes objetivo (4x-100x) y el ocular (10x) forman una imagen ampliada real. El enfoque fino y grueso ajusta la distancia entre la lente y la muestra para obtener nitidez óptima.",
    whatIsItFor: {
      text: "Fundamental en biología y medicina para observar y analizar células, tejidos, microorganismos y estructuras que no son visibles a simple vista.",
      uses: [
        { label: "Análisis celular", icon: "dna" },
        { label: "Microbiología", icon: "flask" },
        { label: "Histología", icon: "microscope" },
        { label: "Diagnóstico clínico", icon: "atom" }
      ]
    },
    educationalFact: "Con el objetivo de 100x y aceite de inmersión, el microscopio óptico puede alcanzar un poder de resolución de hasta 0.2 micrómetros, suficiente para distinguir bacterias individuales.",
    additionalInfo: {
      "Categoría": "Instrumento óptico de precisión",
      "Tipo de laboratorio": "Biología, Medicina, Microbiología",
      "Aumento total máximo": "1000x (100x obj. × 10x ocular)",
      "Mantenimiento": "Limpiar lentes con papel de seda y guardar cubierto"
    }
  },
  {
    id: "mortero",
    name: "Mortero",
    group: "Molienda",
    subtitle: "Trituración de sólidos",
    category: "Instrumentos",
    icon: React.createElement(Box, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Mortero.png",
    glbPath: "/modelos-3D/instrumentos/mortero_con_mano.glb",
    emoji: "",
    details: {
      "Material": "Porcelana",
      "Diámetro": "100 mm",
      "Incluye": "Mazo (Pistilo)",
      "Uso": "Trituración de sólidos",
      "Acabado": "Interior rugoso",
      "Estado": "Disponible"
    },
    learningContent: {
      steps: ["Colocar sólido", "Presionar y rotar mazo", "Recolectar polvo"],
      tips: ["No golpear fuerte", "Limpiar bien las grietas"],
      fact: "Se usa desde la prehistoria para moler.",
      principle: "Reducción de tamaño por fuerza mecánica."
    },
    whatIsIt: "El mortero de laboratorio es un recipiente cóncavo fabricado en porcelana, ágata o vidrio, que se usa junto con el pistilo (mazo) para triturar, pulverizar y mezclar sustancias sólidas hasta obtener un polvo fino y homogéneo.",
    howItWorksTitle: "¿CÓMO FUNCIONA?",
    howItWorks: "El pistilo se aplica sobre la muestra con movimientos circulares y de compresión, friccionando las partículas contra la superficie interna rugosa del mortero. La acción mecánica repite reduce progresivamente el tamaño de las partículas hasta obtener un polvo fino.",
    whatIsItFor: {
      text: "Se usa para pulverizar muestras sólidas, mezclar reactivos en seco y preparar muestras para análisis químicos, farmacéuticos o microscopia.",
      uses: [
        { label: "Pulverización de reactivos", icon: "settings" },
        { label: "Preparación de muestras", icon: "flask" },
        { label: "Farmacología", icon: "scale" },
        { label: "Mezcla en seco", icon: "box" }
      ]
    },
    educationalFact: "El mortero de ágata es el más preciso para análisis espectrales, ya que no introduce impurezas metabólicas ni contamina con minerales extraños a la muestra.",
    additionalInfo: {
      "Categoría": "Instrumento de molienda",
      "Tipo de laboratorio": "Química, Farmacia, Geología",
      "Materiales disponibles": "Porcelana, ágata, vidrio, acero",
      "Mantenimiento": "Lavar con agua destilada y secar al aire"
    }
  },
  {
    id: "placa",
    name: "Placa de Petri",
    group: "Cultivo",
    subtitle: "Cultivo de microorganismos",
    category: "Instrumentos",
    icon: React.createElement(Box, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/instrumentos/Placa.png",
    glbPath: "/modelos-3D/instrumentos/placas_de_porcelana.glb",
    emoji: "",
    details: {
      "Material": "Vidrio/Plástico",
      "Diámetro": "90 mm",
      "Uso": "Cultivo de microorganismos",
      "Esterilidad": "Si (Desechable)",
      "Tapa": "Incluida",
      "Estado": "Estéril"
    },
    learningContent: {
      steps: ["Preparar agar", "Verter en condiciones estériles", "Inocular muestra"],
      tips: ["Trabajar cerca del mechero", "Invertir para incubar"],
      fact: "Lleva el nombre del bacteriólogo Julius Petri.",
      principle: "Superficie de crecimiento para colonias aisladas."
    },
    whatIsIt: "La placa de Petri es un recipiente circular plano de vidrio o plástico con tapa, utilizado en microbiología para cultivar microorganismos en medio sólido (agar). Es uno de los instrumentos más icónicos y fundamentales del laboratorio biológico.",
    howItWorksTitle: "¿CÓMO FUNCIONA?",
    howItWorks: "El medio de cultivo (agar) se vierte estérilmente en la placa y se deja solidificar. La muestra se inocula con un asa bacteriológica mediante técnica de estría o por extensión con espátula Drigalski. Las placas se invierten e incuban para promover el crecimiento de colonias visibles.",
    whatIsItFor: {
      text: "Esencial para aislar, identificar y cuantificar microorganismos. También se usa en pruebas de antibiograma para determinar sensibilidad a antibióticos.",
      uses: [
        { label: "Cultivo microbiano", icon: "flask" },
        { label: "Antibiograma", icon: "settings" },
        { label: "Diagnóstico clínico", icon: "microscope" },
        { label: "Investigación biológica", icon: "dna" }
      ]
    },
    educationalFact: "Julius Richard Petri inventó la placa que lleva su nombre en 1887 mientras trabajaba como asistente de Robert Koch. Esta simple innovación transformó permanentemente la microbiología moderna.",
    additionalInfo: {
      "Categoría": "Instrumento de cultivo microbiano",
      "Tipo de laboratorio": "Microbiología, Clínico, Ambiental",
      "Estériles desechables": "Sí (empaque individual)",
      "Mantenimiento": "Desechar tras uso o autoclavar si es vidrio"
    }
  }
];

const molecules: ItemData[] = [
  {
    id: "acido-lactico",
    name: "Acido Láctico",
    scientificName: "C3H6O3",
    subtitle: "C₃H₆O₃",
    group: "Orgánica",
    category: "Moléculas",
    icon: React.createElement(Droplet, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/AcidoLáctico.png",
    glbPath: "/modelos-3D/moleculas/acido%20láctico.glb",
    emoji: "",
    details: {
      "Fórmula química": "C3H6O3",
      "Masa molar": "90.08 g/mol",
      "Estado físico": "Líquido incoloro",
      "Densidad": "1.21 g/cm³",
      "Punto de fusión": "16.8 °C",
      "Punto de ebullición": "122 °C",
      "Pureza típica": "≥ 99%"
    },
    whatIsIt: "El ácido láctico es un compuesto orgánico con la fórmula C3H6O3. Juega un papel fundamental en diversos procesos bioquímicos, como la fermentación láctica y el metabolismo energético muscular.",
    howItWorksTitle: "¿CÓMO SE FORMA?",
    howItWorks: "Se produce principalmente por la fermentación de azúcares por acción de bacterias lácticas. También puede generarse en los músculos humanos durante ejercicios intensos cuando el oxígeno disponible es limitado.",
    whatIsItFor: {
      text: "Tiene múltiples aplicaciones en diferentes áreas debido a sus propiedades químicas y biológicas.",
      uses: [
        { label: "Industria alimentaria", icon: "apple" },
        { label: "Cosmética", icon: "droplet" },
        { label: "Biotecnología", icon: "dna" },
        { label: "Investigación científica", icon: "microscope" }
      ]
    },
    educationalFact: "El ácido láctico es responsable de la acidez en productos lácteos fermentados como el yogur y también participa en la conservación natural de alimentos.",
    additionalInfo: {
      "Tipo de compuesto": "Ácido carboxílico",
      "Grupo funcional": "Carboxilo (-COOH) e hidroxilo (-OH)",
      "Familia química": "Ácidos orgánicos",
      "Isómero óptico": "D y L (enantiómeros)"
    }
  },
  {
    id: "agua",
    name: "Agua",
    scientificName: "H2O",
    subtitle: "H₂O",
    group: "Inorgánica",
    category: "Moléculas",
    icon: React.createElement(Droplets, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Agua.png",
    glbPath: "/modelos-3D/moleculas/agua.glb",
    emoji: "",
    details: {
      "Fórmula": "H2O",
      "Masa Molar": "18.015 g/mol",
      "Densidad": "1.0 g/cm³",
      "Punto Fusión": "0 °C",
      "Punto Eb.": "100 °C",
      "Polaridad": "Muy polar"
    },
    whatIsIt: "El agua (H₂O) es la molécula más abundante en los seres vivos y en la Tierra. Es un compuesto inorgánico polar formado por dos átomos de hidrógeno y uno de oxígeno, con propiedades únicas que la hacen indispensable para toda forma de vida conocida.",
    howItWorksTitle: "¿QUÉ LA HACE ESPECIAL?",
    howItWorks: "Gracias a su polaridad y los puentes de hidrógeno, el agua tiene alta tensión superficial, alto calor específico y es el disolvente universal. Estas propiedades le permiten transportar nutrientes, regular temperatura y participar en reacciones bioquímicas.",
    whatIsItFor: {
      text: "Esencial en todos los procesos biológicos y ampliamente utilizada como disolvente universal en química, análisis y producción industrial.",
      uses: [
        { label: "Disolvente universal", icon: "droplets" },
        { label: "Regulación térmica", icon: "thermometer" },
        { label: "Reacciones biológicas", icon: "dna" },
        { label: "Industria farmacéutica", icon: "flask" }
      ]
    },
    educationalFact: "El agua es el único compuesto natural que existe en estado sólido, líquido y gaseoso dentro del rango de temperaturas de la superficie terrestre. Esta propiedad es fundamental para el clima del planeta.",
    additionalInfo: {
      "Tipo de compuesto": "Óxido de hidrógeno",
      "Geometría molecular": "Angular (104.5°)",
      "pH a 25°C": "7.0 (neutro)",
      "Familia química": "Compuesto inorgánico"
    }
  },
  {
    id: "benceno",
    name: "Benceno",
    scientificName: "C6H6",
    subtitle: "C₆H₆",
    group: "Aromática",
    category: "Moléculas",
    icon: React.createElement(Atom, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Benceno.png",
    glbPath: "/modelos-3D/moleculas/benceno%20.glb",
    emoji: "",
    details: {
      "Fórmula": "C6H6",
      "Masa Molar": "78.11 g/mol",
      "Estructura": "Anillo hexagonal",
      "Estado": "Líquido incoloro",
      "Olor": "Dulce característico",
      "Toxicidad": "Alta / Cancerígeno"
    },
    whatIsIt: "El benceno (C₆H₆) es un hidrocarburo aromático cíclico con una estructura hexagonal de dobles enlaces deslocaliza dos (resonancia). Es incoloro, muy volátil e inflamable, y uno de los disolventes orgánicos más importantes de la industria química.",
    howItWorksTitle: "¿CÓMO ES SU ESTRUCTURA?",
    howItWorks: "Sus 6 átomos de carbono forman un anillo hexagonal con electrones π deslocalizados que le dan estabilidad única (aromaticidad). Esta estructura de resonancia hace que no reaccione por adición como los alquenos, sino por sustitución electrófila aromática.",
    whatIsItFor: {
      text: "Se usa como disolvente industrial y precursor en la síntesis de plásticos, resinas, nylon, colorantes y medicamentos, aunque su uso está restringido por su toxicidad.",
      uses: [
        { label: "Síntesis orgánica", icon: "atom" },
        { label: "Industria plástica", icon: "box" },
        { label: "Investigación química", icon: "flask" },
        { label: "Producción de nylon", icon: "scale" }
      ]
    },
    educationalFact: "La estructura hexagonal del benceno fue propuesta por August Kekulé en 1865 tras soñar con una serpiente mordiéndose la cola. Este descubrimiento fue revolucionario para la química orgánica.",
    additionalInfo: {
      "Tipo de compuesto": "Hidrocarburo aromático",
      "Grupo funcional": "Anillo bencénico",
      "Clasificación de riesgo": "Carcinógeno Grupo 1 (IARC)",
      "Familia química": "Aromáticos"
    }
  },
  {
    id: "cafeina",
    name: "Cafeína",
    scientificName: "C8H10N4O2",
    subtitle: "C₈H₁₀N₄O₂",
    group: "Alcaloide",
    category: "Moléculas",
    icon: React.createElement(Zap, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Cafeina.png",
    glbPath: "/modelos-3D/moleculas/cafeina.glb",
    emoji: "",
    details: {
      "Fórmula": "C8H10N4O2",
      "Masa Molar": "194.19 g/mol",
      "Efecto": "Estimulante SNC",
      "Origen": "Café, Té, Cacao",
      "Estado": "Sólido cristalino",
      "Solubilidad": "Moderada en agua"
    },
    whatIsIt: "La cafeína (C₈H₁₀N₄O₂) es un alcaloide metilxantínico de origen natural que actúa como estimulante del sistema nervioso central. Se encuentra de forma natural en el café, el té, el cacao y las nueces de cola, siendo la sustancia psicoactiva legal más consumida en el mundo.",
    howItWorksTitle: "¿CÓMO ACTÚA?",
    howItWorks: "Bloquea los receptores de adenosina en el cerebro, impidiendo la sensación de cansancio. Esto provoca liberación de dopamina y adrenalina, generando alerta, concentración y mayor frecuencia cardíaca. Su efecto dura entre 3 y 5 horas en adultos.",
    whatIsItFor: {
      text: "Ampliamente usada en medicina, alimentos y fármacos por sus propiedades estimulantes, diuréticas y broncodilatadoras.",
      uses: [
        { label: "Estimulante cognitivo", icon: "atom" },
        { label: "Industria alimentaria", icon: "apple" },
        { label: "Farmacología", icon: "pill" },
        { label: "Investigación neurológica", icon: "dna" }
      ]
    },
    educationalFact: "La dosis letal de cafeína para humanos se estima en 10 gramos (equivalente a unas 100 tazas de café). En pequeñas dosis mejora el estado de alerta, la memoria a corto plazo y el rendimiento físico.",
    additionalInfo: {
      "Tipo de compuesto": "Alcaloide (metilxantina)",
      "Grupo funcional": "Amina heterocíclica",
      "Metabolismo": "Hígado (CYP1A2)",
      "Familia química": "Xantinas"
    }
  },
  {
    id: "diox-carb",
    name: "Diox. Carbono",
    scientificName: "CO2",
    subtitle: "CO₂",
    group: "Inorgánica",
    category: "Moléculas",
    icon: React.createElement(Wind, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/DioxCarb.png",
    glbPath: "/modelos-3D/moleculas/dioxiodo%20de%20carbono.glb",
    emoji: "",
    details: {
      "Fórmula": "CO2",
      "Masa Molar": "44.01 g/mol",
      "Estado": "Gas",
      "Geometría": "Lineal",
      "Uso": "Fotosíntesis / Extintores",
      "Solubilidad": "Baja en agua"
    },
    whatIsIt: "El dióxido de carbono (CO₂) es un gas inorgánico incoloro e inodoro, formado por un átomo de carbono y dos de oxígeno. Es el principal producto del metabolismo celular aerobio y un componente clave en la fotosíntesis de las plantas.",
    howItWorksTitle: "¿QUÉ ROL CUMPLE?",
    howItWorks: "En organismos vivos, el CO₂ es un producto de desecho de la respiración celular. Las plantas lo captan para sintetizar azúcares mediante fotosíntesis. En la atmósfera actúa como gas de efecto invernadero, absorbiendo radiación infrarroja y regulando la temperatura terrestre.",
    whatIsItFor: {
      text: "Tiene aplicaciones industriales, biológicas y científicas, desde la refrigeración hasta la fotosíntesis y la producción de bebidas carbonatadas.",
      uses: [
        { label: "Fotosíntesis vegetal", icon: "droplet" },
        { label: "Extintores de incendios", icon: "thermometer" },
        { label: "Bebidas carbonatadas", icon: "droplets" },
        { label: "Cromatografía supercrítica", icon: "flask" }
      ]
    },
    educationalFact: "El CO₂ supercrítico (por encima de 31.1°C y 73.8 atm) es un excelente disolvente no tóxico usado en industria farmacéutica para extraer compuestos sin contaminación por disolventes orgánicos.",
    additionalInfo: {
      "Tipo de compuesto": "Óxido no metálico",
      "Geometría molecular": "Lineal (180°)",
      "Concentración atmosférica": "~421 ppm (2024)",
      "Familia química": "Compuesto inorgánico"
    }
  },
  {
    id: "etanol",
    name: "Etanol",
    scientificName: "C2H5OH",
    subtitle: "C₂H₅OH",
    group: "Alcohol",
    category: "Moléculas",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Etanol.png",
    glbPath: "/modelos-3D/moleculas/etanol%20.glb",
    emoji: "",
    details: {
      "Fórmula": "C2H5OH",
      "Masa Molar": "46.07 g/mol",
      "Punto Eb.": "78.37 °C",
      "Uso": "Desinfectante / Bebidas",
      "Estado": "Líquido volátil",
      "Olor": "Alcohólico fuerte"
    },
    whatIsIt: "El etanol (C₂H₅OH) es el alcohol más común e importante en química, medicina e industria. Es un líquido incoloro y volátil producido por fermentación de azúcares, con propiedades antimicrobianas, disolventes y narcotícas.",
    howItWorksTitle: "¿CÓMO SE OBTIENE?",
    howItWorks: "Se produce industrialmente por fermentación alcohólica: levaduras (Saccharomyces cerevisiae) metabolizan glucosa y la convierten en etanol + CO₂. También se sintetiza petroquímicamente por hidratación del etileno. En laboratorio se purifica por destilación fraccionada.",
    whatIsItFor: {
      text: "Esencial como desinfectante, disolvente, combustible y reactivo en química orgánica y farmacéutica.",
      uses: [
        { label: "Desinfectante (70%)", icon: "droplets" },
        { label: "Síntesis orgánica", icon: "flask" },
        { label: "Combustible renovable", icon: "thermometer" },
        { label: "Industria alimentaria", icon: "apple" }
      ]
    },
    educationalFact: "El etanol al 70% es más efectivo como desinfectante que al 96%, porque el agua ayuda a desnaturalizar las proteínas bacterianas más eficientemente que el alcohol puro.",
    additionalInfo: {
      "Tipo de compuesto": "Alcohol primário",
      "Grupo funcional": "Hidroxilo (-OH)",
      "Temperatura de inflamación": "13 °C",
      "Familia química": "Alcanoles"
    }
  },
  {
    id: "fenol",
    name: "Fenol",
    scientificName: "C6H5OH",
    subtitle: "C₆H₅OH",
    group: "Aromática",
    category: "Moléculas",
    icon: React.createElement(Biohazard, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Fenol.png",
    glbPath: "/modelos-3D/moleculas/fenol.glb",
    emoji: "",
    details: {
      "Fórmula": "C6H5OH",
      "Masa Molar": "94.11 g/mol",
      "Estado": "Sólido cristalino",
      "Uso": "Producción de resinas",
      "Propiedad": "Antiséptico",
      "Toxicidad": "Corrosivo"
    },
    whatIsIt: "El fenol (C₆H₅OH) es un compuesto orgánico aromático formado por un anillo bencénico con un grupo hidroxilo (-OH) unido. Es un sólido cristalino blanco con olor característico, altamente corrosivo y tóxico, y fue uno de los primeros antisépticos usados en medicina.",
    howItWorksTitle: "¿CÓMO ACTUA?",
    howItWorks: "El fenol desnaturaliza las proteínas bacterianas al romper sus puentes de hidrógeno y disolver los lípidos de la membrana celular. Esta actividad antiséptica fue aprovechada por Joseph Lister en 1865 para esterilizar heridas quirúrgicas, revolucionando la medicina.",
    whatIsItFor: {
      text: "Se usa en la producción de plásticos, resinas, fármacos y como referencia en pruebas de coeficiente antiséptico en microbiología.",
      uses: [
        { label: "Producción de resinas", icon: "atom" },
        { label: "Referencia antiséptica", icon: "flask" },
        { label: "Industria farmacéutica", icon: "pill" },
        { label: "Síntesis de nylon", icon: "scale" }
      ]
    },
    educationalFact: "El fenol fue el primer germenídida químico utilizado en cirugía. Joseph Lister lo aplicó en 1867 para desinfectar heridas, reduciendo la mortalidad postquirúrgica del 50% al 15%.",
    additionalInfo: {
      "Tipo de compuesto": "Fenol (aromático-alcohol)",
      "Grupo funcional": "Hidroxibenceno",
      "Clasificación de riesgo": "Tóxico y corrosivo",
      "Familia química": "Fenoles"
    }
  },
  {
    id: "glicerol",
    name: "Glicerol",
    scientificName: "C3H8O3",
    subtitle: "C₃H₈O₃",
    group: "Alcohol",
    category: "Moléculas",
    icon: React.createElement(Droplets, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Glicerol.png",
    glbPath: "/modelos-3D/moleculas/glicerol.glb",
    emoji: "",
    details: {
      "Fórmula": "C3H8O3",
      "Masa Molar": "92.09 g/mol",
      "Nombre": "Glicerina",
      "Estado": "Líquido viscoso",
      "Uso": "Humectante",
      "Sabor": "Dulce"
    },
    whatIsIt: "El glicerol (C₃H₈O₃), también llamado glicerina, es un poliol de tres carbonos, incoloro, viscoso y de sabor dulce. Es un subproducto natural de la saponificación de grasas y aceites, y es uno de los componentes más verstátiles en industria alimentaria, farmacéutica y cosmetión.",
    howItWorksTitle: "¿CÓMO SE OBTIENE?",
    howItWorks: "Se obtiene principalmente como subproducto de la producción de jabones y biocombustibles (biodiesel). También puede sintetizarse por fermentación microbiana. Su estructura con tres grupos hidroxilo (-OH) le confiere alta higroscopicidad y miscibilidad con agua.",
    whatIsItFor: {
      text: "Ampliamente utilizado como humectante, plastificante, solvente, conservante y en la síntesis de triógliceridos y nitroglicerina.",
      uses: [
        { label: "Cosmética y cremas", icon: "droplet" },
        { label: "Industria farmacéutica", icon: "pill" },
        { label: "Conservante alimentario", icon: "apple" },
        { label: "Síntesis química", icon: "flask" }
      ]
    },
    educationalFact: "La nitroglicerina, un potente explosivo y fármaco vasodilatador, se sintetiza a partir del glicerol. Fue Alfred Nobel quien patentó su uso controlado en la dinamita.",
    additionalInfo: {
      "Tipo de compuesto": "Poliol (triol)",
      "Grupo funcional": "Tres grupos hidroxilo (-OH)",
      "Higroscopicidad": "Muy alta",
      "Familia química": "Alcanoles"
    }
  },
  {
    id: "propano",
    name: "Propano",
    scientificName: "C3H8",
    subtitle: "C₃H₈",
    group: "Alcano",
    category: "Moléculas",
    icon: React.createElement(Flame, { className: "w-5 h-5" }),
    image: "/img/menu/miniaturas/moleculas/Propano.png",
    glbPath: "/modelos-3D/moleculas/propano.glb",
    emoji: "",
    details: {
      "Fórmula": "C3H8",
      "Masa Molar": "44.1 g/mol",
      "Estado": "Gas licuado",
      "Uso": "Combustible",
      "Punto Eb.": "-42 °C",
      "Origen": "Gas natural / Petróleo"
    },
    whatIsIt: "El propano (C₃H₈) es un hidrocarburo alcano de tres carbonos que se presenta como gas a temperatura ambiente, pero se almacena como líquido bajo presión. Es un combustible limpio de alta densidad energética, obtenido del procesamiento del gas natural y el refino del petróleo.",
    howItWorksTitle: "¿CÓMO ARDE?",
    howItWorks: "Al quemarse con oxígeno suficiente, el propano produce CO₂ y agua en una reacción exotérmica limpia: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O. Su alto contenido calórico (46.3 MJ/kg) y su fácil licuefacción lo hacen ideal como combustible portátil y en sistemas de calefacción.",
    whatIsItFor: {
      text: "Utilizado ampliamente como combustible doméstico, industrial y en vehículos (GLP), así como materia prima en síntesis química.",
      uses: [
        { label: "Gas LP doméstico", icon: "thermometer" },
        { label: "Combustible vehicular", icon: "settings" },
        { label: "Síntesis de propileno", icon: "flask" },
        { label: "Refrigeración industrial", icon: "scale" }
      ]
    },
    educationalFact: "El propano es uno de los componentes del gas licuado de petróleo (GLP). A diferencia del gas natural (metano), el propano tiene mayor densidad energética y puede almacenarse en tanques portátiles a bajas presiones.",
    additionalInfo: {
      "Tipo de compuesto": "Hidrocarburo alcano",
      "Grupo funcional": "No tiene (alcano saturado)",
      "Poder calorífico": "46.3 MJ/kg",
      "Familia química": "Alcanos (parafinas)"
    }
  }
];

// Combine alternating one instrument and one molecule
const combined: ItemData[] = [];
const maxLength = Math.max(instruments.length, molecules.length);

for (let i = 0; i < maxLength; i++) {
  if (i < instruments.length) combined.push(instruments[i]);
  if (i < molecules.length) combined.push(molecules[i]);
}

export const instrumentsData = instruments;
export const moleculesData = molecules;
export const combinedData = combined; // This is used by the components
