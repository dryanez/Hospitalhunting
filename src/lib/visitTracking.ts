// Visit tracking and facility management utilities
// Can be imported into page.tsx

export type VisitStatus = 'to-visit' | 'visiting-today' | 'visited'

export interface VisitInfo {
    facilityId: string
    status: VisitStatus
    visitDate?: string
    notes?: string
    contactPerson?: string
    followUpDate?: string
}

// LocalStorage keys
const VISITS_KEY = 'medijob-visits'
const CUSTOM_FACILITIES_KEY = 'medijob-custom-facilities'

// Load visits from localStorage
export function loadVisits(): Record<string, VisitInfo> {
    if (typeof window === 'undefined') return {}

    try {
        const stored = localStorage.getItem(VISITS_KEY)
        return stored ? JSON.parse(stored) : {}
    } catch (error) {
        console.error('Error loading visits:', error)
        return {}
    }
}

// Save visits to localStorage
export function saveVisits(visits: Record<string, VisitInfo>): void {
    if (typeof window === 'undefined') return

    try {
        localStorage.setItem(VISITS_KEY, JSON.stringify(visits))
    } catch (error) {
        console.error('Error saving visits:', error)
    }
}

// Update a single visit
export function updateVisit(
    visits: Record<string, VisitInfo>,
    facilityId: string,
    status: VisitStatus,
    data?: Partial<VisitInfo>
): Record<string, VisitInfo> {
    const newVisits = {
        ...visits,
        [facilityId]: {
            facilityId,
            status,
            visitDate: data?.visitDate || new Date().toISOString().split('T')[0],
            notes: data?.notes || visits[facilityId]?.notes || '',
            contactPerson: data?.contactPerson || visits[facilityId]?.contactPerson || '',
            followUpDate: data?.followUpDate || visits[facilityId]?.followUpDate || ''
        }
    }

    saveVisits(newVisits)
    return newVisits
}

// Get visit status for a facility
export function getVisitStatus(visits: Record<string, VisitInfo>, facilityId: string): VisitStatus {
    return visits[facilityId]?.status || 'to-visit'
}

// Get status badge color
export function getStatusColor(status: VisitStatus): string {
    switch (status) {
        case 'visited':
            return 'bg-green-500/20 text-green-400 border-green-500/30'
        case 'visiting-today':
            return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
        default:
            return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
}

// Get status label
export function getStatusLabel(status: VisitStatus): string {
    switch (status) {
        case 'visited':
            return '✓ Visitado'
        case 'visiting-today':
            return '⏰ Hoy'
        default:
            return 'Por visitar'
    }
}

// Load custom facilities from localStorage
export function loadCustomFacilities(): any[] {
    if (typeof window === 'undefined') return []

    try {
        const stored = localStorage.getItem(CUSTOM_FACILITIES_KEY)
        return stored ? JSON.parse(stored) : []
    } catch (error) {
        console.error('Error loading custom facilities:', error)
        return []
    }
}

// Save custom facilities to localStorage
export function saveCustomFacilities(facilities: any[]): void {
    if (typeof window === 'undefined') return

    try {
        localStorage.setItem(CUSTOM_FACILITIES_KEY, JSON.stringify(facilities))
    } catch (error) {
        console.error('Error saving custom facilities:', error)
    }
}

// Calculate stats from visits
export function calculateStats(visits: Record<string, VisitInfo>, totalFacilities: number) {
    const visitsList = Object.values(visits)
    const toVisit = totalFacilities - visitsList.filter(v => v.status === 'visited').length
    const visitingToday = visitsList.filter(v => v.status === 'visiting-today').length
    const visited = visitsList.filter(v => v.status === 'visited').length

    const today = new Date().toISOString().split('T')[0]
    const followUps = visitsList.filter(v => v.followUpDate && v.followUpDate >= today).length

    const percentage = totalFacilities > 0 ? ((visited / totalFacilities) * 100).toFixed(1) : '0.0'

    return {
        total: totalFacilities,
        toVisit,
        visitingToday,
        visited,
        followUps,
        percentage
    }
}
