import React, { useState, useEffect, useMemo } from 'react';
import { 
  X, 
  ShoppingBag, 
  Trash2, 
  AlertCircle, 
  CheckCircle2, 
  Minus, 
  Plus, 
  Search, 
  ShoppingCart,
  Info,
  ShieldCheck,
  Truck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Assets & Data
import bannerImg from './assets/banner.png';
import { products as initialProducts } from './data/products';

// Components
import Header from './components/Header';
import ProductCard from './components/ProductCard';

const App = () => {
  const [searchQuery, setSearchQuery] = useState(() => {
    return localStorage.getItem('neman_search') || '';
  });
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem('neman_category') || 'Баардык товарлар';
  });
  const [notice, setNotice] = useState(null);
  
  // Load cart from localStorage on init
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('neman_cart');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (e) {
      return [];
    }
  });
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(() => {
    try {
      const saved = localStorage.getItem('neman_selected_product');
      return saved ? JSON.parse(saved) : null;
    } catch (e) {
      return null;
    }
  });

  // Persistence: Save to localStorage
  useEffect(() => {
    localStorage.setItem('neman_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('neman_category', activeCategory);
  }, [activeCategory]);

  useEffect(() => {
    localStorage.setItem('neman_search', searchQuery);
  }, [searchQuery]);

  useEffect(() => {
    if (selectedProduct) {
      localStorage.setItem('neman_selected_product', JSON.stringify(selectedProduct));
    } else {
      localStorage.removeItem('neman_selected_product');
    }
  }, [selectedProduct]);

  // Notice timeout
  useEffect(() => {
    if (notice) {
      const timer = setTimeout(() => setNotice(null), 3000);
      return () => clearTimeout(timer);
    }
  }, [notice]);

  const filteredProducts = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    return initialProducts.filter(p => {
      const matchesSearch = !query || 
        p.name.toLowerCase().includes(query) || 
        p.category.toLowerCase().includes(query) ||
        (p.symptoms && p.symptoms.some(s => s.toLowerCase().includes(query)));
      
      const matchesCategory = activeCategory === 'Баардык товарлар' || p.category === activeCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      setCart(cart.map(item => 
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    setNotice(`"${product.name}" себетке кошулду!`);
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));
  
  const updateQty = (id, delta) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartPrescription = cart.some(item => item.isPrescriptionRequired);

  const handleWhatsAppOrder = () => {
    if (cart.length === 0) return;

    const phoneNumber = "996220688410";
    let message = "Саламатсызбы! Neman.kg (Ош, Исанов көчөсү) сайтынан буюртма:\n\n";
    
    cart.forEach((item, index) => {
      message += `${index + 1}. ${item.name} - ${item.quantity} шт. х ${item.price} сом = ${item.price * item.quantity} сом\n`;
    });

    message += `\n*Жалпы: ${cartTotal} сом*`;
    
    if (cartPrescription) {
      message += `\n\n_Эскертүү: Буюртмада рецепттик дарылар бар._`;
    }

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="pharmacy-app">
      <AnimatePresence>
        {notice && (
          <motion.div 
            className="toast-notice"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
          >
            <CheckCircle2 size={20} />
            <span>{notice}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <Header 
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        cartItemsCount={cart.reduce((a, b) => a + b.quantity, 0)}
        onCartClick={() => setIsCartOpen(true)}
        onCategoryChange={setActiveCategory}
        activeCategory={activeCategory}
        onNotice={setNotice}
      />

      <main className="container main-content py-8">
        <div className="promo-banner">
          <div className="promo-text">
            <h2>Саламаттыкта болуңуз!</h2>
            <p>Биздин дарыканадан эң керектүү дарыларды арзан баада таба аласыз.</p>
          </div>
          <div className="promo-img">
            <img src={bannerImg} alt="Health Banner" />
          </div>
        </div>

        <section className="catalog-section">
          <div className="section-header flex justify-between align-center mb-6">
            <h2 className="section-title">{activeCategory}</h2>
            <div className="filter-hint">Табылды: {filteredProducts.length} товар</div>
          </div>

          <motion.div className="products-grid" layout>
            <AnimatePresence>
              {filteredProducts.map(product => (
                <ProductCard 
                  key={product.id} 
                  product={product} 
                  onAddToCart={addToCart}
                  onShowDetail={setSelectedProduct}
                  onNotice={setNotice}
                />
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredProducts.length === 0 && (
            <div className="empty-state">
              <Search size={64} />
              <h3>Эч нерсе табылган жок</h3>
              <p>Башка симптом же дарынын атын жазып көрүңүз.</p>
              <button className="btn-link" onClick={() => { setSearchQuery(''); setActiveCategory('Баардык товарлар'); }}>Баарын көрсөтүү</button>
            </div>
          )}
        </section>
      </main>

      {/* Cart Drawer */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="modal-backdrop cart-backdrop" onClick={() => setIsCartOpen(false)}>
            <motion.div 
              className="drawer cart-drawer" 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
            >
              <div className="drawer-header">
                <h3>Себет</h3>
                <button className="close-drawer" onClick={() => setIsCartOpen(false)}><X /></button>
              </div>

              <div className="drawer-body">
                {cart.length === 0 ? (
                  <div className="cart-empty-msg">
                    <ShoppingBag size={80} strokeWidth={1} />
                    <p>Себетиңиз азырынча бош</p>
                    <button className="btn-primary" onClick={() => setIsCartOpen(false)}>Сатып алууну баштоо</button>
                  </div>
                ) : (
                  <div className="cart-items-list">
                    {cartPrescription && (
                      <div className="prescription-note">
                        <AlertCircle size={20} />
                        <div>
                          <strong>Рецепт талап кылынат!</strong>
                          <p>Сатып алууда дарыгердин кагазын көрсөтүшүңүз керек.</p>
                        </div>
                      </div>
                    )}
                    {cart.map(item => (
                      <div key={item.id} className="cart-item">
                        <img src={item.image} alt={item.name} />
                        <div className="item-details">
                          <h4>{item.name}</h4>
                          <span className="item-p">{item.price} сом</span>
                        </div>
                        <div className="item-ctrl">
                          <div className="qty-wrap">
                            <button onClick={() => updateQty(item.id, -1)}><Minus size={14} /></button>
                            <span>{item.quantity}</span>
                            <button onClick={() => updateQty(item.id, 1)}><Plus size={14} /></button>
                          </div>
                          <button className="remove-item" onClick={() => removeFromCart(item.id)}><Trash2 size={18} /></button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {cart.length > 0 && (
                <div className="drawer-footer">
                  <div className="total-box">
                    <span>Суммасы:</span>
                    <span className="total-val">{cartTotal} сом</span>
                  </div>
                  <button className="btn-checkout" onClick={handleWhatsAppOrder}>WhatsApp аркылуу буюртма берүү</button>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="modal-backdrop product-detail-backdrop" onClick={() => setSelectedProduct(null)}>
            <motion.div 
              className="modal-panel product-modal"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <button className="modal-close" onClick={() => setSelectedProduct(null)}><X /></button>
              <div className="modal-grid">
                <div className="modal-media">
                  <img src={selectedProduct.image} alt={selectedProduct.name} />
                </div>
                <div className="modal-info">
                  <span className="cat-badge">{selectedProduct.category}</span>
                  <h2 className="title">{selectedProduct.name}</h2>
                  <p className="dosage">{selectedProduct.dosage}</p>
                  
                  <div className="price-container">
                    <span className="now">{selectedProduct.price} сом</span>
                    {selectedProduct.oldPrice && <span className="before">{selectedProduct.oldPrice} сом</span>}
                  </div>

                  <div className="description-text">
                    <h4>Сүрөттөлүшү:</h4>
                    <p>{selectedProduct.longDescription}</p>
                  </div>

                  {selectedProduct.isPrescriptionRequired && (
                    <div className="prescription-box">
                      <ShieldCheck size={20} />
                      <span>Рецепт менен гана берилет!</span>
                    </div>
                  )}

                  <div className="benefits-row flex gap-4 my-6">
                    <div className="benefit"><Info size={16} /> Ош, Исанов көчөсү</div>
                    <div className="benefit"><Truck size={16} /> Тез жеткирүү</div>
                  </div>

                  <div className="modal-actions">
                     <button className="btn-add-large" onClick={() => {
                        addToCart(selectedProduct);
                        setSelectedProduct(null);
                     }}>
                       <ShoppingCart size={20} />
                       Себетке кошуу
                     </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <footer className="footer">
         <div className="container">
           <div className="footer-grid">
             <div className="footer-col">
               <h3>NEMAN<span>.KG</span></h3>
               <p>Кыргызстандагы эң ири дарыкана тармагы.</p>
               <p style={{marginTop: '10px', color: '#fff'}}>Дарегибиз: Ош шаары, Исанов көчөсү</p>
             </div>
              <div className="footer-col">
                <h4>Байланыш</h4>
                <a href="https://wa.me/996220688410" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                  +996 220 688 410 (WhatsApp)
                </a>
                <a href="mailto:info@neman.kg" className="footer-contact-link">
                  info@neman.kg
                </a>
              </div>
           </div>
           <div className="footer-bottom">
             &copy; 2026 Неман-Фарм. Бардык укуктар корголгон.
           </div>
         </div>
      </footer>
    </div>
  );
};

export default App;
