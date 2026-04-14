import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import BestSellers from "@/components/BestSellers";
import BrandPartners from "@/components/BrandPartners";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";

const Index = () => (
  <div className="min-h-screen flex flex-col">
    <TopBar />
    <Header />
    <main className="flex-1">
      <HeroBanner />
      <CategoryGrid />
      <BestSellers />
      <BrandPartners />
    </main>
    <Footer />
    <CartDrawer />
  </div>
);

export default Index;
