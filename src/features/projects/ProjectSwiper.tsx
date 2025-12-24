import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import "swiper/css";
import "swiper/css/pagination";

const PROJECTS = [
  {
    id: "project_01",
    title: "Contact Management",
    link: "https://contact-management-khaki.vercel.app/",
  },
  {
    id: "project_02",
    title: "Kedai Takjil",
    link: "https://kedai-takjil.vercel.app/",
  },
  {
    id: "project_03",
    title: "Tic Tac Toe",
    link: "https://framzy-react-tic-tac-toe.vercel.app/",
  },
  { id: "project_04", title: "Posyandu APP - Thesis" },
  { id: "project_05", title: "Posyandu APP - Thesis", link: "#" },
  { id: "project_06", title: "School Library App", link: "#" },
];

function chunk<T>(arr: T[], size = 2): T[][] {
  const out: T[][] = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// card kecil untuk tiap project (reuseable)
function ProjectCard({
  project,
}: {
  project: { id: string; title: string; link?: string };
}) {
  return (
    <div className="item-1 flex flex-col gap-2 w-fit ">
      <p className="text-xs ">{project.id}</p>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block" // pastikan menjadi blok penuh
        >
          <div className="img-item flex items-center justify-center w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-[rgba(44,168,180,0.41)] border border-white rounded-xl hover:opacity-90 transition">
            <p className="text-sm text-white">{project.title}</p>
          </div>
        </a>
      ) : (
        <div className="img-item w-xs h-45 sm:w-md sm:h-55 md:w-lg md:h-70 lg:w-sm lg:h-60 xl:w-md 2xl:w-xl 2xl:h-85 bg-amber-50 border border-white rounded-xl">
          {project.title}
        </div>
      )}

      <h2 className="text-sm">{project.title}</h2>
    </div>
  );
}

export default function ProjectsSwiper(
  sectionRef: Ref<HTMLElement> | undefined
) {
  const swiperRef = useRef<SwiperType | null>(null);
  const paginationRef = useRef<HTMLDivElement | null>(null);
  const [swiperReady, setSwiperReady] = useState(false);
  const slides = chunk(PROJECTS, 2);

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
    </section>
  );
}
