"use client";

export type ContributionDay = {
  color: string;
  contributionCount: number;
  date: string;
  weekday: number;
};

export type ContributionWeek = {
  contributionDays: ContributionDay[];
  firstDay: string;
};

type GitHubHeatmapProps = {
  weeks: ContributionWeek[];
};

const weekdayLabels = ["", "Mon", "", "Wed", "", "Fri", ""];
const monthFormatter = new Intl.DateTimeFormat("en", { month: "short" });
const dateFormatter = new Intl.DateTimeFormat("en", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function getMonthLabels(weeks: ContributionWeek[]) {
  let previousMonth = -1;

  return weeks.map((week) => {
    const month = new Date(`${week.firstDay}T00:00:00`).getMonth();

    if (month === previousMonth) {
      return "";
    }

    previousMonth = month;

    return monthFormatter.format(new Date(`${week.firstDay}T00:00:00`));
  });
}

function getTooltip(day: ContributionDay) {
  const countLabel =
    day.contributionCount === 1 ? "1 contribution" : `${day.contributionCount} contributions`;

  return `${dateFormatter.format(new Date(`${day.date}T00:00:00`))}: ${countLabel}`;
}

export function GitHubHeatmap({ weeks }: GitHubHeatmapProps) {
  const monthLabels = getMonthLabels(weeks);

  return (
    <div className="github-contribution-calendar">
      <div className="github-contribution-months">
        {monthLabels.map((month, index) => (
          <span key={`${month}-${weeks[index]?.firstDay ?? index}`}>{month}</span>
        ))}
      </div>
      <div className="github-contribution-body">
        <div className="github-contribution-weekdays" aria-hidden="true">
          {weekdayLabels.map((day, index) => (
            <span key={`${day}-${index}`}>{day}</span>
          ))}
        </div>
        <div
          className="github-contribution-weeks"
          aria-label="GitHub contribution calendar"
        >
          {weeks.map((week) => (
            <div className="github-contribution-week" key={week.firstDay}>
              {week.contributionDays.map((day) => (
                <button
                  aria-label={getTooltip(day)}
                  className="github-contribution-day"
                  key={day.date}
                  style={{ backgroundColor: day.color }}
                  type="button"
                >
                  <span className="github-contribution-tooltip">
                    {getTooltip(day)}
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
