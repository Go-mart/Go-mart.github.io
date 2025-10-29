import { useParams } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { products } from "@/data/products";
import { useCart } from "@/hooks/useCart";
import { toast } from "sonner";
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();
  const { addItem } = useCart();
  
  const product = products.find(p => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 container mx-auto px-4 py-12 text-center">
          <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-6">The product you're looking for doesn't exist.</p>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      title: product.title,
      author: product.author,
      price: product.price,
      image: product.image,
    });
    toast.success("Added to cart!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="sticky top-24">
              <img
                src={product.image}
                alt={product.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
          </div>
          
          <div>
            {product.discount && (
              <Badge className="bg-discount text-discount-foreground mb-4">-{product.discount}%</Badge>
            )}
            <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
            <p className="text-xl text-muted-foreground mb-4">by {product.author}</p>
            
            <div className="flex items-center gap-2 mb-6">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">(247 reviews)</span>
            </div>
            
            <div className="flex items-baseline gap-4 mb-8">
              <span className="text-4xl font-bold text-primary">Rp {product.price.toLocaleString()}</span>
              {product.originalPrice && (
                <span className="text-2xl text-muted-foreground line-through">
                  Rp {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            <div className="space-y-4 mb-8">
              <div className="flex gap-2">
                <span className="text-muted-foreground min-w-24">Category:</span>
                <span className="font-medium">{product.category}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground min-w-24">Format:</span>
                <span className="font-medium">{product.format}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground min-w-24">Pages:</span>
                <span className="font-medium">{product.pages}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground min-w-24">Publisher:</span>
                <span className="font-medium">{product.publisher}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground min-w-24">Language:</span>
                <span className="font-medium">{product.language}</span>
              </div>
              <div className="flex gap-2">
                <span className="text-muted-foreground min-w-24">ISBN:</span>
                <span className="font-medium">{product.isbn}</span>
              </div>
            </div>
            
            <div className="flex gap-4 mb-8">
              <Button size="lg" className="flex-1" onClick={handleAddToCart}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Add to Cart
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            
            <div className="bg-secondary p-6 rounded-lg">
              <h3 className="font-bold mb-2">Free Shipping</h3>
              <p className="text-sm text-muted-foreground">
                On orders over Rp 250,000 within Indonesia
              </p>
            </div>
          </div>
        </div>
        
        <Tabs defaultValue="description" className="w-full">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="description">Description</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="details">Additional Details</TabsTrigger>
          </TabsList>
          
          <TabsContent value="description" className="prose max-w-none">
            <p className="text-muted-foreground leading-relaxed">
              {product.description}
            </p>
          </TabsContent>
          
          <TabsContent value="reviews">
            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b pb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-medium">Customer {review}</span>
                  </div>
                  <p className="text-muted-foreground">
                    Excellent book with deep insights into human behavior. Highly recommended for anyone interested in psychology and personal development.
                  </p>
                </div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="details">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="font-medium">Weight:</span>
                  <span className="text-muted-foreground ml-2">1.2 kg</span>
                </div>
                <div>
                  <span className="font-medium">Dimensions:</span>
                  <span className="text-muted-foreground ml-2">24 x 16 x 4 cm</span>
                </div>
                <div>
                  <span className="font-medium">Publication Date:</span>
                  <span className="text-muted-foreground ml-2">October 2018</span>
                </div>
                <div>
                  <span className="font-medium">Edition:</span>
                  <span className="text-muted-foreground ml-2">1st Edition</span>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProductDetail;
