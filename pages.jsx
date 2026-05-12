// pages.jsx — Topics, About, Writing (with article reader), Contact

function TopicsPage({ go }) {
  const [active, setActive] = React.useState(TOPICS[0].num);
  const current = TOPICS.find(p => p.num === active);
  return (
    <main className="mn-fade">
      <section className="mn-page-head">
        <div className="mn-container">
          <div className="crumbs">
            <a onClick={() => go('home')} href="#">Trang chủ</a>
            <span className="sep">/</span>
            <span>Chủ đề</span>
          </div>
          <h1>Sáu chủ đề <em>mình theo đuổi</em>.</h1>
          <div className="deck">
            <p>Đây là các mảng mình tập trung nghiên cứu và viết về. Không phải toàn bộ những gì có trong Luật Doanh nghiệp — chỉ là khu vực mình quan tâm và muốn đào sâu nhất.</p>
          </div>
        </div>
      </section>

      <section className="mn-section">
        <div className="mn-container">
          <div className="mn-pills" style={{ marginBottom: 48 }}>
            {TOPICS.map(p => (
              <button key={p.num}
                      className={`mn-pill ${active === p.num ? 'is-on' : ''}`}
                      onClick={() => setActive(p.num)}>
                {p.num} · {p.name}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 'var(--row)' }}>
            <div style={{ gridColumn: '1 / span 7' }}>
              <div className="mn-eyebrow" style={{ marginBottom: 24 }}>Chủ đề {current.num}</div>
              <h2 className="mn-serif" style={{ fontSize: 72, margin: '0 0 32px' }}>
                {current.name.replace(current.nameEm, '')}<em>{current.nameEm}</em>
              </h2>
              <p style={{ fontSize: 18, lineHeight: 1.55, color: 'var(--ink-2)', maxWidth: '52ch' }}>{current.desc}</p>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: 'var(--ink-2)', maxWidth: '52ch', marginTop: 24 }}>
                Đây là chủ đề mình đang đọc và viết nhiều nhất gần đây. Các bài viết liên quan sẽ được gắn tag tương ứng. Nếu bạn có gợi ý sách, paper hoặc case study cho chủ đề này — gửi mình qua email nhé.
              </p>
              <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
                <button className="mn-btn mn-btn-primary" onClick={() => go('writing')}>Bài viết liên quan <span className="arrow">→</span></button>
                <button className="mn-btn mn-btn-ghost" onClick={() => go('contact')}>Gợi ý cho mình</button>
              </div>
            </div>

            <div style={{ gridColumn: '9 / span 4', display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="mn-card">
                <span className="tag">Nguồn mình đang đọc</span>
                <h3>Văn bản <em>gốc</em></h3>
                <p>Luật, Nghị định, Thông tư trên Cổng TTĐT Bộ Tư pháp. Cố gắng đọc văn bản gốc trước khi đọc bài phân tích.</p>
              </div>
              <div className="mn-card">
                <span className="tag">Sách tham khảo</span>
                <h3>Berle &amp; Means, <em>Easterbrook</em></h3>
                <p>Hai cuốn kinh điển về corporate law mình quay lại liên tục. Khó nhưng đáng — sẽ viết review riêng.</p>
              </div>
              <div className="mn-card">
                <span className="tag">Mục tiêu</span>
                <h3>Viết <em>52 bài</em> / năm</h3>
                <p>Mỗi tuần một bài, dù ngắn. Public để chính mình có động lực không bỏ ngang.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA go={go} />
    </main>
  );
}

function AboutPage({ go }) {
  return (
    <main className="mn-fade">
      <section className="mn-page-head">
        <div className="mn-container">
          <div className="crumbs">
            <a onClick={() => go('home')} href="#">Trang chủ</a>
            <span className="sep">/</span>
            <span>Về mình</span>
          </div>
          <h1>Chào,<br/>mình là <em>{SITE.name}</em>.</h1>
          <div className="deck">
            <p>Mình là người học luật, chuyên tìm hiểu doanh nghiệp ở các mảng Luật Đầu tư, Luật Doanh nghiệp và Thuế. Xuất phát điểm là Cử nhân Quản trị Luật — đang chuẩn bị cho việc học nghề luật sư.{'\n'} Trang này là nơi mình ghi lại các phân tích, ghi chú vụ việc và quan sát thực tế từ công việc tại Văn phòng Luật mỗi ngày.</p>
          </div>
        </div>
      </section>

      <section className="mn-section">
        <div className="mn-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 'var(--row)' }}>
            <div style={{ gridColumn: '1 / span 5' }}>
              <div className="mn-person" style={{ pointerEvents: 'none' }}>
                <div className="frame" style={{ aspectRatio: '4/5' }}>
                  <div className="initials">{SITE.name.split(' ').map(p => p[0]).join('')}</div>
                  <div className="badge">[Ảnh đại diện]</div>
                </div>
              </div>
            </div>
            <div style={{ gridColumn: '7 / span 6' }}>
              <div className="mn-eyebrow" style={{ marginBottom: 18 }}>◆ Background</div>
              <h2 className="mn-serif" style={{ fontSize: 40, margin: '0 0 24px', lineHeight: 1.05 }}>Cử nhân Quản trị Luật.<br/>Tập trung vào <em>Luật Doanh nghiệp</em> và đầu tư.</h2>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)' }}>
                Mình tốt nghiệp chương trình Quản trị Luật — kết hợp giữa Luật Doanh nghiệp với kinh tế và quản trị. Hướng nghề nghiệp của mình là tư vấn pháp lý cho doanh nghiệp, đặc biệt trong các mảng M&amp;A, FDI và quản trị công ty.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.55, color: 'var(--ink-2)', marginTop: 18 }}>
                Trang này là không gian mình chia sẻ phân tích và quan sát cá nhân. *Writing in public* là cách mình giữ kỷ luật suy nghĩ, và là nơi để trao đổi với những người cùng quan tâm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mn-section" style={{ background: 'var(--bg-2)' }}>
        <div className="mn-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 'var(--row)' }}>
            <div style={{ gridColumn: '1 / span 4' }}>
              <div className="mn-eyebrow" style={{ marginBottom: 18 }}>◆ Nguyên tắc</div>
              <h2 className="mn-serif" style={{ fontSize: 56, margin: 0, lineHeight: .95 }}>Ba <em>cam kết</em> với bản thân.</h2>
            </div>
            {[
              { n: '01', t: 'Đọc văn bản gốc', d: 'Luôn đọc Luật, Nghị định, Thông tư trước khi đọc bài phân tích. Bài phân tích có thể sai — văn bản gốc thì không.' },
              { n: '02', t: 'Viết để hiểu', d: 'Viết là cách kiểm tra mình có thật sự hiểu hay chỉ đang nhớ. Bài nào viết không nổi thành câu — tức là mình chưa hiểu.' },
              { n: '03', t: 'Khiêm tốn', d: 'Mọi điều mình viết là quan điểm cá nhân, có thể chưa đầy đủ. Welcome góp ý — đặc biệt từ những anh chị có kinh nghiệm thực tế.' },
            ].map((v, i) => (
              <div key={v.n} style={{ gridColumn: `${5 + i * 3} / span 3`, padding: '24px 0', borderTop: '1px solid var(--line-strong)' }}>
                <div className="mn-mono" style={{ marginBottom: 12 }}>{v.n}</div>
                <h3 className="mn-serif" style={{ fontSize: 28, margin: '0 0 14px', lineHeight: 1.05 }}>{v.t}</h3>
                <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55, margin: 0 }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mn-section">
        <div className="mn-container">
          <div style={{ background: 'var(--paper)', border: '1px solid var(--line-strong)', padding: 40, display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'center' }}>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 64, lineHeight: 1, color: 'var(--accent)' }}>!</div>
            <div>
              <h3 className="mn-serif" style={{ fontSize: 28, margin: '0 0 8px' }}>Disclaimer pháp lý</h3>
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)' }}>
                Nội dung trên trang web này là <strong>quan điểm và phân tích cá nhân</strong>, phục vụ mục đích chia sẻ kiến thức. Bài viết <strong>không cấu thành tư vấn pháp lý chính thức</strong> cho bất kỳ vụ việc cụ thể nào. Nếu bạn cần tư vấn cho vấn đề thực tế, vui lòng liên hệ Luật sư có chứng chỉ hành nghề.
              </p>
            </div>
          </div>
        </div>
      </section>

      <HomeCTA go={go} />
    </main>
  );
}

