import { TBasicNews, TFeaturedNews, TMagazine } from '@/interfaces/common.type';
import { CategoryData } from '@/interfaces/news.type';
const randomImgUrl = () =>
  `https://picsum.photos/900/600?random=${Math.floor(Math.random() * 1000)}`;

export const navList = [
  {
    id: 'xb',
    name: 'Xuất bản',
    redirectUrl: '/xuat-ban',
  },
  {
    id: 'tg',
    name: 'Tác giả',
    redirectUrl: '/tac-gia',
  },
  {
    id: 'kd',
    name: 'Kinh doanh',
    redirectUrl: '/kinh-doanh',
  },
  {
    id: 'tt',
    name: 'Thể thao',
    redirectUrl: '/the-thao',
  },
  {
    id: 'cn',
    name: 'Công nghệ',
    redirectUrl: '/cong-nghe',
  },
  {
    id: 'sk',
    name: 'Sức khỏe',
    redirectUrl: '/suc-khoe',
  },
  {
    id: 'ds',
    name: 'Đời sống',
    redirectUrl: '/doi-song',
  },
  {
    id: 'gt',
    name: 'Giải trí',
    redirectUrl: '/giai-tri',
  },
];

export const fullMenu = [
  { label: 'Xuất bản', id: 'xuat-ban', link: '/xuat-ban' },
  { label: 'Kinh doanh', id: 'kinh-doanh', link: '/kinh-doanh' },
  { label: 'Công nghệ', id: 'cong-nghe', link: '/cong-nghe' },
  { label: 'Đời sống', id: 'doi-song', link: '/doi-song' },
  { label: 'Tác giả', id: 'tac-gia', link: '/tac-gia' },
  { label: 'Sức khỏe', id: 'suc-khoe', link: '/suc-khoe' },
  { label: 'Giải trí', id: 'giai-tri', link: '/giai-tri' },
  { label: 'Thể thao', id: 'the-thao', link: '/the-thao' },
  { label: 'Thế giới sách', id: 'the-gioi-sach', link: '/the-gioi-sach' },
  { label: 'Du lịch', id: 'du-lich', link: '/du-lich' },
  { label: 'Lifestyle', id: 'lifestyle', link: '/lifestyle' },
  { label: 'Xe', id: 'xe', link: '/xe' },
  { label: 'Cuốn sách tôi đọc', id: 'cuon-sach-toi-doc', link: '/cuon-sach-toi-doc' },
  { label: 'Văn hóa đọc', id: 'van-hoa-doc', link: '/van-hoa-doc' },
  { label: 'Xã hội', id: 'xa-hoi', link: '/xa-hoi' },
  { label: 'Cải chính', id: 'cai-chinh', link: '/cai-chinh' },
  { label: 'Nghiên cứu xuất bản', id: 'nghien-cuu-xuat-ban', link: '/nghien-cuu-xuat-ban' },
  { label: 'Pháp luật', id: 'phap-luat', link: '/phap-luat' },
  { label: 'Thế giới', id: 'the-gioi', link: '/the-gioi' },
  { label: 'Giáo dục', id: 'giao-duc', link: '/giao-duc' },
];

export const trendingNews = [
  {
    id: 'trd1',
    name: 'Lịch thi đấu Euro 2024',
    link: '/the-thao/lich-thi-dau-euro-2024',
  },
  {
    id: 'trd2',
    name: 'Giá xăng dầu hôm nay',
    link: '/kinh-doanh/gia-xang-dau-hom-nay',
  },
  {
    id: 'trd3',
    name: 'Nắng nóng đỉnh điểm tại miền Bắc',
    link: '/doi-song/nang-nong-dinh-diem-mien-bac',
  },
];

export const frontNews: {
  tile: TBasicNews[];
  featured: TFeaturedNews[];
  thumb: TBasicNews[];
} = {
  tile: [
    {
      id: 'tile1',
      href: '/xuat-ban/sach-moi-thang-6',
      imageUrl: randomImgUrl(),
      title: 'Top 10 cuốn sách bán chạy nhất tháng 6/2024',
      altText: 'Sách bán chạy',
    },
    {
      id: 'tile2',
      href: '/cong-nghe/iphone-16',
      imageUrl: randomImgUrl(),
      title: 'iPhone 16 sẽ có thiết kế hoàn toàn mới',
      altText: 'iPhone 16',
    },
    {
      id: 'tile3',
      href: '/the-thao/vietnam-vs-indonesia',
      imageUrl: randomImgUrl(),
      title: 'ĐT Việt Nam chuẩn bị cho trận gặp Indonesia',
      altText: 'Bóng đá Việt Nam',
    },
    {
      id: 'tile4',
      href: '/suc-khoe/sot-xuat-huyet',
      imageUrl: randomImgUrl(),
      title: 'Bộ Y tế cảnh báo dịch sốt xuất huyết bùng phát',
      altText: 'Sốt xuất huyết',
    },
    {
      id: 'tile5',
      href: '/kinh-doanh/thi-truong-chung-khoan',
      imageUrl: randomImgUrl(),
      title: 'Thị trường chứng khoán tiếp tục tăng điểm',
      altText: 'Chứng khoán',
    },
  ],
  featured: [
    {
      id: 'feat1',
      href: '/the-thao/euro-2024',
      imageUrl: randomImgUrl(),
      title: 'Euro 2024: Những điều cần biết về giải đấu',
      altText: 'Euro 2024',
      description:
        'Euro 2024 sắp khởi tranh với sự tham gia của 24 đội tuyển hàng đầu châu Âu. Cập nhật lịch thi đấu, lịch phát sóng và dự đoán kết quả.',
    },
  ],
  thumb: [
    {
      id: 'thumb1',
      href: '/giai-tri/phim-viet',
      imageUrl: randomImgUrl(),
      title: "Phim Việt 'Mai' tiếp tục gây sốt phòng vé",
      altText: 'Phim Mai',
    },
    {
      id: 'thumb2',
      href: '/doi-song/am-thuc',
      imageUrl: randomImgUrl(),
      title: 'Món ngon Hà Nội được du khách quốc tế yêu thích',
      altText: 'Ẩm thực Hà Nội',
    },
    {
      id: 'thumb3',
      href: '/xe/vinfast',
      imageUrl: randomImgUrl(),
      title: 'VinFast ra mắt dòng xe điện mới giá rẻ',
      altText: 'Xe điện VinFast',
    },
  ],
};

