import type { Metadata } from "next";
import state from "@/content/state.json";

export const metadata: Metadata = { title: "Recognition" };

export default function Recognition() {
  return (
    <>
      <div className="page-head">
        <span className="head-wm" aria-hidden="true">No. 1</span>
        <div className="container">
          <h1>Recognition</h1>
          <p>
            Member of the Month, Champion Chapter, and the Business Achievement
            Awards.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">Every month</span>
          <h2>Member of the Month</h2>
          <div className="prose">
            <p>
              Each month the RI FBLA executive board chooses one exemplary
              member from across the state to be recognized on our social
              platforms. You must be a current FBLA member to qualify, and you
              can be nominated by a fellow member, an advisor, or yourself.
            </p>
            <p>
              Follow{" "}
              <a href={state.contact.instagram}>
                {state.contact.instagramHandle}
              </a>{" "}
              to see this month&apos;s honoree.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">Chapter honors</span>
          <h2>Champion Chapter</h2>
          <div className="prose">
            <p>
              The Champion Chapter program highlights chapters that actively
              engage in leadership, service, and business-related activities:
              organizing community service projects, hosting workshops, and
              competing in state and national events. Champion Chapters are
              recognized with awards, certificates, and the opportunity to
              showcase their accomplishments at FBLA conferences.
            </p>
            <p>
              <a href={`/docs/${state.championChapter.posterPdf}`}>
                2026-2027 Champion Chapter calendar (PDF)
              </a>
            </p>
          </div>
          <h3 style={{ marginTop: "2rem" }}>
            {state.championChapter.recognized.title}
          </h3>
          <ul className="podium">
            {state.championChapter.recognized.rankings.map((r, i) => (
              <li key={r}>
                <span className="place">{i + 1}</span>
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <span className="kicker">Individual honors</span>
          <h2>Business Achievement Awards</h2>
          <div className="prose">
            <p>
              The Business Achievement Awards (BAA) program is a tiered
              leadership development initiative that helps high school members
              grow personally and professionally through business-related
              activities. It includes four levels: Contributor, Leader,
              Advocate, and Capstone, each focusing on essential skills like
              communication, collaboration, critical thinking, and service.
            </p>
            <p>
              Completing the BAA builds a strong foundation in business,
              enhances college and job applications, and connects members with
              leadership and networking opportunities.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
