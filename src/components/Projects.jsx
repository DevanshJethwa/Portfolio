import Modal from "./Modal";

function Projects() {
  return (
    <>
      <div className=" bg-[#051923] text-white md:px-12 px-4 md:py-12 py-8" id="project">
        <h1 className="text-center md:text-4xl text-3xl underline">Projects </h1>

        {/*  1 project */}

        <div className="flex md:flex-row flex-col gap-10 my-8 items-center">
          <div data-aos="fade-up">
            <img
              src="MovieFinder_img.png"
              className=" hover:scale-105 transition-all duration-200  mb-5"
              alt=""
            />
          </div>
          <div data-aos="fade-down" className="">
            <h1 className="text-center text-2xl mb-5">Movie Finder </h1>
            <h1 className="text-xl text-justify">
              The Movie Finder App serves as a comprehensive platform for users
              to discover information about movies, including details such as
              plot summaries, cast, ratings, release dates, and more. It
              leverages modern web technologies to deliver an intuitive and
              interactive interface for movie enthusiasts and casual users alike
            </h1>
            <div className=" flex justify-center mt-6 ">
              <a href="https://devanshjethwa.github.io/MovieFinder/">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1   me-3 ">
                  View
                </button>
              </a>
              <a href="https://github.com/DevanshJethwa/MovieFinder">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1  ">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </div>

        {/*  2 project */}
        <div data-aos="fade-up" className="block md:hidden">
          <img
            src="WeatherApp_img.png"
            className=" hover:scale-105 transition-all duration-200  mb-5"
            alt=""
          />
        </div>

        <div className="flex md:flex-row flex-col gap-10 my-8 items-center">
          <div data-aos="fade-down" className="">
            <h1 className="text-center text-2xl mb-5">WeatherApp</h1>
            <h1 className="text-xl text-justify">
              The Weather App is developed to offer users a straightforward and
              informative interface for accessing accurate weather forecasts
              based on their location or specified locations. Utilizing modern
              web technologies, the app delivers a seamless user experience and
              provides valuable meteorological data from trusted sources
            </h1>

            <div className=" flex justify-center mt-6 ">
              <a href="https://devanshjethwa.github.io/WeatherApp/">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1   me-3 ">
                  View
                </button>
              </a>
              <a href="https://github.com/DevanshJethwa/WeatherApp">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1  ">
                  Source Code
                </button>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" className="md:block hidden">
            <img
              src="WeatherApp_img.png"
              className=" hover:scale-105 transition-all duration-200  mb-5"
              alt=""
            />
          </div>
        </div>

        {/*  3 project */}
        <div className="flex md:flex-row flex-col gap-10 my-8 items-center">
          <div data-aos="fade-up">
            <img
              src="NewsApp_img.png"
              className=" hover:scale-105 transition-all duration-200  mb-5"
              alt=""
            />
          </div>
          <div data-aos="fade-down" className="">
            <h1 className="text-xl text-justify">
              <h1 className="text-center text-2xl mb-5">NewsApp</h1>
              The primary objective of the Newsapp is to offer users a
              convenient platform for accessing diverse and up-to-date news
              content from various reliable sources. The app aims to deliver an
              intuitive and engaging interface, catering to the preferences and
              interests of a wide range of userslam.
            </h1>
            <div className=" flex justify-center mt-6 ">
              {/* <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1   me-3 ">View</button> */}
              <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1  ">
                Source Code
              </button>
            </div>
          </div>
        </div>

        {/*  4 project */}
        <div data-aos="fade-up" className="block md:hidden">
          <img
            src="TextUtils_img.png"
            className=" hover:scale-105 transition-all duration-200  mb-5"
            alt=""
          />
        </div>

        <div className="flex md:flex-row flex-col gap-10 my-8 items-center">
          <div data-aos="fade-down">
            <h1 className="text-xl text-justify">
              <h1 className="text-center text-2xl mb-5">TextUtils</h1>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam
              reiciendis nostrum doloribus animi, sunt dolorem nam qui similique
              architecto. Nam aperiam illum architecto voluptates. Tempore
              quidem quasi non praesentium voluptatum ducimus assumenda enim
              quae. Quas possimus qui eius asperiores ullam.
            </h1>
            <div className=" flex justify-center mt-6 ">
              <a href="https://devanshjethwa.github.io/TextUtils/">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1   me-3 ">
                  View
                </button>
              </a>
              <a href="https://github.com/DevanshJethwa/TextUtils">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1  ">
                  Source Code
                </button>
              </a>
            </div>
          </div>

          <div data-aos="fade-up" className="md:block hidden">
            <img
              src="TextUtils_img.png"
              className=" hover:scale-105 transition-all duration-200  mb-5"
              alt=""
            />
          </div>
        </div>

        {/*  5 project */}
        <div className="flex md:flex-row flex-col gap-10 my-8 items-center">
          <div data-aos="fade-up">
            <img
              src="QuoteGen_img.png"
              className=" hover:scale-105 transition-all duration-200  mb-5"
              alt=""
            />
          </div>
          <div data-aos="fade-down" className="">
            <h1 className="text-xl text-justify">
              <h1 className="text-center text-2xl mb-5">Quote Generator</h1>
              The Movie Finder App serves as a comprehensive platform for users
              to discover information about movies, including details such as
              plot summaries, cast, ratings, release dates, and more. It
              leverages modern web technologies to deliver an intuitive and
              interactive interface for movie enthusiasts and casual users alike
            </h1>
            <div className=" flex justify-center mt-6 ">
              <a href="https://devanshjethwa.github.io/QuoteGenerator/">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1   me-3 ">
                  View
                </button>
              </a>
              <a href="https://github.com/DevanshJethwa/QuoteGenerator">
                <button className=" bg-[#051923] text-sky-100 border border-sky-100 hover:bg-sky-100 hover:text-[#051923] transition-colors duration-300  px-5 rounded py-1  ">
                  Source Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <Modal/> */}
    </>
  );
}

export default Projects;
