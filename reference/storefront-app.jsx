

/* ===== ASSET 0 : 6ec5cfe7-09e2-47ce-a6f4-e2aad0ede401 ===== */
// Small SVG icon set — line icons matching the PROLOOK admin UI.
const Icon = ({ d, size = 18, stroke = 1.6, fill = "none", style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);

const IconUser = (p) => <Icon {...p} d={["M20 21a8 8 0 1 0-16 0", "M12 13a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"]} />;
const IconUserSolid = (p) => <Icon {...p} fill="currentColor" stroke="none" d="M12 12c2.7 0 4.9-2.2 4.9-4.9S14.7 2.2 12 2.2 7.1 4.4 7.1 7.1 9.3 12 12 12zm0 2.5c-3.3 0-9.9 1.7-9.9 4.9V22h19.8v-2.5c0-3.3-6.6-5-9.9-5z" />;
const IconPin = (p) => <Icon {...p} d={["M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z", "M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"]} />;
const IconImage = (p) => <Icon {...p} d={["M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5z","M3 16l5-5 4 4 3-3 6 6","M9 10a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"]} />;
const IconBriefcase = (p) => <Icon {...p} d={["M3 8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8z","M9 6V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1","M3 12h18"]} />;
const IconCart = (p) => <Icon {...p} d={["M3 4h2l2.4 11.2a2 2 0 0 0 2 1.6h7.9a2 2 0 0 0 2-1.5L21 8H6","M10 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z","M17 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"]} />;
const IconBag = (p) => <Icon {...p} d={["M6 7a6 6 0 1 1 12 0","M4 7h16l-1.4 12.2a2 2 0 0 1-2 1.8H7.4a2 2 0 0 1-2-1.8L4 7z"]} />;
const IconStore = (p) => <Icon {...p} d={["M3 9l1.5-5h15L21 9","M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9","M9 20v-5h6v5","M3 9h18"]} />;
const IconDollar = (p) => <Icon {...p} d={["M12 1v22","M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"]} />;
const IconSearch = (p) => <Icon {...p} d={["M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14z","M16 16l4 4"]} />;
const IconSliders = (p) => <Icon {...p} d={["M4 6h10","M18 6h2","M4 12h2","M10 12h10","M4 18h12","M16 18h4","M14 4v4","M8 10v4","M14 16v4"]} />;
const IconChevron = (p) => <Icon {...p} d="M6 9l6 6 6-6" />;
const IconChevronRight = (p) => <Icon {...p} d="M9 6l6 6-6 6" />;
const IconPlus = (p) => <Icon {...p} d={["M12 5v14","M5 12h14"]} />;
const IconX = (p) => <Icon {...p} d={["M5 5l14 14","M19 5L5 19"]} />;
const IconCheck = (p) => <Icon {...p} d="M4 12l5 5L20 6" />;
const IconExternal = (p) => <Icon {...p} d={["M14 4h6v6","M20 4l-9 9","M19 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h5"]} />;
const IconCircleCheck = (p) => <Icon {...p} d={["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z","M8.5 12l2.5 2.5L16 9"]} />;
const IconClipboard = (p) => <Icon {...p} d={["M9 4h6a1 1 0 0 1 1 1v1H8V5a1 1 0 0 1 1-1z","M8 6H6a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-2"]} />;
const IconEdit = (p) => <Icon {...p} d={["M4 20h4l10.5-10.5a2.1 2.1 0 0 0-3-3L5 17v3z","M14 6l4 4"]} />;
const IconUpload = (p) => <Icon {...p} d={["M12 16V4","M6 10l6-6 6 6","M4 20h16"]} />;
const IconTrash = (p) => <Icon {...p} d={["M3 6h18","M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2","M6 6l1 14a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2l1-14"]} />;
const IconAlert = (p) => <Icon {...p} d={["M12 2L1 22h22L12 2z","M12 9v5","M12 18h.01"]} />;
const IconShield = (p) => <Icon {...p} d={["M12 2l9 4v6c0 5-3.6 9.4-9 10-5.4-.6-9-5-9-10V6l9-4z","M9 12l2 2 4-4"]} />;
const IconLock = (p) => <Icon {...p} d={["M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z","M8 11V7a4 4 0 0 1 8 0v4"]} />;
const IconUnlock = (p) => <Icon {...p} d={["M5 11h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1z","M8 11V7a4 4 0 0 1 7.5-1.9"]} />;
const IconArrowRight = (p) => <Icon {...p} d={["M4 12h16","M14 6l6 6-6 6"]} />;
const IconClock = (p) => <Icon {...p} d={["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z","M12 7v5l3 2"]} />;
const IconTrophy = (p) => <Icon {...p} d={["M6 4h12v4a6 6 0 0 1-12 0V4z","M6 6H3.5a2.5 2.5 0 0 0 4 2","M18 6h2.5a2.5 2.5 0 0 1-4 2","M9 14.5V18","M15 14.5V18","M8 21h8","M9 21v-1.5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1V21"]} />;
const IconUsers = (p) => <Icon {...p} d={["M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2","M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8z","M22 21v-2a4 4 0 0 0-3-3.87","M16 3.13a4 4 0 0 1 0 7.75"]} />;
const IconLayers = (p) => <Icon {...p} d={["M12 2l9 5-9 5-9-5 9-5z","M3 12l9 5 9-5","M3 17l9 5 9-5"]} />;
const IconGrid = (p) => <Icon {...p} d={["M4 4h7v7H4z","M13 4h7v7h-7z","M4 13h7v7H4z","M13 13h7v7h-7z"]} />;
const IconGroupAdd = (p) => <Icon {...p} d={["M3.5 3.5h6v6h-6z","M14.5 3.5h6v6h-6z","M3.5 14.5h6v6h-6z","M17.5 14.5v6","M14.5 17.5h6"]} />;
const IconChevronLeft = (p) => <Icon {...p} d="M15 18l-6-6 6-6" />;
const IconSettings = (p) => <Icon {...p} d={["M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"]} />;
const IconShare = (p) => <Icon {...p} d={["M18 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","M18 22a3 3 0 1 0 0-6 3 3 0 0 0 0 6z","M8.6 13.5l6.8 3.9","M15.4 6.6L8.6 10.5"]} />;
const IconLink = (p) => <Icon {...p} d={["M10 13a5 5 0 0 0 7.07 0l3-3a5 5 0 0 0-7.07-7.07l-1.5 1.5","M14 11a5 5 0 0 0-7.07 0l-3 3a5 5 0 0 0 7.07 7.07l1.5-1.5"]} />;
const IconMail = (p) => <Icon {...p} d={["M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6z","M3 7l9 6 9-6"]} />;
const IconPhone = (p) => <Icon {...p} d={["M4 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L14 13l5 2v4a2 2 0 0 1-2.2 2A16 16 0 0 1 2.2 6.2 2 2 0 0 1 4 4z"]} />;
const IconDownload = (p) => <Icon {...p} d={["M12 4v12","M6 10l6 6 6-6","M4 20h16"]} />;
const IconPaperclip = (p) => <Icon {...p} d={["M21.44 11.05l-8.49 8.49a5.5 5.5 0 0 1-7.78-7.78l8.49-8.49a3.67 3.67 0 0 1 5.19 5.19l-8.5 8.49a1.83 1.83 0 0 1-2.59-2.59l7.84-7.84"]} />;
// Folder (Leagues) + nested sub-folder (League Groups)
const IconFolder = (p) => <Icon {...p} d={["M3 7a2 2 0 0 1 2-2h4l2 2.2h8a2 2 0 0 1 2 2V18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7z"]} />;
const IconSubfolder = (p) => <Icon {...p} d={["M5 8a1.6 1.6 0 0 1 1.6-1.6h3.2l1.6 1.7h6.4A1.6 1.6 0 0 1 19.4 9.4V17a1.6 1.6 0 0 1-1.6 1.6H6.6A1.6 1.6 0 0 1 5 17V8z","M9 19.2h9.4a1.6 1.6 0 0 0 1.6-1.6V11"]} />;
// ── Workspace side-nav + toolbar icons ──
const IconInfo = (p) => <Icon {...p} d={["M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z","M12 11v5","M12 8h.01"]} />;
const IconReceipt = (p) => <Icon {...p} d={["M6 3h12a1 1 0 0 1 1 1v17l-3-2-2 2-2-2-2 2-2-2-3 2V4a1 1 0 0 1 1-1z","M9 8h6","M9 12h6"]} />;
const IconShirt = (p) => <Icon {...p} d={["M8 3l4 3 4-3 4.5 3.2-2.3 4-2.2-1.1V21H8V9.1L5.8 10.2 3.5 6.2 8 3z"]} />;
const IconList = (p) => <Icon {...p} d={["M8 6h13","M8 12h13","M8 18h13","M3.5 6h.01","M3.5 12h.01","M3.5 18h.01"]} />;
const IconFilter = (p) => <Icon {...p} d={["M3 5h18l-7 8v6l-4-2v-4L3 5z"]} />;
const IconSort = (p) => <Icon {...p} d={["M7 4v16","M4 8l3-4 3 4","M17 20V4","M14 16l3 4 3-4"]} />;
const IconTrendUp = (p) => <Icon {...p} d={["M3 17l6-6 4 4 8-8","M15 7h6v6"]} />;
const IconTrendDown = (p) => <Icon {...p} d={["M3 7l6 6 4-4 8 8","M15 17h6v-6"]} />;
const IconWallet = (p) => <Icon {...p} d={["M3 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v0H5a2 2 0 0 0-2 2z","M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z","M16 13h.01"]} />;

// PROLOOK logo placeholder — angled red "P" badge.
const ProlookLogo = ({ size = 32 }) => (
  <svg width={size} height={size * 0.85} viewBox="0 0 40 34" aria-label="PROLOOK">
    <path d="M3 2 H22 A12 12 0 0 1 22 22 H14 V32 H3 Z" fill="#e1251b"/>
    <path d="M13 9 H21 A3 3 0 0 1 21 15 H13 Z" fill="#ffffff"/>
    <text x="2" y="33" fontFamily="Inter, sans-serif" fontSize="5.5" fontWeight="800" letterSpacing="0.5" fill="#0e0e10">PROLOOK</text>
  </svg>
);

// Small team-emblem placeholders (used in dashboard tab).
const TeamCrest = ({ kind = "shield", color = "#e1251b" }) => {
  if (kind === "shield") return (
    <svg width="22" height="22" viewBox="0 0 24 24"><path d="M12 2l9 3v7c0 5-4 8-9 10-5-2-9-5-9-10V5l9-3z" fill={color}/><circle cx="12" cy="12" r="3" fill="#fff"/></svg>
  );
  if (kind === "ball") return (
    <svg width="22" height="22" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" fill={color}/><path d="M5 8 Q12 14 19 8 M5 16 Q12 10 19 16" stroke="#fff" strokeWidth="1.4" fill="none"/></svg>
  );
  return null;
};

Object.assign(window, {
  Icon, IconUser, IconUserSolid, IconPin, IconImage, IconBriefcase, IconCart, IconBag,
  IconStore, IconDollar, IconSearch, IconSliders, IconChevron, IconChevronRight,
  IconPlus, IconX, IconCheck, IconExternal, IconCircleCheck, IconClipboard, IconEdit, IconUpload, IconTrash, IconAlert, IconShield,
  IconLock, IconUnlock, IconArrowRight, IconClock,
  IconTrophy, IconUsers, IconLayers, IconGrid, IconGroupAdd, IconChevronLeft, IconSettings,
  IconShare, IconLink, IconMail, IconPhone, IconDownload, IconPaperclip, IconFolder, IconSubfolder,
  IconInfo, IconReceipt, IconShirt, IconList, IconFilter, IconSort, IconTrendUp, IconTrendDown, IconWallet,
  ProlookLogo, TeamCrest,
});


/* ===== ASSET 1 : 06094d1d-1988-44db-90db-17662be33f5f ===== */
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:12px 8px 12px 16px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:24px;height:24px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 16px 16px;display:flex;flex-direction:column;gap:12px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:4px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:12px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:12px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:28px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:24px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:8px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:16px;height:16px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:16px;height:16px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:24px;
    border-radius:6px;cursor:default;padding:4px 8px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:16px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:16px;height:16px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(16px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:28px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:28px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:24px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:8px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:48px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:8px;left:8px;width:12px;height:12px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null
      ? keyOrEdits : { [keyOrEdits]: val };
    setValues((prev) => ({ ...prev, ...edits }));
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', { detail: edits }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({ title = 'Tweaks', children }) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({ x: 16, y: 16 });
  const PAD = 16;

  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth, h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y)),
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);

  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);

  React.useEffect(() => {
    const onMsg = (e) => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);
      else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({ type: '__edit_mode_dismissed' }, '*');
  };

  const onDragStart = (e) => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX, sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = (ev) => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy),
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };

  if (!open) return null;
  return (
    <>
      <style>{__TWEAKS_STYLE}</style>
      <div ref={dragRef} className="twk-panel" data-omelette-chrome=""
           style={{ right: offsetRef.current.x, bottom: offsetRef.current.y }}>
        <div className="twk-hd" onMouseDown={onDragStart}>
          <b>{title}</b>
          <button className="twk-x" aria-label="Close tweaks"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={dismiss}>✕</button>
        </div>
        <div className="twk-body">
          {children}
        </div>
      </div>
    </>
  );
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({ label, children }) {
  return (
    <>
      <div className="twk-sect">{label}</div>
      {children}
    </>
  );
}

function TweakRow({ label, value, children, inline = false }) {
  return (
    <div className={inline ? 'twk-row twk-row-h' : 'twk-row'}>
      <div className="twk-lbl">
        <span>{label}</span>
        {value != null && <span className="twk-val">{value}</span>}
      </div>
      {children}
    </div>
  );
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({ label, value, min = 0, max = 100, step = 1, unit = '', onChange }) {
  return (
    <TweakRow label={label} value={`${value}${unit}`}>
      <input type="range" className="twk-slider" min={min} max={max} step={step}
             value={value} onChange={(e) => onChange(Number(e.target.value))} />
    </TweakRow>
  );
}

function TweakToggle({ label, value, onChange }) {
  return (
    <div className="twk-row twk-row-h">
      <div className="twk-lbl"><span>{label}</span></div>
      <button type="button" className="twk-toggle" data-on={value ? '1' : '0'}
              role="switch" aria-checked={!!value}
              onClick={() => onChange(!value)}><i /></button>
    </div>
  );
}

function TweakRadio({ label, value, options, onChange }) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = (o) => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({ 2: 16, 3: 10 }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = (s) => {
      const m = options.find((o) => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return <TweakSelect label={label} value={value} options={options}
                        onChange={(s) => onChange(resolve(s))} />;
  }
  const opts = options.map((o) => (typeof o === 'object' ? o : { value: o, label: o }));
  const idx = Math.max(0, opts.findIndex((o) => o.value === value));
  const n = opts.length;

  const segAt = (clientX) => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor(((clientX - r.left - 2) / inner) * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };

  const onPointerDown = (e) => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = (ev) => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <TweakRow label={label}>
      <div ref={trackRef} role="radiogroup" onPointerDown={onPointerDown}
           className={dragging ? 'twk-seg dragging' : 'twk-seg'}>
        <div className="twk-seg-thumb"
             style={{ left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
                      width: `calc((100% - 4px) / ${n})` }} />
        {opts.map((o) => (
          <button key={o.value} type="button" role="radio" aria-checked={o.value === value}>
            {o.label}
          </button>
        ))}
      </div>
    </TweakRow>
  );
}

function TweakSelect({ label, value, options, onChange }) {
  return (
    <TweakRow label={label}>
      <select className="twk-field" value={value} onChange={(e) => onChange(e.target.value)}>
        {options.map((o) => {
          const v = typeof o === 'object' ? o.value : o;
          const l = typeof o === 'object' ? o.label : o;
          return <option key={v} value={v}>{l}</option>;
        })}
      </select>
    </TweakRow>
  );
}

function TweakText({ label, value, placeholder, onChange }) {
  return (
    <TweakRow label={label}>
      <input className="twk-field" type="text" value={value} placeholder={placeholder}
             onChange={(e) => onChange(e.target.value)} />
    </TweakRow>
  );
}

function TweakNumber({ label, value, min, max, step = 1, unit = '', onChange }) {
  const clamp = (n) => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({ x: 0, val: 0 });
  const onScrubStart = (e) => {
    e.preventDefault();
    startRef.current = { x: e.clientX, val: value };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = (ev) => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return (
    <div className="twk-num">
      <span className="twk-num-lbl" onPointerDown={onScrubStart}>{label}</span>
      <input type="number" value={value} min={min} max={max} step={step}
             onChange={(e) => onChange(clamp(Number(e.target.value)))} />
      {unit && <span className="twk-num-unit">{unit}</span>}
    </div>
  );
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, (c) => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = (n >> 16) & 255, g = (n >> 8) & 255, b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}

const __TwkCheck = ({ light }) => (
  <svg viewBox="0 0 14 14" aria-hidden="true">
    <path d="M3 7.2 5.8 10 11 4.2" fill="none" strokeWidth="2.2"
          strokeLinecap="round" strokeLinejoin="round"
          stroke={light ? 'rgba(0,0,0,.78)' : '#fff'} />
  </svg>
);

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({ label, value, options, onChange }) {
  if (!options || !options.length) {
    return (
      <div className="twk-row twk-row-h">
        <div className="twk-lbl"><span>{label}</span></div>
        <input type="color" className="twk-swatch" value={value}
               onChange={(e) => onChange(e.target.value)} />
      </div>
    );
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = (o) => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return (
    <TweakRow label={label}>
      <div className="twk-chips" role="radiogroup">
        {options.map((o, i) => {
          const colors = Array.isArray(o) ? o : [o];
          const [hero, ...rest] = colors;
          const sup = rest.slice(0, 4);
          const on = key(o) === cur;
          return (
            <button key={i} type="button" className="twk-chip" role="radio"
                    aria-checked={on} data-on={on ? '1' : '0'}
                    aria-label={colors.join(', ')} title={colors.join(' · ')}
                    style={{ background: hero }}
                    onClick={() => onChange(o)}>
              {sup.length > 0 && (
                <span>
                  {sup.map((c, j) => <i key={j} style={{ background: c }} />)}
                </span>
              )}
              {on && <__TwkCheck light={__twkIsLight(hero)} />}
            </button>
          );
        })}
      </div>
    </TweakRow>
  );
}

function TweakButton({ label, onClick, secondary = false }) {
  return (
    <button type="button" className={secondary ? 'twk-btn secondary' : 'twk-btn'}
            onClick={onClick}>{label}</button>
  );
}

Object.assign(window, {
  useTweaks, TweaksPanel, TweakSection, TweakRow,
  TweakSlider, TweakToggle, TweakRadio, TweakSelect,
  TweakText, TweakNumber, TweakColor, TweakButton,
});


/* ===== ASSET 2 : e0cd807f-2017-4e14-868a-5d3a746aa9f1 ===== */
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// Chrome.jsx — Simplified Chrome browser window (dark theme, macOS)
// No dependencies, no image assets. All inline styles + inline SVG.
// Exports (to window): ChromeWindow, ChromeTabBar, ChromeToolbar, ChromeTab, ChromeTrafficLights
//
// Usage — wrap your page content in <ChromeWindow> to get the tab bar + URL bar:
//
//   <ChromeWindow width={1100} height={680} url="acme.design/pricing">
//     ...your page content...
//   </ChromeWindow>
/* END USAGE */

const CHROME_C = {
  barBg: '#202124',
  tabBg: '#35363a',
  text: '#e8eaed',
  dim: '#9aa0a6',
  urlBg: '#282a2d',
};

function ChromeTrafficLights() {
  return (
    <div style={{ display: 'flex', gap: 8, padding: '0 16px' }}>
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#ff5f57' }} />
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#febc2e' }} />
      <div style={{ width: 12, height: 12, borderRadius: '50%', background: '#28c840' }} />
    </div>
  );
}

// Single tab (active has curved scoops)
function ChromeTab({ title = 'New Tab', active = false }) {
  const curve = (flip) => (
    <svg width="8" height="10" viewBox="0 0 8 10"
      style={{ position: 'absolute', bottom: 0, [flip ? 'right' : 'left']: -8, transform: flip ? 'scaleX(-1)' : 'none' }}>
      <path d="M0 10C2 9 6 8 8 0V10H0Z" fill={CHROME_C.tabBg}/>
    </svg>
  );
  return (
    <div style={{
      position: 'relative', height: 36, alignSelf: 'flex-end',
      padding: '0 12px', display: 'flex', alignItems: 'center', gap: 8,
      background: active ? CHROME_C.tabBg : 'transparent',
      borderRadius: '8px 8px 0 0', minWidth: 120, maxWidth: 220,
      fontFamily: 'system-ui, sans-serif', fontSize: 12,
      color: active ? CHROME_C.text : CHROME_C.dim,
    }}>
      {active && curve(false)}
      {active && curve(true)}
      <div style={{ width: 16, height: 16, borderRadius: '50%', background: '#5f6368', flexShrink: 0 }} />
      <span style={{ flex: 1, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{title}</span>
    </div>
  );
}

function ChromeTabBar({ tabs = [{ title: 'New Tab' }], activeIndex = 0 }) {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', height: 44,
      background: CHROME_C.barBg, paddingRight: 8,
    }}>
      <ChromeTrafficLights />
      <div style={{ display: 'flex', alignItems: 'flex-end', height: '100%', paddingLeft: 4, flex: 1 }}>
        {tabs.map((t, i) => <ChromeTab key={i} title={t.title} active={i === activeIndex} />)}
      </div>
    </div>
  );
}

function ChromeToolbar({ url = 'example.com' }) {
  const iconDot = (
    <div style={{
      width: 28, height: 28, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: 16, height: 16, borderRadius: '50%', background: CHROME_C.dim, opacity: 0.4 }} />
    </div>
  );
  return (
    <div style={{
      height: 40, background: CHROME_C.tabBg,
      display: 'flex', alignItems: 'center', gap: 4, padding: '0 8px',
    }}>
      {iconDot}
      {/* url bar */}
      <div style={{
        flex: 1, height: 32, borderRadius: 15, background: CHROME_C.urlBg,
        display: 'flex', alignItems: 'center', gap: 8, padding: '0 16px',
        margin: '0 8px',
      }}>
        <div style={{ width: 12, height: 12, borderRadius: '50%', background: CHROME_C.dim, opacity: 0.4 }} />
        <span style={{
          flex: 1, color: CHROME_C.text, fontSize: 13,
          fontFamily: 'system-ui, sans-serif',
        }}>{url}</span>
      </div>
      {iconDot}
    </div>
  );
}

function ChromeWindow({
  tabs = [{ title: 'New Tab' }], activeIndex = 0, url = 'example.com',
  width = 900, height = 600, children,
}) {
  return (
    <div style={{
      width, height, borderRadius: 10, overflow: 'hidden',
      boxShadow: '0 24px 80px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.1)',
      display: 'flex', flexDirection: 'column', background: CHROME_C.tabBg,
    }}>
      <ChromeTabBar tabs={tabs} activeIndex={activeIndex} />
      <ChromeToolbar url={url} />
      <div style={{ flex: 1, background: '#fff', overflow: 'auto' }}>
        {children}
      </div>
    </div>
  );
}

Object.assign(window, {
  ChromeWindow, ChromeTabBar, ChromeToolbar, ChromeTab, ChromeTrafficLights,
});


/* ===== ASSET 3 : 92c68dd0-73ce-4075-8e3a-d3e46c05fd68 ===== */
// sf-theme.jsx — Storefront design tokens, global CSS, and presentational atoms.
// Consumer-facing layer that sits on top of the PROLOOK admin design system:
// same ink/red/neutral palette + Archivo / Inter / JetBrains Mono type, but a
// retail (Nike / Fanatics-style) personality. Team color = navy.

const SF = {
  ink: "#0e0e10",
  ink2: "#26262b",
  muted: "#6b6b72",
  muted2: "#9a9aa1",
  line: "#e7e7eb",
  line2: "#f0f0f2",
  field: "#d4d4d8",          // admin input border
  accentInk: "#b81d14",      // admin danger ink
  bg: "#ffffff",
  soft: "#f6f6f7",
  soft2: "#efeff1",
  red: "#e1251b",          // PROLOOK accent — used sparingly (sale / urgent)
  navy: "#1d2b4d",         // team color (Grizzlies)
  navyInk: "#16213c",
  navySoft: "#eef1f8",
  // status / badge palette
  required: "#9a5b06", requiredBg: "#fde6cf",
  supplied: "#1d4ed8", suppliedBg: "#dde7fe",
  fan: "#5b5b63", fanBg: "#eeeef0",
  covered: "#197a47", coveredBg: "#e3f4ea",
  processing: "#1d4ed8", processingBg: "#dde7fe",
  production: "#9a5b06", productionBg: "#fde6cf",
  shipped: "#5b34c9", shippedBg: "#ebe5fb",
  delivered: "#197a47", deliveredBg: "#e3f4ea",
  cancel: "#b81d14", cancelBg: "#fbe3e1",
  radius: 14,
  shadow: "0 1px 2px rgba(16,16,20,.05)",
  shadowUp: "0 -6px 20px rgba(16,16,20,.07)",
  shadowCard: "0 4px 18px rgba(16,16,20,.07)",
  shadowPop: "0 24px 60px rgba(16,16,20,.22)",
  display: '"Archivo", system-ui, sans-serif',
  body: '"Inter", system-ui, sans-serif',
  mono: '"JetBrains Mono", ui-monospace, monospace',
};

// ─────────────── Global CSS (injected once) ───────────────
function SFGlobalStyle() {
  return (
    <style>{`
      .sf-scope, .sf-scope *{ box-sizing:border-box; }
      .sf-scope{ font-family:${SF.body}; color:${SF.ink}; -webkit-font-smoothing:antialiased; text-rendering:optimizeLegibility; }
      .sf-scope ::-webkit-scrollbar{ width:0; height:0; }
      .sf-display{ font-family:${SF.display}; }
      .sf-mono{ font-family:${SF.mono}; }
      .sf-up{ text-transform:uppercase; letter-spacing:.08em; }
      .sf-tap{ cursor:pointer; -webkit-tap-highlight-color:transparent; transition:transform .12s ease, opacity .12s ease, background .14s ease, border-color .14s ease, box-shadow .14s ease; }
      .sf-tap:active{ transform:scale(.975); }
      .sf-press:active{ transform:scale(.97); }
      .sf-card-hover{ transition:box-shadow .18s ease, transform .18s ease; }
      @media (hover:hover){ .sf-card-hover:hover{ box-shadow:${SF.shadowCard}; transform:translateY(-2px); } }
      .sf-ann p{ margin:0 0 8px; } .sf-ann p:last-child{ margin-bottom:0; }
      .sf-ann ul, .sf-ann ol{ margin:6px 0 8px; padding-left:20px; } .sf-ann li{ margin:3px 0; }
      .sf-ann div{ margin:0 0 6px; } .sf-ann div:last-child{ margin-bottom:0; }
      @media (hover:hover){ .sf-link:hover{ opacity:.6; } }
      .sf-fade{ animation:sfIn .3s ease; }
      .sf-rise{ animation:sfIn .34s cubic-bezier(.2,.8,.2,1); }
      @keyframes sfFade{ from{opacity:0} to{opacity:1} }
      @keyframes sfRise{ from{opacity:0; transform:translateY(12px)} to{opacity:1; transform:translateY(0)} }
      @keyframes sfIn{ from{transform:translateY(8px)} to{transform:translateY(0)} }
      @keyframes sfSheetUp{ from{transform:translateY(100%)} to{transform:translateY(0)} }
      @keyframes sfSheetDown{ from{transform:translateY(0)} to{transform:translateY(100%)} }
      @keyframes sfPop{ from{opacity:0;transform:translateY(8px) scale(.95)} to{opacity:1;transform:translateY(0) scale(1)} }
      @keyframes sfPopOut{ from{opacity:1;transform:scale(1)} to{opacity:0;transform:scale(.96) translateY(4px)} }
      @keyframes sfOverlay{ from{opacity:0} to{opacity:1} }
      @media (prefers-reduced-motion:reduce){*,*::before,*::after{animation-duration:1ms!important;transition-duration:1ms!important}}
      @keyframes sfShimmer{ 0%{background-position:-200% 0} 100%{background-position:200% 0} }
      .sf-input{ width:100%; border:1px solid ${SF.field}; border-radius:4px; background:#fff; padding:16px 12px; font-size:14px; font-family:${SF.body}; color:${SF.ink}; outline:none; transition:border-color .15s; }
      .sf-input:focus{ border-color:${SF.ink}; }
      .sf-input::placeholder{ color:${SF.muted2}; }
      .sf-label{ font-size:11px; font-weight:500; letter-spacing:0; text-transform:none; color:${SF.muted}; margin-bottom:8px; display:block; }
    `}</style>
  );
}

// ─────────────── Badge (team status) ───────────────
function SFBadge({ kind, children, style }) {
  const map = {
    required: { c: SF.required, bg: SF.requiredBg, label: "Team Required" },
    supplied: { c: SF.supplied, bg: SF.suppliedBg, label: "Team Supplied" },
    fan: { c: SF.fan, bg: SF.fanBg, label: "Fan Gear" },
    covered: { c: SF.covered, bg: SF.coveredBg, label: "Covered by Team" },
    recommended: { c: SF.navy, bg: SF.navySoft, label: "Recommended" },
  };
  const m = map[kind] || map.fan;
  return (
    <span className="sf-mono" style={{
      display: "inline-flex", alignItems: "center", gap: 4,
      background: m.bg, color: m.c, fontSize: 9.5, fontWeight: 700,
      letterSpacing: ".09em", textTransform: "uppercase",
      padding: "4px 8px", borderRadius: 5, lineHeight: 1, whiteSpace: "nowrap", ...style,
    }}>
      {kind === "required" && <SFDot color={m.c} />}
      {children || m.label}
    </span>
  );
}
function SFDot({ color }) {
  return <span style={{ width: 4, height: 4, borderRadius: 999, background: color, display: "inline-block" }} />;
}

// ─────────────── Order status pill ───────────────
function SFStatus({ status, style }) {
  const map = {
    processing: { c: SF.processing, bg: SF.processingBg, label: "Processing" },
    "in-production": { c: SF.production, bg: SF.productionBg, label: "In Production" },
    shipped: { c: SF.shipped, bg: SF.shippedBg, label: "Shipped" },
    delivered: { c: SF.delivered, bg: SF.deliveredBg, label: "Delivered" },
    cancel: { c: SF.cancel, bg: SF.cancelBg, label: "Cancellation Requested" },
  };
  const m = map[status] || map.processing;
  return (
    <span className="sf-mono" style={{
      background: m.bg, color: m.c, fontSize: 10, fontWeight: 700,
      letterSpacing: ".07em", textTransform: "uppercase", padding: "4px 8px",
      borderRadius: 6, whiteSpace: "nowrap", lineHeight: 1, ...style,
    }}>{m.label}</span>
  );
}

// ─────────────── Price (handles waived / covered) ───────────────
function SFPrice({ value, msrp, covered, size = 16, align = "left" }) {
  const free = covered || value === 0;
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 8, justifyContent: align === "right" ? "flex-end" : "flex-start", flexWrap: "wrap" }}>
      <span className="sf-display" style={{ fontSize: size, fontWeight: 800, color: free ? SF.covered : SF.ink, letterSpacing: "-.01em" }}>
        {free ? "$0.00" : "$" + Number(value).toFixed(2)}
      </span>
      {msrp != null && (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
          <span style={{ fontSize: size * 0.72, color: SF.muted2, textDecoration: "line-through" }}>${Number(msrp).toFixed(2)}</span>
          {free && <span className="sf-mono" style={{ fontSize: 9.5, fontWeight: 700, color: SF.covered, letterSpacing: ".06em" }}>WAIVED</span>}
        </span>
      )}
    </div>
  );
}

