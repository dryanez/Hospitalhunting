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
    'Los Andes', 'Call Larga', 'Rinconada', 'San Esteban',
    // Petorca Province
    'La Ligua', 'Petorca', 'Cabildo', 'Papudo', 'Zapallar',
    // Isla de Pascua
    'Isla de Pascua'
].sort()

export const INITIAL_FACILITIES = [
    // ========================================
    // VALPARAÍSO - CESFAMs (14)
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
        phone: '800 500 512',
        email: 'secretariamena@cmvalparaiso.cl',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU: Lun-Vie 17:00-24:00, Fin de semana 08:00-24:00'
    },
    {
        name: 'CESFAM/SAPU Placilla',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Calle Octava 724, esquina central, Placilla-Peñuelas',
        phone: '800 500 510',
        email: 'difusioncesfamplacilla@gmail.com',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU: Lun-Vie 17:00-24:00, Fin de semana 08:00-24:00'
    },
    {
        name: 'CESFAM/SAPU Quebrada Verde',
        type: 'SAPU' as const,
        comuna: 'Valparaíso',
        address: 'Quebrada Verde 1405, Cerro Playa Ancha',
        phone: '032-2571503',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: 'SAPU 24 horas'
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
    // VALPARAÍSO - CECOSF (2)
    // ========================================
    {
        name: 'CECOSF Juan Pablo II',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Av. Juan Pablo II 540',
        phone: '',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: 'Centro Comunitario de Salud Familiar'
    },
    {
        name: 'CECOSF Porvenir Bajo',
        type: 'CESFAM' as const,
        comuna: 'Valparaíso',
        address: 'Contulmo esq. Calle Tubul',
        phone: '',
        email: '',
        website: 'https://cmvalparaiso.cl',
        notes: 'Centro Comunitario de Salud Familiar'
    },

    // ========================================
    //VALPARAÍSO - HOSPITALES (3)
    // ========================================
    {
        name: 'Hospital Carlos Van Buren',
        type: 'Hospital' as const,
        comuna: 'Valparaíso',
        address: 'San Ignacio 725, Valparaíso',
        phone: '+56 32 236 4000',
        email: '',
        website: 'https://hospitalcarlosvanburen.cl',
        notes: 'Hospital público principal de Valparaíso, alta complejidad. Urgencias 24/7'
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
    // VALPARAÍSO - CLÍNICAS PRIVADAS (2)
    // ========================================
    {
        name: 'Clínica RedSalud Valparaíso',
        type: 'Clínica' as const,
        comuna: 'Valparaíso',
        address: 'Brasil 2350, Valparaíso',
        phone: '600 718 6000',
        email: '',
        website: 'https://redsalud.cl',
        notes: 'Atención urgencias 24/7, alta complejidad'
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
    // VIÑA DEL MAR - CESFAMs (11)
    // ========================================
    {
        name: 'CESFAM Marco Maldonado (Viña Centro)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Tamarugal 350, El Olivar',
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
    {
        name: 'CESFAM Brígida Zavala (Forestal Alto)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Álvarez 1682, Forestal Alto',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: '~15,470 usuarios'
    },
    {
        name: 'CESFAM Las Torres (Forestal Alto)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Avenida La Paz esquina Pakarati, Forestal Alto',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: '~11,351 usuarios'
    },
    {
        name: 'CESFAM/SAPU Dr. Jorge Kaplan (Reñaca Alto)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Avenida Quinta 875 Paradero 8 1/2, Reñaca Alto',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: 'SAPU: ~32,000 atenciones anuales'
    },
    {
        name: 'CESFAM/SAPU Gómez Carreño',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: '19 Poniente 5650, 4° Sector',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: 'Con SAPU integrado'
    },
    {
        name: 'CESFAM Miraflores',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Avenida Campo de Flores N°46, Santa Julia',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: ''
    },
    {
        name: 'CESFAM Nueva Aurora',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Viña del Mar',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: ''
    },
    {
        name: 'CESFAM Profesor Eugenio Cienfuegos',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Viña del Mar',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: ''
    },
    {
        name: 'CESFAM Dr. Juan C. Baeza Bustos',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Bellavista N°1228, Miraflores Alto',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: ''
    },
    {
        name: 'CESFAM Luistania',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Avda. Eduardo Frei esq. El Membrillo s/n',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: ''
    },

    // ========================================
    // VIÑA DEL MAR - CECOSF (4)
    // ========================================
    {
        name: 'CECOSF Achupallas-Miraflores (Sergio Donoso)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Viña del Mar',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: 'Centro Comunitario'
    },
    {
        name: 'CECOSF Las Palmas Chilenas (Forestal Alto)',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Parcela 11, Forestal Alto',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: 'Centro Comunitario'
    },
    {
        name: 'CECOSF Santa Julia',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Viña del Mar',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: 'Centro Comunitario'
    },
    {
        name: 'CECOSF Villa Hermosa',
        type: 'CESFAM' as const,
        comuna: 'Viña del Mar',
        address: 'Av. Alemania 850',
        phone: '',
        email: '',
        website: 'https://cmvm.cl',
        notes: 'Centro Comunitario'
    },

    // ========================================
    // VIÑA DEL MAR - HOSPITALES Y CLÍNICAS (7)
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
        notes: 'Urgencias 24/7'
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
    {
        name: 'Clínica Miraflores',
        type: 'Clínica' as const,
        comuna: 'Viña del Mar',
        address: 'Los Fresnos 276, Viña del Mar',
        phone: '(32) 238 9900 / (32) 238 9902',
        email: '',
        website: 'https://clinicamiraflores.cl',
        notes: 'Pabellones, UCI, Imagenología, Urgencias'
    },
    {
        name: 'Centro Médico Clínica Miraflores',
        type: 'Clínica' as const,
        comuna: 'Viña del Mar',
        address: '1 Norte 2101, esquina Los Pinos, Miraflores Bajo',
        phone: '(32) 324 3768 / (+56) 9 58797511',
        email: '',
        website: 'https://clinicamiraflores.cl',
        notes: 'Lun-Vie 09:00-13:00 / 14:00-17:30'
    },

    // ========================================
    // QUILPUÉ (4)
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
        notes: 'OIRS Hospital: (32) 2759057'
    },
    {
        name: 'Clínica Los Carrera',
        type: 'Clínica' as const,
        comuna: 'Quilpué',
        address: 'Caupolicán 958, Quilpué',
        phone: '',
        email: '',
        website: 'https://clinicaloscarrera.cl',
        notes: 'Cirugías, consultas, exámenes, telemedicina'
    },
    {
        name: 'Centro Médico ClinikPlus Quilpué',
        type: 'Clínica' as const,
        comuna: 'Quilpué',
        address: 'Quilpué',
        phone: '',
        email: '',
        website: 'https://clinikplus.cl',
        notes: 'Consultas, laboratorio, ECG, ecografías'
    },

    // ========================================
    // VILLA ALEMANA (2)
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
    // SAN ANTONIO (6)
    // ========================================
    {
        name: 'CESFAM Néstor Fernández Thomas',
        type: 'CESFAM' as const,
        comuna: 'San Antonio',
        address: 'San Antonio',
        phone: '+56 35 2280828',
        email: 'Jhernandez@sanantonio.cl',
        website: 'https://sanantonio.cl',
        notes: 'Con SAPU'
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
        notes: 'Con SAPU'
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
        name: 'CESFAM/SAPU Barrancas',
        type: 'CESFAM' as const,
        comuna: 'San Antonio',
        address: 'San Antonio',
        phone: '+56 35 2280828',
        email: '',
        website: 'https://sanantonio.cl',
        notes: 'Con SAPU'
    },
    {
        name: 'Hospital Claudio Vicuña',
        type: 'Hospital' as const,
        comuna: 'San Antonio',
        address: 'Carmen Guerrero 945, San Antonio',
        phone: '(035) 2206160 / (35) 2212052',
        email: '',
        website: 'https://hcv.cl',
        notes: 'Urgencias 24/7. Consultas Lun-Vie 8:00-17:00: +35 2206170'
    },

    // ========================================
    // CASABLANCA (1)
    // ========================================
    {
        name: 'Hospital San José de Casablanca',
        type: 'Hospital' as const,
        comuna: 'Casablanca',
        address: 'Casablanca',
        phone: '',
        email: '',
        website: '',
        notes: 'Hospital comunitario. Urgencias 24/7'
    },

    // ========================================
    // QUILLOTA (3)
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
    {
        name: 'Centro Médico Integral Diagin Quillota',
        type: 'Clínica' as const,
        comuna: 'Quillota',
        address: 'Quillota',
        phone: '',
        email: '',
        website: 'https://diagin.cl',
        notes: 'Radiología, laboratorio, consultas'
    },

    // ========================================
    // LA CALERA (3)
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
    // SAN FELIPE (2)
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
    // LOS ANDES (2)
    // ========================================
    {
        name: 'CESFAM/SAPU Centenario',
        type: 'CESFAM' as const,
        comuna: 'Los Andes',
        address: 'Avda Perú # 487, Sector Centenario',
        phone: '(34) 2 350020 / 800432333',
        email: 'cesfamcentenario@munilosandes.cl',
        website: '',
        notes: 'SAPU: Lun-Vie 17:00-24:00, Fin de semana 08:00-24:00'
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
    // PETORCA (2)
    // ========================================
    {
        name: 'CESFAM Chincolco',
        type: 'CESFAM' as const,
        comuna: 'Petorca',
        address: 'Bernardo O\'Higgins 160, Chincolco',
        phone: '994549790 (SOME) / 949148606',
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
    // CABILDO (1)
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
    // LA LIGUA (1)
    // ========================================
    {
        name: 'CESFAM Raúl Sánchez Bañados',
        type: 'CESFAM' as const,
        comuna: 'La Ligua',
        address: 'Papudo 655, La Ligua',
        phone: '9 9702 4905',
        email: '',
        website: '',
        notes: 'Horas médicas presenciales desde 07:30. Dental: +56963212833 (Miércoles 09:00-11:00)'
    },

    // ========================================
    // LIMACHE (3)
    // ========================================
    {
        name: 'CESFAM Limache Viejo',
        type: 'CESFAM' as const,
        comuna: 'Limache',
        address: 'Andrés Bello #511, Limache Viejo',
        phone: '9 9673 5576 / 99673 5893',
        email: '',
        website: 'https://limache.cl',
        notes: 'Lun-Vie 8:00-17:00, Extensión hasta 20:00. OIRS: 33 2 294900'
    },
    {
        name: 'Hospital Santo Tomás de Limache',
        type: 'Hospital' as const,
        comuna: 'Limache',
        address: 'Carelmapu s/n, Limache',
        phone: '(33) 2293056',
        email: '',
        website: 'https://hospitaldelimache.cl',
        notes: 'Hospital comunitario'
    },
    {
        name: 'Hospital Geriátrico Paz de la Tarde',
        type: 'Hospital' as const,
        comuna: 'Limache',
        address: 'Caupolican 198, Limache',
        phone: '(33) 2 29 48 01',
        email: '',
        website: '',
        notes: 'Hospital geriátrico'
    },

    // ========================================
    // OLMUÉ (1)
    // ========================================
    {
        name: 'CESFAM Olmué (Manuel Lucero)',
        type: 'CESFAM' as const,
        comuna: 'Olmué',
        address: 'Calle Lo Rojas 2250, Paradero 26, Olmué',
        phone: '(33) 244 33 93-94-95-96',
        email: 'direccion@cesfamolmue.cl',
        website: 'https://cesfamolmue.cl',
        notes: 'Horario: 8:30-17:20. Ambulancia: 51970014'
    },

    // ========================================
    // QUINTERO (1)
    // ========================================
    {
        name: 'CESFAM Quintero',
        type: 'CESFAM' as const,
        comuna: 'Quintero',
        address: 'Quintero',
        phone: '32-2576460 (menores 5 y +65 años) / 32-2576461 (público general)',
        email: 'direccion@desamquintero.cl',
        website: '',
        notes: 'Horas médicas: 8:00-10:30. Info general: 32-2576421'
    },

    // ========================================
    // CONCÓN (2)
    // ========================================
    {
        name: 'CESFAM Concón',
        type: 'CESFAM' as const,
        comuna: 'Concón',
        address: 'Chañarcillo 1150, Concón',
        phone: '32 268 7204 / 32 281 6023',
        email: '',
        website: 'https://concon.cl',
        notes: ''
    },
    {
        name: 'SAR Concón (Servicio Alta Resolutividad)',
        type: 'SAPU' as const,
        comuna: 'Concón',
        address: 'Chañarcillo 1150, Concón',
        phone: '32 381 1585',
        email: '',
        website: 'https://concon.cl',
        notes: 'Servicio de urgencia adosado al CESFAM'
    },

    // ========================================
    // PUCHUNCAVÍ (4)
    // ========================================
    {
        name: 'CESFAM Puchuncaví',
        type: 'CESFAM' as const,
        comuna: 'Puchuncaví',
        address: 'Puchuncaví',
        phone: '995480985 / +56961477601',
        email: 'cesfampuchuncavi@desampuchuncavi.cl',
        website: 'https://munipuchuncavi.cl',
        notes: ''
    },
    {
        name: 'CESFAM Las Ventanas',
        type: 'CESFAM' as const,
        comuna: 'Puchuncaví',
        address: 'Puchuncaví',
        phone: '(32)2571900 / 32-2571910',
        email: 'cesfamlasventanas@desampuchuncavi.cl',
        website: 'https://munipuchuncavi.cl',
        notes: ''
    },
    {
        name: 'Posta Rural Maitencillo',
        type: 'CESFAM' as const,
        comuna: 'Puchuncaví',
        address: 'Padre E. del Río s/n, Maitencillo',
        phone: '(32)2771335 / (32)771 715',
        email: '',
        website: '',
        notes: 'Posta rural'
    },
    {
        name: 'Posta Rural Horcón',
        type: 'CESFAM' as const,
        comuna: 'Puchuncaví',
        address: 'Av Principal 172, Horcón',
        phone: '(32)2794629',
        email: '',
        website: '',
        notes: 'Posta rural'
    },

    // ========================================
    // CARTAGENA (2)
    // ========================================
    {
        name: 'CESFAM Cartagena',
        type: 'CESFAM' as const,
        comuna: 'Cartagena',
        address: 'Mariano Casanova N°210, Cartagena',
        phone: '352 459973 / 352200300',
        email: '',
        website: 'https://municipalidadcartagena.cl',
        notes: 'Con sistema de ficha electrónica'
    },
    {
        name: 'SAPU Cartagena',
        type: 'SAPU' as const,
        comuna: 'Cartagena',
        address: 'Cartagena',
        phone: '352 459973',
        email: '',
        website: 'https://municipalidadcartagena.cl',
        notes: 'Servicio de urgencia'
    },

    // ========================================
    // EL TABO (1)
    // ========================================
    {
        name: 'CESFAM El Tabo',
        type: 'CESFAM' as const,
        comuna: 'El Tabo',
        address: 'Avenida 729 San Marcos, El Tabo',
        phone: '+56 44 2351300 (general) / +56 44 2351330 (urgencia)',
        email: '',
        website: 'https://eltabo.cl',
        notes: 'Horario: 8:15-20:00'
    },

    // ========================================
    // EL QUISCO (1)
    // ========================================
    {
        name: 'CESFAM El Quisco (SUR)',
        type: 'CESFAM' as const,
        comuna: 'El Quisco',
        address: 'Av. Isidoro Dubornais 250, El Quisco',
        phone: '',
        email: '',
        website: 'https://saludelquisco.cl',
        notes: 'Servicio Urgencia Rural 24/7. Gratuito para FONASA'
    },

    // ========================================
    // ALGARROBO (2)
    // ========================================
    {
        name: 'CESFAM Algarrobo',
        type: 'CESFAM' as const,
        comuna: 'Algarrobo',
        address: 'El Retamo 2249, Algarrobo',
        phone: '',
        email: '',
        website: 'https://cesfamalgarrobo.cl',
        notes: ''
    },
    {
        name: 'SAPU Algarrobo',
        type: 'SAPU' as const,
        comuna: 'Algarrobo',
        address: 'Carabineros de Chile 2350, Algarrobo',
        phone: '',
        email: '',
        website: 'https://cesfamalgarrobo.cl',
        notes: 'SAPU 24 horas'
    },

    // ========================================
    // SANTO DOMINGO (1)
    // ========================================
    {
        name: 'CESFAM Santo Domingo',
        type: 'CESFAM' as const,
        comuna: 'Santo Domingo',
        address: 'Las Hortensias 146, Santo Domingo',
        phone: '352204500',
        email: '',
        website: 'https://santodomingo.cl',
        notes: ''
    },

    // ========================================
    // LA CRUZ (1)
    // ========================================
    {
        name: 'CESFAM La Cruz',
        type: 'CESFAM' as const,
        comuna: 'La Cruz',
        address: 'Avenida 21 de mayo 5010, La Cruz',
        phone: '(33) 294740 / 950871672',
        email: '',
        website: 'https://lacruz.cl',
        notes: 'Lun-Vie 8:00-20:00, Sáb 9:00-14:00'
    },

    // ========================================
    // HIJUELAS (2)
    // ========================================
    {
        name: 'CESFAM Dr. Orlando Orrego',
        type: 'CESFAM' as const,
        comuna: 'Hijuelas',
        address: 'Calle Manuel Rodríguez #405, Hijuelas',
        phone: '+569 58254977 / 332290154',
        email: '',
        website: 'https://saludhijuelas.cl',
        notes: ''
    },
    {
        name: 'CESFAM Ocoa',
        type: 'CESFAM' as const,
        comuna: 'Hijuelas',
        address: 'Hijuelas',
        phone: '33 2 48 01 00',
        email: '',
        website: 'https://hijuelas.cl',
        notes: ''
    },

    // ========================================
    // NOGALES (1)
    // ========================================
    {
        name: 'CESFAM Nogales',
        type: 'CESFAM' as const,
        comuna: 'Nogales',
        address: 'Nogales',
        phone: '',
        email: '',
        website: '',
        notes: ''
    },

    // ========================================
    // CALLE LARGA (1)
    // ========================================
    {
        name: 'Consultorio Calle Larga',
        type: 'CESFAM' as const,
        comuna: 'Calle Larga',
        address: 'Calle Larga',
        phone: '(34) 493050',
        email: '',
        website: '',
        notes: 'Con Posta Rural San Vicente'
    },

    // ========================================
    // RINCONADA (1)
    // ========================================
    {
        name: 'CESFAM Rinconada',
        type: 'CESFAM' as const,
        comuna: 'Rinconada',
        address: 'Calle Perfecto de la Fuente #31, Rinconada',
        phone: '',
        email: '',
        website: 'https://munisanesteban.cl',
        notes: ''
    },

    // ========================================
    // SAN ESTEBAN (1)
    // ========================================
    {
        name: 'CESFAM San Esteban',
        type: 'CESFAM' as const,
        comuna: 'San Esteban',
        address: 'Calle Los Aromos #363, San Esteban',
        phone: '',
        email: '',
        website: 'https://munisanesteban.cl',
        notes: ''
    },

    // ========================================
    // PAPUDO (2)
    // ========================================
    {
        name: 'CESFAM Papudo',
        type: 'CESFAM' as const,
        comuna: 'Papudo',
        address: 'Calle El Peumo #1200, Papudo',
        phone: '',
        email: '',
        website: 'https://munipapudo.cl',
        notes: 'Laboratorio, vacunación, prenatal, psicoterapia'
    },
    {
        name: 'Posta Rural Pullally',
        type: 'CESFAM' as const,
        comuna: 'Papudo',
        address: 'Pullally, Papudo',
        phone: '',
        email: '',
        website: 'https://munipapudo.cl',
        notes: 'Posta rural'
    },

    // ========================================
    // ZAPALLAR(1)
    // ========================================
    {
        name: 'CESFAM Catapilco (en construcción)',
        type: 'CESFAM' as const,
        comuna: 'Zapallar',
        address: 'Catapilco, Zapallar',
        phone: '',
        email: '',
        website: 'https://munizapallar.cl',
        notes: 'Nuevo CESFAM en construcción, beneficiará a +5,000 usuarios'
    },

    // ========================================
    // MÁS CENTROS (Servicio Aconcagua)
    // ========================================
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
