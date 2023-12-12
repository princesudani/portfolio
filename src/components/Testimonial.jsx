import React from "react";

const Testimonial = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
              Project
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="image/currency.png"
                  alt="Currency Image"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Currency Converter
                  </h1>
                  <p className="leading-relaxed mb-3">
                    React project: Currency converter for seamless global
                    financial transactions.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://currency-converter-princesudani.vercel.app/" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-48 md:h-36 w-full object-cover object-center"
                  src="image/news.png"
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    Latest NEWS
                  </h1>
                  <p className="leading-relaxed mb-3">
                    React project: Stay informed with a sleek Latest News App.
                  </p>
                  <div className="flex items-center flex-wrap ">
                    <a href="https://news-eosin-omega.vercel.app/" target="_blank" className="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