export const booksNews: TBasicNews[] = [
  {
    id: '1',
    href: '/xuat-ban/sach-hay',
    imageUrl: randomImgUrl(),
    title: "'Chuyện ngõ nghèo' - Tác phẩm gây tranh cãi của Nguyễn Xuân Khánh",
    altText: 'Sách Chuyện ngõ nghèo',
  },
  {
    id: '2',
    href: '/the-gioi-sach/sach-quoc-te',
    imageUrl: randomImgUrl(),
    title: 'Sách nước ngoài bán chạy tại Việt Nam tháng 6/2024',
    altText: 'Sách quốc tế',
  },
  {
    id: '3',
    href: '/van-hoa-doc/hoi-sach',
    imageUrl: randomImgUrl(),
    title: 'Hội sách thiếu nhi TP.HCM thu hút hàng ngàn lượt khách',
    altText: 'Hội sách thiếu nhi',
  },
  {
    id: '4',
    href: '/tac-gia/nguyen-nhat-anh',
    imageUrl: randomImgUrl(),
    title: 'Nguyễn Nhật Ánh ra mắt tác phẩm mới sau 2 năm',
    altText: 'Nguyễn Nhật Ánh',
  },
  {
    id: '5',
    href: '/cuon-sach-toi-doc/tu-sach',
    imageUrl: randomImgUrl(),
    title: 'Tủ sách của người nổi tiếng: Những cuốn sách làm thay đổi cuộc đời họ',
    altText: 'Tủ sách người nổi tiếng',
  },
];

export const multiMedia: {
  featured: TFeaturedNews[];
  thumb: TBasicNews[];
} = {
  featured: [
    {
      id: 'feat1',
      href: '/video/euro-2024',
      imageUrl: randomImgUrl(),
      title: 'Video: Tổng hợp những pha bóng đẹp nhất Euro 2024',
      altText: 'Euro 2024 highlights',
      description:
        'Những khoảnh khắc đẹp nhất từ các trận đấu tại Euro 2024 với sự tỏa sáng của các ngôi sao hàng đầu.',
    },
  ],
  thumb: [
    {
      id: 'thumb1',
      href: '/video/am-nhac',
      imageUrl: randomImgUrl(),
      title: 'MV mới của Sơn Tùng M-TP đạt 10 triệu view sau 24 giờ',
      altText: 'MV Sơn Tùng',
    },
    {
      id: 'thumb2',
      href: '/video/du-lich',
      imageUrl: randomImgUrl(),
      title: 'Khám phá vẻ đẹp hoang sơ của đảo Lý Sơn',
      altText: 'Du lịch Lý Sơn',
    },
    {
      id: 'thumb3',
      href: '/video/cong-nghe',
      imageUrl: randomImgUrl(),
      title: 'Trải nghiệm thực tế ảo với Apple Vision Pro',
      altText: 'Apple Vision Pro',
    },
  ],
};

export const featured: TFeaturedNews[] = [
  {
    id: 'feat1',
    href: '/kinh-doanh/thi-truong',
    imageUrl: randomImgUrl(),
    title: 'Thị trường bất động sản 6 tháng đầu năm 2024: Những tín hiệu lạc quan',
    altText: 'Bất động sản',
    description:
      'Sau giai đoạn trầm lắng, thị trường bất động sản bắt đầu có những tín hiệu phục hồi với thanh khoản tăng tại nhiều phân khúc. Các chuyên gia dự báo xu hướng thị trường trong nửa cuối năm.',
  },
  {
    id: 'feat2',
    href: '/cong-nghe/ai',
    imageUrl: randomImgUrl(),
    title: 'AI thay đổi ngành công nghiệp sáng tạo như thế nào?',
    altText: 'AI sáng tạo',
    description:
      'Từ viết lách, thiết kế đến sản xuất âm nhạc, AI đang tạo ra cuộc cách mạng trong các ngành công nghiệp sáng tạo. Các chuyên gia phân tích cả cơ hội và thách thức từ xu hướng này.',
  },
  {
    id: 'feat3',
    href: '/suc-khoe/dinh-duong',
    imageUrl: randomImgUrl(),
    title: 'Chế độ ăn Địa Trung Hải: Bí quyết sống khỏe và trường thọ',
    altText: 'Ăn Địa Trung Hải',
    description:
      'Nghiên cứu mới nhất khẳng định chế độ ăn Địa Trung Hải không chỉ tốt cho tim mạch mà còn giúp kéo dài tuổi thọ. Các chuyên gia dinh dưỡng hướng dẫn cách áp dụng phù hợp với người Việt.',
  },
];

