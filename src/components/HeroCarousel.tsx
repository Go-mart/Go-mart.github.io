import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const slides = [
  {
    id: 1,
    title: "Double Points Promo",
    description: "Get double points for each transaction without limit",
    image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=1200&auto=format&fit=crop",
    cta: "Shop Now",
    bgColor: "from-secondary to-secondary/70",
  },
  {
    id: 2,
    title: "Fiction Frenzy",
    description: "Discover amazing fiction books at special prices",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=1200&auto=format&fit=crop",
    cta: "Explore",
    bgColor: "from-blue-100 to-blue-50",
  },
  {
    id: 3,
    title: "New Releases",
    description: "Check out the latest books from your favorite authors",
    image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200&auto=format&fit=crop",
    cta: "View All",
    bgColor: "from-purple-100 to-purple-50",
  },
];

export const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-500 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgColor}`} />
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center max-w-3xl px-4">
              <h2 className="text-4xl md:text-6xl font-bold mb-4 text-foreground">
                {slide.title}
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-foreground/80">
                {slide.description}
              </p>
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={prev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white"
        onClick={next}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-all ${
              index === current ? "bg-primary w-8" : "bg-white/60"
            }`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};
