import emailjs from "emailjs-com";
import React from 'react';

export default function ContactUs({startDate, endDate, maxDays}) {
    let dateFormat = require('dateformat')
    let start = dateFormat(startDate, "dddd, mmmm dS, yyyy")
    let end = dateFormat(endDate, "dddd, mmmm dS, yyyy");
    
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


    let visit = `I'd like to visit ${start} through ${end}`
    console.log(endDate > maxDays)
    return (
      <div>
        <div className="container">
          <form onSubmit={sendEmail}>
            <div className="row pt-5 mx-auto">
              <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  name="email"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                <input
                  type="text"
                  className="form-control"
                  value="I would like to visit"
                  name="subject"
                />
              </div>
              <div className="col-8 form-group pt-2 mx-auto">
                {start !== end ? (
                  <textarea
                    className="form-control"
                    name="message"
                    value={visit}
                  ></textarea>
                ) : (
                  <textarea
                    className="form-control"
                    name="message"
                    value="Please Select Your Dates"
                  ></textarea>
                )}
              </div>
              <div className="col-8 pt-3 mx-auto">
                {(start === end) || endDate > maxDays ? (
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Send Message"
                    disabled
                  />
                ) : (
                  <input
                    type="submit"
                    className="btn btn-info"
                    value="Send Message"
                  />
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
}

