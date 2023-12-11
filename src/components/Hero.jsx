import React from "react";

const Hero = () => {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className=" mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
              Hello, I'm Prince Sudani  
              <br className="hidden lg:inline-block"/>Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
            Knack of building applications with Front and Back end operations.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              <a href="https://www.linkedin.com/in/prince-sudani-b411842a2/" target="_blank">HIRE ME</a>
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              <a href="image/princesudani.pdf" download target="_blank">GET RESUME</a>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://img.freepik.com/premium-photo/silhouette-man-looking-sunset_781078-81.jpg?w=900"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
