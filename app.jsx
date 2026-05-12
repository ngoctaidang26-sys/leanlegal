// app.jsx — main App with routing + Tweaks

// stable per-page key from node tag+index path within main
function makeKey(node, fallbackIdx) {
  const parts = [];
  let n = node;
  while (n && n.dataset && !n.hasAttribute('data-edit-root')) {
    const p = n.parentElement;
    if (!p) break;
    const sibs = Array.from(p.children);
    parts.unshift(n.tagName + ':' + sibs.indexOf(n));
    n = p;
  }
  return (window.__edk_page || '') + '|' + parts.join('/') + '#' + fallbackIdx;
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "theme": "light",
  "accent": "#6B1F26",
  "hero": "editorial",
  "display": "instrument",
  "density": "regular",
  "editText": false
}/*EDITMODE-END*/;

const ACCENTS = [
  '#6B1F26', // oxblood
  '#2D3D2E', // forest
  '#A77A2E', // gold
  '#1F3A5F', // navy
];

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [page, setPage] = React.useState('home');
  const [articleSlug, setArticleSlug] = React.useState(null);

  const go = (id) => {
    setPage(id);
    setArticleSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const openArticle = (slug) => {
    setPage('article');
    setArticleSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // apply theme attrs at body level
  React.useEffect(() => {
    document.body.dataset.theme = t.theme;
    document.body.dataset.density = t.density;
    document.body.dataset.display = t.display;
    document.documentElement.style.setProperty('--accent', t.accent);
  }, [t.theme, t.density, t.display, t.accent]);

  // ── Inline content editing (saves edits to localStorage) ──────────────────
  const mainRef = React.useRef(null);
  const STORE_KEY = 'mn-edits-v1';

  // restore saved edits to matching nodes on mount + every page change
  React.useEffect(() => {
    if (!mainRef.current) return;
    window.__edk_page = page + ':' + (articleSlug || '');
    mainRef.current.setAttribute('data-edit-root', '1');
    let store = {};
    try { store = JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch {}
    const nodes = mainRef.current.querySelectorAll('h1,h2,h3,h4,p,span.tag,li,em,strong,button,div.value,div.label');
    nodes.forEach((n, i) => {
      // skip controls inside forms
      if (n.closest('button') && n.tagName !== 'BUTTON') return;
      const key = makeKey(n, i);
      if (store[key] !== undefined) n.innerHTML = store[key];
      n.dataset.edk = key;
    });
  }, [page, articleSlug, t.editText]);

  // toggle contentEditable + listen for edits
  React.useEffect(() => {
    const root = mainRef.current;
    if (!root) return;
    root.dataset.editing = t.editText ? '1' : '0';
    const targets = root.querySelectorAll('[data-edk]');
    targets.forEach(n => { n.contentEditable = t.editText ? 'true' : 'false'; });
    if (!t.editText) return;
    const onBlur = (e) => {
      const n = e.target.closest('[data-edk]');
      if (!n) return;
      let store = {};
      try { store = JSON.parse(localStorage.getItem(STORE_KEY) || '{}'); } catch {}
      store[n.dataset.edk] = n.innerHTML;
      localStorage.setItem(STORE_KEY, JSON.stringify(store));
    };
    root.addEventListener('blur', onBlur, true);
    return () => root.removeEventListener('blur', onBlur, true);
  }, [t.editText, page, articleSlug]);

  const clearEdits = () => {
    if (!confirm('Xoá tất cả chỉnh sửa và khôi phục bản gốc?')) return;
    localStorage.removeItem(STORE_KEY);
    location.reload();
  };

  const PageEl = (() => {
    switch (page) {
      case 'topics':   return <TopicsPage go={go} />;
      case 'about':    return <AboutPage go={go} />;
      case 'writing':  return <WritingPage go={go} openArticle={openArticle} />;
      case 'article':  return <ArticlePage slug={articleSlug} go={go} openArticle={openArticle} />;
      case 'contact':  return <ContactPage go={go} />;
      default:         return <Home go={go} hero={t.hero} openArticle={openArticle} />;
    }
  })();

  // For Nav active state, treat article view as part of writing
  const navPage = page === 'article' ? 'writing' : page;

  return (
    <div className="mn-app">
      <Nav page={navPage} go={go} />
      <div ref={mainRef}>{PageEl}</div>
      <Footer go={go} />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Theme" />
        <TweakRadio
          label="Mode"
          value={t.theme}
          options={[
            { value: 'light', label: 'Cream' },
            { value: 'dark', label: 'Ink' },
            { value: 'bone', label: 'Bone' },
          ]}
          onChange={(v) => setTweak('theme', v)}
        />
        <TweakColor
          label="Accent"
          value={t.accent}
          options={ACCENTS}
          onChange={(v) => setTweak('accent', v)}
        />

        <TweakSection label="Typography" />
        <TweakRadio
          label="Display font"
          value={t.display}
          options={[
            { value: 'instrument', label: 'Instrument' },
            { value: 'cormorant', label: 'Cormorant' },
            { value: 'sans', label: 'Sans' },
          ]}
          onChange={(v) => setTweak('display', v)}
        />

        <TweakSection label="Layout" />
        <TweakRadio
          label="Density"
          value={t.density}
          options={[
            { value: 'compact', label: 'Compact' },
            { value: 'regular', label: 'Regular' },
            { value: 'comfy', label: 'Comfy' },
          ]}
          onChange={(v) => setTweak('density', v)}
        />
        <TweakRadio
          label="Hero variant"
          value={t.hero}
          options={[
            { value: 'editorial', label: 'Editorial' },
            { value: 'minimal', label: 'Minimal' },
            { value: 'stat', label: 'Stat-led' },
          ]}
          onChange={(v) => setTweak('hero', v)}
        />

        <TweakSection label="Nội dung" />
        <TweakToggle
          label="Sửa nội dung trực tiếp"
          value={t.editText}
          onChange={(v) => setTweak('editText', v)}
        />
        {t.editText && (
          <div style={{ fontSize: 10.5, lineHeight: 1.45, color: 'rgba(41,38,27,.65)', padding: '2px 0 4px' }}>
            Click vào bất kỳ chữ nào trong trang để gõ lại. Thay đổi tự lưu vào trình duyệt này.
          </div>
        )}
        <TweakButton label="Xoá chỉnh sửa" onClick={clearEdits} />

        <TweakSection label="Navigation" />
        <TweakRadio
          label="Page"
          value={navPage}
          options={[
            { value: 'home', label: 'Trang chủ' },
            { value: 'writing', label: 'Bài viết' },
            { value: 'topics', label: 'Chủ đề' },
            { value: 'about', label: 'Về mình' },
            { value: 'contact', label: 'Liên hệ' },
          ]}
          onChange={go}
        />
      </TweaksPanel>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
