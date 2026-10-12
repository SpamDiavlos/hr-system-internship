import { useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import officeImg from '../assets/office.jpg'
import supabase from '../supabase'

const Signup = () => {
    
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [loading, setLoading] = useState(false)

    const handleLogin = async (e) => {
        if (e) e.preventDefault()

        let valid = true

        if (!email.includes('@') || !email.includes('.')) {
            setEmailError('Please enter a valid e-mail address')
            valid = false
        } else {
            setEmailError('')
        }

        if (password.length === 0) {
            setPasswordError('Please enter your password')
            valid = false
        } else {
            setPasswordError('')
        }

        if (!valid) return

        setLoading(true)
        setPasswordError('')

        const { data, error } = await supabase.auth.signInWithPassword({
            email: email.trim(),
            password: password
        })

        setLoading(false)

        if (error) {
            setPasswordError(error.message)
            return
        }

        if (data?.session) {
            navigate('/dashboard')
        }
    }

    return (

        <div className="flex flex-col-reverse md:flex-row min-h-screen">
            <div className="flex justify-center items-center w-full md:w-[50%] py-[10%] md:py-0">
                <div className="w-[85%] md:w-[60%]">
                    <h1 className="text-4xl font-bold mb-[10%]">Get Started Now</h1>
                    <form onSubmit={handleLogin}>
                        <h2 className="uppercase tracking-[0.3em] text-gray-400 mb-[2%]">Email</h2>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full border-b border-gray-300 outline-none py-[2%]"
                        />

                        {emailError && (
                            <p className="text-[#C92532] text-sm mt-[2%]">⚠︎ {emailError}</p>
                        )}

                        <h2 className="uppercase tracking-[0.3em] text-gray-400 mb-[2%] mt-[7%]">
                            Password
                        </h2>

                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full border-b border-gray-300 outline-none py-[2%]"
                        />

                        <br />

                        {passwordError && (
                            <p className="text-[#C92532] text-sm mt-[2%] mb-[1%]">
                                ⚠︎ {passwordError}
                            </p>
                        )}

                        <input
                            type="checkbox"
                            className="w-[4%] aspect-square mt-[7%]"
                        />

                        <span className="text-gray-500 ml-[3%]">
                            Remember Me
                        </span>

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#0B6FB6] text-white font-semibold tracking-[0.2em] py-[3%] rounded-lg mt-[8%] cursor-pointer hover:bg-[#095c96] transition-colors disabled:opacity-50"
                        >
                            {loading ? 'LOGGING IN...' : 'LOGIN'}
                        </button>
                    </form>

                    <div className="flex justify-center mt-[4%]">
                        <p>
                            Don't have an account?{' '}
                            <Link
                                to="/register"
                                className="text-[#7DC455]"
                            >
                                Register here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-full md:w-[50%] h-[35vh] md:h-auto overflow-hidden">
                <img
                    src={officeImg}
                    alt="office"
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-linear-to-br from-[#0B6FB6]/90 to-[#7DC455]/70"></div>

                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="w-[65%] text-left text-white">
                        <h2 className="tracking-[0.3em]">WELCOME TO</h2>

                        <h1 className="text-5xl font-bold mt-[4%]">
                            HR System
                        </h1>

                        <div className="w-[28%] border-b mt-[6%]"></div>

                        <p className="mt-[4%]">
                            Login to Access Dashboard
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup