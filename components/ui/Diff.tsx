import React from "react";
import Image from "next/image";

export default function Diff() {
  return (
    <>
      <div className="diff aspect-video">
        <div className="diff-item-1">
          <Image
            src="/crashtracker1.png"
            width={800}
            height={500}
            alt="Imagen crashtracker 1"
          />
        </div>
        <div className="diff-item-2">
          <Image
            src="/presupuesto.png"
            width={800}
            height={500}
            alt="Imagen crashtracker 2"
          />
        </div>
        <div className="diff-resizer"></div>
      </div>
    </>
  );
}
