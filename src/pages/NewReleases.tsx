import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

const newReleases = Array.from({ length: 18 }, (_, i) => ({
  id: `new-${i + 1}`,
  title: `New Release Book ${i + 1}`,
  author: `Author ${i + 1}`,
  price: 250000 + (i * 25000),
  originalPrice: 312500 + (i * 31250),
  discount: 20,
  image: `https://images.unsplash.com/photo-${1544947950 + i * 1000000}-fa07a98d237f?w=400&auto=format&fit=crop`,
  category: i % 2 === 0 ? "Hardcover" : "Paperback",
}));

const NewReleases = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">New Releases</h1>
          <p className="text-muted-foreground">Discover the latest books from your favorite authors</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NewReleases;
