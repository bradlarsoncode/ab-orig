import React from 'react';

export default function Listing (){
    return (
      <div className="bg-white">
        <div className="container px-6 py-10 mx-auto md:py-16">
          <div className="flex pt-12 flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div
              className="w-full md:w-1/2 bg-gray-100"
              style={{ height: "32rem", padding: "1rem" }}
            >
              <div className="h-32 max-w-lg">
                <h1
                  className="text-2xl font-sans tracking-widest text-gray-800 md:text-4xl opacity-70"
                  style={{ lineHeight: "5.5rem", paddingBottom: "1rem"}}
                >
                  Visit Gritty Philadelphia and Stay in the Charming
                  Neighborhood of W. Mt. Airy
                </h1>
                {/* <p class="mt-2 text-gray-600">
                  We work with the best remunated car dealers in Germany to find
                  your new car.
                </p>
                <div class="grid gap-6 mt-8 sm:grid-cols-2">
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Premium selection</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Insurance</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>All legal documents</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>From German car dealers</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Payment Security</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Fast shipping (+ Express)</span>
                  </div> */}
                {/* </div> */}
              </div>
            </div>
            <div class="flex items-center justify-center w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1493238792000-8113da705763?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt="car photo"
                class="w-full h-full max-w-2xl rounded"
              />
            </div>
          </div>
        </div>
        {/* <div class="container px-6 py-10 mx-auto">
          <h3 class="text-gray-800">1st Chooes your delivery option</h3>
          <div class="flex items-center mt-5 space-x-6">
            <button class="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-blue-600 rounded-full hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Standard
            </button>
            <button class="flex items-center px-6 py-2 font-medium tracking-wide text-white capitalize bg-gray-600 rounded-full hover:bg-gray-500 focus:outline-none focus:bg-gray-500">
              Express delivery
            </button>
          </div>
          <div class="grid gap-8 mt-6 sm:grid-cols-2 md:grid-cols-4">
            <select class="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>Eqypt</option>
              <option>Germany</option>
              <option>US</option>
            </select>
            <select class="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>I20</option>
              <option>GXR</option>
              <option>BMW</option>
            </select>
            <select class="border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option>GTX2020</option>
              <option>GRE2019</option>
            </select>
            <button class="px-4 py-2 font-medium tracking-wide text-white capitalize bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Search
            </button>
          </div>
        </div>
        <div class="container px-6 py-10 mx-auto md:py-16">
          <div class="flex flex-col space-y-6 md:flex-row md:items-center md:space-x-6">
            <div class="flex items-center justify-center w-full md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1050&amp;q=80"
                alt="car photo"
                class="w-full h-full max-w-2xl rounded"
              />
            </div>
            <div class="w-full md:w-1/2">
              <div class="max-w-md mx-auto">
                <h1 class="text-2xl font-medium tracking-wide text-gray-800 md:text-4xl">
                  Why us?
                </h1>
                <p class="mt-5 leading-7 text-gray-600">
                  With us you will quickly get the car you want. With our
                  partner network of all known premium car manufacturers, it is
                  possible for us to respond to your special requests. <br />
                  Our logistics partners enable a fast delivery. We also offer
                  the option that the car is delivered to you by air.
                </p>
                <div class="grid gap-6 mt-8 sm:grid-cols-2">
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Fast Shipping</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Secure process</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Exclusive selection</span>
                  </div>
                  <div class="flex items-center space-x-6 text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      class="w-5 h-5"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span>Premium service</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="max-w-3xl px-6 py-10 mx-auto">
          <h1 class="text-2xl font-medium tracking-wide text-center text-gray-800 md:text-4xl">
            Contact with us
          </h1>
          <p class="mt-2 text-center text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div class="flex flex-col mt-6 space-y-5 sm:flex-row sm:items-center sm:space-y-0 sm:space-x-5">
            <input
              type="text"
              placeholder="Name"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
            <input
              type="email"
              placeholder="E-Mail"
              class="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            />
          </div>
          <textarea
            name="message"
            id="message"
            placeholder="Message"
            class="w-full h-56 mt-5 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            spellcheck="false"
          ></textarea>
          <div class="flex items-center justify-center mt-6">
            <button class="px-5 py-3 font-medium tracking-wide text-center text-white capitalize bg-blue-600 rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
              Get in touch
            </button>
          </div>
        </div>
        <footer class="bg-gray-100">
          <div class="container flex flex-col items-center justify-between px-6 py-3 mx-auto sm:flex-row">
            <a
              href="#"
              class="text-xl text-gray-800 font-semiblod md:text-3xl hover:text-gray-700"
            >
              Brand
            </a>
            <p class="font-medium text-gray-800">example@example.example</p>
          </div>
        </footer> */}
      </div>
    );
}