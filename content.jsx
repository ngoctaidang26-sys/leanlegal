// content.jsx — EDIT HERE to update your site
// ─────────────────────────────────────────────────────────────────────────────
// This is the only file you need to edit to add new articles or change copy.
// After editing, just commit & push — GitHub Pages will update.

const SITE = {
  // 👇 Đổi tên hiển thị của bạn ở đây
  name: "Ngọc Tài",
  nameEm: "Tài",                       // phần in nghiêng + accent (thường là tên)
  tagline: "Luật sư",
  location: "Việt Nam · 2026",
  short: "Không gian ghi lại quan sát và phân tích nghề nghiệp về Luật Đầu tư, Luật Doanh nghiệp và các giao dịch M&A — từ góc nhìn của một Luật sư đang hành nghề.",
  long: "Mình là Luật sư, chuyên tư vấn doanh nghiệp ở các mảng Luật Đầu tư, Luật Doanh nghiệp và M&A. Xuất phát điểm là Cử nhân Quản trị Luật — sau đó hoàn tất chương trình đào tạo nghề Luật sư và bước vào hành nghề. Trang này là nơi mình ghi lại các phân tích, ghi chú vụ việc và quan sát thực tế từ công việc tư vấn hàng ngày.",
  email: "your.email@example.com",     // 👈 đổi email của bạn
  github: "https://github.com/your-username",
  linkedin: "#",
};

// ─────────────────────────────────────────────────────────────────────────────
// PRACTICE AREAS — đổi/xoá/thêm tuỳ thích
const TOPICS = [
  {
    num: '01',
    name: 'Luật Đầu tư',
    nameEm: 'Đầu tư',
    desc: 'Tư vấn cấu trúc đầu tư FDI, xin IRC/ERC, ưu đãi đầu tư và xử lý vướng mắc thủ tục với cơ quan cấp phép.'
  },
  {
    num: '02',
    name: 'Luật Doanh nghiệp',
    nameEm: 'Doanh nghiệp',
    desc: 'Quản trị công ty, soạn thảo điều lệ, thoả thuận cổ đông, ESOP và tái cấu trúc cho công ty cổ phần, TNHH.'
  },
  {
    num: '03',
    name: 'M&A',
    nameEm: 'M&A',
    desc: 'Cấu trúc giao dịch, due diligence, đàm phán SPA/SHA và xử lý điều kiện tiên quyết cho các thương vụ mua bán doanh nghiệp.'
  },
  {
    num: '04',
    name: 'Hợp đồng Thương mại',
    nameEm: 'Hợp đồng',
    desc: 'Soạn thảo và rà soát hợp đồng phân phối, dịch vụ, hợp tác kinh doanh — chú trọng các điều khoản hạn chế rủi ro và xử lý vi phạm.'
  },
  {
    num: '05',
    name: 'Tuân thủ & Quản trị',
    nameEm: 'Tuân thủ',
    desc: 'Xây dựng khung tuân thủ nội bộ, chính sách chống xung đột lợi ích, quy chế người đại diện — cho doanh nghiệp Việt và FIE.'
  },
  {
    num: '06',
    name: 'Giải quyết Tranh chấp',
    nameEm: 'Tranh chấp',
    desc: 'Đại diện khách hàng trong tranh chấp thương mại tại trọng tài (VIAC) và toà án — tập trung vào tranh chấp hợp đồng và cổ đông.'
  },
];

