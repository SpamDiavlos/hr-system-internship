import { useState } from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarDays, faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons'

const tabs = [
    'New Starter: Acceptance Form',
    'Employment Health Questionnaire',
    'Mandatory Documents',
    'Summary'
]

const fieldClass = 'w-full border border-slate-200 bg-white rounded-xs px-3 py-1.5 text-xs text-slate-700 outline-none placeholder:text-slate-300'

const Onboard = () => {

    const [selectedTab, setSelectedTab] = useState('New Starter: Acceptance Form')

    return (
        <div className="min-h-screen bg-[#dfe5ef]">
            <header className="flex items-center justify-between bg-white px-8 py-3 shadow-xs">
                <h1 className="text-base font-semibold text-slate-800">Employee Onboarding</h1>
                <div className="flex items-center gap-1 text-slate-600">
                    <button
                        type="button"
                        className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-600 shadow-xs"
                    >
                        <FontAwesomeIcon icon={faUser} className="text-xs" />
                    </button>
                    <FontAwesomeIcon icon={faChevronDown} className="text-[10px] text-slate-400" />
                </div>
            </header>

            <div className="relative bg-[#0b3c5d] h-48 w-full overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-[#0b3c5d] via-[#09324e] to-[#0b3c5d] opacity-90" />
            </div>

            <div className="relative -mt-32 mx-auto max-w-6xl px-4 pb-12">
                <div className="overflow-hidden rounded-sm bg-white shadow-xl">
                    
                    <div className="border-b border-slate-100 bg-slate-50/50 px-8 py-4">
                        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-medium">
                            {tabs.map((tab) => (
                                <button
                                    key={tab}
                                    type="button"
                                    onClick={() => setSelectedTab(tab)}
                                    className={`transition-colors ${
                                        selectedTab === tab 
                                            ? 'font-semibold text-[#39a8e5]' 
                                            : 'text-slate-400 hover:text-slate-600'
                                    }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="p-8">
                        <h2 className="mb-6 text-xs font-semibold text-slate-800">Please fill in the form below</h2>

                        <div className="grid grid-cols-1 gap-x-12 gap-y-6 lg:grid-cols-2">
                            <div className="space-y-5">
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Forename <span className="text-[#d12a31]">*</span></label>
                                        <input type="text" className={fieldClass} />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Surname <span className="text-[#d12a31]">*</span></label>
                                        <input type="text" className={fieldClass} />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">E-mail <span className="text-[#d12a31]">*</span></label>
                                        <input type="email" className={fieldClass} />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Date of Birth</label>
                                        <div className="relative">
                                            <input type="text" className={`${fieldClass} pr-8`} />
                                            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                                                <FontAwesomeIcon icon={faCalendarDays} className="text-xs" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <h3 className="mb-3 text-xs font-semibold text-slate-700">Address Details</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Post Code</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Select an Address</label>
                                                <div className="relative">
                                                    <select className={`${fieldClass} appearance-none pr-8`} defaultValue="">
                                                        <option value="" disabled hidden></option>
                                                    </select>
                                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[9px]">▼</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Address Line 1 <span className="text-[#d12a31]">*</span></label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Address Line 2</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Town</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Country</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Telephone Number</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Mobile Number</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <h3 className="mb-3 text-xs font-semibold text-slate-700">Emergency Contact Details</h3>
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Post Code</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Select an Address</label>
                                                <div className="relative">
                                                    <select className={`${fieldClass} appearance-none pr-8`} defaultValue="">
                                                        <option value="" disabled hidden></option>
                                                    </select>
                                                    <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 text-[9px]">▼</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Address Line 1</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Address Line 2</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Town</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Country</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Telephone Number</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Mobile Number</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Emergency Contact</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                            <div>
                                                <label className="mb-1 block text-[10px] font-medium text-slate-500">Emergency Mobile Number</label>
                                                <input type="text" className={fieldClass} />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <label className="block text-[10px] font-medium text-slate-600">
                                        Have you been convicted of any criminal offences which are not yet spent under the Rehabilitation of Offenders Act?
                                    </label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="conviction" defaultChecked className="h-3 w-3 accent-[#39a8e5]" />
                                            Yes
                                        </label>
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="conviction" className="h-3 w-3 accent-[#39a8e5]" />
                                            No
                                        </label>
                                    </div>
                                </div>

                                <div className="pt-2">
                                    <label className="flex items-center gap-2 text-[10px] font-medium text-slate-600">
                                        <input type="checkbox" className="h-3.5 w-3.5 rounded-xs accent-[#39a8e5]" />
                                        Will you have a current P45 with you on your commencement of employment?
                                    </label>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <div>
                                    <label className="mb-1 block text-[10px] font-medium text-slate-500">Nationality</label>
                                    <input type="text" className={fieldClass} />
                                </div>

                                <div>
                                    <label className="mb-1 block text-[10px] font-medium text-slate-500">National Insurance Number</label>
                                    <input type="text" className={fieldClass} />
                                </div>

                                <div>
                                    <label className="mb-1 block text-[10px] font-medium text-slate-500">Bank/Building Society &amp; Branch Address</label>
                                    <input type="text" className={fieldClass} />
                                </div>

                                <div className="space-y-2">
                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Sort Code</label>
                                        <input type="text" placeholder="00 00 00" className={fieldClass} />
                                    </div>
                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Account Number</label>
                                        <input type="text" placeholder="00000000" className={fieldClass} />
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <label className="block text-[10px] font-medium text-slate-600">Do you hold a current First Aid Certificate?</label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="firstAid" defaultChecked className="h-3 w-3 accent-[#39a8e5]" />
                                            Yes
                                        </label>
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="firstAid" className="h-3 w-3 accent-[#39a8e5]" />
                                            No
                                        </label>
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Expiry Date of the certificate</label>
                                        <div className="relative">
                                            <input type="text" className={`${fieldClass} pr-8`} />
                                            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                                                <FontAwesomeIcon icon={faCalendarDays} className="text-xs" />
                                            </span>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Driving Licence Number</label>
                                        <input type="text" placeholder="000000000000000" className={fieldClass} />
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">Please provide your CSCS Card Number &amp; Expiry Date</label>
                                        <div className="relative">
                                            <input type="text" className={`${fieldClass} pr-8`} />
                                            <span className="pointer-events-none absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400">
                                                <FontAwesomeIcon icon={faCalendarDays} className="text-xs" />
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <label className="block text-[10px] font-medium text-slate-600">Do you have more than 6 points?</label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="points" defaultChecked className="h-3 w-3 accent-[#39a8e5]" />
                                            Yes
                                        </label>
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="points" className="h-3 w-3 accent-[#39a8e5]" />
                                            No
                                        </label>
                                    </div>

                                    <div>
                                        <label className="mb-1 block text-[10px] font-medium text-slate-500">How many points?</label>
                                        <input type="text" className={fieldClass} />
                                    </div>
                                </div>

                                <div className="space-y-3 pt-2">
                                    <label className="block text-[10px] font-medium text-slate-600">Are you eligible to work in the UK without a work permit?</label>
                                    <div className="flex items-center gap-6">
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="permit" className="h-3 w-3 accent-[#39a8e5]" />
                                            Yes
                                        </label>
                                        <label className="flex items-center gap-2 text-xs text-slate-600">
                                            <input type="radio" name="permit" defaultChecked className="h-3 w-3 accent-[#39a8e5]" />
                                            No
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end gap-3 border-t border-slate-100 pt-5">
                            <button
                                type="button"
                                className="border border-sky-300 bg-white px-6 py-1.5 text-xs font-medium text-[#39a8e5] rounded transition-colors hover:bg-sky-50"
                            >
                                Cancel
                            </button>
                            <button
                                type="button"
                                className="bg-[#7ed343] hover:bg-[#6fc534] px-7 py-1.5 text-xs font-medium text-white rounded transition-colors shadow-xs"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Onboard