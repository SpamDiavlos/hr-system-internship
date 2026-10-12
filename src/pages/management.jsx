import { NavLink, Outlet } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouseChimney, faUser, faBuildingUser, faBell, faArrowRight, faClipboardList, faShirt, faHand, faMagnifyingGlassLocation, faCar, faLaptop, faMagnifyingGlassArrowRight} from '@fortawesome/free-solid-svg-icons'
import * as Icons from '@fortawesome/free-solid-svg-icons'

const Management = () => {
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
                <header className="w-full h-auto py-3 sm:py-4 lg:h-20 px-4 sm:px-[2%] flex items-center justify-between border-b lg:border-none border-slate-200 bg-white lg:bg-transparent">
                    <h1 className="text-lg sm:text-[120%] font-semibold text-black">
                        Manage Asset
                    </h1>
                    <div className="flex items-center gap-4 sm:gap-6 lg:gap-[30%] h-full justify-end">
                        <button className="text-slate-400 hover:text-slate-600 text-base sm:text-[100%] flex items-center justify-center">
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <img 
                            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" 
                            alt="User Profile" 
                            className=" w-8 h-8 sm:w-9 sm:h-9 rounded-full object-cover shadow-xs border border-white lg:h-[55%] aspect-square"
                        />
                    </div>
                </header>

                <div className="bg-white flex border border-white">
                    <div className="w-[20%]">
                        <div className="flex flex-col border border-slate-200 bg-white">
                            <NavLink to="/management/vehicle" className={({ isActive }) => `w-full border-b border-slate-200 px-5 py-5 text-left text-sm font-medium transition-colors hover:bg-slate-50 hover:text-[#39a8e5] ${isActive ? 'bg-sky-50 text-[#39a8e5]' : 'text-gray-500'}`}>
                              <span className="text-xl mr-6">
                                <FontAwesomeIcon icon={faCar} />
                              </span>
                                Vehicle Details
                            </NavLink>
                            <NavLink to="/management/devices" className={({ isActive }) => `w-full border-b border-slate-200 px-5 py-5 text-left text-sm font-medium transition-colors hover:bg-slate-50 hover:text-[#39a8e5] ${isActive ? 'bg-sky-50 text-[#39a8e5]' : 'text-gray-500'}`}>
                              <span className="text-xl mr-6">
                                <FontAwesomeIcon icon={faLaptop} />
                              </span>
                                Device Details
                            </NavLink>
                            <NavLink to="/management/uniform" className={({ isActive }) => `w-full px-5 py-5 text-left text-sm font-medium transition-colors hover:bg-slate-50 hover:text-[#39a8e5] ${isActive ? 'bg-sky-50 text-[#39a8e5]' : 'text-gray-500'}`}>
                              <span className="text-xl mr-6">
                                <FontAwesomeIcon icon={faShirt} />
                              </span>
                                Uniforms
                            </NavLink>
                        </div>
                    </div>

                    <div className="w-full h-screen flex flex-col">
                        <Outlet />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Management
