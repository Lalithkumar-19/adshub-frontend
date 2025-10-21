"use client";

import * as React from "react";
import { useEffect, useState } from "react";
import useEmblaCarousel, {
  type UseEmblaCarouselType,
} from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

// Utility function for className merging
function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

// Button component
const buttonVariants = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
  outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
};

const buttonSizes = {
  default: "h-10 px-4 py-2",
  sm: "h-9 rounded-md px-3",
  lg: "h-11 rounded-md px-8",
  icon: "h-10 w-10",
};

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

// Carousel components
type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
  opts?: CarouselOptions;
  plugins?: CarouselPlugin;
  orientation?: "horizontal" | "vertical";
  setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
  carouselRef: ReturnType<typeof useEmblaCarousel>[0];
  api: ReturnType<typeof useEmblaCarousel>[1];
  scrollPrev: () => void;
  scrollNext: () => void;
  canScrollPrev: boolean;
  canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = React.createContext<CarouselContextProps | null>(null);

function useCarousel() {
  const context = React.useContext(CarouselContext);

  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }

  return context;
}

const Carousel = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & CarouselProps
>(
  (
    {
      orientation = "horizontal",
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [carouselRef, api] = useEmblaCarousel(
      {
        ...opts,
        axis: orientation === "horizontal" ? "x" : "y",
      },
      plugins
    );
    const [canScrollPrev, setCanScrollPrev] = React.useState(false);
    const [canScrollNext, setCanScrollNext] = React.useState(false);

    const onSelect = React.useCallback((api: CarouselApi) => {
      if (!api) {
        return;
      }

      setCanScrollPrev(api.canScrollPrev());
      setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = React.useCallback(() => {
      api?.scrollPrev();
    }, [api]);

    const scrollNext = React.useCallback(() => {
      api?.scrollNext();
    }, [api]);

    const handleKeyDown = React.useCallback(
      (event: React.KeyboardEvent<HTMLDivElement>) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          scrollPrev();
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      },
      [scrollPrev, scrollNext]
    );

    React.useEffect(() => {
      if (!api || !setApi) {
        return;
      }

      setApi(api);
    }, [api, setApi]);

    React.useEffect(() => {
      if (!api) {
        return;
      }

      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);

      return () => {
        api?.off("select", onSelect);
      };
    }, [api, onSelect]);

    return (
      <CarouselContext.Provider
        value={{
          carouselRef,
          api: api,
          opts,
          orientation:
            orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
          scrollPrev,
          scrollNext,
          canScrollPrev,
          canScrollNext,
        }}
      >
        <div
          ref={ref}
          onKeyDownCapture={handleKeyDown}
          className={cn("relative", className)}
          role="region"
          aria-roledescription="carousel"
          {...props}
        >
          {children}
        </div>
      </CarouselContext.Provider>
    );
  }
);
Carousel.displayName = "Carousel";

const CarouselContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { carouselRef, orientation } = useCarousel();

  return (
    <div ref={carouselRef} className="overflow-hidden">
      <div
        ref={ref}
        className={cn(
          "flex",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        {...props}
      />
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

const CarouselItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { orientation } = useCarousel();

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

// Client logo interface
interface ClientLogo {
  id: string;
  name: string;
  logo: string;
  website?: string;
  className?: string;
}

interface TrustedByProps {
  heading?: string;
  subheading?: string;
  logos?: ClientLogo[];
  autoPlay?: boolean;
  autoPlayInterval?: number;
  className?: string;
}

const TrustedBy = ({
  heading = "Trusted by Many Companies",
  subheading = "Join ten's of companies that trust our agency to deliver exceptional results",
  autoPlay = true,
  autoPlayInterval = 3000,
  className,
  logos = [
    {
      id: "client-1",
      name: "IPGYAN",
      logo: "https://i.ibb.co/3mjk4WgY/ipgyan-logo.jpg",
      website: "https://ipgyan.com",
      className: "h-16 sm:h-20 w-auto",
    },
    {
      id: "client-2",
      name: "Sologixenergy",
      logo: "https://www.sologixenergy.in/assets/img/logo/header_logo.png",
      website: "https://www.sologixenergy.in/",
      className: "h-16 sm:h-20 w-auto",
    },
    {
      id: "client-3",
      name: "Airzones",
      logo: "https://res.cloudinary.com/airzone/image/upload/images/airzone.svg",
      website: "https://www.airzonecontrol.com/",
      className: "h-10 sm:h-12 w-auto",
    },
    {
      id: "client-4",
      name: "Apiphany",
      logo: "https://cdn.prod.website-files.com/67462098ee993327b36d36d4/681f2d539987f40eabebea97_Apiphany_logo_Black.svg",
      website: "https://www.apiphany.ai",
      className: "h-6 sm:h-8 w-auto",
    },
    {
      id: "client-5",
      name: "Palazzo Lakeside Hotel",
      logo: "https://i.ibb.co/PZQCVy9P/image.png",
      website: "https://palazzolakesidehotel.com/",
      className: "h-6 sm:h-8 w-auto",
    },
    {
      id: "client-6",
      name: "The blocksilverthorne",
      logo: "https://theblocksilverthorne.com/wp-content/uploads/Secondary-Logo-V_Teal.png",
      website: "https://theblocksilverthorne.com/",
      className: "h-6 sm:h-8 w-auto",
    },
    {
      id: "client-7",
      name: "Xecutables",
      logo: "https://www.xecutables.com/logo.svg",
      website: "https://www.xecutables.com/",
      className: "h-6 sm:h-8 w-auto",
    },
    {
      id: "client-8",
      name: "Dezinexpert",
      logo: "https://dezinexpert.com/assets/img/dc-180.png",
      website: "https://dezinexpert.com/",
      className: "h-6 sm:h-8 w-auto",
    },
    {
      id: "client-9",
      name: "Zendor",
      logo: "https://i.ibb.co/nsKtkYcF/image.png",
      website: "https://zendorr.com",
      className: "h-6 sm:h-8 w-auto",
    },
  ],
}: TrustedByProps) => {
  const [api, setApi] = useState<CarouselApi>();

  useEffect(() => {
    if (!api || !autoPlay) {
      return;
    }

    const timer = setInterval(() => {
      api.scrollNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [api, autoPlay, autoPlayInterval]);

  return (
    <section className={cn("py-12 lg:py-20 bg-black", className)}>
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {heading}
          </h2>
          <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto">
            {subheading}
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{ 
              loop: true,
              align: "start",
            }}
            setApi={setApi}
            className="w-full"
          >
            <CarouselContent className="ml-0">
              {logos.map((logo) => (
                <CarouselItem
                  key={logo.id}
                  className="flex basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5 xl:basis-1/6 justify-center pl-0"
                >
                  <div className="mx-4 sm:mx-6 lg:mx-8 flex shrink-0 items-center justify-center p-2 sm:p-4">
                    {logo.website ? (
                      <a
                        href={logo.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="transition-all duration-300 hover:opacity-80 focus:opacity-80 focus:outline-none focus:ring-2 focus:ring-[#000080] focus:ring-offset-2 focus:ring-offset-black rounded-lg p-2"
                      >
                        <img
                          src={logo.logo}
                          alt={`${logo.name} logo`}
                          className={cn(
                            "object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105",
                            logo.className
                          )}
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        src={logo.logo}
                        alt={`${logo.name} logo`}
                        className={cn(
                          "object-contain filter grayscale hover:grayscale-0 transition-all duration-300 hover:scale-105",
                          logo.className
                        )}
                        loading="lazy"
                      />
                    )}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Gradient masks for smooth edges */}
          <div className="absolute inset-y-0 left-0 w-8 sm:w-16 bg-gradient-to-r from-black to-transparent pointer-events-none z-10"></div>
          <div className="absolute inset-y-0 right-0 w-8 sm:w-16 bg-gradient-to-l from-black to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Stats section */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 text-center">
          <div className="p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#000080]/50 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">20+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Happy Clients</div>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#000080]/50 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">98%</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Success Rate</div>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#000080]/50 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">10L+</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Revenue Generated</div>
          </div>
          <div className="p-4 rounded-lg bg-gray-900/50 backdrop-blur-sm border border-gray-800 hover:border-[#000080]/50 transition-all duration-300">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-800">24/7</div>
            <div className="text-xs sm:text-sm text-gray-300 mt-1">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TrustedByDemo() {
  return <TrustedBy />;
}