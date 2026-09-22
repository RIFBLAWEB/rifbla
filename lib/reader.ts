import { cache } from "react";
import { promises as fs } from "fs";
import path from "path";

/**
 * Reads CMS-managed content from content/<dir>/*.json.
 * These files are edited visually through Pages CMS (see .pages.yml);
 * every save commits to GitHub and triggers a redeploy.
 */
async function readCollection<T extends { order?: number }>(
  dir: string
): Promise<T[]> {
  const base = path.join(process.cwd(), "content", dir);
  const files = (await fs.readdir(base)).filter((f) => f.endsWith(".json"));
  const entries = await Promise.all(
    files.map(async (f) => JSON.parse(await fs.readFile(path.join(base, f), "utf8")) as T)
  );
  return entries.sort((a, b) => (a.order ?? 99) - (b.order ?? 99));
}

export type Officer = {
  name: string;
  role: string;
  school: string;
  photo: string;
  bio: string;
  order?: number;
};

export type StateEvent = {
  title: string;
  date: string;
  detail: string;
  link?: string;
  linkLabel?: string;
  order?: number;
};

export type Chapter = {
  name: string;
  note?: string;
  site?: string;
  order?: number;
};

export type ChapterUpdate = {
  chapter: string;
  date: string; // YYYY-MM-DD
  title: string;
  body: string;
};

export const getOfficers = cache(() => readCollection<Officer>("officers"));
export const getEvents = cache(() => readCollection<StateEvent>("events"));
export const getChapters = cache(() => readCollection<Chapter>("chapters"));

export const getUpdates = cache(async () => {
  const base = path.join(process.cwd(), "content", "updates");
  const files = (await fs.readdir(base)).filter((f) => f.endsWith(".json"));
  const entries = await Promise.all(
    files.map(
      async (f) =>
        JSON.parse(
          await fs.readFile(path.join(base, f), "utf8")
        ) as ChapterUpdate
    )
  );
  // newest first; ISO dates sort correctly as strings
  return entries.sort((a, b) => b.date.localeCompare(a.date));
});

export function formatUpdateDate(iso: string) {
  return new Date(`${iso}T12:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
