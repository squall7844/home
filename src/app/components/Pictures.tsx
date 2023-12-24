import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const images = ["/image4.jpg", "/image4.jpg", "/image4.jpg", "/image4.jpg"];

const Pictures = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      slidesPerView={1} //一度に表示するスライドの数
      pagination={{
        clickable: true,
      }} //何枚目のスライドかを示すアイコン、スライドの下の方にある
      navigation //スライドを前後させるためのボタン、スライドの左右にある
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="m-20"
    >
      {images.map((src: string, index: number) => {
        return (
          <SwiperSlide key={`${index}`}>
            <div className="max-w-[300px] mx-auto">
              <Image
                src={src}
                layout="responsive"
                width={300}
                height={200}
                alt="test画像"
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Pictures;
