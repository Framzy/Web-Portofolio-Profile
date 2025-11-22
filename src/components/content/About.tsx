import type { RefObject } from "react";
import AboutTop from "../about/AboutTop";

type Props = {
  sectionRef: RefObject<HTMLDivElement | null>;
};

export default function About({ sectionRef }: Props) {
  return (
    <>
      <section ref={sectionRef} className="about-content min-h-screen">
        <AboutTop />
        <div className="grid grid-cols-2 w-4/6 p-10 mx-auto box-border gap-10">
          <div className="flex flex-row gap-4" id="1">
            <div className="w-7">
              <img
                className="w-full h-auto"
                src="/images/icon/education_icon.png"
                alt=""
              />
            </div>
            <div className="flex flex-col font-manrope h-fit gap-1">
              <p className="text-[#39EEFA] text-md">Education</p>
              <p className="text-white text-sm">
                University Indraprasta PGRI{" "}
                <span className="text-zinc-400 ">(2021-2025)</span>
              </p>
              <p className="text-zinc-400 text-sm">Computer Science</p>
            </div>
          </div>

          <div className="flex flex-row gap-4" id="2">
            <div className="w-7">
              <img
                className="w-full h-auto"
                src="/images/icon/experience_icon.png"
                alt=""
              />
            </div>
            <div className="flex flex-col font-manrope h-fit gap-1">
              <p className="text-[#39EEFA] text-md">Experience & Certificate</p>
              <ul className="list-disc list-outside space-y-1 pl-4">
                <li className="text-white text-sm">
                  Internship{" "}
                  <span className="text-zinc-400">
                    (2024) | SMK 28 OKTOBER.II
                  </span>
                </li>
                <li className="text-white text-sm">
                  TOEFL EPT{" "}
                  <span className="text-zinc-400">
                    (2025) | Daily Bahasa Inggris - 557
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-row gap-4" id="3">
            <div className="w-7">
              <img
                className="w-full h-auto"
                src="/images/icon/languages_icon.png"
                alt=""
              />
            </div>
            <div className="flex flex-col font-manrope h-fit gap-1">
              <p className="text-[#39EEFA] text-md">Education</p>
              <p className="text-white text-sm">
                University Indraprasta PGRI{" "}
                <span className="text-zinc-400 ">(2021-2025)</span>
              </p>
              <p className="text-zinc-400 text-sm">Computer Science</p>
            </div>
          </div>

          <div className="flex flex-row gap-4" id="4">
            <div className="w-7">
              <img
                className="w-full h-auto"
                src="/images/icon/hobbies_icon.png"
                alt=""
              />
            </div>
            <div className="flex flex-col font-manrope h-fit gap-1">
              <p className="text-[#39EEFA] text-md">Education</p>
              <p className="text-white text-sm">
                University Indraprasta PGRI{" "}
                <span className="text-zinc-400 ">(2021-2025)</span>
              </p>
              <p className="text-zinc-400 text-sm">Computer Science</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
