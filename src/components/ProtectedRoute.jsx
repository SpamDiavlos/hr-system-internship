import { Navigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import supabase from '../supabase'

const ProtectedRoute = ({ children }) => {

    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)

    useEffect(() => {
        const checkAuth = async () => {
            const { data } = await supabase.auth.getSession()
            setUser(data?.session?.user ?? null)
            setLoading(false)
        }

        checkAuth()

        const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
            setUser(session?.user ?? null)
            setLoading(false)
        })

        return () => {
            authListener?.subscription?.unsubscribe()
        }
    }, [])

    if (loading) {
        return null
    }

    if (!user) {
        return <Navigate to="/" replace />
    }

    return children
}

export default ProtectedRoute