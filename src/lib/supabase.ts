import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseKey)

// Types
export interface Facility {
    id: string
    name: string
    type: 'CESFAM' | 'SAPU' | 'Hospital' | 'Clínica'
    comuna: string
    address?: string
    phone?: string
    email?: string
    website?: string
    notes?: string
    created_at: string
    updated_at?: string
}

export interface Application {
    id: string
    facility_id: string
    status: 'pending' | 'applied' | 'interview' | 'rejected' | 'accepted'
    applied_date?: string
    interview_date?: string
    notes?: string
    created_at: string
    updated_at?: string
    facilities?: Facility
}

export interface Route {
    id: string
    facility_id: string
    day_of_week: 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday'
    order_index: number
    time?: string
    notes?: string
    created_at: string
    updated_at?: string
    facilities?: Facility
}
