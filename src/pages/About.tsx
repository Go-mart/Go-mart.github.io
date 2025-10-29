import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BookOpen, Users, Award, Globe } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="bg-primary text-primary-foreground py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-6">About Periplus.com</h1>
            <p className="text-xl max-w-3xl mx-auto opacity-90">
              Indonesia's largest bookstore, bringing the world of books to your doorstep since 1988
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground text-lg">
              <p>
                Founded in 1988, Periplus has grown from a single bookstore to become Indonesia's most trusted 
                source for English-language books, magazines, and educational materials. Our mission is to connect 
                readers with the books they love and inspire a lifelong passion for reading.
              </p>
              <p>
                With over 35 years of experience, we've built a vast network of stores across Indonesia and a 
                comprehensive online platform that serves book lovers throughout the archipelago. From bestsellers 
                to rare finds, we're committed to offering the widest selection at the best prices.
              </p>
              <p>
                Today, Periplus.com serves millions of customers annually, offering not just books but also 
                magazines, stationery, toys, and gifts. We're proud to be part of Indonesia's reading culture 
                and to support literacy and education across the nation.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-secondary py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Periplus?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Vast Selection</h3>
                <p className="text-muted-foreground">
                  Over 100,000 titles across all genres and categories
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Best Prices</h3>
                <p className="text-muted-foreground">
                  Competitive pricing with regular discounts and promotions
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Expert Service</h3>
                <p className="text-muted-foreground">
                  Knowledgeable staff ready to help with recommendations
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">Nationwide Delivery</h3>
                <p className="text-muted-foreground">
                  Fast and reliable shipping across Indonesia
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Visit Our Stores</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Experience the joy of browsing books in person at any of our locations across Indonesia. 
              Our friendly staff are always ready to help you find your next favorite read.
            </p>
            <a href="/store-location" className="inline-block">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors">
                Find a Store Near You
              </button>
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
