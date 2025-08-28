import React, { useState } from 'react';

// --- Helper Components for better structure ---

// Icon components for clarity and reusability
const Star = ({ filled, half }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={filled || half ? 'currentColor' : 'none'}
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="text-yellow-500 w-5 h-5"
  >
    <defs>
      {half && (
        <linearGradient id="half-fill">
          <stop offset="50%" stopColor="currentColor" />
          <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
        </linearGradient>
      )}
    </defs>
    <polygon
      points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
      fill={half ? 'url(#half-fill)' : 'currentColor'}
    />
  </svg>
);

const ShoppingCartIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-shopping-cart"
  >
    <circle cx="8" cy="21" r="1" />
    <circle cx="19" cy="21" r="1" />
    <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
  </svg>
);

const PlusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-plus w-4 h-4"
  >
    <path d="M5 12h14" />
    <path d="M12 5v14" />
  </svg>
);

const MinusIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-minus w-4 h-4"
  >
    <path d="M5 12h14" />
  </svg>
);

// --- Main App Component ---

export default function App() {
  // --- State Management ---
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);
  const [showNotification, setShowNotification] = useState(false);

  // --- Product Data ---
  const product = {
    name: 'Classic Leather Watch',
    brand: 'Timeless Co.',
    price: 12499,
    originalPrice: 24999,
    rating: 4.5,
    reviews: 128,
    description:
      'Experience the perfect blend of classic design and modern functionality. This exquisite timepiece features a genuine leather strap, a scratch-resistant sapphire crystal face, and precision quartz movement for unparalleled accuracy. Water-resistant up to 50 meters.',
    images: [
      'https://placehold.co/600x600/E2E8F0/4A5568?text=Watch+Face',
      'https://placehold.co/600x600/CBD5E0/4A5568?text=Side+View',
      'https://placehold.co/600x600/BEE3F8/2C5282?text=Strap+Detail',
      'https://placehold.co/600x600/A0AEC0/2D3748?text=On+Wrist',
    ],
  };

  // --- Event Handlers ---
  const handleQuantityChange = (amount) => {
    setQuantity((prev) => Math.max(1, prev + amount));
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + quantity);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000); // Hide notification after 3 seconds
  };

  // --- Helper to format currency ---
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  // --- Render Logic ---
  return (
    <div className="antialiased bg-gray-100 min-h-screen font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <h1 className="text-2xl font-bold text-gray-800">
              {product.brand}
            </h1>
            <div className="relative">
              <ShoppingCartIcon />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Product Image Gallery */}
          <div className="flex flex-col items-center">
            <div className="w-full aspect-square bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <img
                src={product.images[selectedImage]}
                alt={`${product.name} - View ${selectedImage + 1}`}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    'https://placehold.co/600x600/FEE2E2/B91C1C?text=Image+Error';
                }}
              />
            </div>
            <div className="flex space-x-2">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-md overflow-hidden border-2 transition-all duration-200 ${
                    selectedImage === index
                      ? 'border-blue-500 shadow-lg'
                      : 'border-transparent hover:border-gray-300'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        'https://placehold.co/80x80/FEE2E2/B91C1C?text=Error';
                    }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
              {product.name}
            </h2>

            {/* Reviews */}
            <div className="flex items-center mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    filled={i < Math.floor(product.rating)}
                    half={
                      i === Math.floor(product.rating) &&
                      product.rating % 1 !== 0
                    }
                  />
                ))}
              </div>
              <span className="text-gray-600 ml-2 text-sm">
                ({product.reviews} reviews)
              </span>
            </div>

            <p className="text-gray-600 mb-6">{product.description}</p>

            {/* Price */}
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-4xl font-bold text-gray-800">
                {formatCurrency(product.price)}
              </span>
              <span className="text-xl font-semibold text-gray-400 line-through">
                {formatCurrency(product.originalPrice)}
              </span>
              <span className="text-sm font-bold text-red-500 bg-red-100 px-2 py-1 rounded-md">
                50% OFF
              </span>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-lg">
                <button
                  onClick={() => handleQuantityChange(-1)}
                  className="p-3 text-gray-600 hover:bg-gray-100 rounded-l-lg transition-colors duration-200 disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <MinusIcon />
                </button>
                <span className="px-4 text-lg font-semibold">{quantity}</span>
                <button
                  onClick={() => handleQuantityChange(1)}
                  className="p-3 text-gray-600 hover:bg-gray-100 rounded-r-lg transition-colors duration-200"
                >
                  <PlusIcon />
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full sm:w-auto flex-grow bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-all duration-300 transform hover:scale-105"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* "Added to Cart" Notification */}
      <div
        className={`fixed bottom-5 right-5 bg-green-500 text-white py-3 px-5 rounded-lg shadow-xl transition-transform duration-500 ease-in-out ${
          showNotification
            ? 'translate-x-0 opacity-100'
            : 'translate-x-20 opacity-0'
        }`}
      >
        Added to cart!
      </div>
    </div>
  );
}
