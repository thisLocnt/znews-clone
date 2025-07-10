import { BasicNews, FeaturedNews, Magazine } from "@/interfaces/front-news";
import { CategoryData } from "@/interfaces/page-data";
const randomImgUrl = () =>
  `https://picsum.photos/900/600?random=${Math.floor(Math.random() * 1000)}`;

export const navList = [
  {
    id: "xb",
    name: "Xuất bản",
    redirectUrl: "/xuat-ban",
  },
  {
    id: "tg",
    name: "Tác giả",
    redirectUrl: "/tac-gia",
  },
  {
    id: "kd",
    name: "Kinh doanh",
    redirectUrl: "/kinh-doanh",
  },
  {
    id: "tt",
    name: "Thể thao",
    redirectUrl: "/the-thao",
  },
  {
    id: "cn",
    name: "Công nghệ",
    redirectUrl: "/cong-nghe",
  },
  {
    id: "sk",
    name: "Sức khỏe",
    redirectUrl: "/suc-khoe",
  },
  {
    id: "ds",
    name: "Đời sống",
    redirectUrl: "/doi-song",
  },
  {
    id: "gt",
    name: "Giải trí",
    redirectUrl: "/giai-tri",
  },
];

export const fullMenu = [
  { label: "Xuất bản", id: "xuat-ban", link: "/xuat-ban" },
  { label: "Kinh doanh", id: "kinh-doanh", link: "/kinh-doanh" },
  { label: "Công nghệ", id: "cong-nghe", link: "/cong-nghe" },
  { label: "Đời sống", id: "doi-song", link: "/doi-song" },
  { label: "Tác giả", id: "tac-gia", link: "/tac-gia" },
  { label: "Sức khỏe", id: "suc-khoe", link: "/suc-khoe" },
  { label: "Giải trí", id: "giai-tri", link: "/giai-tri" },
  { label: "Thể thao", id: "the-thao", link: "/the-thao" },
  { label: "Thế giới sách", id: "the-gioi-sach", link: "/the-gioi-sach" },
  { label: "Du lịch", id: "du-lich", link: "/du-lich" },
  { label: "Lifestyle", id: "lifestyle", link: "/lifestyle" },
  { label: "Xe", id: "xe", link: "/xe" },
  {
    label: "Cuốn sách tôi đọc",
    id: "cuon-sach-toi-doc",
    link: "/cuon-sach-toi-doc",
  },
  { label: "Văn hóa đọc", id: "van-hoa-doc", link: "/van-hoa-doc" },
  { label: "Xã hội", id: "xa-hoi", link: "/xa-hoi" },
  { label: "Cải chính", id: "cai-chinh", link: "/cai-chinh" },
  {
    label: "Nghiên cứu xuất bản",
    id: "nghien-cuu-xuat-ban",
    link: "/nghien-cuu-xuat-ban",
  },
  { label: "Pháp luật", id: "phap-luat", link: "/phap-luat" },
  { label: "Thế giới", id: "the-gioi", link: "/the-gioi" },
  { label: "Giáo dục", id: "giao-duc", link: "/giao-duc" },
];

export const trendingNews = [
  {
    id: "trd1",
    name: "FIFA Club World Cup 2025",
    link: "/trending/FIFA-Club-World-Cup-2025",
  },
  {
    id: "trd2",
    name: "Người nổi tiếng quảng cáo hàng giả",
    link: "/trending/nguoi-noi-tieng-quang-cao-hang-gia",
  },
  {
    id: "trd3",
    name: "Sáp nhập tỉnh thành",
    link: "/trending/sap-nhap-tinh-thanh",
  },
];

export const frontNews: {
  tile: BasicNews[];
  featured: FeaturedNews[];
  thumb: BasicNews[];
} = {
  tile: [
    {
      id: "tile1",
      href: "/news/1",
      imageUrl: randomImgUrl(),
      title: "Sách kinh điển bất ngờ lọt top bán chạy 2024",
      altText: "Classic book cover",
    },
    {
      id: "tile2",
      href: "/news/2",
      imageUrl: randomImgUrl(),
      title: "Tác giả trẻ gây sốt với tựa sách ấn tượng",
      altText: "Author photo",
    },
    {
      id: "tile3",
      href: "/news/3",
      imageUrl: randomImgUrl(),
      title: "Xu hướng đọc sách điện tử bùng nổ",
      altText: "E-book reader",
    },
    {
      id: "tile4",
      href: "/news/4",
      imageUrl: randomImgUrl(),
      title: "Top sách kỹ năng mềm bạn nên đọc",
      altText: "Soft skills book",
    },
    {
      id: "tile5",
      href: "/news/5",
      imageUrl: randomImgUrl(),
      title: "Những cuốn sách được dịch nhiều nhất",
      altText: "Translation books",
    },
  ],
  featured: [
    {
      id: "feat1",
      href: "/feature/elon-musk",
      imageUrl: randomImgUrl(),
      title: "Elon Musk: Từ CEO thành biểu tượng văn hóa",
      altText: "Elon Musk",
      description:
        "Elon Musk đang đối mặt nhiều thách thức lớn khi mở rộng đế chế Tesla, SpaceX và các dự án AI đầy tham vọng.",
    },
  ],
  thumb: [
    {
      id: "thumb1",
      href: "/thumb/1",
      imageUrl: randomImgUrl(),
      title: "Thói quen đọc sách buổi sáng của CEO",
      altText: "Morning read",
    },
    {
      id: "thumb2",
      href: "/thumb/2",
      imageUrl: randomImgUrl(),
      title: "Sách kỹ năng lãnh đạo: Bí quyết thành công",
      altText: "Leadership book",
    },
    {
      id: "thumb3",
      href: "/thumb/3",
      imageUrl: randomImgUrl(),
      title: "Những cuốn sách nên đọc trước tuổi 30",
      altText: "Books before 30",
    },
  ],
};

export const booksNews: BasicNews[] = [
  {
    id: "1",
    href: "/1",
    imageUrl: randomImgUrl(),
    title: "Những cuốn sách thay đổi tư duy quản lý tài chính",
    altText: "Book cover",
  },
  {
    id: "2",
    href: "/2",
    imageUrl: randomImgUrl(),
    title: "5 tựa sách hay về triết lý sống của người Nhật",
    altText: "Book cover",
  },
  {
    id: "3",
    href: "/3",
    imageUrl: randomImgUrl(),
    title: "Tủ sách thiếu nhi: Những câu chuyện cổ tích bất hủ",
    altText: "Book cover",
  },
  {
    id: "4",
    href: "/4",
    imageUrl: randomImgUrl(),
    title: "Top sách kỹ năng mềm giúp bạn thành công trong công việc",
    altText: "Book cover",
  },
  {
    id: "5",
    href: "/5",
    imageUrl: randomImgUrl(),
    title: "Những cuốn tiểu thuyết bán chạy nhất năm 2024",
    altText: "Book cover",
  },
  {
    id: "6",
    href: "/6",
    imageUrl: randomImgUrl(),
    title: "Sách mới ra mắt: Hành trình khám phá bản thân",
    altText: "Book cover",
  },
  {
    id: "7",
    href: "/7",
    imageUrl: randomImgUrl(),
    title: "Tác phẩm văn học Việt Nam nên đọc ít nhất một lần",
    altText: "Book cover",
  },
  {
    id: "8",
    href: "/8",
    imageUrl: randomImgUrl(),
    title: "Sách hướng dẫn học ngoại ngữ nhanh và hiệu quả",
    altText: "Book cover",
  },
  {
    id: "9",
    href: "9/",
    imageUrl: randomImgUrl(),
    title: "Khám phá thế giới qua những cuốn du ký nổi tiếng",
    altText: "Book cover",
  },
  {
    id: "10",
    href: "/10",
    imageUrl: randomImgUrl(),
    title: "Sách nghệ thuật và thiết kế: Cảm hứng sáng tạo",
    altText: "Book cover",
  },
];

export const multiMedia: {
  featured: FeaturedNews[];
  thumb: BasicNews[];
} = {
  featured: [
    {
      id: "feat1",
      href: "/feature/elon-musk",
      imageUrl: randomImgUrl(),
      title: "Elon Musk: Từ CEO thành biểu tượng văn hóa",
      altText: "Elon Musk",
      description:
        "Elon Musk đang đối mặt nhiều thách thức lớn khi mở rộng đế chế Tesla, SpaceX và các dự án AI đầy tham vọng.",
    },
  ],
  thumb: [
    {
      id: "thumb1",
      href: "/thumb/1",
      imageUrl: randomImgUrl(),
      title: "CEO trẻ chia sẻ bí quyết quản lý thời gian",
      altText: "Young CEO",
    },
    {
      id: "thumb2",
      href: "/thumb/2",
      imageUrl: randomImgUrl(),
      title: "Xu hướng làm việc từ xa năm 2025",
      altText: "Remote work",
    },
    {
      id: "thumb3",
      href: "/thumb/3",
      imageUrl: randomImgUrl(),
      title: "Startup Việt gọi vốn thành công 2 triệu USD",
      altText: "Startup funding",
    },
    {
      id: "thumb4",
      href: "/thumb/4",
      imageUrl: randomImgUrl(),
      title: "Khám phá thành phố thông minh đầu tiên tại Việt Nam",
      altText: "Smart city",
    },
  ],
};

