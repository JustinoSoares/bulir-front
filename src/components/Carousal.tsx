import { useEffect, useRef, useState } from "react";
//import { Star } from "lucide-react";
import CardService from "./CardService";

interface MarqueeProps {
  children: React.ReactNode;
  direction?: "left" | "right";
  speed?: number;
  pauseOnHover?: boolean;
  className?: string;
}

const Marquee = ({
  children,
  direction = "left",
  speed = 100,
  pauseOnHover = true,
  className = "",
}: MarqueeProps) => {
  const [contentWidth, setContentWidth] = useState(0);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (contentRef.current) {
      setContentWidth(contentRef.current.scrollWidth);
    }
  }, [children]);

  return (
    <div
      className={`overflow-hidden relative ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      <div
        className={`flex min-w-full gap-4`}
        style={{
          transform: `translateX(${direction === "left" ? "-" : ""}${isPaused ? contentWidth / 4 : 0}px)`,
          animation: `scroll-${direction} ${contentWidth / speed}s linear infinite`,
          animationPlayState: isPaused ? "paused" : "running",
        }}
      >
        <div ref={contentRef} className="flex gap-4 shrink-0">
          {children}
        </div>
        <div className="flex gap-4 shrink-0">{children}</div>
      </div>

      <style>
        {`
          @keyframes scroll-left {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            from { transform: translateX(-50%); }
            to { transform: translateX(0); }
          }
        `}
      </style>
    </div>
  );
};
// Demo Component
export default function MarqueeDemo() {
  const reviews = [
    {
      id: 1,
      name: "Sarah Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      rating: 5,
      review:
        "This product exceeded my expectations! The quality is outstanding and the customer service was excellent.",
    },
    {
      id: 2,
      name: "Michael Chen",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
      rating: 4,
      review:
        "Great value for money. Would definitely recommend to others looking for a reliable solution.",
    },
    {
      id: 3,
      name: "Emma Davis",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=emma",
      rating: 5,
      review:
        "Absolutely love it! The features are exactly what I needed, and it's so easy to use.",
    },
    {
      id: 4,
      name: "James Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=james",
      rating: 4,
      review:
        "Very impressed with the quality and attention to detail. A fantastic product overall.",
    },
  ];

  return (
    <div className="bg-background p-8 flex flex-col gap-8 items-center justify-center">
      <div className="w-full md:max-w-4xl ">
        <div>
            <div className="flex flex-col md:flex-row justify-center items-start font-bold">
               <h2 className="text-5xl max-w-[600px] text-center text-[#292929] mb-8">
                O serviços mais solicitados
            </h2>  
            </div>
           
          <Marquee direction="left" className="py-4" speed={100}>
            {reviews.map((review) => (
              <CardService key={review.id} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
