// Catálogo DREAMSAI: se conservaron los productos, precios, imágenes y enlaces del sitio original.
const productos = [
{ 
    nombre: "REVIT 2027", 
    precio: 6.99, 
    imagen: "img/Ico REVIT.png", 
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "CIVIL 3D 2027", 
    precio: 6.99,
    imagen: "img/Ico Civil 3D.png", 
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "AUTOCAD 2027", 
    precio: 6.99,
    imagen: "img/Ico AutoCAD.png", 
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "REVIT 2026", 
    precio: 5, 
    imagen: "img/Ico REVIT.png", 
    enlace: "https://pay.hotmart.com/I106417092D", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "CIVIL 3D 2026", 
    precio: 5, 
    imagen: "img/Ico Civil 3D.png", 
    enlace: "https://pay.hotmart.com/I106417092D", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "AUTOCAD 2026", 
    precio: 5, 
    imagen: "img/Ico AutoCAD.png", 
    enlace: "https://pay.hotmart.com/I106417092D", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "CIVIL 3D 2025", 
    precio: 5, 
    imagen: "img/Ico Civil 3D.png", 
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },

  { 
    nombre: "REVIT 2025", 
    precio: 5, 
    imagen: "img/Ico REVIT.png", 
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "AUTOCAD 2025", 
    precio: 5, 
    imagen: "img/Ico AutoCAD.png", 
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "AUTOCAD 2024", 
    precio: 5, 
    imagen: "img/Ico AutoCAD.png", 
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "CIVIL 3D 2024", 
    precio: 5, 
    imagen: "img/Ico Civil 3D.png", 
    enlace: "https://pay.hotmart.com/I106417092D", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "REVIT 2024", 
    precio: 5, 
    imagen: "img/Ico REVIT.png", 
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones." 
  },
{ 
    nombre: "GLOBAL MAPPER PRO V26", 
    precio: 4, 
    imagen: "img/Ico Goblal Mapper.png",
    enlace: "https://pay.hotmart.com/M106418538S", 
    info: "GLOBAL MAPPER PRO V26 Una de las herramientas GIS más utilizadas para el manejo de información geoespacial. Incluye parche para habilitar todas las características del software."
  },
{ 
    nombre: "Global Mapper Pro v27", 
    precio: 4, 
    imagen: "img/Ico global mapper v27.png",
    enlace: "https://pay.hotmart.com/M106418538S", 
    info: "Global Mapper Pro v27.0.0, una potente herramienta GIS para visualizar, editar y analizar información geoespacial. Incluye parche para habilitar todas las características del software."
  },
{ 
    nombre: "CSiBridge v23", 
    precio: 4, 
    imagen: "img/CSiBridge 23.png",
    enlace: "https://pay.hotmart.com/M106418538S", 
    info: "CSiBridge v23 es un software profesional para el modelado, análisis y diseño de puentes. Incluye herramientas avanzadas de ingeniería estructural y acceso completo a todas sus funciones mediante activador con licencia ilimitada." 
  },
{ 
    nombre: "ETABS v21", 
    precio: 4, 
    imagen: "img/etabs.png",
    enlace: "https://pay.hotmart.com/M106418538S", 
    info: "ETABS v21 Solución profesional para proyectos estructurales de cualquier escala. Incluye activador y acceso completo a las funciones disponibles." 
  },
{ 
    nombre: "SAFE v21", 
    precio: 4, 
    imagen: "img/SAFE 21.png",
    enlace: "https://pay.hotmart.com/M106418538S", 
    info: "SAFE v21 Software ampliamente utilizado para el diseño de cimentaciones y losas estructurales. Incluye activador para uso completo del programa" 
  },
{ 
    nombre: "SAP2000 v25", 
    precio: 4, 
    imagen: "img/SAP2000.png",
    enlace: "https://pay.hotmart.com/M106418538S", 
    info: "SAP2000 v25 Edición estable y completa, ideal para quienes buscan una plataforma flexible para proyectos estructurales de todo tipo. Incluye activador y acceso a todas las herramientas disponibles." 
  }, 
{ 
    nombre: "PIX4DMAPPER ENTERPRISE V4.5.6", 
    precio: 5, 
    imagen: "img/Pix4DMapper.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "PIX4Dmapper Enterprise v4.5.6 para generación de mapas y modelos 3D. Incluye instalador y activador."
  },
{ 
    nombre: "CAD-Earth v8 (2017-2025)", 
    precio: 5, 
    imagen: "img/CAD-Earth.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Complemento CAD-Earth v8.1.5 para AutoCAD (2017-2025) orientado al trabajo con mapas, imágenes satelitales y datos topográficos. Incluye crack para su activación."
  },
{ 
    nombre: "CAD-Earth v9 (2021-2027)", 
    precio: 5, 
    imagen: "img/CAD-Earth v9.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Complemento CAD-Earth v9 para AutoCAD (2021-2027) orientado al trabajo con mapas, imágenes satelitales y datos topográficos. Incluye crack para su activación."
  },
{ 
    nombre: "Plugin CSixRevit 2025", 
    precio: 3.90, 
    imagen: "img/csixrevit.png",
    enlace: "https://pay.hotmart.com/S106421115F", 
    info: "Complemento para Revit 2025 orientado a la automatización BIM y optimización de flujos de trabajo. Incluye Parche para su activación."
  },
{ 
    nombre: "Complementos Revit 2026", 
    precio: 3.90, 
    imagen: "img/pluggin0.png",
    enlace: "https://pay.hotmart.com/S106421115F", 
    info: "Complemento para Revit 2026 orientado a la automatización y optimización de flujos de trabajo. Incluye Parche para su activación."
  },
{ 
    nombre: "Complementos Revit 2027", 
    precio: 3.90, 
    imagen: "img/pluggin0.png",
    enlace: "https://pay.hotmart.com/S106421115F", 
    info: "Complemento para Revit 2027 orientado a la automatización y optimización de flujos de trabajo. Incluye Parche para su activación."
  },
{ 
    nombre: "Agisoft Metashape Pro v2.3.0", 
    precio: 5, 
    imagen: "img/Ico Agisoft MetaShape.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Agisoft Metashape Pro v2.3.0 es un programa que transforma fotografías en modelos 3D, mapas y nubes de puntos con gran precisión. Ideal para trabajos de topografía, drones e ingeniería. Incluye su Parche para su activación."
  },
{ 
    nombre: "Autodesk 3Ds Max 2025", 
    precio: 5, 
    imagen: "img/3ds Max.png",
    enlace: "https://pay.hotmart.com/I106417092D", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "V-Ray 7 para 3Ds Max 2022–2027",
    precio: 4, 
    imagen: "img/V-Ray 7.png",
    enlace: "https://pay.hotmart.com/M106418538S", 
    info: "V-Ray 7 es uno de los motores de render más utilizados para 3ds Max, ideal para crear imágenes y animaciones con un acabado realista y de alta calidad. Incluye activador y acceso completo a todas las funciones disponibles."
  },
{ 
    nombre: "ReCap Pro 2025",
    precio: 5, 
    imagen: "img/Recap 2025.png",
    enlace: "https://pay.hotmart.com/I106417092D", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "ReCap Pro 2026",
    precio: 5, 
    imagen: "img/Recap 2026.png",
    enlace: "https://pay.hotmart.com/I106417092D", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "ReCap Pro 2027",
    precio: 6.99,
    imagen: "img/Recap 2027.png",
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "Graphisoft Archicad v29",
    precio: 5, 
    imagen: "img/Archicad 29.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Graphisoft Archicad v29, Software BIM para diseño arquitectónico, modelado 3D y documentación de proyectos. viene con la licencia para su activación."
  },
{ 
    nombre: "Inventor PRO 2025",
    precio: 5, 
    imagen: "img/Inventor 2025.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "Inventor PRO 2026",
    precio: 5, 
    imagen: "img/Inventor 2026.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "Inventor PRO 2027",
    precio: 6.99,
    imagen: "img/Inventor 2027.png",
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "InfraWorks 2025",
    precio: 5, 
    imagen: "img/InfraWorks 2025.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "InfraWorks 2026",
    precio: 5, 
    imagen: "img/InfraWorks 2026.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "InfraWorks 2027",
    precio:  6.99,
    imagen: "img/InfraWorks 2027.png",
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Esta licencia es permanente y se activa a través de LMTOOLS, una herramienta que puede resultar algo confusa si no tienes experiencia previa con este tipo de instalaciones. Es normal tener dudas durante el proceso, así que no dudes en escribirnos. Estamos aquí para ayudarte a que todo funcione sin complicaciones."
  },
{ 
    nombre: "Vehicle Tracking 2025",
    precio: 5, 
    imagen: "img/Vehicle Tracking 2025.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Autodesk Vehicle Tracking 2025 es una solución para el análisis de rutas, maniobras de vehículos y el diseño eficiente de proyectos viales y de transporte."
  },
{ 
    nombre: "Vehicle Tracking 2026",
    precio: 5, 
    imagen: "img/Vehicle Tracking 2026.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Autodesk Vehicle Tracking 2026 es una solución para el análisis de rutas, maniobras de vehículos y el diseño eficiente de proyectos viales y de transporte."
  },
{ 
    nombre: "Vehicle Tracking 2027",
    precio: 5, 
    imagen: "img/Vehicle Tracking 2027.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Autodesk Vehicle Tracking 2027 es una solución para el análisis de rutas, maniobras de vehículos y el diseño eficiente de proyectos viales y de transporte."
  },
{ 
    nombre: "NavisWorks 2025",
    precio: 5, 
    imagen: "img/NavisWorks 2025.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Navisworks 2025 es una potente herramienta para la revisión, coordinación y detección de interferencias en proyectos BIM. Este producto incluye los archivos de instalación, guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros, arquitectos y profesionales de la construcción."
  },
{ 
    nombre: "NavisWorks 2026",
    precio: 5, 
    imagen: "img/NavisWorks 2026.png",
    enlace: "https://pay.hotmart.com/P99550552H", 
    info: "Navisworks 2026 es una potente herramienta para la revisión, coordinación y detección de interferencias en proyectos BIM. Este producto incluye los archivos de instalación, guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros, arquitectos y profesionales de la construcción."
  },
{ 
    nombre: "NavisWorks 2027",
    precio: 6.99,
    imagen: "img/NavisWorks 2027.png",
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Navisworks 2027 es una potente herramienta para la revisión, coordinación y detección de interferencias en proyectos BIM. Este producto incluye los archivos de instalación, guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros, arquitectos y profesionales de la construcción."
  },
{ 
    nombre: "AutoCAD Electrical 2025",
    precio: 5, 
    imagen: "img/Electrical 2025.png",
    enlace: "https://pay.hotmart.com/S106861616M", 
    info: "AutoCAD Electrical 2025 es una potente herramienta para el diseño y documentación de sistemas de control eléctrico. Este producto incluye los archivos de instalación, guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros eléctricos, diseñadores y profesionales de la automatización industrial."
  },
{ 
    nombre: "AutoCAD Electrical 2026",
    precio: 5, 
    imagen: "img/Electrical 2026.png",
    enlace: "https://pay.hotmart.com/S106861616M", 
    info: "AutoCAD Electrical 2026 es una potente herramienta para el diseño y documentación de sistemas de control eléctrico. Este producto incluye los archivos de instalación, guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros eléctricos, diseñadores y profesionales de la automatización industrial."
  },
{ 
    nombre: "AutoCAD Electrical 2027",
    precio: 6.99,
    imagen: "img/Electrical 2027.png",
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "AutoCAD Electrical 2027 es una potente herramienta para el diseño y documentación de sistemas de control eléctrico. Este producto incluye los archivos de instalación, guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros eléctricos, diseñadores y profesionales de la automatización industrial."
  },
{ 
    nombre: "Autodesk Maya 2025 (Multilenguaje)",
    precio: 5, 
    imagen: "img/Maya 2025.png",
    enlace: "https://pay.hotmart.com/Y106910195D", 
    info: "Autodesk Maya 2025 (Multilenguaje) es una potente herramienta profesional para el modelado, animación 3D, simulación y renderizado de alta calidad. Este paquete incluye los archivos de instalación, una guía de instalación paso a paso y un activador para su funcionamiento. Ideal para artistas 3D, animadores, desarrolladores de videojuegos, estudios de cine y profesionales de los efectos visuales que buscan crear proyectos con resultados de nivel profesional."
  },
{ 
    nombre: "Autodesk Maya 2026 (Multilenguaje)",
    precio: 5, 
    imagen: "img/Maya 2026.png",
    enlace: "https://pay.hotmart.com/Y106910195D", 
    info: "Autodesk Maya 2026 (Multilenguaje) es una potente herramienta profesional para el modelado, animación 3D, simulación y renderizado de alta calidad. Este paquete incluye los archivos de instalación, una guía de instalación paso a paso y un activador para su funcionamiento. Ideal para artistas 3D, animadores, desarrolladores de videojuegos, estudios de cine y profesionales de los efectos visuales que buscan crear proyectos con resultados de nivel profesional."
  },
{ 
    nombre: "Autodesk Maya 2027 (Multilenguaje)",
    precio: 6.99,
    imagen: "img/Maya 2027.png",
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Autodesk Maya 2027 (Multilenguaje) es una potente herramienta profesional para el modelado, animación 3D, simulación y renderizado de alta calidad. Este paquete incluye los archivos de instalación, una guía de instalación paso a paso y un activador para su funcionamiento. Ideal para artistas 3D, animadores, desarrolladores de videojuegos, estudios de cine y profesionales de los efectos visuales que buscan crear proyectos con resultados de nivel profesional."
  },
{ 
    nombre: "Robot Structural Analysis Pro 2025",
    precio: 5, 
    imagen: "img/Robot 2025.png",
    enlace: "https://pay.hotmart.com/F106910808K", 
    info: "Robot Structural Analysis Professional 2025 (Multilenguaje) es un potente software profesional para el análisis estructural y diseño de estructuras mediante el método de elementos finitos. Este paquete incluye los archivos de instalación, una guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros civiles, estructurales y profesionales de la construcción que necesitan analizar, verificar y optimizar estructuras con resultados precisos y confiables."
  },
{ 
    nombre: "Robot Structural Analysis Pro 2026",
    precio: 5, 
    imagen: "img/Robot 2026.png",
    enlace: "https://pay.hotmart.com/F106910808K", 
    info: "Robot Structural Analysis Professional 2026 (Multilenguaje) es un potente software profesional para el análisis estructural y diseño de estructuras mediante el método de elementos finitos. Este paquete incluye los archivos de instalación, una guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros civiles, estructurales y profesionales de la construcción que necesitan analizar, verificar y optimizar estructuras con resultados precisos y confiables."
  },
{ 
    nombre: "Robot Structural Analysis Pro 2027",
    precio: 6.99,
    imagen: "img/Robot 2027.png",
    enlace: "https://pay.hotmart.com/H107240811Y", 
    info: "Robot Structural Analysis Professional 2027 (Multilenguaje) es un potente software profesional para el análisis estructural y diseño de estructuras mediante el método de elementos finitos. Este paquete incluye los archivos de instalación, una guía de instalación paso a paso y un activador para su funcionamiento. Ideal para ingenieros civiles, estructurales y profesionales de la construcción que necesitan analizar, verificar y optimizar estructuras con resultados precisos y confiables."
  },
];

