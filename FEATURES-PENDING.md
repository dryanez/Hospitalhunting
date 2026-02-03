# 🎯 FEATURES PENDIENTES - MediJob CRM

## SOLICITADO POR USUARIO

### 1. ✅ SISTEMA DE VISITAS Y NOTAS

**Funcionalidad:**
- Click en cualquier centro para abrir modal
- Marcar como: "Por Visitar" / "Visitando Hoy" / "Visitado"
- Agregar notas de la visita:
  - ¿Qué pasó?
  - Persona de contacto
  - Fecha de seguimiento
  - Resultado (CV entregado, entrevista programada, etc.)

**Almacenamiento:**
- localStorage (sin base de datos)
- Clave:  `medij

ob-visits`
- Formato JSON

---

### 2. ✅ FILTRO DE VISITADOS EN RUTAS

**Funcionalidad:**
- Toggle "Ocultar visitados" en vista de Rutas
- Al planificar ruta, excluir centros marcados como "Visitado"
- Mostrar solo centros pendientes o programados para hoy

**Lógica:**
```javascript
const unvisitedFacilities = facilities.filter(f => 
  !visits[f.id] || visits[f.id].status !== 'visited'
)
```

---

### 3. ✅ TAGS/ESTADOS VISUALES

**Estados de Centro:**
1. **Por Visitar** (default)
   - Color: Gris/Azul claro
   - Sin badge especial

2. **Visitando Hoy**
   - Color: Amarillo/Naranja
   - Badge: "HOY"
   - Aparece destacado

3. **Visitado**
   - Color: Verde
   - Badge: "✓ VISITADO"
   - Fecha de visita mostrada

**Visualización en tarjetas:**
```
┌──────────────────────────┐
│ [✓ VISITADO] [HOY]       │
│ CESFAM Barón             │
│ Valparaíso               │
│                          │
│ Visitado: 15/01/2026     │
│ Notas: CV entregado...   │
└──────────────────────────┘
```

---

### 4. ✅ AGREGAR CENTROS MANUALMENTE

**Form con campos:**
- Nombre del centro *
- Tipo (dropdown: CESFAM, Hospital, Clínica, SAPU)
- Comuna (dropdown de COMUNAS) *
- Dirección
- Teléfono
- Email
- Website
- Notas

**Botón:**
- "➕ Agregar Centro" en Dashboard y Facilities

**Almacenamiento:**
- localStorage: `medijob-custom-facilities`
- ID: `custom-${timestamp}`

---

## 🎨 DISEÑO UI

### Modal de Vista/Edición

```
╔════════════════════════════════════╗
║  CESFAM Barón - Valparaíso   [X]   ║
╠════════════════════════════════════╣
║                                    ║
║  Estado:                           ║
║  ○ Por Visitar                     ║
║  ○ Visitando Hoy                   ║
║  ● Visitado                        ║
║                                    ║
║  Fecha Visita: [15/01/2026]        ║
║                                    ║
║  Persona Contacto:                 ║
║  [María González - Directora]      ║
║                                    ║
║  Notas:                            ║
║  [CV entregado. Dijo que llamará  ║
║   próxima semana para entrevista] ║
║                                    ║
║  Seguimiento: [22/01/2026]         ║
║                                    ║
║  [Cancelar]  [Guardar] [📍 Maps]  ║
╚════════════════════════════════════╝
```

### Modal Agregar Centro

```
╔════════════════════════════════════╗
║  Agregar Nuevo Centro        [X]   ║
╠════════════════════════════════════╣
║                                    ║
║  Nombre: *                         ║
║  [CESFAM...]                       ║
║                                    ║
║  Tipo: *                           ║
║  [▼ CESFAM ▼]                      ║
║                                    ║
║  Comuna: *                         ║
║  [▼ Valparaíso ▼]                  ║
║                                    ║
║  Dirección:                        ║
║  [Calle 123...]                    ║
║                                    ║
║  Teléfono:                         ║
║  [+56...]                          ║
║                                    ║
║  Email:                            ║
║  [email@...]                       ║
║                                    ║
║  Website:                          ║
║  [https://...]                     ║
║                                    ║
║  Notas:                            ║
║  [...]                             ║
║                                    ║
║  [Cancelar]        [➕ Agregar]     ║
╚════════════════════════════════════╝
```

