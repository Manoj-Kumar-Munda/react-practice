import React, { useState } from 'react'

const ActiveTab = () => {

    const [activeTab,setActiveTab] = useState("Home");
  return (
    <div className='min-h-screen flex justify-center items-center'>
        <div className='max-w-md w-full border border-slate-900'>
            <div className='flex justify-start items-center bg-slate-300'>
                <div className={'group px-4 py-2 hover:bg-slate-300 '+( (activeTab === "home") && "bg-slate-500 text-white")}>
                    <span className='group-hover:text-white cursor-pointer' onClick={() => setActiveTab("home")}>Home</span>
                </div>
                <div className={'group hover:bg-slate-300 px-4 py-2 '+( (activeTab === "about") && "bg-slate-500 text-white")}>
                    <span className='group-hover:text-white cursor-pointer' onClick={() => setActiveTab("about")}>About</span>
                </div>
                <div className={'group hover:bg-slate-300 px-4 py-2 '+ ( (activeTab === "contact") && "bg-slate-500 text-white")}>
                    <span className='group-hover:text-white cursor-pointer' onClick={() => setActiveTab("contact")} >Contact</span>
                </div>

            </div>
            <div>
                {
                    (activeTab === "home") && <p>This is the homepage</p>
                }
                {
                     (activeTab === "about") && <p>This is the about page</p>
                }
                {
                     (activeTab === "contact") && <p>This is the contact page</p>
                }
                
            </div>

        </div>
    </div>
  )
}

export default ActiveTab