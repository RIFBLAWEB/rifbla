import Link from "next/link";
import Image from "next/image";
import state from "@/content/state.json";
import Anchor from "@/components/Anchor";

const nav = [
  { href: "/about", label: "About" },
  { href: "/officers", label: "Officers" },
  { href: "/chapters", label: "Chapters" },
  { href: "/events", label: "Events" },
  { href: "/resources", label: "Resources" },
  { href: "/recognition", label: "Recognition" },
];

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="wordmark wordmark-logo">
            <Image
              src="/photos/rifbla-logo.png"
              alt="Rhode Island FBLA"
              width={196}
              height={49}
              priority
            />
          </Link>
          <nav aria-label="Main">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main>{children}</main>

      <footer className="site-footer">
        <div className="container footer-emblem-row">
          <Anchor className="footer-anchor" />
          <p className="footer-wordmark" aria-hidden="true">
            RI·FBLA
          </p>
        </div>
        <div className="container footer-inner">
          <div>
            <p className="footer-title">Rhode Island FBLA</p>
            <p>
              A state chapter of Future Business Leaders of America, the
              largest business student organization in the country.
            </p>
          </div>
          <div>
            <p className="footer-title">Contact</p>
            <p>
              <a href={`mailto:${state.contact.email}`}>
                {state.contact.email}
              </a>
              <br />
              <a href={state.contact.instagram}>
                Instagram {state.contact.instagramHandle}
              </a>
              <br />
              <a href={state.contact.linkedin}>
                LinkedIn: {state.contact.linkedinLabel}
              </a>
            </p>
          </div>
          <div>
            <p className="footer-title">FBLA</p>
            <p>
              <a href="https://www.fbla.org">FBLA National</a>
              <br />
              <a href="https://connect.fbla.org/">FBLA Connect</a>
            </p>
          </div>
        </div>
        <div className="container footer-legal">
          <p>
            FBLA membership is open to all full-time secondary and
            post-secondary students regardless of race, creed, color, gender,
            sexual orientation, national origin, or disability.
          </p>
        </div>
      </footer>
    </>
  );
}
