import { DateRangePicker } from "react-date-range";
import React, { useState, useEffect } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { addDays } from "date-fns";
import ContactUs from './contactForm'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
    // if(startDate > endDate){
    //   resetDates()
    // // } else if (endDate > maxDays){
    // //   maxDate()
    // } else {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    
      
    // }
  }
  
  const disabledDates = [
    new Date(2021, 6, 31) /// 0 indexed months
    
  ];

  function resetDates(){
    setEndDate(null)
    setStartDate(new Date())
  }

  function maxDate(){
    setEndDate(maxDays)
  }

  
  // console.log([endDate > maxDays])
    return (
      <div>
        <div className="cal">
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
          <span>
            <button onClick={resetDates}>Reset</button>
          </span>
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
      </div>
    );
  }

 