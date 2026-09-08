// Standalone archive page: the store-creation wizard's "Visual Design &
// Branding" step (Step5Design) + live StorePreview, recovered from
// workspace-app.jsx. Renders once the workspace bundle (loaded by the DC's
// second x-import) has exposed the shared wizard components on window.
(function () {
  const R = window.React;
  function Shell() {
    const [ready, setReady] = R.useState(() => !!(window.Step5Design && window.StorePreview));
    R.useEffect(() => {
      if (ready) return;
      const t = setInterval(() => {
        if (window.Step5Design && window.StorePreview) { clearInterval(t); setReady(true); }
      }, 120);
      return () => clearInterval(t);
    }, [ready]);
    const [data, setData] = R.useState(null);
    R.useEffect(() => {
      if (ready && !data) setData({
        ...(window.makePrefill ? window.makePrefill() : {}),
        storeTitle: "Carlsbad Padres Team Store",
        storeSlug: "carlsbad-padres",
        heroTheme: "pitch",
        announcement: "Welcome to the Carlsbad Padres Official Team Store. Order your custom PROLOOK uniforms and gear for the 2026 season \u2014 all items are built to order.",
        primaryColor: "#e1251b",
      });
    }, [ready]);
    if (!ready || !data) return (
      <div style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", color: "#9a9aa1", fontSize: 13, fontFamily: '"Inter",system-ui,sans-serif' }}>Loading wizard components…</div>
    );
    const set = (patch) => setData((d) => ({ ...d, ...patch }));
    const accent = "#e1251b";
    const Step5Design = window.Step5Design, StorePreview = window.StorePreview;
    return (
      <div style={{ minHeight: "100vh", background: "#f7f7f8" }}>
        <header style={{ background: "#fff", borderBottom: "1px solid #e5e5e9" }}>
          <div style={{ maxWidth: 1560, margin: "0 auto", padding: "18px 32px", display: "flex", alignItems: "baseline", gap: 14, flexWrap: "wrap" }}>
            <h1 style={{ fontFamily: "Archivo, sans-serif", fontSize: 20, fontWeight: 800, margin: 0, color: "#0e0e10", letterSpacing: "-.01em" }}>Store Customization &amp; Preview</h1>
            <span style={{ fontSize: 12.5, color: "#9a9aa1" }}>Archived wizard step — "Visual Design &amp; Branding" with the live storefront preview</span>
          </div>
        </header>
        <div style={{ maxWidth: 1560, margin: "0 auto", padding: "28px 32px 120px", display: "grid", gridTemplateColumns: "minmax(0, 1fr) minmax(420px, 620px)", gap: 28, alignItems: "start" }}>
          <div><Step5Design data={data} set={set} accent={accent} /></div>
          <div style={{ position: "sticky", top: 24 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 12 }}>
              <span style={{ fontSize: 11, fontWeight: 800, letterSpacing: ".1em", color: "#9a9aa1", textTransform: "uppercase" }}>Store Preview</span>
              <span style={{ fontSize: 12, color: "#1f9d55", fontWeight: 700 }}>Live — updates as you edit</span>
            </div>
            <StorePreview data={data} accent={accent} />
          </div>
        </div>
      </div>
    );
  }
  window.StoreCustomizationShell = Shell;
})();
