import type { Metadata } from "next";
import state from "@/content/state.json";
import { getChapters } from "@/lib/reader";

export const metadata: Metadata = { title: "Chapter Directory" };

export default async function Chapters() {
  const chapters = await getChapters();
  return (
    <>
      <div className="page-head">
        <div className="container">
          <h1>Chapter Directory</h1>
          <p>
            {chapters.length} local chapters across Rhode Island. Find yours,
            or start one at your school.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">Across the state</span>
          <h2>Our chapters</h2>
          <ul className="chapter-list">
            {chapters.map((c) => (
              <li key={c.name}>
                {c.site ? <a href={c.site}>{c.name}</a> : c.name}
                {c.note && <span className="chapter-note"> ({c.note})</span>}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">No chapter at your school?</span>
          <h2>Start one</h2>
          <div className="prose">
            <p>
              Any Rhode Island secondary school can charter an FBLA chapter.
              Reach out to us at{" "}
              <a href={`mailto:${state.contact.email}`}>
                {state.contact.email}
              </a>{" "}
              and we will help you get started.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
