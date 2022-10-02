import React from "react";

import HomeCard from "../home_card/HomeCard";


const Home = () => {
  return (
    <div>
      <div className="mt-4 w-full h-[700px] bg-no-repeat bg-cover bg-center "
        style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.7)), url('./img/veg.jpg')" }}
      >
        <div className="w-3/4 mx-auto h-full flex flex-col gap-4 justify-center items-center text-2xl md:text-3xl lg:text-5xl text-white font-bold uppercase text-center">
          <p>Prepare delicious food with us</p>
          <p className="text-xl lg:text-2xl text-gray-300">we will guide, you will try</p>
        </div>
      </div>

      <div className="py-20  font-crimson-text text-center text-2xl font-semibold text-red-900 border-b-2 border-amber-900">
        <p>Dont be afraid to prepare new dishes.</p>
        <p className="uppercase font-bold text-green-900 text-4xl pt-2">be your own chef, today</p>
      </div>

      <div className="w-11/12 mx-auto py-6">
        <p className="font-crimson-text text-3xl lg:text-4xl font-bold text-center py-6">Treat yourself in the best possible way</p>
        <HomeCard />
      </div>

      <div className="bg-white py-12">
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
  );
};

export default Home;
