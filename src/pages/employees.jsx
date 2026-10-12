import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHouseChimney, faUser, faBuildingUser, faBell, faClipboardList, faHand, faMagnifyingGlass, faMagnifyingGlassArrowRight, faEye, faEllipsis, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

const activeEmployeesRowData = [
    { empNo: '206', name: 'Josephine Darakjy', email: 'josephine_darakjy@darakjy.org', dateOfJoining: '21-09-2004', roleTitle: 'Engineer', department: 'HR', location: 'Kings Hill', mobile: '9876765434', status: 'On Probation', avatar: 'JD' },
    { empNo: '765', name: 'Art Venere', email: 'art@venere.org', dateOfJoining: '05-03-2006', roleTitle: 'Driver', department: 'HR', location: 'Remote', mobile: '7656765434', status: 'On Notice Period', avatar: 'AV' },
    { empNo: '854', name: 'Lenna Paprocki', email: 'lpaprocki@hotmail.com', dateOfJoining: '21-09-2004', roleTitle: 'Marketing Executive', department: 'Marketing', location: 'Hull', mobile: '8765654323', status: 'Appraisal Due', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' },
    { empNo: '231', name: 'Simona Morasca', email: 'simona@morasca.com', dateOfJoining: '21-09-2004', roleTitle: 'Office Staff', department: 'Sales', location: 'Hull', mobile: '9765654323', status: 'Appraisal Due', avatar: 'SM' },
    { empNo: '831', name: 'Leota Dilliard', email: 'leota@hotmail.com', dateOfJoining: '05-03-2006', roleTitle: 'Junior HR', department: 'Marketing', location: 'Remote', mobile: '2343456543', status: 'Appraisal Due', avatar: 'LD' },
    { empNo: '456', name: 'Kiley Caldarera', email: 'kiley.caldarera@aol.com', dateOfJoining: '21-09-2004', roleTitle: 'Engineer', department: 'Management', location: 'Remote', mobile: '1234567899', status: 'On Probation', avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100' },
    { empNo: '921', name: 'Cammy Albares', email: 'calbares@gmail.com', dateOfJoining: '05-03-2006', roleTitle: 'Engineer', department: 'Sales', location: 'Kings Hill', mobile: '2345678987', status: 'On Probation', avatar: 'CA' },
    { empNo: '567', name: 'Fletcher Flosi', email: 'fletcher.flosi@yahoo.com', dateOfJoining: '21-09-2004', roleTitle: 'Driver', department: 'Engineer', location: 'Eng - Gloucester', mobile: '9876543212', status: 'On Probation', avatar: 'FF' },
    { empNo: '568', name: 'Willard Kolmetz', email: 'willard@hotmail.com', dateOfJoining: '05-03-2006', roleTitle: 'Office Staff', department: 'Engineer', location: 'Eng - Orpington', mobile: '3434343434', status: 'Appraisal Due', avatar: 'WK' }
]

const EmployeeCell = (params) => {
    const isImage = params.data.avatar.startsWith('http')

    return (
        <div className="flex items-center -space-x-1.5">
            {isImage ? (
                <img 
                    src={params.data.avatar} 
                    alt="User" 
                    className="w-5 h-5 rounded-full object-cover border border-white"
                />
            ) : (
                <span className="w-5 h-5 rounded-full bg-sky-100 text-[#39a8e5] text-[9px] font-semibold flex items-center justify-center border border-white">
                    {params.data.avatar}
                </span>
            )}
            <span className="pl-3 text-xs text-slate-700">{params.value}</span>
        </div>
    )
}

const Status = (params) => {
    let statusStyle = 'bg-sky-200 text-sky-700'

    if (params.value === 'On Probation') {
        statusStyle = 'bg-amber-100 text-amber-700'
    } else if (params.value === 'On Notice Period') {
        statusStyle = 'bg-red-100 text-red-600'
    }

    return (
        <span className={`inline-block rounded-full px-3 py-1 w-[85%] text-center text-[10px] font-medium ${statusStyle}`}>
            {params.value}
        </span>
    )
}

const Action = () => {
    return (
        <div className="flex items-center gap-3 text-[#7ed343] text-sm">
            <button type="button"><FontAwesomeIcon icon={faEye} /></button>
            <button type="button" className="text-gray-400 hover:text-gray-600"><FontAwesomeIcon icon={faEllipsis} /></button>
        </div>
    )
}

const columnDefs = [
    { field: 'empNo', headerName: 'EMP No.', flex: 0.9, cellRenderer: EmployeeCell, cellClass: 'flex items-center' },
    { field: 'name', headerName: 'Name', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'email', headerName: 'Email', flex: 1.5, cellClass: 'flex items-center justify-center' },
    { field: 'dateOfJoining', headerName: 'Date of joining', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'roleTitle', headerName: 'Role Title', flex: 1.1, cellClass: 'flex items-center justify-center' },
    { field: 'department', headerName: 'Department', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'location', headerName: 'Location', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'mobile', headerName: 'Mobile', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'status', headerName: 'Status', flex: 1.1, cellRenderer: Status, cellClass: 'flex items-center justify-center' },
    { headerName: 'Actions', flex: 0.8, cellRenderer: Action, cellClass: 'flex items-center justify-center actions-cell' }
]

const Employees = () => {

    const [selectedTab, setSelectedTab] = useState('Active Employees')

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
                        Employees
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

                <div className="flex flex-col">
                    <div className="bg-white p-4 ml-5 mr-5 flex items-center gap-12">
                        <button 
                            type="button"
                            onClick={() => setSelectedTab('Active Employees')}
                            className={`text-base transition-colors ${selectedTab === 'Active Employees' ? 'font-semibold text-[#39a8e5]' : 'font-medium text-gray-500 hover:text-[#39a8e5]'}`}
                        >
                            Active Employees
                        </button>

                        <button 
                            type="button"
                            onClick={() => setSelectedTab('Leavers')}
                            className={`text-base transition-colors ${selectedTab === 'Leavers' ? 'font-semibold text-[#39a8e5]' : 'font-medium text-gray-500 hover:text-[#39a8e5]'}`}
                        >
                            Leavers
                        </button>
                    </div>

                    <div className="flex justify-end items-center p-4 ml-5 mr-5">
                        <div className="bg-white flex items-center w-52 px-3 py-2 gap-2 rounded shadow-xs">
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="text-gray-400 text-xs" />
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
                            rowData={selectedTab === 'Active Employees' ? activeEmployeesRowData : []}
                            columnDefs={columnDefs}
                            rowHeight={42}
                            headerHeight={36}
                        />
                    </div>

                    <div className="bg-white h-14 ml-5 mr-5 mt-1 flex items-center justify-end gap-6 px-8 text-xs text-slate-400">
                        <span>Rows per page:</span>
                        <button className="flex items-center gap-1 text-slate-500">
                            10
                            <span className="text-[9px]">▼</span>
                        </button>
                        <span>1-9 of 1240</span>
                        <button className="hover:text-slate-600">
                            <FontAwesomeIcon icon={faAngleLeft} />
                        </button>
                        <button className="hover:text-slate-600">
                            <FontAwesomeIcon icon={faAngleRight} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Employees