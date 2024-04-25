import { Righteous } from "next/font/google";
import { AnimatePresence } from "framer-motion";
import React from "react";
import Header from "@/components/Header";
import BackgroundImage from "@/components/BackgroundImage";
import Slides from "@/components/Slides";
import SlideInfo from "@/components/SlideInfo";
import Controls from "@/components/Controls";

const inter = Righteous({
  subsets: ["latin"],
  weight: ["400"],
});
export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export default function Home() {
  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main
      className={`
       ${inter.className}
        relative min-h-screen select-none overflow-hidden text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="absolute z-20 h-full w-full">
          <Header />
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
}

const sliderData = [
  {
    img: "/lexus.jpg",
    location: "Jaban",
    description:
      "Lexus (レクサス Rekusasu?) là phân khúc xe hơi hạng sang của tập đoàn ô tô Nhật Bản Toyota. Sau khi được giới thiệu lần đầu tại Hoa Kỳ vào năm 1989, Lexus đã nhanh chóng trở thành một trong những thương hiệu xe sang bán chạy nhất tại đất nước xứ cờ hoa, đồng thời còn phủ rộng ở hơn 90 quốc gia và vùng lãnh thổ trên thế giới[3][6] cũng như trở thành nhãn hiệu xe hơi cao cấp bán chạy nhất của Nhật Bản. Bên cạnh đó, hãng còn vinh dự được đưa vào danh sách 10 thương hiệu Nhật ở quy mô toàn cầu có giá trị thị trường cao nhất.",
    title: "LEXUS",
  },
  {
    img: "/camry.jpg",
    title: "CAMRY",
    description:
      "Toyota Camry 2025 là thế hệ chứ 9 của mẫu sedan cỡ D, tiếp tục được hãng xe Nhật Bản thiết kế trên nền tảng TNGA-K từng xuất hiện ở thế hệ tiền nhiệm. Toyota Camry tiếp tục được xem là quân bài quan trọng của Toyota tại thị trường Mỹ, nơi khách hàng có xu hướng ưa chuộng những mẫu xe cỡ lớn.",
    location: "Jaban",
  },
  {
    img: "/elentra.png",
    title: "ELENTRA",
    description:
      "Công ty xe hơi Hyundai, thường được viết tắt là Hyundai Motors (Tiếng Hàn: 현대자동차; Hanja: 現代自動車; Romaja: Hyeondae Jadongcha; Hán-Việt: Hiện đại tự động xa listen ), và phổ biến được gọi là Hyundai là một công ty con trực thuộc tập đoàn Hyundai.",
    location: "Korea",
  },
  {
    img: "/civic.jpg",
    title: "CIVIC",
    description:
      "Honda Civic là mẫu xe thể thao đô thị nhà Honda thuộc phân khúc Sedan hạng C, với thiết kế mạnh mẽ vận hành êm ái.",
    location: "Jaban",
  },
  {
    img: "/mazda6.jpg",
    title: "MAZDA 6",
    description:
      "Mazda 6 là dòng xe 4,5 chỗ ngồi thuộc phân khúc xe sedan cỡ D, đây là phân khúc khá sôi động với mức giá xe vừa phải và không có quá nhiều chênh lệch. Thuộc phân khúc này là những cái tên nổi tiếng cạnh tranh trực tiếp với Mazda 6 là: Toyota Camry, Honda Accord, Kia Optima, Nissan Teana,… – Các phiên bản và màu sắc",
    location: "Jaban",
  },
  {
    img: "/kiak5.jpg",
    title: "KIA K5",
    description:
      "KIA K5 (hay KIA Optima) là dòng xe cỡ trung (Mid-size car) của nhà sản xuất xe hơi KIA Motor, Hàn Quốc ra đời từ năm 2000, hiện nay đang ở thế hệ thứ 5 được giới thiệu vào tháng 07/2020. Ngày 09/10/2021, THACO đã chính thức giới thiệu KIA K5 thế hệ mới tại thị trường Việt Nam.",
    location: "Korea",
  },
];

const initData = sliderData[0];
