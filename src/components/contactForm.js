import emailjs from "emailjs-com";
import React, {useState} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Success from "./Success"
import "./stylesheet.scss"

export default function ContactUs({startDate, endDate, maxDays, disabledDates}) {
    let dateFormat = require('dateformat')
    let start = dateFormat(startDate, "dddd, mmmm dS, yyyy")
    let end = dateFormat(endDate, "dddd, mmmm dS, yyyy");
    const [guests, setGuests] = useState(1);
    const [subject, setSubject] = useState("You Have a Guest Coming!")
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [message, setMessage] = useState("");

    function guestsIncrease(){
      if(guests < 4){
        setGuests(guests+1)
      }
    }

    function guestsDecrease(){
        if (guests > 1) {
          setGuests(guests - 1);
        }
    }
    
    function sendEmail(e) {
        e.preventDefault();

    emailjs
      .sendForm(
        "airbnbees", /// service template
        "airbnbees_template",///email template
        e.target,
        "user_NcKMlAkjhmE6qMjWYSPg0" ///userId
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
        e.target.reset()
    }
    let visit = `I'd like to visit 
    ${start} 
    through 
    ${end} 
    with ${guests} guests`
    return (
      // <div className="contactForm">
      //   <div className="container">
      //     <form onSubmit={sendEmail}>
      //       <div>
      //         <div>
      //           <input
      //             type="text"
      //             className="contactInputs"
      //             placeholder="Name"
      //             name="name"
      //             onChange={nameHandler}
      //           />
      //         </div>
      //         <div>
      //           <input
      //             type="email"
      //             className="form-control"
      //             placeholder="Email Address"
      //             name="email"
      //             className="contactInputs"
      //           />
      //         </div>
      // <div>
      //   <input
      //     type="text"
      //     className="form-control"
      //     value="You Have a Guest Coming!"
      //     name="subject"
      //     className="contactVisit"
      //   />
      // </div>
      //         <div className="contactGuests">
      //           <label for="guests">Number of guests:</label>
      //           <select id="guests" name="guests" className="guests">
      //             <option value="1 guest">1</option>
      //             <option value="2 guests">2</option>
      //             <option value="3 guests">3</option>
      //             <option value="4 guests">4</option>
      //           </select>
      //         </div>
      // <div>
      //   {start !== end ? (
      //     <textarea
      //       name="message"
      //       value={visit}
      //       className="contactTextArea"
      //     ></textarea>
      //   ) : (
      //     <textarea
      //       name="message"
      //       value="Please Select Your Dates"
      //       className="contactTextArea"
      //     ></textarea>
      //   )}
      // </div>
      // <div className="col-8 pt-3 mx-auto">
      //   {start === end || endDate > maxDays ? (
      //     <input
      //       type="submit"
      //       className="btn btn-info"
      //       value="Send Message"
      //       disabled
      //     />
      //   ) : (
      //     <input
      //       type="submit"
      //       className="btn btn-info"
      //       value="Send Message"
      //     />
      //   )}
      // </div>
      //       </div>
      //     </form>
      //   </div>
      // </div>

      <div
        className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800
        sm:px-6 md:px-8 lg:px-10"
      >
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
          Let Us Know Who is Booking
        </div>
        <div className="mt-8">
          <form onSubmit={sendEmail}>
            <div className="flex flex-col items-center mb-12 -mt-10">
              {/* <>
                <input
                  type="text"
                  className="hidden"
                  value={subject}
                  name="subject"
                />
              </> */}
              <div className="flex relative ">
                <div className="custom-number-input h-10 w-32">
                  <label className="w-full text-gray-700 text-sm font-semibold">
                    Number of Guests
                  </label>
                  <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
                    {/* <button
                      onClick={guestsDecrease}
                      className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l
                      cursor-pointer outline-none"
                    >
                      <span className="m-auto text-2xl font-thin">−</span>
                    </button> */}
                    {/* <p
                      className="outline-none focus:outline-none mx-8  font-semibold text-md hover:text-black focus:text-black
                       md:text-basecursor-default flex items-center text-gray-700  outline-none"
                    >
                      {guests}
                    </p> */}
                    {/* <button
                      onClick={guestsIncrease}
                      data-action="increment"
                      className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400
                       h-full w-20 rounded-r cursor-pointer"
                    >
                      <span className="m-auto text-2xl font-thin">+</span>
                    </button> */}
                    <input className="hidden" name={guests} />
                  </div>
                </div>
              </div>
              <div className="flex flex-col mb-6">
                <div className="flex relative mt-12">
                  <span
                    className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b
                 border-gray-300 text-gray-500 shadow-sm text-sm"
                  >
                    <svg
                      xmlns="http:www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4
                    bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base
                    focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
              </div>
              <div className="flex flex-col mb-2">
                <div className="flex relative ">
                  <span
                    className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b
                border-gray-300 text-gray-500 shadow-sm text-sm"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </span>
                  <input
                    type="email"
                    id="sign-in-email"
                    className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4
                  bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
                  focus:ring-purple-600 focus:border-transparent"
                    placeholder="Your Email Address"
                    name="email"
                  />
                </div>
              </div>
              <>
                <input name="message" value={visit} className="hidden" />
              </>
              <div className="col-8 pt-3 mx-auto">
                {start === end || endDate > maxDays ? (
                  <input
                    type="submit"
                    value="Send Message"
                    disabled
                  />
                ) : (
                  <input
                    type="submit"
                    value="Send Message"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>

      // <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800
      // sm:px-6 md:px-8 lg:px-10">
      //   <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
      //     Let Us Know Who is Booking
      //   </div>
      //   <div className="mt-8">
      //     <form action="#" autoComplete="off" onSubmit={sendEmail}>
      //       {/* Guests */}
      //       <div className="flex flex-col items-center mb-12 -mt-10">
      //         <div className="flex relative ">
      //           <div className="custom-number-input h-10 w-32">
      //             <label className="w-full text-gray-700 text-sm font-semibold">
      //               Number of Guests
      //             </label>
      //             <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
      //               <button
      //                 onClick={guestsDecrease}
      //                 data-action="decrement"
      //                 className=" bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l
      //                 cursor-pointer outline-none"
      //               >
      //                 <span className="m-auto text-2xl font-thin">−</span>
      //               </button>
      //               <p
      //                 className="outline-none focus:outline-none mx-8  font-semibold text-md hover:text-black focus:text-black
      //                 md:text-basecursor-default flex items-center text-gray-700  outline-none"
      //                 name="custom-input-number"
      //               >
      //                 {guests}
      //               </p>
      //               <button
      //                 onClick={guestsIncrease}
      //                 data-action="increment"
      //                 className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400
      //                 h-full w-20 rounded-r cursor-pointer"
      //               >
      //                 <span className="m-auto text-2xl font-thin">+</span>
      //               </button>
      //             </div>
      //           </div>
      //         </div>
      //       </div>

      //       <div className="flex flex-col mb-6">
      //         <div className="flex relative ">
      //           <span
      //             className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b
      //           border-gray-300 text-gray-500 shadow-sm text-sm"
      //           >
      //             <svg
      //               xmlns="http://www.w3.org/2000/svg"
      //               className="h-5 w-5"
      //               viewBox="0 0 20 20"
      //               fill="currentColor"
      //             >
      //               <path
      //                 fillRule="evenodd"
      //                 d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
      //                 clipRule="evenodd"
      //               />
      //             </svg>
      //           </span>
      //           <input
      //             type="text"
      //             className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4
      //              bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base
      //              focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
      //             placeholder="Your Name"
      //             name="name"
      //           />
      //         </div>
      //       </div>
      // <div className="flex flex-col mb-2">
      //   <div className="flex relative ">
      //     <span
      //       className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b
      //     border-gray-300 text-gray-500 shadow-sm text-sm"
      //     >
      //       <svg
      //         xmlns="http://www.w3.org/2000/svg"
      //         className="h-5 w-5"
      //         viewBox="0 0 20 20"
      //         fill="currentColor"
      //       >
      //         <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
      //         <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
      //       </svg>
      //     </span>
      //     <input
      //       type="email"
      //       id="sign-in-email"
      //       className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4
      //       bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2
      //       focus:ring-purple-600 focus:border-transparent"
      //       placeholder="Your Email Address"
      //       name="email"
      //     />
      //   </div>
      // </div>
      //       <div className="hidden">
      //         <div className="flex relative ">
      //           <input
      //             type="text"
      //             defaultValue="You Have a Guest Coming!"
      //             name="subject"
      //           />
      //         </div>
      //       </div>
      //       <div className="hidden">
      //         <div className="flex relative ">
      //           <input
      //             type="text"
      //             defaultValue="You Have a Guest Coming!"
      //             name="subject"
      //           />
      //         </div>
      //       </div>
      //       <div className="hidden">
      //         {start !== end ? (
      //           <textarea
      //             name="message"
      //             defaultValue={visit}
      //             className="contactTextArea"
      //           ></textarea>
      //         ) : (
      //           <textarea
      //             name="message"
      //             defaultValue="Please Select Your Dates"
      //             className="contactTextArea"
      //           ></textarea>
      //         )}
      //       </div>

      //       {/* Submit Button */}
      //       <div className="flex w-full my-5">
      //         {start === end || endDate > maxDays ? (
      //           <button
      //             type="submit"
      //             className="py-2 px-4 bg-gray-200 hover:bg-gray-200 focus:ring-purple-500 focus:ring-offset-purple-200
      //             text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none
      //             focus:ring-2 focus:ring-offset-2  rounded-lg disabled:opacity-90"
      //           >
      //             Please Select Your Dates
      //           </button>
      //         ) : (
      //           <button
      //             onClick={sendEmail}
      //             type="submit"
      //             value="Book Your Stay"
      //             className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200
      //             text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none
      //             focus:ring-2 focus:ring-offset-2  rounded-lg"
      //           >
      //             Book Your Stay
      //           </button>
      //         )}
      //       </div>
      //     </form>
      //   </div>
      // </div>
    );
}

