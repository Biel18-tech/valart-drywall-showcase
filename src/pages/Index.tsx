import { useState } from "react";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CategoryGrid from "@/components/CategoryGrid";
import BestSellers from "@/components/BestSellers";
import BrandPartners from "@/components/BrandPartners";
import OrcamentoSection from "@/components/OrcamentoSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";
import CartDrawer from "@/components/CartDrawer";
import AuthModal from "@/components/AuthModal";
import SearchModal from "@/components/SearchModal";
import CheckoutModal from "@/components/CheckoutModal";
import OrdersModal from "@/components/OrdersModal";
import ProductDetailModal from "@/components/ProductDetailModal";
import type { Product } from "@/data/products";

const Index = () => {
  const [authOpen, setAuthOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchCategory, setSearchCategory] = useState<string | undefined>();
  const [searchKey, setSearchKey] = useState(0);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [ordersOpen, setOrdersOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleCategoryClick = (category: string) => {
    setSearchCategory(category);
    setSearchKey((k) => k + 1);
    setSearchOpen(true);
  };

  const handleSearchOpen = () => {
    setSearchCategory(undefined);
    setSearchOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar onLoginClick={() => setAuthOpen(true)} onOrdersClick={() => setOrdersOpen(true)} />
      <Header onSearchOpen={handleSearchOpen} onCategoryClick={handleCategoryClick} />
      <main className="flex-1">
        <HeroBanner />
        <CategoryGrid onCategoryClick={handleCategoryClick} />
        <BestSellers onProductClick={setSelectedProduct} />
        <BrandPartners />
        <OrcamentoSection />
        <BlogSection />
      </main>
      <Footer />
      <CartDrawer onCheckout={() => setCheckoutOpen(true)} />
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} initialCategory={searchCategory} onProductClick={setSelectedProduct} />
      <CheckoutModal isOpen={checkoutOpen} onClose={() => setCheckoutOpen(false)} />
      <OrdersModal isOpen={ordersOpen} onClose={() => setOrdersOpen(false)} />
      {selectedProduct && <ProductDetailModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />}
    </div>
  );
};

export default Index;
