import { NavLink } from 'react-router-dom'
import '../App.css'
import { useNavigate } from 'react-router-dom'
import supabase from '../supabase'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUser, faBuildingUser, faBell, faArrowRight, faClipboardList, faHand, faMagnifyingGlassLocation, faMagnifyingGlassArrowRight, faRightFromBracket} from '@fortawesome/free-solid-svg-icons'
import * as Icons from '@fortawesome/free-solid-svg-icons'

const Dashboard = () => {
    
const navigate = useNavigate()

const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate('/')
}

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-slate-50">
            <div className="w-full lg:w-[5%] bg-white h-auto lg:h-screen border-b lg:border-b-0 lg:border-r border-slate-200 flex flex-row lg:flex-col items-center justify-between lg:justify-start py-2 lg:py-[2%] px-4 lg:px-0 shadow-sm z-20">
                <div className="flex flex-row lg:flex-col items-center justify-around lg:justify-start w-full gap-2 sm:gap-4 lg:gap-0">
                    <NavLink
                        to="/dashboard"
                        className={({ isActive }) => `w-10 lg:w-[60%] aspect-square flex items-center justify-center rounded-md text-base lg:text-[115%] transition-colors ${isActive ? 'bg-slate-100 text-[#0284c7]' : 'text-gray-800 hover:bg-slate-100 hover:text-[#0284c7]'}`}
                    >
                        <FontAwesomeIcon icon={faHouseChimney} />
                    </NavLink>
                    <NavLink
                        to="/employees"
                        className={({ isActive }) => `w-10 lg:w-[60%] aspect-square flex items-center justify-center rounded-md text-base lg:text-[115%] transition-colors ${isActive ? 'bg-slate-100 text-[#0284c7]' : 'text-gray-800 hover:bg-slate-100 hover:text-[#0284c7]'}`}
                    >
                        <FontAwesomeIcon icon={faUser} />
                    </NavLink>
                    <button className="w-10 lg:w-[60%] aspect-square flex items-center justify-center text-base lg:text-[115%] text-gray-800">
                        <FontAwesomeIcon icon={faBuildingUser} />
                    </button>
                    <button className="w-10 lg:w-[60%] aspect-square flex items-center justify-center text-base lg:text-[115%] text-gray-800">
                        <FontAwesomeIcon icon={faClipboardList} />
                    </button>
                    <button className="w-10 lg:w-[60%] aspect-square flex items-center justify-center text-base lg:text-[115%] text-gray-800">
                        <FontAwesomeIcon icon={faHand} />
                    </button>
                    <NavLink
                        to="/management"
                        className={({ isActive }) => `w-10 lg:w-[60%] aspect-square flex items-center justify-center rounded-md text-base lg:text-[115%] transition-colors ${isActive ? 'bg-slate-100 text-[#0284c7]' : 'text-gray-800 hover:bg-slate-100 hover:text-[#0284c7]'}`}
                    >
                        <FontAwesomeIcon icon={faMagnifyingGlassArrowRight} />
                    </NavLink>
                </div>
            </div>

            <div className="w-full lg:w-[95%] min-h-screen flex flex-col">
                <header className="w-full h-auto py-3 sm:py-4 lg:h-[8%] px-4 sm:px-[2%] flex items-center justify-between border-b lg:border-none border-slate-200 bg-white lg:bg-transparent">
                    <h1 className="text-lg sm:text-[120%] font-semibold text-black">
                        Dashboard
                    </h1>
                    <div className="flex items-center gap-4 sm:gap-6 h-full justify-end">
                        <button type="button" onClick={handleLogout} className="text-slate-400 hover:text-slate-600 text-base sm:text-[100%] flex items-center justify-center">
                            <FontAwesomeIcon icon={faRightFromBracket} />
                        </button>
                        <button className="text-slate-400 hover:text-slate-600 text-base sm:text-[100%] flex items-center justify-center">
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <NavLink
                            to="/account"
                            className="flex items-center justify-center"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" 
                                alt="User Profile" 
                                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shadow-xs border border-white"
                            />
                        </NavLink>
                    </div>
                </header>
                
                <div className="w-full px-3 sm:px-4 lg:px-[2%] py-3 lg:pb-[3%] flex flex-col lg:flex-row gap-6 lg:gap-[1.5%]">
                    
                    <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-[1.5%]">
                        <div className="flex flex-wrap items-center gap-4 sm:gap-[5%] text-xs lg:text-[65%] font-semibold tracking-wider text-slate-400 pb-[1%]">
                            <span className="flex items-center gap-2 lg:gap-[3%] text-[#0284c7] cursor-pointer">
                                <FontAwesomeIcon icon={Icons.faBullhorn} /> ANNOUNCEMENTS
                            </span>
                            <span className="flex items-center gap-2 lg:gap-[3%] cursor-pointer hover:text-slate-600 min-w-max lg:w-[25%]">
                                <FontAwesomeIcon icon={Icons.faChair}/> FROM THE DIRECTORS
                            </span>
                        </div>

                        <div className="relative w-full rounded-lg lg:rounded-[1%] bg-[#0284c7] text-white p-4 sm:p-6 lg:p-[3%] overflow-hidden shadow-sm">
                            <div className="relative z-10 flex flex-col gap-3 lg:gap-[3%]">
                                <div className="flex items-center gap-3 lg:gap-[2%]">
                                    <div className="w-10 sm:w-12 lg:w-[12%] aspect-square flex items-center justify-center shrink-0">
                                        <FontAwesomeIcon icon={Icons.faBullhorn} className="text-2xl sm:text-3xl lg:text-[250%]" />
                                    </div>
                                    <div>
                                        <h2 className="text-base sm:text-lg lg:text-[110%] font-semibold leading-tight">About the HealthBag</h2>
                                        <p className="text-xs lg:text-[60%] text-sky-100">20th Jan 2024</p>
                                    </div>
                                </div>

                                <p className="text-xs sm:text-sm lg:text-[65%] leading-relaxed text-sky-50 line-clamp-5 max-w-full lg:max-w-[85%]">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ac ante a
                                    elementum. Mauris a metus libero. Integer vitae dapibus nunc. Duis blandit, turpis
                                    eget pulvinar facilisis, eros nulla euismod odio, eu imperdiet odio odio vitae elit.
                                    Maecenas vitae sem ornare, euismod ligula sed, aliquet mauris. Suspendisse ac
                                    maximus felis cras iaculis vestibulum lectus. Cras iaculis vestibulum lectus, vel
                                    egestas magna accumsan eget. Aliquam porttitor egestas magna sed placerat.
                                </p>

                                <div className="flex items-center gap-3 lg:gap-[2.5%] pt-2 lg:pt-[1%] mb-2 lg:mb-[5%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150"
                                        alt="Author"
                                        className="w-8 sm:w-10 lg:w-[7%] aspect-square rounded-full border border-white/50 object-cover shrink-0"
                                    />
                                    <div>
                                        <h4 className="text-xs sm:text-sm lg:text-[68%] font-semibold">Morbi Porttitorvelit</h4>
                                        <p className="text-[10px] sm:text-xs lg:text-[55%] text-sky-200">HR Manager</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="block lg:hidden w-full">
                            <div className="flex flex-wrap items-center justify-between text-xs font-semibold tracking-wider text-slate-400 pb-2 gap-2">
                                <span className="flex items-center gap-2 text-slate-600">
                                    <FontAwesomeIcon icon={Icons.faChair}/> QUICK LINKS
                                </span>
                                <span className="flex items-center gap-2 text-blue-500 cursor-pointer hover:text-slate-800">
                                    <FontAwesomeIcon icon={Icons.faGear} className="text-slate-500"/> DASHBOARD WIDGETS
                                </span>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 w-full">
                                <div className="bg-white rounded-md p-2 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faUserPlus} className="text-[#0284c7] text-base sm:text-lg" />
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 leading-tight">ADD USER</span>
                                </div>
                                <div className="bg-white rounded-md p-2 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faUmbrellaBeach} className="text-[#84cc16] text-base sm:text-lg" />
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 leading-tight">LEAVE REQUEST</span>
                                </div>
                                <div className="bg-white rounded-md p-2 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faIdBadge} className="text-rose-500 text-base sm:text-lg" />
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 leading-tight">EMPLOYEE DATA</span>
                                </div>
                                <div className="bg-white rounded-md p-2 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faCreditCard} className="text-[#0284c7] text-base sm:text-lg" />
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 leading-tight">SALARY STATEMENT</span>
                                </div>
                                <div className="bg-white rounded-md p-2 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faNewspaper} className="text-emerald-500 text-base sm:text-lg" />
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 leading-tight">MAR NEWSLETTER</span>
                                </div>
                                <div className="bg-white rounded-md p-2 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faBriefcase} className="text-[#0284c7] text-base sm:text-lg" />
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 leading-tight">JOBMAN APPLICATION</span>
                                </div>
                                <div className="bg-white rounded-md p-2 sm:p-3 flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer col-span-2 sm:col-span-1">
                                    <FontAwesomeIcon icon={Icons.faDesktop} className="text-rose-500 text-base sm:text-lg" />
                                    <span className="text-[10px] sm:text-[11px] font-semibold text-slate-600 mt-2 leading-tight">IMIST WEBSITE</span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[3%] w-full">
                            <div className="flex flex-col gap-4 lg:gap-[4%]">
                                <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-lime-500 flex flex-col justify-between">
                                    <div className="flex justify-between items-center mb-3 lg:mb-[4%]">
                                        <span className="text-xs lg:text-[70%] font-semibold text-lime-500">Time Off</span>
                                        <FontAwesomeIcon icon={Icons.faArrowRight} className="text-blue-500 text-xs lg:text-[70%] cursor-pointer" />
                                    </div>
                                    <div className="flex justify-around items-center text-center py-2 lg:py-[2%] gap-2">
                                        <div className="border border-slate-300 rounded-md lg:rounded-[4%] p-2 lg:p-[3%] w-[45%] lg:w-[40%]">
                                            <span className="text-xs lg:text-[80%] text-black font-bold">Holidays</span>
                                            <p className="text-xl lg:text-[170%] font-bold text-lime-500 leading-none mt-1 lg:mt-[4%]">10</p>
                                        </div>
                                        <div className="border border-slate-300 rounded-md lg:rounded-[4%] p-2 lg:p-[3%] w-[45%] lg:w-[40%]">
                                            <span className="text-xs lg:text-[80%] text-black font-bold">Sick Days</span>
                                            <p className="text-xl lg:text-[170%] font-bold text-lime-500 leading-none mt-1 lg:mt-[4%]">5</p>
                                        </div>
                                    </div>
                                    <button className="w-full mt-4 lg:mt-[5%] py-2 lg:py-[2.5%] bg-sky-600 hover:bg-blue-600 text-white rounded lg:rounded-[1%] text-xs lg:text-[70%] font-medium transition">
                                        Request Time Off
                                    </button>
                                </div>

                                <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-lime-500 flex flex-col gap-2 lg:gap-[3%]">
                                    <h3 className="text-xs lg:text-[70%] font-semibold text-lime-400">Quick Access</h3>
                                    <div className="flex flex-col gap-2 lg:gap-[3%] text-xs lg:text-[65%] text-slate-600">
                                        <p className="hover:text-blue-500 cursor-pointer mt-1 lg:mt-[3%]">Mist Newsletter - January</p>
                                        <p className="hover:text-blue-500 cursor-pointer mt-1 lg:mt-[3%]">Loan Statement</p>
                                        <p className="hover:text-blue-500 cursor-pointer mt-1 lg:mt-[3%]">Cras tincidunt hendrerit sapien et blandit. Praesent sagittis libero dolor</p>
                                        <p className="hover:text-blue-500 cursor-pointer mt-1 lg:mt-[3%] mb-2 lg:mb-[8%]">Nulla ac quam sodales, euismod eros vel, tincidunt feis Nunc interdum, risus</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-col gap-4 lg:gap-[4%]">
                                <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-lime-500 h-auto">
                                    <div className="flex justify-between items-center mb-3 lg:mb-[4%]">
                                        <span className="text-xs lg:text-[70%] font-semibold text-[#84cc16]">New Joinees</span>
                                        <FontAwesomeIcon icon={faArrowRight} className="text-[#0284c7] text-xs lg:text-[70%] cursor-pointer" />
                                    </div>
                                    <div className="flex flex-col gap-3 lg:gap-[5%]">
                                        <div className="flex items-center gap-3 lg:gap-[4%]">
                                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" alt="Joinee" className="w-8 sm:w-10 lg:w-[14%] aspect-square rounded-full object-cover shrink-0" />
                                            <div>
                                                <p className="text-xs lg:text-[68%] font-semibold text-slate-800 leading-tight">Aenean Accumsan</p>
                                                <p className="text-[10px] lg:text-[58%] text-slate-400">Service Engineer</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 lg:gap-[4%]">
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Joinee" className="w-8 sm:w-10 lg:w-[14%] aspect-square rounded-full object-cover shrink-0" />
                                            <div>
                                                <p className="text-xs lg:text-[68%] font-semibold text-slate-800 leading-tight">Morbi Porttitorvelit</p>
                                                <p className="text-[10px] lg:text-[58%] text-slate-400">HR Manager</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 lg:gap-[4%]">
                                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150" alt="Joinee" className="w-8 sm:w-10 lg:w-[14%] aspect-square rounded-full object-cover shrink-0" />
                                            <div>
                                                <p className="text-xs lg:text-[68%] font-semibold text-slate-800 leading-tight">Phasellus Faucibus</p>
                                                <p className="text-[10px] lg:text-[58%] text-slate-400">Engineer</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 lg:gap-[4%]">
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Joinee" className="w-8 sm:w-10 lg:w-[14%] aspect-square rounded-full object-cover shrink-0" />
                                            <div>
                                                <p className="text-xs lg:text-[68%] font-semibold text-slate-800 leading-tight">Morbi Porttitorvelit</p>
                                                <p className="text-[10px] lg:text-[58%] text-slate-400">HR Manager</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 lg:gap-[4%]">
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Joinee" className="w-8 sm:w-10 lg:w-[14%] aspect-square rounded-full object-cover shrink-0" />
                                            <div>
                                                <p className="text-xs lg:text-[68%] font-semibold text-slate-800 leading-tight">Morbi Porttitorvelit</p>
                                                <p className="text-[10px] lg:text-[58%] text-slate-400">HR Manager</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-[#84cc16] flex flex-col gap-2 lg:gap-[3%]">
                                    <span className="text-xs lg:text-[70%] font-semibold text-[#84cc16]">What's Happening</span>
                                    <div className="flex flex-col gap-2 lg:gap-[2.5%]">
                                        <div>
                                            <p className="text-xs lg:text-[65%] font-medium text-slate-700 leading-snug">Cras tincidunt hendrerit sapien et blandit. Praesent sagittis libero dolor</p>
                                            <span className="text-[10px] lg:text-[55%] text-slate-400">2nd Jan 2024</span>
                                        </div>
                                        <div>
                                            <p className="text-xs lg:text-[65%] font-medium text-slate-700 leading-snug">Nulla ac quam sodales, euismod eros vel, tincidunt feis Nunc interdum, risus</p>
                                            <span className="text-[10px] lg:text-[55%] text-slate-400">2nd Jan 2024</span>
                                        </div>
                                        <div>
                                            <p className="text-xs lg:text-[65%] font-medium text-slate-700 leading-snug">Nulla ac quam sodales, euismod eros vel, tincidunt feis Nunc interdum, risus</p>
                                            <span className="text-[10px] lg:text-[55%] text-slate-400">2nd Jan 2024</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-[50%] flex flex-col gap-6 lg:gap-[1.5%]">
                        <div className="hidden lg:flex flex-col gap-[1.5%]">
                            <div className="flex flex-wrap items-center justify-between text-[65%] font-semibold tracking-wider text-slate-400 pb-[1%] gap-2">
                                <span className="flex items-center gap-[3%] text-slate-600 min-w-max w-[25%]">
                                    <FontAwesomeIcon icon={Icons.faChair}/> QUICK LINKS
                                </span>
                                <span className="flex items-center gap-[3%] text-blue-500 cursor-pointer hover:text-slate-800 min-w-max w-[25%]">
                                    <FontAwesomeIcon icon={Icons.faGear} className="text-slate-500"/> DASHBOARD WIDGETS
                                </span>
                            </div>

                            <div className="grid grid-cols-7 gap-[1.5%] w-full">
                                <div className="bg-white rounded-[3%] p-[8%] flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faUserPlus} className="text-[#0284c7] text-[100%]" />
                                    <span className="text-[45%] font-semibold text-slate-600 mt-[10%] leading-tight">ADD USER</span>
                                </div>
                                <div className="bg-white rounded-[3%] p-[8%] flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faUmbrellaBeach} className="text-[#84cc16] text-[100%]" />
                                    <span className="text-[45%] font-semibold text-slate-600 mt-[10%] leading-tight">LEAVE REQUEST</span>
                                </div>
                                <div className="bg-white rounded-[3%] p-[8%] flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faIdBadge} className="text-rose-500 text-[100%]" />
                                    <span className="text-[45%] font-semibold text-slate-600 mt-[10%] leading-tight">EMPLOYEE DATA</span>
                                </div>
                                <div className="bg-white rounded-[3%] p-[8%] flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faCreditCard} className="text-[#0284c7] text-[100%]" />
                                    <span className="text-[45%] font-semibold text-slate-600 mt-[10%] leading-tight">SALARY STATEMENT</span>
                                </div>
                                <div className="bg-white rounded-[3%] p-[8%] flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faNewspaper} className="text-emerald-500 text-[100%]" />
                                    <span className="text-[45%] font-semibold text-slate-600 mt-[10%] leading-tight">MAR NEWSLETTER</span>
                                </div>
                                <div className="bg-white rounded-[3%] p-[8%] flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faBriefcase} className="text-[#0284c7] text-[100%]" />
                                    <span className="text-[45%] font-semibold text-slate-600 mt-[10%] leading-tight">JOBMAN APPLICATION</span>
                                </div>
                                <div className="bg-white rounded-[3%] p-[8%] flex flex-col items-center justify-center text-center shadow-xs border border-slate-100 aspect-square cursor-pointer">
                                    <FontAwesomeIcon icon={Icons.faDesktop} className="text-rose-500 text-[100%]" />
                                    <span className="text-[45%] font-semibold text-slate-600 mt-[10%] leading-tight">IMIST WEBSITE</span>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[3%] w-full">
                            <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-[#84cc16] flex flex-col justify-between">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs lg:text-[70%] font-semibold text-[#84cc16]">To Do</span>
                                    <FontAwesomeIcon icon={Icons.faArrowRight} className="text-[#0284c7] text-xs lg:text-[70%] cursor-pointer" />
                                </div>
                                <div className="flex flex-col items-center justify-center py-4 sm:py-6 lg:py-[8%]">
                                    <img 
                                        src="https://thumbs.dreamstime.com/b/business-people-man-woman-meeting-seminar-training-conference-businesspeople-group-brainstorming-presentation-financial-chart-65930001.jpg" 
                                        alt="To do" 
                                        className="w-24 sm:w-[45%] aspect-video object-contain mb-2 lg:mb-[4%]" 
                                    />
                                    <p className="text-xs lg:text-[65%] text-slate-400">Nothing to review so far</p>
                                </div>
                            </div>

                            <div className="bg-[#0b2847] rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] text-white shadow-sm flex flex-col justify-between">
                                <div className="flex justify-between items-center mb-2 lg:mb-0">
                                    <span className="text-xs lg:text-[70%] font-semibold text-sky-200">Profile Details</span>
                                    <FontAwesomeIcon icon={Icons.faArrowRight} className="text-sky-300 text-xs lg:text-[70%] cursor-pointer" />
                                </div>
                                <div className="flex items-center justify-around py-3 lg:py-[5%]">
                                    <img
                                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
                                        alt="Profile"
                                        className="w-12 sm:w-16 lg:w-[30%] aspect-square rounded-full object-cover ring-2 ring-sky-400/40 shrink-0"
                                    />
                                    <div className="text-right">
                                        <p className="text-2xl sm:text-3xl lg:text-[200%] font-light tracking-tight leading-none text-white">70%</p>
                                        <p className="text-xs lg:text-[60%] text-sky-200 mt-1 lg:mt-[4%]">Profile Completed</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[3%] w-full">
                            <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-[#84cc16] flex flex-col gap-3 lg:gap-[5%]">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs lg:text-[70%] font-semibold text-[#84cc16]">Upcoming Celebrations</span>
                                    <FontAwesomeIcon icon={Icons.faArrowRight} className="text-[#0284c7] text-xs lg:text-[70%] cursor-pointer" />
                                </div>
                                <div className="flex flex-col gap-3 lg:gap-[4%]">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 lg:gap-[4%]">
                                            <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" alt="Celebrant" className="w-8 sm:w-10 lg:w-[18%] aspect-square rounded-full object-cover shrink-0" />
                                            <div>
                                                <p className="text-xs lg:text-[68%] font-semibold text-slate-800 leading-tight">Aenean Accumsan</p>
                                                <p className="text-[10px] lg:text-[58%] text-slate-400">Service Engineer</p>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon={Icons.faCakeCandles} className="text-slate-300 text-xs lg:text-[75%]" />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3 lg:gap-[4%]">
                                            <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150" alt="Celebrant" className="w-8 sm:w-10 lg:w-[18%] aspect-square rounded-full object-cover shrink-0" />
                                            <div>
                                                <p className="text-xs lg:text-[68%] font-semibold text-slate-800 leading-tight">Morbi Porttitorvelit</p>
                                                <p className="text-[10px] lg:text-[58%] text-slate-400">HR Manager</p>
                                            </div>
                                        </div>
                                        <FontAwesomeIcon icon={Icons.faCakeCandles} className="text-slate-300 text-xs lg:text-[75%]" />
                                    </div>
                                </div>
                            </div>

                            <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-[#84cc16] flex flex-col gap-2 lg:gap-[3%]">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs lg:text-[70%] font-semibold text-[#84cc16]">Upcoming Holidays</span>
                                    <FontAwesomeIcon icon={Icons.faArrowRight} className="text-[#0284c7] text-xs lg:text-[70%] cursor-pointer" />
                                </div>
                                <div className="flex flex-col gap-2 lg:gap-[3%]">
                                    <div className="flex justify-between items-center text-xs lg:text-[65%]">
                                        <div>
                                            <p className="font-semibold text-slate-700">26th Jan</p>
                                            <p className="text-[10px] lg:text-[85%] text-slate-400">Friday</p>
                                        </div>
                                        <span className="text-slate-500 text-[11px] lg:text-[90%]">Bank Holiday</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs lg:text-[65%]">
                                        <div>
                                            <p className="font-semibold text-slate-700">26th Jan</p>
                                            <p className="text-[10px] lg:text-[85%] text-slate-400">Friday</p>
                                        </div>
                                        <span className="text-slate-500 text-[11px] lg:text-[90%]">Bank Holiday</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs lg:text-[65%]">
                                        <div>
                                            <p className="font-semibold text-slate-700">26th Jan</p>
                                            <p className="text-[10px] lg:text-[85%] text-slate-400">Friday</p>
                                        </div>
                                        <span className="text-slate-500 text-[11px] lg:text-[90%]">Bank Holiday</span>
                                    </div>
                                    <div className="flex justify-between items-center text-xs lg:text-[65%]">
                                        <div>
                                            <p className="font-semibold text-slate-700">26th Jan</p>
                                            <p className="text-[10px] lg:text-[85%] text-slate-400">Friday</p>
                                        </div>
                                        <span className="text-slate-500 text-[11px] lg:text-[90%]">Bank Holiday</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-[3%] w-full">
                            <div className="bg-white rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-slate-100 border-l-4 border-l-[#84cc16] flex flex-col justify-between">
                                <div className="flex justify-between items-center">
                                    <span className="text-xs lg:text-[70%] font-semibold text-[#84cc16]">Who's Out</span>
                                    <FontAwesomeIcon icon={Icons.faArrowRight} className="text-[#0284c7] text-xs lg:text-[70%] cursor-pointer" />
                                </div>
                                <div className="flex flex-col items-center justify-center py-4 lg:py-[6%]">
                                    <img 
                                        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEifi57JI3pQTQFJKKGu4QjwwD1qzRF1RzNT-uPAmfS_RfCeUcFpct05V_i-8MusLXmQTcEv4lzH2Aw2ajhilZ2y7OYiA1vdz88QtP-7bDDYfnA-mIS8iWmnr5g86q0SlZmTLzHhVi7a1QNNP7sa3eRsNMeiknvWk2aTXnkeLEAThzTruEAY9nZX6uPo/s398/001.png" 
                                        alt="Who's out" 
                                        className="w-24 sm:w-[45%] aspect-video object-contain mb-2 lg:mb-[4%]" 
                                    />
                                    <p className="text-xs lg:text-[65%] text-slate-500 font-medium">None of the team members on leave</p>
                                </div>
                            </div>

                            <div 
                                className="rounded-lg lg:rounded-[1%] p-4 lg:p-[5%] shadow-sm border border-pink-100 flex flex-col items-center justify-center text-center bg-cover bg-center min-h-40"
                                style={{ backgroundImage: "url('https://media.istockphoto.com/id/2085442872/vector/festive-party-confetti-vibrant-vector-background.jpg?s=612x612&w=0&k=20&c=OM5G7IYyJFU993RLau8ma-6UUl2xq9iNKYt6bYZKyjs=')" }}
                            >
                                <img
                                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150"
                                    alt="Celebrant"
                                    className="w-12 sm:w-14 lg:w-[26%] aspect-square rounded-full object-cover ring-4 ring-white shadow mb-1 lg:mb-[2%]"
                                />
                                <span className="text-xs lg:text-[65%] font-semibold text-pink-600">3 Years Completed</span>
                                <p className="text-xs lg:text-[70%] font-medium text-slate-800 mt-1 lg:mt-[1%]">
                                    Yay! Today is Joline Dais's work anniversary
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard