import Chart from "./chart";
import { renderIf } from "@/app/lib/render";
import { SummaryWebSpeed } from "@/app/lib/web-comparison";
import { useEffect } from "react";

export default function Summary(props: { data: SummaryWebSpeed[] }) {
  useEffect(() => {
    if (props.data.length) {
      window.scrollBy(0, 360);
    }
  }, [props.data]);
  return renderIf(!!props.data?.length)(
    <section className="relative mb-24">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="h-30 flex flex-col items-center justify-center overflow-auto">
          <Chart
            data={props.data.map((item) => ({
              name: item.website.replace("https://", ""),
              time: item.timeMs,
              size: item.sizeKb,
            }))}
          />

          <div className="text-gray-500 text-xs">
            Time units are in ms; size units are in kb; lower units are better.~
          </div>
        </div>
      </div>
    </section>
  );
}
