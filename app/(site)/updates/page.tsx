import type { Metadata } from "next";
import Link from "next/link";
import { getUpdates, formatUpdateDate } from "@/lib/reader";

export const metadata: Metadata = { title: "Chapter Updates" };

export default async function Updates() {
  const updates = await getUpdates();
  return (
    <>
      <div className="page-head">
        <span className="head-wm" aria-hidden="true">News</span>
        <div className="container">
          <h1>Chapter Updates</h1>
          <p>
            What Rhode Island chapters are up to, submitted by chapter
            ambassadors throughout the year.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <span className="kicker">Around the state</span>
          <h2>Latest updates</h2>
          <ul className="update-list">
            {updates.map((u) => (
              <li key={`${u.date}-${u.title}`}>
                <div className="update-meta">
                  <span className="update-chapter">{u.chapter}</span>
                  <span className="update-date">
                    {formatUpdateDate(u.date)}
                  </span>
                </div>
                <p className="update-title">{u.title}</p>
                <p className="update-body">{u.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section-wash">
        <div className="container">
          <span className="kicker">Ambassadors</span>
          <h2>Submit your chapter&apos;s news</h2>
          <div className="prose">
            <p>
              Chapter ambassadors: send us your chapter&apos;s events, wins,
              fundraisers, and projects to be featured here and on our social
              platforms. Reach out through the{" "}
              <Link href="/contact">contact page</Link> or on Instagram, and
              we&apos;ll post it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
