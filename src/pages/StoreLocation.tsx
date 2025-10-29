import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock, Search } from "lucide-react";

const stores = [
  {
    id: 1,
    name: "Periplus Plaza Indonesia",
    address: "Plaza Indonesia Level 4, Jl. M.H. Thamrin No. 28-30, Jakarta Pusat",
    phone: "(021) 2992-3509",
    hours: "10:00 AM - 10:00 PM",
  },
  {
    id: 2,
    name: "Periplus Grand Indonesia",
    address: "Grand Indonesia Shopping Town, East Mall 3rd Floor, Jakarta Pusat",
    phone: "(021) 2358-0558",
    hours: "10:00 AM - 10:00 PM",
  },
  {
    id: 3,
    name: "Periplus Pacific Place",
    address: "Pacific Place Mall Level 3, Jl. Jend. Sudirman Kav. 52-53, Jakarta Selatan",
    phone: "(021) 5140-2559",
    hours: "10:00 AM - 10:00 PM",
  },
  {
    id: 4,
    name: "Periplus Pondok Indah Mall",
    address: "Pondok Indah Mall 1, 3rd Floor, Jakarta Selatan",
    phone: "(021) 750-3807",
    hours: "10:00 AM - 10:00 PM",
  },
  {
    id: 5,
    name: "Periplus Senayan City",
    address: "Senayan City Mall, Level 2, Jakarta Pusat",
    phone: "(021) 572-5807",
    hours: "10:00 AM - 10:00 PM",
  },
  {
    id: 6,
    name: "Periplus Ciputra World",
    address: "Ciputra World 1, Level 2, Jl. Prof. Dr. Satrio Kav. 3-5, Jakarta Selatan",
    phone: "(021) 2988-4580",
    hours: "10:00 AM - 10:00 PM",
  },
];

const StoreLocation = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Store Locations</h1>
          <p className="text-muted-foreground">Find a Go-mart bookstore near you</p>
        </div>

        <div className="mb-8">
          <div className="relative max-w-md">
            <Input
              type="search"
              placeholder="Search by city or area..."
              className="pl-4 pr-12"
            />
            <Button size="icon" className="absolute right-0 top-0 h-full">
              <Search className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store) => (
            <Card key={store.id} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">{store.name}</h3>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">{store.address}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{store.phone}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                    <p className="text-sm">{store.hours}</p>
                  </div>
                </div>
                
                <Button className="w-full mt-6">
                  Get Directions
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoreLocation;
