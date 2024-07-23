import { Button } from "@components/ui/button";
import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

export type ScrollGestureProps = {
  direction?: "horizontal" | "vertical" | "both";
  speed?: number;
  className?: string;
  classNameArrows?: string;
  arrows?: boolean;
} & PropsWithChildren;

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const ScrollGesture = ({ children, direction, speed, className, classNameArrows, arrows }: ScrollGestureProps = { direction: "horizontal", speed: 2, className: "", classNameArrows: "", arrows: false }) => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  const [maxScroll, setMaxScroll] = useState<number>(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onMouseDown = (e) => {
    isDragging.current = true;

    if (scrollContainerRef.current) {
      startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeft.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const onMouseLeave = () => {
    isDragging.current = false;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const onMouseMove = (e) => {
    if (!isDragging.current) {
      return;
    }

    e.preventDefault();

    if (scrollContainerRef.current) {
      const x = e.pageX - scrollContainerRef.current.offsetLeft;
      const walk = (x - startX.current) * (speed || 2 );
      scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
    }
  };

  const toStart = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const toEnd = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: maxScroll, behavior: "smooth" });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  useEffect(() => {
    if (scrollContainerRef.current) {
      const element = scrollContainerRef.current;
    
      const scrollableWidth = scrollContainerRef.current.scrollWidth;
      const visibleWidth = scrollContainerRef.current.clientWidth;

      setMaxScroll(scrollableWidth - visibleWidth);

      element.addEventListener("scroll", handleScroll);

      // Remove from listener when component will unmount
      return () => {
        if (element) {
          element.removeEventListener("scroll", handleScroll);
        }
      };
    }
  }, []);
  
  const renderArrowLeft = () => {
    if (arrows && scrollPosition > 10) {
      return (
        <Button 
          variant={"rounded/ghost"} 
          className={twMerge("absolute h-8 w-8 px-1 py-1 text-zinc-400 hover:text-zinc-100 top-5 z-50 bg-zinc-800 hover:bg-zinc-700", classNameArrows)}
          onClick={ toStart }
        >
          <ArrowLeftIcon size={18} />
        </Button>
      );
    }
  };

  const renderArrowRight = () => {
    if (arrows && scrollPosition < (maxScroll - 10)) {
      return (
        <Button 
          variant={"rounded/ghost"} 
          className={twMerge("absolute h-8 w-8 px-1 py-1 text-zinc-400 hover:text-zinc-100 top-5 right-0 z-50 bg-zinc-800 hover:bg-zinc-700", classNameArrows)}
          onClick={ toEnd }
        >
          <ArrowRightIcon size={18} />
        </Button>
      );
    }
  };

  return (
    <div className="relative">
      { renderArrowLeft() }

      <div 
        className={twMerge("overflow-hidden w-full whitespace-nowrap cursor-grab select-none", className)}
        ref={scrollContainerRef}
        onMouseDown={onMouseDown}
        onMouseLeave={onMouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        style={{
          maskImage: arrows ? "linear-gradient(90deg,transparent,#000 80px,#000 calc(100% - 80px),transparent)" : ""
        }}
      >
        <div
          className={twMerge("inline-block", arrows && "px-10")}
        >
          { children }
        </div>
      </div>

      { renderArrowRight() }
    </div>
  );
};

export {
  ScrollGesture
};