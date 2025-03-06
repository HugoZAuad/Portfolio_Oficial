import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface ArrowProps {
  direction: "left" | "right";
}

export function Arrow({ direction }: ArrowProps) {
  return (
    <div>
      {direction === "left" ? (
        <ArrowLeft size={30} />
      ) : (
        <ArrowRight size={30} />
      )}
    </div>
  );
}
