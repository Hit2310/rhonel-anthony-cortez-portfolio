type CardType = "languages" | "stats" | "streak";

const username = "Hit2310";
const publicStatsBaseUrl = "https://github-readme-stats.vercel.app";

function getStatsBaseUrl() {
  return (
    process.env.GITHUB_README_STATS_BASE_URL?.replace(/\/$/, "") ??
    publicStatsBaseUrl
  );
}

function getCardSource(card: CardType) {
  const statsBaseUrl = getStatsBaseUrl();
  const cardSources: Record<CardType, string> = {
    languages: `${statsBaseUrl}/api/top-langs?username=${username}&layout=compact&langs_count=8&hide_border=true&theme=transparent`,
    stats: `${statsBaseUrl}/api?username=${username}&show_icons=true&hide_border=true&theme=transparent`,
    streak: `https://github-readme-streak-stats.herokuapp.com?user=${username}&hide_border=true&theme=transparent`,
  };

  return cardSources[card];
}

const cardTitles: Record<CardType, string> = {
  languages: "Top Languages",
  stats: "GitHub Stats",
  streak: "GitHub Streak",
};

function isCardType(card: string): card is CardType {
  return card === "languages" || card === "stats" || card === "streak";
}

function fallbackSvg(card: CardType) {
  const title = cardTitles[card];

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="495" height="195" viewBox="0 0 495 195" fill="none" xmlns="http://www.w3.org/2000/svg" role="img" aria-labelledby="title desc">
  <title id="title">${title} for ${username}</title>
  <desc id="desc">The GitHub readme stats service is temporarily unavailable.</desc>
  <rect x="0.5" y="0.5" width="494" height="194" rx="8" fill="#fffefe" stroke="#d8d0c2"/>
  <text x="28" y="48" fill="#1f3a3d" font-family="Arial, Helvetica, sans-serif" font-size="22" font-weight="700">${title}</text>
  <text x="28" y="82" fill="#54514b" font-family="Arial, Helvetica, sans-serif" font-size="15">@${username}</text>
  <rect x="28" y="112" width="439" height="44" rx="6" fill="#eef1e8"/>
  <text x="44" y="140" fill="#54514b" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="700">GitHub readme stats is temporarily unavailable.</text>
</svg>`;
}

function svgResponse(svg: string, status = 200) {
  return new Response(svg, {
    headers: {
      "Cache-Control": "public, max-age=900, stale-while-revalidate=3600",
      "Content-Type": "image/svg+xml; charset=utf-8",
    },
    status,
  });
}

export async function GET(
  _request: Request,
  context: RouteContext<"/api/github-readme-card/[card]">,
) {
  const { card } = await context.params;

  if (!isCardType(card)) {
    return svgResponse(fallbackSvg("stats"), 404);
  }

  try {
    const response = await fetch(getCardSource(card), {
      headers: {
        Accept: "image/svg+xml",
      },
      next: { revalidate: 900 },
    });

    if (!response.ok) {
      throw new Error(`Readme stats returned ${response.status}`);
    }

    const svg = await response.text();

    if (!svg.includes("<svg")) {
      throw new Error("Readme stats did not return SVG");
    }

    return svgResponse(svg);
  } catch {
    return svgResponse(fallbackSvg(card));
  }
}
