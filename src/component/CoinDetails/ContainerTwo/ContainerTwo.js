import React from 'react'
import AdicionalInfo from '../Components/AdicionalInfo'
import Contribution from '../Components/Contribution'


const ContainerTwo = () => {
    return (
        <div className="bg-gray-800">
        {/* SubContainer 2.1 */}
        <Contribution />
        {/* SubContainer 2.2 */}
        <AdicionalInfo />
        </div>
    )
}

export default ContainerTwo
