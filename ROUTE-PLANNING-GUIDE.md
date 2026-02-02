# 🗺️ GUÍA DE PLANIFICACIÓN DE RUTAS - MediJob CRM

## 🎯 NUEVAS CARACTERÍSTICAS

### ✅ Lo que se agregó:

1. **Integración Google Maps** 📍
   - Botón "Maps" en cada centro de salud
   - Direcciones desde tu casa (Baquedano 1044, Villa Alemana)
   - Abre automáticamente en Google Maps

2. **Planificador Inteligente por Día** 🗓️
   - Selecciona comuna para cada día
   - Ve todos los centros de esa comuna
   - Planifica ruta óptima automática

3. **Filtrado de Centros No Visitados** ✨
   - Solo muestra centros donde NO has aplicado
   - Evita visitas repetidas
   - Optimiza tu tiempo

4. **Rutas Multi-destino** 🛣️
   - Hasta 25 waypoints en Google Maps
   - Ruta optimizada automáticamente
   - Un solo click para toda la ruta del día

---

## 📱 CÓMO USAR - PASO A PASO

### Opción 1: Navegación Individual

**Desde la vista "Centros de Salud":**

1. Encuentra el centro que quieres visitar
2. Click en el botón verde **"📍 Maps"**
3. Se abre Google Maps con:
   - 📍 Origen: Tu casa (Baquedano 1044, Villa Alemana)
   - 🎯 Destino: El centro seleccionado
   - 🚗 Modo: Conduciendo
4. Sigue las instrucciones de Google Maps
5. ¡Listo para conducir!

**Ejemplo:**
```
CESFAM Barón, Valparaíso
Click "📍 Maps" →
Google Maps se abre con ruta desde Villa Alemana
Tiempo estimado: ~45 minutos
```

---

### Opción 2: Planificación por Día (RECOMENDADO)

**Desde la vista "Rutas":**

#### Paso 1: Seleccionar Día
- Ve a la vista **"Planificador de Rutas"**
- Verás 5 columnas: Lunes a Viernes

#### Paso 2: Elegir Comuna
- En el día deseado, selecciona una comuna del dropdown
- Ejemplos:
  - **Lunes**: Valparaíso
  - **Martes**: Viña del Mar
  - **Miércoles**: Quilpué
  - **Jueves**: San Antonio
  - **Viernes**: Quillota

#### Paso 3: Ver Centros
La app te muestra:
- ✅ Número total de centros en esa comuna
- 📋 Lista completa con:
  - Nombre del centro
  - Tipo (CESFAM, Hospital, Clínica)
  - Dirección
  - Teléfono

#### Paso 4: Planificar Ruta
- Click en **"🗺️ Planificar Ruta Óptima"**
- Se abre Google Maps con:
  - Origen: Tu casa
  - Waypoints: TODOS los centros no visitados
  - Destino: Último centro
  - Ruta optimizada automáticamente

#### Paso 5: Conducir
- Google Maps te guía automáticamente
- Visita cada centro en orden
- Marca como aplicado después de cada visita

---

## 🎯 EJEMPLOS PRÁCTICOS

### Ejemplo 1: Lunes - Valparaíso

**Setup:**
1. Vista "Rutas" → Columna "Lunes"
2. Dropdown → Selecciona "Valparaíso"
3. Verás: 17 centros (14 CESFAMs, 3 Hospitales)

**Planificación:**
```
🏠 Inicio: Baquedano 1044, Villa Alemana

Ruta óptima (Google Maps):
1. CESFAM Placilla (más cercano)
2. CESFAM Barón
3. Hospital Carlos Van Buren
4. CESFAM Cordillera
5. CESFAM Esperanza
... y así sucesivamente

🏁 Fin: Último centro en Valparaíso
⏱️ Tiempo total: ~4-5 horas (incluyendo visitas)
```

**Click "Planificar Ruta"** → Google Maps se abre con todo configurado

---

### Ejemplo 2: Miércoles - Viña del Mar

**Setup:**
1. Vista "Rutas" → Columna "Miércoles"
2. Dropdown → Selecciona "Viña del Mar"
3. Verás: 8 centros (2 CESFAMs, 2 Hospitales, 4 Clínicas)

**Planificación:**
```
🏠 Inicio: Baquedano 1044, Villa Alemana

Ruta sugerida:
1. Hospital Gustavo Fricke (Alta complejidad - PRIORIDAD)
2. CESFAM Marco Maldonado
3. CESFAM Lusitania
4. Clínica Ciudad del Mar
5. IntegraMédica Viña del Mar
6. Clínica Bupa Reñaca
7. Centro Médico RedSalud

⏱️ Tiempo: ~3 horas
💰 Mix: Público + Privado
```

