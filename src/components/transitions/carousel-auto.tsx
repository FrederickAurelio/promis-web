"use client";

import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, type CarouselApi } from "../ui/carousel";

export default function CarouselAuto({
  children,
  delay = 3000,
  showBadge = false,
  resumeDelay = 5000,
}: {
  delay?: number;
  showBadge?: boolean;
  resumeDelay?: number;
  children: React.ReactNode;
}) {
  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api || !showBadge) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api, showBadge]);

  React.useEffect(() => {
    if (!api) return;
    const autoplay = api.plugins()?.autoplay as
      | { play?: () => void }
      | undefined;
    if (!autoplay?.play) return;
    let timer: ReturnType<typeof setTimeout>;
    const onStop = () => {
      timer = setTimeout(() => autoplay.play?.(), resumeDelay);
    };
    api.on("autoplay:stop", onStop);
    return () => {
      api.off("autoplay:stop", onStop);
      clearTimeout(timer);
    };
  }, [api, resumeDelay]);

  return (
    <Carousel
      setApi={setApi}
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
      <div className="relative">
        <CarouselContent>{children}</CarouselContent>
        {showBadge && count > 0 && (
          <span className="absolute right-2 bottom-2 z-20 flex items-center justify-center rounded bg-black/40 px-3 py-1 text-xs font-medium tracking-widest text-white">
            {current}/{count}
          </span>
        )}
      </div>
    </Carousel>
  );
}