// ─────────────── Product image (real PNG or styled placeholder) ───────────────
function SFProductImg({ src, label, tone = "grey", ratio = "1 / 1", radius = 12, fit = "contain", pad = "10%", style }) {
  const tones = {
    grey: { a: "#eef0f3", b: "#e2e5ea", ink: "#9aa0ad" },
    navy: { a: "#e9edf6", b: "#dde3f1", ink: "#7e8bab" },
    warm: { a: "#f4efe9", b: "#ece4d9", ink: "#b0a392" },
  };
  const t = tones[tone] || tones.grey;
  if (src) {
    return (
      <div style={{ aspectRatio: ratio, borderRadius: radius, background: `radial-gradient(120% 100% at 50% 12%, ${t.a}, ${t.b})`, display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", ...style }}>
        <img src={src} alt={label || ""} style={{ width: "100%", height: "100%", objectFit: fit, padding: fit === "contain" ? pad : 0, display: "block" }} />
      </div>
    );
  }
  // styled placeholder — diagonal hatch + mono caption
  return (
    <div style={{
      aspectRatio: ratio, borderRadius: radius, position: "relative", overflow: "hidden",
      background: `repeating-linear-gradient(135deg, ${t.a}, ${t.a} 11px, ${t.b} 11px, ${t.b} 22px)`,
      display: "flex", alignItems: "center", justifyContent: "center", ...style,
    }}>
      <span className="sf-mono" style={{ fontSize: 10, fontWeight: 600, letterSpacing: ".1em", textTransform: "uppercase", color: t.ink, textAlign: "center", padding: "0 12px", lineHeight: 1.5 }}>
        {label || "Product Shot"}
      </span>
    </div>
  );
}

// ─────────────── Misc atoms ───────────────
function SFSectionTitle({ children, count, action, onAction, style }) {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16, ...style }}>
      <h2 className="sf-display sf-up" style={{ margin: 0, fontSize: 17, fontWeight: 800, letterSpacing: ".02em" }}>{children}</h2>
      {count != null && (
        <span className="sf-mono" style={{ fontSize: 10, fontWeight: 700, color: SF.supplied, background: SF.suppliedBg, padding: "4px 8px", borderRadius: 6, letterSpacing: ".05em" }}>{count} ITEMS</span>
      )}
      {action && (
        <button className="sf-link sf-tap" onClick={onAction} style={{ border: 0, background: "none", fontSize: 12.5, fontWeight: 700, color: SF.ink, display: "inline-flex", alignItems: "center", gap: 4 }}>
          {action} <IconChevronRight size={15} />
        </button>
      )}
    </div>
  );
}

function SFCrest({ size = 34, mono, color = SF.navy, ink = "#fff" }) {
  const T = window.TEAM || {};
  const logo = window.SF_DEMO ? T.logo : null;
  const letter = mono || T.mono || "G";
  return (
    <div style={{ width: size, height: size, borderRadius: 9, background: color, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, overflow: "hidden", boxShadow: "inset 0 0 0 2px rgba(255,255,255,.16)" }}>
      {logo
        ? <img src={logo} alt="" style={{ width: "100%", height: "100%", objectFit: "contain", padding: size * 0.12, display: "block" }} />
        : <span className="sf-display" style={{ color: ink, fontSize: size * 0.5, fontWeight: 900, letterSpacing: "-.02em" }}>{letter}</span>}
    </div>
  );
}

// Button — matches the Team Store Management design system (ui.jsx Button):
// radius 4, Inter, weight 700, sentence case, 1px borders.
function SFButton({ children, onClick, variant = "primary", size = "md", disabled, full, style }) {
  // Store theme color — buttons are inside the themed scope (buttons + accents
  // only). Falls back to ink/navy outside a provider.
  const storeCtx = useStore();
  const themeC = (storeCtx && storeCtx.theme) || SF.navy;
  const sizes = { sm: { p: "8px 14px", f: 12 }, md: { p: "11px 22px", f: 13 }, lg: { p: "14px 28px", f: 13 } };
  const s = sizes[size] || sizes.md;
  const variants = {
    primary: { background: disabled ? "#d4d4d8" : themeC, color: "#fff", border: `1px solid ${disabled ? "#d4d4d8" : themeC}` },
    light: { background: "#fff", color: SF.ink, border: `1px solid ${SF.ink}` },
    soft: { background: SF.soft, color: SF.ink, border: "1px solid transparent" },
    navy: { background: disabled ? "#d4d4d8" : themeC, color: "#fff", border: "1px solid transparent" },
    theme: { background: disabled ? "#d4d4d8" : themeC, color: "#fff", border: `1px solid ${disabled ? "#d4d4d8" : themeC}` },
    danger: { background: "#fff", color: SF.accentInk, border: `1px solid ${SF.accentInk}` },
    ghost: { background: "transparent", color: disabled ? SF.muted2 : SF.ink, border: "1px solid transparent" },
  };
  return (
    <button className="sf-tap" onClick={disabled ? undefined : onClick} disabled={disabled} style={{
      ...variants[variant], padding: s.p, width: full ? "100%" : undefined,
      borderRadius: 4, fontFamily: SF.body, fontWeight: 700, fontSize: s.f,
      letterSpacing: ".01em", display: "inline-flex",
      alignItems: "center", justifyContent: "center", gap: 8, whiteSpace: "nowrap",
      cursor: disabled ? "not-allowed" : "pointer", transition: "all .15s ease", ...style,
    }}>{children}</button>
  );
}

Object.assign(window, { SF, SFGlobalStyle, SFBadge, SFDot, SFStatus, SFPrice, SFProductImg, SFSectionTitle, SFCrest, SFButton });


/* ===== ASSET 4 : ba0c2ee8-1801-4956-bfb6-7f242339e8c9 ===== */
// sf-data.jsx — Demo data for the Grizzlies Basketball team store (Spring 2026).
// Navy & grey. Real product PNGs for the hero uniform; styled placeholders elsewhere.
// Price resolution honors the blueprint contract: team-supplied => $0 (sizes only),
// team-required => full retail always, fan gear => full retail for everyone.

const IMG = {
  jerseyHome: "storefront-assets/bb-jersey-home.png",
  jerseyAway: "storefront-assets/bb-jersey-away.png",
  shortsHome: "storefront-assets/bb-shorts-home.png",
  shortsAway: "storefront-assets/shorts-navy.png",
  pantsNavy: "storefront-assets/pants-navy.png",
};

const TEAM = {
  name: "Grizzlies Basketball",
  short: "Grizzlies",
  season: "Spring 2026",
  mono: "G",
  city: "Northgate",
  sport: "Basketball",
  deadline: "Aug 15, 2026",
  org: "Northgate Grizzlies Basketball Club",
};

// Size scales
const SIZES_APPAREL = ["YS", "YM", "YL", "S", "M", "L", "XL", "2XL"];
const SIZES_HAT = ["S/M", "L/XL"];

// ─────────────── Catalog ───────────────
// teamSetting: "required" | "supplied" | "fan"
// covered: team has waived cost (required item player still must order, pays $0)
const PRODUCTS = [
  // ——— Bundles (uniform kits) ———
  {
    id: "home-kit", type: "bundle", name: "Home Uniform Kit", category: "Uniforms", sport: "Basketball",
    teamSetting: "required", covered: true, due: "Aug 15",
    sub: "Grizzlies · Spring 2026", img: IMG.jerseyHome, tone: "grey",
    desc: "The required home set every rostered Grizzly needs for the season — game jersey and matching shorts, personalized with your name and number.",
    items: [
      { id: "home-jersey", name: "Grizzlies Home Jersey", img: IMG.jerseyHome, tone: "grey", sub: "Basketball · Set-in V-neck", retail: 40, msrp: 62.5, personalize: true, sizes: SIZES_APPAREL },
      { id: "home-shorts", name: "Grizzlies Home Shorts", img: IMG.shortsHome, tone: "grey", sub: "Basketball · Mesh", retail: 40, msrp: 62.5, personalize: false, sizes: SIZES_APPAREL },
    ],
  },
  {
    id: "away-kit", type: "bundle", name: "Away Uniform Kit", category: "Uniforms", sport: "Basketball",
    teamSetting: "required", covered: false, due: "Aug 15",
    sub: "Grizzlies · Spring 2026", img: IMG.jerseyAway, tone: "navy",
    desc: "Required road set in team navy. Configure each piece with your name and roster number.",
    items: [
      { id: "away-jersey", name: "Grizzlies Away Jersey", img: IMG.jerseyAway, tone: "navy", sub: "Basketball · Set-in V-neck", retail: 40, msrp: 62.5, personalize: true, sizes: SIZES_APPAREL },
      { id: "away-shorts", name: "Grizzlies Away Shorts", img: IMG.shortsAway, tone: "navy", sub: "Basketball · Mesh", retail: 40, msrp: 62.5, personalize: false, sizes: SIZES_APPAREL },
    ],
  },
  // ——— Single required / supplied ———
  {
    id: "shooter", type: "single", name: "Shooting Shirt", category: "Uniforms", sport: "Basketball",
    teamSetting: "required", covered: true, due: "Aug 15",
    sub: "Warm-up · Long sleeve", img: null, tone: "navy", retail: 38, msrp: 48, personalize: true, sizes: SIZES_APPAREL,
    desc: "Long-sleeve warm-up worn during pre-game shootaround. Decorated front and back to match the kit.",
  },
  {
    id: "warmup-pant", type: "single", name: "Team Warm-up Pant", category: "Uniforms", sport: "Basketball",
    teamSetting: "supplied", covered: true,
    sub: "Travel · Tapered", img: IMG.pantsNavy, tone: "navy", retail: 0, msrp: 55, personalize: false, sizes: SIZES_APPAREL,
    desc: "Travel warm-up pant supplied by the club. Select your size — the cost is covered by your team fee.",
  },
  // ——— Recommended / training ———
  { id: "practice-rev", type: "single", name: "Reversible Practice Jersey", category: "Uniforms", sport: "Basketball", teamSetting: "fan", sub: "Practice · Reversible", img: null, tone: "grey", retail: 34, personalize: false, sizes: SIZES_APPAREL, rec: true, desc: "Navy/grey reversible mesh for practice scrimmages." },
  { id: "training-hoodie", type: "single", name: "Performance Hoodie", category: "Fan Gear", sport: "Basketball", teamSetting: "fan", sub: "Training · Midweight", img: null, tone: "navy", retail: 58, personalize: false, sizes: SIZES_APPAREL, rec: true, desc: "Midweight fleece hoodie with embroidered crest." },
  { id: "team-backpack", type: "single", name: "Team Backpack", category: "Accessories", sport: "Basketball", teamSetting: "fan", sub: "Equipment · 30L", img: null, tone: "navy", retail: 40, personalize: true, sizes: ["One Size"], rec: true, desc: "30L roster backpack with ball pocket and embroidered initials." },
  { id: "water-bottle", type: "single", name: "Insulated Bottle", category: "Accessories", sport: "Basketball", teamSetting: "fan", sub: "Equipment · 32oz", img: null, tone: "grey", retail: 22, personalize: true, sizes: ["32oz"], rec: true, desc: "Stainless 32oz bottle with team mark." },
  // ——— Fan gear ———
  { id: "fan-hoodie", type: "single", name: "Grizzlies Team Hoodie", category: "Fan Gear", sport: "Basketball", teamSetting: "fan", sub: "Fleece · Unisex", img: null, tone: "navy", retail: 65, personalize: false, sizes: SIZES_APPAREL, fan: true, desc: "Heavyweight cotton-blend hoodie with chest crest." },
  { id: "fan-cap", type: "single", name: "Logo Snapback", category: "Fan Gear", sport: "Basketball", teamSetting: "fan", sub: "Headwear · Adjustable", img: null, tone: "navy", retail: 25, personalize: false, sizes: SIZES_HAT, fan: true, desc: "Structured snapback with raised embroidery." },
  { id: "fan-tee", type: "single", name: "Supporter Tee", category: "Fan Gear", sport: "Basketball", teamSetting: "fan", sub: "Cotton · Unisex", img: null, tone: "grey", retail: 30, personalize: false, sizes: SIZES_APPAREL, fan: true, desc: "Soft ringspun cotton tee with full-front wordmark." },
  { id: "fan-quarterzip", type: "single", name: "Coaches Quarter-Zip", category: "Coaches & Staff", sport: "Basketball", teamSetting: "fan", sub: "Outerwear · Brushed", img: null, tone: "navy", retail: 70, personalize: false, sizes: SIZES_APPAREL, fan: true, desc: "Brushed-back quarter-zip with tonal logo." },
  { id: "fan-beanie", type: "single", name: "Cuff Beanie", category: "Fan Gear", sport: "Basketball", teamSetting: "fan", sub: "Headwear · Knit", img: null, tone: "grey", retail: 20, personalize: false, sizes: ["One Size"], fan: true, desc: "Ribbed knit cuff beanie with woven label." },
];

const CATEGORIES = [
  { id: "Uniforms", label: "Uniforms", desc: "Game kits & required gear", icon: "shirt" },
  { id: "Fan Gear", label: "Fan Gear", desc: "Support your team in style", icon: "bag" },
  { id: "Accessories", label: "Accessories", desc: "Bags, bottles & extras", icon: "briefcase" },
  { id: "Equipment", label: "Equipment", desc: "On-court essentials", icon: "store" },
];

// ─────────────── Roster / players ───────────────
const PLAYERS = [
  { id: "p15", number: "15", first: "Jalen", last: "Hurts", nameOnJersey: "Hurts" },
  // Jersey number is OPTIONAL on the roster (Roster spec #12) — this player has none yet,
  // so the buyer can assign one (uniqueness-checked + written back). PDP spec 18a, Epic B/C.
  { id: "p11", number: "", first: "Kevin", last: "Rodriguez", nameOnJersey: "Rodriguez" },
];

// ── Roster number helpers ─────────────────────────────────────────────
// Numbers already assigned on the team roster, excluding the player being configured.
// DEPENDENCY PLACEHOLDER: live roster numbers come from the Team Store roster service.
// Numbers already claimed by the rest of the roster. The roster service returns the
// whole team; only the two players above are shoppable in this prototype, so the
// remaining claims live here — the grid needs the real picture to be legible.
const ROSTER_OTHER_NUMBERS = [
  { number: "1", who: "M. Okafor" }, { number: "3", who: "T. Brennan" }, { number: "7", who: "D. Alvarez" },
  { number: "12", who: "R. Whitfield" }, { number: "21", who: "S. Nakamura" }, { number: "23", who: "J. Ellis" },
  { number: "24", who: "C. Boone" }, { number: "32", who: "A. Petrov" }, { number: "45", who: "L. Duarte" },
  { number: "50", who: "P. Ngata" }, { number: "55", who: "B. Halloran" },
];
function rosterTakenNumbers(exceptId) {
  return PLAYERS
    .filter((pl) => pl.id !== exceptId && String(pl.number || "").trim())
    .map((pl) => ({ number: String(pl.number).trim(), who: `${pl.first} ${pl.last}` }))
    .concat(ROSTER_OTHER_NUMBERS);
}
// A buyer-entered number that collides with another rostered player (18a, Epic B).
function numberConflict(number, taken) {
  const n = String(number || "").trim();
  if (!n) return null;
  return (taken || []).find((t) => t.number === n) || null;
}
// Persist a buyer-entered number / name back onto the roster entry (18a, Epic C).
// DEPENDENCY PLACEHOLDER: POST player personalization to the roster service.
function rosterWriteBack(playerId, patch) {
  const pl = PLAYERS.find((p) => p.id === playerId);
  if (!pl) return;
  if (patch.number != null && !String(pl.number || "").trim()) pl.number = patch.number;
  if (patch.nameOnJersey != null && !String(pl.nameOnJersey || "").trim()) pl.nameOnJersey = patch.nameOnJersey;
}

// ─────────────── Addresses & payment ───────────────
const ADDRESSES = [
  { id: "a1", name: "Jalen Hurts", line1: "123 Main St", line2: "Apt 4B", city: "Surprise", state: "AZ", zip: "85335", country: "United States", default: true },
  { id: "a2", name: "Jalen Hurts", line1: "4870 Desert Vista Dr", line2: "", city: "Phoenix", state: "AZ", zip: "85048", country: "United States", default: false },
];
const CARDS = [
  { id: "c1", brand: "mastercard", name: "Austin Novy", last4: "6642", exp: "08 / 27", default: true },
];

// ─────────────── Order history ───────────────
const ORDERS = [
  {
    id: "6549", num: "6549", date: "Jan 10, 2026", status: "processing", total: 90,
    cancelRequested: false,
    items: [
      { pid: "fan-hoodie", name: "Grizzlies Team Hoodie", badge: "fan", size: "L", qty: 1, price: 65, img: null, tone: "navy" },
      { pid: "fan-cap", name: "Logo Snapback", badge: "fan", size: "L/XL", qty: 1, price: 25, img: null, tone: "navy" },
    ],
    ship: { name: "Jalen Hurts", line1: "123 Main St", line2: "Apt 4B", city: "Surprise", state: "AZ", zip: "85335" },
    timeline: [
      { k: "Order placed", d: "Jan 10, 2026", done: true },
      { k: "Order confirmed", d: "Jan 11, 2026", done: true },
      { k: "Artwork production", d: "Jan 13, 2026", done: true },
      { k: "Factory production", d: "In progress", done: false, active: true },
      { k: "Shipped", d: "Est. Feb 2", done: false },
      { k: "Delivered", d: "Est. Feb 6", done: false },
    ],
  },
  {
    id: "5102", num: "5102", date: "Dec 2, 2025", status: "shipped", total: 80,
    cancelRequested: false,
    items: [
      { pid: "away-jersey", name: "Grizzlies Away Jersey", badge: "required", size: "M", qty: 1, price: 40, img: IMG.jerseyAway, tone: "navy", name2: "Hurts · #15" },
      { pid: "away-shorts", name: "Grizzlies Away Shorts", badge: "required", size: "M", qty: 1, price: 40, img: IMG.shortsAway, tone: "navy" },
    ],
    tracking: "1Z 999 AA1 01 2345 6784",
    ship: { name: "Jalen Hurts", line1: "123 Main St", line2: "Apt 4B", city: "Surprise", state: "AZ", zip: "85335" },
    timeline: [
      { k: "Order placed", d: "Dec 2, 2025", done: true },
      { k: "Order confirmed", d: "Dec 3, 2025", done: true },
      { k: "Artwork production", d: "Dec 5, 2025", done: true },
      { k: "Factory production", d: "Dec 12, 2025", done: true },
      { k: "Shipped", d: "Dec 18, 2025", done: true, active: true },
      { k: "Delivered", d: "Est. Dec 23", done: false },
    ],
  },
  {
    id: "1234", num: "1234", date: "Sep 20, 2025", status: "delivered", total: 0,
    cancelRequested: false,
    items: [
      { pid: "home-jersey", name: "Grizzlies Home Jersey", badge: "supplied", size: "M", qty: 1, price: 0, covered: true, img: IMG.jerseyHome, tone: "grey", name2: "Hurts · #15" },
      { pid: "warmup-pant", name: "Team Warm-up Pant", badge: "supplied", size: "M", qty: 1, price: 0, covered: true, img: IMG.pantsNavy, tone: "navy" },
    ],
    ship: { name: "Jalen Hurts", line1: "123 Main St", line2: "Apt 4B", city: "Surprise", state: "AZ", zip: "85335" },
    timeline: [
      { k: "Order placed", d: "Sep 20, 2025", done: true },
      { k: "Order confirmed", d: "Sep 21, 2025", done: true },
      { k: "Artwork production", d: "Sep 23, 2025", done: true },
      { k: "Factory production", d: "Sep 30, 2025", done: true },
      { k: "Shipped", d: "Oct 6, 2025", done: true },
      { k: "Delivered", d: "Oct 10, 2025", done: true, active: true },
    ],
  },
];

const CANCEL_REASONS = ["Ordered wrong size", "Ordered extra", "Don't want it anymore", "Wrong name on jersey", "Ordered the wrong product"];

// ─────────────── Helpers ───────────────
function getProduct(id) { return PRODUCTS.find((p) => p.id === id); }

// price a product for a given viewer role ("parent" | "player" | "fan")
function priceFor(p, viewer) {
  const isFan = viewer === "fan";
  // fans buy team gear like any other product — full retail, never covered/required
  if (isFan && (p.teamSetting === "supplied" || p.teamSetting === "required")) {
    return { value: p.retail || p.msrp || 0, msrp: p.msrp || null, covered: false };
  }
  // supplied items are always $0 (sizes only) for rostered players
  if (p.teamSetting === "supplied") return { value: 0, msrp: p.msrp, covered: true };
  // required items always pay full retail — prices are never waived for required gear
  if (p.teamSetting === "required") {
    return { value: p.retail, msrp: p.msrp, covered: false };
  }
  // fan gear => full retail for everyone
  return { value: p.retail, msrp: p.msrp || null, covered: false };
}

// what a viewer sees on the home "team gear" rail
function teamGearFor(viewer) {
  if (viewer === "fan") return [];
  return PRODUCTS.filter((p) => p.teamSetting === "required" || p.teamSetting === "supplied");
}
function recommendedFor() { return PRODUCTS.filter((p) => p.rec); }
function fanGearFor() { return PRODUCTS.filter((p) => p.fan); }


// ── Live handoff from the Team Stores Workspace (Zero State demo) ──────────
// Applied ONLY when the storefront is opened with ?demo=1, so every other
// entry point keeps the seeded demo store exactly as it is.
const SF_DEMO = (function () { try { return /[?&]demo=1/.test(window.location.search); } catch (e) { return false; } })();
window.SF_DEMO = SF_DEMO;
(function applyWorkspaceHandoff() {
  if (!SF_DEMO) return;
  let d = null;
  try { d = JSON.parse(window.localStorage.getItem("ts_demo_store_v1") || "null"); } catch (e) {}
  if (!d) return;
  window.SF_DEMO_STORE = d;
  const title = d.title || d.teamName || TEAM.name;
  const short = (d.teamName || title).split(/\s+/)[0];
  Object.assign(TEAM, {
    name: title, short: short,
    season: d.season || (d.deadline ? String(d.deadline).split(", ").pop() + " Season" : TEAM.season),
    mono: String(d.mono || short.slice(0, 1)).toUpperCase(),
    city: d.city || "", sport: d.sport || "",
    deadline: d.deadline || TEAM.deadline,
    org: title, logo: d.logo || null,
    colors: d.colors || null, announcement: d.announcement || "",
  });
  const tier = (v) => v === "team-required" ? "required" : v === "team-supplied" ? "supplied" : "fan";
  const mapped = (d.products || []).map((p) => {
    const t = tier(p.teamSetting);
    return {
      id: p.id, type: "single", name: p.title,
      category: p.category || (t === "fan" ? "Fan Gear" : "Team Gear"),
      sport: d.sport || "", teamSetting: t, covered: t === "supplied",
      due: t === "fan" ? undefined : (d.deadline || undefined),
      sub: p.subtitle || "", img: p.img || null, tone: "navy",
      retail: t === "supplied" ? 0 : (p.retail || 0),
      msrp: p.retail ? Math.round(p.retail * 1.25 * 100) / 100 : undefined,
      personalize: !!p.personalize, sizes: SIZES_APPAREL,
      desc: p.desc || p.subtitle || "",
      rec: false, fan: t === "fan",
    };
  });
  PRODUCTS.length = 0;
  mapped.forEach((p) => PRODUCTS.push(p));
  const cats = [];
  mapped.forEach((p) => { if (!cats.some((c) => c.id === p.category)) cats.push({ id: p.category, label: p.category, desc: "", icon: p.category === "Fan Gear" ? "bag" : "shirt" }); });
  CATEGORIES.length = 0;
  cats.forEach((c) => CATEGORIES.push(c));
  ORDERS.length = 0; // a store this new has no order history yet
})();

Object.assign(window, {
  IMG, TEAM, SIZES_APPAREL, PRODUCTS, CATEGORIES, PLAYERS, ADDRESSES, CARDS, ORDERS, CANCEL_REASONS,
  getProduct, priceFor, teamGearFor, recommendedFor, fanGearFor,
});


/* ===== ASSET 5 : 931f03f5-d6c9-4ba8-b901-24b002bffebc ===== */
// sf-store.jsx — App store: navigation stack, cart, checkout & UI state via context.
// App owns the tweak-driven props (viewer, windowState, emphasis, mode) and passes
// them in; everything else lives here.

