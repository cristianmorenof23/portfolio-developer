import React from "react";
import Image from "next/image";

export default function Navegacion() {
  return (
    <div
      data-carousel='{
        "loadingClasses": "opacity-0",
        "dotsItemClasses": "carousel-box"
      }'
      className="relative w-full"
    >
      <div className="carousel h-64 sm:h-80 md:h-96 lg:h-[28rem] xl:h-[32rem]">
        <div className="carousel-body h-full opacity-0">
          {[
            "crashtracker1.png",
            "crashtracker2.png",
            "crashtracker3.png",
            "crashtracker4.png",
          ].map((img, index) => (
            <div key={index} className="carousel-slide">
              <div className="flex h-full justify-center items-center p-6 relative">
                <Image
                  src={`/${img}`}
                  className="w-full h-auto max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl object-contain rounded-lg"
                  width={900}
                  height={900}
                  alt={`imagen ${index + 1}`}
                  priority
                  quality={100}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Botón Anterior */}
      <button type="button" className="carousel-prev left-2 sm:left-4">
        <span className="size-7 sm:size-9 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-left] size-4 sm:size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </button>

      <button type="button" className="carousel-next right-2 sm:right-4">
        <span className="size-7 sm:size-9 bg-base-100 flex items-center justify-center rounded-full shadow">
          <span className="icon-[tabler--chevron-right] size-4 sm:size-5 cursor-pointer rtl:rotate-180"></span>
        </span>
      </button>

      {/* Paginación */}
      <div className="carousel-pagination absolute bottom-3 end-0 start-0 flex justify-center gap-3"></div>
    </div>
  );
}
