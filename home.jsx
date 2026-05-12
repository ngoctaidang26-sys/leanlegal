// home.jsx — homepage sections

function HeroEditorial({ go }) {
  return (
    <section className="mn-hero" data-variant="editorial">
      <div className="mn-container">
        <div className="mn-eyebrow" style={{ marginBottom: 32 }}>◆ Sổ tay nghề · Luật sư doanh nghiệp · {SITE.location}</div>
        <div className="mn-hero-grid">
          <h1 style={{ gridColumn: '1 / -1' }}>
            Hành nghề.<br />
            Viết về <em>Luật Đầu tư</em><br />
            và doanh nghiệp.
          </h1>
          <p className="mn-hero-lede">
            Không gian ghi lại quan sát và phân tích nghề nghiệp về Luật Đầu tư, Luật Doanh nghiệp và các giao dịch M&amp;A - từ góc nhìn của một người  đang học nghề.  Bài viết phản ánh quan điểm cá nhân, không thay thế tư vấn cho vụ việc cụ thể.
          </p>
        </div>
        <div className="mn-hero-meta">
          <div className="item">
            <div className="label">HỌC NGHỀ</div>
            <div className="value" style={{ fontSize: 22 }}>Lawyer In-house</div>
          </div>
          <div className="item">
            <div className="label">Lĩnh vực</div>
            <div className="value" style={{ fontSize: 22 }}>Đầu tư · DN · M&A</div>
          </div>
          <div className="item">
            <div className="label">Bài viết</div>
            <div className="value"><em>{ARTICLES.length}</em></div>
          </div>
          <div className="item">
            <div className="label">Cập nhật</div>
            <div className="value" style={{ fontSize: 22, fontFamily: "Garamond" }}>Định kỳ hàng tuần</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
          <button className="mn-btn mn-btn-primary" onClick={() => go('writing')}>
            Đọc bài viết <span className="arrow">→</span>
          </button>
          <button className="mn-btn mn-btn-ghost" onClick={() => go('about')}>Hồ sơ 

          </button>
        </div>
      </div>
    </section>);

}

function HeroMinimal({ go }) {
  return (
    <section className="mn-hero" data-variant="minimal">
      <div className="mn-container">
        <div className="mn-hero-grid">
          <div style={{ gridColumn: '1 / span 6' }}>
            <div className="mn-eyebrow" style={{ marginBottom: 24 }}>{SITE.tagline} · Doanh nghiệp &amp; Đầu tư</div>
            <h1>
              Sổ tay nghề<br />
              về <em>Luật</em>,<br />
              đầu tư và<br />
              doanh nghiệp.
            </h1>
          </div>
          <p className="mn-hero-lede" style={{ gridColumn: '8 / span 5' }}>
            {SITE.long}
            <span style={{ display: 'block', marginTop: 32 }}>
              <button className="mn-btn mn-btn-primary" onClick={() => go('writing')}>
                Bắt đầu đọc <span className="arrow">→</span>
              </button>
            </span>
          </p>
        </div>
      </div>
    </section>);

}

function HeroStat({ go }) {
  return (
    <section className="mn-hero" data-variant="stat">
      <div className="mn-container">
        <div className="mn-hero-grid">
          <h1 style={{ gridColumn: '1 / span 8' }}>
            {ARTICLES.length} <em>bài viết</em>.<br />
            {TOPICS.length} chủ đề.<br />
            Một hành trình.
          </h1>
          <div style={{ gridColumn: '9 / span 4', alignSelf: 'end' }}>
            <div className="mn-eyebrow" style={{ marginBottom: 20 }}>◆ {SITE.name} · Personal blog</div>
            <p style={{ fontSize: 16, lineHeight: 1.5, color: 'var(--ink-2)', margin: '0 0 28px', maxWidth: '34ch' }}>
              {SITE.short}
            </p>
            <button className="mn-btn mn-btn-primary" onClick={() => go('writing')}>
              Đọc bài mới nhất <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>);

}

