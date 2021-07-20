import React from 'react'

const Modal = () => {
    return (
         <div className="text-white bg-gray-800 flex flex-shrink-0 flex-col">
         <div className="flex flex-col p-8 bg-white shadow-md hover:shodow-lg rounded-2xl">
         <div className="flex items-center justify-between">
             <div className="flex items-center">
                 <div className="flex flex-col ml-3">
                     <div className="text-black font-medium leading-none">Wallet: 0x0000000000000000000000</div>
                 </div>
             </div>
             <button  className="flex-no-shrink bg-gray-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-400 text-white rounded-full">Change Network</button>
             <button  className="flex-no-shrink bg-gray-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-blue-400 text-white rounded-full">Connect Wallet</button>
         </div>
         </div>
     </div>
    )
}

export default Modal
