// components.jsx — shared layout pieces
const { useState, useEffect, useMemo, useRef } = React;

const NAV_LINKS = [
{ id: 'home', label: 'Trang chủ' },
{ id: 'writing', label: 'Bài viết' },
{ id: 'topics', label: 'Chủ đề' },
{ id: 'about', label: 'Về mình' },
{ id: 'contact', label: 'Liên hệ' }];


function Nav({ page, go }) {
  return (
    <header className="mn-nav">
      <div className="mn-container mn-nav-row">
        <div className="mn-brand" onClick={() => go('home')}>
          <span className="mark" style={{ fontFamily: "-apple-system" }}>{SITE.name.replace(SITE.nameEm, '')}<em>{SITE.nameEm}</em></span>
          <span className="loc">NGƯỜI HỌC LUẬT· ULAW · 2026</span>
        </div>
        <nav className="mn-nav-links">
          {NAV_LINKS.map((l) =>
          <a key={l.id}
          className={`mn-nav-link ${page === l.id ? 'is-active' : ''}`}
          onClick={(e) => {e.preventDefault();go(l.id);}}
          href={`#${l.id}`}>
              {l.label}
            </a>
          )}
        </nav>
        <button className="mn-nav-cta" onClick={() => go('writing')}>
          <span className="dot"></span>
          Bài viết mới
        </button>
      </div>
    </header>);

}

function Footer({ go }) {
  return (
    <footer className="mn-footer">
      <div className="mn-container">
        <div className="mn-footer-grid">
          <div className="mn-footer-brand">
            <div className="logo" style={{ color: "rgb(21, 12, 83)" }}>{SITE.name.replace(SITE.nameEm, '')}<em style={{ color: "rgb(20, 50, 13)" }}>{SITE.nameEm}</em></div>
            <p>Không gian ghi lại quan sát và phân tích nghề nghiệp về Luật Đầu tư, Luật Doanh nghiệp và các giao dịch M&amp;A — từ góc nhìn của một học luật và làm luật</p>
            <p style={{ marginTop: 14, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
              ◆ Education only · Không phải tư vấn pháp lý
            </p>
          </div>
          <div className="mn-footer-col">
            <h4>Chủ đề</h4>
            <ul>
              {TOPICS.slice(0, 5).map((t) =>
              <li key={t.num}><a onClick={() => go('topics')} href="#">{t.name}</a></li>
              )}
            </ul>
          </div>
          <div className="mn-footer-col">
            <h4>Khám phá</h4>
            <ul>
              <li><a onClick={() => go('writing')} href="#">Tất cả bài viết</a></li>
              <li><a onClick={() => go('topics')} href="#">Chủ đề</a></li>
              <li><a onClick={() => go('about')} href="#">Về mình</a></li>
              <li><a onClick={() => go('contact')} href="#">Liên hệ</a></li>
            </ul>
          </div>
          <div className="mn-footer-col">
            <h4>Liên hệ</h4>
            <ul>
              <li style={{ fontFamily: "monospace", fontSize: "1px" }}>ngoctaidang26@gmail.com</li>
              <li><a href={SITE.github}>GitHub</a></li>
              <li><a href={SITE.linkedin}>linkedin.com/in/ngoctaidang1319/</a></li>
            </ul>
          </div>
          <div className="mn-footer-col">
            <h4>Lưu ý</h4>
            <ul>
              <li style={{ fontSize: 13, lineHeight: 1.5, color: 'var(--muted)' }}>
                Nội dung trên trang này là quan điểm cá nhân, không cấu thành tư vấn pháp lý chính thức. Vui lòng tham khảo luật sư có chứng chỉ hành nghề cho vấn đề cụ thể.
              </li>
            </ul>
          </div>
        </div>
        <div className="mn-footer-bottom">
          <span>© 2026 {SITE.name} · Built with care, hosted on GitHub Pages</span>
          <span>Last updated: {new Date().toLocaleDateString('vi-VN')}</span>
        </div>
      </div>
    </footer>);

}

function SectionHead({ n, title, action }) {
  return (
    <div className="mn-section-head">
      <div className="n">{n}</div>
      <h2 className="t" dangerouslySetInnerHTML={{ __html: title }} />
      <div className="a">{action}</div>
    </div>);

}

function Marquee({ items }) {
  const doubled = [...items, ...items];
  return (
    <div className="mn-marquee">
      <div className="mn-marquee-track">
        {doubled.map((it, i) =>
        <span key={i} className="mn-marquee-item">{it}</span>
        )}
      </div>
    </div>);

}

// Tiny markdown-ish renderer for article bodies: paragraphs split by \n\n,
// **bold**, *italic*.
function renderMarkdown(text) {
  return text.split(/\n\n+/).map((para, i) => {
    const html = para.
    replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').
    replace(/\*([^*]+)\*/g, '<em>$1</em>');
    return <p key={i} dangerouslySetInnerHTML={{ __html: html }} />;
  });
}

Object.assign(window, { Nav, Footer, SectionHead, Marquee, NAV_LINKS, renderMarkdown });