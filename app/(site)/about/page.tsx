import type { Metadata } from "next";

export const metadata: Metadata = { title: "About FBLA" };

export default function About() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>About FBLA</h1>
          <p>
            A national education program with a quarter million students
            preparing for careers in business and business-related fields.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">The association</span>
          <h2>What is FBLA?</h2>
          <div className="prose">
            <p>
              Future Business Leaders of America prepares members for careers
              in business and leadership through academic competitions,
              community service, and networking opportunities. Its mission is
              to inspire and prepare students to become community-minded
              business leaders in a global society.
            </p>
            <p>The association has four divisions:</p>
            <ul>
              <li>
                <strong>FBLA</strong> for high school students
              </li>
              <li>
                <strong>FBLA-Middle Level</strong> for junior high, middle, and
                intermediate school students
              </li>
              <li>
                <strong>Phi Beta Lambda (PBL)</strong> for postsecondary
                students
              </li>
              <li>
                <strong>Professional Division</strong> for businesspeople,
                alumni, educators, and parents who support the goals of the
                association
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">Compete</span>
          <h2>Competitive events</h2>
          <div className="prose">
            <p>
              FBLA&apos;s National Awards Program recognizes and rewards
              excellence in a broad range of business and career-related areas.
              Through state-based competition at the spring State Leadership
              Conferences, students compete in events testing their business
              knowledge and skills. Top state winners are then eligible to
              compete for honors at the National Leadership Conference each
              summer.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Gather</span>
          <h2>Conferences &amp; seminars</h2>
          <div className="prose">
            <p>
              <strong>National Leadership Conference:</strong> the best and
              brightest of FBLA convene to compete in leadership events, share
              their successes, and learn new ideas about shaping their career
              future through workshops and exhibits. This four-day conference
              is considered the pinnacle of the FBLA experience.
            </p>
            <p>
              <strong>National Fall Leadership Conference:</strong> each fall,
              new leaders and advisers from chapters across the nation gather
              for conferences designed to guide and motivate their success for
              the year, with workshops, seminars, exhibits, and general
              sessions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
