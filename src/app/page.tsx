'use client'

import { useState, useEffect } from 'react'
import { supabase, type Facility, type Application, type Route } from '@/lib/supabase'
import { COMUNAS, INITIAL_FACILITIES } from '@/lib/data'
import { Home, MapPin, Calendar, Clock, Plus, Search, Filter, Download, RefreshCw, X, Save, Eye, EyeOff } from 'lucide-react'

// Visit tracking types
type VisitStatus = 'to-visit' | 'visiting-today' | 'visited'
type ApplicationStatus = 'pending' | 'cv-sent' | 'interview' | 'accepted' | 'rejected'

interface VisitInfo {
  facilityId: string
  status: VisitStatus
  applicationStatus?: ApplicationStatus
  visitDate?: string
  notes?: string
  contactPerson?: string
  followUpDate?: string
}

export default function HomePage() {
  const [activeView, setActiveView] = useState('dashboard')
  const [facilities, setFacilities] = useState<Facility[]>([])
  const [applications, setApplications] = useState<Application[]>([])
  const [routes, setRoutes] = useState<Record<string, Route[]>>({
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: []
  })
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [comunaFilter, setComunaFilter] = useState('')
  const [typeFilter, setTypeFilter] = useState('')

  // Visit tracking
  const [visits, setVisits] = useState<Record<string, VisitInfo>>({})
  const [selectedFacility, setSelectedFacility] = useState<Facility | null>(null)
  const [showVisitModal, setShowVisitModal] = useState(false)
  const [showAddModal, setShowAddModal] = useState(false)
  const [hideVisited, setHideVisited] = useState(true)

  useEffect(() => {
    loadData()
    loadVisits()
  }, [])

  function loadVisits() {
    const stored = localStorage.getItem('medijob-visits')
    if (stored) {
      setVisits(JSON.parse(stored))
    }
  }

  function saveVisits(newVisits: Record<string, VisitInfo>) {
    localStorage.setItem('medijob-visits', JSON.stringify(newVisits))
    setVisits(newVisits)
  }

  async function loadData() {
    setLoading(true)
    try {
      // Just use local data for now (no Supabase needed)
      setFacilities(INITIAL_FACILITIES as any)
      setApplications([])
      setRoutes({
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: []
      })
    } catch (error) {
      console.error('Error loading data:', error)
    } finally {
      setLoading(false)
    }
  }

  // Visit tracking functions
  function updateVisitStatus(facilityId: string, status: VisitStatus, data?: Partial<VisitInfo>) {
    const existingVisit = visits[facilityId] || {}
    const newVisits = {
      ...visits,
      [facilityId]: {
        facilityId,
        status,
        applicationStatus: data?.applicationStatus !== undefined ? data.applicationStatus : (existingVisit.applicationStatus || 'pending'),
        visitDate: data?.visitDate !== undefined ? data.visitDate : (existingVisit.visitDate || new Date().toISOString().split('T')[0]),
        notes: data?.notes !== undefined ? data.notes : (existingVisit.notes || ''),
        contactPerson: data?.contactPerson !== undefined ? data.contactPerson : (existingVisit.contactPerson || ''),
        followUpDate: data?.followUpDate !== undefined ? data.followUpDate : (existingVisit.followUpDate || '')
      }
    }
    saveVisits(newVisits)
  }

  function openVisitModal(facility: Facility) {
    setSelectedFacility(facility)
    setShowVisitModal(true)
  }

  function addNewFacility(facilityData: Partial<Facility>) {
    const newFacility: Facility = {
      id: `custom-${Date.now()}`,
      name: facilityData.name || '',
      type: facilityData.type || 'CESFAM',
      comuna: facilityData.comuna || '',
      address: facilityData.address || '',
      phone: facilityData.phone || '',
      email: facilityData.email || '',
      website: facilityData.website || '',
      notes: facilityData.notes || '',
      created_at: new Date().toISOString()
    }

    const updatedFacilities = [...facilities, newFacility]
    setFacilities(updatedFacilities)

    // Save to localStorage
    localStorage.setItem('medijob-custom-facilities', JSON.stringify(
      updatedFacilities.filter(f => f.id.startsWith('custom-'))
    ))

    setShowAddModal(false)
  }

  // Load custom facilities from localStorage
  useEffect(() => {
    const customFacilities = localStorage.getItem('medijob-custom-facilities')
    if (customFacilities) {
      const custom = JSON.parse(customFacilities)
      setFacilities(prev => {
        const existingIds = new Set(prev.map(f => f.id))
        const newCustom = custom.filter((f: Facility) => !existingIds.has(f.id))
        return [...prev, ...newCustom]
      })
    }
  }, [])

  // Route planning functions
  function planRouteForDay(day: string, selectedComuna: string) {
    // Get unvisited facilities from selected comuna
    const comunaFacilities = facilities.filter(f => f.comuna === selectedComuna)
    const visitedFacilityIds = applications
      .filter(a => a.status === 'applied' || a.status === 'interview' || a.status === 'accepted')
      .map(a => a.facility_id)

    const unvisitedFacilities = comunaFacilities.filter(f => !visitedFacilityIds.includes(f.id))

    if (unvisitedFacilities.length === 0) {
      alert('¡Ya has visitado todos los centros de esta comuna!')
      return
    }

    // Open Google Maps with route
    openGoogleMapsRoute(unvisitedFacilities)
  }

  function openGoogleMapsRoute(facilityList: Facility[]) {
    const origin = 'Baquedano 1044, Villa Alemana, Chile'

    if (facilityList.length === 0) return

    if (facilityList.length === 1) {
      // Single destination
      const destination = formatAddressForMaps(facilityList[0])
      const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`
      window.open(url, '_blank')
    } else {
      // Multiple waypoints - optimize route
      const waypoints = facilityList.slice(0, -1).map(f => formatAddressForMaps(f)).join('|')
      const destination = formatAddressForMaps(facilityList[facilityList.length - 1])
      const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&waypoints=${encodeURIComponent(waypoints)}&travelmode=driving`
      window.open(url, '_blank')
    }
  }

  function formatAddressForMaps(facility: Facility): string {
    if (facility.address) {
      return `${facility.address}, ${facility.comuna}, Chile`
    }
    return `${facility.name}, ${facility.comuna}, Chile`
  }

  function openSingleFacilityInMaps(facility: Facility) {
    const origin = 'Baquedano 1044, Villa Alemana, Chile'
    const destination = formatAddressForMaps(facility)
    const url = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin)}&destination=${encodeURIComponent(destination)}&travelmode=driving`
    window.open(url, '_blank')
  }


  const stats = {
    totalFacilities: facilities.length,
    totalApplied: applications.filter(a => a.status === 'applied').length,
    totalPending: applications.filter(a => a.status === 'pending').length,
    totalInterviews: applications.filter(a => a.status === 'interview').length,
  }

  const filteredFacilities = facilities.filter(f => {
    const matchesSearch = !searchTerm ||
      f.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.comuna.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesComuna = !comunaFilter || f.comuna === comunaFilter
    const matchesType = !typeFilter || f.type === typeFilter
    return matchesSearch && matchesComuna && matchesType
  })

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Cargando datos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  MediJob CRM
                </h1>
                <p className="text-sm text-muted-foreground">V Región de Valparaíso</p>
              </div>
            </div>

            <nav className="flex gap-2">
              <button
                onClick={() => setActiveView('dashboard')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeView === 'dashboard'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
                  }`}
              >
                <Home className="w-5 h-5" />
                Dashboard
              </button>
              <button
                onClick={() => setActiveView('facilities')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeView === 'facilities'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
                  }`}
              >
                <MapPin className="w-5 h-5" />
                Centros
              </button>
              <button
                onClick={() => setActiveView('routes')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeView === 'routes'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
                  }`}
              >
                <Calendar className="w-5 h-5" />
                Rutas
              </button>
              <button
                onClick={() => setActiveView('tracker')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${activeView === 'tracker'
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
                  }`}
              >
                <Clock className="w-5 h-5" />
                Seguimiento
              </button>

              {/* Reset Data Button */}
              <button
                onClick={() => {
                  if (confirm('¿Borrar todos los datos? (Visitas, aplicaciones, centros personalizados)')) {
                    localStorage.clear()
                    window.location.reload()
                  }
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-colors ml-auto"
                title="Resetear todos los datos"
              >
                <RefreshCw className="w-4 h-4" />
                Reset
              </button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Dashboard View */}
        {activeView === 'dashboard' && (
          <div className="animate-fadeIn">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Panel de Control
              </h2>
              <button
                onClick={loadData}
                className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
              >
                <RefreshCw className="w-5 h-5" />
                Sincronizar
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{stats.totalFacilities}</h3>
                    <p className="text-sm text-muted-foreground">Total Centros</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{stats.totalApplied}</h3>
                    <p className="text-sm text-muted-foreground">Aplicaciones Enviadas</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{stats.totalPending}</h3>
                    <p className="text-sm text-muted-foreground">Pendientes</p>
                  </div>
                </div>
              </div>

              <div className="bg-card border border-border rounded-xl p-6 hover:border-primary transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">{stats.totalInterviews}</h3>
                    <p className="text-sm text-muted-foreground">Entrevistas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4">Acciones Rápidas</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <Plus className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">Agregar Centro</span>
                </button>
                <button
                  onClick={() => setActiveView('routes')}
                  className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <Calendar className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">Planificar Ruta</span>
                </button>
                <button className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <Download className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">Exportar Datos</span>
                </button>
                <button
                  onClick={() => setActiveView('facilities')}
                  className="flex flex-col items-center gap-2 p-4 bg-muted rounded-lg hover:bg-muted/80 transition-colors"
                >
                  <MapPin className="w-8 h-8 text-primary" />
                  <span className="text-sm font-medium">Ver Mapa</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Facilities View */}
        {activeView === 'facilities' && (
          <div className="animate-fadeIn">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Centros de Salud
              </h2>
              <div className="flex gap-2 flex-wrap">
                <button
                  onClick={() => setShowAddModal(true)}
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity font-medium"
                >
                  <Plus className="w-5 h-5" />
                  Agregar Centro
                </button>
                <div className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-lg">
                  <Search className="w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="Buscar..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="bg-transparent outline-none w-48"
                  />
                </div>
                <select
                  value={comunaFilter}
                  onChange={(e) => setComunaFilter(e.target.value)}
                  className="px-4 py-2 bg-card border border-border rounded-lg outline-none"
                >
                  <option value="">Todas las Comunas</option>
                  {COMUNAS.map(comuna => (
                    <option key={comuna} value={comuna}>{comuna}</option>
                  ))}
                </select>
                <select
                  value={typeFilter}
                  onChange={(e) => setTypeFilter(e.target.value)}
                  className="px-4 py-2 bg-card border border-border rounded-lg outline-none"
                >
                  <option value="">Todos los Tipos</option>
                  <option value="CESFAM">CESFAM</option>
                  <option value="SAPU">SAPU</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Clínica">Clínica</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredFacilities.map(facility => {
                const visitStatus = visits[facility.id]?.status
                return (
                  <div
                    key={facility.id}
                    onClick={() => openVisitModal(facility)}
                    className={`bg-card border rounded-xl p-6 hover:shadow-lg cursor-pointer transition-all ${visitStatus === 'visited' ? 'border-green-500/50' :
                      visitStatus === 'visiting-today' ? 'border-yellow-500/50' :
                        'border-border hover:border-primary'
                      }`}
                  >
                    <div className="flex justify-between items-start mb-4 flex-wrap gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-bold ${facility.type === 'CESFAM' ? 'bg-blue-500/20 text-blue-400' :
                        facility.type === 'SAPU' ? 'bg-green-500/20 text-green-400' :
                          facility.type === 'Hospital' ? 'bg-red-500/20 text-red-400' :
                            'bg-purple-500/20 text-purple-400'
                        }`}>
                        {facility.type}
                      </span>

                      {/* Visit Status Badge */}
                      {visitStatus && (
                        <span className={`px-3 py-1 rounded-full text-xs font-bold border ${visitStatus === 'visited' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                          visitStatus === 'visiting-today' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                            'bg-gray-500/20 text-gray-400 border-gray-500/30'
                          }`}>
                          {visitStatus === 'visited' ? '✓ Visitado' :
                            visitStatus === 'visiting-today' ? '⏰ Hoy' :
                              'Por visitar'}
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold mb-2">{facility.name}</h3>
                    <p className="text-muted-foreground text-sm mb-4 flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {facility.comuna}
                    </p>

                    {visits[facility.id]?.notes && (
                      <p className="text-sm text-muted-foreground mb-2 italic line-clamp-2">
                        💬 {visits[facility.id].notes}
                      </p>
                    )}

                    {facility.address && (
                      <p className="text-sm text-muted-foreground mb-2">{facility.address}</p>
                    )}
                    {facility.phone && (
                      <p className="text-sm text-muted-foreground mb-2">📞 {facility.phone}</p>
                    )}
                    {facility.email && (
                      <p className="text-sm text-muted-foreground mb-2">✉️ {facility.email}</p>
                    )}
                    {facility.website && (
                      <a
                        href={facility.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-sm text-primary hover:underline block mb-2"
                      >
                        🌐 Sitio web
                      </a>
                    )}

                    <div className="grid grid-cols-2 gap-2 mt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          openVisitModal(facility)
                        }}
                        className="px-3 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90 transition-opacity"
                      >
                        {visitStatus === 'visited' ? 'Ver Detalles' : 'Marcar Visita'}
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          openSingleFacilityInMaps(facility)
                        }}
                        className="px-3 py-2 bg-green-600 text-white rounded-lg text-sm hover:bg-green-700 transition-colors flex items-center justify-center gap-1"
                        title="Abrir en Google Maps"
                      >
                        📍 Maps
                      </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        {/* Routes View */}
        {activeView === 'routes' && (
          <div className="animate-fadeIn">
            <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
              <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Planificador de Rutas
              </h2>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setHideVisited(!hideVisited)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all ${hideVisited
                    ? 'border-primary bg-primary/10 text-primary'
                    : 'border-border bg-muted text-muted-foreground'
                    }`}
                >
                  {hideVisited ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  <span className="font-medium text-sm">
                    {hideVisited ? 'Ocultar Visitados' : 'Mostrar Todos'}
                  </span>
                </button>
                <div className="text-sm text-muted-foreground">
                  📍 Desde: Baquedano 1044, Villa Alemana
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {[
                { key: 'monday', label: 'Lunes' },
                { key: 'tuesday', label: 'Martes' },
                { key: 'wednesday', label: 'Miércoles' },
                { key: 'thursday', label: 'Jueves' },
                { key: 'friday', label: 'Viernes' }
              ].map(({ key: day, label }) => (
                <RouteDay
                  key={day}
                  day={day}
                  label={label}
                  facilities={facilities}
                  routes={routes[day] || []}
                  onPlanRoute={(selectedComuna) => planRouteForDay(day, selectedComuna)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Tracker View */}
        {activeView === 'tracker' && (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-8">
              Seguimiento de Aplicaciones
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {[
                { value: 'pending', label: 'Pendientes' },
                { value: 'cv-sent', label: 'CV Enviado' },
                { value: 'interview', label: 'Entrevista' },
                { value: 'accepted', label: 'Aceptados' },
                { value: 'rejected', label: 'Rechazados' }
              ].map(statusConfig => {
                const facilitiesInStatus = facilities.filter(f => {
                  const visit = visits[f.id]
                  const appStatus = visit?.applicationStatus || 'pending'
                  return appStatus === statusConfig.value
                })

                return (
                  <div key={statusConfig.value} className="bg-card border border-border rounded-xl overflow-hidden">
                    <div className="bg-muted p-4 border-b border-border">
                      <h3 className="font-bold">{statusConfig.label}</h3>
                      <span className="text-2xl font-bold">{facilitiesInStatus.length}</span>
                    </div>
                    <div className="p-4 min-h-[400px] max-h-[600px] overflow-y-auto">
                      {facilitiesInStatus.length > 0 ? (
                        facilitiesInStatus.map(facility => (
                          <div
                            key={facility.id}
                            onClick={() => openVisitModal(facility)}
                            className="mb-2 p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors cursor-pointer"
                          >
                            <h4 className="font-medium text-sm">{facility.name}</h4>
                            <p className="text-xs text-muted-foreground">{facility.comuna}</p>
                            {visits[facility.id]?.notes && (
                              <p className="text-xs text-muted-foreground italic mt-1 line-clamp-2">
                                💬 {visits[facility.id].notes}
                              </p>
                            )}
                            {visits[facility.id]?.visitDate && (
                              <p className="text-xs text-muted-foreground mt-1">
                                📅 {new Date(visits[facility.id].visitDate!).toLocaleDateString('es-CL')}
                              </p>
                            )}
                          </div>
                        ))
                      ) : (
                        <p className="text-sm text-muted-foreground text-center mt-8">No hay centros</p>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>

      {/* Visit Tracking Modal */}
      {showVisitModal && selectedFacility && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{selectedFacility.name}</h3>
                <p className="text-sm text-muted-foreground">{selectedFacility.comuna}</p>
              </div>
              <button
                onClick={() => setShowVisitModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Status Selection */}
              <div>
                <label className="block text-sm font-medium mb-3">Estado de Visita:</label>
                <div className="space-y-2">
                  {[
                    { value: 'to-visit', label: 'Por Visitar', color: 'gray' },
                    { value: 'visiting-today', label: '⏰ Visitando Hoy', color: 'yellow' },
                    { value: 'visited', label: '✓ Visitado', color: 'green' }
                  ].map(status => (
                    <label
                      key={status.value}
                      className={`flex items-center gap-3 p-3 rounded-lg border-2 cursor-pointer transition-all ${visits[selectedFacility.id]?.status === status.value
                        ? `border-${status.color}-500 bg-${status.color}-500/10`
                        : 'border-border hover:border-muted-foreground'
                        }`}
                    >
                      <input
                        type="radio"
                        name="visitStatus"
                        value={status.value}
                        checked={visits[selectedFacility.id]?.status === status.value}
                        onChange={() => updateVisitStatus(selectedFacility.id, status.value as VisitStatus)}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">{status.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Application Status */}
              <div>
                <label className="block text-sm font-medium mb-3">Estado de Aplicación:</label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { value: 'pending', label: '📋 Pendiente' },
                    { value: 'cv-sent', label: '📄 CV Enviado' },
                    { value: 'interview', label: '🎤 Entrevista' },
                    { value: 'accepted', label: '✅ Aceptado' },
                    { value: 'rejected', label: '❌ Rechazado' }
                  ].map(appStatus => (
                    <label
                      key={appStatus.value}
                      className={`flex items-center gap-2 p-2 rounded-lg border-2 cursor-pointer transition-all text-sm ${(visits[selectedFacility.id]?.applicationStatus || 'pending') === appStatus.value
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-muted-foreground'
                        }`}
                    >
                      <input
                        type="radio"
                        name="applicationStatus"
                        value={appStatus.value}
                        checked={(visits[selectedFacility.id]?.applicationStatus || 'pending') === appStatus.value}
                        onChange={() => updateVisitStatus(
                          selectedFacility.id,
                          visits[selectedFacility.id]?.status || 'to-visit',
                          { applicationStatus: appStatus.value as ApplicationStatus }
                        )}
                        className="w-4 h-4"
                      />
                      <span className="font-medium">{appStatus.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Visit Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Fecha de Visita:</label>
                <input
                  type="date"
                  value={visits[selectedFacility.id]?.visitDate || new Date().toISOString().split('T')[0]}
                  onChange={(e) => updateVisitStatus(selectedFacility.id, visits[selectedFacility.id]?.status || 'to-visit', { visitDate: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              {/* Contact Person */}
              <div>
                <label className="block text-sm font-medium mb-2">Persona de Contacto:</label>
                <input
                  type="text"
                  placeholder="Ej: María González - Directora"
                  value={visits[selectedFacility.id]?.contactPerson || ''}
                  onChange={(e) => updateVisitStatus(selectedFacility.id, visits[selectedFacility.id]?.status || 'to-visit', { contactPerson: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Notes */}
              <div>
                <label className="block text-sm font-medium mb-2">Notas de la Visita:</label>
                <textarea
                  placeholder="¿Qué pasó? CV entregado, entrevista programada, etc..."
                  value={visits[selectedFacility.id]?.notes || ''}
                  onChange={(e) => updateVisitStatus(selectedFacility.id, visits[selectedFacility.id]?.status || 'to-visit', { notes: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Follow Up Date */}
              <div>
                <label className="block text-sm font-medium mb-2">Fecha de Seguimiento (opcional):</label>
                <input
                  type="date"
                  value={visits[selectedFacility.id]?.followUpDate || ''}
                  onChange={(e) => updateVisitStatus(selectedFacility.id, visits[selectedFacility.id]?.status || 'to-visit', { followUpDate: e.target.value })}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary cursor-pointer"
                  style={{ colorScheme: 'dark' }}
                />
              </div>

              {/* Actions */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowVisitModal(false)}
                  className="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg font-medium transition-colors"
                >
                  Cerrar
                </button>
                <button
                  onClick={() => openSingleFacilityInMaps(selectedFacility)}
                  className="flex-1 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors flex items-center justify-center gap-2"
                >
                  <MapPin className="w-4 h-4" />
                  Google Maps
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add Facility Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-card border border-border rounded-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex justify-between items-start">
              <h3 className="text-xl font-bold">➕ Agregar Nuevo Centro</h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-muted rounded-lg transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.currentTarget)
                addNewFacility({
                  name: formData.get('name') as string,
                  type: formData.get('type') as any,
                  comuna: formData.get('comuna') as string,
                  address: formData.get('address') as string,
                  phone: formData.get('phone') as string,
                  email: formData.get('email') as string,
                  website: formData.get('website') as string,
                  notes: formData.get('notes') as string
                })
              }}
              className="p-6 space-y-4"
            >
              <div>
                <label className="block text-sm font-medium mb-2">Nombre del Centro *</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Ej: CESFAM Nuevo..."
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Tipo *</label>
                <select
                  name="type"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="CESFAM">CESFAM</option>
                  <option value="Hospital">Hospital</option>
                  <option value="Clínica">Clínica</option>
                  <option value="SAPU">SAPU</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Comuna *</label>
                <select
                  name="comuna"
                  required
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Seleccionar...</option>
                  {COMUNAS.map(comuna => (
                    <option key={comuna} value={comuna}>{comuna}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Dirección</label>
                <input
                  type="text"
                  name="address"
                  placeholder="Calle 123, Sector..."
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Teléfono</label>
                <input
                  type="text"
                  name="phone"
                  placeholder="+56 32 123 4567"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="contacto@centro.cl"
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Sitio Web</label>
                <input
                  type="url"
                  name="website"
                  placeholder="https://..."
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Notas</label>
                <textarea
                  name="notes"
                  placeholder="Información adicional..."
                  rows={3}
                  className="w-full px-4 py-2 bg-background border border-border rounded-lg outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <div className="flex gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg font-medium transition-colors"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  className="flex-1 px-4 py-2 bg-primary hover:opacity-90 text-primary-foreground rounded-lg font-medium transition-opacity flex items-center justify-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Agregar Centro
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  )
}

// RouteDay Component
function RouteDay({
  day,
  label,
  facilities,
  routes,
  onPlanRoute
}: {
  day: string
  label: string
  facilities: Facility[]
  routes: Route[]
  onPlanRoute: (comuna: string) => void
}) {
  const [selectedComuna, setSelectedComuna] = useState('')

  // Get unique comunas
  const comunas = Array.from(new Set(facilities.map(f => f.comuna))).sort()

  // Get facilities for selected comuna
  const comunaFacilities = selectedComuna
    ? facilities.filter(f => f.comuna === selectedComuna)
    : []

  return (
    <div className="bg-card border border-border rounded-xl overflow-hidden">
      <div className="bg-muted p-4 border-b border-border">
        <h3 className="font-bold mb-2">{label}</h3>
        <select
          value={selectedComuna}
          onChange={(e) => setSelectedComuna(e.target.value)}
          className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary"
        >
          <option value="">Seleccionar Comuna</option>
          {comunas.map(comuna => (
            <option key={comuna} value={comuna}>{comuna}</option>
          ))}
        </select>
      </div>

      <div className="p-4 min-h-[300px] max-h-[500px] overflow-y-auto">
        {selectedComuna ? (
          <>
            <div className="mb-4">
              <button
                onClick={() => onPlanRoute(selectedComuna)}
                className="w-full px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm hover:opacity-90 transition-opacity font-medium flex items-center justify-center gap-2"
              >
                🗺️ Planificar Ruta Óptima
              </button>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                Abre Google Maps con todos los centros no visitados
              </p>
            </div>

            <div className="space-y-2">
              <h4 className="text-sm font-bold text-muted-foreground mb-2">
                {comunaFacilities.length} centros en {selectedComuna}:
              </h4>
              {comunaFacilities.map((facility, index) => (
                <div key={facility.id} className="p-3 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-medium text-sm flex-1">
                      {index + 1}. {facility.name}
                    </h4>
                    <span className={`text-xs px-2 py-1 rounded ${facility.type === 'CESFAM' ? 'bg-blue-500/20 text-blue-400' :
                      facility.type === 'Hospital' ? 'bg-red-500/20 text-red-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                      {facility.type}
                    </span>
                  </div>
                  {facility.address && (
                    <p className="text-xs text-muted-foreground mb-2">📍 {facility.address}</p>
                  )}
                  {facility.phone && (
                    <p className="text-xs text-muted-foreground">📞 {facility.phone}</p>
                  )}
                </div>
              ))}
            </div>
          </>
        ) : (
          <div className="flex items-center justify-center h-full">
            <p className="text-sm text-muted-foreground text-center">
              Selecciona una comuna para planificar tu ruta
            </p>
          </div>
        )}

        {routes.length > 0 && (
          <div className="mt-4 pt-4 border-t border-border">
            <h4 className="text-sm font-bold text-muted-foreground mb-2">
              Ruta Guardada ({routes.length}):
            </h4>
            {routes.map((route, index) => (
              <div key={route.id} className="mb-2 p-2 bg-green-500/10 border border-green-500/20 rounded-lg">
                <h4 className="font-medium text-xs">{index + 1}. {route.facilities?.name}</h4>
                <p className="text-xs text-muted-foreground">{route.facilities?.comuna}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
