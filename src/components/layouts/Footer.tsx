export default function Footer() {
  return (
    <div className="w-full bg-[#f7f7f7] py-4 px-4 md:px-0 mb-4 border-none">
      <div className="w-full px-4 mx-auto">
        <div className="grid items-start grid-cols-1 md:grid-cols-3 md:gap-2">
          {/* Left Column */}
          <div className="col-span-2">
            <p className="text-sm text-[#555] md:text-[#888] leading-relaxed text-center md:text-left">
              Tạp chí điện tử Tri Thức
              <br />
              Cơ quan chủ quản: Hội Xuất bản Việt Nam
              <br />
              Giấy phép báo chí: số 75/GP-BTTTT và số 442/GP-BTTTT do Bộ Thông tin và Truyền thông
              cấp ngày 26/02/2020 và ngày 29/11/2023
              <br />
              Phó tổng biên tập phụ trách: Lâm Quang Hiếu
            </p>
            <p className="hidden md:block text-sm text-[#888] leading-relaxed text-center md:text-left">
              © Toàn bộ bản quyền thuộc Tri Thức
            </p>
          </div>

          {/* Right Column */}
          <div className="w-full pt-0 text-center md:pt-4 md:text-left">
            <p className="text-sm text-[#555] md:text-[#888] leading-relaxed">
              Tòa soạn: Tầng 10, D29 Phạm Văn Bạch, phường Yên Hòa, Hà Nội
              <br />
              Hotline: 0931.222.666
              <br />
              Liên hệ: toasoan@znews.vn
            </p>
          </div>
        </div>

        {/* Mobile Copyright */}
        <p className="block md:hidden text-sm text-[#555] leading-relaxed text-center mt-2">
          © Toàn bộ bản quyền thuộc Tri Thức
        </p>
      </div>
    </div>
  );
}
