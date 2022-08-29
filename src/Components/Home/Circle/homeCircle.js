import React,{useEffect} from "react";
import CircleCat from "./circleCat";
import Slider from "react-slick";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { useTranslation } from "react-i18next";
import cookies from "js-cookie";



export default function HomeCircle() {
  const { t } = useTranslation();
  const currentLanguageCode = cookies.get("i18next") || "en";
  useEffect(() => {
    console.log(currentLanguageCode)
  }, []);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 9,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          // infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <Swiper
        slidesPerView={10}
        spaceBetween={30}
        slidesPerGroup={9}
        freeMode={true}
        // loop={true}
        // loopFillGroupWithBlank={true}
        // pagination={{
        //   clickable: true,
        // }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper my-3"
        // dir={currentLanguageCode === 'ar' ? true: true}
      >
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img1")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img2")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img3")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img4")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img5")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img6")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img7")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img8")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img9")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img10")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img11")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img12")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img13")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img14")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img15")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img16")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img17")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img18")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img19")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img20")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img21")}
            alt="..."
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="img-fluid"
            src={t("img22")}
            alt="..."
          />
        </SwiperSlide>
      </Swiper>
      {/* <div className=" my-3 d-flex flex-row flex-wrap justify-content-center"> */}
      {/* <Slider className=" my-3" {...settings}>
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
        <CircleCat />
      </Slider> */}
      {/* </div> */}
    </>
  );
}
