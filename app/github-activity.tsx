import "server-only";

import { connection } from "next/server";
import { GitHubHeatmap, type ContributionWeek } from "./github-heatmap";

const username = "Hit2310";

type GitHubCalendarResponse = {
  data?: {
    user?: {
      contributionsCollection?: {
        contributionCalendar?: {
          totalContributions: number;
          weeks: ContributionWeek[];
        };
      };
    };
  };
  errors?: { message: string }[];
};

const contributionCalendarQuery = `
  query ContributionCalendar($login: String!) {
    user(login: $login) {
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            firstDay
            contributionDays {
              color
              contributionCount
              date
              weekday
            }
          }
        }
      }
    }
  }
`;

const statsCards = [
  {
    alt: "Hit2310 GitHub stats",
    src: "https://github-readme-stats-hg7q04uyk-hit2310s-projects.vercel.app/api?username=Hit2310&show_icons=true&hide_border=true&theme=transparent",
  },
  {
    alt: "Hit2310 GitHub streak stats",
    src: "/api/github-readme-card/streak",
  },
  {
    alt: "Hit2310 top programming languages",
    src: "https://github-readme-stats-hg7q04uyk-hit2310s-projects.vercel.app/api/top-langs?username=Hit2310&layout=compact&langs_count=8&hide_border=true&theme=transparent",
  },
];

async function getContributionCalendar() {
  await connection();

  const token = process.env.GITHUB_TOKEN;

  if (!token) {
    return {
      error: "Add GITHUB_TOKEN to load the contribution heatmap.",
      totalContributions: 0,
      weeks: [],
    };
  }

  try {
    const response = await fetch("https://api.github.com/graphql", {
      body: JSON.stringify({
        query: contributionCalendarQuery,
        variables: { login: username },
      }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      method: "POST",
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error("GitHub GraphQL request failed");
    }

    const payload = (await response.json()) as GitHubCalendarResponse;

    if (payload.errors?.length) {
      throw new Error(payload.errors[0].message);
    }

    const calendar =
      payload.data?.user?.contributionsCollection?.contributionCalendar;

    if (!calendar) {
      throw new Error("GitHub contribution calendar is missing");
    }

    return {
      error: null,
      totalContributions: calendar.totalContributions,
      weeks: calendar.weeks,
    };
  } catch {
    return {
      error: "GitHub contribution data is unavailable right now.",
      totalContributions: 0,
      weeks: [],
    };
  }
}

export async function GitHubActivity() {
  const calendar = await getContributionCalendar();

  return (
    <section
      id="github"
      className="github-section mx-auto max-w-6xl px-5 py-16 sm:px-8"
      data-reveal
    >
      <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
        <div>
          <p className="section-kicker text-sm font-semibold uppercase tracking-[0.18em]">
            GitHub
          </p>
          <h2 className="text-heading mt-2 text-3xl font-semibold">
            Activity and stats
          </h2>
          <p className="text-muted mt-3 max-w-2xl leading-7">
            Live profile cards paired with a contribution calendar fetched from
            GitHub on the server.
          </p>
        </div>
        <a
          className="text-link text-sm font-semibold hover:underline"
          href={`https://github.com/${username}`}
          rel="noreferrer"
          target="_blank"
        >
          View GitHub profile
        </a>
      </div>

      <div className="github-stats-grid">
        {statsCards.map((card) => (
          <img
            alt={card.alt}
            className="github-readme-card"
            key={card.src}
            loading="lazy"
            src={card.src}
          />
        ))}
      </div>

      <div className="github-card mt-6 rounded-lg border p-5">
        <div className="mb-5 flex flex-col justify-between gap-2 sm:flex-row sm:items-end">
          <div>
            <p className="text-subtle text-sm font-semibold">
              {calendar.totalContributions.toLocaleString()} contributions in
              the last year
            </p>
            <p className="text-muted mt-1 text-sm">
              Contribution colors come directly from the GitHub GraphQL API.
            </p>
          </div>
        </div>

        {calendar.error ? (
          <div className="github-empty">{calendar.error}</div>
        ) : (
          <GitHubHeatmap weeks={calendar.weeks} />
        )}
      </div>
    </section>
  );
}
