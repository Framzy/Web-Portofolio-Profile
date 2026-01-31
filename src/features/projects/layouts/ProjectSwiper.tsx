import type { Swiper as SwiperType } from "swiper";
import type { Project } from "../types";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { ProjectCard } from "../components/ProjectCard";
import "swiper/css";
import "swiper/css/pagination";

type ProjectsSwiperProps = {
  projects: Project[];
};

function chunk<T>(arr: T[], size = 2): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// card kecil untuk tiap project (reuseable)

export default function ProjectsSwiper({ projects }: ProjectsSwiperProps) {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const slides = chunk(projects, 2);

  function handleOnSwiper(sw: SwiperType) {
    swiperRef.current = sw;
    setSwiperReady((v) => !v);
  }

  useEffect(() => {
    const s = swiperRef.current;
    const el = paginationRef.current;
    if (!s || !el) return;

    (s.params.pagination as any) = {
      ...(s.params.pagination as any),
      el,
      clickable: true,
    };

    const pager = (s as any).pagination;
    if (pager) {
      pager.init();
      pager.render();
      pager.update();
    }
    return () => {
      if ((s as any).pagination) {
        try {
          (s as any).pagination.destroy();
        } catch {}
      }
    };
  }, [swiperReady]);

  return (
    <>
      <div className={`w-full flex flex-row items-center justify-center gap-5`}>
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
            {slides.map((pair, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-fit px-8 py-3 gap-5 text-white flex flex-col items-center justify-center lg:flex-row">
                  {pair.map((p) => (
                    <ProjectCard key={p.id} project={p} />
                  ))}
                </div>
              </SwiperSlide>
            ))}
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
    </>
  );
}
