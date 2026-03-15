import React from 'react';
import { Search, ShoppingBag, User, Menu, Phone, MapPin } from 'lucide-react';

const categories = [
  'Баардык товарлар',
  'Дары-дармектер',
  'Витаминдер',
  'Эне жана бала',
  'Косметика',
  'Медициналык техника',
  'Ортопедия'
];

const Header = ({ searchQuery, onSearchChange, cartItemsCount, onCartClick, onCategoryChange, activeCategory, onNotice }) => {
  return (
    <header className="header">

      {/* Main Header */}
      <div className="header-main container flex justify-between align-center py-4">
        <div className="logo cursor-pointer" onClick={() => {
          onCategoryChange('Баардык товарлар');
          onSearchChange('');
        }}>
          <h1 className="logo-text">NEMAN<span>.KG</span></h1>
        </div>
        
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Симптом же дарынын аты..." 
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <button className="btn-search"><Search size={20} /></button>
        </div>

        <div className="header-actions flex gap-6">
          <div className="action-btn cart-icon-wrapper" onClick={onCartClick}>
            <ShoppingBag size={24} />
            <span className="cart-label">Себет</span>
            {cartItemsCount > 0 && <span className="badge">{cartItemsCount}</span>}
          </div>
        </div>
      </div>

      <nav className="header-nav">
        <div className="container">
          <ul className="nav-list">
            {categories.map((cat) => (
              <li key={cat}>
                <button 
                  className={`nav-link-btn ${activeCategory === cat ? 'active' : ''}`}
                  onClick={() => onCategoryChange(cat)}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