export const businessNews: {
  featured: TFeaturedNews;
  tile: TBasicNews[];
  thumb: TBasicNews[];
} = {
  featured: {
    id: 'biz-feat1',
    href: '/kinh-doanh/ngan-hang',
    imageUrl: randomImgUrl(),
    title: 'Lãi suất ngân hàng tiếp tục giảm trong tháng 7/2024',
    altText: 'Lãi suất ngân hàng',
    description:
      'Các ngân hàng thương mại tiếp tục điều chỉnh giảm lãi suất huy động và cho vay trong tháng 7, tạo điều kiện thuận lợi cho doanh nghiệp và người dân tiếp cận vốn.',
  },
  tile: [
    {
      id: 'biz-tile1',
      href: '/kinh-doanh/xuat-khau',
      imageUrl: randomImgUrl(),
      title: 'Xuất khẩu nông sản 6 tháng đầu năm tăng trưởng 15%',
      altText: 'Xuất khẩu nông sản',
    },
    {
      id: 'biz-tile2',
      href: '/kinh-doanh/thi-truong',
      imageUrl: randomImgUrl(),
      title: 'Giá vàng trong nước biến động mạnh theo thế giới',
      altText: 'Giá vàng',
    },
  ],
  thumb: [
    {
      id: 'biz-thumb1',
      href: '/kinh-doanh/startup',
      imageUrl: randomImgUrl(),
      title: 'Startup Việt gọi vốn thành công 5 triệu USD từ quỹ Singapore',
      altText: 'Startup gọi vốn',
    },
    {
      id: 'biz-thumb2',
      href: '/kinh-doanh/tieu-dung',
      imageUrl: randomImgUrl(),
      title: 'Người tiêu dùng thắt chặt chi tiêu trong mùa hè',
      altText: 'Tiêu dùng',
    },
    {
      id: 'biz-thumb3',
      href: '/kinh-doanh/du-lich',
      imageUrl: randomImgUrl(),
      title: 'Du lịch Việt Nam đón 8 triệu lượt khách quốc tế nửa đầu năm',
      altText: 'Du lịch',
    },
  ],
};

export const lifestyleNews: {
  featured: TFeaturedNews;
  tile: TBasicNews[];
  thumb: TBasicNews[];
} = {
  featured: {
    id: 'lifestyle-feat1',
    href: '/doi-song/am-thuc',
    imageUrl: randomImgUrl(),
    title: 'Trào lưu ẩm thực đường phố Hàn Quốc lan tỏa tại Việt Nam',
    altText: 'Ẩm thực Hàn Quốc',
    description:
      'Từ tteokbokki đến hotteok, các món ăn đường phố Hàn Quốc đang tạo nên cơn sốt trong giới trẻ Việt. Các quán ăn theo phong cách Hàn mọc lên khắp các thành phố lớn.',
  },
  tile: [
    {
      id: 'lifestyle-tile1',
      href: '/doi-song/thoi-trang',
      imageUrl: randomImgUrl(),
      title: 'Xu hướng thời trang mùa hè 2024: Nhẹ nhàng và thoáng mát',
      altText: 'Thời trang mùa hè',
    },
    {
      id: 'lifestyle-tile2',
      href: '/doi-song/gia-dinh',
      imageUrl: randomImgUrl(),
      title: 'Bí quyết cân bằng công việc và gia đình cho người trẻ',
      altText: 'Cân bằng cuộc sống',
    },
  ],
  thumb: [
    {
      id: 'lifestyle-thumb1',
      href: '/doi-song/lam-dep',
      imageUrl: randomImgUrl(),
      title: '5 bí quyết chăm sóc da mùa nắng nóng',
      altText: 'Chăm sóc da',
    },
    {
      id: 'lifestyle-thumb2',
      href: '/doi-song/nha-dep',
      imageUrl: randomImgUrl(),
      title: 'Ý tưởng trang trí nhà nhỏ đẹp và tiết kiệm',
      altText: 'Trang trí nhà',
    },
    {
      id: 'lifestyle-thumb3',
      href: '/doi-song/van-hoa',
      imageUrl: randomImgUrl(),
      title: 'Khám phá những phong tục đón Tết Đoan Ngọ độc đáo',
      altText: 'Tết Đoan Ngọ',
    },
  ],
};

