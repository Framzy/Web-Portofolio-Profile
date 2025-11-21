function About() {
  return (
    <>
      <section className="h-11/12 box-border">
        <div className="flex flex-row justify-center gap-2 font-manrope font-bold text-4xl p-3">
          <p className="text-[#39EEFA]">FRONT-END </p>
          <p className="text-white"> WEB DEVELOPER</p>
        </div>
        <img
          className="mx-auto mt-5 h-60 "
          src="/images/Profile_Framzy.png"
          alt="karina image"
        />
      </section>
    </>
  );
}

export default About;
