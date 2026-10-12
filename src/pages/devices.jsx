import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faUserPlus, faEye, faPen, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

const mobileRowData = [
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Assigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Assigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Assigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Assigned' },
    { device: 'Mobile Phone', make: 'Apple', model: 'iPhone 12', value: '800', phoneNumber: '2345632453', serialNumber: '123456789', status: 'Unassigned' }
]

const laptopRowData = [
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Assigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Assigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Assigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Unassigned' },
    { device: 'Laptop/PC', make: 'Dell', model: 'Dell', value: '800', serialNumber: '123456789', status: 'Assigned' }
]

const Status = (params) => {
    return (
        <span className={`inline-block rounded-full px-5 py-1 w-[80%] text-xs ${params.value === 'Assigned' ? 'bg-sky-200 text-sky-700' : 'bg-yellow-200 text-yellow-700'}`}>
            {params.value}
        </span>
    )
}

const Actions = (params) => {
    return (
        <div className="flex items-center gap-4 mt-[5%] text-[#7ed343] text-sm">
            {params.data.status === 'Unassigned' && (
                <button type="button" onClick={() => params.context?.setAssignUser?.(true)}>
                    <FontAwesomeIcon icon={faUserPlus} />
                </button>
            )}
            <button type="button"><FontAwesomeIcon icon={faEye} /></button>
            <button type="button"><FontAwesomeIcon icon={faPen} /></button>
        </div>
    )
}

const columnDefs = [
    { field: 'device', headerName: 'Device', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'make', headerName: 'Make', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'model', headerName: 'Model', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'value', headerName: 'Value', flex: 0.8, cellClass: 'flex items-center justify-center' },
    { field: 'phoneNumber', headerName: 'Phone Number', flex: 1.2, cellClass: 'flex items-center justify-center' },
    { field: 'serialNumber', headerName: 'Serial Number', flex: 1.2, cellClass: 'flex items-center justify-center' },
    { field: 'status', headerName: 'Status', flex: 1, cellRenderer: Status, cellClass: 'flex items-center justify-center' },
    { headerName: 'Actions', flex: 0.9, cellRenderer: Actions, cellClass: 'flex items-center justify-center actions-cell' }
]

