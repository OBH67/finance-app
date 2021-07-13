import React from 'react'
import {datos} from '../data/constant';
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <div class="bg-gradient-to-br from-indigo-900 to-green-900 min-h-screen overflow-auto">
            <div class="container max-w-5xl mx-auto px-4">
            <div class="w-4/5">
                <h1 class="mt-32 text-white text-6xl font-bold">MY DEX'S</h1>
            </div>
            <div class="text-white relative">
                <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 sm:gap-5 uppercase">

                { datos.map((info) =>
                <Link to={{ pathname: `${info.link}` }} target="_blank">
                <div class="group flex items-center bg-indigo-900 bg-opacity-40 shadow-xl gap-5 px-6 py-5 rounded-lg ring-2 ring-offset-2 ring-offset-blue-800 ring-cyan-700 mt-5 cursor-pointer hover:bg-blue-900 hover:bg-opacity-100 transition">
                    <img class="w-11" src={`${info.image}`} alt="" />
                    <div>
                    <span>{info.name}</span>
                    <span class="text-xs text-blue-300 block">{info.info}</span>
                    </div>
                    <div>
                    <i class="fa fa-chevron-right opacity-0 group-hover:opacity-100 transform -translate-x-1 group-hover:translate-x-0 block transition animate-pulse"></i>
                    </div>
                </div>
                </Link>
                )}

                </div>
            </div>
            </div>
        </div>
    )
}

export default Home
