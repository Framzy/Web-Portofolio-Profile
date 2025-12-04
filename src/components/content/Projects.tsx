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
    <section ref={sectionRef} className="h-screen mt-10">
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
              <div className="bg-red-500 h-60">
                <h1>agafa</h1>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-blue-500 h-40" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-green-500 h-40" />
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
