import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

const wishlistItems = [
  {
    id: "1",
    title: "The Laws of Human Nature",
    author: "Greene, Robert",
    price: 402000,
    originalPrice: 503000,
    discount: 20,
    image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop",
    category: "Hardcover",
  },
  {
    id: "2",
    title: "Murdle: Volume 1",
    author: "Karber, G. T.",
    price: 229000,
    originalPrice: 287000,
    discount: 20,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop",
    category: "Paperback",
  },
  {
    id: "3",
    title: "Onyx Storm",
    author: "Yarros, Rebecca",
    price: 473000,
    originalPrice: 582000,
    discount: 20,
    image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop",
    category: "Hardcover",
  },
];

const Wishlist = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="flex items-center gap-3 mb-8">
          <Heart className="h-8 w-8 text-primary fill-primary" />
          <h1 className="text-4xl font-bold">My Wishlist</h1>
        </div>
        
        {wishlistItems.length > 0 ? (
          <>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {wishlistItems.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <Button size="lg">
                Add All to Cart
              </Button>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <Heart className="h-24 w-24 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-2xl font-bold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-6">
              Start adding books you love to your wishlist
            </p>
            <Button size="lg">
              Browse Books
            </Button>
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Wishlist;