export const newsByCategory: CategoryData[] = [
  {
    category: {
      link: '/cong-nghe',
      label: 'CÔNG NGHỆ',
    },
    data: {
      featured: {
        id: 'tech-tile1',
        href: '/cong-nghe/ai',
        imageUrl: randomImgUrl(),
        title: 'Google ra mắt AI Gemini 1.5 với khả năng xử lý đa phương tiện',
        altText: 'AI Gemini',
      },
      tile: [
        {
          id: 'tech-tile2',
          href: '/cong-nghe/dien-thoai',
          imageUrl: randomImgUrl(),
          title: 'Samsung chuẩn bị ra mắt dòng Galaxy Z Fold 6',
          altText: 'Galaxy Z Fold 6',
        },
        {
          id: 'tech-tile3',
          href: '/cong-nghe/phan-mem',
          imageUrl: randomImgUrl(),
          title: 'Windows 12 dự kiến ra mắt vào đầu năm 2025',
          altText: 'Windows 12',
        },
        {
          id: 'tech-tile4',
          href: '/cong-nghe/blockchain',
          imageUrl: randomImgUrl(),
          title: 'Việt Nam lọt top 5 quốc gia áp dụng blockchain nhiều nhất',
          altText: 'Blockchain',
        },
      ],
    },
  },
  {
    category: {
      link: '/suc-khoe',
      label: 'SỨC KHỎE',
    },
    data: {
      featured: {
        id: 'health-tile1',
        href: '/suc-khoe/dinh-duong',
        imageUrl: randomImgUrl(),
        title: 'Cảnh báo ngộ độc thực phẩm mùa hè và cách phòng tránh',
        altText: 'Ngộ độc thực phẩm',
      },
      tile: [
        {
          id: 'health-tile2',
          href: '/suc-khoe/lam-dep',
          imageUrl: randomImgUrl(),
          title: '5 loại mặt nạ tự nhiên giúp da sáng mịn mùa hè',
          altText: 'Mặt nạ tự nhiên',
        },
        {
          id: 'health-tile3',
          href: '/suc-khoe/tu-van',
          imageUrl: randomImgUrl(),
          title: 'Chuyên gia giải đáp: Uống nước đúng cách trong ngày nắng nóng',
          altText: 'Uống nước đúng cách',
        },
        {
          id: 'health-tile4',
          href: '/suc-khoe/benh-thuong-gap',
          imageUrl: randomImgUrl(),
          title: 'Bệnh tay chân miệng bùng phát tại các tỉnh phía Nam',
          altText: 'Tay chân miệng',
        },
      ],
    },
  },
  {
    category: {
      link: '/the-thao',
      label: 'THỂ THAO',
    },
    data: {
      featured: {
        id: 'sport-tile1',
        href: '/the-thao/euro-2024',
        imageUrl: randomImgUrl(),
        title: 'Euro 2024: Phân tích chiến thuật trận Pháp vs Bỉ',
        altText: 'Euro 2024',
      },
      tile: [
        {
          id: 'sport-tile2',
          href: '/the-thao/bong-da-vietnam',
          imageUrl: randomImgUrl(),
          title: 'HLV Troussier công bố danh sách ĐT Việt Nam',
          altText: 'ĐT Việt Nam',
        },
        {
          id: 'sport-tile3',
          href: '/the-thao/tennis',
          imageUrl: randomImgUrl(),
          title: 'Djokovic giành chức vô địch Wimbledon lần thứ 8',
          altText: 'Wimbledon',
        },
        {
          id: 'sport-tile4',
          href: '/the-thao/sea-games',
          imageUrl: randomImgUrl(),
          title: 'Việt Nam đặt mục tiêu top 3 SEA Games 2025',
          altText: 'SEA Games',
        },
      ],
    },
  },
  {
    category: {
      link: '/kinh-doanh',
      label: 'KINH DOANH',
    },
    data: {
      featured: {
        id: 'biz-tile1',
        href: '/kinh-doanh/thi-truong',
        imageUrl: randomImgUrl(),
        title: 'Lãi suất ngân hàng tiếp tục giảm trong tháng 7/2024',
        altText: 'Lãi suất ngân hàng',
      },
      tile: [
        {
          id: 'biz-tile2',
          href: '/kinh-doanh/chung-khoan',
          imageUrl: randomImgUrl(),
          title: 'VN-Index vượt mốc 1.300 điểm, thanh khoản tăng mạnh',
          altText: 'Chứng khoán',
        },
        {
          id: 'biz-tile3',
          href: '/kinh-doanh/doanh-nghiep',
          imageUrl: randomImgUrl(),
          title: 'VinFast công bố kế hoạch mở rộng sang thị trường châu Phi',
          altText: 'VinFast',
        },
        {
          id: 'biz-tile4',
          href: '/kinh-doanh/tieu-dung',
          imageUrl: randomImgUrl(),
          title: 'Người tiêu dùng thắt chặt chi tiêu trong mùa hè',
          altText: 'Tiêu dùng',
        },
      ],
    },
  },
  {
    category: {
      link: '/doi-song',
      label: 'ĐỜI SỐNG',
    },
    data: {
      featured: {
        id: 'life-tile1',
        href: '/doi-song/am-thuc',
        imageUrl: randomImgUrl(),
        title: 'Trào lưu ẩm thực đường phố Hàn Quốc lan tỏa tại Việt Nam',
        altText: 'Ẩm thực Hàn Quốc',
      },
      tile: [
        {
          id: 'life-tile2',
          href: '/doi-song/gia-dinh',
          imageUrl: randomImgUrl(),
          title: 'Bí quyết cân bằng công việc và gia đình cho người trẻ',
          altText: 'Cân bằng cuộc sống',
        },
        {
          id: 'life-tile3',
          href: '/doi-song/du-lich',
          imageUrl: randomImgUrl(),
          title: 'Top 5 điểm đến mát mẻ tránh nóng mùa hè tại miền Bắc',
          altText: 'Du lịch mùa hè',
        },
        {
          id: 'life-tile4',
          href: '/doi-song/xe',
          imageUrl: randomImgUrl(),
          title: 'Kinh nghiệm chọn mua xe máy điện phù hợp với sinh viên',
          altText: 'Xe máy điện',
        },
      ],
    },
  },
  {
    category: {
      link: '/giai-tri',
      label: 'GIẢI TRÍ',
    },
    data: {
      featured: {
        id: 'ent-tile1',
        href: '/giai-tri/phim-anh',
        imageUrl: randomImgUrl(),
        title: "Phim Việt 'Mai' tiếp tục gây sốt tại các rạp chiếu phim",
        altText: 'Phim Mai',
      },
      tile: [
        {
          id: 'ent-tile2',
          href: '/giai-tri/am-nhac',
          imageUrl: randomImgUrl(),
          title: 'Sơn Tùng M-TP ra mắt MV mới sau 1 năm vắng bóng',
          altText: 'Sơn Tùng M-TP',
        },
        {
          id: 'ent-tile3',
          href: '/giai-tri/sao',
          imageUrl: randomImgUrl(),
          title: 'Dàn sao Việt dự đám cưới hoành tráng tại Đà Nẵng',
          altText: 'Sao Việt',
        },
        {
          id: 'ent-tile4',
          href: '/giai-tri/truyen-hinh',
          imageUrl: randomImgUrl(),
          title: 'Gameshow mùa hè 2024: Cuộc đua rating nóng bỏng',
          altText: 'Gameshow',
        },
      ],
    },
  },
  {
    category: {
      link: '/xuat-ban',
      label: 'XUẤT BẢN',
    },
    data: {
      featured: {
        id: 'pub-tile1',
        href: '/xuat-ban/sach-moi',
        imageUrl: randomImgUrl(),
        title: 'Nguyễn Nhật Ánh ra mắt tác phẩm mới sau 2 năm vắng bóng',
        altText: 'Sách Nguyễn Nhật Ánh',
      },
      tile: [
        {
          id: 'pub-tile2',
          href: '/xuat-ban/hoi-sach',
          imageUrl: randomImgUrl(),
          title: 'Hội sách thiếu nhi TP.HCM thu hút hàng chục ngàn lượt khách',
          altText: 'Hội sách',
        },
        {
          id: 'pub-tile3',
          href: '/xuat-ban/tac-gia',
          imageUrl: randomImgUrl(),
          title: 'Nhà văn trẻ Việt Nam đoạt giải thưởng văn học quốc tế',
          altText: 'Giải thưởng văn học',
        },
        {
          id: 'pub-tile4',
          href: '/xuat-ban/van-hoa-doc',
          imageUrl: randomImgUrl(),
          title: 'Thói quen đọc sách của người Việt thay đổi sau đại dịch',
          altText: 'Văn hóa đọc',
        },
      ],
    },
  },
  {
    category: {
      link: '/xe',
      label: 'XE',
    },
    data: {
      featured: {
        id: 'car-tile1',
        href: '/xe/danh-gia',
        imageUrl: randomImgUrl(),
        title: 'Trải nghiệm VinFast VF 3 - xe điện giá rẻ dành cho giới trẻ',
        altText: 'VinFast VF 3',
      },
      tile: [
        {
          id: 'car-tile2',
          href: '/xe/thi-truong',
          imageUrl: randomImgUrl(),
          title: 'Giá xe máy điện giảm mạnh do cạnh tranh khốc liệt',
          altText: 'Xe máy điện',
        },
        {
          id: 'car-tile3',
          href: '/xe/cong-nghe',
          imageUrl: randomImgUrl(),
          title: 'Xu hướng xe tự lái tại Việt Nam: Còn nhiều thách thức',
          altText: 'Xe tự lái',
        },
        {
          id: 'car-tile4',
          href: '/xe/du-lich',
          imageUrl: randomImgUrl(),
          title: 'Top 5 mẫu SUV phù hợp cho gia đình Việt năm 2024',
          altText: 'SUV gia đình',
        },
      ],
    },
  },
  {
    category: {
      link: '/du-lich',
      label: 'DU LỊCH',
    },
    data: {
      featured: {
        id: 'travel-tile1',
        href: '/du-lich/trong-nuoc',
        imageUrl: randomImgUrl(),
        title: 'Khám phá Sa Pa mùa lúa chín - thiên đường sống ảo',
        altText: 'Sa Pa',
      },
      tile: [
        {
          id: 'travel-tile2',
          href: '/du-lich/quoc-te',
          imageUrl: randomImgUrl(),
          title: 'Nhật Bản mở cửa đón khách Việt với nhiều ưu đãi hấp dẫn',
          altText: 'Du lịch Nhật Bản',
        },
        {
          id: 'travel-tile3',
          href: '/du-lich/am-thuc',
          imageUrl: randomImgUrl(),
          title: 'Hành trình ẩm thực đường phố Hà Nội qua góc máy food blogger',
          altText: 'Ẩm thực Hà Nội',
        },
        {
          id: 'travel-tile4',
          href: '/du-lich/kinh-nghiem',
          imageUrl: randomImgUrl(),
          title: 'Bí quyết du lịch tiết kiệm cho sinh viên mùa hè',
          altText: 'Du lịch tiết kiệm',
        },
      ],
    },
  },
  {
    category: {
      link: '/giao-duc',
      label: 'GIÁO DỤC',
    },
    data: {
      featured: {
        id: 'edu-tile1',
        href: '/giao-duc/tuyen-sinh',
        imageUrl: randomImgUrl(),
        title: 'Điểm chuẩn đại học 2024 dự kiến tăng nhẹ so với năm ngoái',
        altText: 'Tuyển sinh đại học',
      },
      tile: [
        {
          id: 'edu-tile2',
          href: '/giao-duc/du-hoc',
          imageUrl: randomImgUrl(),
          title: 'Học bổng du học Mỹ 2025: Cơ hội cho sinh viên Việt Nam',
          altText: 'Du học Mỹ',
        },
        {
          id: 'edu-tile3',
          href: '/giao-duc/nganh-hoc',
          imageUrl: randomImgUrl(),
          title: 'Top 5 ngành học hot nhất năm 2024 theo xu hướng thế giới',
          altText: 'Ngành học hot',
        },
        {
          id: 'edu-tile4',
          href: '/giao-duc/tieng-anh',
          imageUrl: randomImgUrl(),
          title: 'Phương pháp học tiếng Anh hiệu quả cho người đi làm',
          altText: 'Học tiếng Anh',
        },
      ],
    },
  },
  {
    category: {
      link: '/phap-luat',
      label: 'PHÁP LUẬT',
    },
    data: {
      featured: {
        id: 'law-tile1',
        href: '/phap-luat/an-ninh',
        imageUrl: randomImgUrl(),
        title: 'Triệt phá đường dây đánh bạc trực tuyến hàng trăm tỷ đồng',
        altText: 'Đánh bạc trực tuyến',
      },
      tile: [
        {
          id: 'law-tile2',
          href: '/phap-luat/ho-so',
          imageUrl: randomImgUrl(),
          title: 'Vụ án tham nhũng tại Bộ Y tế: Những diễn biến mới nhất',
          altText: 'Tham nhũng',
        },
        {
          id: 'law-tile3',
          href: '/phap-luat/giao-thong',
          imageUrl: randomImgUrl(),
          title: 'Xử phạt nồng độ cồn từ 7/2024: Mức phạt tăng gấp đôi',
          altText: 'Nồng độ cồn',
        },
        {
          id: 'law-tile4',
          href: '/phap-luat/kinh-te',
          imageUrl: randomImgUrl(),
          title: 'Doanh nghiệp bị xử phạt vì trốn thuế hàng chục tỷ đồng',
          altText: 'Trốn thuế',
        },
      ],
    },
  },
  {
    category: {
      link: '/the-gioi',
      label: 'THẾ GIỚI',
    },
    data: {
      featured: {
        id: 'world-tile1',
        href: '/the-gioi/chau-a',
        imageUrl: randomImgUrl(),
        title: 'Căng thẳng Trung Quốc - Philippines leo thang ở Biển Đông',
        altText: 'Biển Đông',
      },
      tile: [
        {
          id: 'world-tile2',
          href: '/the-gioi/chau-au',
          imageUrl: randomImgUrl(),
          title: 'EU thông qua gói trừng phạt mới nhằm vào Nga',
          altText: 'EU trừng phạt Nga',
        },
        {
          id: 'world-tile3',
          href: '/the-gioi/my',
          imageUrl: randomImgUrl(),
          title: 'Bầu cử Mỹ 2024: Cuộc đua giữa Biden và Trump nóng trở lại',
          altText: 'Bầu cử Mỹ',
        },
        {
          id: 'world-tile4',
          href: '/the-gioi/trung-dong',
          imageUrl: randomImgUrl(),
          title: 'Xung đột Israel - Hamas: Diễn biến mới nhất',
          altText: 'Israel - Hamas',
        },
      ],
    },
  },
  {
    category: {
      link: '/xa-hoi',
      label: 'XÃ HỘI',
    },
    data: {
      featured: {
        id: 'soc-tile1',
        href: '/xa-hoi/giao-thong',
        imageUrl: randomImgUrl(),
        title: 'Hà Nội triển khai loạt biện pháp giảm ùn tắc giao thông điểm nóng',
        altText: 'Ùn tắc giao thông',
      },
      tile: [
        {
          id: 'soc-tile2',
          href: '/xa-hoi/moi-truong',
          imageUrl: randomImgUrl(),
          title: 'Hà Nội ô nhiễm không khí ở mức báo động trong những ngày nắng nóng',
          altText: 'Ô nhiễm không khí',
        },
        {
          id: 'soc-tile3',
          href: '/xa-hoi/dan-sinh',
          imageUrl: randomImgUrl(),
          title: 'Giá điện sinh hoạt tăng từ 1/7: Những điều người dân cần biết',
          altText: 'Giá điện',
        },
        {
          id: 'soc-tile4',
          href: '/xa-hoi/tinh-nguyen',
          imageUrl: randomImgUrl(),
          title: 'Chiến dịch tình nguyện hè 2024 thu hút hàng ngàn bạn trẻ',
          altText: 'Tình nguyện hè',
        },
      ],
    },
  },
];

