# 🚀 Guía de Despliegue Vercel - MediJob CRM

## Método 1: Deploy Automático (Más Fácil)

### Paso 1: Preparar el Código

1. **Asegúrate de que tienes Git instalado**:
```bash
git --version
```

2. **Inicializa Git** (si no está ya inicializado):
```bash
cd medijob-crm
git init
git add .
git commit -m "Initial commit - MediJob CRM"
```

### Paso 2: Subir a GitHub

1. **Crea un nuevo repositorio en GitHub**:
   - Ve a https://github.com/new
   - Nombre: `medijob-crm`
   - Hazlo público o privado
   - NO agregues README ni .gitignore
   - Click en "Create repository"

2. **Conecta tu proyecto local a GitHub**:
```bash
git remote add origin https://github.com/TU_USUARIO/medijob-crm.git
git branch -M main
git push -u origin main
```

### Paso 3: Desplegar en Vercel

1. **Ve a Vercel**:
   - https://vercel.com/signup
   - Inicia sesión con GitHub

2. **Importa el Proyecto**:
   - Click en "Add New..." → "Project"
   - Selecciona tu repositorio `medijob-crm`
   - Click en "Import"

3. **Configura Variables de Entorno**:
   Antes de deployar, agrega estas variables:
   
   ```
   NEXT_PUBLIC_SUPABASE_URL = https://yufszwebosekijdgjgtb.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1ZnN6d2Vib3Nla2lqZGdqZ3RiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTUwMjAzMDUsImV4cCI6MjA3MDU5NjMwNX0.JaohlFjXdecFIlWzfoSl7bHI2PLFQ-9OH-oSNp5bXBk
   ```

4. **Deploy**:
   - Click en "Deploy"
   - Espera 1-2 minutos
   - ¡Tu app estará en vivo! 🎉

5. **Tu URL será algo como**:
   ```
   https://medijob-crm.vercel.app
   ```

---

## Método 2: Deploy desde CLI (Para Avanzados)

### Paso 1: Instalar Vercel CLI

```bash
npm i -g vercel
```

### Paso 2: Login

```bash
vercel login
```

### Paso 3: Deploy

```bash
cd medijob-crm
vercel
```

Sigue las instrucciones:
- **Set up and deploy?** → Yes
- **Which scope?** → Tu cuenta personal
- **Link to existing project?** → No
- **What's your project's name?** → medijob-crm
- **In which directory is your code located?** → ./
- **Want to override settings?** → No

### Paso 4: Setup Variables

```bash
vercel env add NEXT_PUBLIC_SUPABASE_URL
# Pega: https://yufszwebosekijdgjgtb.supabase.co

vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY  
# Pega: eyJhbG...
```

### Paso 5: Deploy Producción

```bash
vercel --prod
```

---

## Método 3: Deploy desde Vercel Dashboard (Sin Git)

### Paso 1: Comprimir el Proyecto

1. **Comprime la carpeta** `medijob-crm` en un ZIP
2. **Asegúrate de incluir**:
   - `src/` folder
   - `package.json`
   - `tsconfig.json`
   - `next.config.ts`
   - `tailwind.config.ts`
   - `.env.local` (opcional, mejor configurar en Vercel)

### Paso 2: Deploy Manual

1. **Ve a Vercel Dashboard**:
   - https://vercel.com/new

2. **Arrastra y suelta el ZIP**

3. **Configura variables de entorno**

4. **Deploy**

---

## Post-Deployment

### Verificar que Funciona

1. **Abre tu URL de Vercel**
2. **Verifica que aparezca el Dashboard**
3. **Haz click en "Sincronizar"** para cargar datos
4. **Navega entre las vistas** (Dashboard, Centros, Rutas, Seguimiento)

### Si No Carga Datos

1. **Abre DevTools** (F12)
2. **Ve a la pestaña Console**
3. **Busca errores** relacionados con Supabase
4. **Verifica que**:
   - Las variables de entorno estén configuradas
   - Las tablas de Supabase existan
   - Las políticas RLS estén habilitadas

---

## Configurar Dominio Personalizado

### Desde Vercel Dashboard

1. **Ve a tu proyecto en Vercel**
2. **Settings** → **Domains**
3. **Add Domain**
4. **Ingresa tu dominio**: `medijob.tudominio.com`
5. **Sigue las instrucciones** para configurar DNS

### DNS Records Necesarios

Si tienes un dominio propio, agrega:

```
Type: CNAME
Name: medijob (o @)
Value: cname.vercel-dns.com
```

---

## Actualizar la Aplicación

### Con GitHub (Automático)

```bash
# Haz cambios en tu código
git add .
git commit -m "Update: descripción de cambios"
git push origin main
```

Vercel detectará automáticamente y desplegará.

### Sin GitHub (Manual)

```bash
vercel --prod
```

---

## Monitoreo y Analytics

### Ver Estadísticas

1. **Dashboard de Vercel** → Tu proyecto
2. **Analytics** tab
3. Verás:
   - Visitantes
   - Top páginas
   - Países
   - Performance

### Logs

1. **Deployments** tab
2. **Click en cualquier deployment**
3. **View Function Logs**

---

## Troubleshooting

### Error 500
- Revisa los logs en Vercel
- Verifica variables de entorno
- Asegúrate que package.json tenga todas las dependencias

### Build Failed
```bash
# Intenta builld localmente
npm run build

# Si falla, revisa el error y corrige
# Luego vuelve a deployar
```

### Conexión a Supabase Falla
- Verifica la URL de Supabase
- Confirma que la API key sea correcta
- Asegúrate que las tablas existan

---

## Performance Tips

### Optimizar Imágenes

Si agregas imágenes, usa Next.js Image:
```tsx
import Image from 'next/image'

<Image src="/logo.png" alt="Logo" width={100} height={100} />
```

### Habilitar Caching

Vercel automáticamente cachea por defecto, pero puedes optimizar:
```tsx
// En tus fetches
export const revalidate = 60 // Revalida cada 60 segundos
```

---

## Costos

### Plan Gratuito de Vercel

- ✅ **Ilimitado** bandwidth
- ✅ **100 GB-Hours** de función execution
- ✅ **Unlimited** deployments
- ✅ **Automatic** SSL
- ✅ **Custom** domains

**Perfecto para este proyecto!** 🎉

---

## Próximos Pasos

1. ✅ **Deploy exitoso**
2. ⬜ Configura tu dominio personalizado
3. ⬜ Invita a otros médicos a usar el CRM
4. ⬜ Agrega más centros de salud
5. ⬜ Comparte tu experiencia

---

**¿Necesitas ayuda?**
- Documentación Vercel: https://vercel.com/docs
- Documentación Next.js: https://nextjs.org/docs
- Documentación Supabase: https://supabase.com/docs

**¡Tu CRM está listo para usar! 🚀**
