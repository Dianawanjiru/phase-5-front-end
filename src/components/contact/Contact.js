import React from "react";
import './Contact.css';
import Footer from "../footer/Footer";


const Contact = () => {
    return(
        <>
            <div className="contact-container">  
                <form id="contact" action="" method="post">
                    <h3>Contact Us</h3>                    
                    <input className='input1' placeholder="   NAME:" type="text"></input>
                    <input className='input1' placeholder="   EMAIL:" type="email" tabindex="2" required></input>
                    <input className='input2' placeholder="   TYPE YOUR MESSAGE:" tabindex="5" required></input>
                        <button name="submit" type="submit" id="contact-submit" data-submit="...Sending">Submit</button>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Contact;