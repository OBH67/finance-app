import React from 'react'
import Header from '../Components/Header';
import Cards from '../Components/Cards';
import Modal from '../Components/Modal';
import Footbar from '../Components/Footbar';

const ContainerTwo = () => {
    return (
        <main className="main flex flex-col flex-grow -ml-64 md:ml-0 transition-all duration-150 ease-in">
           {/* Container 1 */}
           <Header />
           {/* Container 2 */}
           <div className="main-content flex flex-col flex-grow p-4 bg-gray-800">
             <Modal />
             <Cards />
           </div>
           <Footbar />
         </main>
    )
}

export default ContainerTwo
