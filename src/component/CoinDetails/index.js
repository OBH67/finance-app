import React from 'react'
import {CoinData} from '../../data/constant';
import Navbar from './Components/Navbar';
import ContainerOne from './ContainerOne/ContainerOne';
import ContainerTwo from './ContainerTwo/ContainerTwo';


const CoinInformation = () => {
    const Identificador = localStorage.getItem('idKey');
    const identificador = parseInt(Identificador);
    const ID = CoinData.find(data => data.id === identificador);

    return (
    <div className="bg-gray-900">
        <Navbar />
        {/* Container 1 */}
        <ContainerOne ID={ID} />
        {/* Container 2 */}
        <ContainerTwo />
    </div>
    )
}

export default CoinInformation
