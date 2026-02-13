export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <>
      <div className="h-20 flex border-t border-[#8A8A8A] items-center justify-center mt-10">
        <p className="text-white text-center font-manrope text-sm">
          ©{year} Framzy. All rights reserved
        </p>
      </div>
    </>
  );
}
