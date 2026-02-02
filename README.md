# 🏥 MediJob CRM - Next.js Application

Sistema CRM profesional para médicos generales buscando empleo en la V Región de Valparaíso, Chile.

## 🚀 Despliegue Rápido en Vercel

### Opción 1: Deploy con un Click (Recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/medijob-crm)

### Opción 2: Deploy Manual

1. **Instala Vercel CLI**:
```bash
npm i -g vercel
```

2. **Navega al proyecto**:
```bash
cd medijob-crm
```

3. **Deploy**:
```bash
vercel
```

4. **Sigue las instrucciones** en la terminal

5. **Configura las variables de entorno** en el dashboard de Vercel:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`

## 📦 Instalación Local

### Prerrequisitos
- Node.js 18+ 
- npm o yarn
- Cuenta de Supabase

### Pasos

1. **Clona o descarga el proyecto**

2. **Instala dependencias**:
```bash
npm install
```

3. **Configura variables de entorno**:
Crea un archivo `.env.local` con:
```env
NEXT_PUBLIC_SUPABASE_URL=tu_url_de_supabase
NEXT_PUBLIC_SUPABASE_ANON_KEY=tu_anon_key_de_supabase
```

4. **Configura Supabase**:
Ejecuta el SQL del archivo `../database-setup.sql` en tu proyecto de Supabase

5. **Ejecuta en desarrollo**:
```bash
npm run dev
```

6. **Abre en el navegador**:
http://localhost:3000

## 🛠️ Tecnologías

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Base de Datos**: Supabase (PostgreSQL)
- **Icons**: Lucide React
- **Hosting**: Vercel

## 📁 Estructura del Proyecto

```
medijob-crm/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Layout principal
│   │   ├── page.tsx             # Página principal (CRM)
│   │   └── globals.css          # Estilos globales
│   └── lib/
│       ├── supabase.ts          # Cliente Supabase + Types
│       └── data.ts              # Datos iniciales
├── .env.local                   # Variables de entorno
├── vercel.json                  # Configuración Vercel
└── package.json                 # Dependencias
```

## ✨ Características

### Dashboard
- ✅ Estadísticas en tiempo real
- ✅ Métricas de aplicaciones
- ✅ Acciones rápidas
- ✅ Sincronización con Supabase

### Gestión de Centros de Salud
- ✅ CRUD completo de facilities
- ✅ Filtrado por comuna y tipo
- ✅ Búsqueda en tiempo real
- ✅ Información de contacto completa

### Planificación de Rutas
- ✅ Organización semanal
- ✅ Vista por día
- ✅ Asignación de visitas

### Seguimiento de Aplicaciones
- ✅ Board Kanban
- ✅ Estados: Pendiente, Aplicado, Entrevista, Aceptado
- ✅ Tracking de fechas

## 🎨 Personalización

### Cambiar Colores

Edita `src/app/globals.css`:

```css
:root {
  --primary: 210 100% 56%;      /* Color primario */
  --secondary: 280 65% 60%;     /* Color secundario */
  --background: 220 18% 10%;    /* Fondo */
}
```

### Agregar Nuevas Vistas

1. Crea un nuevo componente en `src/components/`
2. Importa y usa en `src/app/page.tsx`
3. Agrega botón de navegación en el header

## 🔐 Configuración de Supabase

### 1. Crear Proyecto

Ve a https://supabase.com y crea un nuevo proyecto

### 2. Ejecutar SQL

Copia el contenido de `../database-setup.sql` y ejecútalo en el SQL Editor

### 3. Obtener Credenciales

Ve a Project Settings → API:
- **URL**: `NEXT_PUBLIC_SUPABASE_URL`
- **anon/public key**: `NEXT_PUBLIC_SUPABASE_ANON_KEY`

### 4. Configurar en Vercel

En tu dashboard de Vercel → Settings → Environment Variables:
- Agrega ambas variables
- Marca "Production", "Preview" y "Development"

## 📱 Comandos Disponibles

```bash
# Desarrollo
npm run dev

# Build para producción
npm run build

# Iniciar servidor de producción
npm start

# Lint
npm run lint

# Type check
npm run type-check
```

## 🚀 Despliegue en Producción

### Desde GitHub

1. Sube tu código a GitHub
2. Ve a https://vercel.com/new
3. Importa tu repositorio
4. Configura las variables de entorno
5. Click en "Deploy"

### Desde CLI

```bash
vercel --prod
```

## 🔄 Actualizaciones

Para actualizar la aplicación en Vercel:

```bash
git add .
git commit -m "Update app"
git push origin main
```

Vercel desplegará automáticamente los cambios.

## 📊 Database Schema

### Facilities
```sql
id              UUID PRIMARY KEY
name            TEXT NOT NULL
type            TEXT NOT NULL
comuna          TEXT NOT NULL
address         TEXT
phone           TEXT
email           TEXT
website         TEXT
notes           TEXT
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### Applications
```sql
id              UUID PRIMARY KEY
facility_id     UUID REFERENCES facilities(id)
status          TEXT NOT NULL
applied_date    DATE
interview_date  DATE
notes           TEXT
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

### Routes
```sql
id              UUID PRIMARY KEY
facility_id     UUID REFERENCES facilities(id)
day_of_week     TEXT NOT NULL
order_index     INTEGER
time            TEXT
notes           TEXT
created_at      TIMESTAMP
updated_at      TIMESTAMP
```

## 🐛 Troubleshooting

### Error: "Cannot find module '@supabase/supabase-js'"
```bash
npm install @supabase/supabase-js
```

### Error: "Supabase client error"
- Verifica que las variables de entorno estén configuradas
- Asegúrate que las tablas existan en Supabase
- Revisa que las RLS policies estén configuradas

### La app no carga datos
- Abre DevTools (F12) y revisa la consola
- Verifica la conexión a Supabase
- Confirma que las tablas tengan políticas RLS habilitadas

## 📈 Próximas Características

- [ ] Modo offline con Service Workers
- [ ] Exportación a PDF
- [ ] Notificaciones push
- [ ] Integración con Google Calendar
- [ ] Vista de mapa interactiva
- [ ] Estadísticas avanzadas
- [ ] Multi-usuario con auth

## 🤝 Contribuir

Este es un proyecto personal, pero sugerencias son bienvenidas:
1. Fork el proyecto
2. Crea una branch (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

MIT License - Uso libre para proyectos personales

## 👨‍⚕️ Contacto

Hecho con ❤️ para médicos buscando mejorar sus oportunidades

---

**¡Buena suerte en tu búsqueda de empleo! 🎯**