---

### Ejemplo 3: Jueves - San Antonio

**Setup:**
1. Vista "Rutas" → Columna "Jueves"
2. Dropdown → Selecciona "San Antonio"
3. Verás: 6 centros (5 CESFAMs, 1 Hospital)

**Planificación:**
```
🏠 Inicio: Villa Alemana (más lejos ~1.5 hrs)

Estrategia:
- Salir temprano (7:00 AM)
- Primera parada: Hospital Claudio Vicuña (8:30 AM)
- Recorrer 5 CESFAMs en orden
- Regreso a casa: ~16:00

⏱️ Día completo
💡 Tip: Combinar con Cartagena/Algarrobo si queda tiempo
```

---

## 🧠 LÓGICA DE "NO VISITADOS"

### Cómo Funciona:

La app es inteligente y **solo muestra centros donde NO has aplicado**.

**Estados considerados como "visitado":**
- ✅ **Applied** (Aplicado)
- ✅ **Interview** (Entrevista)
- ✅ **Accepted** (Aceptado)

**Estados considerados como "no visitado":**
- ⬜ **Pending** (Pendiente)
- ⬜ No hay registro de aplicación

**Ejemplo:**
```
Valparaíso tiene 17 centros totales

Ya aplicaste en:
- CESFAM Barón (status: applied)
- Hospital Van Buren (status: interview)
- CESFAM Cordillera (status: accepted)

Al planificar ruta de Valparaíso:
✅ Se muestran: 14 centros restantes
❌ Se ocultan: 3 ya visitados

Resultado: Ruta con solo 14 paradas
```

---

## 📍 FORMATO DE DIRECCIONES

### Cómo se construyen las direcciones para Google Maps:

**Si el centro tiene dirección:**
```
Dirección + Comuna + Chile
Ejemplo: "Blanco Viel 661, Cerro Barón, Valparaíso, Chile"
```

**Si NO tiene dirección:**
```
Nombre + Comuna + Chile
Ejemplo: "CESFAM La Palma, Quillota, Chile"
```

Google Maps es lo suficientemente inteligente para encontrar el lugar correcto.

---

## 🚗 LÍMITES DE GOOGLE MAPS

### Waypoints (Paradas Intermedias):

- **Máximo: 25 waypoints** por ruta
- Si una comuna tiene más de 25 centros:
  - La app muestra todos
  - Google Maps solo procesa los primeros 25
  - Solución: Dividir en 2 días diferentes

**Comunas afectadas:**
- ❌ Ninguna por ahora (máx: 17 centros en Valparaíso)

---

## 💡 TIPS Y MEJORES PRÁCTICAS

### 1. Planificación Semanal Sugerida

**Lunes**: Comunas cercanas
- Villa Alemana (tu comuna)
- Quilpué
- Limache

**Martes**: Valparaíso
- Salir temprano
- 17 centros = Día completo
- Priorizar hospitales

**Miércoles**: Viña del Mar
- Mix público/privado
- Incluir clínicas premium
- Zona más ordenada

**Jueves**: San Antonio / Litoral
- Día largo (lejos)
- Combinar San Antonio + Cartagena
- Regresar por la costa

**Viernes**: Interior
- Quillota + La Calera
- San Felipe si hay tiempo
- Rutas más cortas

---

### 2. Optimización de Tiempo

**Por Centro:**
- 📋 15-20 min: Entrega de CV
- 🗣️ 10 min: Conversación con secretaria
- ⏱️ **Total por centro: ~30 min**

**Cálculo de día:**
```
10 centros × 30 min = 5 horas
+ Tiempo de conducción: 2-3 horas
+ Almuerzo: 1 hora
= Total: 8-9 horas (día completo)
```

**Recomendación:**
- Máximo 8-10 centros por día
- Si hay más, dividir en 2 días

---

### 3. Preparación Antes de Salir

**Documentos a llevar:**
- [ ] CV (30 copias)
- [ ] Título profesional (fotocopia)
- [ ] Certificados (fotos)
- [ ] Carta de presentación
- [ ] Celular cargado
- [ ] Powerbank

**En la app:**
- [ ] Planificar ruta del día
- [ ] Abrir Google Maps
- [ ] Configurar modo offline (por si acaso)
- [ ] Tener lista de teléfonos

---

### 4. Durante la Visita

**Al llegar:**
1. Estacionar
2. Presentarse en admisión/secretaría
3. Preguntar por RRHH o director/a
4. Entregar documentos
5. Consultar proceso de selección
6. Pedir contacto de seguimiento

