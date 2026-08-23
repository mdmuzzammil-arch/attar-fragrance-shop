// Product Data
const products = [
    {
        id: 1,
        name: "Oud Premium",
        category: "Oud Collection",
        price: 89.99,
        description: "Pure oud fragrance with rich woody notes",
        icon: "🧴"
    },
    {
        id: 2,
        name: "Rose Delight",
        category: "Floral Collection",
        price: 64.99,
        description: "Elegant rose attar with delicate floral blend",
        icon: "🌹"
    },
    {
        id: 3,
        name: "Sandalwood Essence",
        category: "Oriental Collection",
        price: 74.99,
        description: "Pure sandalwood oil with warm undertones",
        icon: "🧴"
    },
    {
        id: 4,
        name: "Jasmine Dream",
        category: "Floral Collection",
        price: 59.99,
        description: "Exotic jasmine attar with sweet notes",
        icon: "🌸"
    },
    {
        id: 5,
        name: "Musk Legacy",
        category: "Premium Collection",
        price: 99.99,
        description: "Timeless musk fragrance with depth and complexity",
        icon: "✨"
    },
    {
        id: 6,
        name: "Amber Luxe",
        category: "Warm Collection",
        price: 79.99,
        description: "Warm amber with precious wood notes",
        icon: "🧡"
    }
];

// Shopping Cart
let cart = [];

// Initialize Page
document.addEventListener('DOMContentLoaded', function() {
    displayProducts();
    setupEventListeners();
    loadCartFromLocalStorage();
});

// Display Products
function displayProducts() {
    const productsGrid = document.getElementById('products-grid');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <div class="product-image">${product.icon}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-category">${product.category}</p>
                <p class="product-description">${product.description}</p>
                <p class="product-price">$${product.price.toFixed(2)}</p>
                <div class="product-rating">
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star"></i>
                    <i class="fas fa-star-half-alt"></i>
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-shopping-cart"></i> Add to Cart
                </button>
            </div>
        `;
        productsGrid.appendChild(productCard);
    });
}

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    updateCartCount();
    saveCartToLocalStorage();
    showNotification(`${product.name} added to cart!`);
}

// Update Cart Count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

// Display Cart
function displayCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartTotalDiv = document.getElementById('cart-total');
    
    cartItemsDiv.innerHTML = '';
    
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p style="text-align: center; color: #999;">Your cart is empty</p>';
        cartTotalDiv.textContent = 'Total: $0.00';
        return;
    }
    
    let total = 0;
    
    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        total += itemTotal;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div style="font-size: 0.9rem; color: #666;">
                    Quantity: <input type="number" min="1" value="${item.quantity}" 
                    onchange="updateQuantity(${item.id}, this.value)" style="width: 50px; padding: 5px;">
                </div>
                <div class="cart-item-price">$${itemTotal.toFixed(2)}</div>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i> Remove
            </button>
        `;
        cartItemsDiv.appendChild(cartItem);
    });
    
    cartTotalDiv.textContent = `Total: $${total.toFixed(2)}`;
}

// Update Quantity
function updateQuantity(productId, newQuantity) {
    newQuantity = parseInt(newQuantity);
    
    if (newQuantity <= 0) {
        removeFromCart(productId);
        return;
    }
    
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = newQuantity;
        updateCartCount();
        displayCart();
        saveCartToLocalStorage();
    }
}

// Remove from Cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartCount();
    displayCart();
    saveCartToLocalStorage();
    showNotification('Item removed from cart');
}

// Checkout
function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    alert(`Thank you for your order!\n\nOrder Total: $${total.toFixed(2)}\n\nYour order has been placed successfully. We'll contact you soon with shipping details.`);
    
    cart = [];
    updateCartCount();
    displayCart();
    saveCartToLocalStorage();
    closeModal();
}

// Setup Event Listeners
function setupEventListeners() {
    // Cart Modal
    const cartIcon = document.getElementById('cart-icon');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.querySelector('.close');
    
    cartIcon.addEventListener('click', function(e) {
        e.preventDefault();
        displayCart();
        cartModal.classList.add('show');
    });
    
    closeBtn.addEventListener('click', closeModal);
    
    cartModal.addEventListener('click', function(e) {
        if (e.target === cartModal) {
            closeModal();
        }
    });
    
    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        showNotification('Message sent successfully! We\'ll get back to you soon.');
        contactForm.reset();
    });
}

// Close Modal
function closeModal() {
    document.getElementById('cart-modal').classList.remove('show');
}

// Show Notification
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background-color: #27ae60;
        color: white;
        padding: 15px 20px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        z-index: 300;
        animation: slideIn 0.3s ease;
    `;
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// LocalStorage Functions
function saveCartToLocalStorage() {
    localStorage.setItem('attarCart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const savedCart = localStorage.getItem('attarCart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartCount();
    }
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add CSS Animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);