export const magazine: TMagazine[] = [
  {
    id: '1',
    imageUrl: randomImgUrl(),
    label: 'THỂ THAO',
    link: '/the-thao/euro-2024',
    title: 'Euro 2024: Phân tích chiến thuật các đội bóng hàng đầu',
    description:
      'Đánh giá chuyên sâu về lối chơi của Pháp, Anh, Đức và Tây Ban Nha tại giải đấu lớn nhất châu Âu',
  },
  {
    id: '2',
    imageUrl: randomImgUrl(),
    label: 'CÔNG NGHỆ',
    link: '/cong-nghe/ai',
    title: 'AI 2024: Cuộc đua giữa Gemini, ChatGPT và Claude',
    description: 'So sánh các nền tảng AI hàng đầu và ứng dụng thực tế trong đời sống',
  },
  {
    id: '3',
    imageUrl: randomImgUrl(),
    label: 'SỨC KHỎE',
    link: '/suc-khoe/dinh-duong',
    title: 'Chế độ ăn Địa Trung Hải: Bí quyết sống thọ của người Nhật',
    description: 'Hướng dẫn chi tiết thực đơn 7 ngày phù hợp với người Việt',
  },
  {
    id: '4',
    imageUrl: randomImgUrl(),
    label: 'KINH TẾ',
    link: '/kinh-doanh/thi-truong',
    title: 'Bức tranh kinh tế Việt Nam 6 tháng đầu năm 2024',
    description: 'Phân tích chuyên sâu từ các chuyên gia hàng đầu',
  },
  {
    id: '5',
    imageUrl: randomImgUrl(),
    label: 'DU LỊCH',
    link: '/du-lich/trong-nuoc',
    title: 'Hành trình khám phá Tây Bắc: Từ Mộc Châu đến Điện Biên',
    description: 'Cẩm nang du lịch tự túc với trải nghiệm độc đáo',
  },
  {
    id: '6',
    imageUrl: randomImgUrl(),
    label: 'ẨM THỰC',
    link: '/doi-song/am-thuc',
    title: 'Top 10 quán phở ngon nhất Hà Nội theo bình chọn 2024',
    description: 'Những địa chỉ không thể bỏ qua cho tín đồ ẩm thực',
  },
  {
    id: '7',
    imageUrl: randomImgUrl(),
    label: 'XUẤT BẢN',
    link: '/xuat-ban/sach-moi',
    title: 'Nguyễn Nhật Ánh và hành trình 40 năm viết cho tuổi thơ',
    description: 'Phỏng vấn đặc biệt nhân dịp ra mắt tác phẩm mới',
  },
  {
    id: '8',
    imageUrl: randomImgUrl(),
    label: 'GIẢI TRÍ',
    link: '/giai-tri/phim-anh',
    title: "Làn sóng phim Việt 2024: Từ 'Mai' đến 'Gặp lại chị bầu'",
    description: 'Những bước tiến đáng kể của điện ảnh nước nhà',
  },
  {
    id: '9',
    imageUrl: randomImgUrl(),
    label: 'THỜI TRANG',
    link: '/doi-song/thoi-trang',
    title: 'Xu hướng thời trang hè 2024: Tối giản mà tinh tế',
    description: 'Bí quyết phối đồ từ các fashionista hàng đầu',
  },
  {
    id: '10',
    imageUrl: randomImgUrl(),
    label: 'XE',
    link: '/xe/danh-gia',
    title: 'VinFast VF 3: Trải nghiệm thực tế sau 1 tháng sử dụng',
    description: 'Đánh giá chi tiết ưu nhược điểm từ người dùng thực tế',
  },
  {
    id: '11',
    imageUrl: randomImgUrl(),
    label: 'GIÁO DỤC',
    link: '/giao-duc/du-hoc',
    title: 'Du học châu Âu 2025: Những thay đổi quan trọng cần biết',
    description: 'Cập nhật chính sách visa, học bổng mới nhất',
  },
  {
    id: '12',
    imageUrl: randomImgUrl(),
    label: 'PHÁP LUẬT',
    link: '/phap-luat/an-ninh',
    title: 'Phòng chống lừa đảo trực tuyến: Cẩm nang cần thiết',
    description: 'Nhận diện các thủ đoạn và cách phòng tránh',
  },
  {
    id: '13',
    imageUrl: randomImgUrl(),
    label: 'KHOA HỌC',
    link: '/the-gioi/khoa-hoc',
    title: 'Vũ trụ học 2024: Những khám phá đột phá về hố đen',
    description: 'Tổng hợp nghiên cứu mới nhất từ NASA và ESA',
  },
  {
    id: '14',
    imageUrl: randomImgUrl(),
    label: 'MÔI TRƯỜNG',
    link: '/xa-hoi/moi-truong',
    title: 'Biến đổi khí hậu tại Việt Nam: Thực trạng và giải pháp',
    description: 'Phóng sự đặc biệt từ đồng bằng sông Cửu Long',
  },
  {
    id: '15',
    imageUrl: randomImgUrl(),
    label: 'VĂN HÓA',
    link: '/doi-song/van-hoa',
    title: 'Nghệ thuật đương đại Việt Nam trên bản đồ thế giới',
    description: 'Hành trình của các nghệ sĩ Việt ra quốc tế',
  },
  {
    id: '16',
    imageUrl: randomImgUrl(),
    label: 'CÔNG NGHỆ',
    link: '/cong-nghe/dien-thoai',
    title: 'Đánh giá Samsung Galaxy Z Fold 6: Đột phá màn hình gập',
    description: 'Trải nghiệm thực tế sau 2 tuần sử dụng',
  },
  {
    id: '17',
    imageUrl: randomImgUrl(),
    label: 'SỨC KHỎE',
    link: '/suc-khoe/lam-dep',
    title: 'Xu hướng chăm sóc da không tuổi 2024',
    description: 'Bí quyết từ các chuyên gia da liễu hàng đầu',
  },
  {
    id: '18',
    imageUrl: randomImgUrl(),
    label: 'THỂ THAO',
    link: '/the-thao/bong-da-vietnam',
    title: 'Đội tuyển Việt Nam: Hành trình chuẩn bị cho vòng loại World Cup',
    description: 'Phân tích đội hình từ HLV Troussier',
  },
  {
    id: '19',
    imageUrl: randomImgUrl(),
    label: 'KINH DOANH',
    link: '/kinh-doanh/startup',
    title: 'Startup Việt gọi vốn triệu đô: Bài học thành công',
    description: 'Phỏng vấn độc quyền với các nhà sáng lập trẻ',
  },
  {
    id: '20',
    imageUrl: randomImgUrl(),
    label: 'ĐỜI SỐNG',
    link: '/doi-song/gia-dinh',
    title: 'Sống xanh: Hành trình từ nhận thức đến hành động',
    description: 'Góc nhìn từ các gia đình trẻ tại Hà Nội và TP.HCM',
  },
  {
    id: '21',
    imageUrl: randomImgUrl(),
    label: 'GIẢI TRÍ',
    link: '/giai-tri/am-nhac',
    title: 'Âm nhạc Việt 2024: Sự trỗi dậy của các thể loại mới',
    description: 'Từ V-pop đến underground - bức tranh đa sắc màu',
  },
  {
    id: '22',
    imageUrl: randomImgUrl(),
    label: 'XUẤT BẢN',
    link: '/xuat-ban/tac-gia',
    title: 'Những cây bút trẻ làm mới văn học Việt',
    description: 'Phỏng vấn thế hệ tác giả 9X, 10X đầy triển vọng',
  },
  {
    id: '23',
    imageUrl: randomImgUrl(),
    label: 'XE',
    link: '/xe/thi-truong',
    title: 'Thị trường xe điện Việt Nam: Cạnh tranh khốc liệt',
    description: 'Phân tích các thương hiệu từ VinFast đến nhập khẩu',
  },
  {
    id: '24',
    imageUrl: randomImgUrl(),
    label: 'DU LỊCH',
    link: '/du-lich/quoc-te',
    title: 'Nhật Bản mùa lá đỏ: Hành trình không thể bỏ qua',
    description: 'Cẩm nang từ A-Z cho chuyến đi mùa thu 2024',
  },
  {
    id: '25',
    imageUrl: randomImgUrl(),
    label: 'THẾ GIỚI',
    link: '/the-gioi/chau-a',
    title: 'Đông Nam Á 2024: Điểm nóng địa chính trị',
    description: 'Phân tích từ các chuyên gia quan hệ quốc tế',
  },
];

