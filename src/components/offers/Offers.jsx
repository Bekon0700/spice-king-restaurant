import React from 'react'

const Offers = () => {
  return (
    <div>
      <div className="bg-white py-24">
        <div className="w-11/12 lg:w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3">
          <div className="font-crimson-text text-2xl font-bold text-green-600 text-center flex flex-col justify-center gap-3">
            <p className="text-3xl text-gray-800">Join in our cooking classes</p>
            <p>We offer both online and offline cooking classes for prospective learners.</p>
          </div>
          <div className="">
            <img src="./img/class.jpg" alt="" className="w-full h-96 rounded-md hover:ring-2" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers