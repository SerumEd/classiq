// Tweaks app for ClassIQ landing — exposes theme variants and layout knobs.

const THEMES = {
  "teal-coral": {
    label: "Teal · Coral",
    swatch: ["#146570", "#e8765b", "#f2a03d"],
    vars: {
      "--teal-900": "#06363f",
      "--teal-800": "#0d4d58",
      "--teal-700": "#146570",
      "--teal-600": "#1a7a87",
      "--teal-500": "#2d9aa6",
      "--teal-100": "#d6eaeb",
      "--teal-50":  "#ecf5f5",
      "--coral":    "#e8765b",
      "--amber":    "#f2a03d",
      "--cream":    "#ffffff",
      "--cream-2":  "#f6f3ec",
      "--ink":      "#0b2a30",
      "--ink-2":    "#2a3f44",
    },
  },
  "indigo-amber": {
    label: "Indigo · Amber",
    swatch: ["#3b4ea0", "#f59e0b", "#ec4899"],
    vars: {
      "--teal-900": "#1e2554",
      "--teal-800": "#2b3578",
      "--teal-700": "#3b4ea0",
      "--teal-600": "#4f63b8",
      "--teal-500": "#7689d3",
      "--teal-100": "#dde2f4",
      "--teal-50":  "#eef1fa",
      "--coral":    "#ec4899",
      "--amber":    "#f59e0b",
      "--cream":    "#ffffff",
      "--cream-2":  "#eeecf6",
      "--ink":      "#161430",
      "--ink-2":    "#2e2c4a",
    },
  },
  "forest-coral": {
    label: "Forest · Coral",
    swatch: ["#2c6e4b", "#e8765b", "#d97706"],
    vars: {
      "--teal-900": "#143524",
      "--teal-800": "#1f4d35",
      "--teal-700": "#2c6e4b",
      "--teal-600": "#388a5d",
      "--teal-500": "#5dac82",
      "--teal-100": "#d4ead9",
      "--teal-50":  "#ecf4ed",
      "--coral":    "#e8765b",
      "--amber":    "#d97706",
      "--cream":    "#ffffff",
      "--cream-2":  "#eef5ef",
      "--ink":      "#0e2418",
      "--ink-2":    "#1e3829",
    },
  },
  "plum-cream": {
    label: "Plum · Amber",
    swatch: ["#5a2e57", "#d97706", "#f59e0b"],
    vars: {
      "--teal-900": "#2c1029",
      "--teal-800": "#421f3f",
      "--teal-700": "#5a2e57",
      "--teal-600": "#774671",
      "--teal-500": "#9b6a93",
      "--teal-100": "#e9d8e5",
      "--teal-50":  "#f4eaf2",
      "--coral":    "#d97706",
      "--amber":    "#f59e0b",
      "--cream":    "#ffffff",
      "--cream-2":  "#f4ecf2",
      "--ink":      "#241324",
      "--ink-2":    "#3a283a",
    },
  },
  "graphite": {
    label: "Graphite",
    swatch: ["#1f1f23", "#e8765b", "#94a3b8"],
    vars: {
      "--teal-900": "#0a0a0c",
      "--teal-800": "#15151a",
      "--teal-700": "#1f1f23",
      "--teal-600": "#3a3a42",
      "--teal-500": "#6b6b76",
      "--teal-100": "#dedde1",
      "--teal-50":  "#efeef0",
      "--coral":    "#e8765b",
      "--amber":    "#f2a03d",
      "--cream":    "#ffffff",
      "--cream-2":  "#f0efeb",
      "--ink":      "#0a0a0c",
      "--ink-2":    "#2a2a30",
    },
  },
};

const FONT_PAIRS = {
  geist: {
    label: "Geist",
    sans: '"Geist", "Plus Jakarta Sans", system-ui, sans-serif',
    serif: '"Instrument Serif", Georgia, serif',
    mono: '"Geist Mono", ui-monospace, monospace',
    google: "Geist:wght@300;400;500;600;700&family=Geist+Mono:wght@400;500&family=Instrument+Serif:ital@0;1",
  },
  jakarta: {
    label: "Jakarta · Fraunces",
    sans: '"Plus Jakarta Sans", system-ui, sans-serif',
    serif: '"Fraunces", Georgia, serif',
    mono: '"JetBrains Mono", ui-monospace, monospace',
    google: "Plus+Jakarta+Sans:wght@300;400;500;600;700&family=Fraunces:ital,opsz,wght@0,9..144,400;1,9..144,400&family=JetBrains+Mono:wght@400;500",
  },
  manrope: {
    label: "Manrope",
    sans: '"Manrope", system-ui, sans-serif',
    serif: '"DM Serif Display", Georgia, serif',
    mono: '"IBM Plex Mono", ui-monospace, monospace',
    google: "Manrope:wght@300;400;500;600;700&family=DM+Serif+Display:ital@0;1&family=IBM+Plex+Mono:wght@400;500",
  },
};

function applyTheme(themeKey) {
  const theme = THEMES[themeKey] || THEMES["teal-coral"];
  const root = document.documentElement;
  Object.entries(theme.vars).forEach(([k, v]) => root.style.setProperty(k, v));
}

