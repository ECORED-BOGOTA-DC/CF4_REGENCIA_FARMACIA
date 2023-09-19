export default {
  global: {
    componenteFormativo: 'Evaluación de la atención en salud',
    descripcionCurso:
      'Este componente formativo describe la importancia de evaluar la satisfacción del usuario en los servicios de salud, dando respuesta de manera oportuna y asertiva a todas las peticiones, sugerencias, quejas y reclamos. <br> <br>  En la primera línea de atención al usuario se van a encontrar los diferentes tipos de clientes, quienes requieren con urgencia una respuesta clara, veraz y humanizada a las diferentes necesidades que los rodean en la atención en salud.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
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
        titulo: 'Satisfacción del usuario',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Métodos proactivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Métodos reactivos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Mecanismos establecidos por la Constitución para garantizar el cumplimiento de los derechos fundamentales en salud',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Sistema de Información y Atención al Usuario – SIAU',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Ley de participación ciudadana',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Sujetos de especial protección',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Política de atención en salud',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
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
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/material.pdf',
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
        'Contraloría delegada para la participación ciudadana. (2018). Plan Nacional de Formación, Control Social a la Gestión Pública. Control social al derecho a la salud fase de focalización. Contraloría General de la República. ',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IGUB/control-social-salud-contraloria.pdf',
    },
    {
      referencia:
        'Corte Constitucional. Sentencia T-282/08, Sala Quinta de Revisión (MP. Mauricio González Cuervo; 14 de marzo de 2008). ',
      link:
        'https://www.corteconstitucional.gov.co/relatoria/2008/T-282-08.htm',
    },
    {
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos, y se dictan otras disposiciones.  Mayo 14 de 2007. ',
      link:
        'https://www.invima.gov.co/documents/20143/453029/Resoluci%C3%B3n+1403+de+2007.pdf/6b2e1ce1-bb34-e17f-03ef-34e35c126949',
    },
    {
      referencia:
        'Supersalud. (2003). El Control que defiende los derechos de los usuarios. Veeduría ciudadana en el sistema general de seguridad social en salud. ',
      link:
        'https://docs.supersalud.gov.co/PortalWeb/ProteccionUsuario/OtrosDocumentosProteccionUsuario/cartilla%20veeduria%20ciudadana.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Asertividad',
      significado:
        'Habilidad de expresar nuestros deseos de una manera amable, franca, abierta, directa y adecuada, logrando decir lo que queremos, sin atentar contra los demás.',
    },
    {
      termino: 'Bioética',
      significado:
        'Rama de la ética dedicada a promover los principios para la conducta más apropiada del ser humano con respecto a la vida, tanto de la vida humana como del resto de seres vivos, así como al ambiente en el que pueden darse condiciones aceptables para la misma.',
    },
    {
      termino: 'Calidad',
      significado:
        'Conjunto de características inherentes a un objeto, producto, servicio, proceso, persona, organización, sistema o recurso, que cumplen con los requisitos.',
    },
    {
      termino: 'Empatía',
      significado:
        'Capacidad que tiene una persona de percibir los sentimientos, pensamientos y emociones de los demás, basada en el reconocimiento del otro como similar. ',
    },
    {
      termino: 'Humanización',
      significado: 'Hacer a alguien más humano, familiar y afable.',
    },
    {
      termino: 'PQRS',
      significado: 'Peticiones, quejas, reclamos, solicitudes.',
    },
    {
      termino: 'Proactivo',
      significado:
        'Que tiene iniciativa y capacidad para anticiparse a problemas o necesidades futuras.',
    },
    {
      termino: 'Reactivo',
      significado: 'Adjetivo que se refiere a aquello que genera una reacción.',
    },
    {
      termino: 'SIAU',
      significado: ' Servicio de Información y Atención al Usuario.',
    },
    {
      termino: 'Veedor',
      significado:
        'Persona que tiene la facultad y la responsabilidad de observar, inspeccionar y controlar ciertas cuestiones, para determinar si tienen conformidad con lo establecido por las normas.',
    },
  ],
  complementario: [
    {
      tema: 'Calidad de los servicios farmacéuticos',
      referencia:
        'Resolución 1403 de 2007. [Ministerio de la Protección Social]. Por la cual se determina el Modelo de Gestión del Servicio Farmacéutico, se adopta el Manual de Condiciones Esenciales y Procedimientos, y se dictan otras disposiciones.  Mayo 14 de 2007.',
      tipo: 'Documento',
      link:
        'https://www.invima.gov.co/documents/20143/453029/Resoluci%C3%B3n+1403+de+2007.pdf/6b2e1ce1-bb34-e17f-03ef-34e35c126949',
    },
    {
      tema: 'Control social al derecho a la salud',
      referencia:
        'Contraloría delegada para la participación ciudadana. (2018). <i>Plan Nacional de Formación, Control Social a la Gestión Pública. Control social al derecho a la salud fase de focalización.</i> Contraloría General de la República.',
      tipo: 'Documento',
      link:
        'https://www.minsalud.gov.co/sites/rid/Lists/BibliotecaDigital/RIDE/INEC/IGUB/control-social-salud-contraloria.pdf',
    },
    {
      tema: 'Documento orientador de la Ley 850 de 2003',
      referencia:
        'Control Social a la Gestión Pública. (s.f.). <i>Documento orientador de la Ley 850 de 2003.</i> Red Institucional de Apoyo a las Veedurías Ciudadanas.',
      tipo: 'Documento',
      link:
        'https://www.procuraduria.gov.co/portal/media/file/DocLey850_web.pdf',
    },
    {
      tema: 'Ley de participación ciudadana',
      referencia:
        'Ministerio del Interior de Colombia. (2016). <i>Ley Estatutaria de Participación Ciudadana</i> [video]. YouTube.',
      tipo: 'Vídeo',
      link: ' https://www.youtube.com/watch?v=hMYk6x-nlcE',
    },
    {
      tema:
        'Política de atención en salud “Humanización de los servicios de salud”',
      referencia:
        'Cleveland Clinic. (2016). <i>Empatía: el vínculo humano para la atención del paciente.</i> [video]. YouTube.',
      tipo: 'Vídeo',
      link: 'https://www.youtube.com/watch?v=aJGW4OxKHUg',
    },
    {
      tema:
        'Veeduría ciudadana en el ciudadano en el sistema general de seguridad social en salud',
      referencia:
        'Supersalud. (2003). <i>El Control que defiende los derechos de los usuarios. Veeduría ciudadana en el sistema general de seguridad social en salud.</i>',
      tipo: 'Cartilla ',
      link:
        'https://docs.supersalud.gov.co/PortalWeb/ProteccionUsuario/OtrosDocumentosProteccionUsuario/cartilla%20veeduria%20ciudadana.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricía Aristizábal Gutiérres',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de línea de producción',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Emilia Sarmiento Mora',
          cargo: 'Experta temática - 2021',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Paula Andrea Taborda Ortiz',
          cargo: 'Diseñadora instruccional - 2021',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo:
            'Diseñadora instruccional – Revisora metodológica y pedagógica',
          centro:
            'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Julia Isabel Roberto',
          cargo: 'Corrector de estilo',
          centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
        },
        {
          nombre: 'Nelly Parra Guarín',
          cargo: 'Adecuación instruccional',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Andrés Felipe Velandia Espitia',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Centro de Gestión de Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jesús Antonio Vecino Valero',
          cargo: 'Diseño web - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Manuel Felipe Echavarria Orozco',
          cargo: 'Desarrollo fullstack - 2023',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lady Adriana Ariza Luque',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Laura Gisselle Murcia Pardo',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animación y producción audiovisual',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo:
            'Validación de recursos educativos digitales y vinculación al LMS',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
        {
          nombre: 'Leyson Fabián Castaño Pérez',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Centro de Gestión De Mercados, Logística y Tecnologías de la Información - Regional Distrito Capital',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
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
