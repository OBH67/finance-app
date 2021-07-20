import React from 'react'
import {CoinData} from '../../../data/constant';

const Cards = () => {
    return (
        <div className="flex flex-col flex-grow bg-gray-800 rounded mt-4">
        <div className="container mx-auto">
              <div className="flex flex-wrap -mx-4">
                {
                      CoinData.map((info) =>
                <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/3 p-4" key={info.id}>
                    <div className="c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden">
                    <div className="relative pb-48 overflow-hidden">
                    <img className="absolute inset-0 h-full w-full object-cover" src={info.tokenImage} alt="" />
                    </div>
                    <div className="p-4">
                    <span className={`inline-block px-2 py-1 leading-none ${info.colorSale} text-black rounded-full font-semibold uppercase tracking-wide text-xs`}>{info.presale}</span>
                    <h2 className="mt-2 mb-2  font-bold">{info.tokenName}</h2>
                    <p className="text-sm">{info.tokenSubname}</p>
                    <div className="mt-3 flex items-center">
                        <span className="text-sm font-semibold">Raised: </span>&nbsp;<span className="font-bold text-xl">{info.raised}</span>&nbsp;<span className="text-sm font-semibold">BNB</span>
                    </div>
                    </div>
                    <div className="p-4 flex justify-evenly justify-center border-t border-b text-xs text-gray-700">
                    <span className="flex items-center mb-1">
                        <i className="fa fa-bar-chart fa-fw mr-2 text-gray-900"></i> SoftCap: {info.softCap}
                    </span>
                    <span className="flex items-center text-black">
                        <i className="fa-fw text-black mr-2"></i> Min: {info.minBNB}
                        <i className="fa-fw text-gray-900 mr-2"></i> Max: {info.maxBNB}
                    </span>
                    <span className="flex items-center">
                        <i className="fa fa-handshake-o aria-hidden='true' fa-fw text-gray-900 mr-2"></i> {info.contract}
                    </span>
                    </div>
                    <div className="p-4 flex justify-center text-sm text-gray-600"><span className="ml-2">{info.salesTime}</span></div>
                    <div className="p-4 flex justify-center text-sm text-gray-600">
                      <button
                      onClick={() => {localStorage.setItem('idKey', `${info.id}`); window.location.replace("/Details");}}
                      className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                        DETAILS
                      </button>
                      </div>
                    </div>
                </div>
                            )
                          }
              </div>
            </div>
        </div>
    )
}

export default Cards