function applyFontPair(key) {
  const pair = FONT_PAIRS[key] || FONT_PAIRS.geist;
  const root = document.documentElement;
  root.style.setProperty("--font-sans", pair.sans);
  root.style.setProperty("--font-serif", pair.serif);
  root.style.setProperty("--font-mono", pair.mono);
  // Lazy-load the Google fonts file once
  const id = `gfont-${key}`;
  if (!document.getElementById(id)) {
    const link = document.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = `https://fonts.googleapis.com/css2?family=${pair.google}&display=swap`;
    document.head.appendChild(link);
  }
}

function applyHeroLayout(layout) {
  const hero = document.querySelector(".hero");
  if (!hero) return;
  if (layout === "centered") {
    hero.classList.add("hero-centered");
  } else {
    hero.classList.remove("hero-centered");
  }
}

function applySerifAccent(on) {
  document.querySelectorAll(".accent, .italic-serif").forEach(el => {
    el.style.fontStyle = on ? "italic" : "normal";
    el.style.fontFamily = on ? "var(--font-serif)" : "inherit";
    el.style.fontWeight = on ? "400" : "500";
  });
}

function applyDenseFeatures(on) {
  const grid = document.querySelector(".features-grid");
  if (!grid) return;
  grid.style.gridTemplateColumns = on ? "repeat(4, 1fr)" : "";
}

// Inject the centered-hero CSS override once
(function injectHeroCenteredStyle() {
  const css = `
    .hero.hero-centered .hero-grid { grid-template-columns: 1fr; text-align: center; }
    .hero.hero-centered .hero-grid > div:first-child { max-width: 760px; margin: 0 auto; }
    .hero.hero-centered .hero-eyebrow-row { justify-content: center; }
    .hero.hero-centered .hero-sub { margin-left: auto; margin-right: auto; }
    .hero.hero-centered .hero-ctas { justify-content: center; }
    .hero.hero-centered .hero-meta { justify-content: center; }
    .hero.hero-centered .hero-preview { display: none; }
  `;
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
})();

function App() {
  const defaults = window.TWEAK_DEFAULTS || {
    theme: "teal-coral",
    fontPair: "geist",
    heroLayout: "split",
    showSerifAccent: true,
    denseFeatures: false,
  };
  const [t, setTweak] = useTweaks(defaults);

  React.useEffect(() => { applyTheme(t.theme); }, [t.theme]);
  React.useEffect(() => { applyFontPair(t.fontPair); }, [t.fontPair]);
  React.useEffect(() => { applyHeroLayout(t.heroLayout); }, [t.heroLayout]);
  React.useEffect(() => { applySerifAccent(t.showSerifAccent); }, [t.showSerifAccent]);
  React.useEffect(() => { applyDenseFeatures(t.denseFeatures); }, [t.denseFeatures]);

  const themeOptions = Object.entries(THEMES).map(([key, v]) => ({
    value: key, label: v.label, palette: v.swatch,
  }));
  const fontOptions = Object.entries(FONT_PAIRS).map(([key, v]) => ({
    value: key, label: v.label,
  }));

  return (
    <TweaksPanel title="Tweaks">
      <TweakSection label="Theme" />
      <TweakSelect
        label="Color palette"
        value={t.theme}
        options={themeOptions.map(o => ({ value: o.value, label: o.label }))}
        onChange={v => setTweak('theme', v)}
      />
      <div style={{ display: 'flex', gap: 6, marginTop: 2, flexWrap: 'wrap' }}>
        {themeOptions.map(opt => (
          <button
            key={opt.value}
            onClick={() => setTweak('theme', opt.value)}
            title={opt.label}
            style={{
              border: t.theme === opt.value ? '2px solid #29261b' : '1px solid rgba(0,0,0,.1)',
              padding: 0, background: 'transparent', borderRadius: 8, cursor: 'pointer',
              display: 'flex', overflow: 'hidden', width: 56, height: 22,
            }}>
            {opt.palette.map((c, i) => (
              <span key={i} style={{ flex: 1, background: c }} />
            ))}
          </button>
        ))}
      </div>

      <TweakSection label="Typography" />
      <TweakSelect
        label="Font pair"
        value={t.fontPair}
        options={fontOptions}
        onChange={v => setTweak('fontPair', v)}
      />
      <TweakToggle
        label="Serif italic accents"
        value={t.showSerifAccent}
        onChange={v => setTweak('showSerifAccent', v)}
      />

      <TweakSection label="Layout" />
      <TweakRadio
        label="Hero"
        value={t.heroLayout}
        options={[{ value: 'split', label: 'Split' }, { value: 'centered', label: 'Centered' }]}
        onChange={v => setTweak('heroLayout', v)}
      />
      <TweakToggle
        label="Dense features (4 cols)"
        value={t.denseFeatures}
        onChange={v => setTweak('denseFeatures', v)}
      />
    </TweaksPanel>
  );
}

ReactDOM.createRoot(document.getElementById("tweaks-root")).render(<App />);
