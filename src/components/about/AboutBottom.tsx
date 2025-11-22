export default function AboutBottom() {
  return (
    <>
      <div className="grid grid-cols-1 w-4/6 p-10 mx-auto box-border gap-10 sm:grid-cols-2 ">
        <div className="flex flex-row gap-4" id="1">
          <div className="h-6">
            <img
              className="w-auto h-full"
              src="/images/icon/education_icon.png"
              alt="education icon"
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
          <div className="h-6">
            <img
              className="w-auto h-full"
              src="/images/icon/experience_icon.png"
              alt="experience icon"
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

        <div className="flex flex-row flex-wrap gap-4" id="3">
          <div className="h-6">
            <img
              className="w-auto h-full"
              src="/images/icon/languages_icon.png"
              alt="languages icon"
            />
          </div>
          <div className="flex flex-col font-manrope h-fit gap-1">
            <p className="text-[#39EEFA] text-md">Languages</p>

            <div className="text-white text-sm flex justify-between gap-3 items-center">
              <p className="">Bahasa Indonesia</p>
              <div className="flex flex-row items-center gap-1">
                <div className="w-30 h-3 rounded-2xl border border-zinc-400">
                  <div className=" w-27 h-full rounded-2xl bg-[#39EEFA]"></div>
                </div>
                <p className="text-zinc-400 text-xs">90%</p>
              </div>
            </div>

            <div className="text-white text-sm flex justify-between gap-3 items-center">
              <p>English</p>
              <div className="flex flex-row items-center gap-1">
                <div className="w-30 h-3 rounded-2xl border border-zinc-400">
                  <div className=" w-23 h-full rounded-2xl bg-[#39EEFA]"></div>
                </div>
                <p className="text-zinc-400 text-xs">70%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row gap-4" id="4">
          <div className="h-6">
            <img
              className="w-auto h-full"
              src="/images/icon/hobbies_icon.png"
              alt="hobbies icon"
            />
          </div>
          <div className="flex flex-col font-manrope h-fit gap-2">
            <p className="text-[#39EEFA] text-md">Hobbies & Interest</p>
            <div className="flex flex-row flex-wrap font-bold items-center justify-center gap-4">
              <div className="flex flex-col items-center gap-1">
                <div className="h-5">
                  <img
                    className="w-auto h-full"
                    src="/images/icon/Coding.png"
                    alt="coding icon"
                  />
                </div>
                <p className="text-zinc-500 text-xs">Programming</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-5">
                  <img
                    className="w-auto h-full"
                    src="/images/icon/Game.png"
                    alt="game icon"
                  />
                </div>
                <p className="text-zinc-500 text-xs">Game</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-5">
                  <img
                    className="w-auto h-full"
                    src="/images/icon/Music.png"
                    alt="music icon"
                  />
                </div>
                <p className="text-zinc-500 text-xs">Music</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-5">
                  <img
                    className="w-auto h-full"
                    src="/images/icon/Movie.png"
                    alt="movie icon"
                  />
                </div>
                <p className="text-zinc-500 text-xs">Movie</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-5">
                  <img
                    className="w-auto h-full"
                    src="/images/icon/Football.png"
                    alt="football icon"
                  />
                </div>
                <p className="text-zinc-500 text-xs">Football</p>
              </div>
              <div className="flex flex-col items-center gap-1">
                <div className="h-5">
                  <img
                    className="w-auto h-full"
                    src="/images/icon/Travel.png"
                    alt="travel icon"
                  />
                </div>
                <p className="text-zinc-500  text-xs">Travel</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