// ─────────────── Announcement Message + store theme color ───────────────
// Storefront Announcement Banner spec: rep-authored rich text, all store types,
// persistent (no dismiss), hidden entirely when empty. Theme color applies to
// BUTTONS AND ACCENTS ONLY — background, header, nav, and imagery never change.
const SF_ANNOUNCEMENTS = {
  none: null,
  short: "<p><strong>Orders close Friday, May 22.</strong> Jerseys arrive about 3 weeks after the store closes. Jerseys run small \u2014 most players size up one.</p>",
  long: "<p><strong>Welcome to the Spring 2026 team store!</strong> Orders close <strong>Friday, May 22 at 11:59 PM</strong> \u2014 the mill starts production the following Monday, and gear arrives about 3 weeks after the store closes.</p><ul><li>Jerseys run small \u2014 most players size up one. Check the size chart on each product page.</li><li>All items are custom-made to order, so <strong>no returns or exchanges</strong> on personalized gear.</li><li>Team gear ships free to Coach Daniels and is handed out at practice.</li><li>Fan gear ships year-round and can be returned within 30 days.</li></ul><p>Questions? Use the contact info at the bottom of the store.</p>",
};
const SF_THEMES = {
  team: { label: "Team default", hex: "#1d2b4d" },
  cardinal: { label: "Custom \u00b7 Cardinal", hex: "#9b1b30" },
  kelly: { label: "Custom \u00b7 Kelly Green", hex: "#1f9d55" },
};
// League demo structure. Message + color resolve standalone team \u2192 division \u2192
// store \u2192 absent; teams INSIDE a division carry nothing of their own.
const SF_LEAGUE = {
  name: "Grizzlies Youth Basketball League",
  divisions: [
    { id: "d10", name: "10U Navy", color: "#1d2b4d", colorApplied: false, message: null, teams: ["10U Bears", "10U Wolves"] },
    { id: "d12", name: "12U Maroon", color: "#7c1d2b", colorApplied: true, message: "<p><strong>12U Maroon orders close a week early \u2014 Friday, May 15</strong> \u2014 so uniforms arrive before the Memorial Day tournament. Everything else follows the league store info.</p>", teams: ["12U Grizzlies", "12U Badgers", "12U Hawks"] },
    { id: "d14", name: "14U Gold", color: "#c39b1e", colorApplied: false, message: null, teams: ["14U Eagles", "14U Titans"] },
  ],
  standalone: [
    { id: "hs", name: "High School JV", color: "#0e0e10", colorApplied: false, message: null },
  ],
};
// Sanitizing renderer — rep markup renders formatted; script/embed/handler content is stripped.
function sfSanitize(html) {
  return String(html || "")
    .replace(/<\s*(script|style|iframe|object|embed|link|meta)[^>]*>[\s\S]*?<\s*\/\s*\1\s*>/gi, "")
    .replace(/<\s*(script|style|iframe|object|embed|link|meta)[^>]*\/?>/gi, "")
    .replace(/\son\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")
    .replace(/javascript:/gi, "");
}
function sfTint(hex, a) {
  const h = String(hex || "#000").replace("#", "");
  const f = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  return `rgba(${parseInt(f.slice(0, 2), 16)},${parseInt(f.slice(2, 4), 16)},${parseInt(f.slice(4, 6), 16)},${a})`;
}

const SFStoreContext = React.createContext(null);
const useStore = () => React.useContext(SFStoreContext);

function SFStoreProvider({ viewer, windowState, emphasis, bypassPassword, approvalRequired, mode, schedule = "popup", storeType = "single", announcement = "none", themeChoice = "team", children }) {
  const { useState, useCallback, useMemo } = React;

  const [route, setRoute] = useState({ screen: storeType === "league" ? "landing" : "invite", params: {} });
  // League team selector resolution (Roster-Optional Epic D) — null = no team
  // selected (fan browsing league-wide), a supported state, not an error.
  const [selTeam, setSelTeam] = useState(null);
  const [history, setHistory] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartModal, setCartModal] = useState(null);      // { items:[...] } after add-to-cart
  const [menuOpen, setMenuOpen] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState(null);
  const [checkoutStep, setCheckoutStep] = useState(1);
  const [selAddress, setSelAddress] = useState("a1");
  const [selCard, setSelCard] = useState("c1");
  const [lastOrder, setLastOrder] = useState(null);
  const [orders, setOrders] = useState(() => ORDERS.map((o) => ({ ...o })));
  // Risk-tiered gate (Epic D): identity captured at checkout when the cart
  // holds team gear. Guest email covers fan-only carts (magic-link comms).
  const [teamAccess, setTeamAccess] = useState(null); // {code, player, email, phone, optIn}
  const [guestEmail, setGuestEmail] = useState("");

  const go = useCallback((screen, params = {}) => {
    setRoute((cur) => { setHistory((h) => [...h, cur]); return { screen, params }; });
    setMenuOpen(false);
    if (typeof window !== "undefined") {
      const c = document.querySelector(".sf-scroll-" + mode);
      if (c) c.scrollTop = 0;
    }
  }, [mode]);

  const back = useCallback(() => {
    setHistory((h) => {
      if (!h.length) return h;
      const prev = h[h.length - 1];
      setRoute(prev);
      return h.slice(0, -1);
    });
  }, []);

  const resetTo = useCallback((screen) => { setRoute({ screen, params: {} }); setHistory([]); setMenuOpen(false); }, []);

  // Flipping store type restarts the flow at the right entry (league → landing).
  React.useEffect(() => { setSelTeam(null); resetTo(storeType === "league" ? "landing" : "invite"); }, [storeType]);

  const toast = useCallback((msg) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2400);
  }, []);

  const addToCart = useCallback((items, bundleLabel) => {
    setCart((c) => [...c, ...items]);
    setCartModal({ items, bundleLabel });
  }, []);

  const removeFromCart = useCallback((uid) => setCart((c) => c.filter((i) => i.uid !== uid)), []);
  const setQty = useCallback((uid, q) => setCart((c) => c.map((i) => i.uid === uid ? { ...i, qty: Math.max(1, q) } : i)), []);

  const cartCount = useMemo(() => cart.reduce((n, i) => n + i.qty, 0), [cart]);
  const cartTotals = useMemo(() => {
    let subtotal = 0, contributions = 0;
    cart.forEach((i) => {
      const line = i.price * i.qty;
      if (i.covered) contributions += (i.msrp || i.retailRef || 0) * i.qty;
      else subtotal += line;
    });
    const shipping = 0;
    const tax = +(subtotal * 0.0775).toFixed(2);
    return { subtotal: +subtotal.toFixed(2), contributions: +contributions.toFixed(2), shipping, tax, total: +(subtotal + tax + shipping).toFixed(2) };
  }, [cart]);

  const placeOrder = useCallback(() => {
    const num = String(6600 + Math.floor(Math.random() * 300));
    const teamItems = cart.filter((i) => i.badge === "required" || i.badge === "supplied");
    const pendingApproval = !!approvalRequired && cart.some((i) => i.badge === "supplied");
    const email = (teamAccess && teamAccess.email) || guestEmail || "";
    const order = {
      id: num, num, date: "Jul 28, 2026", status: pendingApproval ? "approval" : "processing",
      pendingApproval, email, guest: true,
      teamCode: teamAccess ? teamAccess.code : null, orderFor: teamAccess ? teamAccess.player : null,
      total: cartTotals.total, cancelRequested: false,
      items: cart.map((i) => ({ pid: i.pid, name: i.name, name2: i.personalization && i.personalization.name ? (i.personalization.name + (i.personalization.number ? " · #" + i.personalization.number : "")) : null, badge: i.badge, size: i.size, qty: i.qty, price: i.price, covered: i.covered, img: i.img, tone: i.tone })),
      ship: ADDRESSES.find((a) => a.id === selAddress),
      timeline: [
        { k: pendingApproval ? "Sent for team approval" : "Order placed", d: "Jul 28, 2026", done: true, active: true },
        { k: "Order confirmed", d: "Pending", done: false },
        { k: "Artwork production", d: "Pending", done: false },
        { k: "Factory production", d: "Pending", done: false },
        { k: "Shipped", d: "Pending", done: false },
        { k: "Delivered", d: "Pending", done: false },
      ],
    };
    // Consent-gated capture → the workspace bank zone (Epic C). Team-gear items
    // only, and only when the buyer opted in at the gate. Fan gear never captures;
    // declining still fulfills the order — it just creates no roster capture.
    if (teamAccess && teamAccess.optIn && teamItems.length) {
      try {
        const key = "prolook_bank_captures_v1";
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        const a = ADDRESSES.find((x) => x.id === selAddress);
        prev.push({
          id: "cap-" + Date.now(), player: teamAccess.player, email: teamAccess.email, phone: teamAccess.phone,
          code: teamAccess.code, order: num, date: "Jul 28, 2026",
          address: a ? `${a.line1}, ${a.city}, ${a.state} ${a.zip}` : "",
          items: teamItems.map((i) => ({ item: i.name, tier: i.badge === "supplied" ? "team-supplied" : "team-required", size: i.size, jersey: (i.personalization && i.personalization.number) || "", nameOnJersey: (i.personalization && i.personalization.name) || "" })),
        });
        localStorage.setItem(key, JSON.stringify(prev));
      } catch (e) {}
    }
    // Zero State demo bridge — the workspace Orders tab reads this back.
    if (window.SF_DEMO) {
      try {
        const key = "ts_demo_orders_v1";
        const prev = JSON.parse(localStorage.getItem(key) || "[]");
        const ds = window.SF_DEMO_STORE || {};
        prev.push({
          storeId: ds.id || null, num, date: order.date, status: order.status,
          total: order.total, email, player: order.orderFor || null, teamCode: order.teamCode || null,
          ship: order.ship || null,
          items: order.items.map((i) => ({ pid: i.pid, name: i.name, size: i.size, qty: i.qty, price: i.price, badge: i.badge })),
        });
        localStorage.setItem(key, JSON.stringify(prev));
      } catch (e) {}
    }
    setLastOrder(order);
    setOrders((o) => [order, ...o]);
    setCart([]);
    setCheckoutStep(1);
    setTeamAccess(null);
    setRoute({ screen: "confirm", params: {} });
    setHistory([]);
  }, [cart, cartTotals, selAddress, teamAccess, guestEmail, approvalRequired]);

  const requestCancel = useCallback((orderId) => {
    setOrders((os) => os.map((o) => o.id === orderId ? { ...o, status: "cancel", cancelRequested: true } : o));
  }, []);

  // Always-On Locker stores have no ordering window, so no window banner state.
  const effWindow = schedule === "always" ? "none" : windowState;

  // Announcement resolution: standalone team's own message → division's message →
  // store-level → absent. Teams inside a division inherit their division.
  const announcementHtml = useMemo(() => {
    if (storeType === "league" && selTeam) {
      const src = selTeam.standalone
        ? SF_LEAGUE.standalone.find((s) => s.id === selTeam.divId)
        : SF_LEAGUE.divisions.find((d) => d.id === selTeam.divId);
      if (src && src.message) return src.message;
    }
    return SF_ANNOUNCEMENTS[announcement] || null;
  }, [storeType, selTeam, announcement]);

  // Theme color: same resolution order. A division's contribution is its
  // EXISTING brand color (My Team(s)) — applied only when the rep toggled it on.
  const theme = useMemo(() => {
    if (storeType === "league" && selTeam) {
      const src = selTeam.standalone
        ? SF_LEAGUE.standalone.find((s) => s.id === selTeam.divId)
        : SF_LEAGUE.divisions.find((d) => d.id === selTeam.divId);
      if (src && src.colorApplied) return src.color;
    }
    return (SF_THEMES[themeChoice] || SF_THEMES.team).hex;
  }, [storeType, selTeam, themeChoice]);

  const value = {
    viewer, windowState: effWindow, emphasis, bypassPassword, mode,
    schedule, storeType, theme, announcementHtml,
    selTeam, selectTeam: setSelTeam,
    route, go, back, resetTo,
    cart, cartCount, cartTotals, addToCart, removeFromCart, setQty,
    cartModal, setCartModal,
    menuOpen, setMenuOpen, filterOpen, setFilterOpen,
    toastMsg, toast,
    checkoutStep, setCheckoutStep, selAddress, setSelAddress, selCard, setSelCard,
    placeOrder, lastOrder, orders, requestCancel,
    teamAccess, setTeamAccess, guestEmail, setGuestEmail, approvalRequired,
  };
  return <SFStoreContext.Provider value={value}>{children}</SFStoreContext.Provider>;
}

Object.assign(window, { SFStoreContext, useStore, SFStoreProvider });


/* ===== ASSET 6 : 84348198-403b-4bc1-911d-9df8d4ab250c ===== */
// sf-components.jsx — Shared storefront chrome & reusable pieces.
// Reuses the PROLOOK icon set (icons.jsx) + storefront atoms (sf-theme.jsx).

const { useState: useS2, useEffect: useE2, useRef: useR2 } = React;

// ── extra inline icons not in the admin set ──
const SFIcon = ({ d, size = 22, sw = 1.7, fill = "none", style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={fill} stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" style={style}>
    {Array.isArray(d) ? d.map((p, i) => <path key={i} d={p} />) : <path d={d} />}
  </svg>
);
const IconMenu = (p) => <SFIcon {...p} d={["M3 6h18", "M3 12h18", "M3 18h18"]} />;
const IconHomeNav = (p) => <SFIcon {...p} d={["M3 11l9-8 9 8", "M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"]} />;
const IconBagNav = (p) => <SFIcon {...p} d={["M6 8a6 6 0 1 1 12 0", "M4 8h16l-1.2 12.1a2 2 0 0 1-2 1.9H7.2a2 2 0 0 1-2-1.9L4 8z"]} />;
const IconMinus = (p) => <SFIcon {...p} d={["M5 12h14"]} />;
const IconHash = (p) => <SFIcon {...p} d={["M9 3L7 21", "M17 3l-2 18", "M3.5 8.5h17", "M3 15.5h17"]} />;
const IconTruck = (p) => <SFIcon {...p} d={["M3 6a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v9H3V6z", "M15 9h3.5l2.5 3v3H15", "M7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z", "M18 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"]} />;
const IconRepeat = (p) => <SFIcon {...p} d={["M17 2l4 4-4 4", "M3 11V9a4 4 0 0 1 4-4h14", "M7 22l-4-4 4-4", "M21 13v2a4 4 0 0 1-4 4H3"]} />;
const IconHeadset = (p) => <SFIcon {...p} d={["M4 13a8 8 0 0 1 16 0", "M4 13v3a2 2 0 0 0 2 2h1v-6H6a2 2 0 0 0-2 1z", "M20 13v3a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 1z", "M12 21h2"]} />;
const IconLogout = (p) => <SFIcon {...p} d={["M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", "M16 17l5-5-5-5", "M21 12H9"]} />;

// ─────────────── Mobile store header (black bar) ───────────────
function SFMobileHeader({ title, leading = "menu", trailing = "cart" }) {
  const { go, back, setMenuOpen, cartCount, resetTo } = useStore();
  const iconBtn = { width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", background: "none", border: 0, borderRadius: 10 };
  return (
    <header style={{ background: SF.ink, color: "#fff", paddingTop: 52, paddingBottom: 12, paddingLeft: 8, paddingRight: 8, flexShrink: 0, position: "relative", zIndex: 20 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {leading === "menu" ? (
          <button className="sf-tap" style={iconBtn} onClick={() => setMenuOpen(true)} aria-label="Menu"><IconMenu size={23} /></button>
        ) : (
          <button className="sf-tap" style={iconBtn} onClick={back} aria-label="Back"><IconChevronLeft size={24} /></button>
        )}
        {title ? (
          <span className="sf-display sf-up" style={{ fontSize: 14, fontWeight: 800, letterSpacing: ".11em" }}>{title}</span>
        ) : (
          <button className="sf-tap" onClick={() => resetTo("home")} style={{ background: "none", border: 0, display: "flex", alignItems: "center", gap: 8 }}>
            <SFCrest size={30} color="#fff" ink={SF.navy} />
            <span className="sf-display sf-up" style={{ color: "#fff", fontSize: 13, fontWeight: 800, letterSpacing: ".1em" }}>{TEAM.short}</span>
          </button>
        )}
        {trailing === "cart" ? <SFCartButton dark onClick={() => go("cart")} /> : <span style={{ width: 40 }} />}
      </div>
    </header>
  );
}

function SFCartButton({ dark, onClick }) {
  const { cartCount } = useStore();
  return (
    <button className="sf-tap" onClick={onClick} aria-label="Cart" style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", position: "relative", color: dark ? "#fff" : SF.ink, background: "none", border: 0 }}>
      <IconCart size={22} stroke={1.8} />
      {cartCount > 0 && (
        <span className="sf-mono" style={{ position: "absolute", top: 4, right: 2, minWidth: 16, height: 16, padding: "0 4px", borderRadius: 999, background: SF.red, color: "#fff", fontSize: 9.5, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}>{cartCount}</span>
      )}
    </button>
  );
}

// ─────────────── Desktop header ───────────────
function SFDesktopHeader() {
  const { go, resetTo, route, viewer, cartCount } = useStore();
  const tab = route.screen;
  const links = [
    { id: "home", label: "Home", to: () => resetTo("home") },
    { id: "orders", label: "Orders", to: () => go("orders") },
  ];
  return (
    <header style={{ background: SF.ink, color: "#fff", height: 68, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", flexShrink: 0, position: "sticky", top: 0, zIndex: 30 }}>
      <button className="sf-tap" onClick={() => resetTo("home")} style={{ background: "none", border: 0, display: "flex", alignItems: "center", gap: 12 }}>
        <SFCrest size={34} color="#fff" ink={SF.navy} />
        <span style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", lineHeight: 1.1 }}>
          <span className="sf-display sf-up" style={{ color: "#fff", fontSize: 15, fontWeight: 800, letterSpacing: ".08em" }}>{TEAM.short} Team Store</span>
          <span className="sf-mono" style={{ color: "rgba(255,255,255,.55)", fontSize: 9.5, letterSpacing: ".12em", textTransform: "uppercase" }}>{TEAM.season}</span>
        </span>
      </button>
      <nav style={{ display: "flex", alignItems: "center", gap: 36 }}>
        {links.map((l) => {
          const on = (l.id === "collection" && tab === "collection") || tab === l.id;
          return (
            <button key={l.id} className="sf-tap" onClick={l.to} style={{ background: "none", border: 0, color: on ? "#fff" : "rgba(255,255,255,.62)", fontFamily: SF.display, fontWeight: 800, fontSize: 13, letterSpacing: ".09em", textTransform: "uppercase", position: "relative", padding: "8px 0" }}>
              {l.label}
              {on && <span style={{ position: "absolute", left: 0, right: 0, bottom: -2, height: 2, background: SF.red, borderRadius: 2 }} />}
            </button>
          );
        })}
      </nav>
      <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <button className="sf-tap" onClick={() => go("profile")} style={{ background: "none", border: 0, color: "#fff", display: "flex", alignItems: "center", gap: 8 }}>
          <IconUser size={20} stroke={1.7} />
          <span style={{ fontSize: 13.5, fontWeight: 600 }}>{viewer === "fan" ? "Account" : "Jalen"}</span>
        </button>
        <SFCartButton dark onClick={() => go("cart")} />
      </div>
    </header>
  );
}

// ─────────────── Bottom nav (mobile) ───────────────
function SFBottomNav() {
  const { route, resetTo, go, cartCount } = useStore();
  const screen = route.screen;
  const items = [
    { id: "home", label: "Home", icon: IconHomeNav, on: ["home"], act: () => resetTo("home") },
    { id: "shop", label: "Shop", icon: IconBagNav, on: ["collection", "pdp", "bundle"], act: () => go("collection", { category: null }) },
    { id: "cart", label: "Cart", icon: IconCart, on: ["cart", "checkout"], act: () => go("cart"), badge: cartCount },
    { id: "profile", label: "Profile", icon: IconUser, on: ["profile", "orders", "orderDetail"], act: () => go("profile") },
  ];
  return (
    <nav style={{ flexShrink: 0, background: "#fff", borderTop: `1px solid ${SF.line}`, display: "flex", paddingBottom: 16, paddingTop: 8, boxShadow: SF.shadowUp }}>
      {items.map((it) => {
        const on = it.on.includes(screen);
        const Ico = it.icon;
        return (
          <button key={it.id} className="sf-tap" onClick={it.act} style={{ flex: 1, background: "none", border: 0, display: "flex", flexDirection: "column", alignItems: "center", gap: 4, color: on ? SF.ink : SF.muted2, position: "relative" }}>
            <span style={{ position: "relative" }}>
              <Ico size={23} stroke={on ? 2 : 1.7} />
              {it.badge > 0 && <span className="sf-mono" style={{ position: "absolute", top: -4, right: -8, minWidth: 16, height: 16, padding: "0 4px", borderRadius: 999, background: SF.red, color: "#fff", fontSize: 9, fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center" }}>{it.badge}</span>}
            </span>
            <span className="sf-mono" style={{ fontSize: 9, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase" }}>{it.label}</span>
            {on && <span style={{ position: "absolute", top: -8, width: 24, height: 4, borderRadius: 3, background: SF.ink }} />}
          </button>
        );
      })}
    </nav>
  );
}

// ─────────────── Menu drawer ───────────────
function SFMenuDrawer() {
  const { menuOpen, setMenuOpen, go, resetTo, viewer } = useStore();
  if (!menuOpen) return null;
  const item = (Ico, label, fn) => (
    <button className="sf-tap" onClick={() => { setMenuOpen(false); fn(); }} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 4px", border: 0, borderBottom: `1px solid ${SF.line2}`, background: "none", width: "100%", textAlign: "left", fontSize: 15.5, fontWeight: 600, color: SF.ink }}>
      <Ico size={21} stroke={1.7} style={{ color: SF.muted }} /> {label}
    </button>
  );
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 80, display: "flex", flexDirection: "column" }}>
      <div onClick={() => setMenuOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(16,16,20,.4)", animation: "sfOverlay .2s ease" }} />
      <div style={{ position: "relative", background: "#fff", width: "82%", maxWidth: 320, height: "100%", boxShadow: "8px 0 40px rgba(0,0,0,.2)", animation: "sfRise .25s ease", display: "flex", flexDirection: "column" }}>
        <div style={{ background: SF.ink, color: "#fff", padding: "56px 24px 24px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <SFCrest size={42} color="#fff" ink={SF.navy} />
            <div>
              <div className="sf-display" style={{ fontSize: 17, fontWeight: 800 }}>{TEAM.name}</div>
              <div className="sf-mono" style={{ fontSize: 10, color: "rgba(255,255,255,.6)", letterSpacing: ".1em", textTransform: "uppercase", marginTop: 4 }}>{TEAM.season}</div>
            </div>
          </div>
        </div>
        <div style={{ padding: "12px 24px", flex: 1, overflowY: "auto" }}>
          {item(IconHomeNav, "Home", () => resetTo("home"))}
          {item(IconBagNav, "Shop All", () => go("collection", { category: null }))}
          {item(IconUser, "Profile", () => go("profile"))}
          {item(IconReceipt, "Order History", () => go("orders"))}
          {item(IconHeadset, "Support", () => {})}
          <button className="sf-tap" onClick={() => { setMenuOpen(false); resetTo("invite"); }} style={{ display: "flex", alignItems: "center", gap: 16, padding: "16px 4px", border: 0, background: "none", width: "100%", textAlign: "left", fontSize: 15.5, fontWeight: 600, color: SF.red, marginTop: 8 }}>
            <IconLogout size={21} stroke={1.7} /> Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

// ─────────────── Search bar ───────────────
function SFSearchBar({ withFilter = true, placeholder = "Search the Team Store" }) {
  const { go, setFilterOpen } = useStore();
  return (
    <div style={{ display: "flex", gap: 12 }}>
      <button className="sf-tap" onClick={() => go("collection", { category: null })} style={{ flex: 1, display: "flex", alignItems: "center", gap: 12, background: SF.soft, border: `1px solid ${SF.field}`, borderRadius: 4, padding: "12px 16px", color: SF.muted2, fontSize: 14.5, textAlign: "left" }}>
        <IconSearch size={19} stroke={1.8} style={{ color: SF.muted }} /> {placeholder}
      </button>
      {withFilter && (
        <button className="sf-tap" onClick={() => setFilterOpen(true)} aria-label="Filters" style={{ width: 52, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", border: `1px solid ${SF.field}`, borderRadius: 4, color: SF.ink }}>
          <IconSliders size={21} stroke={1.8} />
        </button>
      )}
    </div>
  );
}

// ─────────────── Size grid ───────────────
function SFSizeGrid({ sizes, value, onChange, cols }) {
  const c = cols || (sizes.length <= 3 ? sizes.length : 7);
  return (
    <div style={{ display: "grid", gridTemplateColumns: `repeat(${Math.min(c, sizes.length)}, 1fr)`, gap: 8 }}>
      {sizes.map((s) => {
        const on = value === s;
        return (
          <button key={s} className="sf-press" onClick={() => onChange(s)} style={{
            padding: "12px 4px", borderRadius: 4, border: `1px solid ${on ? SF.ink : SF.field}`,
            background: on ? SF.ink : "#fff", color: on ? "#fff" : SF.ink,
            fontFamily: SF.display, fontWeight: 700, fontSize: 13, cursor: "pointer", transition: "all .12s",
          }}>{s}</button>
        );
      })}
    </div>
  );
}

// ─────────────── Quantity stepper ───────────────
function SFQty({ value, onChange, size = 34 }) {
  const btn = { width: size, height: size, display: "flex", alignItems: "center", justifyContent: "center", border: `1px solid ${SF.field}`, background: "#fff", borderRadius: 4, color: SF.ink };
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <button className="sf-press" style={{ ...btn, opacity: value <= 1 ? 0.4 : 1 }} onClick={() => onChange(Math.max(1, value - 1))} aria-label="Decrease"><IconMinus size={16} /></button>
      <span className="sf-display" style={{ minWidth: 24, textAlign: "center", fontSize: 15, fontWeight: 800 }}>{value}</span>
      <button className="sf-press" style={btn} onClick={() => onChange(value + 1)} aria-label="Increase"><IconPlus size={16} /></button>
    </div>
  );
}

// ─────────────── Toast ───────────────
function SFToast() {
  const { toastMsg } = useStore();
  if (!toastMsg) return null;
  return (
    <div style={{ position: "absolute", bottom: 92, left: "50%", transform: "translateX(-50%)", zIndex: 95, background: SF.ink, color: "#fff", padding: "12px 16px", borderRadius: 11, fontSize: 13.5, fontWeight: 600, display: "flex", alignItems: "center", gap: 8, boxShadow: SF.shadowPop, animation: "sfPop .22s ease", whiteSpace: "nowrap" }}>
      <IconCircleCheck size={18} style={{ color: "#54e08a" }} /> {toastMsg}
    </div>
  );
}

Object.assign(window, {
  SFIcon, IconMenu, IconHomeNav, IconBagNav, IconMinus, IconHash, IconTruck, IconRepeat, IconHeadset, IconLogout,
  SFMobileHeader, SFCartButton, SFDesktopHeader, SFBottomNav, SFMenuDrawer, SFSearchBar, SFSizeGrid, SFQty, SFToast,
});


/* ===== ASSET 7 : 6190a6f5-81ae-4132-9a88-ef3401d827b8 ===== */
// sf-cards.jsx — Product cards, priority team-gear cards, category cards,
// add-to-cart modal, and the filter drawer.

const { useState: useS3 } = React;

// bundle / product price resolution for cards
function cardPrice(p, viewer) {
  if (p.type === "bundle") {
    const msrp = p.items.reduce((s, it) => s + (it.msrp || it.retail), 0);
    if (p.teamSetting === "supplied") return { value: 0, msrp, covered: true };
    const value = p.items.reduce((s, it) => s + it.retail, 0);
    return { value, msrp, covered: false };
  }
  return priceFor(p, viewer);
}

// thumbnail icon for category
function catIcon(kind, size = 22) {
  const m = { shirt: IconShirt, bag: IconBag, briefcase: IconBriefcase, store: IconStore };
  const I = m[kind] || IconBag;
  return <I size={size} stroke={1.7} />;
}

// ─────────────── Priority team-gear card (Required / Supplied) ───────────────
function SFTeamGearCard({ p, wide }) {
  const { go, viewer } = useStore();
  const pr = cardPrice(p, viewer);
  const open = () => go(p.type === "bundle" ? "bundle" : "pdp", { id: p.id });
  return (
    <div className="sf-card-hover" style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: SF.radius, overflow: "hidden", display: "flex", flexDirection: "column", width: "100%" }}>
      <div style={{ position: "relative" }}>
        <SFProductImg src={p.img} tone={p.tone} label={p.name} radius={0} ratio={wide ? "4 / 3" : "1 / 1"} pad="9%" />
        <div style={{ position: "absolute", top: 12, left: 12, display: "flex", gap: 8 }}>
          <SFBadge kind={p.teamSetting === "supplied" ? "supplied" : "required"} />
        </div>
        {p.due && p.teamSetting === "required" && (
          <span className="sf-mono" style={{ position: "absolute", top: 12, right: 12, background: "rgba(16,16,20,.82)", color: "#fff", fontSize: 9.5, fontWeight: 700, padding: "4px 8px", borderRadius: 6, letterSpacing: ".05em", display: "inline-flex", alignItems: "center", gap: 4 }}>
            <IconClock size={12} /> DUE {p.due.toUpperCase()}
          </span>
        )}
      </div>
      <div style={{ padding: "16px 16px 16px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div className="sf-display" style={{ fontSize: 16, fontWeight: 800, letterSpacing: "-.01em" }}>{p.name}</div>
        <div style={{ fontSize: 12, color: SF.muted, marginTop: 2 }}>{p.sub}</div>
        <div style={{ marginTop: 8 }}><SFPrice value={pr.value} msrp={pr.msrp} covered={pr.covered} size={17} /></div>

        {p.type === "bundle" && (
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginTop: 12 }}>
            {p.items.map((it) => (
              <div key={it.id} style={{ display: "flex", alignItems: "center", gap: 12, border: `1px solid ${SF.line}`, borderRadius: 10, padding: "8px 12px" }}>
                <SFProductImg src={it.img} tone={it.tone} label={it.name} radius={7} ratio="1 / 1" pad="6%" style={{ width: 36, height: 36, flexShrink: 0 }} />
                <span style={{ fontSize: 12.5, fontWeight: 600 }}>{it.name}</span>
              </div>
            ))}
          </div>
        )}
        <div style={{ flex: 1 }} />
        <SFButton onClick={open} full size="md" style={{ marginTop: 16 }}>
          {p.type === "bundle" || p.personalize ? "Configure & Add" : "Select Size & Add"}
        </SFButton>
      </div>
    </div>
  );
}

// ─────────────── 4 — store-curated categories → storefront tabs ───────────────
// The rep's Categories & Sorting panel produces exactly this: tab order, product
// order inside a tab, pinned items first, and a featured item per category.
// Team Gear stays system-managed and keeps its required-gear behavior.
const SF_CAT_CFG = {
  order: ["Team Gear", "Uniforms", "Coaches & Staff", "Fan Gear", "Accessories"],
  pins: ["home-kit", "away-kit"],
  feat: ["training-hoodie"],
  prodOrder: {
    "Fan Gear": ["training-hoodie", "fan-hoodie", "fan-tee", "fan-cap", "fan-beanie"],
    Accessories: ["team-backpack", "water-bottle"],
  },
};
function sfCatOf(p) {
  if (p.teamSetting === "required" || p.teamSetting === "supplied") return "Team Gear";
  return p.category || "Fan Gear";
}
function sfCatList() {
  const used = Array.from(new Set(PRODUCTS.map(sfCatOf)));
  const ordered = SF_CAT_CFG.order.filter((c) => used.includes(c));
  return ordered.concat(used.filter((c) => !ordered.includes(c)));
}
function sfCatProducts(cat) {
  const ord = SF_CAT_CFG.prodOrder[cat] || [];
  return PRODUCTS.filter((p) => sfCatOf(p) === cat).slice().sort((a, b) => {
    const pa = SF_CAT_CFG.pins.includes(a.id) ? 0 : 1, pb = SF_CAT_CFG.pins.includes(b.id) ? 0 : 1;
    if (pa !== pb) return pa - pb;
    const ia = ord.indexOf(a.id), ib = ord.indexOf(b.id);
    return (ia < 0 ? 99 : ia) - (ib < 0 ? 99 : ib);
  });
}

// ─────────────── Standard product card ───────────────
function SFProductCard({ p, compact }) {
  const { go, viewer } = useStore();
  const pr = cardPrice(p, viewer);
  const open = () => go(p.type === "bundle" ? "bundle" : "pdp", { id: p.id });
  // 4 — featured changes emphasis only; pinning is what changes position.
  const featured = SF_CAT_CFG.feat.includes(p.id);
  // fans see team gear as ordinary products — no required/supplied badge
  const badgeKind = viewer === "fan" ? null : (p.teamSetting === "required" ? "required" : p.teamSetting === "supplied" ? "supplied" : null);
  return (
    <button className="sf-card-hover sf-tap" onClick={open} style={{ background: "#fff", border: `1px solid ${featured ? SF.required : SF.line}`, borderRadius: 13, overflow: "hidden", textAlign: "left", padding: 0, display: "flex", flexDirection: "column", width: "100%", cursor: "pointer", boxShadow: featured ? "0 6px 20px rgba(217,83,79,.13)" : "none" }}>
      <div style={{ position: "relative" }}>
        <SFProductImg src={p.img} tone={p.tone} label={p.name} radius={0} ratio="1 / 1" pad="11%" />
        {badgeKind && <div style={{ position: "absolute", top: 12, left: 12 }}><SFBadge kind={badgeKind} /></div>}
        {featured && <div className="sf-mono" style={{ position: "absolute", top: 12, right: 12, fontSize: 8.5, fontWeight: 800, letterSpacing: ".08em", color: "#fff", background: SF.required, borderRadius: 4, padding: "3px 7px" }}>FEATURED</div>}
      </div>
      <div style={{ padding: compact ? "11px 12px 13px" : "13px 14px 15px", display: "flex", flexDirection: "column", gap: 4, flex: 1 }}>
        <div className="sf-display" style={{ fontSize: compact ? 13.5 : 14.5, fontWeight: 700, letterSpacing: "-.01em", lineHeight: 1.2 }}>{p.name}</div>
        <div style={{ fontSize: 11.5, color: SF.muted }}>{p.sub}</div>
        <div style={{ marginTop: 4 }}><SFPrice value={pr.value} msrp={pr.msrp} covered={pr.covered} size={14.5} /></div>
      </div>
    </button>
  );
}

// ─────────────── Category card ───────────────
function SFCategoryCard({ cat }) {
  const { go } = useStore();
  return (
    <button className="sf-card-hover sf-tap" onClick={() => go("collection", { category: cat.id })} style={{ display: "flex", alignItems: "center", gap: 16, width: "100%", background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 13, padding: "16px 16px", textAlign: "left", cursor: "pointer" }}>
      <span style={{ width: 44, height: 44, borderRadius: 11, background: SF.navySoft, color: SF.navy, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{catIcon(cat.icon, 23)}</span>
      <span style={{ flex: 1 }}>
        <span className="sf-display" style={{ display: "block", fontSize: 14.5, fontWeight: 700 }}>{cat.label}</span>
        <span style={{ display: "block", fontSize: 12, color: SF.muted, marginTop: 1 }}>{cat.desc}</span>
      </span>
      <IconChevronRight size={20} style={{ color: SF.muted2 }} />
    </button>
  );
}

// ─────────────── Add-to-cart modal ───────────────
function SFCartModal() {
  const { cartModal, setCartModal, go, viewer } = useStore();
  if (!cartModal) return null;
  const items = cartModal.items;
  const close = () => setCartModal(null);
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 90, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={close} style={{ position: "absolute", inset: 0, background: "rgba(16,16,20,.45)", animation: "sfOverlay .2s ease" }} />
      <div style={{ position: "relative", background: "#fff", width: "100%", borderRadius: "20px 20px 0 0", padding: "8px 20px 24px", animation: "sfSheetUp .28s cubic-bezier(.2,.8,.2,1)", maxHeight: "88%", display: "flex", flexDirection: "column" }}>
        <div style={{ width: 40, height: 4, borderRadius: 4, background: SF.line, margin: "8px auto 16px" }} />
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
          <span style={{ width: 28, height: 28, borderRadius: 999, background: SF.coveredBg, color: SF.covered, display: "flex", alignItems: "center", justifyContent: "center" }}><IconCheck size={16} stroke={3} /></span>
          <span className="sf-display sf-up" style={{ fontSize: 14, fontWeight: 800, letterSpacing: ".06em" }}>Added to Cart</span>
        </div>
        <div style={{ overflowY: "auto", display: "flex", flexDirection: "column", gap: 12, marginBottom: 16 }}>
          {items.map((i) => (
            <div key={i.uid} style={{ display: "flex", gap: 12, alignItems: "center" }}>
              <SFProductImg src={i.img} tone={i.tone} label={i.name} radius={9} ratio="1 / 1" pad="8%" style={{ width: 56, height: 56, flexShrink: 0 }} />
              <div style={{ flex: 1, minWidth: 0 }}>
                <div className="sf-display" style={{ fontSize: 13.5, fontWeight: 700 }}>{i.name}</div>
                {i.playerLabel && <div className="sf-mono sf-up" style={{ fontSize: 9, fontWeight: 700, color: SF.navy, letterSpacing: ".08em", marginTop: 4 }}>{i.playerLabel}</div>}
                <div className="sf-mono" style={{ fontSize: 10.5, color: SF.muted, marginTop: 4, letterSpacing: ".04em" }}>SIZE {i.size} · QTY {i.qty}{i.personalization && i.personalization.name ? " · " + i.personalization.name.toUpperCase() : ""}</div>
                <div style={{ marginTop: 4 }}>{i.badge && <SFBadge kind={i.badge} />}</div>
              </div>
              <div className="sf-display" style={{ fontWeight: 800, fontSize: 13.5, color: i.covered ? SF.covered : SF.ink }}>{i.covered ? "$0.00" : "$" + (i.price * i.qty).toFixed(2)}</div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <SFButton variant="primary" full onClick={() => { close(); go("checkout"); }}>Checkout</SFButton>
          <SFButton variant="light" full onClick={() => { close(); go("cart"); }}>View Cart</SFButton>
          <button className="sf-tap" onClick={close} style={{ background: "none", border: 0, color: SF.muted, fontSize: 13, fontWeight: 600, padding: "8px 0" }}>Continue Shopping</button>
        </div>
      </div>
    </div>
  );
}

// ─────────────── Filter drawer ───────────────
const FILTER_GROUPS = [
  { id: "general", label: "General", value: "All", opts: ["All", "New Arrivals", "On Sale", "Team Issued"] },
  { id: "gender", label: "Gender", value: "Men/Boys", opts: ["All", "Men/Boys", "Women/Girls"], expandable: true },
  { id: "sport", label: "Sport", value: "Basketball", opts: ["All", "Basketball", "Baseball", "Soccer"] },
  { id: "decoration", label: "Decoration", value: "All", opts: ["All", "Sublimation", "Embroidery", "Screen Print"] },
  { id: "category", label: "Category", value: "All", opts: ["All", "Uniforms", "Fan Gear", "Accessories", "Equipment"], expandable: true },
  { id: "neckline", label: "Neckline", value: "All", opts: ["All", "Crew", "V-Neck", "Scoop"] },
  { id: "line", label: "Product Line", value: "Quickturn", opts: ["All", "Quickturn", "Pro", "Elite"] },
  { id: "sleeve", label: "Sleeve Length", value: "All", opts: ["All", "Sleeveless", "Short", "Long"] },
];

function SFFilterDrawer() {
  const { filterOpen, setFilterOpen } = useStore();
  const [vals, setVals] = useS3(() => Object.fromEntries(FILTER_GROUPS.map((g) => [g.id, g.value])));
  const [openId, setOpenId] = useS3("gender");
  if (!filterOpen) return null;
  const reset = () => setVals(Object.fromEntries(FILTER_GROUPS.map((g) => [g.id, "All"])));
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 88, display: "flex", flexDirection: "column" }}>
      <div onClick={() => setFilterOpen(false)} style={{ position: "absolute", inset: 0, background: "rgba(16,16,20,.45)", animation: "sfOverlay .2s ease" }} />
      <div style={{ position: "relative", marginTop: "auto", background: "#fff", borderRadius: "20px 20px 0 0", maxHeight: "90%", display: "flex", flexDirection: "column", animation: "sfSheetUp .3s cubic-bezier(.2,.8,.2,1)" }}>
        <div style={{ padding: "16px 20px 12px", borderBottom: `1px solid ${SF.line2}` }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <span className="sf-display sf-up" style={{ fontSize: 16, fontWeight: 800, letterSpacing: ".04em" }}>Filter</span>
            <button className="sf-tap" onClick={() => setFilterOpen(false)} style={{ background: "none", border: 0, color: SF.ink }}><IconX size={22} /></button>
          </div>
          <div style={{ display: "flex", gap: 12 }}>
            <SFButton variant="light" full size="sm" onClick={reset}>Reset</SFButton>
            <SFButton variant="primary" full size="sm" onClick={() => setFilterOpen(false)}>Apply Filters</SFButton>
          </div>
        </div>
        <div style={{ overflowY: "auto", padding: "4px 20px 24px" }}>
          {FILTER_GROUPS.map((g) => {
            const isOpen = openId === g.id;
            return (
              <div key={g.id} style={{ borderBottom: `1px solid ${SF.line2}` }}>
                <button className="sf-tap" onClick={() => setOpenId(isOpen ? null : g.id)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", background: "none", border: 0 }}>
                  <span className="sf-mono" style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: SF.ink }}>{g.label}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: 13, fontWeight: 700, color: vals[g.id] !== "All" ? SF.covered : SF.muted }}>{vals[g.id]}</span>
                    <IconChevron size={17} style={{ color: SF.muted, transform: isOpen ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
                  </span>
                </button>
                {isOpen && (
                  <div style={{ paddingBottom: 12, display: "flex", flexDirection: "column", gap: 2 }}>
                    {g.opts.map((o) => {
                      const on = vals[g.id] === o;
                      return (
                        <button key={o} className="sf-tap" onClick={() => setVals((v) => ({ ...v, [g.id]: o }))} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 2px", background: "none", border: 0, textAlign: "left" }}>
                          <span style={{ width: 20, height: 20, borderRadius: 5, border: `1.6px solid ${on ? SF.ink : SF.muted2}`, background: on ? SF.ink : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{on && <IconCheck size={13} stroke={3} style={{ color: "#fff" }} />}</span>
                          <span style={{ fontSize: 14, fontWeight: on ? 600 : 400, color: SF.ink }}>{o}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

Object.assign(window, { cardPrice, catIcon, SFTeamGearCard, SFProductCard, SFCategoryCard, SFCartModal, SFFilterDrawer });


/* ===== ASSET 8 : 97c86fe7-c28a-4c15-8aee-6a6294c1eefb ===== */
// sf-onboarding.jsx — Invitation onboarding: landing, create account, sign in, success.

const { useState: useS4 } = React;

// ── lightweight form helpers (shared) ──
function SFField({ label, children }) {
  return (
    <label style={{ display: "block" }}>
      <span className="sf-label">{label}</span>
      {children}
    </label>);

}
function SFInput(props) {return <input className="sf-input" {...props} />;}

function SFSelect({ label, value, options, onChange, placeholder }) {
  const [open, setOpen] = useS4(false);
  const sel = options.find((o) => (o.value || o) === value);
  return (
    <div style={{ position: "relative" }}>
      {label && <span className="sf-label">{label}</span>}
      <button type="button" className="sf-tap" onClick={() => setOpen((v) => !v)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", border: `1px solid ${open ? SF.ink : SF.field}`, borderRadius: 4, padding: "16px 12px", fontSize: 14, color: sel ? SF.ink : SF.muted2 }}>
        <span>{sel ? sel.label || sel : placeholder || "Select"}</span>
        <IconChevron size={18} style={{ color: SF.muted, transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
      </button>
      {open &&
      <div style={{ position: "absolute", top: "calc(100% + 8px)", left: 0, right: 0, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 6, boxShadow: SF.shadowCard, zIndex: 20, overflow: "hidden" }}>
          {options.map((o) => {
          const v = o.value || o,l = o.label || o,on = v === value;
          return (
            <button key={v} type="button" className="sf-tap" onClick={() => {onChange(v);setOpen(false);}} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 12px", background: on ? SF.soft : "#fff", border: 0, fontSize: 14, textAlign: "left" }}>
                {l} {on && <IconCheck size={15} />}
              </button>);

        })}
        </div>
      }
    </div>);

}

// ─────────────── Branded Storefront Landing (League stores) ───────────────
// Division → team selector (Roster-Optional Epic D). NO announcement banner here
// — the message resolves from the selection, which hasn't happened yet. The
// store-level THEME COLOR does apply (buttons/accents), since it needs no
// shopper resolution. Header/background stay unthemed by design.
function SFLanding() {
  const { go, selectTeam, theme, mode } = useStore();
  const desktop = mode === "desktop";
  const [openDiv, setOpenDiv] = React.useState(null);
  const pick = (payload, label) => { selectTeam(payload ? { ...payload, label } : null); go("home"); };
  const chev = (open) => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" style={{ transform: open ? "rotate(90deg)" : "none", transition: "transform .16s", flexShrink: 0 }}><path d="m9 6 6 6-6 6" /></svg>
  );
  return (
    <div className="sf-fade" style={{ minHeight: "100%", background: "#fff" }}>
      <div style={{ background: SF.ink, color: "#fff", padding: desktop ? "56px 40px 38px" : "68px 20px 28px", textAlign: "center" }}>
        <SFCrest size={52} color="rgba(255,255,255,.16)" />
        <h1 className="sf-display" style={{ margin: "14px 0 0", fontSize: desktop ? 30 : 24, fontWeight: 900, letterSpacing: "-.015em" }}>{SF_LEAGUE.name}</h1>
        <div className="sf-mono sf-up" style={{ fontSize: 11, letterSpacing: ".12em", color: "rgba(255,255,255,.65)", marginTop: 6 }}>Official Team Store · Spring 2026</div>
      </div>
      <div style={{ maxWidth: 620, margin: "0 auto", padding: desktop ? "34px 24px 64px" : "24px 20px 48px" }}>
        <h2 className="sf-display" style={{ margin: 0, fontSize: desktop ? 21 : 19, fontWeight: 800, letterSpacing: "-.01em" }}>Who are you shopping for?</h2>
        <p style={{ margin: "6px 0 18px", fontSize: 13, color: SF.muted, lineHeight: 1.55 }}>Pick a division, then a team. Required gear, deadlines, and announcements follow your selection.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {SF_LEAGUE.divisions.map((d) => {
            const open = openDiv === d.id;
            return (
              <div key={d.id} style={{ border: `1px solid ${open ? SF.ink : SF.line}`, borderRadius: 8, overflow: "hidden", transition: "border-color .15s" }}>
                <button className="sf-tap" onClick={() => setOpenDiv(open ? null : d.id)} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", background: "#fff", border: 0, padding: "14px 16px", cursor: "pointer", fontFamily: SF.body, textAlign: "left" }}>
                  <span style={{ width: 12, height: 12, borderRadius: 3, background: d.color, flexShrink: 0, border: "1px solid rgba(0,0,0,.08)" }} />
                  <span style={{ flex: 1, minWidth: 0 }}>
                    <span style={{ display: "block", fontSize: 14.5, fontWeight: 700, color: SF.ink }}>{d.name}</span>
                    <span style={{ display: "block", fontSize: 12, color: SF.muted, marginTop: 1 }}>Division · {d.teams.length} teams</span>
                  </span>
                  <span style={{ color: SF.muted }}>{chev(open)}</span>
                </button>
                {open && (
                  <div style={{ borderTop: `1px solid ${SF.line2}`, background: SF.soft }}>
                    {d.teams.map((tn) => (
                      <button key={tn} className="sf-tap" onClick={() => pick({ divId: d.id, standalone: false }, tn)} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12, width: "100%", background: "transparent", border: 0, borderTop: `1px solid ${SF.line2}`, padding: "12px 16px 12px 40px", cursor: "pointer", fontFamily: SF.body }}>
                        <span style={{ fontSize: 13.5, fontWeight: 600, color: SF.ink }}>{tn}</span>
                        <span style={{ fontSize: 12, fontWeight: 800, color: theme }}>Shop →</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <div className="sf-mono sf-up" style={{ fontSize: 10.5, letterSpacing: ".12em", color: SF.muted2, margin: "22px 0 8px" }}>Standalone teams</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {SF_LEAGUE.standalone.map((s) => (
            <button key={s.id} className="sf-tap" onClick={() => pick({ divId: s.id, standalone: true }, s.name)} style={{ display: "flex", alignItems: "center", gap: 12, width: "100%", background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 8, padding: "14px 16px", cursor: "pointer", fontFamily: SF.body, textAlign: "left" }}>
              <span style={{ width: 12, height: 12, borderRadius: 3, background: s.color, flexShrink: 0 }} />
              <span style={{ flex: 1, fontSize: 14.5, fontWeight: 700, color: SF.ink }}>{s.name}</span>
              <span style={{ fontSize: 12, fontWeight: 800, color: theme }}>Shop →</span>
            </button>
          ))}
        </div>
        <SFButton full size="lg" style={{ marginTop: 20 }} onClick={() => pick(null)}>Just browsing — shop league fan gear</SFButton>
        <p style={{ margin: "12px 0 0", fontSize: 11.5, color: SF.muted2, textAlign: "center", lineHeight: 1.5 }}>You can change your team anytime from the store home page.</p>
      </div>
    </div>
  );
}

// ─────────────── Invite landing ───────────────
function SFInvite() {
  const { go, mode } = useStore();
  return (
    <div className="sf-fade" style={{ minHeight: "100%", background: SF.soft, display: "flex", flexDirection: "column" }}>
      {/* hero band */}
      <div style={{ background: `linear-gradient(155deg, ${SF.navy}, ${SF.navyInk} 70%, ${SF.ink})`, color: "#fff", padding: mode === "mobile" ? "64px 26px 34px" : "56px 48px 40px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><SFCrest size={64} color="rgba(255,255,255,.14)" /></div>
        <div className="sf-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "rgba(255,255,255,.65)" }}>You're invited to the</div>
        <h1 className="sf-display" style={{ margin: "8px 0 4px", fontSize: mode === "mobile" ? 30 : 38, fontWeight: 900, letterSpacing: "-.01em", lineHeight: 1.05 }}>{TEAM.name}</h1>
        <div className="sf-display sf-up" style={{ fontSize: 13, fontWeight: 700, letterSpacing: ".14em", color: "rgba(255,255,255,.8)" }}>Team Store · {TEAM.season}</div>
        <p style={{ margin: "16px auto 0", maxWidth: 360, fontSize: 14, lineHeight: 1.55, color: "rgba(255,255,255,.8)" }}>
          The official store is open — shop as a guest, no account required. Team gear just needs your team code at checkout.
        </p>
      </div>
      {/* Open access — one storefront, no roles, no account gate. The tiered
          gate appears at checkout only when the cart holds team gear. */}
      <div style={{ padding: mode === "mobile" ? "22px 22px 12px" : "26px 48px 20px", maxWidth: 560, margin: "0 auto", width: "100%" }}>
        <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 20, boxShadow: SF.shadow }}>
          <div className="sf-display" style={{ fontSize: 17, fontWeight: 800 }}>Everyone shops the same store</div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, margin: "14px 0 18px" }}>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ display: "inline-flex", padding: 9, borderRadius: 9, background: SF.navySoft, color: SF.navy, flexShrink: 0 }}><IconBag size={17} /></span>
              <span style={{ fontSize: 13, color: SF.muted, lineHeight: 1.5, paddingTop: 2 }}><strong style={{ color: SF.ink }}>Fan gear</strong> — open to everyone. No code, no account.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ display: "inline-flex", padding: 9, borderRadius: 9, background: SF.requiredBg, color: SF.required, flexShrink: 0 }}><IconShirt size={17} /></span>
              <span style={{ fontSize: 13, color: SF.muted, lineHeight: 1.5, paddingTop: 2 }}><strong style={{ color: SF.ink }}>Team required</strong> — enter your team code at checkout so the order reaches your team.</span>
            </div>
            <div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
              <span style={{ display: "inline-flex", padding: 9, borderRadius: 9, background: SF.coveredBg, color: SF.covered, flexShrink: 0 }}><IconCheck size={17} stroke={2.6} /></span>
              <span style={{ fontSize: 13, color: SF.muted, lineHeight: 1.5, paddingTop: 2 }}><strong style={{ color: SF.ink }}>Team supplied</strong> — team code too; the club covers the cost.</span>
            </div>
          </div>
          <SFButton variant="primary" full size="lg" onClick={() => go("home")}>Shop the Store</SFButton>
        </div>
      </div>
      <div style={{ textAlign: "center", paddingBottom: 32 }}>
        <span style={{ fontSize: 13.5, color: SF.muted }}>Every purchase gets a secure emailed link for tracking &amp; changes — no account needed. Have one anyway? </span>
        <button className="sf-link sf-tap" onClick={() => go("signin")} style={{ background: "none", border: 0, fontSize: 13.5, fontWeight: 700, color: SF.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>Sign In</button>
      </div>
    </div>);

}

// roster-matched player card (read-only display)
function SFRosterPlayer({ p, onRemove }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 10, padding: "12px 12px" }}>
      <span className="sf-display" style={{ width: 36, height: 36, flexShrink: 0, borderRadius: 9, background: SF.navy, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 800 }}>{p.number}</span>
      <span style={{ flex: 1, minWidth: 0 }}>
        <span className="sf-display" style={{ display: "block", fontSize: 14.5, fontWeight: 700 }}>{p.first} {p.last}</span>
        <span className="sf-mono" style={{ fontSize: 10, color: SF.muted, letterSpacing: ".06em", textTransform: "uppercase" }}>Jersey · {p.nameOnJersey}</span>
      </span>
      {p.added ?
      <button type="button" className="sf-tap" onClick={onRemove} aria-label="Remove player" style={{ width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: 0, color: SF.muted2, borderRadius: 8 }}><IconX size={17} /></button> :
      <span className="sf-mono" style={{ display: "inline-flex", alignItems: "center", gap: 4, background: SF.coveredBg, color: SF.covered, fontSize: 9, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", padding: "4px 8px", borderRadius: 999 }}><IconCheck size={11} stroke={3} /> Roster</span>}
    </div>);

}

// inline "add a player" form
function SFAddPlayer({ onAdd, onCancel }) {
  const [n, setN] = useS4({ first: "", last: "", number: "", nameOnJersey: "" });
  const set = (k) => (e) => setN((s) => ({ ...s, [k]: e.target.value }));
  const ready = n.first.trim() && n.last.trim() && n.number.trim() && n.nameOnJersey.trim();
  return (
    <div style={{ background: SF.soft, border: `1px solid ${SF.line}`, borderRadius: 12, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
      <div className="sf-display sf-up" style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em" }}>Add a Player</div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
        <SFField label="First Name"><SFInput value={n.first} onChange={set("first")} placeholder="First" /></SFField>
        <SFField label="Last Name"><SFInput value={n.last} onChange={set("last")} placeholder="Last" /></SFField>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 12 }}>
        <SFField label="Jersey #"><SFInput value={n.number} onChange={set("number")} inputMode="numeric" placeholder="00" maxLength={3} /></SFField>
        <SFField label="Name on Jersey"><SFInput value={n.nameOnJersey} onChange={(e) => setN((s) => ({ ...s, nameOnJersey: e.target.value.toUpperCase() }))} placeholder="LAST NAME" maxLength={14} /></SFField>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 2 }}>
        <SFButton variant="light" onClick={onCancel} style={{ flex: 1 }}>Cancel</SFButton>
        <SFButton variant="primary" disabled={!ready} onClick={() => ready && onAdd({ id: "np" + Date.now(), first: n.first.trim(), last: n.last.trim(), number: n.number.trim(), nameOnJersey: n.nameOnJersey.trim(), added: true })} style={{ flex: 1 }}>Add Player</SFButton>
      </div>
    </div>);

}

// ─────────────── Create account ───────────────
function SFCreate() {
  const { go, resetTo, mode, viewer, bypassPassword } = useStore();
  const isFan = viewer === "fan";
  const [f, setF] = useS4({ first: "", last: "", email: "jhurts.parent@grizzlies.team", phone: "", pass: "", confirm: "" });
  const set = (k) => (e) => setF((s) => ({ ...s, [k]: e.target ? e.target.value : e }));
  const [submitted, setSubmitted] = useS4(false);
  const passValid = bypassPassword || (/[A-Z]/.test(f.pass) && /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(f.pass) && f.pass.length >= 8);
  const confirmValid = bypassPassword || (f.confirm === f.pass && f.confirm.length > 0);
  const passErr = bypassPassword ? null : (submitted && f.pass.length === 0 ? "Password is required." : submitted && !passValid ? "Must be 8+ characters with a capital letter and a number or symbol." : null);
  const confirmErr = bypassPassword ? null : (submitted && !confirmValid ? (f.confirm.length === 0 ? "Please confirm your password." : "Passwords do not match.") : null);
  // players matched to this email from the team roster
  const [players, setPlayers] = useS4(viewer === "parent" ? PLAYERS : [PLAYERS[0]]);
  const [adding, setAdding] = useS4(false);
  return (
    <div className="sf-fade" style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <SFOnbHeader title="Create Account" onBack={() => resetTo("invite")} />
      <div style={{ padding: mode === "mobile" ? "22px 22px 30px" : "26px 48px 44px", maxWidth: 520, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
        <p style={{ fontSize: 13.5, color: SF.muted, margin: 0, marginTop: -4 }}>{isFan ? "Create your account to get started." : "We matched your invite to the roster. Confirm your details to get started."}</p>

        {!isFan &&
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: 8 }}>
            <span className="sf-label" style={{ whiteSpace: "nowrap" }}>Your Players</span>
            <span className="sf-mono" style={{ fontSize: 9.5, color: SF.muted2, letterSpacing: ".06em", textTransform: "uppercase", whiteSpace: "nowrap" }}>From team roster</span>
          </div>
          {players.map((p) =>
          <SFRosterPlayer key={p.id} p={p} onRemove={() => setPlayers((ps) => ps.filter((x) => x.id !== p.id))} />
          )}
          {adding ?
          <SFAddPlayer onCancel={() => setAdding(false)} onAdd={(np) => { setPlayers((ps) => [...ps, np]); setAdding(false); }} /> :
          <button type="button" className="sf-tap" onClick={() => setAdding(true)} style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, width: "100%", padding: "12px", background: "#fff", border: `1px dashed ${SF.field}`, borderRadius: 10, color: SF.ink, fontSize: 13.5, fontWeight: 700 }}><IconPlus size={16} /> Add a player</button>}
        </div>}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <SFField label="First Name"><SFInput value={f.first} onChange={set("first")} /></SFField>
          <SFField label="Last Name"><SFInput value={f.last} onChange={set("last")} /></SFField>
        </div>
        <SFField label="Email">
          {isFan ?
          <SFInput type="email" placeholder="you@example.com" value={f.email === "jhurts.parent@grizzlies.team" ? "" : f.email} onChange={set("email")} /> :
          <div style={{ position: "relative" }}>
            <SFInput type="email" value={f.email} readOnly disabled style={{ background: SF.soft, color: SF.muted, paddingRight: 40, cursor: "not-allowed" }} />
            <span style={{ position: "absolute", top: "50%", right: 12, transform: "translateY(-50%)", color: SF.muted2, pointerEvents: "none" }}><IconLock size={15} /></span>
          </div>}
          {!isFan && <span style={{ display: "block", fontSize: 11.5, color: SF.muted2, marginTop: 4 }}>Matched from your team roster invite.</span>}
        </SFField>
        <SFField label="Phone Number (optional)"><SFInput type="tel" placeholder="(555) 555-5555" value={f.phone} onChange={set("phone")} /></SFField>
        {!bypassPassword && <SFField label="Password">
          <SFInput type="password" placeholder="Create a password" value={f.pass} onChange={set("pass")} style={passErr ? { borderColor: "#d9534f" } : {}} />
          {passErr && <span style={{ display: "block", fontSize: 11.5, color: "#d9534f", marginTop: 4 }}>{passErr}</span>}
          {!passErr && <span style={{ display: "block", fontSize: 11.5, color: SF.muted2, marginTop: 4 }}>8+ characters, one capital letter, one number or symbol.</span>}
        </SFField>}
        {!bypassPassword && <SFField label="Confirm Password">
          <SFInput type="password" placeholder="Re-enter your password" value={f.confirm} onChange={set("confirm")} style={confirmErr ? { borderColor: "#d9534f" } : {}} />
          {confirmErr && <span style={{ display: "block", fontSize: 11.5, color: "#d9534f", marginTop: 4 }}>{confirmErr}</span>}
        </SFField>}
        <SFButton variant="primary" full size="lg" onClick={() => { setSubmitted(true); if (passValid && confirmValid) go("success"); }} style={{ marginTop: 4 }}>Create Account</SFButton>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: 13, color: SF.muted }}>Already registered? </span>
          <button className="sf-link sf-tap" onClick={() => go("signin")} style={{ background: "none", border: 0, fontSize: 13, fontWeight: 700, color: SF.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>Sign In</button>
        </div>
      </div>
    </div>);

}

// ─────────────── Sign in ───────────────
function SFSignIn() {
  const { go, resetTo, mode, bypassPassword } = useStore();
  const [f, setF] = useS4({ email: "jalen@example.com", pass: "" });
  return (
    <div className="sf-fade" style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <SFOnbHeader title="Sign In" onBack={() => resetTo("invite")} />
      <div style={{ padding: mode === "mobile" ? "30px 24px" : "40px 48px", maxWidth: 440, margin: "0 auto", width: "100%", display: "flex", flexDirection: "column", gap: 16 }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 8 }}><SFCrest size={56} /></div>
        <div style={{ textAlign: "center", marginBottom: 4 }}>
          <div className="sf-display" style={{ fontSize: 22, fontWeight: 800 }}>Welcome back</div>
          <div style={{ fontSize: 13.5, color: SF.muted, marginTop: 4 }}>Sign in to the {TEAM.short} Team Store</div>
        </div>
        <SFField label="Email"><SFInput type="email" value={f.email} onChange={(e) => setF((s) => ({ ...s, email: e.target.value }))} /></SFField>
        {!bypassPassword && <SFField label="Password"><SFInput type="password" placeholder="Enter your password" value={f.pass} onChange={(e) => setF((s) => ({ ...s, pass: e.target.value }))} /></SFField>}
        {!bypassPassword && <div style={{ textAlign: "right", marginTop: -8 }}>
          <button className="sf-link sf-tap" style={{ background: "none", border: 0, fontSize: 12.5, fontWeight: 600, color: SF.muted }}>Forgot password?</button>
        </div>}
        <SFButton variant="primary" full size="lg" onClick={() => resetTo("home")}>Sign In</SFButton>
        <div style={{ textAlign: "center" }}>
          <span style={{ fontSize: 13, color: SF.muted }}>New here? </span>
          <button className="sf-link sf-tap" onClick={() => go("create")} style={{ background: "none", border: 0, fontSize: 13, fontWeight: 700, color: SF.ink, textDecoration: "underline", textUnderlineOffset: 3 }}>Create Account</button>
        </div>
      </div>
    </div>);

}

// ─────────────── Account success ───────────────
function SFSuccess() {
  const { resetTo, viewer, mode } = useStore();
  return (
    <div className="sf-fade" style={{ minHeight: "100%", background: SF.soft, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: mode === "mobile" ? "40px 24px" : "48px", textAlign: "center" }}>
      <div style={{ maxWidth: 460, width: "100%" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{ width: 72, height: 72, borderRadius: 999, background: SF.coveredBg, color: SF.covered, display: "flex", alignItems: "center", justifyContent: "center", animation: "sfPop .3s ease" }}><IconCheck size={38} stroke={2.6} /></span>
        </div>
        <h1 className="sf-display" style={{ fontSize: 26, fontWeight: 900, margin: "0 0 8px" }}>You're all set!</h1>
        <p style={{ fontSize: 14, color: SF.muted, margin: "0 0 24px", lineHeight: 1.5 }}>Your account is connected to your team. Here's what we linked up.</p>

        <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 20, textAlign: "left", boxShadow: SF.shadow }}>
          <div className="sf-label" style={{ marginBottom: 12 }}>Connected Team</div>
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 16, borderBottom: `1px solid ${SF.line2}` }}>
            <SFCrest size={46} />
            <div>
              <div className="sf-display" style={{ fontSize: 16, fontWeight: 800 }}>{TEAM.name}</div>
              <div className="sf-mono" style={{ fontSize: 10.5, color: SF.muted, letterSpacing: ".08em", textTransform: "uppercase", marginTop: 2 }}>{TEAM.season}</div>
            </div>
          </div>
          {viewer !== "fan" &&
          <div style={{ paddingTop: 16 }}>
              <div className="sf-label" style={{ marginBottom: 12 }}>{viewer === "parent" ? "Your Players" : "Your Player"}</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                {(viewer === "parent" ? PLAYERS : [PLAYERS[0]]).map((p) =>
              <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 12, background: SF.soft, borderRadius: 10, padding: "12px 12px" }}>
                    <span className="sf-display" style={{ width: 32, height: 32, borderRadius: 8, background: SF.navy, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800 }}>{p.number}</span>
                    <span style={{ fontSize: 14, fontWeight: 600 }}>{p.first} {p.last}</span>
                  </div>
              )}
              </div>
            </div>
          }
        </div>
        <SFButton variant="primary" full size="lg" onClick={() => resetTo("home")} style={{ marginTop: 24 }}>Start Shopping <IconArrowRight size={18} /></SFButton>
      </div>
    </div>);

}

// onboarding header (light, with back)
function SFOnbHeader({ title, onBack }) {
  return (
    <div style={{ paddingTop: 52, paddingBottom: 12, paddingLeft: 8, paddingRight: 8, display: "flex", alignItems: "center", borderBottom: `1px solid ${SF.line2}`, flexShrink: 0 }}>
      <button className="sf-tap" onClick={onBack} style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: "none", border: 0, color: SF.ink }}><IconChevronLeft size={24} /></button>
      <span className="sf-display sf-up" style={{ flex: 1, textAlign: "center", fontSize: 14, fontWeight: 800, letterSpacing: ".09em", marginRight: 40 }}>{title}</span>
    </div>);

}

Object.assign(window, { SFField, SFInput, SFSelect, SFInvite, SFCreate, SFSignIn, SFSuccess, SFOnbHeader });

/* ===== ASSET 9 : 0926ce60-47d7-4054-9c9f-f31ba96c7f32 ===== */
// sf-home.jsx — Storefront home. Team Required / Supplied gear dominates the
// hierarchy for players & parents; fans get a fan-gear-led layout.

const { useRef: useR5 } = React;

// horizontal scroll rail (mobile)
function SFRail({ children, peek = true }) {
  return (
    <div style={{ display: "flex", gap: 12, overflowX: "auto", margin: "0 -20px", padding: "2px 20px 4px", scrollSnapType: "x mandatory", WebkitOverflowScrolling: "touch" }}>
      {React.Children.map(children, (c) => <div style={{ scrollSnapAlign: "start", flex: `0 0 ${peek ? "74%" : "46%"}` }}>{c}</div>)}
    </div>);

}

// ordering-window banner — system-derived, POP-UP ONLY. Always-On stores have
// no ordering window, so this banner is entirely absent (windowState "none").
function SFWindowBanner() {
  const { windowState } = useStore();
  if (windowState === "none") return null;
  if (windowState === "closed") {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: 12, background: SF.cancelBg, border: `1px solid ${SF.cancel}22`, borderRadius: 12, padding: "12px 16px" }}>
        <IconLock size={18} style={{ color: SF.cancel, flexShrink: 0 }} />
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: SF.cancel }}>Ordering is closed</div>
          <div style={{ fontSize: 12, color: SF.muted, marginTop: 1 }}>This store closed on {TEAM.deadline}. Browse only.</div>
        </div>
      </div>);

  }
  const closing = windowState === "closing";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, background: closing ? SF.requiredBg : SF.coveredBg, border: `1px solid ${closing ? SF.required : SF.covered}22`, borderRadius: 12, padding: "12px 16px" }}>
      <IconClock size={18} style={{ color: closing ? SF.required : SF.covered, flexShrink: 0 }} />
      <div style={{ flex: 1 }}>
        <div style={{ fontSize: 13, fontWeight: 700, color: closing ? SF.required : SF.covered }}>{closing ? "Ordering closes soon" : "Store is open for orders"}</div>
        <div style={{ fontSize: 12, color: SF.muted, marginTop: 1 }}>{closing ? "Only 3 days left — order by " + TEAM.deadline : "Order your team gear by " + TEAM.deadline}</div>
      </div>
      {closing && <span className="sf-mono" style={{ fontSize: 11, fontWeight: 800, color: SF.required, background: "#fff", padding: "4px 8px", borderRadius: 7 }}>3 DAYS</span>}
    </div>);

}

// ─── Announcement banner — rep-authored, persistent (no dismiss/collapse), all
// store types, absent entirely when no message resolves. Stacks BELOW the
// ordering-window banner: schedule state is time-critical and system-owned, the
// announcement is contextual — the pair reads as [status strip][message card].
const IconMegaphoneSF = (p) => <SFIcon {...p} d={["M3 10v4a1 1 0 0 0 1 1h2l4 4.4V4.6L6 9H4a1 1 0 0 0-1 1z", "M13.5 8.6a4.6 4.6 0 0 1 0 6.8", "M16.8 5.8a9 9 0 0 1 0 12.4"]} />;

function SFAnnouncementBanner() {
  const { announcementHtml, theme } = useStore();
  const [expanded, setExpanded] = React.useState(false);
  if (!announcementHtml) return null;
  // Length behavior — PROPOSAL (spec open question #2): long messages clamp to
  // 3 lines with a Show more control rather than scrolling or growing unbounded.
  const long = announcementHtml.replace(/<[^>]+>/g, " ").trim().length > 230;
  return (
    <div style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#fff", border: `1px solid ${SF.line}`, borderLeft: `3px solid ${theme}`, borderRadius: 4, padding: "13px 16px 13px 14px" }}>
      <span style={{ width: 30, height: 30, borderRadius: 4, flexShrink: 0, background: sfTint(theme, .1), color: theme, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconMegaphoneSF size={16} stroke={1.9} />
      </span>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div className="sf-ann" style={{ fontSize: 13, lineHeight: 1.55, color: SF.ink2, ...(long && !expanded ? { display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" } : {}) }} dangerouslySetInnerHTML={{ __html: sfSanitize(announcementHtml) }} />
        {long && (
          <button className="sf-tap" onClick={() => setExpanded(!expanded)} style={{ background: "none", border: 0, padding: "7px 0 0", fontSize: 12, fontWeight: 700, color: theme, cursor: "pointer", fontFamily: SF.body }}>
            {expanded ? "Show less" : "Show more"}
          </button>
        )}
      </div>
    </div>
  );
}

// League context chip — which team the shopper resolved to; Change returns to
// the selector, where a different division's message/color resolve on re-entry.
function SFTeamChip() {
  const { storeType, selTeam, go } = useStore();
  if (storeType !== "league") return null;
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, color: SF.muted }}>
      <span>Shopping for <b style={{ color: SF.ink }}>{selTeam ? selTeam.label : "the whole league"}</b></span>
      <span style={{ color: SF.line }}>·</span>
      <button className="sf-tap" onClick={() => go("landing")} style={{ background: "none", border: 0, padding: 0, fontSize: 12.5, fontWeight: 700, color: SF.ink, textDecoration: "underline", textUnderlineOffset: 2, cursor: "pointer", fontFamily: SF.body }}>Change</button>
    </div>
  );
}

// required-gear progress nudge (parent / player)
function SFRequiredNudge() {
  const { go, viewer } = useStore();
  const player = PLAYERS[0];
  return (
    <button className="sf-tap" onClick={() => go("bundle", { id: "home-kit" })} style={{ width: "100%", textAlign: "left", display: "flex", alignItems: "center", gap: 12, background: SF.ink, color: "#fff", border: 0, borderRadius: 14, padding: "16px 16px" }}>
      <span style={{ width: 44, height: 44, borderRadius: 11, background: "rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><IconAlert size={21} style={{ color: "#ffc46b" }} /></span>
      <span style={{ flex: 1 }}>
        <span className="sf-display" style={{ display: "block", fontSize: 14.5, fontWeight: 800 }}>2 required items to order</span>
        <span style={{ display: "block", fontSize: 12.5, color: "rgba(255,255,255,.7)", marginTop: 2 }}>
          {viewer === "parent" ? `For #${player.number} ${player.first} ${player.last}` : "Finish your season setup"}
        </span>
      </span>
      <IconChevronRight size={20} style={{ color: "rgba(255,255,255,.7)" }} />
    </button>);

}

function SFHome() {
  const { mode, viewer, go, emphasis, theme } = useStore();
  const isFan = viewer === "fan";
  const teamGear = teamGearFor(viewer);
  const desktop = mode === "desktop";
  const player = PLAYERS[0];
  const [q, setQ] = React.useState("");
  // 4 — the rep's category order IS this tab order. "All" keeps the original
  // Team Gear + All Products browse intact.
  const cats = sfCatList();
  const [tab, setTab] = React.useState("All");
  const [moreOpen, setMoreOpen] = React.useState(false);
  const maxTabs = desktop ? 4 : 3;
  const primary = cats.slice(0, maxTabs);
  const overflow = cats.slice(maxTabs);
  // A search spans the whole store, so it falls back to the All view.
  const activeCat = q || tab === "All" ? null : tab;
  const allProducts = PRODUCTS.filter((p) =>
    !q || `${p.name} ${p.sub} ${p.category}`.toLowerCase().includes(q.toLowerCase()));
  const catProducts = activeCat ? sfCatProducts(activeCat).filter((p) => !q || `${p.name} ${p.sub}`.toLowerCase().includes(q.toLowerCase())) : [];

  const Wrap = ({ children }) =>
  <div style={{ padding: desktop ? "0 0 64px" : "0 0 28px" }}>{children}</div>;

  const Pad = ({ children, style }) =>
  <div style={{ padding: desktop ? "0 40px" : "0 20px", maxWidth: desktop ? 1180 : "none", margin: "0 auto", ...style }}>{children}</div>;


  return (
    <Wrap>
      {/* Welcome / hero */}
      <div style={{ background: desktop ? `linear-gradient(120deg, ${SF.navy}, ${SF.navyInk})` : "#fff", color: desktop ? "#fff" : SF.ink, paddingTop: desktop ? 38 : 18, paddingBottom: desktop ? 34 : 18 }}>
        <Pad>
          <div style={{ display: "flex", alignItems: desktop ? "center" : "flex-start", gap: desktop ? 18 : 0, flexDirection: desktop ? "row" : "column" }}>
            {desktop && <SFCrest size={58} color="rgba(255,255,255,.16)" />}
            <div style={{ flex: 1 }}>
              <h1 className="sf-display" style={{ margin: 0, fontSize: desktop ? 30 : 25, fontWeight: 900, letterSpacing: "-.015em" }}>
                Welcome{isFan ? ", Grizzlies Fan" : `, ${player.first}`}
              </h1>
              <div className="sf-mono sf-up" style={{ fontSize: 11, letterSpacing: ".12em", color: desktop ? "rgba(255,255,255,.7)" : SF.muted, marginTop: 4 }}>{TEAM.name} · {TEAM.season}</div>
            </div>
          </div>
        </Pad>
      </div>

      <Pad style={{ marginTop: desktop ? 26 : 16 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: desktop ? 14 : 12 }}>
          {/* Two independent banner slots, fixed order: system window banner first,
              announcement second. Either renders alone; empty renders nothing. */}
          <SFWindowBanner />
          <SFAnnouncementBanner />
          <SFTeamChip />
          {/* Product search — brought to the home page from the shop page */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, background: SF.soft, border: `1px solid ${SF.field}`, borderRadius: 4, padding: "12px 16px" }}>
            <IconSearch size={19} stroke={1.8} style={{ color: SF.muted }} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search the Team Store" style={{ flex: 1, border: 0, outline: 0, background: "none", fontSize: 14.5, fontFamily: SF.body, color: SF.ink }} />
            {q && <button className="sf-tap" onClick={() => setQ("")} aria-label="Clear search" style={{ background: "none", border: 0, color: SF.muted }}><IconX size={17} /></button>}
          </div>
          {!isFan && emphasis === "spotlight" && <SFRequiredNudge />}
        </div>
      </Pad>

      {/* 4 — category tabs (store-curated order); extras fold into More */}
      <Pad style={{ marginTop: desktop ? 22 : 14 }}>
        <div style={{ display: "flex", alignItems: "center", gap: desktop ? 22 : 16, borderBottom: `1px solid ${SF.line}`, overflowX: "auto", position: "relative" }}>
          {["All", ...primary].map((c) => {
            const on = tab === c;
            return (
              <button key={c} className="sf-tap sf-mono sf-up" onClick={() => { setTab(c); setMoreOpen(false); }}
                style={{ background: "none", border: 0, padding: "0 0 10px", cursor: "pointer", whiteSpace: "nowrap", fontSize: 11, fontWeight: 800, letterSpacing: ".1em", color: on ? SF.ink : SF.muted, borderBottom: `2px solid ${on ? theme : "transparent"}`, marginBottom: -1 }}>
                {c}
              </button>
            );
          })}
          {overflow.length > 0 &&
            <span style={{ position: "relative", paddingBottom: 10 }}>
              <button className="sf-tap sf-mono sf-up" onClick={() => setMoreOpen(!moreOpen)}
                style={{ background: "none", border: 0, padding: 0, cursor: "pointer", whiteSpace: "nowrap", fontSize: 11, fontWeight: 800, letterSpacing: ".1em", color: overflow.includes(tab) ? SF.ink : SF.muted }}>
                More ▾
              </button>
              {moreOpen &&
                <span style={{ position: "absolute", top: 28, left: 0, zIndex: 30, minWidth: 170, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 10, boxShadow: SF.shadow, overflow: "hidden", display: "block" }}>
                  {overflow.map((c) => (
                    <button key={c} className="sf-tap" onClick={() => { setTab(c); setMoreOpen(false); }}
                      style={{ display: "block", width: "100%", textAlign: "left", background: tab === c ? SF.soft : "#fff", border: 0, padding: "11px 14px", fontSize: 13, fontWeight: 600, color: SF.ink, cursor: "pointer", fontFamily: SF.body }}>{c}</button>
                  ))}
                </span>}
            </span>}
        </div>
      </Pad>

      {/* A single category tab — store-curated order, pinned items first */}
      {activeCat &&
      <Pad style={{ marginTop: desktop ? 30 : 22 }}>
        <SFSectionTitle count={catProducts.length}>{activeCat}</SFSectionTitle>
        {activeCat === "Team Gear" && !isFan &&
          <p style={{ margin: "-8px 0 16px", fontSize: 12.5, color: SF.muted, lineHeight: 1.5 }}>Required for rostered players. Fans can buy these too — nothing here is hidden from them.</p>}
        {catProducts.length === 0
          ? <div style={{ textAlign: "center", padding: "52px 20px", color: SF.muted, fontSize: 13.5 }}>Nothing in {activeCat} right now.</div>
          : <div style={{ display: "grid", gridTemplateColumns: desktop ? "repeat(4, 1fr)" : "1fr 1fr", gap: desktop ? 18 : 12 }}>
              {catProducts.map((p) => <SFProductCard key={p.id} p={p} compact={!desktop} />)}
            </div>}
      </Pad>}

      {/* TEAM GEAR — rostered players only (hidden for fans and while searching) */}
      {tab === "All" && !isFan && teamGear.length > 0 && !q &&
      <Pad style={{ marginTop: desktop ? 40 : 28 }}>
          <SFSectionTitle count={teamGear.length}>Team Gear</SFSectionTitle>
          {desktop ?
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
              {teamGear.map((p) => <SFTeamGearCard key={p.id} p={p} />)}
            </div> :

        <SFRail>{teamGear.map((p) => <SFTeamGearCard key={p.id} p={p} />)}</SFRail>
        }
        </Pad>
      }

      {/* ALL PRODUCTS — everyone, including fans (team gear available, not required) */}
      {tab === "All" &&
      <Pad style={{ marginTop: desktop ? 40 : 28 }}>
        <SFSectionTitle count={allProducts.length}>All Products</SFSectionTitle>
        {allProducts.length === 0 ?
        <div style={{ textAlign: "center", padding: "52px 20px", color: SF.muted }}>
            <IconSearch size={34} style={{ color: SF.muted2, marginBottom: 12 }} />
            <div style={{ fontSize: 14.5, fontWeight: 600 }}>No products found</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Try a different search.</div>
          </div> :

        <div style={{ display: "grid", gridTemplateColumns: desktop ? "repeat(4, 1fr)" : "1fr 1fr", gap: desktop ? 18 : 12 }}>
            {allProducts.map((p) => <SFProductCard key={p.id} p={p} compact={!desktop} />)}
          </div>
        }
      </Pad>}
    </Wrap>);

}

Object.assign(window, { SFRail, SFWindowBanner, SFAnnouncementBanner, SFTeamChip, SFRequiredNudge, SFHome });

/* ===== ASSET 10 : b6d86f6b-66be-4e86-805c-7bf8a69bd732 ===== */
// sf-collection.jsx — Product listing / collection page with search, sort, filters.

const { useState: useS6 } = React;

const SORT_OPTS = ["Featured", "Price: Low to High", "Price: High to Low", "Newest", "Name A–Z"];

function SFCollection() {
  const { route, mode, viewer, setFilterOpen, go } = useStore();
  const cat = route.params.category;
  const [q, setQ] = useS6("");
  const [sort, setSort] = useS6("Featured");
  const [sortOpen, setSortOpen] = useS6(false);
  const desktop = mode === "desktop";

  let list = PRODUCTS.filter((p) => {
    if (cat && p.category !== cat) return false;
    if (q && !(`${p.name} ${p.sub}`.toLowerCase().includes(q.toLowerCase()))) return false;
    return true;
  });
  const price = (p) => cardPrice(p, viewer).value;
  if (sort === "Price: Low to High") list = [...list].sort((a, b) => price(a) - price(b));
  if (sort === "Price: High to Low") list = [...list].sort((a, b) => price(b) - price(a));
  if (sort === "Name A–Z") list = [...list].sort((a, b) => a.name.localeCompare(b.name));

  const title = cat || "All Products";
  const activeChips = [viewer !== "fan" ? "Men/Boys" : null, "Basketball", cat].filter(Boolean);

  return (
    <div className="sf-fade" style={{ padding: desktop ? "0 0 64px" : "0 0 24px" }}>
      <div style={{ padding: desktop ? "30px 40px 0" : "16px 20px 0", maxWidth: desktop ? 1180 : "none", margin: "0 auto" }}>
        <h1 className="sf-display" style={{ margin: 0, fontSize: desktop ? 28 : 23, fontWeight: 900, letterSpacing: "-.015em" }}>{title}</h1>
        <div style={{ fontSize: 12.5, color: SF.muted, marginTop: 4 }}>{list.length} {list.length === 1 ? "product" : "products"}</div>

        {/* search + filter */}
        <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
          <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12, background: SF.soft, border: `1px solid ${SF.field}`, borderRadius: 4, padding: "12px 16px" }}>
            <IconSearch size={19} stroke={1.8} style={{ color: SF.muted }} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products" style={{ flex: 1, border: 0, outline: 0, background: "none", fontSize: 14.5, fontFamily: SF.body, color: SF.ink }} />
            {q && <button className="sf-tap" onClick={() => setQ("")} style={{ background: "none", border: 0, color: SF.muted }}><IconX size={17} /></button>}
          </div>
          <button className="sf-tap" onClick={() => setFilterOpen(true)} aria-label="Filters" style={{ width: 52, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", background: "#fff", border: `1px solid ${SF.field}`, borderRadius: 4, color: SF.ink }}><IconSliders size={21} stroke={1.8} /></button>
          {desktop && (
            <div style={{ position: "relative" }}>
              <button className="sf-tap" onClick={() => setSortOpen((v) => !v)} style={{ height: "100%", display: "flex", alignItems: "center", gap: 8, background: "#fff", border: `1px solid ${SF.field}`, borderRadius: 4, padding: "0 16px", fontSize: 13.5, fontWeight: 600 }}>
                <IconSort size={17} /> {sort} <IconChevron size={15} style={{ color: SF.muted }} />
              </button>
              {sortOpen && (
                <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 6, boxShadow: SF.shadowCard, zIndex: 20, overflow: "hidden", minWidth: 200 }}>
                  {SORT_OPTS.map((o) => <button key={o} className="sf-tap" onClick={() => { setSort(o); setSortOpen(false); }} style={{ width: "100%", textAlign: "left", padding: "12px 16px", background: o === sort ? SF.soft : "#fff", border: 0, fontSize: 13.5 }}>{o}</button>)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* active filter chips */}
        <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap", alignItems: "center" }}>
          <span className="sf-mono" style={{ fontSize: 10, color: SF.muted, letterSpacing: ".08em", textTransform: "uppercase" }}>Active</span>
          {activeChips.map((c) => (
            <span key={c} className="sf-mono" style={{ display: "inline-flex", alignItems: "center", gap: 8, background: SF.soft2, fontSize: 11, fontWeight: 600, color: SF.ink, padding: "4px 8px", borderRadius: 999 }}>
              {c} <IconX size={12} style={{ color: SF.muted }} />
            </span>
          ))}
        </div>
      </div>

      {/* grid */}
      <div style={{ padding: desktop ? "22px 40px 0" : "18px 20px 0", maxWidth: desktop ? 1180 : "none", margin: "0 auto" }}>
        {list.length === 0 ? (
          <div style={{ textAlign: "center", padding: "60px 20px", color: SF.muted }}>
            <IconSearch size={34} style={{ color: SF.muted2, marginBottom: 12 }} />
            <div style={{ fontSize: 14.5, fontWeight: 600 }}>No products found</div>
            <div style={{ fontSize: 13, marginTop: 4 }}>Try a different search or clear your filters.</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: desktop ? "repeat(4, 1fr)" : "1fr 1fr", gap: desktop ? 18 : 12 }}>
            {list.map((p) => <SFProductCard key={p.id} p={p} compact={!desktop} />)}
          </div>
        )}
      </div>
    </div>
  );
}

Object.assign(window, { SFCollection });


/* ===== ASSET 11 : 14349ee9-68d9-463b-942b-d2b9dd63a877 ===== */
// sf-pdp.jsx — Single Product Detail + Bundle Detail (per-item configuration).

const { useState: useS7 } = React;

const uid = () => `${Date.now()}-${Math.random().toString(36).slice(2, 7)}`;

// sheet-style header used by PDP / bundle (title + close)
function SFSheetHeader({ title, onClose }) {
  return (
    <div style={{ paddingTop: 52, paddingBottom: 12, paddingLeft: 16, paddingRight: 12, display: "flex", alignItems: "center", gap: 12, borderBottom: `1px solid ${SF.line2}`, flexShrink: 0, background: "#fff", position: "relative", zIndex: 10 }}>
      <span className="sf-display" style={{ flex: 1, fontSize: 16, fontWeight: 800, letterSpacing: "-.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{title}</span>
      <button className="sf-tap" onClick={onClose} aria-label="Close" style={{ width: 40, height: 40, display: "flex", alignItems: "center", justifyContent: "center", background: SF.soft, borderRadius: 999, border: 0, color: SF.ink, flexShrink: 0 }}><IconX size={20} /></button>
    </div>
  );
}

// collapsible product-info row
function SFAccordion({ label, children, defaultOpen }) {
  const [open, setOpen] = useS7(!!defaultOpen);
  return (
    <div style={{ borderTop: `1px solid ${SF.line2}` }}>
      <button className="sf-tap" onClick={() => setOpen((v) => !v)} style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 0", background: "none", border: 0 }}>
        <span className="sf-mono sf-up" style={{ fontSize: 12, fontWeight: 700, letterSpacing: ".06em" }}>{label}</span>
        <IconChevron size={18} style={{ color: SF.muted, transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
      </button>
      {open && <div style={{ paddingBottom: 16, fontSize: 13.5, color: SF.muted, lineHeight: 1.6 }}>{children}</div>}
    </div>
  );
}

function SFProductInfo({ p }) {
  return (
    <div style={{ marginTop: 8 }}>
      <SFAccordion label="Description" defaultOpen>{p.desc}</SFAccordion>
      <SFAccordion label="Material">100% performance polyester. Moisture-wicking, four-way stretch knit built for game-day movement.</SFAccordion>
      <SFAccordion label="Fit">Standard athletic fit. Sized true — between sizes, we recommend sizing up. Youth XS–XL · Adult S–2XL.</SFAccordion>
      <SFAccordion label="Decoration">Full-color dye sublimation. Names, numbers, logos and patterns are permanently fused into the fabric — they won't crack or peel.</SFAccordion>
      <SFAccordion label="Size Chart">
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {["Youth: 6 – 16", "Adult: 34 – 48 chest"].map((t) => <span key={t} className="sf-mono" style={{ fontSize: 12 }}>{t}</span>)}
        </div>
      </SFAccordion>
    </div>
  );
}

// 7c/7d — the team's allow-duplicates rule (set per team in the workspace roster
// view) decides whether a taken number is a blocking conflict or just information.
function sfAllowDupes() {
  try { return window.localStorage.getItem("ts_allow_dupes") === "1"; } catch (e) { return false; }
}
// 7d — number grid: the movie-theater seat model. Taken numbers are visibly out of
// play when duplicates are off, and merely marked when they're allowed.
function SFJerseyGrid({ value, onChange, taken, allowDupes }) {
  const map = {};
  (taken || []).forEach((t) => { map[t.number] = t.who; });
  return (
    <div style={{ marginTop: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(10, minmax(0,1fr))", gap: 4 }}>
        {Array.from({ length: 100 }, (_, n) => {
          const s = String(n);
          const who = map[s];
          const sel = String(value || "") === s;
          const locked = !!who && !allowDupes;
          const dupe = !!who && allowDupes;
          return (
            <button key={n} type="button" disabled={locked} className="sf-tap"
              title={who ? (allowDupes ? s + " · duplicate — also worn by " + who : s + " taken by " + who) : "Choose " + s}
              onClick={() => { if (!locked) onChange(sel ? "" : s); }}
              style={{
                aspectRatio: "1 / 1", minHeight: 26, padding: 0, borderRadius: 4, position: "relative",
                fontFamily: SF.display, fontSize: 11.5, fontWeight: sel ? 800 : 700,
                background: sel ? SF.ink : locked ? SF.soft : "#fff",
                color: sel ? "#fff" : locked ? SF.muted2 : SF.ink,
                border: sel ? `1px solid ${SF.ink}` : dupe ? `1px dashed ${SF.muted2}` : `1px solid ${SF.field}`,
                textDecoration: locked ? "line-through" : "none",
                cursor: locked ? "not-allowed" : "pointer",
              }}>
              {s}
              {dupe && !sel && <span aria-hidden="true" style={{ position: "absolute", top: 2, right: 3, width: 4, height: 4, borderRadius: 999, background: SF.muted2 }} />}
            </button>
          );
        })}
      </div>
      <div className="sf-mono" style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 8, fontSize: 9, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: SF.muted }}>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, border: `1px solid ${SF.field}` }} />Open</span>
        {allowDupes
          ? <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, border: `1px dashed ${SF.muted2}` }} />In use — still allowed</span>
          : <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><span style={{ width: 10, height: 10, borderRadius: 3, background: SF.soft, border: `1px solid ${SF.field}` }} />Taken</span>}
      </div>
    </div>
  );
}

// personalization inputs — optionally pre-populated from roster data (pass `roster`)
function SFPersonalize({ name, number, onName, onNumber, roster, taken }) {
  const allowDupes = sfAllowDupes();
  const [numMode, setNumMode] = useS7 ? useS7("grid") : React.useState("grid");
  const rName = roster ? (roster.name || "").toUpperCase() : null;
  const rNum = roster ? String(roster.number || "") : null;
  const nameDirty = roster && name !== rName;
  const numDirty = roster && number !== rNum;
  // #4 — when the roster already carries a number, it is pre-filled and locked (read-only).
  const numLocked = !!(roster && rNum);
  // #3 — buyer-entered number must not collide with another rostered player.
  const hit = numLocked ? null : numberConflict(number, taken);
  const conflict = hit && !allowDupes ? hit : null;
  const labelRow = (text, dirty, onReset) => (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 16, marginBottom: 8 }}>
      <span className="sf-label" style={{ margin: 0 }}>{text}</span>
      {roster && (dirty
        ? <button className="sf-tap" onClick={onReset} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "none", border: 0, padding: 0, fontFamily: SF.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: SF.muted, cursor: "pointer" }}><IconRepeat size={11} /> Reset</button>
        : <span className="sf-mono" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: SF.covered }}><IconCheck size={11} stroke={3} /> From roster</span>)}
    </div>
  );
  const numLabelRow = (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", minHeight: 16, marginBottom: 8 }}>
      <span className="sf-label" style={{ margin: 0 }}>{roster ? "Number" : "Player Number"}</span>
      {numLocked && <span className="sf-mono" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 9, fontWeight: 700, letterSpacing: ".07em", textTransform: "uppercase", color: SF.muted }}><IconLock size={10} /> Locked</span>}
    </div>
  );
  const fieldBorder = (dirty) => `1px solid ${roster && !dirty ? "#bfe0cc" : SF.field}`;
  const numBorder = conflict
    ? `1px solid ${SF.cancel}`
    : numLocked
      ? `1px solid ${SF.line}`
      : fieldBorder(numDirty);
  return (
    <div>
      <div style={{ display: "flex", gap: 12 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          {roster ? labelRow("Name on Jersey", nameDirty, () => onName(rName)) : <span className="sf-label">Name on Jersey</span>}
          <div style={{ display: "flex", alignItems: "center", gap: 12, border: fieldBorder(nameDirty), borderRadius: 4, padding: "0 16px", background: "#fff" }}>
            <IconShirt size={18} style={{ color: SF.muted, flexShrink: 0 }} />
            <input value={name} onChange={(e) => onName(e.target.value.toUpperCase())} placeholder="LAST NAME" maxLength={14} style={{ flex: 1, minWidth: 0, border: 0, outline: 0, padding: "12px 0", fontSize: 15, fontFamily: SF.display, fontWeight: 700, letterSpacing: ".04em", background: "none", color: SF.ink }} />
          </div>
        </div>
        <div style={{ width: 92, flexShrink: 0 }}>
          {numLabelRow}
          <div style={{ display: "flex", alignItems: "center", gap: 8, border: numBorder, borderRadius: 4, padding: "0 12px", background: numLocked ? SF.soft : "#fff" }}>
            <IconHash size={16} style={{ color: SF.muted, flexShrink: 0 }} />
            <input value={number} disabled={numLocked} onChange={(e) => onNumber(e.target.value.replace(/\D/g, "").slice(0, 2))} placeholder="00" inputMode="numeric" style={{ width: "100%", minWidth: 0, border: 0, outline: 0, padding: "12px 0", fontSize: 15, fontFamily: SF.display, fontWeight: 700, background: "none", color: numLocked ? SF.muted : SF.ink, cursor: numLocked ? "not-allowed" : "text" }} />
          </div>
        </div>
      </div>
      {!numLocked && (
        <div style={{ marginTop: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <div style={{ display: "inline-flex", background: SF.soft, borderRadius: 6, padding: 3 }}>
              {[{ k: "grid", l: "Pick from grid" }, { k: "type", l: "Type it" }].map((o) => {
                const on = numMode === o.k;
                return <button key={o.k} type="button" className="sf-tap" onClick={() => setNumMode(o.k)}
                  style={{ padding: "5px 10px", border: 0, borderRadius: 4, cursor: "pointer", fontFamily: SF.mono, fontSize: 9.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", background: on ? "#fff" : "transparent", color: on ? SF.ink : SF.muted }}>{o.l}</button>;
              })}
            </div>
            <span className="sf-mono" style={{ marginLeft: "auto", fontSize: 9, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", color: SF.muted }}>{allowDupes ? "Duplicates allowed" : "One player per number"}</span>
          </div>
          {numMode === "grid" && <SFJerseyGrid value={number} onChange={onNumber} taken={taken} allowDupes={allowDupes} />}
        </div>
      )}
      {hit && !conflict && (
        <div className="sf-mono" style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8, fontSize: 11, fontWeight: 600, color: SF.muted }}>
          <IconCheck size={12} /> Number {hit.number} · duplicate — also worn by {hit.who}
        </div>
      )}
      {conflict && (
        <div className="sf-mono" style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8, fontSize: 11, fontWeight: 600, color: SF.cancel }}>
          <IconAlert size={12} /> Number {conflict.number} is taken by {conflict.who} — locked
        </div>
      )}
    </div>
  );
}

// sticky add bar
function SFAddBar({ children }) {
  return (
    <div style={{ flexShrink: 0, background: "#fff", borderTop: `1px solid ${SF.line}`, padding: "12px 20px 24px", boxShadow: SF.shadowUp }}>{children}</div>
  );
}

// ─────────────── Single PDP ───────────────
function SFProductDetail() {
  const { route, back, viewer, windowState, mode, addToCart, toast } = useStore();
  const p = getProduct(route.params.id);
  const pr = priceFor(p, viewer);
  const isPlayer = viewer !== "fan";
  const [size, setSize] = useS7(null);
  const [name, setName] = useS7(p.personalize && isPlayer ? PLAYERS[0].nameOnJersey.toUpperCase() : "");
  const [number, setNumber] = useS7(p.personalize && isPlayer ? PLAYERS[0].number : "");
  const [qty, setQty] = useS7(1);
  const desktop = mode === "desktop";
  const closed = windowState === "closed";
  const badgeKind = p.teamSetting === "required" ? "required" : p.teamSetting === "supplied" ? "supplied" : null;

  // #3/#4/#5 — roster identity for the buyer (player viewer = own roster entry).
  const selfPlayer = p.personalize && viewer === "player" ? PLAYERS[0] : null;
  const taken = p.personalize && isPlayer ? rosterTakenNumbers(selfPlayer ? selfPlayer.id : null) : [];

  const add = () => {
    if (!size) { toast("Select a size first"); return; }
    const conflict = !(selfPlayer && selfPlayer.number) && numberConflict(number, taken);
    if (conflict) { toast(`Number ${conflict.number} is taken by ${conflict.who}`); return; }
    if (selfPlayer) rosterWriteBack(selfPlayer.id, { number, nameOnJersey: name });
    addToCart([{ uid: uid(), pid: p.id, name: p.name, sub: p.sub, img: p.img, tone: p.tone, size, qty, personalization: { name, number }, badge: p.teamSetting, price: pr.value, covered: pr.covered, msrp: pr.msrp }]);
  };

  const gallery = (
    <div style={{ position: "relative" }}>
      <SFProductImg src={p.img} tone={p.tone} label={p.name} ratio="1 / 1" radius={desktop ? 16 : 14} pad="10%" />
      {badgeKind && <div style={{ position: "absolute", top: 16, left: 16 }}><SFBadge kind={badgeKind} /></div>}
    </div>
  );
  const config = (
    <div>
      <div className="sf-display" style={{ fontSize: desktop ? 24 : 20, fontWeight: 800, letterSpacing: "-.01em" }}>{p.name}</div>
      <div style={{ fontSize: 13, color: SF.muted, marginTop: 4 }}>{p.sub}</div>
      <div style={{ margin: "12px 0 4px" }}><SFPrice value={pr.value} msrp={pr.msrp} covered={pr.covered} size={22} /></div>
      {pr.covered && <div style={{ display: "inline-flex", marginTop: 8 }}><SFBadge kind="covered" /></div>}

      <div style={{ height: 1, background: SF.line2, margin: "20px 0" }} />

      {p.personalize && isPlayer && (
        <div style={{ marginBottom: 20 }}><SFPersonalize name={name} number={number} onName={setName} onNumber={setNumber} roster={selfPlayer ? { name: selfPlayer.nameOnJersey, number: selfPlayer.number } : null} taken={taken} /></div>
      )}
      <div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
          <span className="sf-label" style={{ margin: 0 }}>Select a Size</span>
          <button className="sf-link sf-tap" style={{ background: "none", border: 0, fontSize: 11.5, fontWeight: 600, color: SF.muted, display: "inline-flex", alignItems: "center", gap: 4 }}><IconList size={14} /> Size chart</button>
        </div>
        <SFSizeGrid sizes={p.sizes} value={size} onChange={setSize} />
      </div>
      {p.sizes.length > 1 && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20 }}>
          <span className="sf-label" style={{ margin: 0 }}>Quantity</span>
          <SFQty value={qty} onChange={setQty} />
        </div>
      )}
      <div style={{ marginTop: 8 }}><SFProductInfo p={p} /></div>
    </div>
  );

  const related = PRODUCTS.filter((x) => x.id !== p.id && x.category === p.category && (viewer !== "fan" || x.teamSetting === "fan")).slice(0, desktop ? 4 : 6);

  return (
    <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <SFSheetHeader title={p.name} onClose={back} />
      <div className="sf-pdp-scroll" style={{ flex: 1, overflowY: "auto" }}>
        {desktop ? (
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "36px 40px 52px", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }}>
            <div style={{ position: "sticky", top: 24 }}>{gallery}</div>
            <div>{config}</div>
          </div>
        ) : (
          <div style={{ padding: "16px 20px 32px" }}>{gallery}<div style={{ marginTop: 16 }}>{config}</div></div>
        )}
        {/* related */}
        <div style={{ padding: desktop ? "0 40px 50px" : "0 20px 30px", maxWidth: desktop ? 1100 : "none", margin: "0 auto" }}>
          <SFSectionTitle>Related Products</SFSectionTitle>
          <div style={{ display: "grid", gridTemplateColumns: desktop ? "repeat(4,1fr)" : "1fr 1fr", gap: desktop ? 18 : 12 }}>
            {related.map((x) => <SFProductCard key={x.id} p={x} compact={!desktop} />)}
          </div>
        </div>
      </div>
      <SFAddBar>
        {closed ? (
          <SFButton full size="lg" disabled>Ordering Closed</SFButton>
        ) : (
          <SFButton full size="lg" onClick={add}>Add to Cart{!pr.covered && pr.value ? ` · $${(pr.value * qty).toFixed(2)}` : ""}</SFButton>
        )}
      </SFAddBar>
    </div>
  );
}

// short item label for collapsed summaries ("Grizzlies Home Jersey" → "Jersey")
const shortItemName = (n) => n.replace(/^Grizzlies\s+(Home|Away)\s+/i, "").replace(/^Grizzlies\s+/i, "");

// circular include checkbox
function SFCheckCircle({ on, onClick }) {
  return (
    <button className="sf-tap" onClick={onClick} aria-label={on ? "Included" : "Excluded"} style={{
      width: 24, height: 24, flexShrink: 0, borderRadius: 999, border: `2px solid ${on ? SF.navy : SF.field}`,
      background: on ? SF.navy : "#fff", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", padding: 0,
    }}>{on && <IconCheck size={14} stroke={3} />}</button>
  );
}

// ─────────────── Player kit card (accordion) ───────────────
function SFPlayerKitCard({ player, index, items, cfg, setItem, covered, open, onToggleOpen, included, onToggleInclude, canExclude, copyFrom, onCopySizes, desktop }) {
  const self = !!player.self;
  // #3 — numbers assigned to OTHER rostered players, for collision detection.
  const taken = self ? [] : rosterTakenNumbers(player.id);
  const total = items.length;
  const done = items.filter((it) => cfg[it.id].size).length;
  const ready = done === total;
  const num = self ? null : String(player.number);
  const fullName = self ? "Your sizes" : `${player.first} ${player.last}`;

  // collapsed summary string
  const personItem = items.find((it) => it.personalize);
  const pCfg = personItem ? cfg[personItem.id] : null;
  const summaryBits = [];
  if (pCfg && pCfg.name) summaryBits.push(`${pCfg.name}${pCfg.number ? " #" + pCfg.number : ""}`);
  items.forEach((it) => summaryBits.push(`${shortItemName(it.name)} ${cfg[it.id].size || "—"}`));

  return (
    <div style={{
      background: "#fff", border: `1px solid ${included ? (open ? SF.ink : SF.line) : SF.line}`,
      borderRadius: 14, overflow: "hidden", opacity: included ? 1 : 0.62, transition: "border-color .15s, opacity .15s",
    }}>
      {/* header */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px" }}>
        {canExclude && <SFCheckCircle on={included} onClick={onToggleInclude} />}
        {!self && (
          <div style={{ width: 44, height: 44, borderRadius: 11, background: SF.navy, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "inset 0 0 0 2px rgba(255,255,255,.14)" }}>
            <span className="sf-display" style={{ color: "#fff", fontSize: 17, fontWeight: 900, letterSpacing: "-.02em" }}>{num}</span>
          </div>
        )}
        <button className="sf-tap" onClick={included ? onToggleOpen : onToggleInclude} style={{ flex: 1, minWidth: 0, display: "flex", alignItems: "center", gap: 12, background: "none", border: 0, padding: 0, textAlign: "left" }}>
          <div style={{ flex: 1, minWidth: 0 }}>
            {!self && <div className="sf-mono sf-up" style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".1em", color: SF.muted2 }}>Player {index + 1}</div>}
            <div className="sf-display" style={{ fontSize: self ? 15 : 16, fontWeight: 800, letterSpacing: "-.01em", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginTop: self ? 0 : 1 }}>{fullName}</div>
          </div>
          {included ? (
            <span style={{ display: "flex", alignItems: "center", gap: 8, flexShrink: 0 }}>
              {ready
                ? <span className="sf-mono" style={{ display: "inline-flex", alignItems: "center", gap: 4, background: SF.coveredBg, color: SF.covered, fontSize: 9.5, fontWeight: 700, letterSpacing: ".06em", textTransform: "uppercase", padding: "4px 8px", borderRadius: 999 }}><IconCheck size={12} stroke={3} /> Ready</span>
                : <span className="sf-mono" style={{ fontSize: 10, fontWeight: 700, color: SF.required, letterSpacing: ".04em", whiteSpace: "nowrap" }}>{done} / {total} sizes</span>}
              <IconChevron size={18} style={{ color: SF.muted, transform: open ? "rotate(180deg)" : "none", transition: "transform .15s" }} />
            </span>
          ) : (
            <span className="sf-mono" style={{ fontSize: 9.5, fontWeight: 700, color: SF.muted2, letterSpacing: ".06em", textTransform: "uppercase", flexShrink: 0 }}>Skipped</span>
          )}
        </button>
      </div>

      {/* collapsed summary strip */}
      {included && !open && (
        <button className="sf-tap" onClick={onToggleOpen} style={{ width: "100%", textAlign: "left", display: "block", background: SF.soft, border: 0, borderTop: `1px solid ${SF.line2}`, padding: "12px 16px" }}>
          <span className="sf-mono" style={{ fontSize: 10.5, color: SF.muted, letterSpacing: ".03em" }}>{summaryBits.join("  ·  ")}</span>
        </button>
      )}

      {/* excluded note */}
      {!included && (
        <button className="sf-tap" onClick={onToggleInclude} style={{ width: "100%", textAlign: "left", background: SF.soft, border: 0, borderTop: `1px solid ${SF.line2}`, padding: "12px 16px", color: SF.muted, fontSize: 12, fontWeight: 600 }}>
          Not ordering this kit — tap to include
        </button>
      )}

      {/* expanded body */}
      {included && open && (
        <div style={{ borderTop: `1px solid ${SF.line2}`, padding: 16, display: "flex", flexDirection: "column", gap: 16 }}>
          {!self && copyFrom && (
            <button className="sf-tap" onClick={onCopySizes} style={{ alignSelf: "flex-start", display: "inline-flex", alignItems: "center", gap: 8, background: SF.navySoft, color: SF.navy, border: 0, borderRadius: 999, padding: "8px 12px", fontFamily: SF.body, fontSize: 11.5, fontWeight: 700 }}>
              <IconLayers size={13} /> Copy sizes from {copyFrom}
            </button>
          )}
          {items.map((it, n) => {
            const c = cfg[it.id];
            return (
              <div key={it.id} style={{ paddingTop: n ? 14 : 0, borderTop: n ? `1px solid ${SF.line2}` : 0 }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                  <SFProductImg src={it.img} tone={it.tone} label={it.name} ratio="1 / 1" radius={9} pad="9%" style={{ width: 52, height: 52, flexShrink: 0 }} />
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div className="sf-display" style={{ fontSize: 14, fontWeight: 800 }}>{it.name}</div>
                    <div style={{ fontSize: 11.5, color: SF.muted, marginTop: 1 }}>{it.sub}</div>
                  </div>
                  {c.size
                    ? <span className="sf-mono" style={{ fontSize: 10, fontWeight: 700, color: SF.covered, letterSpacing: ".04em", flexShrink: 0 }}>SIZE {c.size}</span>
                    : <SFPrice value={covered ? 0 : it.retail} covered={covered} size={13} align="right" />}
                </div>
                {it.personalize && !self && (
                  <div style={{ marginTop: 12 }}>
                    <SFPersonalize name={c.name} number={c.number} onName={(v) => setItem(it.id, { name: v })} onNumber={(v) => setItem(it.id, { number: v })} roster={{ name: player.nameOnJersey, number: player.number }} taken={taken} />
                  </div>
                )}
                <div style={{ marginTop: 12 }}>
                  <span className="sf-label">Select a Size</span>
                  <SFSizeGrid sizes={it.sizes} value={c.size} onChange={(s) => setItem(it.id, { size: s })} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ─────────────── Bundle PDP (multi-player aware) ───────────────
function SFBundleDetail() {
  const { route, back, viewer, windowState, mode, addToCart, toast } = useStore();
  const b = getProduct(route.params.id);
  const desktop = mode === "desktop";
  const closed = windowState === "closed";
  const pr = cardPrice(b, viewer);

  // who are we configuring for?
  const players = React.useMemo(() => {
    if (viewer === "fan") return [{ id: "self", self: true }];
    if (viewer === "player") return [PLAYERS[0]];
    return PLAYERS;
  }, [viewer]);
  const hasPlayers = !players[0].self;
  const canExclude = players.length > 1;

  // cfg[playerId][itemId] = { size, qty, name, number }
  const [cfg, setCfg] = useS7(() => Object.fromEntries(players.map((pl) => [pl.id, Object.fromEntries(b.items.map((it) => [it.id, {
    size: null, qty: 1,
    name: it.personalize && !pl.self ? (pl.nameOnJersey || "").toUpperCase() : "",
    number: it.personalize && !pl.self ? String(pl.number || "") : "",
  }]))])));
  const setItem = (pid, iid, patch) => setCfg((c) => ({ ...c, [pid]: { ...c[pid], [iid]: { ...c[pid][iid], ...patch } } }));
  const copySizes = (pid, fromId) => setCfg((c) => ({ ...c, [pid]: Object.fromEntries(b.items.map((it) => [it.id, { ...c[pid][it.id], size: c[fromId][it.id].size }])) }));

  const [included, setIncluded] = useS7(() => Object.fromEntries(players.map((pl) => [pl.id, true])));
  const [openSet, setOpenSet] = useS7(() => players.map((pl) => pl.id));
  const isOpen = (id) => openSet.includes(id);
  const toggleOpen = (id) => setOpenSet((s) => s.includes(id) ? s.filter((x) => x !== id) : [...s, id]);
  const toggleInclude = (id) => setIncluded((s) => ({ ...s, [id]: !s[id] }));

  const incPlayers = players.filter((pl) => included[pl.id]);
  const playerReady = (pl) => b.items.every((it) => cfg[pl.id][it.id].size);
  const allReady = incPlayers.length > 0 && incPlayers.every(playerReady);
  const perKit = b.items.reduce((n, it) => n + (b.covered ? 0 : it.retail), 0);
  const grandTotal = incPlayers.length * perKit;

  const add = () => {
    if (!incPlayers.length) { toast("Select at least one player"); return; }
    if (!allReady) { toast("Select a size for each item"); return; }
    // #3 — reject any buyer-entered jersey number that collides with the roster.
    for (const pl of incPlayers) {
      if (pl.self) continue;
      const taken = rosterTakenNumbers(pl.id);
      for (const it of b.items) {
        if (!it.personalize) continue;
        if (String(pl.number || "").trim()) continue; // roster-locked numbers can't conflict
        const conflict = numberConflict(cfg[pl.id][it.id].number, taken);
        if (conflict) { toast(`#${conflict.number} (${pl.first}) is taken by ${conflict.who}`); return; }
      }
    }
    // #5 — write buyer-assigned numbers/names back to the roster.
    incPlayers.forEach((pl) => {
      if (pl.self) return;
      const first = b.items.find((it) => it.personalize);
      if (first) rosterWriteBack(pl.id, { number: cfg[pl.id][first.id].number, nameOnJersey: cfg[pl.id][first.id].name });
    });
    const items = [];
    incPlayers.forEach((pl) => {
      b.items.forEach((it) => {
        const c = cfg[pl.id][it.id];
        const covered = b.covered;
        items.push({
          uid: uid(), pid: it.id,
          bundleId: pl.self ? b.id : `${b.id}:${pl.id}`,
          bundleLabel: pl.self ? b.name : `${b.name} · ${pl.first} ${pl.last}`,
          playerLabel: pl.self ? null : `${pl.first} ${pl.last}`,
          name: it.name, sub: it.sub, img: it.img, tone: it.tone, size: c.size, qty: c.qty,
          personalization: { name: c.name, number: c.number }, badge: b.teamSetting,
          price: covered ? 0 : it.retail, covered, msrp: it.msrp,
        });
      });
    });
    addToCart(items, b.name);
  };

  // button label
  let btnLabel;
  if (!incPlayers.length) btnLabel = "Select a player to continue";
  else if (!allReady) btnLabel = "Select all sizes to continue";
  else {
    const n = incPlayers.length;
    const noun = players[0].self ? "Add Bundle to Cart" : n === 1 ? "Add Kit to Cart" : n === 2 ? "Add Both Kits to Cart" : `Add ${n} Kits to Cart`;
    btnLabel = b.covered ? noun : `${noun} · $${grandTotal.toFixed(2)}`;
  }

  const sectionTitle = hasPlayers ? (players.length > 1 ? "Configure for Each Player" : "Configure Your Kit") : "Configure Each Item";

  return (
    <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <SFSheetHeader title={b.name} onClose={back} />
      <div className="sf-pdp-scroll" style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ maxWidth: desktop ? 760 : "none", margin: "0 auto", padding: desktop ? "30px 40px 40px" : "16px 20px 24px" }}>
          {/* hero */}
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: b.items.length === 2 ? "1fr 1fr" : "1fr", gap: 12 }}>
            {b.items.map((it) => <SFProductImg key={it.id} src={it.img} tone={it.tone} label={it.name} ratio="1 / 1" radius={14} pad="9%" />)}
            <div style={{ position: "absolute", top: 12, left: 12 }}><SFBadge kind={b.teamSetting === "supplied" ? "supplied" : "required"} /></div>
          </div>

          {/* coverage / savings callout */}
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 16, background: b.covered ? SF.coveredBg : SF.navySoft, borderRadius: 13, padding: "16px 16px" }}>
            <span style={{ width: 40, height: 40, borderRadius: 10, background: "#fff", color: b.covered ? SF.covered : SF.navy, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{b.covered ? <IconShield size={20} /> : <IconLayers size={20} />}</span>
            <div style={{ flex: 1 }}>
              <div className="sf-display" style={{ fontSize: 14, fontWeight: 800, color: b.covered ? SF.covered : SF.navy }}>{b.covered ? "Covered by your team" : "Bundle & save"}</div>
              <div style={{ fontSize: 12.5, color: SF.muted, marginTop: 2 }}>{b.covered ? "Your team fee covers this required kit — you pay $0 per player. Just confirm sizes." : "Buying the kit saves vs. buying each piece on its own."}</div>
            </div>
            <SFPrice value={pr.value} msrp={pr.msrp} covered={pr.covered} size={17} align="right" />
          </div>

          {/* per-player config */}
          <div style={{ marginTop: 20 }}>
            <SFSectionTitle>{sectionTitle}</SFSectionTitle>
            {hasPlayers && players.length > 1 && (
              <p style={{ fontSize: 12.5, color: SF.muted, margin: "-8px 0 16px", lineHeight: 1.5 }}>
                Both of your rostered players need this kit. Confirm each one below — names and numbers are pre-filled from the team roster.
              </p>
            )}
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {players.map((pl, i) => (
                <SFPlayerKitCard
                  key={pl.id} player={pl} index={i} items={b.items} covered={b.covered}
                  cfg={cfg[pl.id]} setItem={(iid, patch) => setItem(pl.id, iid, patch)}
                  open={isOpen(pl.id)} onToggleOpen={() => toggleOpen(pl.id)}
                  included={included[pl.id]} onToggleInclude={() => toggleInclude(pl.id)} canExclude={canExclude}
                  copyFrom={i > 0 ? players[0].first : null} onCopySizes={() => copySizes(pl.id, players[0].id)}
                  desktop={desktop}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <SFAddBar>
        {hasPlayers && players.length > 1 && !closed && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <span className="sf-mono sf-up" style={{ fontSize: 10.5, color: SF.muted, letterSpacing: ".07em" }}>{incPlayers.length} {incPlayers.length === 1 ? "kit" : "kits"} · {incPlayers.length * b.items.length} items</span>
            <span className="sf-display" style={{ fontSize: 17, fontWeight: 900, color: b.covered ? SF.covered : SF.ink }}>{b.covered ? "$0.00" : `$${grandTotal.toFixed(2)}`}</span>
          </div>
        )}
        {closed ? (
          <SFButton full size="lg" disabled>Ordering Closed</SFButton>
        ) : (
          <SFButton full size="lg" onClick={add} disabled={!allReady}>{btnLabel}</SFButton>
        )}
      </SFAddBar>
    </div>
  );
}

Object.assign(window, { uid, shortItemName, SFCheckCircle, SFSheetHeader, SFAccordion, SFProductInfo, SFPersonalize, SFAddBar, SFPlayerKitCard, SFProductDetail, SFBundleDetail });


/* ===== ASSET 12 : 67a4a43f-8739-4700-b77b-1587a8158fc5 ===== */
// sf-cart.jsx — Cart with line items (grouped by bundle), personalization, totals.

function SFCartLine({ i, desktop }) {
  const { removeFromCart, setQty } = useStore();
  return (
    <div style={{ display: "flex", gap: 12, padding: "16px 0" }}>
      <SFProductImg src={i.img} tone={i.tone} label={i.name} ratio="1 / 1" radius={11} pad="8%" style={{ width: desktop ? 84 : 70, height: desktop ? 84 : 70, flexShrink: 0 }} />
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 12 }}>
          <div className="sf-display" style={{ fontSize: 14.5, fontWeight: 700 }}>{i.name}</div>
          <button className="sf-tap" onClick={() => removeFromCart(i.uid)} aria-label="Remove" style={{ background: "none", border: 0, color: SF.muted2, flexShrink: 0 }}><IconTrash size={17} /></button>
        </div>
        <div className="sf-mono" style={{ fontSize: 10.5, color: SF.muted, marginTop: 4, letterSpacing: ".04em" }}>
          SIZE {i.size}{i.personalization && i.personalization.name ? ` · ${i.personalization.name}` : ""}{i.personalization && i.personalization.number ? ` #${i.personalization.number}` : ""}
        </div>
        <div style={{ marginTop: 8 }}>{i.badge && <SFBadge kind={i.badge} />}</div>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 12 }}>
          <SFQty value={i.qty} onChange={(q) => setQty(i.uid, q)} size={30} />
          <div className="sf-display" style={{ fontWeight: 800, fontSize: 15, color: i.covered ? SF.covered : SF.ink }}>{i.covered ? "$0.00" : "$" + (i.price * i.qty).toFixed(2)}</div>
        </div>
      </div>
    </div>
  );
}

function SFSummaryRow({ label, value, strong, accent }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: strong ? "13px 0 0" : "7px 0" }}>
      <span style={{ fontSize: strong ? 15 : 13.5, fontWeight: strong ? 800 : 500, color: strong ? SF.ink : SF.muted, fontFamily: strong ? SF.display : SF.body }}>{label}</span>
      <span className={strong ? "sf-display" : ""} style={{ fontSize: strong ? 18 : 13.5, fontWeight: strong ? 800 : 600, color: accent ? SF.covered : SF.ink }}>{value}</span>
    </div>
  );
}

function SFOrderSummary({ totals, cta, onCta, ctaLabel = "Checkout" }) {
  return (
    <div>
      <SFSectionTitle style={{ marginBottom: 12 }}>Order Summary</SFSectionTitle>
      <SFSummaryRow label="Subtotal" value={`$${totals.subtotal.toFixed(2)}`} />
      {totals.contributions > 0 && <SFSummaryRow label="Team Contributions" value={`–$${totals.contributions.toFixed(2)}`} accent />}
      <SFSummaryRow label="Estimated Shipping" value={totals.shipping ? `$${totals.shipping.toFixed(2)}` : "Free"} />
      <SFSummaryRow label="Estimated Tax" value={`$${totals.tax.toFixed(2)}`} />
      <div style={{ height: 1, background: SF.line, margin: "12px 0 0" }} />
      <SFSummaryRow label="Total" value={`$${totals.total.toFixed(2)}`} strong />
      {cta && <SFButton full size="lg" onClick={onCta} style={{ marginTop: 16 }}>{ctaLabel} <IconArrowRight size={18} /></SFButton>}
    </div>
  );
}

function SFCart() {
  const { cart, cartTotals, go, mode, viewer } = useStore();
  const desktop = mode === "desktop";

  if (cart.length === 0) {
    return (
      <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, textAlign: "center" }}>
        <span style={{ width: 72, height: 72, borderRadius: 999, background: SF.soft, color: SF.muted2, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 }}><IconCart size={34} /></span>
        <div className="sf-display" style={{ fontSize: 19, fontWeight: 800 }}>Your cart is empty</div>
        <p style={{ fontSize: 13.5, color: SF.muted, margin: "8px 0 24px" }}>Add your team gear to get started.</p>
        <SFButton onClick={() => go("collection", { category: null })}>Start Shopping</SFButton>
      </div>
    );
  }

  // group by bundle
  const groups = [];
  const idx = {};
  cart.forEach((i) => {
    const key = i.bundleId || i.uid;
    if (idx[key] == null) { idx[key] = groups.length; groups.push({ key, label: i.bundleLabel, items: [] }); }
    groups[idx[key]].items.push(i);
  });

  const itemsCol = (
    <div>
      {groups.map((g) => (
        <div key={g.key} style={{ marginBottom: 16 }}>
          {g.label && (
            <div className="sf-mono sf-up" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".09em", color: SF.muted, display: "flex", alignItems: "center", gap: 8, marginBottom: 2 }}>
              <IconLayers size={14} /> {g.label}
            </div>
          )}
          <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 14, padding: "0 16px" }}>
            {g.items.map((i, n) => (
              <div key={i.uid} style={{ borderTop: n ? `1px solid ${SF.line2}` : 0 }}><SFCartLine i={i} desktop={desktop} /></div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {!desktop && <div style={{ padding: "16px 20px 4px" }}><h1 className="sf-display" style={{ margin: 0, fontSize: 24, fontWeight: 900 }}>Cart</h1><div style={{ fontSize: 12.5, color: SF.muted, marginTop: 2 }}>{cart.length} item{cart.length > 1 ? "s" : ""}</div></div>}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {desktop ? (
          <div style={{ maxWidth: 1100, margin: "0 auto", padding: "32px 40px 52px" }}>
            <h1 className="sf-display" style={{ margin: "0 0 24px", fontSize: 28, fontWeight: 900 }}>Your Cart</h1>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 360px", gap: 36, alignItems: "start" }}>
              {itemsCol}
              <div style={{ position: "sticky", top: 24, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 24, boxShadow: SF.shadow }}>
                <SFOrderSummary totals={cartTotals} cta onCta={() => go("checkout")} />
              </div>
            </div>
          </div>
        ) : (
          <div style={{ padding: "16px 20px 24px" }}>
            {itemsCol}
            <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 16, marginTop: 4 }}>
              <SFOrderSummary totals={cartTotals} />
            </div>
          </div>
        )}
      </div>
      {!desktop && (
        <SFAddBar>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 12 }}>
            <span className="sf-mono sf-up" style={{ fontSize: 11, color: SF.muted, letterSpacing: ".08em" }}>Total</span>
            <span className="sf-display" style={{ fontSize: 20, fontWeight: 900 }}>${cartTotals.total.toFixed(2)}</span>
          </div>
          <SFButton full size="lg" onClick={() => go("checkout")}>Checkout <IconArrowRight size={18} /></SFButton>
        </SFAddBar>
      )}
    </div>
  );
}

Object.assign(window, { SFCartLine, SFSummaryRow, SFOrderSummary, SFCart });


/* ===== ASSET 13 : b4698937-3396-42d3-8cef-559d0f706dc2 ===== */
// sf-checkout.jsx — Multi-step checkout (Shipping → Payment → Review) + confirmation.

const { useState: useS8 } = React;

function SFStepper({ step, steps = ["Shipping", "Payment", "Review"] }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 0, padding: "4px 0 2px" }}>
      {steps.map((s, i) => {
        const n = i + 1, done = step > n, cur = step === n;
        return (
          <React.Fragment key={s}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="sf-display" style={{ width: 28, height: 28, borderRadius: 999, background: done ? SF.covered : cur ? SF.ink : SF.soft2, color: done || cur ? "#fff" : SF.muted2, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{done ? <IconCheck size={14} stroke={3} /> : n}</span>
              <span className="sf-mono sf-up" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".06em", color: cur ? SF.ink : SF.muted }}>{s}</span>
            </div>
            {i < steps.length - 1 && <div style={{ flex: 1, height: 2, background: done ? SF.covered : SF.line, margin: "0 12px", borderRadius: 2 }} />}
          </React.Fragment>
        );
      })}
    </div>
  );
}

