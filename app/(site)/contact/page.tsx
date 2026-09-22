import type { Metadata } from "next";
import state from "@/content/state.json";

export const metadata: Metadata = { title: "Contact" };

export default function Contact() {
  return (
    <>
      <div className="page-head">
        <span className="head-wm" aria-hidden="true">Say hi</span>
        <div className="container">
          <h1>Contact Us</h1>
          <p>
            Questions, suggestions, sponsorship offers, or anything else:
            we want to hear from you.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">Write to us</span>
            <form
              className="contact-form"
              action="https://formsubmit.co/rifblaofficial@gmail.com"
              method="POST"
            >
              <input type="hidden" name="_subject" value="RI FBLA website contact" />
              <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
              <label>
                Name
                <input type="text" name="name" required />
              </label>
              <label>
                Email
                <input type="email" name="email" required />
              </label>
              <label>
                Message
                <textarea name="message" rows={6} required />
              </label>
              <button type="submit" className="btn">
                Send →
              </button>
            </form>
          </div>
          <div className="prose">
            <span className="kicker">Other ways</span>
            <p>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${state.contact.email}`}>
                {state.contact.email}
              </a>
              <br />
              <strong>Instagram:</strong>{" "}
              <a href={state.contact.instagram}>
                {state.contact.instagramHandle}
              </a>
              <br />
              <strong>LinkedIn:</strong>{" "}
              <a href={state.contact.linkedin}>{state.contact.linkedinLabel}</a>
            </p>
            <p>
              Rhode Island FBLA is supported by individuals and organizations
              from around the state. Whether you can offer a financial
              sponsorship, an educational workshop, or another resource, we
              would love to hear from you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
