import React from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import PlayButton from "../components/PlayButton";
import SecondPlayButton from "../components/SecondPlayButton";
import SubmitButton from "../components/SubmitButton";
import Footer from "../components/Footer";
import Cards from "../components/Cards";
import { cardList } from "../components/Cards";
import RecentCard from "../components/RecentCard.jsx";
import { recentCard } from "../components/RecentCard.jsx";

export default function Home() {
  return (
    <>
      <Header />
      <section className="hero__section text-left flex items-center bg-heroBackground w-full">
        <div className="container bg-gradient-to-r from-white to-transparent md:h-[580px] flex flex-col justify-center">
          <div className="md:w-[540px]">
            <h1 className="text__primary text-balance">
              Let’s talk{" "}
              <span className="text__secondary">about your next trip!</span>{" "}
            </h1>
            <p className="mt-3 text-[22px]">
              Share your favorite travel destination and we will feature it in
              our next blog!
            </p>
            <div className="mt-8 flex flex-row gap-6">
              <Button aria-label="Button for access to another page" />
              <div className="flex flex-row gap-2 items-center text-center group">
                <PlayButton
                  aria-label="Button for play video from the source"
                  className="group-hover:scale-105 hover:bg-black duration-200 cursor-pointer"
                ></PlayButton>
                <p className="group-hover:scale-105 duration-200 cursor-pointer">
                  Watch highlights
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container flex flex-row md:py-[107px]">
        <figure className="w-1/2">
          <img src="./public/img/img1.png" alt="M an in himalaya" />
        </figure>
        <div className="flex flex-col w-[580px] md:p-[30px] gap-6">
          <div className="gap-2">
            <p className="text__primary font-bold">FEATURED OUR DESTINATION</p>
            <h2 className="whitepace-nowrap">Our swiss adventure blog</h2>
            <p>
              Visiting the swiss alps? Want to know the requirements on
              travelling to Switzerland during the pandemic? Our blog might
              help!{" "}
            </p>
          </div>

          <div className="flex flex-row items-center gap-3">
            <SecondPlayButton aria-label="Button for play video from the source"></SecondPlayButton>
            <p className="text__primary hover:scale-105 duration-200 cursor-pointer">
              Watch Now
            </p>
          </div>
        </div>
      </section>

      <section className="container md:mt-6 md:mb-[70px]">
        <div className="text-center">
          <p className="text__primary font-bold">JOIN OUR ADVENTURE</p>
          <h2>Discover the world with us</h2>
        </div>

        <ul className="flex flex-row">
          {cardList.map((card, id) => (
            <Cards key={id} path={card.path} name={card.name} alt={card.alt} />
          ))}
        </ul>
      </section>

      <section className="container bg-formBackground bg-cover">
        <div className="md:py-16">
          <div className="text-center">
            <p className="text__primary font-bold">LET'S BUILD A COMMUNITY</p>
            <h2>Join Our Destination</h2>
          </div>

          <form
            className="bg-white rounded-xl shadow-xl md:p-[30px] md:w[617px] flex flex-col md:gap-[10px] mt-8"
            action=""
          >
            <h3>Share your travels</h3>
            <p className="text-[#576074]">
              Suggest a new travel destination that you want to see and we will
              feature it in our blog.
            </p>
            <input
              className="w-full border p-3"
              type="text"
              placeholder="Destination name"
            />
            <select
              className="w-full border p-3"
              name="country-destination"
              id="country-destination"
              placeholder="Country of Destination"
            >
              <option value="iceland">Iceland</option>
              <option value="italy">Italy</option>
              <option value="dubai">Dubai</option>
              <option value="patagonia">Patagonia</option>
            </select>
            <input
              className="w-full border p-3"
              type="text"
              placeholder="Your name"
            />
            <select
              className="w-full border p-3"
              name="shooting-category"
              id="shooting-category"
              placeholder="Shooting category"
            >
              <option value="iceland">Iceland</option>
              <option value="italy">Italy</option>
              <option value="dubai">Dubai</option>
              <option value="patagonia">Patagonia</option>
            </select>
            <input
              className="w-full border p-3 w-557px scroll-auto"
              type="text"
              placeholder="Describe what kind of photo you want to focus on"
            />
            <SubmitButton></SubmitButton>
          </form>
        </div>
      </section>
      <section className="container md:py-[83px]">
        <div className="text-center">
          <p className="text__primary font-bold">CATCH UP TO OUR POSTS</p>
          <h2>Recent story entries</h2>
        </div>
        <div className="flex flex-row w-full mt-8">
          <div className="w-1/2 pr-5">
            <div className="bg-[#F9F9F9] flex flex-col justify-between">
              <figure>
                <img src="../public/img/zermatt-island.png" alt="" />
              </figure>
              <div className="flex flex-row p-4 items-center gap-7">
                <div>
                  <h3>Zermatt, Switzerland</h3>
                  <p className="leading-normal mt-2 text-[#576074] ">
                    Marvel on the beauty of the iconic Matterhorn. Find the best
                    places to stay that has the best views of this peak...
                  </p>
                </div>
                <SecondPlayButton></SecondPlayButton>
              </div>
            </div>
          </div>
          <div className="w-1/2">
            <div className="flex flex-col gap-4 h-1/3">
              {recentCard.map((recent, id) => (
                <RecentCard
                  key={id}
                  title={recent.title}
                  description={recent.description}
                  imagePath={recent.imagePath}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}
