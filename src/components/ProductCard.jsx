import React from 'react';
import { ShoppingCart, Heart, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const ProductCard = ({ product, onAddToCart, onShowDetail, onNotice }) => {
  const discount = product.oldPrice ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100) : 0;

  return (
    <motion.div 
      className="product-card"
      whileHover={{ y: -8 }}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      layout
    >
      <div className="card-image-wrap" onClick={() => onShowDetail(product)}>
        <img src={product.image} alt={product.name} />
        {product.isPrescriptionRequired && (
          <div className="badge-prescription">
            <AlertCircle size={12} />
            <span>Рецепт</span>
          </div>
        )}
        {discount > 0 && <div className="badge-discount">-{discount}%</div>}
        <button className="wishlist-btn" onClick={(e) => { 
          e.stopPropagation(); 
          onNotice("Избранноего кошулду!"); 
        }}><Heart size={18} /></button>
      </div>

      <div className="card-info">
        <div className="price-tag">
          <span className="price-now">{product.price} сом</span>
          {product.oldPrice && <span className="price-before">{product.oldPrice} сом</span>}
        </div>
        <h3 className="product-name" onClick={() => onShowDetail(product)}>{product.name}</h3>
        <p className="product-category">{product.category}</p>
        
        <div className="card-footer">
          <button className="btn-add" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>
            <ShoppingCart size={18} />
            Себетке
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