function TopicsSection({ go }) {
  return (
    <section className="mn-section">
      <div className="mn-container">
        <SectionHead
          n="◆ 01 / Mảng tư vấn"
          title="Những mảng mình <em>đang học  nghề</em>."
          action={
          <button className="mn-btn mn-btn-ghost" onClick={() => go('topics')}>
              Tất cả mảng <span className="arrow">→</span>
            </button>
          } />
        
        <div className="mn-practice-list">
          {TOPICS.map((p) =>
          <div className="mn-practice-row" key={p.num} onClick={() => go('topics')}>
              <div className="num">{p.num}</div>
              <div className="name">
                {p.name.replace(p.nameEm, '')}
                <em>{p.nameEm}</em>
              </div>
              <div className="desc">{p.desc}</div>
              <div className="more">Xem <span className="arrow">↗</span></div>
            </div>
          )}
        </div>
      </div>
    </section>);

}

function LatestArticles({ go, openArticle }) {
  return (
    <section className="mn-section" style={{ background: 'var(--bg-2)' }}>
      <div className="mn-container">
        <SectionHead
          n="◆ 02 / Bài viết"
          title="Mới nhất từ <em>sổ tay nghề</em>."
          action={
          <button className="mn-btn mn-btn-ghost" onClick={() => go('writing')}>
              Tất cả bài viết <span className="arrow">→</span>
            </button>
          } />
        
        <div className="mn-insights-grid">
          {ARTICLES.slice(0, 3).map((it) =>
          <article className="mn-insight" key={it.slug} onClick={() => openArticle(it.slug)}>
              <span className="tag">{it.tag}</span>
              <h3 className="title">{it.title}</h3>
              <div className="meta">
                <span>{it.date}</span>
                <span>{it.read}</span>
              </div>
            </article>
          )}
        </div>
      </div>
    </section>);

}

function AboutBlurb({ go }) {
  return (
    <section className="mn-section">
      <div className="mn-container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 'var(--row)', alignItems: 'start' }}>
          <div style={{ gridColumn: '1 / span 5' }}>
            <div className="mn-eyebrow" style={{ marginBottom: 18 }}>◆ 03 / Về mình</div>
            <h2 className="mn-serif" style={{ fontSize: 64, margin: 0, lineHeight: .95 }}>Chào,<br />mình là <em>{SITE.name}</em>.</h2>
          </div>
          <div style={{ gridColumn: '7 / span 6' }}>
            <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', margin: '0 0 24px' }}>{SITE.long}</p>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-2)', margin: '0 0 32px' }}>
              Trang này là không gian chia sẻ quan sát nghề và phân tích cá nhân. Nội dung phản ánh quan điểm riêng của tác giả, không thay thế tư vấn pháp lý cho một vụ việc cụ thể. Mọi trao đổi chuyên môn — rất hoan nghênh qua email.
            </p>
            <button className="mn-btn mn-btn-ghost" onClick={() => go('about')}>Hồ sơ Luật sư <span className="arrow">→</span></button>
          </div>
        </div>
      </div>
    </section>);

}

function HomeCTA({ go }) {
  return (
    <section className="mn-cta">
      <div className="mn-container">
        <h2>Cùng đọc và <em>cùng tranh luận</em>.</h2>
        <div className="mn-cta-row">
          <button className="mn-btn mn-btn-primary" onClick={() => go('writing')}>
            Đọc bài viết <span className="arrow">→</span>
          </button>
          <button className="mn-btn mn-btn-ghost" onClick={() => go('contact')}>
            Gửi email góp ý
          </button>
          <span style={{ marginLeft: 24, fontFamily: 'var(--mono)', fontSize: 11, letterSpacing: '.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>
            ◆ Phản hồi trong vài ngày
          </span>
        </div>
      </div>
    </section>);

}

function Home({ go, hero, openArticle }) {
  const Hero = hero === 'minimal' ? HeroMinimal : hero === 'stat' ? HeroStat : HeroEditorial;
  return (
    <main className="mn-fade">
      <Hero go={go} />
      <Marquee items={['Luật Đầu tư', 'Luật Doanh nghiệp', 'M&A', 'FDI', 'Tuân thủ', 'Corporate Governance', 'Hợp đồng', 'Tranh chấp', 'Trọng tài VIAC']} />
      <TopicsSection go={go} />
      <LatestArticles go={go} openArticle={openArticle} />
      <AboutBlurb go={go} />
      <HomeCTA go={go} />
    </main>);

}

Object.assign(window, { Home, HomeCTA });