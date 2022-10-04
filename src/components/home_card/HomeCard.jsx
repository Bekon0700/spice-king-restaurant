import React from "react";

const HomeCard = () => {
    const foodData = [
        {
            id: 1,
            title: "Famous Fast Food",
            para: "More than 20 different recipes to make burger at home. Make your home a wonderful Restautant.",
            img: "./img/burger.jpg",
        },
        {
            id: 2,
            title: "Ultimate Chiken",
            para: "Best way to cook chiken at home without the fear of losing any taste.",
            img: "./img/chiken.jpg",
        },
        {
            id: 3,
            title: "Traditional Food",
            para: "You can make many traditional food with authentic ingredients and full of secrect recipes.",
            img: "./img/traditional-food.png",
        },
    ];
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4">
            {foodData.map((el) => {
                return (
                    <div key={el.id} className="rounded-lg bg-white font-crimson-text text-3xl font-bold text-amber-900 flex flex-col gap-3">
                        <img src={el.img} alt="" className=" rounded-t-lg lg:h-96 object-contain lg:object-fill" />
                        <div className="p-5 flex flex-col gap-4 justify-between">
                            <p className="text-center">{el.title}</p>
                            <p className="text-xl font-semibold text-gray-800">
                                {el.para}
                            </p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default HomeCard;