export const featured: FeaturedNews[] = [
  {
    id: "feat1",
    href: "/feature/quantum-computing",
    imageUrl: randomImgUrl(),
    title: "Máy tính lượng tử: Cuộc cách mạng công nghệ thế kỷ 21",
    altText: "Quantum Computing",
    description:
      "Máy tính lượng tử mở ra kỷ nguyên mới với khả năng xử lý dữ liệu vượt trội. IBM, Google, Microsoft đầu tư mạnh, ứng dụng trong y học, logistics, bảo mật, AI. Dù còn thách thức, dự kiến thương mại hóa trong thập kỷ tới.",
  },
  {
    id: "feat2",
    href: "/feature/vertical-farming",
    imageUrl: randomImgUrl(),
    title: "Nông nghiệp thẳng đứng: Giải pháp cho an ninh lương thực",
    altText: "Vertical Farming",
    description:
      "Nông nghiệp thẳng đứng tăng hiệu suất gấp 10-20 lần, tiết kiệm 95% nước, không cần thuốc trừ sâu. Singapore, Tokyo đầu tư mạnh để đảm bảo an ninh lương thực bền vững.",
  },
  {
    id: "feat3",
    href: "/feature/brain-computer-interface",
    imageUrl: randomImgUrl(),
    title: "Giao diện não-máy tính: Kết nối tâm trí với thế giới số",
    altText: "Brain Computer Interface",
    description:
      "BCI cho phép điều khiển thiết bị bằng suy nghĩ, hỗ trợ người khuyết tật và ứng dụng trong game, giáo dục. Neuralink thử nghiệm thành công, hứa hẹn thay đổi tương tác công nghệ.",
  },
  {
    id: "feat4",
    href: "/feature/hydrogen-energy",
    imageUrl: randomImgUrl(),
    title: "Năng lượng hydro: Nhiên liệu sạch của tương lai",
    altText: "Hydrogen Energy",
    description:
      "Hydro không phát thải carbon, sản xuất từ năng lượng tái tạo. Nhật Bản, Đức, Hàn Quốc dẫn đầu công nghệ pin nhiên liệu. Thách thức là chi phí và hạ tầng lưu trữ, vận chuyển.",
  },
  {
    id: "feat5",
    href: "/feature/digital-twins",
    imageUrl: randomImgUrl(),
    title: "Sinh đôi số: Mô phỏng thực tế trong thế giới ảo",
    altText: "Digital Twins",
    description:
      "Sinh đôi số tạo bản sao kỹ thuật số, tối ưu hóa hiệu suất, giảm chi phí bảo trì. Ứng dụng từ máy bay đến thành phố thông minh, thị trường dự kiến đạt 73 tỷ đô la vào 2027.",
  },
  {
    id: "feat6",
    href: "/feature/autonomous-vehicles",
    imageUrl: randomImgUrl(),
    title: "Xe tự lái: Tương lai giao thông thông minh",
    altText: "Autonomous Vehicles",
    description:
      "Xe tự lái dùng AI, camera, LiDAR giảm 90% tai nạn, tối ưu giao thông, giảm ô nhiễm. Tesla, Waymo dẫn đầu, nhưng vẫn còn thách thức về luật pháp và công nghệ.",
  },
  {
    id: "feat7",
    href: "/feature/gene-editing",
    imageUrl: randomImgUrl(),
    title: "Chỉnh sửa gen CRISPR: Viết lại bộ mã di truyền",
    altText: "CRISPR Gene Editing",
    description:
      "CRISPR-Cas9 điều trị bệnh di truyền như thiếu máu, ung thư máu, ứng dụng trong nông nghiệp. Dù còn tranh cãi đạo đức, công nghệ này hứa hẹn cứu sống hàng triệu người.",
  },
  {
    id: "feat8",
    href: "/feature/sustainable-fashion",
    imageUrl: randomImgUrl(),
    title: "Thời trang bền vững: Cách mạng xanh trong ngành may mặc",
    altText: "Sustainable Fashion",
    description:
      "Thời trang bền vững dùng vật liệu tái chế, sợi sinh học, quy trình thân thiện môi trường. H&M, Patagonia dẫn đầu, giảm lãng phí, thúc đẩy minh bạch và bền vững.",
  },
  {
    id: "feat9",
    href: "/feature/space-mining",
    imageUrl: randomImgUrl(),
    title: "Khai thác không gian: Kho báu từ các tiểu hành tinh",
    altText: "Space Mining",
    description:
      "Khai thác tiểu hành tinh chứa kim loại quý hiếm trị giá nghìn tỷ đô la. SpaceX, NASA đầu tư, nhưng thách thức về công nghệ và luật pháp quốc tế vẫn lớn.",
  },
  {
    id: "feat10",
    href: "/feature/lab-grown-meat",
    imageUrl: randomImgUrl(),
    title: "Thịt nuôi cấy: Cuộc cách mạng protein bền vững",
    altText: "Lab Grown Meat",
    description:
      "Thịt nuôi cấy giảm 96% khí thải, 99% sử dụng đất. Singapore cấp phép thương mại. Chi phí còn cao, nhưng dự kiến cạnh tranh với thịt truyền thống vào 2030.",
  },
  {
    id: "feat11",
    href: "/feature/edge-computing",
    imageUrl: randomImgUrl(),
    title: "Edge Computing: Xử lý dữ liệu tại biên mạng",
    altText: "Edge Computing",
    description:
      "Edge Computing xử lý dữ liệu tại nguồn, giảm độ trễ, hỗ trợ IoT, 5G, xe tự lái. Amazon, Google đầu tư mạnh, 75% dữ liệu doanh nghiệp sẽ xử lý tại edge vào 2025.",
  },
  {
    id: "feat12",
    href: "/feature/biometric-security",
    imageUrl: randomImgUrl(),
    title: "Bảo mật sinh trắc học: Khóa an toàn từ cơ thể con người",
    altText: "Biometric Security",
    description:
      "Bảo mật sinh trắc học dùng võng mạc, tĩnh mạch, giọng nói. Apple, Samsung tiên phong, thị trường đạt 68 tỷ đô la vào 2025. Vấn đề riêng tư và an ninh cần giải quyết.",
  },
  {
    id: "feat13",
    href: "/feature/ocean-cleanup",
    imageUrl: randomImgUrl(),
    title: "Dọn sạch đại dương: Công nghệ xử lý rác thải nhựa",
    altText: "Ocean Cleanup",
    description:
      "The Ocean Cleanup thu gom nhựa tự động, AI và vệ tinh theo dõi rác. Enzyme phân hủy nhựa, robot dưới nước hỗ trợ, mang hy vọng phục hồi hệ sinh thái biển.",
  },
  {
    id: "feat14",
    href: "/feature/personalized-medicine",
    imageUrl: randomImgUrl(),
    title: "Y học cá nhân hóa: Điều trị theo mã di truyền riêng",
    altText: "Personalized Medicine",
    description:
      "Y học cá nhân hóa dùng dữ liệu gen, AI tối ưu điều trị. Giải mã gen dưới 1000 đô la, liệu pháp CAR-T cứu bệnh nhân ung thư, tăng hiệu quả, giảm tác dụng phụ.",
  },
  {
    id: "feat15",
    href: "/feature/urban-air-mobility",
    imageUrl: randomImgUrl(),
    title: "Giao thông hàng không đô thị: Taxi bay trong thành phố",
    altText: "Urban Air Mobility",
    description:
      "Taxi bay eVTOL giảm tắc nghẽn, ô nhiễm. Singapore, Dubai thử nghiệm. Thách thức về hạ tầng, an toàn, quản lý không lưu cần giải quyết trước khi thương mại hóa.",
  },
];
export const businessNews: {
  featured: FeaturedNews;
  tile: BasicNews[];
  thumb: BasicNews[];
} = {
  featured: {
    id: "biz-feat1",
    href: "/feature/fintech-revolution",
    imageUrl: randomImgUrl(),
    title: "Fintech Việt Nam: Cuộc đua tỷ USD và tương lai thanh toán số",
    altText: "Fintech Revolution",
    description:
      "Ngành fintech Việt Nam đang bùng nổ với tổng vốn đầu tư đạt kỷ lục 800 triệu USD trong năm 2024. Các startup như MoMo, VNPay và ZaloPay đang dẫn đầu cuộc cách mạng thanh toán số, mở rộng từ ví điện tử sang cho vay, đầu tư và bảo hiểm. Chính phủ Việt Nam đặt mục tiêu 90% dân số sử dụng thanh toán không tiền mặt vào 2025.",
  },
  tile: [
    {
      id: "biz-tile1",
      href: "/business/startup-unicorn",
      imageUrl: randomImgUrl(),
      title: "Startup Việt Nam đầu tiên đạt định giá 1 tỷ USD",
      altText: "Unicorn Startup",
    },
    {
      id: "biz-tile2",
      href: "/business/green-bonds",
      imageUrl: randomImgUrl(),
      title: "Trái phiếu xanh: Kênh huy động vốn cho phát triển bền vững",
      altText: "Green Bonds",
    },
  ],
  thumb: [
    {
      id: "biz-thumb1",
      href: "/business/female-entrepreneurs",
      imageUrl: randomImgUrl(),
      title: "Nữ doanh nhân Việt và câu chuyện khởi nghiệp thành công",
      altText: "Female Entrepreneurs",
    },
    {
      id: "biz-thumb2",
      href: "/business/supply-chain-tech",
      imageUrl: randomImgUrl(),
      title: "Công nghệ blockchain cách mạng hóa chuỗi cung ứng",
      altText: "Supply Chain Technology",
    },
    {
      id: "biz-thumb3",
      href: "/business/digital-transformation",
      imageUrl: randomImgUrl(),
      title: "Chuyển đổi số giúp doanh nghiệp vượt qua thách thức",
      altText: "Digital Transformation",
    },
    {
      id: "biz-thumb4",
      href: "/business/venture-capital",
      imageUrl: randomImgUrl(),
      title: "Quỹ đầu tư mạo hiểm đổ tiền vào AI và deep tech",
      altText: "Venture Capital",
    },
    {
      id: "biz-thumb5",
      href: "/business/sustainable-business",
      imageUrl: randomImgUrl(),
      title: "Doanh nghiệp xanh: Xu hướng kinh doanh bền vững",
      altText: "Sustainable Business",
    },
  ],
};

export const lifestyleNews: {
  featured: FeaturedNews;
  tile: BasicNews[];
  thumb: BasicNews[];
} = {
  featured: {
    id: "lifestyle-feat1",
    href: "/feature/wellness-revolution",
    imageUrl: randomImgUrl(),
    title: "Cuộc cách mạng sức khỏe toàn diện: Xu hướng wellness 2025",
    altText: "Wellness Revolution",
    description:
      "Thế hệ Z và Millennials đang định hình lại khái niệm sức khỏe toàn diện, không chỉ dừng lại ở thể chất mà còn tinh thần và cảm xúc. Các ứng dụng meditation như Headspace, Calm đạt hàng triệu lượt tải, trong khi yoga và pilates trở thành lifestyle không thể thiếu. Thị trường wellness toàn cầu dự kiến đạt 7.000 tỷ USD, thúc đẩy sự phát triển của thực phẩm chức năng, spa tại nhà và du lịch chữa lành.",
  },
  tile: [
    {
      id: "lifestyle-tile1",
      href: "/lifestyle/sustainable-fashion",
      imageUrl: randomImgUrl(),
      title: "Thời trang bền vững: Tủ đồ thân thiện môi trường",
      altText: "Sustainable Fashion",
    },
    {
      id: "lifestyle-tile2",
      href: "/lifestyle/plant-based-diet",
      imageUrl: randomImgUrl(),
      title: "Chế độ ăn thực vật: Xu hướng dinh dưỡng mới",
      altText: "Plant Based Diet",
    },
  ],
  thumb: [
    {
      id: "lifestyle-thumb1",
      href: "/lifestyle/minimalist-living",
      imageUrl: randomImgUrl(),
      title: "Sống tối giản: Ít đồ hơn, hạnh phúc hơn",
      altText: "Minimalist Living",
    },
    {
      id: "lifestyle-thumb2",
      href: "/lifestyle/urban-gardening",
      imageUrl: randomImgUrl(),
      title: "Vườn mini trong nhà: Xanh hóa không gian sống",
      altText: "Urban Gardening",
    },
    {
      id: "lifestyle-thumb3",
      href: "/lifestyle/mindful-parenting",
      imageUrl: randomImgUrl(),
      title: "Nuôi dạy con theo phương pháp mindfulness",
      altText: "Mindful Parenting",
    },
    {
      id: "lifestyle-thumb4",
      href: "/lifestyle/coffee-culture",
      imageUrl: randomImgUrl(),
      title: "Văn hóa cà phê specialty: Hành trình từ hạt đến tách",
      altText: "Coffee Culture",
    },
    {
      id: "lifestyle-thumb5",
      href: "/lifestyle/fitness-trends",
      imageUrl: randomImgUrl(),
      title: "5 xu hướng fitness hot nhất năm 2025",
      altText: "Fitness Trends",
    },
  ],
};