function SFRadioCard({ on, onClick, children }) {
  return (
    <button className="sf-tap" onClick={onClick} style={{ width: "100%", textAlign: "left", display: "flex", gap: 12, alignItems: "flex-start", background: "#fff", border: `1.6px solid ${on ? SF.ink : SF.line}`, borderRadius: 13, padding: "16px 16px" }}>
      <span style={{ width: 20, height: 20, borderRadius: 999, border: `1.6px solid ${on ? SF.ink : SF.muted2}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>{on && <span style={{ width: 12, height: 12, borderRadius: 999, background: SF.ink }} />}</span>
      <span style={{ flex: 1 }}>{children}</span>
    </button>
  );
}

function SFSecure() {
  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, color: SF.muted, fontSize: 11.5, marginTop: 12 }}>
      <IconLock size={14} /> Secure 256-bit encrypted checkout
    </div>
  );
}

function SFCheckout() {
  const { cart, cartTotals, checkoutStep, setCheckoutStep, selAddress, setSelAddress, selCard, setSelCard, placeOrder, mode, back, go, teamAccess, setTeamAccess, guestEmail, setGuestEmail, approvalRequired } = useStore();
  const desktop = mode === "desktop";
  const [addNew, setAddNew] = useS8(false);
  const [addCard, setAddCard] = useS8(false);
  // Risk-tiered gate (Epic D): a cart holding team gear inserts a "Team Access"
  // step at the front of checkout — team code + "who is this order for?" +
  // consent opt-in. Fan-gear-only carts skip it entirely (fully open tier).
  const hasTeam = cart.some((i) => i.badge === "required" || i.badge === "supplied");
  const hasSupplied = cart.some((i) => i.badge === "supplied");
  const steps = hasTeam ? ["Team Access", "Shipping", "Payment", "Review"] : ["Shipping", "Payment", "Review"];
  const step = checkoutStep;
  const stepName = steps[Math.min(step, steps.length) - 1];
  const stepOf = (name) => steps.indexOf(name) + 1;
  const [gate, setGate] = useS8(() => ({ code: (teamAccess && teamAccess.code) || "", player: (teamAccess && teamAccess.player) || "", email: (teamAccess && teamAccess.email) || "", phone: (teamAccess && teamAccess.phone) || "", optIn: !!(teamAccess && teamAccess.optIn) }));
  const [gateTried, setGateTried] = useS8(false);
  const codeOk = /^[A-Z]{2}[0-9]{2}[A-Z]$/.test(gate.code.trim().toUpperCase());
  const emailOk = /.+@.+\..+/.test(gate.email);
  const gateOk = codeOk && gate.player.trim().length > 1 && emailOk;
  const addr = ADDRESSES.find((a) => a.id === selAddress);
  const card = CARDS.find((c) => c.id === selCard);

  if (cart.length === 0) {
    return (
      <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 40, textAlign: "center" }}>
        <div className="sf-display" style={{ fontSize: 18, fontWeight: 800 }}>Nothing to check out</div>
        <p style={{ fontSize: 13.5, color: SF.muted, margin: "8px 0 20px" }}>Your cart is empty.</p>
        <SFButton onClick={() => go("collection", { category: null })}>Shop the Store</SFButton>
      </div>
    );
  }

  // ── step bodies ──
  const shipping = (
    <div>
      <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12, fontSize: 12.5, color: SF.muted }}>
        <IconUser size={15} /> Checking out as a guest — no account required.
      </div>
      <div style={{ marginBottom: 16 }}>
        <SFField label="Contact Email"><SFInput type="email" placeholder="you@example.com" value={guestEmail} onChange={(e) => setGuestEmail(e.target.value)} /></SFField>
        <div style={{ fontSize: 11.5, color: SF.muted2, marginTop: 6 }}>We'll email a secure order link here — track, update, or cancel without an account.</div>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {ADDRESSES.map((a) => (
          <SFRadioCard key={a.id} on={selAddress === a.id} onClick={() => setSelAddress(a.id)}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <span className="sf-display" style={{ fontSize: 14.5, fontWeight: 700 }}>{a.name}</span>
              {a.default && <span className="sf-mono" style={{ fontSize: 9, fontWeight: 700, color: SF.muted, background: SF.soft2, padding: "2px 8px", borderRadius: 5, letterSpacing: ".06em" }}>DEFAULT</span>}
            </div>
            <div style={{ fontSize: 13, color: SF.muted, marginTop: 4, lineHeight: 1.5 }}>{a.line1}{a.line2 ? `, ${a.line2}` : ""}<br />{a.city}, {a.state} {a.zip}</div>
          </SFRadioCard>
        ))}
      </div>
      {addNew ? (
        <div style={{ marginTop: 12, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 13, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="sf-label" style={{ margin: 0 }}>New Address</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <SFInput placeholder="First name" /><SFInput placeholder="Last name" />
          </div>
          <SFInput placeholder="Street address" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <SFInput placeholder="City" /><SFInput placeholder="State" />
          </div>
          <SFInput placeholder="ZIP code" />
          <div style={{ display: "flex", gap: 12 }}>
            <SFButton variant="primary" size="sm" onClick={() => setAddNew(false)}>Save Address</SFButton>
            <SFButton variant="ghost" size="sm" onClick={() => setAddNew(false)}>Cancel</SFButton>
          </div>
        </div>
      ) : (
        <button className="sf-link sf-tap" onClick={() => setAddNew(true)} style={{ background: "none", border: 0, color: SF.supplied, fontSize: 13, fontWeight: 700, marginTop: 12, display: "inline-flex", alignItems: "center", gap: 8 }}><IconPlus size={15} /> Add New Address</button>
      )}
    </div>
  );

  const payment = (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {CARDS.map((c) => (
          <SFRadioCard key={c.id} on={selCard === c.id} onClick={() => setSelCard(c.id)}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 40, height: 28, borderRadius: 5, background: "linear-gradient(135deg,#eb5757,#f2994a)", flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}><span style={{ width: 16, height: 16, borderRadius: 999, background: "rgba(255,255,255,.5)" }} /></span>
              <div>
                <div className="sf-display" style={{ fontSize: 14, fontWeight: 700 }}>•••• {c.last4}</div>
                <div className="sf-mono" style={{ fontSize: 10.5, color: SF.muted, marginTop: 2 }}>{c.name} · Exp {c.exp}</div>
              </div>
            </div>
          </SFRadioCard>
        ))}
      </div>
      {addCard ? (
        <div style={{ marginTop: 12, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 13, padding: 16, display: "flex", flexDirection: "column", gap: 12 }}>
          <div className="sf-label" style={{ margin: 0 }}>New Card</div>
          <SFInput placeholder="Cardholder name" />
          <SFInput placeholder="Card number" />
          <div style={{ display: "flex", gap: 12 }}>
            <SFInput placeholder="MM / YY" />
            <SFInput placeholder="CVV" />
          </div>
          <SFInput placeholder="Billing ZIP" />
          <div style={{ display: "flex", gap: 12 }}>
            <SFButton variant="primary" size="sm" onClick={() => setAddCard(false)}>Save Card</SFButton>
            <SFButton variant="ghost" size="sm" onClick={() => setAddCard(false)}>Cancel</SFButton>
          </div>
        </div>
      ) : (
        <button className="sf-link sf-tap" onClick={() => setAddCard(true)} style={{ background: "none", border: 0, color: SF.supplied, fontSize: 13, fontWeight: 700, marginTop: 12, display: "inline-flex", alignItems: "center", gap: 8 }}><IconPlus size={15} /> Add Payment Method</button>
      )}
      <SFSecure />
    </div>
  );

  const review = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 13, padding: "4px 16px" }}>
        {cart.map((i, n) => (
          <div key={i.uid} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: n ? `1px solid ${SF.line2}` : 0, alignItems: "center" }}>
            <SFProductImg src={i.img} tone={i.tone} label={i.name} ratio="1 / 1" radius={9} pad="8%" style={{ width: 52, height: 52, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div className="sf-display" style={{ fontSize: 13.5, fontWeight: 700 }}>{i.name}</div>
              <div className="sf-mono" style={{ fontSize: 10, color: SF.muted, marginTop: 4, letterSpacing: ".04em" }}>SIZE {i.size} · QTY {i.qty}{i.personalization && i.personalization.name ? ` · ${i.personalization.name}` : ""}</div>
            </div>
            <span className="sf-display" style={{ fontWeight: 800, fontSize: 13.5, color: i.covered ? SF.covered : SF.ink }}>{i.covered ? "$0.00" : "$" + (i.price * i.qty).toFixed(2)}</span>
          </div>
        ))}
      </div>
      {hasTeam && teamAccess &&
        <SFReviewBlock title="Team Access" onEdit={() => setCheckoutStep(stepOf("Team Access"))}>
          Team code <strong style={{ fontWeight: 700 }}>{teamAccess.code}</strong> · for {teamAccess.player}{teamAccess.optIn ? " · joining the team roster" : ""}
        </SFReviewBlock>}
      <SFReviewBlock title="Ship to" onEdit={() => setCheckoutStep(stepOf("Shipping"))}>
        <strong style={{ fontWeight: 700 }}>{addr.name}</strong><br />{addr.line1}{addr.line2 ? `, ${addr.line2}` : ""}, {addr.city}, {addr.state} {addr.zip}
      </SFReviewBlock>
      <SFReviewBlock title="Payment" onEdit={() => setCheckoutStep(stepOf("Payment"))}>
        Mastercard •••• {card.last4} · {card.name}
      </SFReviewBlock>
    </div>
  );

  // ── Team Access step: team code + identity capture + consent opt-in ──
  const gateBody = (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div style={{ background: SF.navySoft, border: `1px solid ${SF.line}`, borderRadius: 13, padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
        <span style={{ color: SF.navy, marginTop: 1 }}><IconLock size={18} /></span>
        <span style={{ fontSize: 12.5, color: SF.ink, lineHeight: 1.55 }}>
          Your cart has <strong>team gear</strong>. Enter your team code so this order routes to the right team{hasSupplied ? " — team-supplied items are paid by the club" : ""}. No account needed.
        </span>
      </div>
      <SFField label="Team Code">
        <SFInput value={gate.code} onChange={(e) => setGate((s) => ({ ...s, code: e.target.value.toUpperCase() }))} placeholder="e.g. RT47A" maxLength={5} style={{ fontFamily: SF.mono, letterSpacing: ".12em", fontWeight: 700, textTransform: "uppercase" }} />
      </SFField>
      {codeOk
        ? <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: -8, fontSize: 12, fontWeight: 700, color: SF.covered }}><IconCheck size={14} stroke={3} /> Code accepted — order routed to {TEAM.name}, catalog scoped to your team.</div>
        : gateTried && <div style={{ marginTop: -8, fontSize: 12, color: "#d9534f", fontWeight: 600 }}>Enter the 5-character code from your coach or team rep (e.g. RT47A).</div>}
      <div>
        <div className="sf-display sf-up" style={{ fontSize: 12, fontWeight: 800, letterSpacing: ".08em", margin: "4px 0 12px" }}>Who is this order for?</div>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <SFField label="Player Name"><SFInput value={gate.player} onChange={(e) => setGate((s) => ({ ...s, player: e.target.value }))} placeholder="First and last name" /></SFField>
          {gateTried && gate.player.trim().length <= 1 && <div style={{ marginTop: -6, fontSize: 12, color: "#d9534f", fontWeight: 600 }}>Player name is required for team gear.</div>}
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 12 }}>
            <SFField label="Email"><SFInput type="email" value={gate.email} onChange={(e) => setGate((s) => ({ ...s, email: e.target.value }))} placeholder="you@example.com" /></SFField>
            <SFField label="Phone · optional"><SFInput inputMode="tel" value={gate.phone} onChange={(e) => setGate((s) => ({ ...s, phone: e.target.value }))} placeholder="(000) 000-0000" /></SFField>
          </div>
          {gateTried && !emailOk && <div style={{ marginTop: -6, fontSize: 12, color: "#d9534f", fontWeight: 600 }}>Enter a valid email for order updates.</div>}
        </div>
      </div>
      <label style={{ display: "flex", gap: 12, alignItems: "flex-start", background: "#fff", border: `1.6px solid ${gate.optIn ? SF.ink : SF.line}`, borderRadius: 13, padding: "14px 16px", cursor: "pointer" }}>
        <input type="checkbox" checked={gate.optIn} onChange={(e) => setGate((s) => ({ ...s, optIn: e.target.checked }))} style={{ width: 18, height: 18, marginTop: 1, accentColor: SF.ink, cursor: "pointer", flexShrink: 0 }} />
        <span>
          <span className="sf-display" style={{ display: "block", fontSize: 14, fontWeight: 800 }}>Join the team roster so checkout is faster next time?</span>
          <span style={{ display: "block", fontSize: 12, color: SF.muted, lineHeight: 1.55, marginTop: 4 }}>We'll share this order's player details and contact info with your team organizer for roster and fulfillment purposes. Optional — your order goes through either way.</span>
        </span>
      </label>
      {hasSupplied && approvalRequired &&
        <div style={{ background: "#fdf6e7", border: "1px solid #efdcae", borderRadius: 13, padding: "12px 16px", display: "flex", gap: 10, alignItems: "flex-start" }}>
          <span style={{ color: "#8a5f10", marginTop: 1 }}><IconClock size={16} /></span>
          <span style={{ fontSize: 12, color: "#8a5f10", lineHeight: 1.5 }}>This store reviews team-supplied orders — yours will be sent to the team rep for approval before it's confirmed.</span>
        </div>}
    </div>
  );

  const body = stepName === "Team Access" ? gateBody : stepName === "Shipping" ? shipping : stepName === "Payment" ? payment : review;
  const stepTitle = stepName === "Team Access" ? "Team Access & Player Info" : stepName === "Shipping" ? "Shipping Details" : stepName === "Payment" ? "Payment Method" : "Review & Place Order";
  const ctaLabel = step === steps.length ? "Place Order" : "Continue to " + steps[step];
  const onCta = () => {
    if (stepName === "Team Access") {
      setGateTried(true);
      if (!gateOk) return;
      setTeamAccess({ code: gate.code.trim().toUpperCase(), player: gate.player.trim(), email: gate.email.trim(), phone: gate.phone.trim(), optIn: gate.optIn });
      if (!guestEmail) setGuestEmail(gate.email.trim());
      setCheckoutStep(step + 1);
    } else if (step >= steps.length) placeOrder();
    else setCheckoutStep(step + 1);
  };

  const leftCol = (
    <div>
      <SFStepper step={step} steps={steps} />
      <h2 className="sf-display" style={{ fontSize: desktop ? 22 : 18, fontWeight: 800, margin: "20px 0 16px" }}>{stepTitle}</h2>
      {body}
    </div>
  );

  return (
    <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {!desktop && <div style={{ padding: "16px 20px 4px" }}><h1 className="sf-display" style={{ margin: 0, fontSize: 24, fontWeight: 900 }}>Checkout</h1></div>}
      <div style={{ flex: 1, overflowY: "auto" }}>
        {desktop ? (
          <div style={{ maxWidth: 1060, margin: "0 auto", padding: "32px 40px 52px", display: "grid", gridTemplateColumns: "1fr 340px", gap: 40, alignItems: "start" }}>
            <div>{leftCol}<div style={{ marginTop: 24 }}><SFButton size="lg" onClick={onCta}>{ctaLabel} <IconArrowRight size={18} /></SFButton>{step > 1 && <SFButton variant="ghost" size="lg" onClick={() => setCheckoutStep(step - 1)} style={{ marginLeft: 12 }}>Back</SFButton>}</div></div>
            <div style={{ position: "sticky", top: 24, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 24, boxShadow: SF.shadow }}>
              <SFOrderSummary totals={cartTotals} />
            </div>
          </div>
        ) : (
          <div style={{ padding: "12px 20px 24px" }}>
            {leftCol}
            <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 16, marginTop: 24 }}>
              <SFOrderSummary totals={cartTotals} />
            </div>
          </div>
        )}
      </div>
      {!desktop && (
        <SFAddBar>
          <SFButton full size="lg" onClick={onCta}>{ctaLabel}{step === steps.length ? ` · $${cartTotals.total.toFixed(2)}` : ""} {step !== steps.length && <IconArrowRight size={18} />}</SFButton>
        </SFAddBar>
      )}
    </div>
  );
}

function SFReviewBlock({ title, onEdit, children }) {
  return (
    <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 13, padding: "16px 16px" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 8 }}>
        <span className="sf-mono sf-up" style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: ".07em", color: SF.muted }}>{title}</span>
        <button className="sf-link sf-tap" onClick={onEdit} style={{ background: "none", border: 0, color: SF.supplied, fontSize: 12, fontWeight: 700, display: "inline-flex", alignItems: "center", gap: 4 }}><IconEdit size={13} /> Edit</button>
      </div>
      <div style={{ fontSize: 13.5, color: SF.ink, lineHeight: 1.55 }}>{children}</div>
    </div>
  );
}

// ─────────────── Order confirmation ───────────────
function SFConfirm() {
  const { lastOrder, resetTo, go, mode } = useStore();
  const o = lastOrder;
  if (!o) { resetTo("home"); return null; }
  const desktop = mode === "desktop";
  return (
    <div className="sf-fade" style={{ height: "100%", overflowY: "auto" }}>
      <div style={{ maxWidth: 560, margin: "0 auto", padding: desktop ? "48px 40px" : "40px 24px 30px", textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
          <span style={{ width: 76, height: 76, borderRadius: 999, background: SF.coveredBg, color: SF.covered, display: "flex", alignItems: "center", justifyContent: "center", animation: "sfPop .3s ease" }}><IconCheck size={40} stroke={2.6} /></span>
        </div>
        <h1 className="sf-display" style={{ fontSize: 27, fontWeight: 900, margin: "0 0 8px" }}>Order Confirmed!</h1>
        <p style={{ fontSize: 14, color: SF.muted, margin: "0 0 4px", lineHeight: 1.5 }}>Thanks — your team gear is on the way to production.</p>
        <div className="sf-mono sf-up" style={{ fontSize: 12, letterSpacing: ".1em", color: SF.ink, fontWeight: 700, marginBottom: 24 }}>Order #{o.num}</div>

        <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 20, textAlign: "left", boxShadow: SF.shadow }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, paddingBottom: 16, borderBottom: `1px solid ${SF.line2}` }}>
            <span style={{ width: 40, height: 40, borderRadius: 10, background: SF.navySoft, color: SF.navy, display: "flex", alignItems: "center", justifyContent: "center" }}><IconTruck size={21} /></span>
            <div>
              <div className="sf-display" style={{ fontSize: 14, fontWeight: 800 }}>Estimated delivery</div>
              <div style={{ fontSize: 12.5, color: SF.muted, marginTop: 1 }}>Jul 2 – Jul 8, 2026 · ships to {o.ship.city}, {o.ship.state}</div>
            </div>
          </div>
          <div style={{ paddingTop: 16 }}>
            {o.items.map((i, n) => (
              <div key={n} style={{ display: "flex", gap: 12, padding: "8px 0", alignItems: "center" }}>
                <SFProductImg src={i.img} tone={i.tone} label={i.name} ratio="1 / 1" radius={8} pad="8%" style={{ width: 44, height: 44, flexShrink: 0 }} />
                <div style={{ flex: 1 }}>
                  <div className="sf-display" style={{ fontSize: 13, fontWeight: 700 }}>{i.name}</div>
                  <div className="sf-mono" style={{ fontSize: 10, color: SF.muted, marginTop: 2 }}>SIZE {i.size} · QTY {i.qty}</div>
                </div>
                <span className="sf-display" style={{ fontWeight: 800, fontSize: 13, color: i.covered ? SF.covered : SF.ink }}>{i.covered ? "$0.00" : "$" + (i.price * i.qty).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 12, marginTop: 8, borderTop: `1px solid ${SF.line}` }}>
              <span className="sf-display" style={{ fontWeight: 800, fontSize: 15 }}>Total</span>
              <span className="sf-display" style={{ fontWeight: 900, fontSize: 17 }}>${o.total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {o.pendingApproval &&
          <div style={{ marginTop: 16, textAlign: "left", background: "#fdf6e7", border: "1px solid #efdcae", borderRadius: 13, padding: "14px 16px", display: "flex", gap: 12, alignItems: "flex-start" }}>
            <span style={{ color: "#8a5f10", marginTop: 1 }}><IconClock size={18} /></span>
            <span style={{ fontSize: 12.5, color: "#8a5f10", lineHeight: 1.55 }}><strong>Awaiting team approval.</strong> This store reviews team-supplied orders — your rep will approve it before production starts. We'll email you when it's confirmed.</span>
          </div>}
        <p style={{ fontSize: 12.5, color: SF.muted, margin: "16px 0 0", lineHeight: 1.55 }}>
          We emailed a secure order link{o.email ? <React.Fragment> to <strong style={{ color: SF.ink }}>{o.email}</strong></React.Fragment> : null} — use it any time to track, update, or cancel this order. No account needed.
        </p>
        {o.items.some((i) => i.badge === "required" || i.badge === "supplied") && <SFGuestAccountOffer email={o.email} />}

        <div style={{ display: "flex", flexDirection: desktop ? "row" : "column", gap: 12, marginTop: 24 }}>
          <SFButton variant="primary" full onClick={() => go("orders")}>View Orders</SFButton>
          <SFButton variant="light" full onClick={() => resetTo("home")}>Continue Shopping</SFButton>
        </div>
      </div>
    </div>
  );
}

// Post-purchase account offer — optional and encouraged, never required (Epic E).
// Framed around saved address/payment; shown for team-gear orders only.
function SFGuestAccountOffer({ email }) {
  const [pass, setPass] = useS8("");
  const [done, setDone] = useS8(false);
  const [dismissed, setDismissed] = useS8(false);
  if (dismissed) return null;
  if (done) return (
    <div style={{ marginTop: 16, textAlign: "left", background: SF.coveredBg, border: `1px solid ${SF.covered}33`, borderRadius: 13, padding: "14px 16px", display: "flex", gap: 10, alignItems: "center" }}>
      <span style={{ color: SF.covered }}><IconCheck size={18} stroke={2.6} /></span>
      <span style={{ fontSize: 12.5, color: SF.ink, lineHeight: 1.5 }}>Account created — your address and payment details are saved for the next gear run.</span>
    </div>);
  return (
    <div style={{ marginTop: 16, textAlign: "left", background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 20, boxShadow: SF.shadow }}>
      <div className="sf-display" style={{ fontSize: 15, fontWeight: 800 }}>Save your info for next time?</div>
      <p style={{ fontSize: 12.5, color: SF.muted, margin: "6px 0 14px", lineHeight: 1.55 }}>Totally optional — create an account to keep your address and payment on file for faster checkout on the next gear run.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <SFField label="Email"><SFInput value={email || ""} onChange={() => {}} /></SFField>
        <SFField label="Password"><SFInput type="password" value={pass} onChange={(e) => setPass(e.target.value)} placeholder="8+ characters" /></SFField>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <SFButton variant="primary" disabled={pass.length < 8} onClick={() => pass.length >= 8 && setDone(true)} style={{ flex: 1 }}>Create Account</SFButton>
        <SFButton variant="light" onClick={() => setDismissed(true)} style={{ flex: 1 }}>No Thanks</SFButton>
      </div>
    </div>);
}

Object.assign(window, { SFStepper, SFRadioCard, SFSecure, SFCheckout, SFReviewBlock, SFConfirm });


/* ===== ASSET 14 : fb92c020-bbee-4004-997a-b7d4743a5895 ===== */
// sf-account.jsx — Profile, Order History, Order Detail, Cancellation.

const { useState: useS9 } = React;

function SFToggle({ on, onChange }) {
  return (
    <button className="sf-tap" onClick={() => onChange(!on)} style={{ width: 44, height: 28, borderRadius: 999, background: on ? SF.ink : SF.line, border: 0, padding: 4, display: "flex", justifyContent: on ? "flex-end" : "flex-start", transition: "background .15s", flexShrink: 0 }}>
      <span style={{ width: 20, height: 20, borderRadius: 999, background: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,.25)", transition: "all .15s" }} />
    </button>
  );
}

function SFAccountTabs({ tab, setTab }) {
  return (
    <div style={{ display: "flex", gap: 8, background: SF.soft2, borderRadius: 12, padding: 4 }}>
      {[["profile", "Profile", IconUser], ["orders", "Orders", IconReceipt]].map(([id, label, Ico]) => {
        const on = tab === id;
        return (
          <button key={id} className="sf-tap" onClick={() => setTab(id)} style={{ flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "12px 12px", borderRadius: 9, border: 0, background: on ? "#fff" : "transparent", color: on ? SF.ink : SF.muted, boxShadow: on ? SF.shadow : "none", fontFamily: SF.display, fontWeight: 800, fontSize: 12.5, letterSpacing: ".04em", textTransform: "uppercase", transition: "background .15s ease, color .12s ease, box-shadow .15s ease" }}>
            <Ico size={16} /> {label}
          </button>
        );
      })}
    </div>
  );
}

function SFCard({ title, onEdit, children, style }) {
  return (
    <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 16, ...style }}>
      {title && (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
          <span className="sf-display sf-up" style={{ fontSize: 13, fontWeight: 800, letterSpacing: ".05em" }}>{title}</span>
          {onEdit && <button className="sf-tap" onClick={onEdit} style={{ background: "none", border: 0, color: SF.muted }}><IconEdit size={17} /></button>}
        </div>
      )}
      {children}
    </div>
  );
}

function SFInfoRow({ label, value }) {
  return (
    <div style={{ marginBottom: 12 }}>
      <div className="sf-mono sf-up" style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".08em", color: SF.muted }}>{label}</div>
      <div style={{ fontSize: 14.5, fontWeight: 600, marginTop: 4 }}>{value}</div>
    </div>
  );
}

// ─────────────── Profile body ───────────────
function SFProfileBody() {
  const { viewer, mode } = useStore();
  const desktop = mode === "desktop";
  const [prefs, setPrefs] = useS9({ email: true, orders: true, store: false });
  const isFan = viewer === "fan";
  const players = viewer === "parent" ? PLAYERS : viewer === "player" ? [PLAYERS[0]] : [];

  return (
    <div style={{ display: "grid", gridTemplateColumns: desktop ? "1fr 1fr" : "1fr", gap: 16 }}>
      {/* identity */}
      <SFCard style={{ gridColumn: desktop ? "1 / -1" : "auto" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <SFCrest size={52} />
          <div style={{ flex: 1 }}>
            <div className="sf-mono sf-up" style={{ fontSize: 10, letterSpacing: ".1em", color: SF.muted }}>{TEAM.name}</div>
            <div className="sf-display" style={{ fontSize: 19, fontWeight: 800, marginTop: 2 }}>{isFan ? "Jordan Lee" : "Jalen Hurts"}</div>
            <div className="sf-mono sf-up" style={{ fontSize: 10, letterSpacing: ".1em", color: SF.muted, marginTop: 2 }}>{isFan ? "Fan" : viewer === "parent" ? "Parent / Guardian" : "Player · #15"}</div>
          </div>
        </div>
        {players.length > 0 && (
          <div style={{ marginTop: 16 }}>
            <div className="sf-label" style={{ marginBottom: 8 }}>{viewer === "parent" ? "Players" : "Your Player"}</div>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {players.map((p) => (
                <div key={p.id} style={{ display: "flex", alignItems: "center", gap: 8, background: SF.soft, borderRadius: 10, padding: "8px 12px" }}>
                  <span className="sf-display" style={{ width: 28, height: 28, borderRadius: 7, background: SF.navy, color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 800 }}>{p.number}</span>
                  <span style={{ fontSize: 13.5, fontWeight: 600 }}>{p.first} {p.last}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </SFCard>

      <SFCard title="Account Details" onEdit={() => {}}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 4 }}>
          <SFInfoRow label="First Name" value={isFan ? "Jordan" : "Jalen"} />
          <SFInfoRow label="Last Name" value={isFan ? "Lee" : "Hurts"} />
        </div>
        <SFInfoRow label="Phone Number" value="(602) 555-0148" />
        <SFInfoRow label="Contact Email" value={isFan ? "jordan.lee@example.com" : "jalen.hurts@example.com"} />
      </SFCard>

      <SFCard title="Shipping Address" onEdit={() => {}}>
        {ADDRESSES.map((a) => (
          <div key={a.id} style={{ display: "flex", gap: 12, padding: "8px 0", borderTop: a.id !== ADDRESSES[0].id ? `1px solid ${SF.line2}` : 0 }}>
            <IconPin size={18} style={{ color: SF.muted, marginTop: 2, flexShrink: 0 }} />
            <div style={{ fontSize: 13.5, lineHeight: 1.5 }}>
              <span style={{ fontWeight: 700 }}>{a.name}{a.default ? "" : ""}</span><br />
              <span style={{ color: SF.muted }}>{a.line1}{a.line2 ? `, ${a.line2}` : ""}, {a.city}, {a.state} {a.zip}</span>
            </div>
          </div>
        ))}
      </SFCard>

      <SFCard title="Preferences" style={{ gridColumn: desktop ? "1 / -1" : "auto" }}>
        {[["email", "Email notifications", "News and announcements from your team"], ["orders", "Order updates", "Status changes and shipping alerts"], ["store", "Store updates", "New products and store reminders"]].map(([k, label, sub], n) => (
          <div key={k} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderTop: n ? `1px solid ${SF.line2}` : 0 }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600 }}>{label}</div>
              <div style={{ fontSize: 12, color: SF.muted, marginTop: 1 }}>{sub}</div>
            </div>
            <SFToggle on={prefs[k]} onChange={(v) => setPrefs((p) => ({ ...p, [k]: v }))} />
          </div>
        ))}
      </SFCard>
    </div>
  );
}

// ─────────────── Order card ───────────────
function SFOrderCard({ o, onOpen, onCancel }) {
  const canCancel = o.status === "processing" && !o.cancelRequested;
  return (
    <div style={{ background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 16, padding: 16 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
        <div>
          <div className="sf-display" style={{ fontSize: 16, fontWeight: 800 }}>Order #{o.num}</div>
          <div className="sf-mono" style={{ fontSize: 11, color: SF.muted, marginTop: 4, letterSpacing: ".04em" }}>{o.date}</div>
        </div>
        <SFStatus status={o.status} />
      </div>
      <div style={{ margin: "16px 0 4px", borderTop: `1px solid ${SF.line2}` }}>
        {o.items.map((i, n) => (
          <div key={n} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 0", borderBottom: n < o.items.length - 1 ? `1px solid ${SF.line2}` : 0 }}>
            <SFProductImg src={i.img} tone={i.tone} label={i.name} ratio="1 / 1" radius={9} pad="8%" style={{ width: 48, height: 48, flexShrink: 0 }} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                <span className="sf-display" style={{ fontSize: 13.5, fontWeight: 700 }}>{i.name}</span>
                {i.badge && <SFBadge kind={i.badge} />}
              </div>
              <div className="sf-mono" style={{ fontSize: 10, color: SF.muted, marginTop: 4 }}>SIZE {i.size} · QTY {i.qty}{i.covered ? " · Covered by team fee" : ""}</div>
            </div>
            <span className="sf-display" style={{ fontWeight: 800, fontSize: 13.5, color: i.covered ? SF.covered : SF.ink }}>{i.covered ? "$0.00" : "$" + i.price.toFixed(2)}</span>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: 12 }}>
        <span className="sf-display" style={{ fontSize: 14, fontWeight: 800 }}>Total</span>
        <span className="sf-display" style={{ fontSize: 16, fontWeight: 900 }}>${o.total.toFixed(2)}</span>
      </div>
      <div style={{ display: "flex", gap: 12, marginTop: 16 }}>
        <SFButton variant="light" full size="sm" onClick={onOpen}>View Details</SFButton>
        {canCancel && <SFButton variant="ghost" size="sm" onClick={onCancel} style={{ color: SF.cancel, border: `1.5px solid ${SF.line}` }}>Request to Cancel</SFButton>}
      </div>
    </div>
  );
}

// ─────────────── Orders body ───────────────
function SFOrdersBody({ onCancel }) {
  const { orders, go, mode } = useStore();
  const desktop = mode === "desktop";
  const [q, setQ] = useS9("");
  const [sort, setSort] = useS9("Newest First");
  const [sortOpen, setSortOpen] = useS9(false);
  let list = orders.filter((o) => !q || `#${o.num} ${o.items.map((i) => i.name).join(" ")}`.toLowerCase().includes(q.toLowerCase()));
  if (sort === "Highest Total") list = [...list].sort((a, b) => b.total - a.total);
  if (sort === "Lowest Total") list = [...list].sort((a, b) => a.total - b.total);

  return (
    <div>
      <div style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <div style={{ flex: 1, display: "flex", alignItems: "center", gap: 12, background: SF.soft, border: `1px solid ${SF.field}`, borderRadius: 4, padding: "12px 16px" }}>
          <IconSearch size={18} stroke={1.8} style={{ color: SF.muted }} />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search orders" style={{ flex: 1, border: 0, outline: 0, background: "none", fontSize: 14, fontFamily: SF.body }} />
        </div>
        <div style={{ position: "relative" }}>
          <button className="sf-tap" onClick={() => setSortOpen((v) => !v)} aria-label="Sort" style={{ height: "100%", display: "flex", alignItems: "center", gap: 8, background: "#fff", border: `1px solid ${SF.field}`, borderRadius: 4, padding: "0 16px", fontSize: 12.5, fontWeight: 600 }}><IconSort size={17} />{desktop && sort}</button>
          {sortOpen && (
            <div style={{ position: "absolute", top: "calc(100% + 8px)", right: 0, background: "#fff", border: `1px solid ${SF.line}`, borderRadius: 6, boxShadow: SF.shadowCard, zIndex: 20, overflow: "hidden", minWidth: 172 }}>
              {["Newest First", "Oldest First", "Highest Total", "Lowest Total", "Status"].map((o) => <button key={o} className="sf-tap" onClick={() => { setSort(o); setSortOpen(false); }} style={{ width: "100%", textAlign: "left", padding: "12px 16px", background: o === sort ? SF.soft : "#fff", border: 0, fontSize: 13.5 }}>{o}</button>)}
            </div>
          )}
        </div>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: desktop ? "1fr 1fr" : "1fr", gap: 16 }}>
        {list.map((o) => <SFOrderCard key={o.id} o={o} onOpen={() => go("orderDetail", { id: o.id })} onCancel={() => onCancel(o)} />)}
      </div>
    </div>
  );
}

// ─────────────── Account screen (Profile / Orders) ───────────────
function SFAccount() {
  const { route, mode } = useStore();
  const desktop = mode === "desktop";
  const [tab, setTab] = useS9(route.screen === "orders" ? "orders" : "profile");
  const [cancelOrder, setCancelOrder] = useS9(null);

  return (
    <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {!desktop && <div style={{ padding: "16px 20px 0" }}><h1 className="sf-display" style={{ margin: 0, fontSize: 24, fontWeight: 900 }}>Account</h1></div>}
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ maxWidth: desktop ? 940 : "none", margin: "0 auto", padding: desktop ? "32px 40px 50px" : "14px 20px 28px" }}>
          {desktop && <h1 className="sf-display" style={{ margin: "0 0 16px", fontSize: 28, fontWeight: 900 }}>My Account</h1>}
          <div style={{ marginBottom: 16 }}><SFAccountTabs tab={tab} setTab={setTab} /></div>
          {tab === "profile" ? <SFProfileBody /> : <SFOrdersBody onCancel={setCancelOrder} />}
        </div>
      </div>
      {cancelOrder && <SFCancelModal order={cancelOrder} onClose={() => setCancelOrder(null)} />}
    </div>
  );
}

