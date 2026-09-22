import Link from "next/link";
import state from "@/content/state.json";
import Anchor from "@/components/Anchor";
import Slideshow from "@/components/Slideshow";
import slcAwards from "@/public/photos/slc-awards.jpg";
import nlcAwards from "@/public/photos/nlc-awards.jpg";
import nlcSession from "@/public/photos/nlc-session.jpg";
import nlcBannerGroup from "@/public/photos/nlc-banner-group.jpg";
import nlcSteps from "@/public/photos/nlc-steps.jpg";
import { getEvents, getChapters } from "@/lib/reader";

const slides = [
  {
    image: slcAwards,
    alt: "Members shaking hands on stage during the awards session at the State Leadership Conference",
    caption: "Awards session, 2026 State Leadership Conference",
  },
  {
    image: nlcAwards,
    alt: "Rhode Island members at the FBLA awards backdrop at nationals",
    caption: "Awards night at the National Leadership Conference",
  },
  {
    image: nlcSession,
    alt: "Rhode Island members gathered at a National Leadership Conference session",
    caption: "RI members at an NLC general session",
  },
  {
    image: nlcBannerGroup,
    alt: "Members with an FBLA banner between conference sessions",
    caption: "Between sessions at the National Leadership Conference",
  },
  {
    image: nlcSteps,
    alt: "Members and an adviser on the steps outside the conference venue",
    caption: "On the road at nationals",
  },
];

export default async function Home() {
  const events = await getEvents();
  const chapters = await getChapters();
  return (
    <>
      <section className="hero hero-anchor">
        <Anchor className="hero-anchor-mark" />
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Future Business Leaders of America</p>
            <h1>
              <span className="h1-top">Rhode Island</span>
              <span className="h1-bottom">FBLA</span>
            </h1>
            <p className="fact">
              {chapters.length} chapters across the state. Three statewide
              conferences a year. A path from your classroom to the national
              stage.
            </p>
            <Link href="/chapters" className="btn">
              Find your chapter →
            </Link>
          </div>

          <aside className="hero-card">
            <p className="hero-card-label">Next up</p>
            <p className="hero-card-main">
              {events[0].title}: {events[0].date}
            </p>
            <p>
              <Link href="/events">All state events →</Link>
            </p>
          </aside>
        </div>
      </section>

      <div className="ticker" aria-hidden="true">
        <div className="ticker-track">
          {[...chapters, ...chapters].map((c, i) => (
            <span key={`${c.name}-${i}`}>{c.name}</span>
          ))}
        </div>
      </div>

      <section className="section photo-section">
        <div className="container">
          <span className="kicker">Rhode Island FBLA, in photos</span>
          <Slideshow slides={slides} />
        </div>
      </section>

      <section className="stats">
        <div className="container stats-grid">
          <div className="stat">
            <p className="stat-value">{chapters.length}</p>
            <p className="stat-label">local chapters across Rhode Island</p>
          </div>
          <div className="stat">
            <p className="stat-value">70+</p>
            <p className="stat-label">
              competitive events at the State Leadership Conference
            </p>
          </div>
          <div className="stat">
            <p className="stat-value">200K+</p>
            <p className="stat-label">
              FBLA members nationwide, the largest business student org
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <span className="kicker">The organization</span>
            <p className="pull">
              Classroom to boardroom. <em>Rhode Island to nationals.</em>
            </p>
          </div>
          <div className="prose">
            <p>
              Future Business Leaders of America prepares members for careers
              in business and leadership through academic competitions,
              community service, and networking opportunities. Members compete
              at the spring State Leadership Conference, and top placements
              qualify for the National Leadership Conference each summer.
            </p>
            <p>
              <Link href="/about">More about FBLA →</Link>
            </p>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">Calendar</span>
          <h2>This year in RI FBLA</h2>
          <ul className="event-list">
            {events.map((event) => (
              <li key={event.title}>
                <span className="event-date">{event.date}</span>
                <div>
                  <p className="event-title">{event.title}</p>
                  <p className="event-detail">{event.detail}</p>
                  {event.link && (
                    <p className="event-detail">
                      <a href={event.link}>{event.linkLabel || "Learn more"} →</a>
                    </p>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Chapters</span>
          <h2>Get featured</h2>
          <div className="prose">
            <p>
              Calling all RI FBLA chapters! Submit your photos, updates, and
              chapter successes to be featured on the state&apos;s social media
              pages.
            </p>
            <p>
              <a href={state.photoSubmissionForm} className="btn">
                Submit chapter updates →
              </a>
            </p>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="container">
          <h2>
            Get involved. <em>Support RI FBLA.</em>
          </h2>
          <p>
            Rhode Island FBLA is supported by individuals and organizations
            from around the state. Whether you can offer a financial
            sponsorship, an educational workshop, or another resource, we would
            love to hear from you.
          </p>
          <a href={`mailto:${state.contact.email}`} className="btn">
            Contact us →
          </a>
        </div>
      </section>
    </>
  );
}
