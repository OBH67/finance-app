import React from 'react'

const TokenInfo = ({ID}) => {
    return (
        <div className="flex flex-col my-10 space-y-6 md:flex-row md:items-center md:space-x-6">
                <div className="w-full md:w-1/2">
                    <div className="max-w-lg">
                        <h1 className="text-2xl font-medium text-black tracking-wide text-white md:text-4xl">
                            {ID.tokenName}
                        </h1>
                        <h1 className="text-2xl font-medium tracking-wide text-white md:text-4xl">
                            {ID.tokenSubname}
                        </h1>
                        <p className="mt-2 text-white">
                            {ID.description}
                        </p>
                       <div className="grid gap-6 mt-8 sm:grid-cols-2">
                            <div className="flex items-center space-x-6 text-gray-800">
                                <span className='md:text-2xl text-white'>Presale Address: {ID.PresaleAddress}</span>
                            </div>
                            <div className="flex items-center space-x-6 text-gray-800 ">
                            </div>
                            <div className="flex items-center space-x-6 text-gray-800">
                                <span className='text-white md:text-2xl'>Token Address: {ID.TokenAddress}</span>
                            </div>
                            <div className="flex items-center space-x-6 text-gray-800">
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center w-full md:w-1/2">
                    <img src={ID.tokenImage}
                        alt="car photo" className="w-full h-full max-w-2xl bg-black rounded-full h-24 w-24"/>
                </div>
            </div>
    )
}

export default TokenInfo