/* ==========================================================================
   REQUISITOS DEL SISTEMA (referenciales, por familia de programa)
   Orden: [Sistema, Procesador, Memoria RAM, Gráficos, Disco]
   ========================================================================== */
const W10 = 'Windows 10/11 (64 bits)';
const W11 = 'Windows 11 (64 bits)';
const SPEC_LABELS = ['Sistema', 'Procesador', 'Memoria RAM', 'Gráficos', 'Disco'];

const SPEC_FAMILIES = [
  { re: /cad-earth/, req: 'Requiere AutoCAD instalado en una versión compatible.',
    min: [W10, '2.5 GHz', '8 GB', '1 GB · DirectX 11', '5 GB'], rec: [W11, '3 GHz o más', '16 GB', '4 GB', 'SSD'] },
  { re: /plugin|complemento/, req: 'Requiere Revit de la misma versión instalado.',
    min: [W10, '2.5 GHz', '8 GB', '1 GB · DirectX 11', '1 GB'], rec: [W11, '3 GHz o más', '16 GB', '4 GB', 'SSD'] },
  { re: /v-ray/, req: 'Requiere 3ds Max 2022–2027 instalado.',
    min: [W10, '4 núcleos · SSE4.2', '8 GB', '2 GB · DirectX 11', '5 GB'], rec: [W11, '8 núcleos o más', '16 GB', 'NVIDIA RTX 6 GB+', 'SSD'] },
  { re: /vehicle tracking/, req: 'Funciona sobre AutoCAD o Civil 3D de la misma versión.',
    min: [W10, '2.5 GHz', '8 GB', '2 GB · DirectX 11', '10 GB'], rec: [W11, '3 GHz o más', '16 GB', '4 GB', 'SSD'] },
  { re: /electrical|autocad/, min: [W10, '2.5 GHz', '8 GB', '1 GB · DirectX 11', '10 GB'], rec: [W11, '3 GHz o más', '16 GB', '4 GB · DirectX 12', 'SSD'] },
  { re: /civil 3d/, min: [W10, '2.5 GHz', '16 GB', '2 GB · DirectX 11', '20 GB'], rec: [W11, '3 GHz o más', '32 GB', '4 GB o más', 'SSD'] },
  { re: /revit/, min: [W10, '2.5 GHz', '8 GB', '2 GB · DirectX 11', '30 GB'], rec: [W11, '3 GHz o más', '16–32 GB', '4 GB o más', 'SSD'] },
  { re: /infraworks/, min: [W10, '2.5 GHz', '16 GB', '2 GB · DirectX 11', '20 GB'], rec: [W11, '3 GHz o más', '32 GB', '8 GB', 'SSD'] },
  { re: /navisworks/, min: [W10, '2.5 GHz', '8 GB', '1 GB · DirectX 11', '15 GB'], rec: [W11, '3 GHz o más', '16 GB', '4 GB', 'SSD'] },
  { re: /recap/, min: [W10, '2.5 GHz', '8 GB', '1 GB · DirectX 11', '10 GB'], rec: [W11, '3 GHz o más', '16 GB', '4 GB', 'SSD'] },
  { re: /inventor/, min: [W10, '2.5 GHz', '16 GB', '2 GB · DirectX 11', '40 GB'], rec: [W11, '3 GHz o más', '32 GB', '4 GB o más', 'SSD'] },
  { re: /3ds max/, min: [W10, '4 núcleos', '8 GB', '2 GB · DirectX 11', '10 GB'], rec: [W11, '8 núcleos o más', '16–32 GB', '4 GB o más', 'SSD'] },
  { re: /maya/, min: [W10, '4 núcleos', '8 GB', '2 GB · OpenGL 4.x', '10 GB'], rec: [W11, '8 núcleos o más', '16–32 GB', '4 GB o más', 'SSD'] },
  { re: /robot structural/, min: [W10, '2.5 GHz', '8 GB', '1 GB · DirectX 11', '20 GB'], rec: [W11, '3 GHz o más', '16 GB', '4 GB', 'SSD'] },
  { re: /archicad/, min: [W10, '4 núcleos · 64 bits', '8 GB', '2 GB · OpenGL 4.1', '8 GB'], rec: [W11, '8 núcleos o más', '16–32 GB', '4 GB o más', 'SSD'] },
  { re: /global mapper/, min: [W10, '2 GHz', '4 GB', 'OpenGL 3.3', '5 GB'], rec: [W11, '3 GHz o más', '16 GB', '2 GB o más', 'SSD'] },
  { re: /pix4d/, min: [W10, 'Intel i5 / Ryzen 5', '16 GB', 'Dedicada · OpenGL 3.2', '20 GB'], rec: [W11, 'Intel i7 / Ryzen 7', '32 GB o más', 'NVIDIA 4 GB+', 'SSD'] },
  { re: /metashape/, min: [W10, '4 núcleos', '16 GB', 'Compatible con OpenCL', '10 GB'], rec: [W11, '8 núcleos o más', '32–64 GB', 'NVIDIA RTX 8 GB+', 'SSD'] },
  { re: /etabs|sap2000|safe|csibridge/, min: [W10, '2.5 GHz', '8 GB', '1 GB · DirectX 11', '5 GB'], rec: [W11, '3 GHz o más', '16–32 GB', '4 GB', 'SSD'] },
];

