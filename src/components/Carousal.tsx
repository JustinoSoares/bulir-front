import { useEffect, useRef, useState } from "react";
//import { Star } from "lucide-react";
import CardService from "./CardService";
import { useNavigate } from "react-router-dom";
import { api } from "../services/api";

type MyServivesType = {
  id: string;
  name: string;
  description: string;
  price: number;
  userId: string;
  createdAt: string;
};

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
    const navigate = useNavigate()
    const [services, setServices] = useState<MyServivesType[]>([])


      useEffect(() => {
        const fetchUserData = async () => {
          try {
            const token_bulir = localStorage.getItem('token_bulir')
            try {
              const servicesResponse = await api.get<MyServivesType[]>(
                `/service/all?limit=50`,
                {
                  headers: {
                    Authorization: `Bearer ${token_bulir}`
                  }
                }
              )
              setServices(servicesResponse.data)
            } catch (error) {
              console.error('Erro ao buscar serviços do usuário:', error)
              setServices([])
            }
          } catch (error) {
            console.error('Erro ao buscar dados do usuário:', error)
            navigate('/')
          }
        }
    
        fetchUserData()
      }, [navigate])
  return (
    <div className="bg-background p-8 flex flex-col gap-8 items-center justify-center">
      <div className="w-full md:max-w-4xl ">
        <div>
            <div className="flex flex-col md:flex-row justify-center items-start font-bold">
               <h2 className="text-2xl md:text-4xl w-full text-center text-[#292929] mb-8">
                serviços mais solicitados
            </h2>  
            </div>
           
          <Marquee direction="left" className="py-4" speed={100}>
            {services.map((service) => (
              <CardService key={service.id} {...service} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
