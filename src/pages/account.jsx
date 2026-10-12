import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHouseChimney, 
    faUser, 
    faBuildingUser, 
    faBell, 
    faClipboardList, 
    faHand, 
    faMagnifyingGlassArrowRight,
    faArrowLeft,
    faVenus,
    faCalendarDays,
    faBriefcase,
    faUserCheck,
    faMoneyBillWave,
    faIdCard,
    faFileLines,
    faShieldHeart,
    faLaptop,
    faFolderOpen,
    faClipboardCheck,
    faEnvelopeOpenText,
    faPlaneDeparture,
    faHeartPulse
} from '@fortawesome/free-solid-svg-icons'

const Account = () => {

    const [selectedTab, setSelectedTab] = useState('References')

    const tabs = [
        { name: 'Personal', icon: faUserCheck },
        { name: 'Job & Pay', icon: faMoneyBillWave },
        { name: 'ID/Personal', icon: faIdCard },
        { name: 'Documents', icon: faFileLines },
        { name: 'Benefits', icon: faShieldHeart },
        { name: 'Health', icon: faHeartPulse },
        { name: 'Asset', icon: faLaptop },
        { name: 'References', icon: faFolderOpen },
        { name: 'Status Audit', icon: faClipboardCheck },
        { name: 'Staff Correspondence', icon: faEnvelopeOpenText },
        { name: 'Travel Accommodation', icon: faPlaneDeparture }
    ]

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
                <header className="w-full h-auto py-3 sm:py-4 lg:h-14 px-4 sm:px-6 flex items-center justify-between border-b border-slate-200 bg-white">
                    <div className="flex items-center gap-3">
                        <NavLink
                            to="/dashboard"
                            className="w-6 h-6 rounded-full bg-[#7ed343] text-white text-xs flex items-center justify-center"
                        >
                            <FontAwesomeIcon icon={faArrowLeft} />
                        </NavLink>
                        <h1 className="text-base font-semibold text-slate-800">
                            Celina Dias
                        </h1>
                    </div>
                    <div className="flex items-center gap-4 h-full justify-end">
                        <button className="text-sky-600 hover:text-sky-700 text-base flex items-center justify-center">
                            <FontAwesomeIcon icon={faBell} />
                        </button>
                        <NavLink
                            to="/account"
                            className="flex items-center justify-center"
                        >
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100" 
                                alt="User Profile" 
                                className="w-8 h-8 rounded-full object-cover border border-white"
                            />
                        </NavLink>
                    </div>
                </header>

                <div className="bg-[#0b3c5d] text-white p-6 relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 z-10">
                        <div className="relative">
                            
                            <img 
                                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300" 
                                alt="Celina Dias" 
                                className="w-32 h-32 rounded-full object-cover border-4 border-white/20"
                            />
                            <span className="absolute bottom-1 right-2 w-5 h-5 rounded-full bg-[#7ed343] border-2 border-white" />
                        </div>
                        <div className="flex flex-col items-center md:items-start text-center md:text-left">
                            <h2 className="text-2xl font-bold">Celina Dias</h2>
                            <p className="text-xs text-slate-300 mt-0.5">UI/UX Designer</p>
                            
                            <div className="flex items-center gap-4 text-[11px] text-slate-300 mt-3">
                                <span className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faVenus} className="text-[#7ed343]" /> Female
                                </span>
                                <span className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faCalendarDays} className="text-[#7ed343]" /> 28-06-2001
                                </span>
                                <span className="flex items-center gap-1">
                                    <FontAwesomeIcon icon={faBriefcase} className="text-[#7ed343]" /> 2y 4m
                                </span>
                            </div>

                            <p className="text-[10px] text-slate-300 mt-3 max-w-xl leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque finibus ac ante a elementum. Mauris a metus libero. Integer vitae dapibus nunc. Duis blandit, turpis eget pulvinar facilisis, eros nulla euismod odio, eu imperdiet odio odio vitae elit. Maecenas vitae sem ornare, euismod ligula sed, aliquet mauris.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center z-10 md:mr-8">
                        <div className="w-20 h-20 rounded-full border-4 border-[#7ed343] border-t-white flex items-center justify-center">
                            <span className="text-xl font-bold">37%</span>
                        </div>
                        <span className="text-[10px] font-medium text-slate-300 mt-2">Profile Complete</span>
                        <span className="text-[9px] text-slate-400">Phasellus auctor massa felis</span>
                    </div>
                </div>

                <div className="bg-white border-b border-slate-200 px-4 flex items-center justify-between overflow-x-auto">
                    {tabs.map((tab, idx) => (
                        <button
                            key={idx}
                            type="button"
                            onClick={() => setSelectedTab(tab.name)}
                            className={`flex flex-col items-center justify-center py-3 px-3 text-xs font-medium transition-colors border-b-2 whitespace-nowrap gap-1 ${
                                selectedTab === tab.name 
                                    ? 'border-[#39a8e5] text-[#39a8e5]' 
                                    : 'border-transparent text-slate-500 hover:text-[#39a8e5]'
                            }`}
                        >
                            <FontAwesomeIcon icon={tab.icon} className="text-sm" />
                            <span className="text-[10px]">{tab.name}</span>
                        </button>
                    ))}
                </div>

                <div className="p-5 flex flex-col gap-5">
                    <div className="bg-white rounded p-4 shadow-xs border border-slate-100 flex items-center justify-between">
                        <p className="text-[10px] text-slate-500">
                            Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quisque Finibus Ac Ante A Elementum. Mauris A Metus Libero. Integer Vitae Dapibus Nunc. Duis Blandit, Turpis Eget Pulvinar Facilisis.
                        </p>
                        <button className="bg-[#7ed343] hover:bg-[#6fc534] text-white text-xs font-medium px-6 py-1.5 rounded transition-colors shrink-0 ml-4">
                            Edit
                        </button>
                    </div>

                    <div className="bg-white rounded p-5 shadow-xs border border-slate-100 border-l-4 border-l-[#7ed343]">
                        <h3 className="text-xs font-semibold text-slate-800 mb-4">Referees Nomination Details 1</h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">First Name</label>
                                    <input value="Andrew" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Last Name</label>
                                    <input value="Dias" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Their Job Title</label>
                                    <input value="HR Manager" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Name of Company</label>
                                    <input value="Lake Vigilioberg" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Email Address</label>
                                    <input value="Andrew@gmail.com" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Position you Held</label>
                                    <input value="Graphic Designer" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Employment Start Date</label>
                                    <input value="12-10-10" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Employment End Date</label>
                                    <input value="12-10-20" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-[10px] text-slate-500 mb-1">What is Your Relationship With the Reference</label>
                                    <input value="Employee" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 border-t lg:border-t-0 lg:border-l border-slate-100 pt-3 lg:pt-0 lg:pl-8">
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Address Line 1</label>
                                    <input value="Lake Vigilioberg, SC 39877-1169" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Address Line 2</label>
                                    <input value="Lake Vigilioberg, SC 39877-1169" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Town</label>
                                    <input value="Lake Vigilioberg" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">County</label>
                                    <input value="Cheshire" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Country</label>
                                    <input value="England" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Postcode</label>
                                    <input value="123456" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Primary Contact Number</label>
                                    <input value="9856736452" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Alternate Contact Number</label>
                                    <input value="9856735243" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded p-5 shadow-xs border border-slate-100 border-l-4 border-l-[#7ed343]">
                        <h3 className="text-xs font-semibold text-slate-800 mb-4">Referees Nomination Details 1</h3>
                        
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-3">
                            <div className="grid grid-cols-2 gap-3">
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">First Name</label>
                                    <input value="Andrew" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Last Name</label>
                                    <input value="Dias" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Their Job Title</label>
                                    <input value="HR Manager" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Name of Company</label>
                                    <input value="Lake Vigilioberg" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Email Address</label>
                                    <input value="Andrew@gmail.com" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Position you Held</label>
                                    <input value="Graphic Designer" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Employment Start Date</label>
                                    <input value="12-10-10" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Employment End Date</label>
                                    <input value="12-10-20" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div className="col-span-2 sm:col-span-1">
                                    <label className="block text-[10px] text-slate-500 mb-1">What is Your Relationship With the Reference</label>
                                    <div className="relative">
                                        <select className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none appearance-none">
                                            <option value="Employee">Employee</option>
                                        </select>
                                        <span className="absolute right-3 top-2 pointer-events-none text-slate-400 text-xs">▼</span>
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-3 border-t lg:border-t-0 lg:border-l border-slate-100 pt-3 lg:pt-0 lg:pl-8">
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Address Line 1</label>
                                    <input value="Lake Vigilioberg, SC 39877-1169" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Address Line 2</label>
                                    <input value="Lake Vigilioberg, SC 39877-1169" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Town</label>
                                    <input value="Lake Vigilioberg" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">County</label>
                                    <input value="Cheshire" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Country</label>
                                    <input value="England" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Postcode</label>
                                    <input value="123456" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Primary Contact Number</label>
                                    <input value="9856736452" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                                <div>
                                    <label className="block text-[10px] text-slate-500 mb-1">Alternate Contact Number</label>
                                    <input value="9856735243" readOnly className="w-full border border-slate-200 rounded px-2.5 py-1.5 text-xs text-slate-700 bg-slate-50 outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account