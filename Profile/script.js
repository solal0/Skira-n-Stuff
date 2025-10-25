const findImageUrls = [
  "https://upload.wikimedia.org/wikipedia/commons/7/79/YouTube_social_red_square_%282017%29.svg",
  "https://img.freepik.com/vecteurs-libre/nouvelle-conception-icone-x-du-logo-twitter-2023_1017-45418.jpg",
  "https://coxy.co/wp-content/uploads/2021/05/twitch-logo-icon-2019.jpeg",
  "https://www.logo.wine/a/logo/Reddit/Reddit-Vertical-Complete-White-Dark-Background-Logo.wine.svg",
  "https://c5.patreon.com/external/logo/downloads_logomark_color_on_coral@2x.png",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/198142ac-f410-423a-bf0b-34c9cb5d9609/dbtif5j-60306864-d6b7-44b6-a9ff-65e8adcfb911.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiIvZi8xOTgxNDJhYy1mNDEwLTQyM2EtYmYwYi0zNGM5Y2I1ZDk2MDkvZGJ0aWY1ai02MDMwNjg2NC1kNmI3LTQ0YjYtYTlmZi02NWU4YWRjZmI5MTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Im0inSFC6LcHQFexBfXRC27bLy6ANQN-Lm_jx1tKgNw",
  "https://upload.wikimedia.org/wikipedia/commons/7/7e/Roblox_Logo_2022.jpg"
];
// Update this to the destination you want all icons to open
let findTargetUrl = "https://example.com/";

// New: per-image target URLs (one-to-one with findImageUrls)
const findTargets = [
  "https://www.youtube.com/@SKBLX",
  "https://x.com/skirablx",
  "https://www.twitch.tv/captainskira",
  "https://www.reddit.com/user/Skirablx_",
  "patreon.com/CaptainSkira",
  "https://discord.gg/invite/6kmscdE8Qt",
  "https://rblx.name/2994135779"
];

function renderFindMe() {
  const container = document.getElementById("findGrid");
  container.innerHTML = "";
  findImageUrls.forEach((url, i) => {
    const a = document.createElement("a");
    // Use per-image target if present, otherwise fallback to global findTargetUrl
    a.href = findTargets[i] || findTargetUrl;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    const img = document.createElement("img");
    img.src = url;
    img.alt = "Find me link";
    a.appendChild(img);
    container.appendChild(a);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderFindMe();
});

// Add audio player that plays when page is focused and pauses when not
const bgAudio = new Audio("/gabriawll, QKReign - Missing Life  Electronic  NCS - Copyright Free Music.mp3");
bgAudio.volume = 0.5;
bgAudio.loop = true;
bgAudio.preload = "auto";

// Try to play when window gains focus/visibility and pause otherwise
async function tryPlay() {
  try {
    await bgAudio.play();
  } catch (e) {
    // Autoplay blocked until user interacts — resume on first user gesture
    const resume = () => {
      bgAudio.play().catch(()=>{});
      window.removeEventListener('pointerdown', resume);
      window.removeEventListener('keydown', resume);
    };
    window.addEventListener('pointerdown', resume, { once: true });
    window.addEventListener('keydown', resume, { once: true });
  }
}

function pauseAudio() {
  try { bgAudio.pause(); } catch (e) {}
}

window.addEventListener("focus", () => {
  tryPlay();
});
window.addEventListener("blur", () => {
  pauseAudio();
});
document.addEventListener("visibilitychange", () => {
  if (document.visibilityState === "visible") tryPlay();
  else pauseAudio();
});
