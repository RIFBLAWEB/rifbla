import type { Metadata } from "next";
import state from "@/content/state.json";

export const metadata: Metadata = { title: "Privacy" };

export default function Privacy() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>Privacy Policy</h1>
          <p>What this website does and does not collect.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="prose">
            <p>
              This website is a simple informational site for Rhode Island
              FBLA. It does not use advertising, analytics cookies, or
              tracking scripts.
            </p>
            <h3>Hosting</h3>
            <p>
              The site is hosted on Vercel, which may keep standard server
              logs (such as IP addresses and requested pages) for security
              and operational purposes.
            </p>
            <h3>Contact form</h3>
            <p>
              When you use the contact form, the information you enter (name,
              email, and message) is delivered to our chapter email through
              the FormSubmit service. We use it only to respond to you.
            </p>
            <h3>Photos</h3>
            <p>
              This site includes photos of members taken at FBLA events. If
              you appear in a photo and would like it removed, email{" "}
              <a href={`mailto:${state.contact.email}`}>
                {state.contact.email}
              </a>{" "}
              and we will take it down.
            </p>
            <h3>External links</h3>
            <p>
              Links to other websites (such as fbla.org, Google Forms, and
              social media) are governed by those sites&apos; own privacy
              policies.
            </p>
            <p>
              Questions about this policy can be sent to{" "}
              <a href={`mailto:${state.contact.email}`}>
                {state.contact.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
