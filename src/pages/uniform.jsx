import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEye, faPen, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { AgGridReact } from 'ag-grid-react'
import { AllCommunityModule } from 'ag-grid-community'
import 'ag-grid-community/styles/ag-grid.css'
import 'ag-grid-community/styles/ag-theme-quartz.css'

const uniformRowData = [
    { Type: 'Top (Large)', Size: '50.5/71', Allocated: '4' },
    { Type: 'Top (Med)', Size: '48/68', Allocated: '7' },
    { Type: 'Top (Small)', Size: '46/66', Allocated: '7' },
    { Type: 'Top (Other)', Size: '47/66', Allocated: '7' },
    { Type: 'Trouser (Large)', Size: '36"', Allocated: '4' },
    { Type: 'Trouser (Med)', Size: '34"', Allocated: '7' },
    { Type: 'Trouser (Small)', Size: '32"', Allocated: '7' },
    { Type: 'Trouser (Other)', Size: '30"', Allocated: '7' },
    { Type: 'Boots (Large)', Size: '4', Allocated: '4' },
    { Type: 'Boots (Med)', Size: '7', Allocated: '7' }
]

const userAvatars = [
    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100',
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150'
]

const UsersCell = (params) => {
    const count = parseInt(params.data.Allocated) || 4
    const showCount = count > 4 ? 5 : 4
    const extra = count > 5 ? count - 5 : 0

    return (
        <div className="flex items-center -space-x-1.5">
            {userAvatars.slice(0, showCount).map((src, idx) => (
                <img 
                    key={idx} 
                    src={src} 
                    alt="User" 
                    className="w-5 h-5 rounded-full object-cover border border-white"
                />
            ))}
            {extra > 0 && (
                <span className="w-5 h-5 rounded-full bg-sky-100 text-[#39a8e5] text-[9px] font-semibold flex items-center justify-center border border-white">
                    +{extra}
                </span>
            )}
        </div>
    )
}

const Actions = () => {
    return (
        <div className="flex items-center gap-4 text-[#7ed343] text-sm">
            <button type="button"><FontAwesomeIcon icon={faEye} /></button>
            <button type="button"><FontAwesomeIcon icon={faPen} /></button>
        </div>
    )
}

const columnDefs = [
    { field: 'Type', headerName: 'Type', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'Size', headerName: 'Size', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'Allocated', headerName: 'Allocated', flex: 1, cellClass: 'flex items-center justify-center' },
    { field: 'Users', headerName: 'Users', flex: 1.2, cellRenderer: UsersCell, cellClass: 'flex items-center justify-center' },
    { headerName: 'Actions', flex: 0.9, cellRenderer: Actions, cellClass: 'flex items-center justify-center actions-cell' }
]

const Uniform = () => {

    const [selectedTab, setSelectedTab] = useState('Uniforms')
    const [addUniform, setAddUniform] = useState(false)

    return (
        <div className="flex flex-col ">
            <div className="bg-white p-4 ml-5 mr-5 flex items-center gap-12">
                <button 
                    type="button"
                    onClick={() => setSelectedTab('Uniforms')}
                    className={`text-base transition-colors ${selectedTab === 'Uniforms' ? 'font-semibold text-[#39a8e5]' : 'font-medium text-gray-500 hover:text-[#39a8e5]'}`}
                >
                    Uniforms
                </button>
                <button 
                    type="button"
                    onClick={() => setSelectedTab('PPE')}
                    className={`text-base transition-colors ${selectedTab === 'PPE' ? 'font-semibold text-[#39a8e5]' : 'font-medium text-gray-500 hover:text-[#39a8e5]'}`}
                >
                    PPE
                </button>
            </div>
            <div className="flex justify-end items-center gap-3 p-4 ml-5 mr-5">
                <button onClick={() => setAddUniform(true)} className="bg-[#7ed343] hover:bg-[#6fc534] text-white text-xs font-medium px-5 py-2 rounded">
                    Add Uniform
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
                    rowData={selectedTab === 'Uniforms' ? uniformRowData : []}
                    columnDefs={columnDefs}
                    rowHeight={38}
                    headerHeight={34}
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

            {addUniform && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4">
                    <form className="relative w-full max-w-110 rounded bg-white p-5 shadow-xl">
                        <button onClick={() => setAddUniform(false)} type="button" className="absolute right-4 top-3 text-lg text-slate-400 hover:text-slate-600">
                            ×
                        </button>

                        <h2 className="text-lg font-semibold text-[#39a8e5]">Add New Uniform</h2>
                        <p className="text-[10px] text-slate-500 mt-1">Please use the below form to update uniform details or add new uniform.</p>
                        <h3 className="text-xs font-medium text-slate-700 mt-4 mb-2">Uniform Details</h3>

                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Type</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Size</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Allocated</label>
                                <input className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                            <div>
                                <label className="block text-[10px] text-slate-500 mb-1">Date Issued</label>
                                <input type="date" className="w-full border border-slate-200 px-2 py-1.5 text-xs outline-none" />
                            </div>
                        </div>

                        <div className="flex justify-end gap-2 mt-5">
                            <button onClick={() => setAddUniform(false)} type="button" className="border border-sky-300 text-[#39a8e5] text-xs font-medium px-5 py-2 rounded">
                                Cancel
                            </button>
                            <button onClick={() => setAddUniform(false)} type="button" className="bg-[#7ed343] hover:bg-[#6fc534] text-white text-xs font-medium px-5 py-2 rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Uniform
