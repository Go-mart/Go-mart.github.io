import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto prose prose-slate">
          <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
          <p className="text-muted-foreground mb-8">Last updated: October 29, 2025</p>
          
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground mb-4">
              By accessing and using Periplus.com, you accept and agree to be bound by these Terms and Conditions. 
              If you do not agree to these terms, please do not use our website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">2. Use of Website</h2>
            <p className="text-muted-foreground mb-4">
              You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, 
              restrict or inhibit anyone else's use of the website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">3. Product Information</h2>
            <p className="text-muted-foreground mb-4">
              We strive to provide accurate product information. However, we do not warrant that product descriptions, 
              pricing, or other content is accurate, complete, reliable, current, or error-free.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">4. Pricing and Payment</h2>
            <p className="text-muted-foreground mb-4">
              All prices are in Indonesian Rupiah (IDR) and include applicable taxes. We reserve the right to change 
              prices at any time. Payment must be received before order processing.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">5. Shipping and Delivery</h2>
            <p className="text-muted-foreground mb-4">
              Delivery times are estimates and not guaranteed. We are not responsible for delays caused by shipping 
              carriers or customs clearance. Risk of loss passes to you upon delivery to the carrier.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">6. Returns and Refunds</h2>
            <p className="text-muted-foreground mb-4">
              You may return unopened items within 14 days of delivery for a full refund. Returned items must be in 
              original condition with all packaging. Shipping costs are non-refundable.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">7. Intellectual Property</h2>
            <p className="text-muted-foreground mb-4">
              All content on this website, including text, graphics, logos, and images, is the property of Periplus.com 
              and protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground mb-4">
              We shall not be liable for any indirect, incidental, special, or consequential damages arising out of 
              or in connection with the use of our website or products.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">9. Governing Law</h2>
            <p className="text-muted-foreground mb-4">
              These terms shall be governed by and construed in accordance with the laws of Indonesia.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
            <p className="text-muted-foreground">
              For questions about these Terms & Conditions, contact us at:
              <br />
              Email: support@periplus.com
              <br />
              Phone: +62 21 1234 5678
            </p>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
