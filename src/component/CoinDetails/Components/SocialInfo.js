import React from 'react'
import {FaTelegram, FaTwitter, FaRedditAlien, FaGlobeAmericas} from 'react-icons/fa'

const SocialInfo = () => {
    return (
        <div className="max-w-md mx-auto my-2">
        <ul className="grid grid-flow-col grid-cols-4 grid-rows-1">
          <li className="flex items-center">
            <div className="flex justify-center items-center content-center bg-gradient-to-br from-blue-300 to-blue-600 shadow-md hover:shadow-lg h-20 w-20 rounded-full fill-current text-white">
                <FaTelegram className='h-10 w-10' />
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex justify-center items-center content-center bg-gradient-to-br from-blue-300 to-blue-600 shadow-md hover:shadow-lg h-20 w-20 rounded-full fill-current text-white">
                <FaTwitter className='h-10 w-10' />
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex justify-center items-center content-center bg-gradient-to-br from-blue-300 to-blue-600 shadow-md hover:shadow-lg h-20 w-20 rounded-full fill-current text-white">
                <FaRedditAlien className='h-10 w-10' />
            </div>
          </li>
          <li className="flex items-center">
            <div className="flex justify-center items-center content-center bg-gradient-to-br from-blue-300 to-blue-600 shadow-md hover:shadow-lg h-20 w-20 rounded-full fill-current text-white">
                <FaGlobeAmericas className='h-10 w-10' />
            </div>
          </li>
        </ul>
    </div>
    )
}

export default SocialInfo