// ─────────────── Order detail ───────────────
function SFOrderDetail() {
  const { route, orders, back, mode, toast } = useStore();
  const o = orders.find((x) => x.id === route.params.id) || orders[0];
  const desktop = mode === "desktop";
  const [cancelOrder, setCancelOrder] = useS9(null);
  const subtotal = o.items.reduce((s, i) => s + (i.covered ? 0 : i.price * i.qty), 0);
  const contributions = o.items.reduce((s, i) => s + (i.covered ? (i.price || 0) : 0), 0);

  return (
    <div className="sf-fade" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <div style={{ flex: 1, overflowY: "auto" }}>
        <div style={{ maxWidth: desktop ? 820 : "none", margin: "0 auto", padding: desktop ? "32px 40px 50px" : "16px 20px 28px" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
            <div>
              <h1 className="sf-display" style={{ margin: 0, fontSize: desktop ? 26 : 22, fontWeight: 900 }}>Order #{o.num}</h1>
              <div className="sf-mono" style={{ fontSize: 11.5, color: SF.muted, marginTop: 4, letterSpacing: ".04em" }}>Placed {o.date}</div>
            </div>
            <SFStatus status={o.status} />
          </div>

          {/* timeline */}
          <SFCard title="Production Timeline" style={{ marginBottom: 16 }}>
            <div>
              {o.timeline.map((t, n) => {
                const last = n === o.timeline.length - 1;
                return (
                  <div key={n} style={{ display: "flex", gap: 12 }}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                      <span style={{ width: 24, height: 24, borderRadius: 999, background: t.done ? SF.covered : t.active ? SF.ink : SF.soft2, color: t.done || t.active ? "#fff" : SF.muted2, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 10, fontWeight: 800 }}>{t.done ? <IconCheck size={12} stroke={3} /> : t.active ? <span style={{ width: 8, height: 8, borderRadius: 999, background: "#fff" }} /> : ""}</span>
                      {!last && <span style={{ width: 2, flex: 1, minHeight: 16, background: t.done ? SF.covered : SF.line, margin: "2px 0" }} />}
                    </div>
                    <div style={{ paddingBottom: last ? 0 : 12 }}>
                      <div style={{ fontSize: 14, fontWeight: t.active ? 700 : 600, color: t.done || t.active ? SF.ink : SF.muted }}>{t.k}</div>
                      <div className="sf-mono" style={{ fontSize: 10.5, color: SF.muted, marginTop: 2 }}>{t.d}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            {o.tracking && (
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginTop: 12, paddingTop: 16, borderTop: `1px solid ${SF.line2}` }}>
                <IconTruck size={18} style={{ color: SF.muted }} />
                <div style={{ flex: 1 }}><div className="sf-mono" style={{ fontSize: 11, color: SF.muted }}>TRACKING</div><div style={{ fontSize: 13, fontWeight: 600 }}>{o.tracking}</div></div>
                <SFButton variant="light" size="sm" onClick={() => toast("Opening carrier tracking…")}>Track</SFButton>
              </div>
            )}
          </SFCard>

          {/* items */}
          <SFCard title="Items" style={{ marginBottom: 16 }}>
            {o.items.map((i, n) => (
              <div key={n} style={{ display: "flex", gap: 12, padding: "12px 0", borderTop: n ? `1px solid ${SF.line2}` : 0, alignItems: "center" }}>
                <SFProductImg src={i.img} tone={i.tone} label={i.name} ratio="1 / 1" radius={9} pad="8%" style={{ width: 56, height: 56, flexShrink: 0 }} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}><span className="sf-display" style={{ fontSize: 14, fontWeight: 700 }}>{i.name}</span>{i.badge && <SFBadge kind={i.badge} />}</div>
                  <div className="sf-mono" style={{ fontSize: 10.5, color: SF.muted, marginTop: 4 }}>SIZE {i.size} · QTY {i.qty}{i.name2 ? ` · ${i.name2}` : ""}</div>
                </div>
                <span className="sf-display" style={{ fontWeight: 800, fontSize: 14, color: i.covered ? SF.covered : SF.ink }}>{i.covered ? "$0.00" : "$" + (i.price * i.qty).toFixed(2)}</span>
              </div>
            ))}
            <div style={{ marginTop: 12, paddingTop: 12, borderTop: `1px solid ${SF.line}` }}>
              <SFSummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
              {contributions > 0 && <SFSummaryRow label="Team Contributions" value={`–$${contributions.toFixed(2)}`} accent />}
              <SFSummaryRow label="Shipping" value="Free" />
              <SFSummaryRow label="Total" value={`$${o.total.toFixed(2)}`} strong />
            </div>
          </SFCard>

          <div style={{ display: "grid", gridTemplateColumns: desktop ? "1fr 1fr" : "1fr", gap: 16 }}>
            <SFCard title="Shipping">
              <div style={{ fontSize: 13.5, lineHeight: 1.6 }}><strong style={{ fontWeight: 700 }}>{o.ship.name}</strong><br /><span style={{ color: SF.muted }}>{o.ship.line1}{o.ship.line2 ? `, ${o.ship.line2}` : ""}<br />{o.ship.city}, {o.ship.state} {o.ship.zip}</span></div>
            </SFCard>
            <SFCard title="Actions">
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                <SFButton variant="light" full size="sm" onClick={() => toast("Items added to your cart")}><IconRepeat size={15} /> Reorder Items</SFButton>
                {o.status === "processing" && !o.cancelRequested && <SFButton variant="ghost" full size="sm" onClick={() => setCancelOrder(o)} style={{ color: SF.cancel, border: `1.5px solid ${SF.line}` }}>Request Cancellation</SFButton>}
                {!(o.status === "processing") && <SFButton variant="ghost" full size="sm" onClick={() => toast("Support request started")}><IconHeadset size={15} /> Contact Support</SFButton>}
              </div>
            </SFCard>
          </div>
        </div>
      </div>
      {cancelOrder && <SFCancelModal order={cancelOrder} onClose={() => setCancelOrder(null)} />}
    </div>
  );
}

// ─────────────── Cancellation modal ───────────────
function SFCancelModal({ order, onClose }) {
  const { requestCancel } = useStore();
  const [reason, setReason] = useS9("");
  const [note, setNote] = useS9("");
  const [picked, setPicked] = useS9(() => Object.fromEntries(order.items.map((_, n) => [n, true])));
  const [done, setDone] = useS9(false);
  const reasonOpen = useS9(false);

  if (done) {
    return (
      <SFModalShell onClose={onClose}>
        <div style={{ textAlign: "center", padding: "8px 4px 4px" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}><span style={{ width: 56, height: 56, borderRadius: 999, background: SF.coveredBg, color: SF.covered, display: "flex", alignItems: "center", justifyContent: "center" }}><IconCheck size={30} stroke={2.6} /></span></div>
          <div className="sf-display" style={{ fontSize: 19, fontWeight: 800 }}>Cancellation Requested</div>
          <p style={{ fontSize: 13.5, color: SF.muted, margin: "8px 0 16px", lineHeight: 1.5 }}>Your request was sent to your team administrator. We'll email you once it's reviewed.</p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, textAlign: "left", marginBottom: 16 }}>
            {order.items.filter((_, n) => picked[n]).map((i, n) => (
              <div key={n} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                <SFProductImg src={i.img} tone={i.tone} label={i.name} ratio="1 / 1" radius={8} pad="8%" style={{ width: 44, height: 44, flexShrink: 0 }} />
                <div style={{ flex: 1 }}><div className="sf-display" style={{ fontSize: 13, fontWeight: 700 }}>{i.name}</div><div className="sf-mono" style={{ fontSize: 10, color: SF.muted, marginTop: 2 }}>SIZE {i.size} · QTY {i.qty}</div></div>
              </div>
            ))}
          </div>
          <SFButton variant="primary" full onClick={onClose}>Close</SFButton>
        </div>
      </SFModalShell>
    );
  }

  return (
    <SFModalShell onClose={onClose} title="Request Order Cancellation">
      <p style={{ fontSize: 13, color: SF.muted, margin: "0 0 8px", lineHeight: 1.5 }}>A cancellation request will be sent to your administrator.</p>
      <p style={{ fontSize: 12.5, color: SF.muted, margin: "0 0 16px", lineHeight: 1.5 }}>Customized products can't be canceled once they've gone into production.</p>
      <div style={{ marginBottom: 12 }}>
        <SFSelect value={reason} onChange={setReason} placeholder="Reason for cancellation" options={CANCEL_REASONS} />
      </div>
      <textarea value={note} onChange={(e) => setNote(e.target.value)} placeholder="Add a note (optional)" rows={2} className="sf-input" style={{ resize: "none", marginBottom: 16 }} />
      <div className="sf-mono sf-up" style={{ fontSize: 9.5, fontWeight: 700, letterSpacing: ".08em", color: SF.muted, display: "grid", gridTemplateColumns: "1fr auto", marginBottom: 8 }}>
        <span>Item</span><span>Qty</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16, maxHeight: 180, overflowY: "auto" }}>
        {order.items.map((i, n) => (
          <button key={n} className="sf-tap" onClick={() => setPicked((p) => ({ ...p, [n]: !p[n] }))} style={{ display: "flex", alignItems: "center", gap: 12, background: "none", border: 0, padding: "8px 0", textAlign: "left" }}>
            <span style={{ width: 20, height: 20, borderRadius: 5, border: `1.6px solid ${picked[n] ? SF.ink : SF.muted2}`, background: picked[n] ? SF.ink : "#fff", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{picked[n] && <IconCheck size={12} stroke={3} style={{ color: "#fff" }} />}</span>
            <SFProductImg src={i.img} tone={i.tone} label={i.name} ratio="1 / 1" radius={7} pad="8%" style={{ width: 40, height: 40, flexShrink: 0 }} />
            <span style={{ flex: 1 }}><span className="sf-display" style={{ fontSize: 13, fontWeight: 700, display: "block" }}>{i.name}</span><span className="sf-mono" style={{ fontSize: 10, color: SF.muted }}>SIZE {i.size}</span></span>
            <span className="sf-display" style={{ fontWeight: 700, fontSize: 13 }}>{i.qty}</span>
          </button>
        ))}
      </div>
      <SFButton variant="danger" full size="lg" disabled={!reason} onClick={() => { requestCancel(order.id); setDone(true); }}>Request Cancellation</SFButton>
    </SFModalShell>
  );
}

// generic centered modal shell
function SFModalShell({ title, onClose, children }) {
  return (
    <div style={{ position: "absolute", inset: 0, zIndex: 92, display: "flex", alignItems: "flex-end", justifyContent: "center" }}>
      <div onClick={onClose} style={{ position: "absolute", inset: 0, background: "rgba(16,16,20,.45)", animation: "sfOverlay .2s ease" }} />
      <div style={{ position: "relative", background: "#fff", width: "100%", maxWidth: 460, borderRadius: "20px 20px 0 0", padding: "12px 24px 28px", animation: "sfSheetUp .28s cubic-bezier(.2,.8,.2,1)", maxHeight: "92%", overflowY: "auto" }}>
        <div style={{ width: 40, height: 4, borderRadius: 4, background: SF.line, margin: "8px auto 16px" }} />
        {title && (
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
            <span className="sf-display sf-up" style={{ fontSize: 14, fontWeight: 800, letterSpacing: ".05em" }}>{title}</span>
            <button className="sf-tap" onClick={onClose} style={{ background: "none", border: 0, color: SF.ink }}><IconX size={21} /></button>
          </div>
        )}
        {children}
      </div>
    </div>
  );
}

Object.assign(window, { SFToggle, SFAccountTabs, SFCard, SFInfoRow, SFProfileBody, SFOrderCard, SFOrdersBody, SFAccount, SFOrderDetail, SFCancelModal, SFModalShell });


/* ===== ASSET 15 : c39c5a29-475a-4699-b0e5-0241cf92f2a8 ===== */
// sf-app.jsx — Presentation stage (mobile phone frame + desktop browser),
// router, overlays, and tweak controls (viewer role · ordering window · emphasis).

const { useState: useSA, useEffect: useEA, useLayoutEffect, useRef: useRA } = React;

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "viewer": "parent",
  "storeType": "single",
  "schedule": "popup",
  "windowState": "open",
  "announcement": "short",
  "themeChoice": "team",
  "emphasis": "spotlight",
  "approvalRequired": false,
  "bypassPassword": false
}/*EDITMODE-END*/;

// screen classification
const SCROLLER = new Set(["landing", "invite", "create", "signin", "success", "confirm", "home", "collection"]);
const APP_CHROME = new Set(["home", "collection", "cart", "checkout", "account", "orders", "orderDetail"]);
const TOP_DARK = new Set(["landing", "home", "collection", "cart", "checkout", "account", "orders", "orderDetail", "invite"]);

function routeScreen(s) {
  switch (s) {
    case "landing": return <SFLanding />;
    case "invite": return <SFInvite />;
    case "create": return <SFCreate />;
    case "signin": return <SFSignIn />;
    case "success": return <SFSuccess />;
    case "home": return <SFHome />;
    case "collection": return <SFCollection />;
    case "pdp": return <SFProductDetail />;
    case "bundle": return <SFBundleDetail />;
    case "cart": return <SFCart />;
    case "checkout": return <SFCheckout />;
    case "confirm": return <SFConfirm />;
    case "profile": case "account": return <SFAccount />;
    case "orders": return <SFAccount />;
    case "orderDetail": return <SFOrderDetail />;
    default: return <SFHome />;
  }
}

// ─────────────── Screen shell (header + content + bottom nav per mode) ───────────────
function SFScreenShell() {
  const { route, mode } = useStore();
  const screen = route.screen === "profile" ? "account" : route.screen;
  const desktop = mode === "desktop";
  const isScroller = SCROLLER.has(route.screen);
  const hasChrome = APP_CHROME.has(screen) || (route.screen === "profile");

  const content = isScroller
    ? <div className={"sf-scroll-" + mode} style={{ flex: 1, minHeight: 0, overflowY: "auto" }}>{routeScreen(route.screen)}</div>
    : routeScreen(route.screen);

  if (desktop) {
    const showHeader = hasChrome;
    return (
      <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#fff" }}>
        {showHeader && <SFDesktopHeader />}
        <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>{content}</div>
      </div>
    );
  }

  // mobile
  if (!hasChrome) {
    // onboarding / pdp / bundle / confirm — own header, no bottom nav
    return <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#fff" }}>{content}</div>;
  }
  const leading = route.screen === "home" ? "menu" : "back";
  return (
    <div style={{ height: "100%", display: "flex", flexDirection: "column", background: "#fff" }}>
      <SFMobileHeader leading={leading} />
      <div style={{ flex: 1, minHeight: 0, display: "flex", flexDirection: "column" }}>{content}</div>
      <SFBottomNav />
    </div>
  );
}

// ─────────────── Frame inner (scope + shell + overlays) ───────────────
function SFFrameInner() {
  return (
    <div className="sf-scope" style={{ height: "100%", position: "relative", overflow: "hidden", background: "#fff" }}>
      <SFGlobalStyle />
      <SFScreenShell />
      <SFMenuDrawer />
      <SFFilterDrawer />
      <SFCartModal />
      <SFToast />
    </div>
  );
}

// ─────────────── Lightweight phone frame ───────────────
function SFStatusIcons({ dark }) {
  const c = dark ? "#fff" : "#0e0e10";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <svg width="18" height="11" viewBox="0 0 18 11"><rect x="0" y="7" width="3" height="4" rx=".6" fill={c} /><rect x="4.5" y="4.8" width="3" height="6.2" rx=".6" fill={c} /><rect x="9" y="2.6" width="3" height="8.4" rx=".6" fill={c} /><rect x="13.5" y="0" width="3" height="11" rx=".6" fill={c} /></svg>
      <svg width="16" height="11" viewBox="0 0 16 11"><path d="M8 3C10.1 3 12 3.8 13.4 5.1L14.4 4.1C12.8 2.5 10.5 1.4 8 1.4 5.5 1.4 3.2 2.5 1.6 4.1L2.6 5.1C4 3.8 5.9 3 8 3Z" fill={c} /><path d="M8 6.3C9.3 6.3 10.4 6.8 11.2 7.6L12.2 6.6C11 5.5 9.6 4.8 8 4.8 6.4 4.8 5 5.5 3.8 6.6L4.8 7.6C5.6 6.8 6.7 6.3 8 6.3Z" fill={c} /><circle cx="8" cy="9.6" r="1.4" fill={c} /></svg>
      <svg width="25" height="12" viewBox="0 0 25 12"><rect x="0.5" y="0.5" width="21" height="11" rx="3" stroke={c} strokeOpacity=".35" fill="none" /><rect x="2" y="2" width="18" height="8" rx="1.8" fill={c} /><path d="M23 4v4c.7-.3 1.3-1.1 1.3-2S23.7 4.3 23 4Z" fill={c} fillOpacity=".4" /></svg>
    </div>
  );
}

