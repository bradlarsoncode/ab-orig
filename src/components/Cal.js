import { DateRangePicker } from "react-date-range";
import React, { useState } from "react";
import {Link} from 'react-router-dom'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns";
import ContactUs from './contactForm'

export default function Cal() {
  var tomorrow = addDays(new Date(), 14)
  const [startDate, setStartDate] = useState(null)
  // const [startSelected, setStartSelected]= useState(new Date())
  const [endDate, setEndDate] = useState(null);
  const maxDays = addDays(startDate, 3);
  const distance = addDays(new Date(), 120)
  // const threeDays = today.setDate(today.getDate() + 3);


  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  // console.log(selectionRange[endDate]);

  function handleSelect(ranges){

      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);

  }
  
  const disabledDates = [
    new Date(2021, 4, 21),
    new Date(2021, 4, 22),
    new Date(2021, 4, 23),
    new Date(2021, 4, 24),
    new Date(2021, 4, 25),
    new Date(2021, 4, 26),
    new Date(2021, 4, 27),
    new Date(2021, 4, 28), /// 0 indexed months
    new Date(2021, 4, 29),
    new Date(2021, 4, 30),
    new Date(2021, 4, 31),
  ];

  function maxDate(){
    setEndDate(maxDays)
  }
console.log(startDate, endDate)
    return (
      <div>
        <div class="flex justify-center h-screen items-center bg-house antialiased bg-no-repeat bg-cover bg-center">
          <div class="flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl">
            <div class="flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg">
              <p class="font-semibold text-gray-800">Book Your Stay</p>
              <Link to="/">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </Link>
            </div>
            <div class="flex flex-col px-3 py-5 bg-gray-50">
              <div className="flex justify-center pt-4">
                <DateRangePicker
                  moveRangeOnFirstSelection={false}
                  ranges={[selectionRange]}
                  onChange={handleSelect}
                  minDate={tomorrow}
                  shownDate={tomorrow}
                  maxDate={distance}
                  disabledDates={disabledDates}
                  startDatePlaceholder="Arrival"
                  endDatePlaceholder="Departure"
                />
                <h1>
                  {endDate > maxDays ? (
                    <p>Please Limit your stay to 4 Days/3 Nights</p>
                  ) : null}
                </h1>
              </div>
              <ContactUs
                startDate={startDate}
                endDate={endDate}
                maxDays={maxDays}
                disabledDates={disabledDates}
              />
              {/* <p class="mb-2 font-semibold text-gray-700">Bots Message</p>
            <textarea
              type="text"
              name=""
              placeholder="Type message..."
              class="p-5 mb-5 bg-white border border-gray-200 rounded shadow-sm h-36"
              id=""
            ></textarea>
            <div class="flex flex-col sm:flex-row items-center mb-5 sm:space-x-5">
              <div class="w-full sm:w-1/2">
                <p class="mb-2 font-semibold text-gray-700">
                  Customer Response
                </p>
                <select
                  type="text"
                  name=""
                  class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  id=""
                >
                  <option value="0">Add service</option>
                </select>
              </div>
              <div class="w-full sm:w-1/2 mt-2 sm:mt-0">
                <p class="mb-2 font-semibold text-gray-700">Next step</p>
                <select
                  type="text"
                  name=""
                  class="w-full p-5 bg-white border border-gray-200 rounded shadow-sm appearance-none"
                  id=""
                >
                  <option value="0">Book Appointment</option>
                </select>
              </div>
            </div>
            <hr />

            <div class="flex items-center mt-5 mb-3 space-x-4">
              <input
                class="inline-flex rounded-full"
                type="checkbox"
                id="check1"
                name="check1"
              />
              <label
                class="inline-flex font-semibold text-gray-400"
                for="check1"
              >
                Add a crew
              </label>
              <br />
              <input
                class="inline-flex"
                type="checkbox"
                id="check2"
                name="check2"
                checked
              />
              <label
                class="inline-flex font-semibold text-blue-500"
                for="check2"
              >
                Add a specific agent
              </label>
              <br />
            </div>
            <div class="flex flex-row items-center justify-between p-5 bg-white border border-gray-200 rounded shadow-sm">
              <div class="flex flex-row items-center">
                <img
                  class="w-10 h-10 mr-3 rounded-full"
                  src="https://randomuser.me/api/portraits/lego/7.jpg"
                  alt=""
                />
                <div class="flex flex-col">
                  <p class="font-semibold text-gray-800">Xu Lin Bashir</p>
                  <p class="text-gray-400">table.co</p>
                </div>
              </div>
              <h1 class="font-semibold text-red-400">Remove</h1>
            </div> */}
            </div>
            {/* <div class="flex flex-row items-center justify-between p-5 bg-white border-t border-gray-200 rounded-bl-lg rounded-br-lg">
          <p class="font-semibold text-gray-600">Cancel</p>
          <button class="px-4 py-2 text-white font-semibold bg-blue-500 rounded">
            Save
          </button>
        </div> */}
          </div>
        </div>
        {/* <div className="flex justify-end pt-32">
          <DateRangePicker
            moveRangeOnFirstSelection={false}
            ranges={[selectionRange]}
            onChange={handleSelect}
            minDate={tomorrow}
            shownDate={tomorrow}
            maxDate={distance}
            disabledDates={disabledDates}
            startDatePlaceholder="Arrival"
            endDatePlaceholder="Departure"
          />
          <h1>
            {endDate > maxDays ? (
              <p>Please Limit your stay to 4 Days/3 Nights</p>
            ) : null}
          </h1>
        </div>
        <ContactUs
          startDate={startDate}
          endDate={endDate}
          maxDays={maxDays}
          disabledDates={disabledDates}
        /> */}
      </div>
    );
  }

 