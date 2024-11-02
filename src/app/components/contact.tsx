import Image from "next/image";
import "../style/contact.css";
const Contact =() => {
    return(
        <div id="contact">
        <div className="contact-section">
      <div className="container">
        <div className="row">
            <center>
            <h2>Contact</h2>
            <p>Fill out the form below to contact us.</p>
            <form>
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea id="message" className="form-control"></textarea>
              </div>
              <button className="btn btn-primary">Submit</button>
              </form>
              </center>
          </div>
    

        </div>
      </div>
      </div>
     
  );
}

export default Contact;