function SFPhone({ children, statusDark }) {
  const sc = statusDark ? "#fff" : "#0e0e10";
  return (
    <div style={{ width: 404, height: 876, borderRadius: 52, position: "relative", background: "#000", boxShadow: "0 50px 90px rgba(0,0,0,.30), 0 0 0 2px #3a3a3e, 0 0 0 13px #0c0c0e, 0 0 0 15px #303034", overflow: "hidden" }}>
      {/* content (fills, behind status bar) */}
      <div style={{ position: "absolute", inset: 0, borderRadius: 52, overflow: "hidden" }}>{children}</div>
      {/* status bar */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 52, zIndex: 70, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 32px 0", pointerEvents: "none" }}>
        <span style={{ fontFamily: "-apple-system, system-ui", fontWeight: 600, fontSize: 15.5, color: sc, letterSpacing: ".02em" }}>9:41</span>
        <SFStatusIcons dark={statusDark} />
      </div>
      {/* dynamic island */}
      <div style={{ position: "absolute", top: 12, left: "50%", transform: "translateX(-50%)", width: 124, height: 36, borderRadius: 22, background: "#000", zIndex: 75 }} />
      {/* home indicator */}
      <div style={{ position: "absolute", bottom: 8, left: "50%", transform: "translateX(-50%)", width: 140, height: 4, borderRadius: 100, background: "rgba(0,0,0,.32)", zIndex: 78, pointerEvents: "none" }} />
    </div>
  );
}

// ─────────────── Fit-to-viewport hook ───────────────
function useFit(w, h, padY, padX) {
  const [scale, setScale] = useSA(1);
  useLayoutEffect(() => {
    const calc = () => {
      const availH = window.innerHeight - (padY || 0);
      const availW = window.innerWidth - (padX || 0);
      setScale(Math.min(availH / h, availW / w, 1.1));
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, [w, h, padY, padX]);
  return scale;
}

// ─────────────── Stage (mobile / desktop) ───────────────
function SFStage({ mode, statusDark }) {
  const phoneScale = useFit(402, 874, 132, 48);
  const deskScale = useFit(1240, 812, 132, 64);
  if (mode === "mobile") {
    return (
      <div style={{ height: 876, width: 404, transform: `scale(${phoneScale})`, transformOrigin: "center center" }}>
        <SFPhone statusDark={statusDark}><SFFrameInner /></SFPhone>
      </div>
    );
  }
  return (
    <div style={{ height: 812, width: 1240, transform: `scale(${deskScale})`, transformOrigin: "center center" }}>
      <ChromeWindow width={1240} height={812} url="prolookteam.com/store/grizzlies">
        <SFFrameInner />
      </ChromeWindow>
    </div>
  );
}

// ─────────────── Top toolbar (mode toggle) ───────────────
function SFToolbar({ mode, setMode, onRestart }) {
  const seg = (id, label, Ico) => {
    const on = mode === id;
    return (
      <button onClick={() => setMode(id)} style={{ display: "flex", alignItems: "center", gap: 8, padding: "8px 16px", borderRadius: 8, border: 0, background: on ? "#0e0e10" : "transparent", color: on ? "#fff" : "#6b6b72", fontFamily: '"Archivo", sans-serif', fontWeight: 700, fontSize: 12.5, letterSpacing: ".04em", cursor: "pointer", transition: "all .14s" }}>
        <Ico size={16} stroke={1.8} /> {label}
      </button>
    );
  };
  return (
    <div style={{ position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)", zIndex: 200, display: "flex", alignItems: "center", gap: 12 }}>
      <button onClick={() => { window.location.href = encodeURI(window.SF_DEMO ? "Team Stores Workspace - Zero State.dc.html" : "Team Stores Workspace.dc.html"); }} title="Back to the Team Stores workspace" style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #e7e7eb", borderRadius: 11, padding: "12px 16px", color: "#6b6b72", fontFamily: '"Archivo", sans-serif', fontWeight: 700, fontSize: 12.5, cursor: "pointer", boxShadow: "0 6px 20px rgba(16,16,20,.10)", whiteSpace: "nowrap" }}>
        ← Workspace
      </button>
      <div style={{ display: "flex", alignItems: "center", gap: 2, background: "#fff", border: "1px solid #e7e7eb", borderRadius: 11, padding: 4, boxShadow: "0 6px 20px rgba(16,16,20,.10)" }}>
        {seg("mobile", "Mobile", IconMobile)}
        {seg("desktop", "Desktop", IconDesktop)}
      </div>
      <button onClick={onRestart} title="Restart flow" style={{ display: "flex", alignItems: "center", gap: 8, background: "#fff", border: "1px solid #e7e7eb", borderRadius: 11, padding: "12px 16px", color: "#6b6b72", fontFamily: '"Archivo", sans-serif', fontWeight: 700, fontSize: 12.5, cursor: "pointer", boxShadow: "0 6px 20px rgba(16,16,20,.10)" }}>
        <IconRepeat size={15} /> Restart
      </button>
    </div>
  );
}
const IconMobile = (p) => <SFIcon {...p} d={["M7 2.5h10a1.5 1.5 0 0 1 1.5 1.5v16a1.5 1.5 0 0 1-1.5 1.5H7A1.5 1.5 0 0 1 5.5 20V4A1.5 1.5 0 0 1 7 2.5z", "M10 19h4"]} />;
const IconDesktop = (p) => <SFIcon {...p} d={["M3 4.5h18a1 1 0 0 1 1 1V16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1z", "M9 21h6", "M12 17v4"]} />;

// ─────────────── Root app ───────────────
function SFApp() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [mode, setMode] = useSA("mobile");
  const restartRef = useRA(null);

  // statusDark depends on current screen — read via a tiny bridge from store
  const [statusDark, setStatusDark] = useSA(true);

  return (
    <SFStoreProvider viewer={t.viewer} windowState={t.windowState} emphasis={t.emphasis} bypassPassword={t.bypassPassword} approvalRequired={t.approvalRequired} mode={mode} schedule={t.schedule} storeType={t.storeType} announcement={t.announcement} themeChoice={t.themeChoice}>
      <SFStatusBridge onChange={setStatusDark} restartRef={restartRef} />
      <div style={{ position: "fixed", inset: 0, background: "linear-gradient(160deg,#f3f4f6,#e9eaee)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <SFToolbar mode={mode} setMode={setMode} onRestart={() => restartRef.current && restartRef.current()} />
        <SFStage mode={mode} statusDark={mode === "mobile" ? statusDark : false} />
      </div>
      <TweaksPanel>
        <TweakSection label="Who's shopping" />
        <TweakRadio label="Viewer" value={t.viewer} options={[{ value: "parent", label: "Parent" }, { value: "player", label: "Player" }, { value: "fan", label: "Fan" }]} onChange={(v) => setTweak("viewer", v)} />
        <TweakSection label="Store" />
        <TweakRadio label="Store type" value={t.storeType} options={[{ value: "single", label: "Individual" }, { value: "league", label: "League" }]} onChange={(v) => setTweak("storeType", v)} />
        <TweakRadio label="Schedule" value={t.schedule} options={[{ value: "popup", label: "Pop-Up" }, { value: "always", label: "Always-On" }]} onChange={(v) => setTweak("schedule", v)} />
        {t.schedule === "popup" && <TweakRadio label="Ordering window" value={t.windowState} options={[{ value: "open", label: "Open" }, { value: "closing", label: "Closing" }, { value: "closed", label: "Closed" }]} onChange={(v) => setTweak("windowState", v)} />}
        <TweakSection label="Announcement message" />
        <TweakRadio label="Message" value={t.announcement} options={[{ value: "none", label: "None" }, { value: "short", label: "Short" }, { value: "long", label: "Long" }]} onChange={(v) => setTweak("announcement", v)} />
        <div style={{ fontSize: 10.5, lineHeight: 1.5, color: "#9a9aa1", padding: "0 2px 4px" }}>None = no banner element at all. Long clamps with “Show more” — a proposal; the character limit is an open spec question.</div>
        <TweakSection label="Theme color · buttons & accents only" />
        <TweakRadio label="Theme" value={t.themeChoice} options={[{ value: "team", label: "Team default" }, { value: "cardinal", label: "Cardinal" }, { value: "kelly", label: "Kelly" }]} onChange={(v) => setTweak("themeChoice", v)} />
        <div style={{ fontSize: 10.5, lineHeight: 1.5, color: "#9a9aa1", padding: "0 2px 4px" }}>Background, header, nav, and product photos never change — the bounded scope is the point.</div>
        <TweakSection label="Home layout" />
        <TweakRadio label="Required gear" value={t.emphasis} options={[{ value: "spotlight", label: "Spotlight" }, { value: "standard", label: "Standard" }]} onChange={(v) => setTweak("emphasis", v)} />
        <TweakSection label="Store settings" />
        <TweakToggle label="Approve Team Supplied orders" value={t.approvalRequired} onChange={(v) => setTweak("approvalRequired", v)} />
        <TweakSection label="Prototype shortcuts" />
        <TweakToggle label="Bypass password" value={t.bypassPassword} onChange={(v) => setTweak("bypassPassword", v)} />
      </TweaksPanel>
    </SFStoreProvider>
  );
}

// bridges current screen → statusDark, and exposes restart()
function SFStatusBridge({ onChange, restartRef }) {
  const { route, resetTo, storeType, selectTeam } = useStore();
  useEA(() => { onChange(TOP_DARK.has(route.screen)); }, [route.screen, onChange]);
  useEA(() => { restartRef.current = () => { selectTeam(null); resetTo(storeType === "league" ? "landing" : "invite"); }; }, [resetTo, restartRef, storeType, selectTeam]);
  return null;
}

/* mounted by DC runtime via window.SFApp */

Object.assign(window, { SFApp });