function specsFor(product) {
  const name = (product.nombre || '').toLowerCase();
  return SPEC_FAMILIES.find((family) => family.re.test(name)) || null;
}

/* ==========================================================================
   UTILIDADES
   ========================================================================== */
const $ = (selector) => document.querySelector(selector);
const catalog = $('#product-catalog');
const searchInput = $('#product-search');
const chipsWrap = $('#category-chips');
const resultCount = $('#result-count');
const catalogStatus = $('#catalog-status');
const emptyState = $('#empty-state');
const modal = $('#info-modal');
const WHATSAPP = 'https://wa.link/9wfmxq';

let activeCategory = 'all';
let lastFocus = null;

function categoryFor(product) {
  const title = (product.nombre || '').toLowerCase();
  if (/cad-earth|plugin|complemento/.test(title)) return 'complementos';
  if (/v-ray|vray|3ds max|maya/.test(title)) return 'diseno';
  if (/robot structural|advance steel|etabs|sap2000|safe|csibridge|csi bridge/.test(title)) return 'estructural';
  if (/global mapper|pix4d|metashape/.test(title)) return 'gis';
  if (/civil 3d|autocad|revit|infraworks|navisworks|vehicle tracking|recap|inventor/.test(title)) return 'autodesk';
  return 'otros';
}

