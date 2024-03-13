import {
  faMinus,
  faPlus,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import FoodPlate from "../assets/food/food.png";
import mark from "../assets/food/mark.svg";
import search from "../assets/food/Vectors/SearchOutline.svg";
import leaf from "../assets/food/leaf.png";
import deliveryGuy from "../assets/food/deliveryGuy.png";
import city from "../assets/food/city.png";
import plate from "../assets/food/Vectors/location.svg";
import counter from "../assets/food/Vectors/counter.svg";
import clock from "../assets/food/Vectors/clock.svg";
import tick from "../assets/food/Vectors/tick.svg";
import appleStore from "../assets/food/Vectors/AppStore.svg";
import playStore from "../assets/food/Vectors/Google.svg";
import download from "../assets/food/download.jpg";
import TitleVector from "../assets/food/Vectors/titleVector.svg";

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="hero">
        {isMenuOpen && (
          <div className="absolute inset-0 bg-slate-900/30 z-20"></div>
        )}

        <header className="relative bg-white z-50 px-4 md:px-[5%]  py-4 border-b border-primary">
          <div className="absolute sm:hidden left-0 right-0 bottom-0 top-full w-full">
            <ul className={isMenuOpen ? "menu active" : "menu inactive"}>
              <li>
                <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
                  Home
                </a>
              </li>
              <li>
                <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
                  Blog
                </a>
              </li>
              <li>
                <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
                  About Us
                </a>
              </li>
              <li>
                <a className="block py-1 text-primary font-semibold font-Poppins text-lg text-center">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="relative flex justify-between items-center">
            <div
              className="md:hidden menu-icon cursor-pointer w-12 h-12 px-3 transition-colors hover:bg-slate-200 flex flex-col justify-center items-center"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="bars bg-primary"></div>
              <div className="bars bg-primary"></div>
              <div className="bars bg-primary"></div>
            </div>

            <div className="relative">
              <h1 className="text-2xl text-primary ">
                <span className="font-Marienda font-bold">Food</span>
                <span className="font-Poppins font-semibold">Time</span>
              </h1>
              <div className="absolute -right-3 top-0">
                <img src={TitleVector} alt="title-svg" />
              </div>
            </div>

            <div className="flex justify-between gap-[6.12rem]">
              <nav className="hidden md:flex justify-between items-center font-Poppins md:gap-12 lg:gap-16">
                <span>
                  <a
                    href="#"
                    className="text-slate-900 transition-colors font-[500] hover:text-primary"
                  >
                    Home
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="text-slate-900 transition-colors font-[500] hover:text-primary"
                  >
                    Blog
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="text-slate-900 transition-colors font-[500] hover:text-primary"
                  >
                    About Us
                  </a>
                </span>
                <span>
                  <a
                    href="#"
                    className="text-slate-900 transition-colors font-[500] hover:text-primary"
                  >
                    Contact
                  </a>
                </span>
              </nav>

              <div className="flex justify-between gap-6">
                
                  
                
                <div className="bg-primary w-12 h-12 rounded-full flex justify-center items-center cursor-pointer">
                  <FontAwesomeIcon icon={faShoppingCart} color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="main">
          <section className="relative px-4 py-8">
            <div className="hidden xl:block absolute w-72 h-72 rotate-[25deg] -left-16 -top-14  z-0">
              <img src={leaf} alt="leaf" className="p-6 blur-sm" />
            </div>

            <div className=" flex flex-wrap md:justify-between items-center space-y-6 ">
              {/* Main text */}
              <div className="basis-full shrink-0 flex-grow lg:basis-3/5 relative flex flex-col justify-center items-center lg:items-start gap-4 md:gap-7 z-10">
                <h1 className="shrink-0 max-w-2xl text-center sm:text-center lg:text-start text-5xl md:text-6xl font-Marienda text-primary font-bold">
                  Order food online from your favourite local restaurants
                  <span className="text-secondary">.</span>
                </h1>

                <p className=" font-Poppins text-lg md:text-2xl text-paragraph font-semibold">
                  Freshly made food delivered to your door.
                </p>

                <div className="max-w-3xl self-center xl:self-auto w-full flex box-border border border-r-0 rounded-[6rem]">
                  <div className="flex-1 flex gap-2 sm:gap-4 pl-2 py-2  items-center">
                    <div className="bg-secondary p-2 rounded-full hidden sm:block">
                      <img src={mark} alt="mark" className="w-6 h-6" />
                    </div>

                    <input
                      type="text"
                      name="search"
                      className="bg-transparent outline-none border-none font-Poppins pl-4"
                      placeholder="Enter your location"
                    />
                  </div>

                  {/* <button className="border border-primary flex gap-2 justify-center items-center bg-primary rounded-[6rem] px-10"> */}
                  <button className="search__btn bg-primary">
                    <img src={search} alt="search" />
                    <span className="text-white  font-Poppins">Search</span>
                  </button>
                </div>
              </div>

              {/* Food Plate */}
              <div className="basis-full shrink-0 flex-grow lg:basis-2/5 max-w-lg relative mx-auto">
                {/* glassmorphism-effect-card */}
                <div className="glass__btn border">
                  <div className="flex flex-col items-center">
                    <div className="inline-flex items-center gap-2">
                      <span>
                        <img src={tick} alt="tick" />
                      </span>
                      <span className="text-2xl md:text-4xl text-secondary font-bold font-Poppins">
                        200K+
                      </span>
                    </div>
                    <span className="text-paragraph text-center font-Poppins text-base md:text-lg font-semibold ">
                      People delivered
                    </span>
                  </div>
                </div>

                <div className="hidden xl:block absolute w-72 h-72 rotate-[15deg] -right-16 -top-24  z-0">
                  <img
                    src={leaf}
                    alt="leaf"
                    className="p-6 blur-[2.5px]"
                    loading="lazy"
                  />
                </div>
                <img
                  src={FoodPlate}
                  alt="foodPlate"
                  className="w-full h-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          <section className="w-full px-4 flex flex-wrap justify-between items-center my-6 bg-secondary/5">
            <div className="shrink-0 flex-grow space-y-4 basis-full lg:basis-2/5 lg:pr-6">
              <h1 className=" text-5xl lg:text-6xl font-Marienda text-primary">
                Expore your favourite city's food.
              </h1>

              <p className="font-Poppins text-base md:text-lg font-normal text-paragraph ">
                Lorem ipsum dolor sit amet consectetur. Ornare massa nunc nibh
                tristique. Non ligula tristique ut ut libero sit convallis
                maecenas. At egestas auctor porta mattis.
              </p>

              <button className="btn__primary__large bg-primary text-white">
                <span className="font-Poppins">Explore</span>
                <span>&#8594;</span>
              </button>
            </div>

            <div className="relative flex-grow basis-full lg:basis-3/5">
              <img
                src={city}
                alt="city"
                className="w-full h-auto absolute mix-blend-darken z-0"
                loading="lazy"
              />
              <img
                src={deliveryGuy}
                alt="delivery-guy"
                className="relative w-full h-auto"
                loading="lazy"
              />
            </div>
          </section>

          <section className="w-full px-4 my-6 mx-auto">
            <div class="flex flex-wrap">
              <div class="basis-full md:basis-1/3 ">
                <div class=" rounded-lg flex flex-col gap-4 p-4 sm:p-6 md:p-10 xl:p-14 font-Poppins">
                  <div className="w-12 h-12">
                    <img src={plate} alt="plate" className="w-full h-full" />
                  </div>
                  <h1 className="font-bold text-lg">
                    Wide selection of restaurants
                  </h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ornare massa nunc
                    nibh tristique.
                  </span>
                </div>
              </div>
              <div class="basis-full md:basis-1/3 ">
                <div class="flex flex-col gap-4 font-Poppins p-4 sm:p-6 md:p-10 xl:p-14">
                  <div className="w-12 h-12">
                    <img
                      src={counter}
                      alt="counter"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h1 className="font-bold text-lg">
                    Wide selection of restaurants
                  </h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ornare massa nunc
                    nibh tristique.
                  </span>
                </div>
              </div>
              <div class="basis-full md:basis-1/3 ">
                <div class="flex flex-col gap-4 font-Poppins p-4 sm:p-6 md:p-10 xl:p-14">
                  <div className="w-12 h-12">
                    <img
                      src={clock}
                      alt="clock"
                      className="w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <h1 className="font-bold text-lg">
                    Wide selection of restaurants
                  </h1>
                  <span>
                    Lorem ipsum dolor sit amet consectetur. Ornare massa nunc
                    nibh tristique.
                  </span>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full px-4 my-8 font-Poppins">
            <div className="relative aspect-video rounded-3xl lg-image overflow-hidden ">
              <div className="absolute inset-0 flex flex-col justify-end items-center gap-3 pb-6 md:gap-4 md:pb-8">
                <h1 className=" text-center text-2xl md:text-4xl  text-white font-bold">
                  Want to be a part of FoodTime?
                </h1>
                <p className="text-[#ededed] text-center font-semibold leading-8">
                  List your restaurant or shop on foodtime.
                </p>

                <button className="btn__primary__large bg-secondary text-white">
                  <span className="">Get started</span>
                  <span>&#8594;</span>
                </button>
              </div>
            </div>
          </section>

          {/* FAQ section */}
          <section className="w-full px-4 my-8">
            <section className="flex flex-col items-center gap-2 md:gap-4 py-4">
              <span className="font-semibold font-Poppins text-heading-2 text-2xl md:text-4xl">
                Frequently asked questions
              </span>
              <div className="flex justify-between gap-3 flex-wrap ">
                <button className="font-Poppins text-white bg-primary px-8  rounded-[6rem] text-sm md:text-base md:px-primary-btn-large-x py-primary-btn-large-y md:rounded-parimary-lg-btn">
                  General
                </button>
                <button className="border border-primary font-Poppins text-paragraph px-8 rounded-[6rem] text-sm md:text-base md:px-primary-btn-large-x py-primary-btn-large-y md:rounded-parimary-lg-btn">
                  For business
                </button>
              </div>
            </section>

            <section className="w-full my-4">
              <div className="flex flex-wrap justify-between gap-4 mx-auto">
                <div className="flex-1 flex flex-col gap-4">
                  <div
                    className="rounded-md border px-2 py-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex justify-between items-center min-w-max">
                      <span className="md:pl-2 font-Poppins font-semibold">
                        What do I need to apply for the account?
                      </span>

                      <div className="box-border w-6 h-6 rounded-full border text-center">
                        <span className="">
                          <FontAwesomeIcon icon={faPlus} size="sm" />
                        </span>
                      </div>
                    </div>
                  </div>

                  <div
                    className="rounded-md border px-2 py-4 cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex justify-between items-center min-w-max">
                      <span className="md:pl-2 font-Poppins font-semibold">
                        What do I need to apply for the account?
                      </span>

                      <div className="box-border w-6 h-6 rounded-full border text-center">
                        {isOpen ? (
                          <span>
                            <FontAwesomeIcon icon={faMinus} size="sm" />
                          </span>
                        ) : (
                          <span className="">
                            <FontAwesomeIcon icon={faPlus} size="sm" />
                          </span>
                        )}
                      </div>
                    </div>

                    <div
                      className={
                        isOpen
                          ? "max-h-[999px] transition-all"
                          : "max-h-0 overflow-hidden transition-all"
                      }
                    >
                      <span>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here', making it look like readable English.
                      </span>
                    </div>
                  </div>

                  <div className="rounded-md border px-2 py-4 cursor-pointer">
                    <div className="flex justify-between items-center min-w-max">
                      <span className="md:pl-2 font-Poppins font-semibold">
                        What do I need to apply for the account?
                      </span>

                      <div className="box-border w-6 h-6 rounded-full border text-center">
                        <span className="">
                          <FontAwesomeIcon icon={faPlus} size="sm" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex-1 min-w-fit flex flex-col gap-4 ">
                  
                    <div className="flex justify-between items-center min-w-max rounded-md border px-2 py-4 cursor-pointer">
                      <span className="md:pl-2 font-Poppins font-semibold">
                        What do I need to apply for the account?
                      </span>

                      <div className="box-border w-6 h-6 rounded-full border text-center">
                        <span className="">
                          <FontAwesomeIcon icon={faPlus} size="sm" />
                        </span>
                      </div>
                  </div>

                  <div className="rounded-md border px-2 py-4 cursor-pointer">
                    <div className="flex justify-between items-center min-w-max">
                      <span className="md:pl-2 font-Poppins font-semibold">
                        What do I need to apply for the account?
                      </span>

                      <div className="box-border w-6 h-6 rounded-full border text-center">
                        <span className="">
                          <FontAwesomeIcon icon={faPlus} size="sm" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </section>

          {/* downloads */}
          <section className="w-full px-4 my-8">
            <div className=" flex flex-col lg:flex-row  gap-6 justify-between items-center font-Poppins">
              <div className="basis-5/12 flex flex-col gap-4">
                <div className="flex flex-col md:max-w-min gap-2">
                  <h1 className="text-3xl md:text-4xl font-bold text-primary w-max">
                    Put us in your pocket
                  </h1>
                  <p className="text-base md:text-xl font-semibold text-paragraph">
                    Download our app from google play or app store and you don’t
                    have to be worry about your food anymore.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 justify-center">
                  <div>
                    <img src={appleStore} alt="appStore" />
                  </div>
                  <div>
                    <img src={playStore} alt="playStore" />
                  </div>
                </div>
              </div>
              <div className="flex-1 basis-6/12 aspect-[3/2]">
                <img src={download} alt="download" className="w-full h-full" />
              </div>
            </div>
          </section>
        </main>

        {/* footer */}
        <section className="w-full px-4 mt-8 bg-footer text-white">
          <div className="main">
            <div className="flex flex-col lg:flex-row justify-between py-16 gap-8 lg:gap-0">
              <div className="flex flex-col gap-4 max-w-lg ">
                <h1 className="text-4xl">
                  <span className="font-Marienda">Food</span>
                  <span className="font-Poppins">Time</span>
                </h1>
                <p className="text-lg font-Poppins">
                  Lorem ipsum dolor sit amet consectetur. Odio amet natoque
                  tortor convallis. Bibendum sapien suspendisse ipsum urna
                  malesuada elit. Bibendum vitae nibh scelerisque sed aliquam
                  ullamcorper est.
                </p>
              </div>

              <div className="flex-1 flex justify-between lg:justify-around">
                <div className="flex flex-col gap-4 font-Poppins">
                  <h2 className="">Quick links</h2>
                  <div className="flex flex-col gap-2">
                    <span>Browse FoodTime</span>
                    <span>Browse FoodTime</span>
                    <span>Registration</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 font-Poppins">
                  <h2 className="">About</h2>

                  <div className="flex flex-col gap-2">
                    <span>About Us</span>
                    <span>Mission</span>
                    <span>Contact</span>
                  </div>
                </div>

                <div className="flex flex-col gap-4 font-Poppins">
                  <h2>Social</h2>
                  <div className="flex flex-col gap-2">
                    <span>Facebook</span>
                    <span>Twitter</span>
                    <span>Instagram</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center pb-8">
              <span>©️ Created with ❤️ by Manoj</span>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandingPage;
