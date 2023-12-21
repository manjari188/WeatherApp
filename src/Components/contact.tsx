import React from 'react';
import '../CSS/contact.css';

const Contact: React.FC = () => {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form className='form-group'>
                <label className="label" htmlFor="name">Name</label>
                <input className='input' type="text" id="name" />

                <label className="label" htmlFor="email">Email:</label>
                <input className='input' type="email" id="email" />

                <label className="label" htmlFor="message">Message:</label>
                <textarea className='input' id="message" rows={4} />

                <button className="button" type="submit">Submit</button>
            </form>
            <div className='information'>This will not work!</div>
        </div>
    );
};

export default Contact;
