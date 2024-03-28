import React from 'react'
import Navbar from './Navbar'

const Layout = ({ children }) => {
    return (
        <>
            <div className='flex flex-auto min-h-screen '>
                
                <div className='grow'>
                    <Navbar />
                    <div className=''>{children}</div>
                </div>
            </div>
        </>
    )
}

export default Layout