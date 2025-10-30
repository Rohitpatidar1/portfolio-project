// src/Components/Shayari.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import feather from "feather-icons";

// Import Swiper's CSS files
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// --- Quotes Data ---
// You can add your favorite quotes here
const quotes = [
  {
    text: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
];

// Feather Icon Component
const RenderFeatherIcon = ({ name, className }) => {
  React.useEffect(() => {
    feather.replace();
  }, []);
  return <i data-feather={name} className={className} />;
};

export default function Shayari() {
  return (
    <section id="shayari" className="py-24 bg-gray-50 dark:bg-gray-900">
           {" "}
      <div className="max-w-4xl mx-auto px-4 text-center">
                {/* --- Section Title --- */}       {" "}
        <h3 className="text-3xl font-bold dark:text-white mb-4">
                    <span className="text-blue-500">04.</span> Words I Live By  
               {" "}
        </h3>
               {" "}
        <p className="text-lg text-gray-500 dark:text-gray-400 mb-12">
                    A few lines that always inspire me.        {" "}
        </p>
                {/* --- Quotes Carousel --- */}       {" "}
        <div className="relative">
                   {" "}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            pagination={{ clickable: true }}
            className="pb-16" // Space for pagination dots
          >
                       {" "}
            {quotes.map((quote, index) => (
              <SwiperSlide key={index}>
                               {" "}
                <div className="p-8">
                                   {" "}
                  <RenderFeatherIcon
                    name="pen-tool"
                    className="w-12 h-12 mx-auto text-blue-500 mb-6"
                  />
                                   {" "}
                  <p className="text-2xl italic text-gray-800 dark:text-gray-200 leading-relaxed">
                                        "{quote.text}"                  {" "}
                  </p>
                                   {" "}
                  <p className="mt-8 text-right font-semibold text-gray-600 dark:text-gray-400">
                                        - {quote.author}                 {" "}
                  </p>
                                 {" "}
                </div>
                             {" "}
              </SwiperSlide>
            ))}
                     {" "}
          </Swiper>
                    {/* --- Custom Navigation Buttons --- */}         {" "}
          <div className="swiper-button-prev-custom absolute top-1/2 left-0 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md cursor-pointer z-10">
                       {" "}
            <RenderFeatherIcon
              name="arrow-left"
              className="text-gray-600 dark:text-gray-200"
            />
                     {" "}
          </div>
                   {" "}
          <div className="swiper-button-next-custom absolute top-1/2 right-0 transform -translate-y-1/2 p-2 rounded-full bg-white dark:bg-gray-800 shadow-md cursor-pointer z-10">
                       {" "}
            <RenderFeatherIcon
              name="arrow-right"
              className="text-gray-600 dark:text-gray-200"
            />
                     {" "}
          </div>
                 {" "}
        </div>
             {" "}
      </div>
         {" "}
    </section>
  );
}