export const videos = [
  {
    id: 'v1',
    title: 'Tổng hợp những bàn thắng đẹp nhất Euro 2024',
    category: 'Thể thao',
    href: '/video/euro-2024',
    categoryLink: '/the-thao',
    youtube: 'https://www.youtube.com/embed/JVXVP6J9u0I',
    duration: '8:45',
    views: '2.4M',
    uploadTime: '3 ngày trước',
  },
  {
    id: 'v2',
    title: 'Trải nghiệm thực tế Apple Vision Pro tại Việt Nam',
    category: 'Công nghệ',
    href: '/video/apple-vision-pro',
    categoryLink: '/cong-nghe',
    youtube: 'https://www.youtube.com/embed/TX9qSaGXFyg',
    duration: '12:30',
    views: '1.8M',
    uploadTime: '1 tuần trước',
  },
  {
    id: 'v3',
    title: 'Phố cổ Hà Nội - Hành trình ẩm thực đêm',
    category: 'Du lịch',
    href: '/video/pho-co-ha-noi',
    categoryLink: '/du-lich',
    youtube: 'https://www.youtube.com/embed/5GauSw0OY-4',
    duration: '15:22',
    views: '3.2M',
    uploadTime: '2 tuần trước',
  },
  {
    id: 'v4',
    title: 'VinFast VF 3: Trải nghiệm 1 tháng sử dụng',
    category: 'Xe',
    href: '/video/vinfast-vf3',
    categoryLink: '/xe',
    youtube: 'https://www.youtube.com/embed/7e90gBu4pas',
    duration: '18:15',
    views: '1.5M',
    uploadTime: '5 ngày trước',
  },
  {
    id: 'v5',
    title: 'Hướng dẫn chăm sóc da mùa nắng nóng',
    category: 'Sức khỏe',
    href: '/video/cham-soc-da',
    categoryLink: '/suc-khoe',
    youtube: 'https://www.youtube.com/embed/KLuTLF3x9sA',
    duration: '9:37',
    views: '1.1M',
    uploadTime: '4 ngày trước',
  },
  {
    id: 'v6',
    title: 'Phim Mai: Hậu trường những cảnh quay ấn tượng',
    category: 'Giải trí',
    href: '/video/phim-mai',
    categoryLink: '/giai-tri',
    youtube: 'https://www.youtube.com/embed/u_KLmrE_0wM',
    duration: '11:45',
    views: '4.7M',
    uploadTime: '2 tuần trước',
  },
  {
    id: 'v7',
    title: 'Nguyễn Nhật Ánh: Chuyện chưa kể về nhà văn triệu bản',
    category: 'Xuất bản',
    href: '/video/nguyen-nhat-anh',
    categoryLink: '/xuat-ban',
    youtube: 'https://www.youtube.com/embed/c8DHPUrpcgE',
    duration: '22:18',
    views: '2.3M',
    uploadTime: '3 tuần trước',
  },
  {
    id: 'v8',
    title: 'Startup Việt gọi vốn 5 triệu USD: Bài học thành công',
    category: 'Kinh doanh',
    href: '/video/startup-viet',
    categoryLink: '/kinh-doanh',
    youtube: 'https://www.youtube.com/embed/hskN1fyOwLE',
    duration: '14:50',
    views: '890K',
    uploadTime: '6 ngày trước',
  },
  {
    id: 'v9',
    title: 'Sa Pa mùa lúa chín - Thiên đường sống ảo',
    category: 'Đời sống',
    href: '/video/sapa-mua-lua',
    categoryLink: '/doi-song',
    youtube: 'https://www.youtube.com/embed/sb1vAnToddM',
    duration: '7:25',
    views: '3.8M',
    uploadTime: '1 tuần trước',
  },
  {
    id: 'v10',
    title: 'Xu hướng thời trang hè 2024: Đơn giản mà đẳng cấp',
    category: 'Thời trang',
    href: '/video/thoi-trang-he',
    categoryLink: '/doi-song/thoi-trang',
    youtube: 'https://www.youtube.com/embed/1Jbgeo4QuXc',
    duration: '10:12',
    views: '1.2M',
    uploadTime: '5 ngày trước',
  },
  {
    id: 'v11',
    title: 'Cận cảnh Galaxy Z Fold 6: Đột phá màn hình gập',
    category: 'Công nghệ',
    href: '/video/galaxy-zfold6',
    categoryLink: '/cong-nghe',
    youtube: 'https://www.youtube.com/embed/Mc7XKiNrHQc',
    duration: '13:45',
    views: '2.1M',
    uploadTime: '3 ngày trước',
  },
  {
    id: 'v12',
    title: 'Đội tuyển Việt Nam: Tập luyện chuẩn bị cho vòng loại World Cup',
    category: 'Thể thao',
    href: '/video/dtvn-tap-luyen',
    categoryLink: '/the-thao',
    youtube: 'https://www.youtube.com/embed/6owNUyDlHVg',
    duration: '9:30',
    views: '1.7M',
    uploadTime: '4 ngày trước',
  },
  {
    id: 'v13',
    title: 'Bí quyết nấu phở ngon chuẩn vị Hà Nội',
    category: 'Ẩm thực',
    href: '/video/cach-nau-pho',
    categoryLink: '/doi-song/am-thuc',
    youtube: 'https://www.youtube.com/embed/Nsl5LPka3Nc',
    duration: '16:40',
    views: '2.9M',
    uploadTime: '2 tuần trước',
  },
  {
    id: 'v14',
    title: 'Hồ Hoàn Kiếm về đêm - Góc nhìn từ flycam',
    category: 'Du lịch',
    href: '/video/ho-hoan-kiem',
    categoryLink: '/du-lich',
    youtube: 'https://www.youtube.com/embed/xX533BphQCU',
    duration: '5:18',
    views: '4.2M',
    uploadTime: '1 tháng trước',
  },
  {
    id: 'v15',
    title: 'ChatGPT-4o: Trải nghiệm thực tế tại Việt Nam',
    category: 'Công nghệ',
    href: '/video/chatgpt-4o',
    categoryLink: '/cong-nghe',
    youtube: 'https://www.youtube.com/embed/JVXVP6J9u0I',
    duration: '14:22',
    views: '3.5M',
    uploadTime: '1 tuần trước',
  },
];
