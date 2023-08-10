"use client";

import { useState } from "react";
import Spinner from "./utils/spinner";
import useWebComparison, { filterValidUrls } from "@/app/lib/web-comparison";
import Summary from "./summary";

export default function Main() {
  const [webInputNumber, setWebInputNumber] = useState(2);
  const maxReached = webInputNumber >= 5;

  const { loading, data, mutate } = useWebComparison();

  const handleAddMoreInput = () => {
    // just limit it to max 5
    if (maxReached) return;
    setWebInputNumber((prev) => prev + 1);
  };

  const handleComparison = () => {
    const urls = Array.from({ length: webInputNumber }).map((_, i) => {
      const index = i + 1;
      const elm = document.getElementById(
        `web-address-${index}`
      ) as HTMLInputElement;

      return elm.value;
    });
    console.log(urls);

    const isValidArg = filterValidUrls(urls);

    if (!isValidArg) {
      alert("Not a valid input, you need to provide at least two valid url!");
      return;
    }

    mutate({ urls });
  };

  return (
    <>
      <section className="relative">
        {/* Illustration behind hero content */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1"
          aria-hidden="true"
        >
          <svg
            width="1360"
            height="578"
            viewBox="0 0 1360 578"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                x1="50%"
                y1="0%"
                x2="50%"
                y2="100%"
                id="illustration-01"
              >
                <stop stopColor="#FFF" offset="0%" />
                <stop stopColor="#EAEAEA" offset="77.402%" />
                <stop stopColor="#DFDFDF" offset="100%" />
              </linearGradient>
            </defs>
            <g fill="url(#illustration-01)" fillRule="evenodd">
              <circle cx="1232" cy="128" r="128" />
              <circle cx="155" cy="443" r="64" />
            </g>
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          {/* Hero content */}
          <div className="pt-32 pb-12 md:pt-40 md:pb-20">
            {/* Section header */}
            <div className="text-center pb-12 md:pb-16">
              <h1
                className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                data-aos="zoom-y-out"
              >
                Discover How Your Website Stacks Up{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
                  Against the Competition!
                </span>
              </h1>
              <div className="max-w-3xl mx-auto">
                <p
                  className="text-xl text-gray-600 mb-8"
                  data-aos="zoom-y-out"
                  data-aos-delay="150"
                >
                  Unveil the Speed Difference. Get Ahead. Stay Ahead.
                </p>
                <div
                  className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay="300"
                ></div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4 gap-4 justify-center">
                {Array.from({ length: webInputNumber }).map((_, i) => (
                  <div className="w-full max-w-sm px-3" key={`input-${i + 1}`}>
                    <input
                      id={`web-address-${i + 1}`}
                      type="text"
                      className="form-input w-full text-gray-800"
                      placeholder={`Type website address ${i + 1} with https..`}
                      required
                    />
                  </div>
                ))}
              </div>
              <div className="max-w-3xl mx-auto text-center mt-10">
                <p className="text-xl text-gray-600" data-aos="zoom-y-out">
                  Test Your Website Speed Now! Witness the difference. Drive the
                  change
                </p>
              </div>
              <div className="flex mt-8 gap-2 justify-center">
                <button
                  className={`btn hover:bg-gray-100 ${
                    maxReached ? "text-gray-400 cursor-not-allowed" : ""
                  }`}
                  onClick={handleAddMoreInput}
                  disabled={maxReached}
                >
                  Add more website +
                </button>
                <button
                  onClick={handleComparison}
                  className="btn text-white bg-blue-600 hover:bg-blue-700"
                >
                  {loading ? <Spinner /> : "Start Compare"}
                </button>
              </div>
              <div className="flex justify-center flex-col">
                {data && !loading ? (
                  <>
                    <div className="mt-16 text-[1.5rem] text-green-600">
                      {`🎉 ${data.winWebsite.replace(
                        "https://",
                        ""
                      )} sprints ahead, seizing the speed crown! 🚀`}
                    </div>
                  </>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Summary data={data?.summary ?? []} />
    </>
  );
}
