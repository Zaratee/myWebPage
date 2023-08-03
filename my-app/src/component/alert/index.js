import React from 'react'
import CloseIcon from '../../icons/close'

const Alert = ({ info, onClose }) => {

    return (
        <div className={`shadow-xl bg-alert-warning-300 border-[3px] border-alert-warning-700 rounded p-7 font-sans text-slate-700 relative`}>
            <div onClick={onClose} className=' cursor-pointer absolute top-1 right-1 drop-shadow-warning'><CloseIcon size={15} color={'#121212'} /></div>
            {info.description}
        </div>
    )
}

export default Alert