function WritingPage({ go, openArticle }) {
  const [filter, setFilter] = React.useState('Tất cả');
  const tags = ['Tất cả', ...Array.from(new Set(ARTICLES.map(a => a.tag)))];
  const filtered = filter === 'Tất cả' ? ARTICLES : ARTICLES.filter(a => a.tag === filter);

  return (
    <main className="mn-fade">
      <section className="mn-page-head">
        <div className="mn-container">
          <div className="crumbs">
            <a onClick={() => go('home')} href="#">Trang chủ</a>
            <span className="sep">/</span>
            <span>Bài viết</span>
          </div>
          <h1>Phân tích & <em>quan điểm</em>.</h1>
          <div className="deck">
            <p>Những phân tích, ghi chú và quan sát mình viết ra. Không phải tư vấn pháp lý — chỉ là quan điểm cá nhân. Có thể chưa đầy đủ, có thể tranh luận. Bạn nào muốn trao đổi cứ email mình.</p>
          </div>
        </div>
      </section>

      <section className="mn-section">
        <div className="mn-container">
          <div className="mn-pills" style={{ marginBottom: 56 }}>
            {tags.map(t => (
              <button key={t} className={`mn-pill ${filter === t ? 'is-on' : ''}`} onClick={() => setFilter(t)}>{t}</button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <p style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--muted)' }}>Chưa có bài nào trong mục này.</p>
          ) : (
            <>
              {/* Featured */}
              <article onClick={() => openArticle(filtered[0].slug)} style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 'var(--row)', paddingBottom: 64, borderBottom: '1px solid var(--line-strong)', marginBottom: 64, cursor: 'pointer' }}>
                <div style={{ gridColumn: '1 / span 7', aspectRatio: '16/10', background: 'var(--bg-2)', position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(45deg, transparent 0 14px, var(--line) 14px 15px)' }}></div>
                  <div style={{ position: 'absolute', bottom: 16, left: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', background: 'var(--bg)', padding: '6px 10px' }}>[Featured image]</div>
                  <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--accent)', background: 'var(--bg)', padding: '6px 10px' }}>◆ Mới nhất</div>
                </div>
                <div style={{ gridColumn: '8 / span 5', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span className="mn-eyebrow" style={{ marginBottom: 18 }}>◆ Featured · {filtered[0].tag}</span>
                  <h2 className="mn-serif" style={{ fontSize: 48, margin: '0 0 18px', lineHeight: 1.05 }}>{filtered[0].title}</h2>
                  <p style={{ fontSize: 15, color: 'var(--ink-2)', lineHeight: 1.55, margin: '0 0 24px' }}>{filtered[0].excerpt}</p>
                  <div className="mn-mono" style={{ display: 'flex', gap: 14 }}>
                    <span>{filtered[0].date}</span><span>·</span>
                    <span>{filtered[0].read}</span>
                  </div>
                </div>
              </article>

              <div className="mn-insights-grid">
                {filtered.slice(1).map(it => (
                  <article className="mn-insight" key={it.slug} onClick={() => openArticle(it.slug)}>
                    <span className="tag">{it.tag}</span>
                    <h3 className="title">{it.title}</h3>
                    <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.5, margin: '0 0 18px' }}>{it.excerpt}</p>
                    <div className="meta">
                      <span>{it.date}</span>
                      <span>{it.read}</span>
                    </div>
                  </article>
                ))}
              </div>
            </>
          )}
        </div>
      </section>
    </main>
  );
}

function ArticlePage({ slug, go, openArticle }) {
  const article = ARTICLES.find(a => a.slug === slug) || ARTICLES[0];
  const idx = ARTICLES.findIndex(a => a.slug === article.slug);
  const next = ARTICLES[(idx + 1) % ARTICLES.length];
  const prev = ARTICLES[(idx - 1 + ARTICLES.length) % ARTICLES.length];

  return (
    <main className="mn-fade">
      <article>
        <section className="mn-page-head">
          <div className="mn-container">
            <div className="crumbs">
              <a onClick={() => go('home')} href="#">Trang chủ</a>
              <span className="sep">/</span>
              <a onClick={() => go('writing')} href="#">Bài viết</a>
              <span className="sep">/</span>
              <span>{article.tag}</span>
            </div>
            <h1 style={{ fontSize: 'clamp(40px, 6vw, 88px)', maxWidth: '20ch' }}>{article.title}</h1>
            <div className="deck">
              <p style={{ gridColumn: '7 / span 5' }}>{article.excerpt}</p>
            </div>
            <div className="mn-mono" style={{ display: 'flex', gap: 18, marginTop: 32, paddingTop: 32, borderTop: '1px solid var(--line-strong)' }}>
              <span>◆ {article.tag}</span>
              <span>{article.date}</span>
              <span>{article.read} đọc</span>
              <span style={{ marginLeft: 'auto' }}>Bởi {SITE.name}</span>
            </div>
          </div>
        </section>

        <section className="mn-section">
          <div className="mn-container">
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 'var(--row)' }}>
              <div className="mn-article-body" style={{ gridColumn: '3 / span 8' }}>
                {renderMarkdown(article.body)}

                <div style={{ marginTop: 64, padding: 24, borderLeft: '2px solid var(--accent)', background: 'var(--paper)' }}>
                  <p className="mn-mono" style={{ margin: '0 0 8px' }}>◆ Lưu ý</p>
                  <p style={{ margin: 0, fontSize: 14, lineHeight: 1.6, color: 'var(--ink-2)' }}>
                    Bài viết thể hiện quan điểm và phân tích cá nhân, không cấu thành tư vấn pháp lý chính thức. Vui lòng đối chiếu với văn bản gốc và tham khảo Luật sư có chứng chỉ hành nghề cho vấn đề cụ thể.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mn-section" style={{ background: 'var(--bg-2)', paddingTop: 64, paddingBottom: 64 }}>
          <div className="mn-container">
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--row)' }}>
              <button onClick={() => openArticle(prev.slug)} style={{ textAlign: 'left', padding: '32px 0', borderTop: '1px solid var(--line-strong)' }}>
                <div className="mn-mono" style={{ marginBottom: 14 }}>← Bài trước</div>
                <div className="mn-serif" style={{ fontSize: 28, lineHeight: 1.1 }}>{prev.title}</div>
              </button>
              <button onClick={() => openArticle(next.slug)} style={{ textAlign: 'right', padding: '32px 0', borderTop: '1px solid var(--line-strong)' }}>
                <div className="mn-mono" style={{ marginBottom: 14 }}>Bài tiếp →</div>
                <div className="mn-serif" style={{ fontSize: 28, lineHeight: 1.1 }}>{next.title}</div>
              </button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}