export const newsByCategory: CategoryData[] = [
  {
    category: {
      link: "/cong-nghe",
      label: "CÔNG NGHỆ",
    },
    data: {
      featured: {
        id: "tech-tile1",
        href: "/cong-nghe/ai-breakthrough",
        imageUrl: randomImgUrl(),
        title: "AI Việt Nam phát triển công nghệ nhận diện giọng nói tiên tiến",
        altText: "AI Voice Recognition",
      },
      tile: [
        {
          id: "tech-tile2",
          href: "/cong-nghe/blockchain-startup",
          imageUrl: randomImgUrl(),
          title: "Startup blockchain Việt Nam gọi vốn 10 triệu USD",
          altText: "Blockchain Startup",
        },
        {
          id: "tech-tile3",
          href: "/cong-nghe/5g-expansion",
          imageUrl: randomImgUrl(),
          title: "Mạng 5G phủ sóng toàn quốc vào năm 2026",
          altText: "5G Network",
        },
      ],
    },
  },
  {
    category: {
      link: "/suc-khoe",
      label: "SỨC KHỎE",
    },
    data: {
      featured: {
        id: "health-tile1",
        href: "/suc-khoe/vaccine-update",
        imageUrl: randomImgUrl(),
        title: "Vaccine mới chống biến thể virus được thử nghiệm thành công",
        altText: "Vaccine Research",
      },
      tile: [
        {
          id: "health-tile2",
          href: "/suc-khoe/mental-health",
          imageUrl: randomImgUrl(),
          title: "Chiến dịch nâng cao nhận thức sức khỏe tâm thần tại Việt Nam",
          altText: "Mental Health Awareness",
        },
        {
          id: "health-tile3",
          href: "/suc-khoe/nutrition-guide",
          imageUrl: randomImgUrl(),
          title: "Hướng dẫn dinh dưỡng mới cho trẻ em Việt Nam",
          altText: "Nutrition Guide",
        },
      ],
    },
  },
  {
    category: {
      link: "/doi-song",
      label: "ĐỜI SỐNG",
    },
    data: {
      featured: {
        id: "life-tile1",
        href: "/doi-song/urban-living",
        imageUrl: randomImgUrl(),
        title: "Xu hướng sống xanh trong đô thị Việt Nam",
        altText: "Green Living",
      },
      tile: [
        {
          id: "life-tile2",
          href: "/doi-song/food-culture",
          imageUrl: randomImgUrl(),
          title: "Ẩm thực đường phố Hà Nội thu hút giới trẻ",
          altText: "Street Food",
        },
        {
          id: "life-tile3",
          href: "/doi-song/community-event",
          imageUrl: randomImgUrl(),
          title: "Ngày hội gia đình tại TP.HCM quy tụ hàng ngàn người",
          altText: "Family Event",
        },
      ],
    },
  },
  {
    category: {
      link: "/du-lich",
      label: "DU LỊCH",
    },
    data: {
      featured: {
        id: "travel-tile1",
        href: "/du-lich/ha-long-bay",
        imageUrl: randomImgUrl(),
        title: "Vịnh Hạ Long lọt top 10 điểm đến đẹp nhất thế giới",
        altText: "Ha Long Bay",
      },
      tile: [
        {
          id: "travel-tile2",
          href: "/du-lich/sapa",
          imageUrl: randomImgUrl(),
          title: "Sa Pa mùa lúa chín thu hút du khách quốc tế",
          altText: "Sapa Rice Fields",
        },
        {
          id: "travel-tile3",
          href: "/du-lich/phu-quoc",
          imageUrl: randomImgUrl(),
          title: "Phú Quốc ra mắt tour du lịch biển đêm mới",
          altText: "Phu Quoc Night Tour",
        },
      ],
    },
  },
  {
    category: {
      link: "/giai-tri",
      label: "GIẢI TRÍ",
    },
    data: {
      featured: {
        id: "entertain-tile1",
        href: "/giai-tri/music-festival",
        imageUrl: randomImgUrl(),
        title: "Lễ hội âm nhạc quốc tế tại Đà Nẵng thu hút hàng ngàn khán giả",
        altText: "Music Festival",
      },
      tile: [
        {
          id: "entertain-tile2",
          href: "/giai-tri/movie-premiere",
          imageUrl: randomImgUrl(),
          title: "Phim Việt mới ra mắt đạt doanh thu kỷ lục",
          altText: "Movie Premiere",
        },
        {
          id: "entertain-tile3",
          href: "/giai-tri/kpop-concert",
          imageUrl: randomImgUrl(),
          title: "Nhóm nhạc K-pop biểu diễn tại Hà Nội",
          altText: "K-pop Concert",
        },
      ],
    },
  },
  {
    category: {
      link: "/the-thao",
      label: "THỂ THAO",
    },
    data: {
      featured: {
        id: "sport-tile1",
        href: "/the-thao/sea-games",
        imageUrl: randomImgUrl(),
        title: "Việt Nam dẫn đầu bảng xếp hạng SEA Games 2025",
        altText: "SEA Games",
      },
      tile: [
        {
          id: "sport-tile2",
          href: "/the-thao/football",
          imageUrl: randomImgUrl(),
          title: "Đội tuyển bóng đá Việt Nam thắng đậm Thái Lan",
          altText: "Football Victory",
        },
        {
          id: "sport-tile3",
          href: "/the-thao/marathon",
          imageUrl: randomImgUrl(),
          title: "Giải marathon quốc tế Hà Nội phá kỷ lục tham gia",
          altText: "Hanoi Marathon",
        },
      ],
    },
  },
  {
    category: {
      link: "/xa-hoi",
      label: "XÃ HỘI",
    },
    data: {
      featured: {
        id: "society-tile1",
        href: "/xa-hoi/charity-drive",
        imageUrl: randomImgUrl(),
        title: "Chiến dịch từ thiện hỗ trợ trẻ em vùng cao",
        altText: "Charity Drive",
      },
      tile: [
        {
          id: "society-tile2",
          href: "/xa-hoi/community-support",
          imageUrl: randomImgUrl(),
          title: "Cộng đồng chung tay khắc phục hậu quả bão lũ",
          altText: "Community Support",
        },
        {
          id: "society-tile3",
          href: "/xa-hoi/volunteer-program",
          imageUrl: randomImgUrl(),
          title: "Chương trình tình nguyện viên quốc gia mở rộng",
          altText: "Volunteer Program",
        },
      ],
    },
  },
  {
    category: {
      link: "/phap-luat",
      label: "PHÁP LUẬT",
    },
    data: {
      featured: {
        id: "law-tile1",
        href: "/phap-luat/new-regulation",
        imageUrl: randomImgUrl(),
        title: "Luật mới về an ninh mạng chính thức có hiệu lực",
        altText: "Cybersecurity Law",
      },
      tile: [
        {
          id: "law-tile2",
          href: "/phap-luat/traffic-law",
          imageUrl: randomImgUrl(),
          title: "Tăng mức phạt vi phạm giao thông từ năm 2026",
          altText: "Traffic Law",
        },
        {
          id: "law-tile3",
          href: "/phap-luat/anti-corruption",
          imageUrl: randomImgUrl(),
          title: "Chiến dịch chống tham nhũng đạt kết quả tích cực",
          altText: "Anti-Corruption Campaign",
        },
      ],
    },
  },
  {
    category: {
      link: "/xuat-ban",
      label: "XUẤT BẢN",
    },
    data: {
      featured: {
        id: "publish-tile1",
        href: "/xuat-ban/new-book",
        imageUrl: randomImgUrl(),
        title: "Tiểu thuyết Việt Nam mới lọt top bán chạy toàn cầu",
        altText: "Bestselling Novel",
      },
      tile: [
        {
          id: "publish-tile2",
          href: "/xuat-ban/book-fair",
          imageUrl: randomImgUrl(),
          title: "Hội sách TP.HCM thu hút hàng triệu lượt khách",
          altText: "Book Fair",
        },
        {
          id: "publish-tile3",
          href: "/xuat-ban/ebook-trend",
          imageUrl: randomImgUrl(),
          title: "Sách điện tử ngày càng phổ biến tại Việt Nam",
          altText: "E-book Trend",
        },
      ],
    },
  },
  {
    category: {
      link: "/the-gioi-cach",
      label: "THẾ GIỚI CÁCH",
    },
    data: {
      featured: {
        id: "world-tile1",
        href: "/the-gioi-cach/global-trend",
        imageUrl: randomImgUrl(),
        title: "Xu hướng công nghệ toàn cầu thay đổi lối sống",
        altText: "Global Tech Trend",
      },
      tile: [
        {
          id: "world-tile2",
          href: "/the-gioi-cach/climate-change",
          imageUrl: randomImgUrl(),
          title: "Hội nghị khí hậu quốc tế đạt thỏa thuận mới",
          altText: "Climate Conference",
        },
        {
          id: "world-tile3",
          href: "/the-gioi-cach/space-exploration",
          imageUrl: randomImgUrl(),
          title: "Sứ mệnh khám phá sao Hỏa đạt bước tiến mới",
          altText: "Mars Exploration",
        },
      ],
    },
  },
  {
    category: {
      link: "/giao-duc",
      label: "GIÁO DỤC",
    },
    data: {
      featured: {
        id: "edu-tile1",
        href: "/giao-duc/stem-program",
        imageUrl: randomImgUrl(),
        title: "Chương trình STEM mở rộng tại các trường Việt Nam",
        altText: "STEM Education",
      },
      tile: [
        {
          id: "edu-tile2",
          href: "/giao-duc/online-learning",
          imageUrl: randomImgUrl(),
          title: "Học trực tuyến trở thành xu hướng tại Việt Nam",
          altText: "Online Learning",
        },
        {
          id: "edu-tile3",
          href: "/giao-duc/scholarship",
          imageUrl: randomImgUrl(),
          title: "Học bổng quốc tế cho sinh viên Việt Nam tăng mạnh",
          altText: "International Scholarship",
        },
      ],
    },
  },
  {
    category: {
      link: "/xe",
      label: "XE",
    },
    data: {
      featured: {
        id: "car-tile1",
        href: "/xe/electric-car",
        imageUrl: randomImgUrl(),
        title: "Xe điện Việt Nam ra mắt mẫu mới giá rẻ",
        altText: "Electric Car",
      },
      tile: [
        {
          id: "car-tile2",
          href: "/xe/motorbike-trend",
          imageUrl: randomImgUrl(),
          title: "Xe máy điện dẫn đầu thị trường Việt Nam",
          altText: "Electric Motorbike",
        },
        {
          id: "car-tile3",
          href: "/xe/car-expo",
          imageUrl: randomImgUrl(),
          title: "Triển lãm ô tô Việt Nam 2025 sắp diễn ra",
          altText: "Car Expo",
        },
      ],
    },
  },
  {
    category: {
      link: "/tac-gia",
      label: "TÁC GIẢ",
    },
    data: {
      featured: {
        id: "author-tile1",
        href: "/tac-gia/new-novelist",
        imageUrl: randomImgUrl(),
        title: "Nhà văn trẻ Việt Nam giành giải thưởng quốc tế",
        altText: "Young Novelist",
      },
      tile: [
        {
          id: "author-tile2",
          href: "/tac-gia/poet-profile",
          imageUrl: randomImgUrl(),
          title: "Nhà thơ Việt Nam ra mắt tập thơ mới",
          altText: "New Poetry Collection",
        },
        {
          id: "author-tile3",
          href: "/tac-gia/literary-event",
          imageUrl: randomImgUrl(),
          title: "Sự kiện văn học tôn vinh tác giả trẻ",
          altText: "Literary Event",
        },
      ],
    },
  },
  {
    category: {
      link: "/cuon-sach-toi-doc",
      label: "CUỐN SÁCH TÔI ĐỌC",
    },
    data: {
      featured: {
        id: "book-tile1",
        href: "/cuon-sach-toi-doc/bestseller",
        imageUrl: randomImgUrl(),
        title: "Cuốn sách tự truyện gây sốt tại Việt Nam",
        altText: "Bestselling Autobiography",
      },
      tile: [
        {
          id: "book-tile2",
          href: "/cuon-sach-toi-doc/history-book",
          imageUrl: randomImgUrl(),
          title: "Sách lịch sử Việt Nam tái bản lần thứ 10",
          altText: "History Book",
        },
        {
          id: "book-tile3",
          href: "/cuon-sach-toi-doc/children-book",
          imageUrl: randomImgUrl(),
          title: "Sách thiếu nhi mới truyền cảm hứng sáng tạo",
          altText: "Children’s Book",
        },
      ],
    },
  },
  {
    category: {
      link: "/van-hoa-doc",
      label: "VĂN HÓA ĐỌC",
    },
    data: {
      featured: {
        id: "read-tile1",
        href: "/van-hoa-doc/reading-campaign",
        imageUrl: randomImgUrl(),
        title: "Chiến dịch khuyến khích đọc sách toàn quốc",
        altText: "Reading Campaign",
      },
      tile: [
        {
          id: "read-tile2",
          href: "/van-hoa-doc/library-upgrade",
          imageUrl: randomImgUrl(),
          title: "Thư viện công cộng Việt Nam được nâng cấp",
          altText: "Library Upgrade",
        },
        {
          id: "read-tile3",
          href: "/van-hoa-doc/book-club",
          imageUrl: randomImgUrl(),
          title: "Câu lạc bộ sách thu hút giới trẻ đô thị",
          altText: "Book Club",
        },
      ],
    },
  },
  {
    category: {
      link: "/ttdn",
      label: "TTDN",
    },
    data: {
      featured: {
        id: "ttdn-tile1",
        href: "/ttdn/business-growth",
        imageUrl: randomImgUrl(),
        title: "Doanh nghiệp Việt Nam đạt tăng trưởng kỷ lục",
        altText: "Business Growth",
      },
      tile: [
        {
          id: "ttdn-tile2",
          href: "/ttdn/export-market",
          imageUrl: randomImgUrl(),
          title: "Xuất khẩu nông sản Việt Nam tăng mạnh",
          altText: "Export Market",
        },
        {
          id: "ttdn-tile3",
          href: "/ttdn/startup-funding",
          imageUrl: randomImgUrl(),
          title: "Quỹ đầu tư mạo hiểm rót vốn vào startup Việt",
          altText: "Startup Funding",
        },
      ],
    },
  },
];