// ─────────────────────────────────────────────────────────────────────────────
// ARTICLES — Để thêm bài mới, copy 1 entry rồi sửa.
// `body` nhận text thường; chia paragraph bằng \n\n. Có thể dùng **bold** và *italic*.
const ARTICLES = [
  {
    slug: 'tu-quan-tri-luat-den-hanh-nghe-luat-su',
    tag: 'Nghề Luật',
    title: 'Từ Quản trị Luật đến hành nghề Luật sư — một lộ trình',
    date: '12.05.2026',
    read: '7 phút',
    excerpt: 'Cử nhân Quản trị Luật không phải con đường truyền thống đến nghề Luật sư. Mình ghi lại lộ trình thực tế đã đi — từ giảng đường đến thẻ Luật sư.',
    body: `Khi mình tốt nghiệp **Quản trị Luật**, câu hỏi tiếp theo gần như mặc định: "Vậy có hành nghề Luật sư được không?" Câu trả lời ngắn: **được**, nhưng phải đi đúng quy trình.

Quản trị Luật là chương trình kết hợp Luật Doanh nghiệp với kinh tế và quản trị. Bằng cử nhân của ngành này được công nhận là *cử nhân Luật* theo quy định — đủ điều kiện đầu vào để theo đuổi nghề Luật sư.

**Lộ trình mình đã đi:**

Sau khi tốt nghiệp, mình nộp hồ sơ vào khoá đào tạo nghề Luật sư của Học viện Tư pháp — chương trình 12 tháng, bắt buộc theo Luật Luật sư. Đây là bước nhiều bạn Quản trị Luật bỏ qua vì nghĩ "ngành mình không hợp" — sai. Nội dung đào tạo bao trùm cả tố tụng và tư vấn, không riêng cho ai.

Tiếp theo là **kỳ tập sự 12 tháng** tại một tổ chức hành nghề Luật sư. Đây là giai đoạn quan trọng nhất — kiến thức trường lớp gần như không giúp gì cho việc xử lý hồ sơ thực tế. Mình tập sự ở mảng doanh nghiệp, làm trực tiếp các deal M&A và FDI — đúng định hướng từ đầu.

Cuối cùng là *kỳ kiểm tra kết quả tập sự* và **làm thẻ Luật sư**. Từ đây, mới chính thức được ký với tư cách Luật sư.

**Tại sao xuất phát từ Quản trị Luật là một lợi thế:**

Khách hàng doanh nghiệp không cần Luật sư biết mọi điều luật. Họ cần một người hiểu *bối cảnh kinh doanh* của quy định — tại sao điều khoản này tồn tại, nó tác động ra sao đến cấu trúc giao dịch. Đào tạo Quản trị Luật cho mình lợi thế đó ngay từ đầu.

Bài này là phản hồi cho nhiều bạn sinh viên đã email hỏi. Mong giúp được phần nào.`
  },
  {
    slug: 'luat-dau-tu-cho-nguoi-moi-7-dieu',
    tag: 'Ghi chú',
    title: 'Luật Đầu tư cho khách hàng FDI: 7 điều mình luôn nhắc',
    date: '02.05.2026',
    read: '9 phút',
    excerpt: 'Sau nhiều hồ sơ FDI, đây là những điểm mình thấy khách hàng nước ngoài hay hiểu sai nhất khi tiếp cận thị trường Việt Nam.',
    body: `Luật Đầu tư 2020 (sửa đổi bổ sung 2022) là văn bản mình mở ra hằng tuần. Dưới đây là 7 điểm mình thường phải giải thích lại cho khách hàng FDI — ghi lại theo cách dễ nhớ nhất.

**1. Phân biệt nhà đầu tư trong nước và nước ngoài.** Đây là điểm gốc — quyết định toàn bộ thủ tục, ưu đãi và lĩnh vực được phép kinh doanh. Tỷ lệ sở hữu nước ngoài 51% là ngưỡng then chốt.

**2. Danh mục ngành nghề có điều kiện.** Việt Nam dùng cách tiếp cận "negative list" cho NĐT nước ngoài. Nếu ngành không nằm trong danh mục cấm/hạn chế, về nguyên tắc được tiếp cận như NĐT trong nước — nhưng "nguyên tắc" và "thực tế cấp phép" thường khác nhau.

**3. Các hình thức đầu tư.** Thành lập tổ chức kinh tế, góp vốn/mua cổ phần, hợp đồng BCC, dự án PPP — mỗi hình thức có thủ tục riêng và *thời gian xử lý* rất khác nhau.

**4. Giấy chứng nhận đăng ký đầu tư (IRC).** Không phải dự án nào cũng cần. Đọc Điều 37 Luật Đầu tư để biết khi nào bắt buộc — bỏ sót bước này là rủi ro lớn cho cả thương vụ.

**5. Ưu đãi đầu tư.** Theo địa bàn, theo ngành, theo quy mô. Quy mô vốn tối thiểu để được ưu đãi là điều khách hàng thường bỏ sót khi lập kế hoạch giải ngân.

**6. Điều kiện tiếp cận thị trường.** Biểu cam kết WTO + các FTA bilateral đôi khi mâu thuẫn — phải tra kỹ. Trường hợp khó, mình sẵn sàng kiến nghị áp dụng cam kết có lợi hơn cho khách hàng.

**7. Tranh chấp.** Hợp đồng giữa NĐT nước ngoài và Nhà nước thường chọn trọng tài quốc tế (ICSID, UNCITRAL). Đây là cả một thế giới riêng — cần Luật sư có kinh nghiệm chuyên trách.

Mỗi điểm trong này đều có thể tách thành một bài riêng. Mình sẽ viết kỹ hơn trong các tháng tới.`
  },
  {
    slug: 'controlling-interest-la-gi',
    tag: 'Khái niệm',
    title: 'Controlling interest — và tại sao nó luôn xuất hiện trong term sheet',
    date: '20.04.2026',
    read: '5 phút',
    excerpt: 'Một thuật ngữ xuất hiện liên tục trong M&A nhưng ít sách Việt giải thích rõ. Mình thử tóm tắt theo cách mình đang dùng khi tư vấn giao dịch.',
    body: `Trong M&A, *controlling interest* (quyền kiểm soát) không đơn thuần là "nắm trên 50% cổ phần". Đây là tỷ lệ sở hữu — kết hợp với quyền biểu quyết và quyền chỉ định người điều hành — đủ để một bên ra quyết định cho công ty.

**Vì sao cần phân biệt với "majority":**

Một bên có thể nắm 51% cổ phần nhưng vẫn không có controlling interest, nếu Điều lệ yêu cầu siêu đa số (65% hoặc 75%) cho các quyết định lớn — supermajority clauses.

Ngược lại, một quỹ đầu tư chỉ nắm 30% nhưng có *negative control rights* (quyền phủ quyết với các quyết định nhất định) thì vẫn được xem là có ảnh hưởng kiểm soát đáng kể.

**Ở Việt Nam:**

Luật Doanh nghiệp 2020 quy định 65% cho các quyết định quan trọng tại ĐHĐCĐ (Điều 148). Đây là ngưỡng mà người làm M&A phải nhớ — vì nó định nghĩa lại "thế nào là kiểm soát" cho công ty cổ phần Việt.

Trong các thương vụ mình tham gia, *điều khoản supermajority* là một trong những điểm đàm phán dai dẳng nhất giữa bên mua và bên bán — đặc biệt khi bên bán muốn giữ vai trò chiến lược sau giao dịch.

Bài tiếp theo mình sẽ viết về cách drafting một bộ negative control rights chuẩn cho NĐT thiểu số.`
  },
  {
    slug: 'doc-luat-tu-goc-nhin-kinh-te',
    tag: 'Quan điểm',
    title: 'Đọc Luật từ góc nhìn kinh tế — một thử nghiệm',
    date: '08.04.2026',
    read: '7 phút',
    excerpt: 'Law & Economics chưa phổ biến ở Việt Nam, nhưng mình thấy đây là lăng kính cực kỳ hữu ích khi tư vấn cấu trúc giao dịch. Thử áp dụng vào một điều Luật cụ thể.',
    body: `Trường phái Law & Economics (Coase, Posner) cho rằng mọi quy định pháp luật đều có thể phân tích bằng công cụ kinh tế — chi phí giao dịch, hiệu quả phân bổ, externalities.

Mình thử áp dụng vào **Điều 188 Luật Doanh nghiệp 2020** (doanh nghiệp tư nhân không có tư cách pháp nhân):

Theo góc nhìn kinh tế, quy định này tạo *chi phí cao* cho người chủ (chịu trách nhiệm vô hạn), nhưng đồng thời *giảm chi phí thẩm định* cho đối tác (vì chủ DN phải tự đứng ra chịu trách nhiệm cá nhân).

Đây là một dạng "signaling" — chủ DNTN nói với thị trường: "Tôi tin tưởng vào DN của mình đến mức sẵn sàng đặt toàn bộ tài sản cá nhân lên bàn."

Vậy quy định này có hiệu quả không? Phụ thuộc vào việc thị trường có *đọc được* tín hiệu này hay không. Trên thực tế tư vấn, mình thấy hầu như không — đối tác hiếm khi tra cứu loại hình DN trước khi ký hợp đồng, và bản thân chủ DNTN cũng ít khi hiểu hết hệ luỵ.

Đây là một quan sát từ thực tế nghề. Welcome góp ý từ các anh chị có quan điểm khác.`
  },
  {
    slug: 'tom-tat-the-modern-corporation',
    tag: 'Đọc sách',
    title: 'Tóm tắt: "The Modern Corporation and Private Property"',
    date: '25.03.2026',
    read: '8 phút',
    excerpt: 'Berle & Means viết cuốn này năm 1932 nhưng vẫn là nền tảng cho mọi cuộc tranh luận về corporate governance — và cho nhiều điều khoản mình draft hàng ngày.',
    body: `*The Modern Corporation and Private Property* (1932) của Adolf Berle và Gardiner Means đặt ra một quan sát đơn giản nhưng có sức nặng: **trong các công ty cổ phần lớn, quyền sở hữu (ownership) và quyền kiểm soát (control) đã tách rời**.

Trước đó, người ta mặc định: ai sở hữu, người đó quản lý. Nhưng khi cổ phần phân tán cho hàng nghìn nhà đầu tư nhỏ, không ai trong số họ có đủ lợi ích hoặc thông tin để giám sát ban điều hành. Quyền kiểm soát thực tế rơi vào tay management.

**Đây là gốc của agency problem** — vấn đề người uỷ thác / người được uỷ thác mà toàn bộ corporate governance hiện đại đang cố giải quyết.

Đọc cuốn này khiến mình hiểu vì sao mỗi quy định trong Luật Doanh nghiệp 2020 về kiểm toán, kiểm soát viên, công bố thông tin... đều tồn tại có lý do — chúng là các cơ chế giảm thiểu agency cost. Khi draft điều lệ hoặc thoả thuận cổ đông, mình luôn quay lại khung tư duy này: *điều khoản này đang giải quyết agency cost nào?*

Cuốn này khó đọc nhưng đáng. Mình sẽ viết riêng một bài về Berle's "corporate social responsibility" vì nó liên quan trực tiếp đến ESG hôm nay.`
  },
];

Object.assign(window, { SITE, TOPICS, ARTICLES });