const Devices = () => {

    const [selectedTab, setSelectedTab] = useState('Mobile Phone')
    const [addDevice, setAddDevice] = useState(false)
    const [assignUser, setAssignUser] = useState(false)

    const activeRowData = selectedTab === 'Laptop'
        ? laptopRowData
        : selectedTab === 'Tablet'
        ? []
        : mobileRowData

    const activeColumnDefs = selectedTab === 'Laptop'
        ? columnDefs.filter(col => col.field !== 'phoneNumber')
        : columnDefs

    return (
        <div className="flex flex-col ">
            <div className="bg-white p-4 ml-5 mr-5 flex items-center gap-12">
                <button 
                    type="button"
                    onClick={() => setSelectedTab('Laptop')}
                    className={`text-base transition-colors ${selectedTab === 'Laptop' ? 'font-semibold text-[#39a8e5]' : 'font-medium text-gray-500 hover:text-[#39a8e5]'}`}
                >
                    Laptop
                </button>
                <button 
                    type="button"
                    onClick={() => setSelectedTab('Mobile Phone')}
                    className={`text-base transition-colors ${selectedTab === 'Mobile Phone' ? 'font-semibold text-[#39a8e5]' : 'font-medium text-gray-500 hover:text-[#39a8e5]'}`}
                >
                    Mobile Phone
                </button>
                <button 
                    type="button"
                    onClick={() => setSelectedTab('Tablet')}
                    className={`text-base transition-colors ${selectedTab === 'Tablet' ? 'font-semibold text-[#39a8e5]' : 'font-medium text-gray-500 hover:text-[#39a8e5]'}`}
                >
                    Tablet
                </button>
            </div>
            <div className="flex justify-end items-center gap-3 p-4 ml-5 mr-5">
                <button onClick={() => setAddDevice(true)} className="bg-[#7ed343] hover:bg-[#6fc534] text-white text-xs font-medium px-5 py-2 rounded">
                    Add Devices
                </button>
                <select className="bg-white text-xs text-gray-500 px-3 py-2 w-28 outline-none">
                    <option>Sort By</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                </select>
                <div className="bg-white flex items-center w-48 px-3 py-2 gap-2">
                    <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-500 text-xs" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="w-full text-xs outline-none"
                    />
                </div>
            </div>
            <div className="ml-5 mr-5 device-grid ag-theme-quartz" style={{ height: '450px' }}>
                <AgGridReact
                    modules={[AllCommunityModule]}
                    rowData={activeRowData}
                    columnDefs={activeColumnDefs}
                    rowHeight={38}
                    headerHeight={34}
                    context={{
                        setAssignUser
                    }}
                />
            </div>
            <div className="bg-white h-14 ml-5 mr-5 mt-1 flex items-center justify-end gap-6 px-8 text-xs text-slate-400">
                <span>Rows per page:</span>
                <button className="flex items-center gap-1 text-slate-500">
                    10
                    <span className="text-[9px]">▼</span>
                </button>
                <span>1-8 of 1240</span>
                <button className="hover:text-slate-600">
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className="hover:text-slate-600">
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>

            {addDevice && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <form className="relative w-full max-w-110 rounded bg-white p-5 shadow-xl">
                        <button onClick={() => setAddDevice(false)} type="button" className="absolute right-4 top-3 text-lg text-slate-400 hover:text-slate-600">
                            ×
                        </button>

                        <h2 className="text-lg font-semibold text-[#39a8e5]">Add New Device</h2>
                        <p className="text-[10px] text-slate-500 mt-1">Please use the below form to update device details or add new device.</p>
                        <h3 className="text-xs font-medium text-slate-700 mt-4 mb-2">Device Details</h3>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Make</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Model</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Date Issued</label>
                                <input type="date" className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Value</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Serial Number</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Phone Number</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-5">
                            <button onClick={() => setAddDevice(false)} type="button" className="border border-sky-300 text-[#39a8e5] text-xs font-medium px-5 py-2 rounded">
                                Cancel
                            </button>
                            <button onClick={() => setAddDevice(false)} type="button" className="bg-[#7ed343] hover:bg-[#6fc534] text-white text-xs font-medium px-5 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}

            {assignUser && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <form className="relative w-full max-w-110 rounded bg-white p-6 shadow-xl">
                        <button onClick={() => setAssignUser(false)} type="button" className="absolute right-4 top-3 text-lg text-slate-400 hover:text-slate-600">
                            ×
                        </button>

                        <div className="text-[#39a8e5] mb-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                            </svg>
                        </div>

                        <h2 className="text-lg font-bold">
                            <span className="text-[#39a8e5]">Assign </span>
                            <span className="text-black">User</span>
                        </h2>
                        <p className="text-[10px] text-slate-500 mt-1">Please select a user to assign device</p>

                        <div className="mt-5">
                            <label className="block text-[10px] text-slate-600 font-medium mb-1">Select User</label>
                            <div className="relative">
                                <select className="w-full border border-slate-200 px-3 py-2 text-xs outline-none bg-white appearance-none rounded text-slate-700">
                                    <option value="Simona Morasca">Simona Morasca</option>
                                    <option value="Uriel Fernandes">Uriel Fernandes</option>
                                </select>
                                <span className="absolute right-3 top-2.5 pointer-events-none text-slate-400 text-xs">▼</span>
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-6">
                            <button onClick={() => setAssignUser(false)} type="button" className="border border-sky-300 text-[#39a8e5] text-xs font-medium px-5 py-2 rounded hover:bg-sky-50 transition-colors">
                                Cancel
                            </button>
                            <button onClick={() => setAssignUser(false)} type="button" className="bg-[#7ed343] hover:bg-[#6fc534] text-white text-xs font-medium px-5 py-2 rounded transition-colors">
                                Add User
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Devices
