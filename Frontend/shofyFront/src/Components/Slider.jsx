import React from 'react'
import img1 from '../images/slider-img-1.png'
import img2 from '../images/slider-img-2.png'
import img3 from '../images/slider-img-3.png'

const Slider = () => {
  return (
    <>
        
        <div className="w-[85%] mx-auto mt-10 mb-6 ">
      <div id="default-carousel" className="relative -z-20" data-carousel="slide">
        {/* Carousel wrapper */}
        <div className="overflow-hidden relative h-[40vh] rounded-lg sm:h-[60vh] xl:h-[80vh] 2xl:h-[80vh]">
          {/* Item 1 */}
          <div className="hidden duration-700 ease-in-out bg-[rgb(17,80,97)]" data-carousel-item>
            
            <img
              src={img1}
              className="block absolute top-1/2 left-1/2 w-[20%] -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* Item 2 */}
          <div className="hidden duration-700 ease-in-out bg-[rgb(227,237,246)]" data-carousel-item>
            <img
              src={img2}
              className="block absolute top-1/2 left-1/2 w-[20%] -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
          {/* Item 3 */}
          <div className="hidden duration-700 ease-in-out  bg-[rgb(17,80,97)]" data-carousel-item>
            <img
              src={img3}
              className="block absolute top-1/2 left-1/2 w-[20%] -translate-x-1/2 -translate-y-1/2"
              alt="..."
            />
          </div>
        </div>
        {/* Slider indicators */}
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            className="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="flex absolute  top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-black dark:bg-gray-800/30 group-hover:bg-black dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10  bg-black dark:bg-gray-800/30 group-hover:black dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button>
      </div>
    </div>
    
    </>
  )
}

export default Slider