export const magazine: Magazine[] = [
  {
    id: "1",
    imageUrl: randomImgUrl(),
    label: "SKY VIBES",
    link: "/sample/aviation",
    title: "Máy bay F-35 mà Iran tuyên bố bắn rơi là tiêm kích nguy hiểm nhất",
  },
  {
    id: "2",
    imageUrl: randomImgUrl(),
    label: "TECH TRENDS",
    link: "/sample/technology",
    title: "Công nghệ AI mới giúp dự đoán thời tiết chính xác hơn",
  },
  {
    id: "3",
    imageUrl: randomImgUrl(),
    label: "HEALTH HORIZON",
    link: "/sample/health",
    title: "Phát hiện sớm ung thư nhờ xét nghiệm máu tiên tiến",
  },
  {
    id: "4",
    imageUrl: randomImgUrl(),
    label: "WANDERLUST WAVE",
    link: "/sample/travel",
    title: "Khám phá vẻ đẹp hoang sơ của đảo Phú Quốc",
  },
  {
    id: "5",
    imageUrl: randomImgUrl(),
    label: "SPOTLIGHT STORIES",
    link: "/sample/entertainment",
    title: "Phim Việt mới phá kỷ lục phòng vé trong tuần",
  },
  {
    id: "6",
    imageUrl: randomImgUrl(),
    label: "SPORTS SPARK",
    link: "/sample/sports",
    title: "Việt Nam vô địch giải bóng đá Đông Nam Á 2025",
  },
  {
    id: "7",
    imageUrl: randomImgUrl(),
    label: "CULTURE CURRENTS",
    link: "/sample/culture",
    title: "Lễ hội văn hóa Huế thu hút hàng ngàn du khách",
  },
  {
    id: "8",
    imageUrl: randomImgUrl(),
    label: "GREEN LIVING",
    link: "/sample/lifestyle",
    title: "Xu hướng sống bền vững lan tỏa tại Việt Nam",
  },
  {
    id: "9",
    imageUrl: randomImgUrl(),
    label: "SCIENCE SURGE",
    link: "/sample/science",
    title: "Việt Nam ra mắt vệ tinh nghiên cứu khí hậu mới",
  },
  {
    id: "10",
    imageUrl: randomImgUrl(),
    label: "FOOD FUSION",
    link: "/sample/food",
    title: "Ẩm thực đường phố Hà Nội lọt top thế giới",
  },
  {
    id: "11",
    imageUrl: randomImgUrl(),
    label: "FASHION FLOW",
    link: "/sample/fashion",
    title: "Thiết kế áo dài Việt Nam gây ấn tượng tại Paris",
  },
  {
    id: "12",
    imageUrl: randomImgUrl(),
    label: "EDU INSIGHTS",
    link: "/sample/education",
    title: "Chương trình STEM truyền cảm hứng cho học sinh Việt",
  },
  {
    id: "13",
    imageUrl: randomImgUrl(),
    label: "TRAVEL TALES",
    link: "/sample/adventure",
    title: "Hành trình khám phá hang Sơn Đoòng kỳ vĩ",
  },
  {
    id: "14",
    imageUrl: randomImgUrl(),
    label: "MUSIC MOTION",
    link: "/sample/music",
    title: "Ca sĩ Việt Nam biểu diễn tại lễ hội âm nhạc quốc tế",
  },
  {
    id: "15",
    imageUrl: randomImgUrl(),
    label: "BOOK BEAT",
    link: "/sample/literature",
    title: "Tiểu thuyết Việt mới dẫn đầu danh sách bán chạy",
  },
  {
    id: "16",
    imageUrl: randomImgUrl(),
    label: "ART ALIVE",
    link: "/sample/art",
    title: "Triển lãm tranh Việt Nam hiện đại gây sốt",
  },
  {
    id: "17",
    imageUrl: randomImgUrl(),
    label: "ECO EDGE",
    link: "/sample/environment",
    title: "Dự án bảo vệ rừng ngập mặn tại Cần Giờ",
  },
  {
    id: "18",
    imageUrl: randomImgUrl(),
    label: "INNOVATE NOW",
    link: "/sample/startup",
    title: "Startup Việt gọi vốn triệu USD từ quỹ quốc tế",
  },
  {
    id: "19",
    imageUrl: randomImgUrl(),
    label: "HISTORY HUB",
    link: "/sample/history",
    title: "Phát hiện di tích cổ đại tại Quảng Nam",
  },
  {
    id: "20",
    imageUrl: randomImgUrl(),
    label: "WELLNESS WIND",
    link: "/sample/wellness",
    title: "Phong trào yoga lan tỏa trong giới trẻ Việt Nam",
  },
];