function ContactPage({ go }) {
  const [form, setForm] = React.useState({ name: '', email: '', topic: 'Góp ý cho bài viết', message: '' });
  const [sent, setSent] = React.useState(false);
  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    // Open mail client with prefilled content
    const subject = encodeURIComponent(`[${form.topic}] từ ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name}\n${form.email}`);
    window.location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
    setSent(true);
  };

  return (
    <main className="mn-fade">
      <section className="mn-page-head">
        <div className="mn-container">
          <div className="crumbs">
            <a onClick={() => go('home')} href="#">Trang chủ</a>
            <span className="sep">/</span>
            <span>Liên hệ</span>
          </div>
          <h1>Một <em>cuộc trò chuyện</em>?</h1>
          <div className="deck">
            <p>Góp ý cho bài viết, gợi ý chủ đề, hoặc chỉ muốn trao đổi về một vấn đề pháp lý/kinh tế — mình rất hoan nghênh. Form này sẽ mở email client của bạn với nội dung đã điền sẵn.</p>
          </div>
        </div>
      </section>

      <section className="mn-section">
        <div className="mn-container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(12,1fr)', gap: 'var(--row)' }}>
            <div style={{ gridColumn: '1 / span 7' }}>
              {sent ? (
                <div className="mn-form-success">
                  <h3>Email client đã được mở.</h3>
                  <p>Nếu không thấy gì, bạn có thể gửi trực tiếp đến {SITE.email}. Cảm ơn bạn đã ghé!</p>
                </div>
              ) : (
                <form className="mn-form" onSubmit={submit}>
                  <div className="mn-field">
                    <label>Tên</label>
                    <input value={form.name} onChange={update('name')} required placeholder="Tên bạn" />
                  </div>
                  <div className="mn-field">
                    <label>Email</label>
                    <input type="email" value={form.email} onChange={update('email')} required placeholder="email@example.com" />
                  </div>
                  <div className="mn-field full">
                    <label>Chủ đề</label>
                    <select value={form.topic} onChange={update('topic')}>
                      <option>Góp ý cho bài viết</option>
                      <option>Gợi ý chủ đề / nguồn đọc</option>
                      <option>Chỉ ra điểm sai</option>
                      <option>Trao đổi học thuật</option>
                      <option>Khác</option>
                    </select>
                  </div>
                  <div className="mn-field full">
                    <label>Nội dung</label>
                    <textarea value={form.message} onChange={update('message')} placeholder="Bạn muốn nói gì với mình..." />
                  </div>
                  <div className="mn-field full" style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 12 }}>
                    <span className="mn-mono">◆ Form sẽ mở email client của bạn</span>
                    <button type="submit" className="mn-btn mn-btn-primary">Gửi qua email <span className="arrow">→</span></button>
                  </div>
                </form>
              )}
            </div>

            <aside style={{ gridColumn: '9 / span 4', display: 'flex', flexDirection: 'column', gap: 20 }}>
              <div className="mn-card">
                <span className="tag">Email trực tiếp</span>
                <h3 style={{ fontSize: 22 }}>{SITE.email}</h3>
                <p>Cách nhanh nhất để liên hệ mình. Mình cố gắng phản hồi trong vài ngày.</p>
              </div>
              <div className="mn-card">
                <span className="tag">Mạng xã hội</span>
                <h3 style={{ fontSize: 22 }}><em>GitHub</em> &amp; <em>LinkedIn</em></h3>
                <p>
                  <a href={SITE.github} style={{ textDecoration: 'underline' }}>GitHub</a> · <a href={SITE.linkedin} style={{ textDecoration: 'underline' }}>LinkedIn</a>
                </p>
                <span className="mn-mono">Code &amp; networking</span>
              </div>
              <div className="mn-card">
                <span className="tag">Lưu ý</span>
                <h3 style={{ fontSize: 22 }}>Không phải <em>tư vấn pháp lý</em></h3>
                <p>Mình chưa hành nghề. Nếu bạn cần tư vấn cho một vấn đề cụ thể, vui lòng tìm luật sư có chứng chỉ.</p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { TopicsPage, AboutPage, WritingPage, ArticlePage, ContactPage });
