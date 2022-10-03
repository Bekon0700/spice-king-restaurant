import React from 'react'

const Rewards = () => {
  return (
    <div>
      <div className="mt-4 w-full h-96 lg:h-[700px] bg-no-repeat bg-cover bg-center lg:bg-top"
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.9)), url('./img/reward.jpg')" }}
      >
        <div className="w-11/12 mx-auto h-full flex flex-col gap-4 justify-center items-center text-lg md:text-3xl lg:text-4xl text-white font-bold uppercase text-center font-crimson-text">
          <p className=''>Achieve your </p>
          <span className='text-green-400 text-xl lg:text-5xl pr-2'>certificate of appreciation</span>
          <p className="text-xl lg:text-4xl text-gray-300 pt-10">Learn from us more in depth</p>
        </div>
      </div>
    </div>
  )
}

export default Rewards