---

## 💾 ESTRUCTURA DE DATOS

### localStorage Keys:

```javascript
// Visitas y estados
'medijob-visits': {
  "facility-id-1": {
    facilityId: "facility-id-1",
    status: "visited",
    visitDate: "2026-01-15",
    notes: "CV entregado. Dijo que...",
    contactPerson: "María González - Directora",
    followUpDate: "2026-01-22"
  },
  "facility-id-2": {
    facilityId: "facility-id-2",
    status: "visiting-today",
    visitDate: "2026-01-20",
    notes: "",
    contactPerson: "",
    followUpDate: ""
  }
}

// Centros personalizados
'medijob-custom-facilities': [
  {
    id: "custom-1737480000000"
    name: "CESFAM Nuevo",
    type: "CESFAM",
    comuna: "Valparaíso",
    address: "Calle Nueva 123",
    phone: "+56 32 123 4567",
    email: "nuevo@cesfam.cl",
    website: "https://nuevo.cl",
    notes: "Centro recién abierto",
    created_at: "2026-01-20T10:00:00Z"
  }
]
```

---

## 🔧 IMPLEMENTACIÓN TÉCNICA

### Componentes Nuevos:

1. **VisitModal.tsx** (o dentro de page.tsx)
   - Props: facility, visitInfo, onSave, onClose
   - Estado local para form
   - Validación simple

2. **AddFacilityModal.tsx** (o dentro de page.tsx)
   - Props: onAdd, onClose
   - Form completo
   - Validación de campos requeridos

3. **StatusBadge.tsx** (pequeño componente)
   - Props: status
   - Render badge con color apropiado

### Hooks/State:

```typescript
const [visits, setVisits] = useState<Record<string, VisitInfo>>({})
const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)
const [showVisitModal, setShowVisitModal] = useState(false)
const [showAddModal, setShowAddModal] = useState(false)
const [hideVisited, setHideVisited] = useState(true)
```

### Funciones Clave:

```typescript
function loadVisits() {
  const stored = localStorage.getItem('medijob-visits')
  if (stored) setVisits(JSON.parse(stored))
}

function saveVisit(facilityId: string, visitData: VisitInfo) {
  const newVisits = { ...visits, [facilityId]: visitData }
  localStorage.setItem('medijob-visits', JSON.stringify(newVisits))
  setVisits(newVisits)
}

function addCustomFacility(facilityData: Partial<Facility>) {
  const newFacility = {
    ...facilityData,
    id: `custom-${Date.now()}`,
    created_at: new Date().toISOString()
  }
  
  const updated = [...facilities, newFacility]
  setFacilities(updated)
  
  const customs = updated.filter(f => f.id.startsWith('custom-'))
  localStorage.setItem('medijob-custom-facilities', JSON.stringify(customs))
}

function getVisitStatus(facilityId: string): VisitStatus {
  return visits[facilityId]?.status || 'to-visit'
}

function getFacilitiesForRoute(comuna: string, hideVisited: boolean) {
  let filtered = facilities.filter(f => f.comuna === comuna)
  
  if (hideVisited) {
    filtered = filtered.filter(f => 
      !visits[f.id] || visits[f.id].status !== 'visited'
    )
  }
  
  return filtered
}
```

---

## 📊 ESTADÍSTICAS MEJORADAS

Dashboard debe mostrar:

```
┌────────────────┬────────────────┬────────────────┐
│ Total Centros  │ Por Visitar    │ Visitados      │
│     134        │      89        │      45        │
└────────────────┴────────────────┴────────────────┘

┌────────────────┬────────────────┬────────────────┐
│ Visitando Hoy  │ Seguimientos   │ % Completado   │
│      3         │      12        │    33.6%       │
└────────────────┴────────────────┴────────────────┘
```

