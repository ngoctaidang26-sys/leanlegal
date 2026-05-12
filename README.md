# Personal Law Blog

Sổ tay học luật cá nhân — site tĩnh, deploy được trực tiếp lên GitHub Pages.

## Cách dùng

### 1. Đổi thông tin cá nhân
Mở `content.jsx`, sửa object `SITE` ở đầu file:
- `name` — tên hiển thị của bạn
- `nameEm` — phần in nghiêng (thường là tên/họ)
- `tagline`, `email`, `github`, `linkedin`

### 2. Thêm bài viết mới
Trong `content.jsx`, copy một entry trong mảng `ARTICLES` và sửa:

```js
{
  slug: 'duong-dan-khong-dau',
  tag: 'Suy nghĩ',
  title: 'Tiêu đề bài viết',
  date: '12.05.2026',
  read: '6 phút',
  excerpt: 'Mô tả ngắn hiển thị ở trang danh sách.',
  body: `Đoạn mở đầu.

  Đoạn tiếp theo, dùng **bold** và *italic*.

  Đoạn nữa...`
}
```

`body` dùng định dạng đơn giản:
- Cách 2 dòng (`\n\n`) → đoạn mới
- `**chữ**` → in đậm
- `*chữ*` → in nghiêng + màu accent

### 3. Thêm/sửa chủ đề
Sửa mảng `TOPICS` trong `content.jsx`.

## Deploy GitHub Pages

1. Push repo này lên GitHub
2. Settings → Pages → Source: `main` branch, `/` (root)
3. Đợi vài phút, site sẽ live tại `https://your-username.github.io/repo-name/`

Vì là HTML tĩnh + React qua CDN, không cần build step.

## Tweaks panel (cho người xem)

Phía dưới góc phải có nút **Tweaks** — cho phép người xem đổi theme (Cream / Ink / Bone), accent color, font display, density. Trạng thái tweaks chỉ lưu local.

## Disclaimer

Site này dành cho mục đích **học tập cá nhân**. Tác giả là sinh viên, không phải luật sư hành nghề. Nội dung không cấu thành tư vấn pháp lý.