export const videos = [
  {
    id: "v1",
    title: "Amazing Nature Scenery in 4K",
    category: "Thiên nhiên",
    href: "/video/thien-nhien-4k",
    categoryLink: "/category/thien-nhien",
    youtube: "https://www.youtube.com/embed/Nsl5LPka3Nc", // Nature 4K
  },
  {
    id: "v2",
    title: "Relaxing Jazz Music for Work & Study",
    category: "Âm nhạc",
    href: "/video/nhac-thu-gian",
    categoryLink: "/category/am-nhac",
    youtube: "https://www.youtube.com/embed/KLuTLF3x9sA", // Jazz study
  },
  {
    id: "v3",
    title: "Top 10 Travel Destinations 2024",
    category: "Du lịch",
    href: "/video/diem-den-2024",
    categoryLink: "/category/du-lich",
    youtube: "https://www.youtube.com/embed/xX533BphQCU", // Travel 2024
  },
  {
    id: "v4",
    title: "5 Minutes Yoga Stretch",
    category: "Sức khỏe",
    href: "/video/yoga-5-phut",
    categoryLink: "/category/suc-khoe",
    youtube: "https://www.youtube.com/embed/u_KLmrE_0wM", // Yoga
  },
  {
    id: "v5",
    title: "How Tesla Builds Cars",
    category: "Công nghệ",
    href: "/video/tesla-production",
    categoryLink: "/category/cong-nghe",
    youtube: "https://www.youtube.com/embed/c8DHPUrpcgE", // Tesla
  },
  {
    id: "v6",
    title: "Street Food Around The World",
    category: "Ẩm thực",
    href: "/video/am-thuc-the-gioi",
    categoryLink: "/category/am-thuc",
    youtube: "https://www.youtube.com/embed/hskN1fyOwLE", // Street food
  },
  {
    id: "v7",
    title: "Motivation for Success",
    category: "Khởi nghiệp",
    href: "/video/dong-luc-thanh-cong",
    categoryLink: "/category/khoi-nghiep",
    youtube: "https://www.youtube.com/embed/sb1vAnToddM", // Motivation
  },
  {
    id: "v8",
    title: "Soccer Top Goals 2023",
    category: "Thể thao",
    href: "/video/bong-da-2023",
    categoryLink: "/category/the-thao",
    youtube: "https://www.youtube.com/embed/6owNUyDlHVg", // Soccer goals
  },
  {
    id: "v9",
    title: "VinFast EV Test Drive",
    category: "Xe",
    href: "/video/xe-dien-vinfast",
    categoryLink: "/category/xe",
    youtube: "https://www.youtube.com/embed/Mc7XKiNrHQc", // VinFast
  },
  {
    id: "v10",
    title: "Simple Life Tips",
    category: "Đời sống",
    href: "/video/doi-song-don-gian",
    categoryLink: "/category/doi-song",
    youtube: "https://www.youtube.com/embed/1Jbgeo4QuXc", // Life tips
  },
];
