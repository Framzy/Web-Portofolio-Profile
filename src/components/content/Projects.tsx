import type { RefObject } from "react";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

type Props = { sectionRef: RefObject<HTMLDivElement | null> };

export default function Projects({ sectionRef }: Props) {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);

  // dipanggil saat Swiper siap
  function handleOnSwiper(sw: SwiperType) {
    swiperRef.current = sw;
    setSwiperReady((v) => !v); // toggle supaya useEffect berjalan
  }

  // attach external pagination setelah Swiper dan DOM paginationRef ada
  useEffect(() => {
    const s = swiperRef.current;
    const el = paginationRef.current;
    if (!s || !el) return;

    // setel parameter pagination ke element eksternal
    (s.params.pagination as any) = {
      ...(s.params.pagination as any),
      el,
      clickable: true,
    };

    // inisialisasi / render / update pagination
    const pager = (s as any).pagination;
    if (pager) {
      pager.init();
      pager.render();
      pager.update();
    }
    // optional: bersihkan saat unmount
    return () => {
      if ((s as any).pagination) {
        try {
          (s as any).pagination.destroy();
        } catch {}
      }
    };
    // depend on swiperRef change (via swiperReady toggle)
  }, [swiperReady]);

  return (
    <section ref={sectionRef} className="h-screen my-10">
      <div className="skills-title w-8/10 mx-auto flex flex-row justify-between items-end py-5">
        <h1 className="text-3xl font-bold text-[#39EEFA]">
          MY <span className="text-white">PROJECTS</span>
        </h1>
        <p className=" text-white font-thin font-poppins text-[10px]">
          ///////////////// MY_PROJECTS
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-center gap-5">
        <div className="left-slide-content">
          <button
            title="prevButton"
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slidePrev()}
          >
            <FaArrowLeftLong size={20} className="text-white" />
          </button>
        </div>
        <div className="slide-content border border-[#898989] w-8/10 ">
          <Swiper
            modules={[Pagination]}
            slidesPerView={1}
            spaceBetween={20}
            onSwiper={handleOnSwiper}
          >
            <SwiperSlide>
              <div className="h-fit px-8 py-3 gap-5 text-white flex flex-col items-center justify-center lg:flex-row">
                <div className="item-1 flex flex-col gap-2 w-fit ">
                  <p className="text-xs ">project_01</p>
                  <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl"></div>
                  <h2 className="text-sm">Posyandu APP - Thesis</h2>
                </div>
                <div className="item-1 flex flex-col gap-2 w-fit ">
                  <p className="text-xs ">project_02</p>
                  <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl"></div>
                  <h2 className="text-sm">Kedai Takjil</h2>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit px-8 py-3 gap-5 text-white flex flex-col items-center justify-center lg:flex-row">
                <div className="item-1 flex flex-col gap-2 w-fit ">
                  <p className="text-xs ">project_03</p>
                  <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl"></div>
                  <h2 className="text-sm">Posyandu APP - Thesis</h2>
                </div>
                <div className="item-1 flex flex-col gap-2 w-fit ">
                  <p className="text-xs ">project_04</p>
                  <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl"></div>
                  <h2 className="text-sm">Kedai Takjil</h2>
                </div>
              </div>{" "}
            </SwiperSlide>
            <SwiperSlide>
              <div className="h-fit px-8 py-3 gap-5 text-white flex flex-col items-center justify-center lg:flex-row">
                <div className="item-1 flex flex-col gap-2 w-fit ">
                  <p className="text-xs ">project_05</p>
                  <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl"></div>
                  <h2 className="text-sm">Posyandu APP - Thesis</h2>
                </div>
                <div className="item-1 flex flex-col gap-2 w-fit ">
                  <p className="text-xs ">project_06</p>
                  <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl"></div>
                  <h2 className="text-sm">Kedai Takjil</h2>
                </div>
              </div>{" "}
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="right-slide-content">
          <button
            title="nextButton"
            className="cursor-pointer"
            onClick={() => swiperRef.current?.slideNext()}
          >
            <FaArrowRightLong size={20} className="text-white" />
          </button>
        </div>
      </div>
      <div
        ref={paginationRef}
        className="my-4 flex justify-center gap-2 custom-pagination"
        aria-hidden="true"
      />
    </section>
  );
}
