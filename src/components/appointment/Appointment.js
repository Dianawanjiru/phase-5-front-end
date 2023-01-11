import { Fragment } from 'react';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import './Appointment.css';

function Appointment(){

        const handleSubmit = event => {
      // prevent page refresh
      event.preventDefault();
    }

    return(
        <Fragment>
            <Navbar />
            <div className="testbox">
                <form className='appointment-form' onSubmit={handleSubmit}>
                    <div className="banner">
                        <h1>Appointment Form</h1>
                    </div>
                    <br/>
                    <legend>Reservation Details</legend>
                    <div className="columns">
                        <div className="item">
                            <label for="fname">First Name<span>*</span></label>
                            <input id="fname" type="text" name="fname" />
                        </div>
                        <div className="item">
                            <label for="lname"> Last Name<span>*</span></label>
                            <input id="lname" type="text" name="lname" />
                        </div>
                        <div className="item">
                            <label for="address">Email Address<span>*</span></label>
                            <input id="address" type="text"   name="address" />
                        </div>
                        <div className="item">
                            <label for="zip">Phone Number<span>*</span></label>
                            <input id="zip" type="text"   name="zip" required/>
                        </div>
                        <br/>
                    </div>
                    <div className="columns">
                        <div className="item">
                            <label for="checkindate">Check-in Date <span>*</span></label>
                            <input id="checkindate" type="date" name="checkindate" />
                            <i className="fas fa-calendar-alt"></i>
                        </div>
                        <div className="item">
                            <p>Check-in Time </p>
                            <select>
                                <option value="" disabled selected>Select time</option>
                                <option value="1" >Morning</option>
                                <option value="2">Afternoon</option>
                                <option value="3">Evening</option>
                            </select>
                        </div>   
                        <div className="item">
                            <p>Persons Capacity</p>
                            <select>
                                <option value="8" disabled selected>Number of adults</option>
                                <option value="1 person">1 Person</option>
                                <option value="2 person">2 Person</option>
                                <option value="3 person">3 Person</option>
                                <option value="4 person">4 Person</option>
                                <option value="5+ person">5+ Person</option>
                            </select>
                        </div>          
                    </div>
                    <div className="item">
                        <label for="instruction">Any Additional Information</label>
                        <textarea id="instruction" rows="3"></textarea>
                    </div>
                    <div className="btn-block">
                        <button type="submit" href="/">Submit</button>
                    </div>
                </form>
            </div>
            <Footer />
        </Fragment>

    )
}

export default Appointment;