import React from 'react'
import ContainerTwo from './ContainerTwo/ContainerTwo'
import ContainerOne from './ContainerOne/ContainerOne'

const HomeSection = () => {
    return (
        <div className="flex flex-row min-h-screen bg-gray-100 text-gray-800">
        <ContainerOne />
        <ContainerTwo />
      </div>
    )
}

export default HomeSection
