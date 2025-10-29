import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const categories = [
  { id: "fiction", name: "Fiction", image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&auto=format&fit=crop", count: 2450 },
  { id: "non-fiction", name: "Non-Fiction", image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&auto=format&fit=crop", count: 1890 },
  { id: "business", name: "Business & Economics", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop", count: 1205 },
  { id: "children", name: "Children's Books", image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=400&auto=format&fit=crop", count: 3120 },
  { id: "young-adult", name: "Young Adult", image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&auto=format&fit=crop", count: 980 },
  { id: "science", name: "Science & Technology", image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&auto=format&fit=crop", count: 756 },
  { id: "cooking", name: "Cooking & Food", image: "https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&auto=format&fit=crop", count: 634 },
  { id: "travel", name: "Travel & Adventure", image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=400&auto=format&fit=crop", count: 892 },
  { id: "art", name: "Art & Photography", image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&auto=format&fit=crop", count: 445 },
  { id: "health", name: "Health & Wellness", image: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400&auto=format&fit=crop", count: 678 },
  { id: "history", name: "History", image: "https://images.unsplash.com/photo-1490633874781-1c63cc424610?w=400&auto=format&fit=crop", count: 1034 },
  { id: "comics", name: "Comics & Graphic Novels", image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=400&auto=format&fit=crop", count: 523 },
];

const Categories = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">Browse by Category</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={`/category/${category.id}`}>
              <Card className="group overflow-hidden hover:shadow-lg transition-shadow duration-300">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                    <p className="text-sm text-white/80">{category.count} books</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Categories;