**En la app:**
```
Inmediatamente después:
1. Ir a "Seguimiento"
2. Marcar centro como "Aplicado"
3. Agregar notas:
   - Nombre de persona que atendió
   - Comentarios importantes
   - Fecha de seguimiento
4. Siguiente centro
```

---

### 5. Después del Recorrido

**Al llegar a casa:**
1. Sincronizar app
2. Revisar notas del día
3. Programar seguimientos
4. Planificar día siguiente
5. Actualizar CV si es necesario

---

## 🎯 ESTRATEGIAS POR TIPO DE CENTRO

### CESFAMs
- ✅ **Mejor horario**: 9:00-11:00 AM
- 👤 **Contacto**: Director/a técnico, SOME
- 📋 **Documentos**: CV, título
- 💡 **Tip**: Preguntar por reemplazos

### Hospitales
- ✅ **Mejor horario**: 14:00-16:00 PM
- 👤 **Contacto**: RRHH, Subdirección
- 📋 **Documentos**: CV completo, certificados
- 💡 **Tip**: Mencionar turnos/urgencia

### Clínicas Privadas
- ✅ **Mejor horario**: 10:00-12:00 AM
- 👤 **Contacto**: RRHH, gerencia médica
- 📋 **Documentos**: CV profesional, referencias
- 💡 **Tip**: Destacar flexibilidad horaria

---

## 📱 USO EN EL TELÉFONO

### Google Maps Mobile

**Ventajas:**
- 🔊 Navegación por voz
- 📶 Funciona con datos móviles
- 🗺️ Mapas offline disponibles
- 🚦 Tráfico en tiempo real

**Configuración:**
1. Click "Planificar Ruta" en laptop
2. Se abre Google Maps en navegador
3. Click "Abrir en App" si estás en móvil
4. O copia URL y envíala a tu teléfono

**Tip Pro:**
- Descarga mapas offline de V Región
- Settings → Offline maps → Download
- Área: Valparaíso complete

---

## ⚠️ SOLUCIÓN DE PROBLEMAS

### "Ya has visitado todos los centros!"

**Causa**: Has aplicado en todos los centros de esa comuna

**Solución:**
1. Elegir otra comuna
2. O revisar status de aplicaciones
3. Tal vez algunos están como "pending"

---

### Google Maps no abre

**Solución:**
1. Permitir pop-ups en tu navegador
2. Verificar que tienes Internet
3. Probar click derecho → Abrir en nueva pestaña

---

### Ruta parece desordenada

**Causa**: Google Maps optimiza automáticamente

**Solución:**
- Confía en Google Maps
- Algoritmo está optimizado para menor tiempo
- Puede parecer "extraño" pero es eficiente

---

### Quiero ruta diferente

**Solución:**
1. En Google Maps, arrastra waypoints para reordenar
2. O planifica manualmente centro por centro
3. Usa botón "Maps" individual en cada centro

---

## 🏆 RESULTADOS ESPERADOS

### Semana 1: ~40 centros visitados
- Lunes: 8 centros
- Martes: 10 centros (Valparaíso)
- Miércoles: 8 centros (Viña)
- Jueves: 8 centros (San Antonio)
- Viernes: 6 centros (Interior)

### Semana 2: ~30 centros
- Completar comunas restantes
- Segundas visitas / seguimientos

### Mes 1: 70+ centros cubiertos
- Base de datos completa visitada
- Múltiples entrevistas
- Ofertas de trabajo 🎯

---

## 📊 TRACKING DE PROGRESO

### En el Dashboard

**Métricas clave:**
- Total centros visitados
- Aplicaciones enviadas
- Entrevistas programadas
- Tasa de respuesta

**Objetivo:**
```
Semana 1: 40 aplicaciones
Semana 2: 30 aplicaciones
Semana 3: Seguimientos
Semana 4: Entrevistas + Ofertas
```

---

## 🎉 ¡ESTÁS LISTO PARA SALIR A LA RUTA!

**Checklist Final:**
- [✅] App funcionando en http://localhost:3001
- [✅] 70+ centros cargados
- [✅] Google Maps integrado
- [✅] Ruta planificador por día
- [✅] Filtros de no visitados
- [✅] Documentos preparados
- [✅] Celular cargado
- [✅] Tanque lleno

**¡A conseguir ese trabajo! 🚗💼👨‍⚕️**

---

**Última actualización**: Febrero 2, 2026
**Tu punto de partida**: Baquedano 1044, Villa Alemana
**Destino final**: ¡Empleo médico en V Región! 🎯
