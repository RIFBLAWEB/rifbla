import type { Metadata } from "next";
import { getEvents } from "@/lib/reader";

export const metadata: Metadata = { title: "State Events" };

export default async function Events() {
  const events = await getEvents();
  return (
    <>
      <div className="page-head">
        <span className="head-wm" aria-hidden="true">Mar 12</span>
        <div className="container">
          <h1>State Events</h1>
          <p>
            Three statewide events every year, from the fall kickoff to the
            State Leadership Conference in March.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">2026-2027</span>
          <h2>This year&apos;s calendar</h2>
          <ul className="timeline">
            {events.map((event) => (
              <li key={event.title}>
                <span className="timeline-date">{event.date}</span>
                <p className="timeline-title">{event.title}</p>
                <p className="event-detail">{event.detail}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">The path</span>
          <h2>States to nationals</h2>
          <div className="prose">
            <p>
              The State Leadership Conference is where Rhode Island members
              compete in FBLA&apos;s 70+ competitive events. Top placing teams
              and individuals qualify for the National Leadership Conference
              each summer, where the best of FBLA from every state convene to
              compete, share their successes, and shape their career futures.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
