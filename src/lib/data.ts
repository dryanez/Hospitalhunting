export const COMUNAS = [
    // Valparaíso Province
    'Valparaíso', 'Viña del Mar', 'Concón', 'Quintero', 'Puchuncaví', 'Casablanca', 'Juan Fernández',
    // Marga Marga Province
    'Quilpué', 'Villa Alemana', 'Limache', 'Olmué',
    // Quillota Province
    'Quillota', 'La Calera', 'La Cruz', 'Nogales', 'Hijuelas',
    // San Antonio Province
    'San Antonio', 'Cartagena', 'El Tabo', 'El Quisco', 'Algarrobo', 'Santo Domingo',
    // San Felipe Province
    'San Felipe', 'Llay-Llay', 'Catemu', 'Panquehue', 'Putaendo', 'Santa María',
    // Los Andes Province
    'Los Andes', 'Calle Larga', 'Rinconada', 'San Esteban',
    // Petorca Province
    'La Ligua', 'Petorca', 'Cabildo', 'Papudo', 'Zapallar',
    // Isla de Pascua
    'Isla de Pascua'
].sort()

export const INITIAL_FACILITIES = [
    // ========================================
    // VALPARAÍSO - CESFAMs
    // ========================================
    {
        name: 'CESFAM Barón',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Blanco Viel 661, Cerro Barón',
        phone: '32 213 6005 / 800 500 507',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: 'Lunes a Viernes 08:00-12:30 y 14:00-16:30, Sábado 09:00-12:30'
    },
    {
        name: 'CESFAM/SAPU Placeres',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Manuel Casanova 289, Población Sara Brown, Cerro Placeres',
        phone: '32 213 6501 / 800 500 513',
        email: 'dirplaceres@cormuval.cl',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU: Lun-Vie 17:00-08:00, Fin de semana 24 horas'
    },
    {
        name: 'CESFAM Cordillera',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Chaparro 197, Cerro Cordillera',
        phone: '800 500 508 / 32 213 6089',
        email: 'cesfamcordillera@gmail.com',
        website: 'https://cmvalparaiso.cl',
        notes: 'Lunes a Viernes 08:30-20:00, Sábado 08:30-13:00'
    },
    {
        name: 'CESFAM Esperanza',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Galvarino Nº7, Cerro Esperanza',
        phone: '32 213 6401 / 800 500 509',
        email: 'diresperanza@cormuval.cl',
        website: 'https://cmvalparaiso.cl',
        notes: ''
    },
    {
        name: 'CESFAM/SAPU Marcelo Mena',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Av. Alemania 5360, Cerro Cárcel',
        phone: '512 / 800 500 512',
        email: 'secretariamena@cmvalparaiso.cl',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU: Lun-Vie 17:00-24:00, Fin de semana 08:00-24:00'
    },
    {
        name: 'CESFAM/SAPU Placilla',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Calle Octava 724, esquina central, Placilla-Peñuelas',
        phone: '6108 / 800 500 510',
        email: 'difusioncesfamplacilla@gmail.com',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU: 24 horas fines de semana'
    },
    {
        name: 'CESFAM/SAPU Quebrada Verde',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Quebrada Verde 1405, Cerro Playa Ancha',
        phone: '032-2571503',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU: 24 horas fines de semana'
    },
    {
        name: 'CESFAM/SAPU Reina Isabel II',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Avda. Washington 1926, Cerro O\'Higgins',
        phone: '800 500 512',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU: Lun-Vie 17:00-24:00, Fin de semana 08:00-24:00'
    },
    {
        name: 'CESFAM Jean y Marie Thierry',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Blas Cuevas 985',
        phone: '032-2571650',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: ''
    },
    {
        name: 'CESFAM Las Cañas',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Los Alerces s/n, Cerro Las Cañas',
        phone: '800 500 511',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: ''
    },
    {
        name: 'CESFAM Plaza Justicia',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Plaza Justicia Nº 99',
        phone: '800 500 523',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: ''
    },
    {
        name: 'CESFAM Puertas Negras',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Población Montedónico s/n, Cerro Playa Ancha',
        phone: '800 500 514',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: ''
    },
    {
        name: 'CESFAM Rodelillo',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Tierras Rojas s/n, Cerro Rodelillo',
        phone: '800 500 517',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: ''
    },
    {
        name: 'CESFAM Padre Damián Molokai',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Cabritería Norte 2055, Población Las Palmas, Cerro Placeres',
        phone: '800 500 518',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: ''
    },

    // ========================================
    // VALPARAÍSO - HOSPITALES
    // ========================================
    {
        name: 'Hospital Carlos Van Buren',
        type: 'Hospital' as const,
        comuna: 'Valparaíso',
        address: 'San Ignacio 725, Valparaíso',
        phone: '+56 32 236 4000',
        email: '',
        website: 'https://hospitalcarlosvanburen.cl',
        notes: 'Hospital público principal de Valparaíso, alta complejidad'
    },
    {
        name: 'Hospital Dr. Eduardo Pereira',
        type: 'Hospital' as const,
        comuna: 'Valparaíso',
        address: 'Ibsen s/n, Valparaíso',
        phone: '032-207700',
        email: '',
        website: '',
        notes: 'Hospital público'
    },
    {
        name: 'Hospital Del Salvador',
        type: 'Hospital' as const,
        comuna: 'Valparaíso',
        address: 'Subida Leopoldo Carvallo 200, Valparaíso',
        phone: '(32) 2577200',
        email: '',
        website: 'https://hsalvador.cl',
        notes: 'Mesa Central: 22 575 4000, Urgencias: 22 608 6929'
    },

    // ========================================
    // VALPARAÍSO - CLÍNICAS PRIVADAS
    // ========================================
    {
        name: 'Clínica RedSalud Valparaíso',
        type: 'Clínica' as const,
        comuna: 'Valparaíso',
        address: 'Brasil 2350, Valparaíso',
        phone: '600 718 6000',
        email: '',
        website: 'https://redsalud.cl',
        notes: 'Atención 24 horas, alta complejidad'
    },
    {
        name: 'Centro Médico y Dental RedSalud Muelle Barón',
        type: 'Clínica' as const,
        comuna: 'Valparaíso',
        address: 'Av. Argentina 1, Valparaíso',
        phone: '600 718 6000',
        email: '',
        website: 'https://redsalud.cl',
        notes: 'Centro médico y dental'
    },

    // ========================================
    // VIÑA DEL MAR - CESFAMs
    // ========================================
    {
        name: 'CESFAM Marco Maldonado (Viña Centro)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Álvarez 1682, Plan',
        phone: '22 3912 933',
        email: 'dirmaldonado@cormuvina.cl',
        website: 'https://cmvm.cl',
        notes: 'Director: Diego Andres Vargas Zuñiga'
    },
    {
        name: 'CESFAM Lusitania (Miraflores Alto)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Bellavista 1228, Miraflores Alto',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: 'Director: Andrea Cira Rastello Pizarro'
    },

    // ========================================
    // VIÑA DEL MAR - HOSPITALES Y CLÍNICAS
    // ========================================
    {
        name: 'Hospital Dr. Gustavo Fricke',
        type: 'Hospital' as const,
        comuna: 'Viña del Mar',
        address: 'Calle Álvarez 1532, Viña del Mar',
        phone: '(32) 2577600 / (32) 2577602-3',
        email: '',
        website: 'https://hospitalfricke.cl',
        notes: 'Hospital de alta complejidad. Info pacientes urgencia adulto: (32) 2190518'
    },
    {
        name: 'Hospital Clínico Viña del Mar',
        type: 'Hospital' as const,
        comuna: 'Viña del Mar',
        address: 'Viña del Mar',
        phone: '',
        email: '',
        website: 'https://hospitalclinico.cl',
        notes: 'Hospital privado con urgencias 24 horas'
    },
    {
        name: 'Clínica Ciudad del Mar',
        type: 'Clínica' as const,
        comuna: 'Viña del Mar',
        address: '13 Norte 635, Viña del Mar',
        phone: '+56 32 245 1000',
        email: '',
        website: 'https://ccdm.cl',
        notes: 'Red de centros médicos asociados'
    },
    {
        name: 'IntegraMédica Viña del Mar',
        type: 'Clínica' as const,
        comuna: 'Viña del Mar',
        address: '13 Norte 853, Boulevard Mall Marina Arauco, pisos 4 y 5',
        phone: '600 636 6666',
        email: '',
        website: 'https://integramedica.cl',
        notes: 'Centro Médico y Dental'
    },
    {
        name: 'Clínica Bupa Reñaca',
        type: 'Clínica' as const,
        comuna: 'Viña del Mar',
        address: 'Anabaena, Reñaca 336, Viña del Mar',
        phone: '600 712 0020',
        email: '',
        website: 'https://clinicarenaca.cl',
        notes: ''
    },
    {
        name: 'Centro Médico y Dental RedSalud Viña del Mar',
        type: 'Clínica' as const,
        comuna: 'Viña del Mar',
        address: '3 Norte 464, Viña del Mar',
        phone: '600 718 6000',
        email: '',
        website: 'https://redsalud.cl',
        notes: 'Centro médico y dental'
    },

    // ========================================
    // QUILPUÉ
    // ========================================
    {
        name: 'CESFAM Quilpué',
        type: 'CESFAM' as const,
        comuna: 'Quilpué',
        address: 'Covadonga 1490, esquina San Martín',
        phone: '800 123 666',
        email: 'consultorioquilpue@latinmail.com',
        website: '',
        notes: ''
    },
    {
        name: 'Hospital de Quilpué',
        type: 'Hospital' as const,
        comuna: 'Quilpué',
        address: 'Calle San Martín 1270, Quilpué',
        phone: '(32) 2759010 / (32) 2539203',
        email: '',
        website: 'https://hospitaldequilpue.cl',
        notes: 'OIRS Hospital: (32) 2759057, OIRS Policlínico: (32) 2759253'
    },

    // ========================================
    // VILLA ALEMANA
    // ========================================
    {
        name: 'CESFAM Villa Alemana',
        type: 'CESFAM' as const,
        comuna: 'Villa Alemana',
        address: 'Avenida Baquedano #1140',
        phone: '323243512 (Secretaría) / 323243523 (OIRS)',
        email: '',
        website: 'https://cmva.cl',
        notes: 'Lun-Vie 08:00-20:00, Sáb 9:00-13:00. Director: Gabriel Guzmán Aguirre'
    },
    {
        name: 'CESFAM Eduardo Frei Ruiz-Tagle',
        type: 'CESFAM' as const,
        comuna: 'Villa Alemana',
        address: 'Rivadavia #1119, Población Rosenquist',
        phone: '323323530 (Secretaría) / 32-3323542 (OIRS)',
        email: '',
        website: 'https://cmva.cl',
        notes: 'Lun-Vie 08:00-20:00, Sáb 9:00-13:00. Director (S): Felipe León Schufeneger'
    },

    // ========================================
    // SAN ANTONIO
    // ========================================
    {
        name: 'CESFAM Néstor Fernández Thomas',
        type: 'CESFAM' as const,
        comuna: 'San Antonio',
        address: 'San Antonio',
        phone: '+56 35 2280828',
        email: 'Jhernandez@sanantonio.cl',
        website: 'https://sanantonio.cl',
        notes: ''
    },
    {
        name: 'CESFAM San Antonio',
        type: 'CESFAM' as const,
        comuna: 'San Antonio',
        address: 'San Antonio',
        phone: '+56 35 2280828',
        email: '',
        website: 'https://sanantonio.cl',
        notes: ''
    },
    {
        name: 'CESFAM Diputado Manuel Bustos',
        type: 'CESFAM' as const,
        comuna: 'San Antonio',
        address: 'San Antonio',
        phone: '+56 35 2280828',
        email: '',
        website: 'https://sanantonio.cl',
        notes: 'Incluye SAPU'
    },
    {
        name: 'CESFAM 30 de Marzo',
        type: 'CESFAM' as const,
        comuna: 'San Antonio',
        address: 'San Antonio',
        phone: '+56 35 2280828',
        email: '',
        website: 'https://sanantonio.cl',
        notes: ''
    },
    {
        name: 'CESFAM Barrancas',
        type: 'CESFAM' as const,
        comuna: 'San Antonio',
        address: 'San Antonio',
        phone: '+56 35 2280828',
        email: '',
        website: 'https://sanantonio.cl',
        notes: 'Incluye SAPU'
    },
    {
        name: 'Hospital Claudio Vicuña',
        type: 'Hospital' as const,
        comuna: 'San Antonio',
        address: 'Carmen Guerrero 945, San Antonio',
        phone: '(035) 2206160 / (35) 2212052',
        email: '',
        website: 'https://hcv.cl',
        notes: 'Consultas generales Lun-Vie 8:00-17:00: +35 2206170, Fin de semana: +35 2206172'
    },

    // ========================================
    // CASABLANCA
    // ========================================
    {
        name: 'Hospital San José de Casablanca',
        type: 'Hospital' as const,
        comuna: 'Casablanca',
        address: 'Casablanca',
        phone: '',
        email: '',
        website: '',
        notes: 'Hospital comunitario'
    },

    // ========================================
    // QUILLOTA
    // ========================================
    {
        name: 'CESFAM La Palma',
        type: 'CESFAM' as const,
        comuna: 'Quillota',
        address: 'Quillota',
        phone: '',
        email: '',
        website: 'https://saludquillota.cl',
        notes: 'Red Municipal: 6 centros urbanos y 3 rurales'
    },
    {
        name: 'Hospital San Martín de Quillota',
        type: 'Hospital' as const,
        comuna: 'Quillota',
        address: 'Quillota',
        phone: '',
        email: '',
        website: '',
        notes: 'Hospital de alta complejidad'
    },

    // ========================================
    // LA CALERA
    // ========================================
    {
        name: 'CESFAM La Calera',
        type: 'CESFAM' as const,
        comuna: 'La Calera',
        address: 'La Calera',
        phone: '',
        email: '',
        website: '',
        notes: ''
    },
    {
        name: 'CESFAM Artificio',
        type: 'CESFAM' as const,
        comuna: 'La Calera',
        address: 'La Calera',
        phone: '',
        email: '',
        website: 'https://lacalera.cl',
        notes: ''
    },
    {
        name: 'Hospital Dr. Mario Sánchez',
        type: 'Hospital' as const,
        comuna: 'La Calera',
        address: 'La Calera',
        phone: '',
        email: '',
        website: '',
        notes: 'Hospital comunitario'
    },

    // ========================================
    // SAN FELIPE
    // ========================================
    {
        name: 'CESFAM San Felipe El Real',
        type: 'CESFAM' as const,
        comuna: 'San Felipe',
        address: 'San Felipe',
        phone: '',
        email: '',
        website: 'https://cesfamsanfelipeelreal.cl',
        notes: ''
    },
    {
        name: 'CESFAM Dr. Segismundo Iturra',
        type: 'CESFAM' as const,
        comuna: 'San Felipe',
        address: 'San Felipe',
        phone: '',
        email: '',
        website: '',
        notes: ''
    },

    // ========================================
    // LOS ANDES
    // ========================================
    {
        name: 'CESFAM Centenario',
        type: 'CESFAM' as const,
        comuna: 'Los Andes',
        address: 'Avda Perú # 487, Sector Centenario',
        phone: '(34) 2 350020 (OIRS) / (34) 2 350065 / 800432333',
        email: 'cesfamcentenario@munilosandes.cl',
        website: '',
        notes: 'SAPU en este centro: Lun-Vie 17:00-24:00, Fin de semana 08:00-24:00'
    },
    {
        name: 'CESFAM Cordillera Andina',
        type: 'CESFAM' as const,
        comuna: 'Los Andes',
        address: 'Los Andes',
        phone: '800432244',
        email: '',
        website: '',
        notes: 'Call Center para horas de morbilidad'
    },

    // ========================================
    // PETORCA
    // ========================================
    {
        name: 'CESFAM Chincolco',
        type: 'CESFAM' as const,
        comuna: 'Petorca',
        address: 'Bernardo O\'Higgins 160, Chincolco',
        phone: '994549790 (SOME) / 949148606 (Interconsultas)',
        email: '',
        website: 'https://saludpetorca.cl',
        notes: 'Horarios variables por día'
    },
    {
        name: 'DESAM Petorca',
        type: 'CESFAM' as const,
        comuna: 'Petorca',
        address: 'Calle Silva #575, Petorca',
        phone: '975384697',
        email: 'salud@municipalidadpetorca.cl',
        website: 'https://saludpetorca.cl',
        notes: 'Lun-Jue 08:00-17:00, Vie 08:00-16:00'
    },

    // ========================================
    // CABILDO
    // ========================================
    {
        name: 'Consultorio Adosado Cabildo',
        type: 'CESFAM' as const,
        comuna: 'Cabildo',
        address: 'Lautaro s/n Cabildo',
        phone: '33 7662100 Anexo 292 / +569 71354018',
        email: '',
        website: '',
        notes: 'Horario: 08:30-17:30'
    },

    // ========================================
    // LA LIGUA
    // ========================================
    {
        name: 'CESFAM Raúl Sánchez Bañados',
        type: 'CESFAM' as const,
        comuna: 'La Ligua',
        address: 'Papudo 655, La Ligua',
        phone: '9 9702 4905',
        email: '',
        website: '',
        notes: 'Horas médicas presenciales desde 07:30. Dental: +56963212833 y +56963220277 (Miércoles 09:00-11:00)'
    },

    // ========================================
    // LIMACHE
    // ========================================
    {
        name: 'Hospital Santo Tomás de Limache',
        type: 'Hospital' as const,
        comuna: 'Limache',
        address: 'Limache',
        phone: '',
        email: '',
        website: '',
        notes: 'Hospital comunitario'
    },

    // ========================================
    // QUINTERO
    // ========================================
    {
        name: 'Hospital Adriana Cousiño',
        type: 'Hospital' as const,
        comuna: 'Quintero',
        address: 'Quintero',
        phone: '',
        email: '',
        website: '',
        notes: 'Hospital comunitario'
    },

    // ========================================
    // OTRAS COMUNAS - SERVICIO ACONCAGUA
    // ========================================
    {
        name: 'CESFAM San Esteban',
        type: 'CESFAM' as const,
        comuna: 'San Esteban',
        address: 'San Esteban',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    },
    {
        name: 'CESFAM Pedro Aguirre Cerda',
        type: 'CESFAM' as const,
        comuna: 'San Felipe',
        address: 'San Felipe',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    },
    {
        name: 'CESFAM Rinconada',
        type: 'CESFAM' as const,
        comuna: 'Rinconada',
        address: 'Rinconada',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    },
    {
        name: 'CESFAM Llay-Llay',
        type: 'CESFAM' as const,
        comuna: 'Llay-Llay',
        address: 'Llay-Llay',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    },
    {
        name: 'CESFAM Catemu',
        type: 'CESFAM' as const,
        comuna: 'Catemu',
        address: 'Catemu',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    },
    {
        name: 'CESFAM Santa María',
        type: 'CESFAM' as const,
        comuna: 'Santa María',
        address: 'Santa María',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    },
    {
        name: 'CESFAM Panquehue',
        type: 'CESFAM' as const,
        comuna: 'Panquehue',
        address: 'Panquehue',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    },
    {
        name: 'CESFAM Putaendo',
        type: 'CESFAM' as const,
        comuna: 'Putaendo',
        address: 'Putaendo',
        phone: '',
        email: '',
        website: 'https://serviciodesaludaconcagua.cl',
        notes: ''
    }
]
