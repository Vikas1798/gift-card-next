import React from 'react'

const Wrapper = ({ children, className }) => {
    return (
        <div className={`w-full max-w-full px-2 md:px-20 mx-auto ${className || ""}`}>
            {children}
        </div>
    )
}

export default Wrapper
