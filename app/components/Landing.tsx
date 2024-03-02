"use client";
import { createContext, useState, useEffect } from "react";
import Image from "next/image";

function Landing() {
  const [searchTerm, setSearchTerm] = useState("");

  const foodData = [
    { id: 1, name: "Meat", image: "/images/meat.jpg" },
    { id: 2, name: "Rice", image: "/images/rice.jpg" },
    { id: 3, name: "Drink", image: "/images/drink.jpg" },
  ];

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredFood = foodData.filter((food) =>
    food.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen w-full bg-gray-300 grid grid-rows-[3fr,minmax(400px,auto),1fr] grid-cols-[auto]">
      <nav className="bg-blue-500 p-4 text-white flex justify-center items-center gap-6 w-full">
        <div className="relative h-[6rem] w-[6rem]">
          <Image
            src="/images/logo.jpg"
            alt=""
            fill
            sizes="(min-width: 400px) 100vw"
          />
        </div>
        <div className=" flex flex-col justify-between items-center gap-4">
          <h1 className="text-2xl font-bold">Gospelkick</h1>
          <div className="flex flex-row justify-between items-center text-gray-600 w-full gap-1">
            <input
              type="search"
              placeholder="Search by food name"
              value={searchTerm}
              onChange={handleSearch}
              className="border-2 border-gray-300 bg-white h-10 px-5 rounded-[0.5rem] text-sm focus:outline-none"
            />
            <button
              type="submit"
              className="h-10 w-10 rounded-[0.2rem] bg-blue-800 flex items-center justify-center text-white"
            >
              Go!
            </button>
          </div>
        </div>
      </nav>

      <section className="flex flex-wrap justify-center">
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {searchTerm === ""
            ? // Render all food items on page load
              foodData.map((food) => (
                <article
                  key={food.id}
                  className=" w-[12rem] h-[16rem] rounded overflow-hidden shadow-lg mx-2 my-4"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    style={{ width: "100%", height: "80%" }}
                  />
                  <p className="font-bold">{food.name}</p>
                </article>
              ))
            : // Render filtered food items based on the search term
              filteredFood.map((food) => (
                <article
                  key={food.id}
                  className=" w-[12rem] h-[16rem] rounded overflow-hidden shadow-lg mx-2 my-4"
                >
                  <img
                    src={food.image}
                    alt={food.name}
                    style={{ width: "100%", height: "80%" }}
                  />
                  <p className="font-bold">{food.name}</p>
                </article>
              ))}
        </div>
      </section>

      <footer className="p-2 flex flex-row justify-center items-center gap-8 text-sm border-t-2 border-traeGreen4 border-solid">
        <a
          href="https://github.com/traez/gospelkick-web-developer-app"
          target="_blank"
          className=" hover:underline hover:text-green-600 font-bold text-blue-800"
        >
          Gospelkick Web Developer App
        </a>
        <b>©2024 Trae Zeeofor</b>
      </footer>
    </main>
  );
}

export default Landing;
