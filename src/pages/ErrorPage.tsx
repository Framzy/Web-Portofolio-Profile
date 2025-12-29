import { Link } from "react-router";
import Lottie from "lottie-react";
import animation404 from "../assets/lotties/404.json";

export default function ErrorPage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center">
      <div className="mb-8">
        <h1 className="text-lg md:text-2xl text-center font-bold text-[#0857A0]">
          Something Went Wrong
        </h1>
        <p className="text-md md:text-lg text-center font-bold text-gray-500">
          Sorry, page not found!
        </p>
      </div>
      <div className="flex flex-col items-center">
        <Lottie animationData={animation404} loop autoplay />
        <Link
          to="/"
          className="inline-flex items-center px-3 py-2 bg-[#0857A0] text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200 font-medium shadow-md transform hover:-translate-y-0.5"
        >
          <p className="text-sm md:text-lg">Back to Portofolio</p>
        </Link>
      </div>
    </main>
  );
}
