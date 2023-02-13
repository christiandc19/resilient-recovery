import React, { useRef } from "react";



import './Contact2.css';
import emailjs from 'emailjs-com'


const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();


        //    Service Id        Template Id                 Public Key (Account Tab) 
        emailjs.sendForm('service_9v2gipl', 'template_rxc8sbg', form.current, 'Rj5e7bWJla-kOEL0H')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset()
    };

    return (
        <>


    <div className="contact2-header contact2-container">
        <h1>DO YOU NEED URGENT HELP?</h1>
        <p>Our Addiction and Recovery Support team is available 24 hours a day 7 Days a week.</p>
    </div>



<div class="contact2-container">
    <div class="contact-form-content">

      <div class="left-side">

        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div><br/>
          <div class="text-one">Street Number Street Name, Suite #</div>
          <div class="text-two">City State 12345</div>
        </div>

        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div><br/>
          <div class="text-one"><a href="tel:3234525661"> +1 (123) 456-789</a></div>
        </div>

        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div><br/>
          <div class="text-one">info@domainName.com</div>
        </div>
      </div>

      <div class="right-side">
        <div class="topic-text">Send us a message</div> <br/>
        <p className="topic-text-p">Please call our admission department if you have any questions.</p>
      <form ref={form} onSubmit={sendEmail}>
        <div class="input-box">
        <input type="text" name='name' placeholder='Your Name' required />
        </div>
        <div class="input-box">
        <input type="text" name='email' placeholder='Your Email' required />
        </div>
        <div class="input-box">
        <input type="text" name='email' placeholder='Your Phone' required />
        </div>
        <div class="input-box message-box">
        <textarea name="message" rows="4" placeholder="How can we help?" required ></textarea>

        </div>
        <input className="contact-btn" type="submit" value="Submit" />
      </form>
    </div>
    </div>
  </div>

        </>
    )
}

export default ContactForm