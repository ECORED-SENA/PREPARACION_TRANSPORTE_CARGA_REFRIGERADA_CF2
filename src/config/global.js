export default {
  global: {
    componenteFormativo:
      'Preparación del proceso de transporte de carga refrigerada',
    descripcionCurso:
      'Las tendencias de la globalización de mercados y las expectativas requeridas por los consumidores, hace que la conservación de productos esté acorde con las políticas de seguridad alimentaria y la protección de salud del consumidor, garantizando su calidad frente a la cadena de frío y protocolos de higiene, limpieza y conservación.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Características técnicas del transporte de carga refrigerada',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Temperaturas y cadena de frío',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Contenedores refrigerados',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Conservación',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Plan de carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Procedimientos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Métodos de cargue',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Ruta e itinerario',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Inspección de carga',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Control de cantidad y calidad de la carga',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Mercancías inspeccionadas y analizadas',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Protocolos y seguridad',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo:
              'Generalidades sobre prácticas higiénicas en el transporte de alimentos',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Problemas sanitarios con el manejo de alimentos',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo: 'Salud y seguridad en el transporte de carga refrigerada',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arias, E. (2019). Plan Logístico de Transporte de carga contenerizada para la empresa Transcarprimen S.A. Observartorio de la econonomìa Latinoamericana, 13.',
    },
    {
      referencia:
        'Artículo 981. Contrato de transporte. (s.f.). Código de Comercio. Colombia.',
    },
    {
      referencia: 'Ashqui, J. (2020). Definiciones del transporte.',
      link:
        'https://es.scribd.com/document/465532752/Definiciones-del-Transporte-Terrestre-pdf',
    },
    {
      referencia: 'CCL. (2013). Manual de Logística de Paletización.',
      link:
        'https://www.gs1cr.org/wp-content/uploads/2016/04/manual_logistica.pdf',
    },

    {
      referencia:
        'Departamento de Salud y Servicios Humanos de EE.UU. (2021). Tabla de conservación de alimentos fríos.',
      link:
        'http://espanol.foodsafety.gov/mantener /gráficos/14r9/tiemposde conservación.html',
    },
    {
      referencia: 'Góngora A. & Almeydas, V. (2020). Outsourcing.',
      link: 'https://es.scribd.com/document/457209359/Oustsourcing',
    },
    {
      referencia:
        'IALIMENTOS. (2015). ¿Quién vigila el transporte refrigerado?',
      link:
        'https://www.revistaialimentos.com/ediciones/edicion-8/quien-vigila-el-transporte-refrigerado-2/',
    },
    {
      referencia:
        'INVIMA. (s.f.). Orientación técnica para verificación de temperaturas de alimentos refrigerados. Colombia.',
    },
    {
      referencia:
        'Navarro, H. (2013). Logìstica en la cadena de frío. (p.13). Bogotá: Proexport.',
    },
    {
      referencia: 'OPS & OMS. (s.f.). Cluster de Salud Colombia: Quienes Somos.',
      link:
        'https://www.paho.org/es/cluster-salud-colombia-sistema-informacion/cluster-salud-colombia-quienes-somos',
    },
    {
      referencia:
        'Polifret (2020). La cadena de frío en el transporte refrigerado',
      link: 'https://www.polifret.es/cadena-frio-transporte-refrigerado/',
    },
    {
      referencia:
        'Salazar López Brayan, (Julio 5, 2119), Cross Docking, obtenido de ',
      link:
        'https://www.ingenieriaindustrialonline.com/logistica/cross-docking/',
    },
    {
      referencia:
        'Salud, M. d. (2017). Guìa de inocuidad de alimentos y bebidas para la actividad de transporte. Subdirecciòn de Salud Nutricional, alimentos y bebidas. Bogotá, Colombia.',
    },
    {
      referencia:
        'SGS TECNOS. Departamento de Desarrollo de Proyectos e Innovación (2008). La salud laboral de los trabajadores del sector de frio industrial.',
      link:
        'http://tusaludnoestaennomina.com/wp-content/uploads/2014/12/La-salud-laboral-en-los-trabajadores-del-sector-de-frio-industrial.pdf',
    },
    {
      referencia:
        'Transgesa. (s,f.). Logística interna, ¿qué es? Y ¿cuándo emplearla?',
      link: 'https://www.transgesa.com/blog/logistica-interna-que-es/ ',
    },
    {
      referencia:
        'Resolución 2505 de 2004. [Ministerio de Transporte]. Por la cual se reglamentan las condiciones que deben cumplir los vehículos para transportar carne, pescado o alimentos fácilmente corruptibles. Septiembre 6 de 2004.',
      link: 'https://web.mintransporte.gov.co/jspui/handle/001/3868',
    },
    {
      referencia:
        'Villalobos, J. (2010). Seguridad en la operación del transporte de carga carretero. Facilitación del transporte y el comercio en América Latina y el Caribe, 3-4.',
    },
  ],
  glosario: [
    {
      termino: 'Cross docking',
      significado:
        'Sistema de distribución donde las unidades logísticas son recibidas en una plataforma de alistamiento y no son almacenadas sino preparadas para ser enviadas de la manera más inmediata. (Salazar, 2019)',
    },
    {
      termino: 'Logística interna',
      significado:
        'Todos aquellos procesos de la cadena de suministro que tienen lugar dentro de la propia empresa. Es decir, desde que la compañía recibe la mercancía en sus instalaciones hasta que ésta sale, ya sea hacia un colaborador logístico o rumbo a su destino final. (Transgesa, s,f.).',
    },
    {
      termino: '<em>Outsourcing</em>',
      significado:
        'Subcontratación, el contrato que una empresa realiza a otra para que ésta lleve a cabo determinadas tareas que, originalmente, estaban en manos de la primera. Góngora (Góngora y Almeydas, 2020).',
    },
    {
      termino: 'Paletizado',
      significado:
        'Acción y efecto de disponer mercancía sobre un palé para su almacenaje y Transporte. (Manual de Logística de Paletización, 2013).',
    },
    {
      termino: 'Transporte Terrestre',
      significado:
        'El transporte terrestre es el transporte que se realiza sobre la superficie terrestre. La gran mayoría de transportes terrestres se realizan sobre ruedas. (Ashqui, 2020).',
    },
  ],
  complementario: [
    {
      texto: 'Navarro, H. (2013). Logística en la cadena de frio.',
      tipo: 'Conferencia',
      descarga:
        '/downloads/Conferencia_logistica_en_la_cadena_de_frio_proexport.pdf',
    },
    {
      texto:
        'MinSalud. (2017). Guía de inocuidad de alimentos y bebidas para la actividad del transporte.',
      tipo: 'Guía',
      descarga: '/downloads/Guia-inocuidad-alimentos-transporte.pdf',
    },
    {
      texto:
        'Bernal, M. y Perdomo, M. (2018). Transporte terrestre de carga refrigerada',
      tipo: 'Trabajo de grado',
      descarga: '/downloads/Transporte_terrestre_carga_refrigerada.pdf',
    },
    {
      texto:
        'Dueñas, D. (2012). Calificación del proceso de embalaje, transporte y distribución en La cadena de frío, como almacén de producto terminado.',
      tipo: 'Trabajo de grado',
      descarga: '/downloads/Calificacion_proceso_embalaje.pdf',
    },
    {
      texto: 'Código del comercio. Artículo 981. Contrato de transporte.',
      tipo: 'Artículo del Código de comercio',
      link: 'https://leyes.co/codigo_de_comercio/981.htm',
    },
    {
      texto:
        'Resolución 2505 de 2004. [Ministerio de Transporte]. Por la cual se reglamentan las condiciones que deben cumplir los vehículos para transportar carne, pescado o alimentos fácilmente corruptibles. Septiembre 6 de 2004.',
      tipo: 'Resolución',
      link: 'https://web.mintransporte.gov.co/jspui/handle/001/3868',
    },
    {
      texto:
        'Arias, E. (2019). Plan logístico de transporte de carga contenerizada para la empresa Transcarprimen S.A.',
      tipo: 'Artículo',
      link: 'http://repositorio.ulvr.edu.ec/handle/44000/3478',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Ruth Leonor Reyes Villalba',
        cargo: 'Experta temática',
        centro: 'CIES <br>Regional Norte de Santander',
      },
      {
        nombre: 'Hernando Oviedo Viera',
        cargo: 'Experto temático',
        centro:
          'Centro de Gestión de Mercados, Logística y Tecnologías de la Información<br>Regional Distrito Capital',
      },
      {
        nombre: 'Beatriz Eugenia Agudelo Vásquez',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Gestión Industria <br>Regional Distrito Capital',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisora metodológica y pedagógica',
        centro: 'Centro de Diseño y Metrología <br>Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica <br>Regional Distrito capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Luis Fernando Sarmiento',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Lizeth Manchego',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Andres Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Ricardo Vásquez Arroyave',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
      {
        nombre: 'Emilsen Alfonso Bautista',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura <br>Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios <br>Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
