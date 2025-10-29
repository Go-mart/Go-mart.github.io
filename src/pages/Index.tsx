import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <HeroCarousel />
        
        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Omniscient October</h2>
            <Link to="/categories">
              <Button variant="ghost" className="gap-2">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.slice(0, 12).map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Trending Now</h2>
            <Link to="/new-releases">
              <Button variant="ghost" className="gap-2">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.slice(6, 12).map((product) => (
              <ProductCard key={`trending-${product.id}`} {...product} />
            ))}
          </div>
        </section>

        <section className="bg-secondary py-12">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-4xl font-bold mb-4">Join Our Loyalty Program</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Earn points with every purchase and get exclusive discounts, early access to new releases, and special offers.
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-bold">Special Offers</h2>
            <Link to="/bargain-books">
              <Button variant="ghost" className="gap-2">
                View All <ChevronRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {products.slice(12, 18).map((product) => (
              <ProductCard key={`offer-${product.id}`} {...product} />
            ))}
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
