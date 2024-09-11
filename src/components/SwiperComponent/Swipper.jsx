import { useContext, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import "./Swipper.scss";
import {
  Autoplay,
  Pagination,
  Navigation,
  EffectFade,
  EffectCards,
} from "swiper/modules";
import { mObjectContext } from "../../context/movieObject";
import { titleIdContext } from "../../context/titleId";

function Swipper({ movies }) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const { setMobject } = useContext(mObjectContext);
  const { setTitleId } = useContext(titleIdContext);
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 7500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, EffectFade, EffectCards]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="mySwiper"
      effect={"cards"}
      grabCursor={true}
      fadeEffect={{ crossFade: true }}
      onSlideChange={(swiper) => {
        setMobject(movies[swiper.activeIndex].backdrop_path);
        setTitleId({
          title: movies[swiper.activeIndex].title,
          id: movies[swiper.activeIndex].id,
        });
      }}
    >
      {movies.map((movie) => (
        <>
          <SwiperSlide key={movie.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.title} poster`}
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        </>
      ))}

      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div>
    </Swiper>
  );
}

export default Swipper;