function categoryLabel(category) {
  return ({ autodesk: 'Autodesk', estructural: 'Estructuras', gis: 'GIS y topografía', diseno: 'Diseño 3D', complementos: 'Complemento', otros: 'Software' })[category] || 'Software';
}

function escapeHtml(value) {
  return String(value ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

function formatPrice(price) {
  const number = Number(price);
  return Number.isFinite(number) ? `$${number.toFixed(2)}` : 'Consultar';
}

/* ==========================================================================
   CATÁLOGO
   ========================================================================== */
function renderProductos() {
  const query = (searchInput?.value || '').trim().toLocaleLowerCase('es');
  const filtered = productos.filter((product) => {
    const searchable = (product.nombre || '').toLocaleLowerCase('es');
    return searchable.includes(query) && (activeCategory === 'all' || categoryFor(product) === activeCategory);
  });

  catalog.innerHTML = filtered.map((product) => {
    const specs = specsFor(product);
    const ramHint = specs?.min ? `<span class="product-hint"><i class="fa-solid fa-microchip"></i> Mín. ${escapeHtml(specs.min[2])} RAM</span>` : '<span class="product-hint"><i class="fa-solid fa-puzzle-piece"></i> Complemento</span>';
    return `
    <article class="product-card">
      <div class="product-image-wrap">
        <img class="product-image" src="${escapeHtml(product.imagen)}" alt="${escapeHtml(product.nombre)}" loading="lazy" onerror="this.closest('.product-image-wrap').classList.add('image-missing'); this.style.display='none'">
      </div>
      <div class="product-content">
        <span class="product-category">${escapeHtml(categoryLabel(categoryFor(product)))}</span>
        <h3>${escapeHtml(product.nombre)}</h3>
        <div class="product-meta"><span class="product-price">${formatPrice(product.precio)}</span>${ramHint}</div>
        <div class="product-actions">
          <button class="button button-details" type="button" data-product-index="${productos.indexOf(product)}">Información</button>
          <a class="button button-buy" href="${escapeHtml(product.enlace)}" target="_blank" rel="noopener noreferrer">Comprar</a>
        </div>
      </div>
    </article>`;
  }).join('');

  resultCount.textContent = filtered.length;
  catalogStatus.textContent = `Mostrando ${filtered.length} de ${productos.length} productos`;
  emptyState.hidden = filtered.length !== 0;
  catalog.hidden = filtered.length === 0;
}

function setCategory(category) {
  activeCategory = category;
  chipsWrap.querySelectorAll('.chip').forEach((chip) => {
    const on = chip.dataset.category === category;
    chip.classList.toggle('is-active', on);
    chip.setAttribute('aria-pressed', String(on));
  });
  renderProductos();
}

function resetFilters() {
  searchInput.value = '';
  setCategory('all');
  searchInput.focus();
}

/* ==========================================================================
   MODAL DE INFORMACIÓN
   ========================================================================== */
function specTable(title, values, tone) {
  const rows = SPEC_LABELS.map((label, i) => `<div class="spec-row"><dt>${label}</dt><dd>${escapeHtml(values[i])}</dd></div>`).join('');
  return `<section class="spec-col spec-${tone}"><h3>${title}</h3><dl>${rows}</dl></section>`;
}

function openInfo(product) {
  if (!product || !modal) return;
  const specs = specsFor(product);
  $('#modal-title').textContent = product.nombre || 'Información del producto';
  $('#modal-price').textContent = formatPrice(product.precio);
  $('#modal-description').textContent = product.info || 'Consulta con DREAMSAI para obtener más información sobre este producto.';

  let html = '';
  if (specs) {
    if (specs.req) html += `<p class="spec-req"><i class="fa-solid fa-circle-info"></i> ${escapeHtml(specs.req)}</p>`;
    html += `<div class="spec-grid">${specTable('Requisitos mínimos', specs.min, 'min')}${specTable('Recomendados', specs.rec, 'rec')}</div>`;
    html += '<p class="spec-note">Valores orientativos; pueden variar según la versión y el tamaño de tus proyectos.</p>';
  }
  $('#modal-specs').innerHTML = html;

  $('#modal-buy').href = product.enlace || WHATSAPP;
  lastFocus = document.activeElement;
  modal.classList.add('is-open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  $('#modal-close').focus();
}

function closeInfo() {
  if (!modal || !modal.classList.contains('is-open')) return;
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  lastFocus?.focus?.();
}

/* ==========================================================================
   INICIO
   ========================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderProductos();
  $('#current-year').textContent = new Date().getFullYear();

  searchInput?.addEventListener('input', renderProductos);
  chipsWrap?.addEventListener('click', (event) => {
    const chip = event.target.closest('.chip');
    if (chip) setCategory(chip.dataset.category);
  });
  $('#clear-filters')?.addEventListener('click', resetFilters);
  $('#empty-reset')?.addEventListener('click', resetFilters);

  catalog?.addEventListener('click', (event) => {
    const button = event.target.closest('[data-product-index]');
    if (button) openInfo(productos[Number(button.dataset.productIndex)]);
  });

  modal?.addEventListener('click', (event) => {
    if (event.target.classList.contains('modal-backdrop') || event.target.closest('#modal-close')) closeInfo();
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeInfo();
  });

  /* Menú móvil */
  const menuToggle = $('#menu-toggle');
  const navLinks = $('#nav-links');
  const setMenu = (open) => {
    navLinks.classList.toggle('is-open', open);
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
  };
  menuToggle?.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') !== 'true'));
  navLinks?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenu(false)));

  /* Enlace activo según la sección visible */
  const links = [...document.querySelectorAll('.nav-link')];
  const sections = links.map((l) => document.querySelector(l.getAttribute('href'))).filter(Boolean);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        links.forEach((l) => l.classList.toggle('active', l.getAttribute('href') === `#${entry.target.id}`));
      });
    }, { rootMargin: '-40% 0px -55% 0px' });
    sections.forEach((s) => observer.observe(s));
  }
});
