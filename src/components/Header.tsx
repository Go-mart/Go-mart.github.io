import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Heart, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/hooks/useCart";

export const Header = () => {
  const { getTotalItems } = useCart();
  
  return (
    <header className="sticky top-0 z-50 w-full bg-primary shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          <Link to="/" className="flex flex-col items-start">
            <h1 className="text-2xl font-bold text-primary-foreground tracking-tight">
              Go-mart
            </h1>
            <p className="text-xs text-primary-foreground/80">Indonesia's largest bookstore</p>
          </Link>

          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search by title / author / ISBN here..."
                className="w-full pl-4 pr-12 py-2 bg-white"
              />
              <Button size="icon" className="absolute right-0 top-0 h-full bg-accent hover:bg-accent/90">
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link to="/wishlist">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80">
                <Heart className="h-5 w-5" />
              </Button>
            </Link>
            <Link to="/cart">
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary/80 relative">
                <ShoppingCart className="h-5 w-5" />
                {getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                    {getTotalItems()}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="ghost" className="text-primary-foreground hover:bg-primary/80 gap-2">
                <User className="h-5 w-5" />
                <span className="hidden md:inline">Sign In</span>
              </Button>
            </Link>
          </div>
        </div>

        <nav className="border-t border-primary-foreground/20">
          <ul className="flex items-center justify-center gap-6 py-3 text-sm">
            <li>
              <Link to="/categories" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/new-releases" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                New Releases
              </Link>
            </li>
            <li>
              <Link to="/pre-orders" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Pre-Orders
              </Link>
            </li>
            <li>
              <Link to="/bargain-books" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Bargain Books
              </Link>
            </li>
            <li>
              <Link to="/store-location" className="text-primary-foreground hover:text-primary-foreground/80 transition-colors">
                Store Location
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
