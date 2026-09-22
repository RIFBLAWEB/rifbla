import type { Metadata } from "next";
import Image from "next/image";
import officers from "@/content/officers.json";
import state from "@/content/state.json";
import advisersPhoto from "@/public/photos/nlc-advisers.jpg";
import { getOfficers } from "@/lib/reader";

export const metadata: Metadata = { title: "State Officers" };

export default async function Officers() {
  const team = await getOfficers();
  return (
    <>
      <div className="page-head">
        <span className="head-wm" aria-hidden="true">26·27</span>
        <div className="container">
          <h1>State Officers</h1>
          <p>
            Meet the Rhode Island {officers.year} officer team. We&apos;re
            excited for everything ahead of us this year!
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">{officers.year}</span>
          <h2>The officer team</h2>
          <div className="officer-grid officer-grid-featured">
            {team.slice(0, 2).map((o) => (
              <div className="officer-card" key={o.name}>
                <div className="officer-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/photos/${o.photo}`} alt={o.name} />
                </div>
                <h3>{o.name}</h3>
                <p className="officer-meta">
                  {o.role} · {o.school}
                </p>
                <p className="officer-bio">{o.bio}</p>
              </div>
            ))}
          </div>
          <div className="officer-grid">
            {team.slice(2).map((o) => (
              <div className="officer-card" key={o.name}>
                <div className="officer-photo">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/photos/${o.photo}`} alt={o.name} />
                </div>
                <h3>{o.name}</h3>
                <p className="officer-meta">
                  {o.role} · {o.school}
                </p>
                <p className="officer-bio">{o.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">State leadership</span>
          <h2>Adviser &amp; chair</h2>
          <ul className="officer-list">
            {state.leadership.map((l) => (
              <li key={l.name}>
                <span>
                  {l.name}
                  <span className="chapter-note"> · {l.school}</span>
                </span>
                <span className="officer-role">{l.role}</span>
              </li>
            ))}
          </ul>
          <div className="about-photo">
            <Image
              src={advisersPhoto}
              alt="Rhode Island FBLA advisers outside the National Leadership Conference venue"
              placeholder="blur"
              sizes="(max-width: 760px) 100vw, 736px"
            />
          </div>
          <p className="photo-caption">
            Rhode Island advisers at the National Leadership Conference
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Since 2017</span>
          <h2>Past officer teams</h2>
          <p className="prose">
            The FBLA RI State Officer Team thanks all past officers for their
            contributions and support towards our organization!
          </p>
          <div className="past-teams">
            {officers.past.map((team) => (
              <details key={team.year}>
                <summary>{team.year}</summary>
                <ul>
                  {team.members.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
