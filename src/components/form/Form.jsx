import "./form.css";
import ContactAnim from "../../assets/imgs/animation/contactAnim.png"

export default function Form() {
  return <div className="form-container contact-public_form">
      <div className="form-sub-container">
        <div className="form-left">
          <img src={ContactAnim} className="form-img" />
        </div>
        <div className="form-right">
          <div className="form-right-center">
            <div className="input-container">
              <input type="text" placeholder="First name" />
              <input type="text" placeholder="Last name" />
            </div>
            <input type="text" placeholder="Email address" />
            <input type="text" placeholder="Subject message" />
            <textarea rows={7} placeholder="Your inquiry here" />
          </div>
          <div className="form-right-bottom">
            <button className="btn-public">Send Message</button>
          </div>
        </div>
      </div>
    </div>;
}
