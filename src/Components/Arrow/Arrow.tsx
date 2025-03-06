import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArrowProps {
  direction: "left" | "right";
}

export function Arrow({ direction }: ArrowProps) {
  return (
    <div>
      {direction === "left" ? (
        <ArrowLeft size={50} />
      ) : (
        <ArrowRight size={50} />
      )}
    </div>
  );
}
