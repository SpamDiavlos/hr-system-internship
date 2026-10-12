import { useState } from 'react'
import '../App.css'
import { Link, useNavigate } from 'react-router-dom'
import officeImg from '../assets/office.jpg'
import supabase from '../supabase'

const Register = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [reenter, setReenter] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [reenterError, setReenterError] = useState('')
    const [loading, setLoading] = useState(false)
    const [successMessage, setSuccessMessage] = useState('')

    const getPassword = () => {
        let score = 0

        if (password.length >= 8) score++
        if(password.match(/[A-Z]/)) score++
        if(password.match(/[0-9]/)) score++
        if(password.match(/[^A-Za-z0-9]/)) score++

        return score
    }

    const handleRegister = async (e) => {
        if (e) e.preventDefault()

        let valid = true

        if (!email.includes('@') || !email.includes('.')) {
            setEmailError('Please enter a valid e-mail address')
            valid = false
        } else {
            setEmailError('')
        }

        if (getPassword() !== 4) {
            setPasswordError('Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character')
            valid = false
        } else {
            setPasswordError('')
        }

        if (reenter !== password) {
            setReenterError('Passwords do not match')
            valid = false
        } else {
            setReenterError('')
        }

        if (!valid) return

        setLoading(true)
        setEmailError('')
        setPasswordError('')
        setReenterError('')

        const { data, error } = await supabase.auth.signUp({
            email: email.trim(),
            password: password
        })

        setLoading(false)

        if (error) {
            setEmailError(error.message)
            return
        }

        if (data?.user) {
            setSuccessMessage('Account registered successfully! Redirecting to login...')
            setTimeout(() => {
                navigate('/')
            }, 2000)
        }
    }

    return (
        <div className="flex flex-col-reverse md:flex-row min-h-screen">
            <div className="flex justify-center items-center w-full md:w-[50%] py-[10%] md:py-0">
                <div className="w-[85%] md:w-[60%]">
                    <h1 className="text-4xl font-bold mb-[10%]">Get Started Now</h1>

                    {successMessage && (
                        <div className="mb-4 p-3 bg-emerald-50 border border-emerald-300 text-emerald-700 text-xs rounded">
                            {successMessage}
                        </div>
                    )}

                    <form onSubmit={handleRegister}>
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

                        <h2 className="uppercase tracking-[0.3em] text-gray-400 mb-[2%] mt-[7%]">Create Password</h2>
                        <input 
                            type="password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                            className="w-full border-b border-gray-300 outline-none py-[2%]"
                        />
                        <div className="flex justify-between mt-[3%] mb-[3%]">
                            <div className={`w-[22%] h-[0.5vh] rounded-full ${getPassword() >= 1 ? 'bg-red-500' : 'bg-gray-400'}`}></div>
                            <div className={`w-[22%] h-[0.5vh] rounded-full ${getPassword() >= 2 ? 'bg-orange-600' : 'bg-gray-400'}`}></div>
                            <div className={`w-[22%] h-[0.5vh] rounded-full ${getPassword() >= 3 ? 'bg-yellow-500' : 'bg-gray-400'}`}></div>
                            <div className={`w-[22%] h-[0.5vh] rounded-full ${getPassword() >= 4 ? 'bg-green-500' : 'bg-gray-400'}`}></div>
                        </div>
                        {passwordError && (
                            <p className="text-[#C92532] text-sm mt-[2%] mb-[1%]">⚠︎ {passwordError}</p>
                        )}

                        <h2 className="uppercase tracking-[0.3em] text-gray-400 mb-[2%] mt-[7%]">Re-enter Password</h2>
                        <input 
                            type="password" 
                            value={reenter} 
                            onChange={(e) => setReenter(e.target.value)} 
                            required 
                            className="w-full border-b border-gray-300 outline-none py-[2%]"
                        />
                        {reenterError && (
                            <p className="text-[#C92532] text-sm mt-[2%] mb-[1%]">⚠︎ {reenterError}</p>
                        )}

                        <input type="checkbox" className="w-[4%] aspect-square mt-[7%]" />
                        <span className="text-gray-500 ml-[3%]">Remember Me</span>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full bg-[#0B6FB6] text-white font-semibold tracking-[0.2em] py-[3%] rounded-lg mt-[8%] disabled:opacity-50 cursor-pointer"
                        >
                            {loading ? 'REGISTERING...' : 'REGISTER'}
                        </button>
                    </form>

                    <div className="flex justify-center mt-[4%]">
                        <p>
                            Already have an account?{' '}
                            <Link
                                to="/"
                                className="text-[#7DC455]"
                            >
                                Login here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>

            <div className="relative w-full md:w-[50%] h-[35vh] md:h-auto overflow-hidden">
                <img src={officeImg} alt="office" className="absolute inset-0 w-full h-full object-cover" />
                <div className="absolute inset-0 bg-linear-to-br from-[#0B6FB6]/90 to-[#7DC455]/70"></div>
                <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="w-[65%] text-left text-white">
                        <h2 className="tracking-[0.3em]">WELCOME TO</h2>
                        <h1 className="text-5xl font-bold mt-[4%]">HR System</h1>
                        <div className="w-[28%] border-b mt-[6%]"></div>
                        <p className="mt-[4%]">Login to Access Dashboard</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register