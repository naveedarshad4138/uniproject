import React from 'react'

export const Locader = ({msg}) => {
    return (
        <>
                   <div className=" position-absolute top-50 start-50 loader">
                        <div className="spinner-border text-warning" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </div>
                    </div>
        </>
    )
}
