"use client";

import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent } from "../ui/carousel";

export default function CarouselAuto({
  children,
  delay = 2000,
}: {
  delay?: number;
  children: React.ReactNode;
}) {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay,
        }),
      ]}
    >
      <CarouselContent>{children}</CarouselContent>
    </Carousel>
  );
}
