import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./context/CartContext";
import Cart from "./components/Cart";
import FloatingCartButton from "./components/FloatingCartButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/new" element={<Catalog />} />
            <Route path="/bestsellers" element={<Catalog />} />
            <Route path="/brands" element={<Catalog />} />
            <Route path="/category/:category" element={<Catalog />} />
            <Route path="/help" element={<Catalog />} />
            <Route path="/delivery" element={<Catalog />} />
            <Route path="/returns" element={<Catalog />} />
            <Route path="/contact" element={<Catalog />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Cart />
          <FloatingCartButton />
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
