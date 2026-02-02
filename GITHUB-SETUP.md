# 🚀 GitHub Setup - MediJob CRM

## ✅ Git Ya Está Configurado

Tu proyecto ya está bajo control de versiones Git con el commit inicial realizado.

---

## 📦 OPCIÓN 1: Subir a GitHub (Recomendado)

### Paso 1: Crear Repositorio en GitHub

1. **Ve a GitHub**: https://github.com/new
2. **Configuración del repositorio**:
   ```
   Repository name: medijob-crm
   Description: Sistema CRM para búsqueda de empleo médico en V Región de Valparaíso
   Visibility: Private (recomendado) o Public
   ```
3. **NO marques**:
   - ❌ Add a README file
   - ❌ Add .gitignore
   - ❌ Choose a license
   
   (Ya los tenemos localmente)

4. **Click**: "Create repository"

---

### Paso 2: Conectar tu Proyecto Local a GitHub

GitHub te mostrará comandos. Usa estos:

```bash
cd "/Users/dr.yanez/Documents/Job Hunting/medijob-crm"

# Agregar remote de GitHub (reemplaza TU_USUARIO con tu username)
git remote add origin https://github.com/TU_USUARIO/medijob-crm.git

# Cambiar nombre de rama a main (si es necesario)
git branch -M main

# Subir código a GitHub
git push -u origin main
```

---

### Paso 3: Verificar

1. Refresca la página de GitHub
2. Deberías ver todos tus archivos
3. ✅ Listo!

---

## 📦 OPCIÓN 2: Usar GitHub CLI (Más Rápido)

Si tienes GitHub CLI instalado:

```bash
cd "/Users/dr.yanez/Documents/Job Hunting/medijob-crm"

# Login a GitHub (si no lo has hecho)
gh auth login

# Crear repositorio y subirlo (todo en uno)
gh repo create medijob-crm --private --source=. --remote=origin --push
```

---

## 🔐 Configurar Variables de Entorno en GitHub

**IMPORTANTE**: NO subas tu archivo `.env.local` (ya está en .gitignore)

### En GitHub:

1. Ve a tu repositorio → **Settings**
2. **Secrets and variables** → **Actions**
3. Click **New repository secret**
4. Agrega estas variables:

```
Name: NEXT_PUBLIC_SUPABASE_URL
Value: https://yufszwebosekijdgjgtb.supabase.co

Name: NEXT_PUBLIC_SUPABASE_ANON_KEY
Value: eyJhbGc...
```

---

## 🚀 Deploy Automático a Vercel desde GitHub

Una vez que tu código esté en GitHub:

### Opción A: Desde Vercel Dashboard

1. **Ve a Vercel**: https://vercel.com/new
2. **Import Git Repository**
3. **Selecciona**: tu repositorio `medijob-crm`
4. **Configure Project**:
   - Framework Preset: Next.js (auto-detectado)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: .next
5. **Environment Variables**: Agrega las 2 variables de Supabase
6. **Deploy**

### Opción B: Desde CLI

```bash
vercel --prod
# Sigue las instrucciones, selecciona el repo de GitHub
```

---

## 📝 Comandos Git Útiles

### Ver estado del repositorio
```bash
git status
```

### Ver historial de commits
```bash
git log --oneline
```

### Hacer cambios y commitear
```bash
# Después de editar archivos
git add .
git commit -m "descripción de los cambios"
git push
```

### Ver remote configurado
```bash
git remote -v
```

### Cambiar URL del remote
```bash
git remote set-url origin https://github.com/TU_USUARIO/medijob-crm.git
```

---

## 🔄 Workflow de Desarrollo

### Cada vez que hagas cambios:

```bash
# 1. Ver qué cambió
git status

# 2. Agregar cambios
git add .

# 3. Hacer commit con mensaje descriptivo
git commit -m "feat: descripción del cambio"

# 4. Subir a GitHub
git push

# Vercel desplegará automáticamente si está conectado
```

---

## 📋 Convenciones de Commits

Usa estos prefijos para commits claros:

```bash
feat:     # Nueva característica
fix:      # Corrección de bug
docs:     # Cambios en documentación
style:    # Formato, espacios, etc
refactor: # Refactorización de código
test:     # Agregar tests
chore:    # Mantenimiento, dependencias
```

**Ejemplos:**
```bash
git commit -m "feat: add CESFAM filters by type"
git commit -m "fix: Google Maps route optimization"
git commit -m "docs: update ROUTE-PLANNING-GUIDE"
git commit -m "style: improve dashboard card spacing"
```

---

## 🌳 Branches (Opcional - Para desarrollo avanzado)

### Crear nueva branch para feature:
```bash
git checkout -b feature/nueva-funcionalidad
# Hacer cambios
git add .
git commit -m "feat: nueva funcionalidad"
git push -u origin feature/nueva-funcionalidad
```

### Mergear a main:
```bash
git checkout main
git merge feature/nueva-funcionalidad
git push
```

---

## 🔒 Proteger Datos Sensibles

### Archivos YA protegidos en .gitignore:
- ✅ `.env.local` (variables de entorno)
- ✅ `.env` (cualquier archivo de entorno)
- ✅ `node_modules/` (dependencias)
- ✅ `.next/` (build files)

### Si accidentalmente commiteaste datos sensibles:

```bash
# Remover archivo del historial
git rm --cached .env.local
git commit -m "chore: remove sensitive file"
git push

# Luego cambiar tus keys en Supabase por seguridad
```

---

## 📊 Estado Actual del Repositorio

```
✅ Git inicializado
✅ Commit inicial realizado
✅ .gitignore configurado
✅ 13 archivos commiteados
✅ 3044 líneas de código
⬜ Pendiente: Subir a GitHub
⬜ Pendiente: Conectar con Vercel
```

---

## 🎯 Próximos Pasos

### HOY:
1. ⬜ Crear repositorio en GitHub
2. ⬜ Subir código (`git push`)
3. ⬜ Conectar con Vercel
4. ⬜ Configurar variables de entorno
5. ⬜ Deploy a producción

### Después:
6. ⬜ Compartir URL pública
7. ⬜ Usar en móvil para rutas
8. ⬜ Trackear cambios con Git

---

## 🆘 Solución de Problemas

### "Permission denied (publickey)"
```bash
# Usar HTTPS en vez de SSH
git remote set-url origin https://github.com/TU_USUARIO/medijob-crm.git
```

### "Remote origin already exists"
```bash
# Remover y agregar nuevamente
git remote remove origin
git remote add origin https://github.com/TU_USUARIO/medijob-crm.git
```

### "Failed to push some refs"
```bash
# Pull primero, luego push
git pull origin main --rebase
git push
```

---

## 📚 Recursos

- **Git Cheat Sheet**: https://education.github.com/git-cheat-sheet-education.pdf
- **GitHub Docs**: https://docs.github.com
- **Vercel Docs**: https://vercel.com/docs
- **Next.js Deploy**: https://nextjs.org/docs/deployment

---

## 🎉 ¡Todo Listo para GitHub!

**Tu código está:**
- ✅ Commiteado localmente
- ✅ Listo para subir
- ✅ Protegido (.gitignore)
- ✅ Bien documentado

**Solo falta:**
1. Crear repo en GitHub
2. Push
3. Deploy

**¡3 pasos y estás en producción! 🚀**

---

**Última actualización**: Febrero 2, 2026
**Commit actual**: feat: Complete MediJob CRM v1.0
