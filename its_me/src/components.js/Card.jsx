import React from 'react'

const Card = ({projectName}) => {
  return (
    <div className='m-10 w-[100%] h-[100%] shadow-[0_35px_100px_-15px_rgba(255,0,127,0.5)]  rounded-3xl'>
        <div className='text-3xl text-pink-600 p-10 m-10'>
            {projectName}
        </div>
        <div className='text-xl p-10 m-10'>Click me to GoLive</div>
    </div>
  )
}

export default Card