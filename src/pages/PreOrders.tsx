import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Badge } from "@/components/ui/badge";
import { products } from "@/data/products";

const preOrders = Array.from({ length: 12 }, (_, i) => ({
  id: `pre-${i + 1}`,
  title: `Pre-Order Book ${i + 1}`,
  author: `Author ${i + 1}`,
  price: 350000 + (i * 30000),
  originalPrice: undefined,
  discount: undefined,
  image: `https://images.unsplash.com/photo-${1543002588 + i * 1000000}-bfa74002ed7e?w=400&auto=format&fit=crop`,
  category: "Coming Soon",
}));

const PreOrders = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-4xl font-bold">Pre-Orders</h1>
            <Badge variant="secondary" className="text-sm">Coming Soon</Badge>
          </div>
          <p className="text-muted-foreground">Reserve your copy of upcoming releases</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {products.slice(0, 12).map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PreOrders;
