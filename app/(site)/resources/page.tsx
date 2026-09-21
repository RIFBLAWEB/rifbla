import type { Metadata } from "next";
import state from "@/content/state.json";

export const metadata: Metadata = { title: "Resources" };

export default function Resources() {
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>Resources</h1>
          <p>
            Everything RI members and chapters need: competition prep,
            recruitment ideas, FBLA Connect, and the state board.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">States</span>
          <h2>SLC preparation</h2>
          <div className="prose">
            <p>
              The State Leadership Conference showcases the business skills of
              students through competitive events, and the top placing teams
              and individuals qualify for the National Leadership Conference.
              The full event list is on{" "}
              <a href="https://www.fbla.org/high-school/competitive-events/">
                fbla.org
              </a>
              .
            </p>
            <ol>
              <li>
                <strong>Prepare in advance.</strong> Instead of leaving your
                report or presentation for the last minute, create a schedule
                with dates to collaborate with team members or your chapter
                adviser.
              </li>
              <li>
                <strong>Practice before states.</strong> Do at least one
                practice presentation in front of chapter members, your
                adviser, or your family, graded against the official FBLA
                rubric.
              </li>
              <li>
                <strong>Calm your nerves.</strong> Instead of overthinking and
                over-rehearsing, relax with deep breathing or counting to ten.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">Nationals</span>
          <h2>NLC preparation</h2>
          <div className="prose">
            <p>
              At the national level, most events contain over 100 teams. To
              earn a spot as a finalist, polish, practice, and prepare to the
              utmost level:
            </p>
            <ol>
              <li>
                <strong>Exceed the rubric.</strong> Incorporate elements that
                make your presentation unique from all the rest.
              </li>
              <li>
                <strong>Get the community involved.</strong> Apply your
                presentation to a real-world scenario: beta testers, opinions,
                surveys, and quotes from real people.
              </li>
              <li>
                <strong>Practice, practice, practice.</strong> Larger states
                rehearse through regionals and sectionals before states. Match
                that by presenting to your class or adviser.
              </li>
              <li>
                <strong>Be courteous to the judges.</strong> Shake hands and
                address them by their titles.
              </li>
              <li>
                <strong>Be memorable.</strong> Judges sort through 100+
                presentations, so stand out.
              </li>
              <li>
                <strong>Know your technology</strong> and bring your own if
                needed.
              </li>
              <li>
                <strong>Never say &quot;I don&apos;t know.&quot;</strong>{" "}
                Improvise!
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Grow your chapter</span>
          <h2>Member recruitment</h2>
          <div className="prose">
            <p>
              Building a strong chapter starts with recruitment. Ideas for your
              chapter:
            </p>
            <ol>
              <li>
                Set up an FBLA booth or presentation at freshman orientation
                and club fairs.
              </li>
              <li>
                Distribute flyers to students and parents during your school
                open house.
              </li>
              <li>Talk to your friends about the benefits of joining FBLA.</li>
              <li>
                Hang up posters in your community center, school library, or
                student lounge.
              </li>
              <li>
                Make recruitment a contest. FBLA&apos;s official Membership
                Madness and Membership Mania awards recognize members who
                recruit 5 to 10 new members.
              </li>
            </ol>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">Platform</span>
          <h2>FBLA Connect</h2>
          <div className="prose">
            <p>
              FBLA Connect is the online platform where members connect,
              collaborate, and grow professionally within the FBLA network:
              discussion forums, event updates, career-building tools,
              interest-based groups, and job and internship opportunities.
            </p>
            <p>
              <a href="https://connect.fbla.org/" className="btn">
                Access FBLA Connect →
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Lead the state</span>
          <h2>State board applications</h2>
          <div className="prose">
            <p>{state.stateBoard.status}</p>
            <p>
              The FBLA State Officer Program is dedicated to serving student
              members by fostering a sense of community, promoting inclusivity,
              upholding integrity, and instilling a strong sense of
              professionalism. Officers serve as ambassadors to advisers,
              alumni, and the business community at the local, state, and
              national levels.
            </p>
            <p>
              <a href={`/docs/${state.stateBoard.handbookPdf}`}>
                State Officer Handbook (PDF)
              </a>
              <br />
              <a href={state.stateBoard.specialElectionGuidelines}>
                Special Election Guidelines
              </a>
              <br />
              Questions: contact the State Adviser at{" "}
              <a href={`mailto:${state.stateBoard.advisorContact}`}>
                {state.stateBoard.advisorContact}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
