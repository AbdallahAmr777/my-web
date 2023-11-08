import "./Contact.css";
import Lottie from "lottie-react";
import EmailAnimation from "./../../Animation/Email.json";
import DoneAnimation from "./../../Animation/done.json";
import { useForm, ValidationError } from "@formspree/react";
const Contact = () => {
  const [state, handleSubmit] = useForm("xjvqzjlq");

  return (
    <section className="contact-us">
      <h1 className="title">
        <span className="icon-envelope"></span>
        Contact Us
      </h1>
      <p>
        Contact Us For more information and get notified when i publish
        something new.
      </p>
      <div style={{ justifyContent: "space-between" }} className="flex">
        <form onSubmit={handleSubmit}>
          <div className="flex">
            <label htmlFor="email">Email Address :</label>
            <input
              autoComplete="off"
              required
              type="email"
              name="email"
              id="email"
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="flex" style={{ margin: "24px 0" }}>
            <label htmlFor="message">Your Message :</label>
            <textarea required name="message" id="message"></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <button className="submit" type="submit" disabled={state.submitting}>
            {state.submitting ? "Submitting..." : "Submit"}
          </button>

          {state.succeeded && (
            <p
              className="flex"
              style={{ fontSize: "18px", marginTop: "1.7rem" }}
            >
              <Lottie
                loop={false}
                style={{ height: 38 }}
                animationData={DoneAnimation}
              />
              Your Message Has Been Sent Successfully 👌
            </p>
          )}
        </form>
        <div className=" animation">
          <Lottie className="email-animation"
          style={{ height: 360 }}
          animationData={EmailAnimation} />
        </div>
      </div>
    </section>
  );
};

export default Contact;