Stats calculados:
```typescript
const stats = {
  total: facilities.length,
  toVisit: Object.values(visits).filter(v => v.status === 'to-visit').length,
  visitingToday: Object.values(visits).filter(v => v.status === 'visiting-today').length,
  visited: Object.values(visits).filter(v => v.status === 'visited').length,
  followUps: Object.values(visits).filter(v => v.followUpDate && new Date(v.followUpDate) >= new Date()).length,
  percentage: (Object.values(visits).filter(v => v.status === 'visited').length / facilities.length * 100).toFixed(1)
}
```

---

## 🎯 PRÓXIMOS PASOS DE IMPLEMENTACIÓN

### Paso 1: Tipos y Estado
```typescript
// Agregar tipos VisitInfo y VisitStatus ✅ HECHO
// Agregar estados necesarios ✅ HECHO
```

### Paso 2: localStorage Functions
```typescript
// loadVisits() ✅ HECHO
// saveVisits() ✅ HECHO
// loadCustomFacilities()
// saveCustomFacilities()
```

### Paso 3: Visit Modal
```typescript
// Componente VisitModal
// Form de estado
// Guardar y actualizar
```

### Paso 4: Add Facility Modal
```typescript
// Componente AddFacilityModal
// Form completo
// Validación y guardado
```

### Paso 5: UI Updates
```typescript
// Badges en tarjetas
// Botón "Agregar Centro"
// Toggle "Ocultar visitados"
// Click handler en tarjetas
```

### Paso 6: Filtros en Rutas
```typescript
// Actualizar planRouteForDay() ✅ PARCIAL
// Mostrar contador de centros filtrados
// Visual feedback
```

---

## ✅ CHECKLIST COMPLETO

### Funcionalidad Core:
- [ ] Click en centro abre modal de visita
- [ ] Cambiar estado (to-visit, visiting-today, visited)
- [ ] Agregar notas de visita
- [ ] Guardar persona de contacto
- [ ] Fecha de seguimiento
- [ ] Persistir en localStorage
- [ ] Badges visuales de estado
- [ ] Filtro "ocultar visitados" en rutas
- [ ] Excluir visitados de planificación
- [ ] Botón "Agregar Centro"
- [ ] Form agregar centro completo
- [ ] Guardar centros personalizados
- [ ] Cargar centros al inicio

### UI/UX:
- [ ] Modal visita bien diseñado
- [ ] Modal agregar bien diseñado
- [ ] Badges de color apropiado
- [ ] Toggle visible y claro
- [ ] Stats actualizados en dashboard
- [ ] Animaciones smooth
- [ ] Mobile responsive

### Testing:
- [ ] Agregar centro funciona
- [ ] Marcar visitado funciona
- [ ] Persistencia localStorage funciona
- [ ] Filtro rutas funciona
- [ ] Búsqueda incluye custom centers
- [ ] Reload mantiene datos

---

## 🚀 IMPACTO ESPERADO

**Antes:**
- Solo lectura de centros
- Sin tracking de visitas
- Sin forma de agregar centros faltantes
- Planificación incluye repetidos

**Después:**
- ✅ Track completo de visitas
- ✅ Notas y seguimientos
- ✅ Agregar centros missing
- ✅ Rutas solo centros no visitados
- ✅ **Sistema CRM completo funcional**

---

## 📝 NOTAS DE IMPLEMENTACIÓN

- Todo en localStorage (no DB necesaria)
- Compatible con deploy actual
- No rompe features existentes
- Fácil migración a DB después si se quiere
- Mobile-friendly desde el inicio

---

**Prioridad:** ALTA
**Complejidad:** Media
**Tiempo estimado:** 2-3 horas
**Archivos a modificar:** 
- `src/app/page.tsx` (principal)
- Posible: crear componentes separados si el archivo crece mucho

**Status:** EN PROGRESO (tipos y estado base hechos)
