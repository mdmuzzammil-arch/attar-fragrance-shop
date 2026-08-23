# Attar & Fragrance Shop Website

A modern, responsive e-commerce website for a premium Attar and Fragrance shop built with HTML, CSS, and JavaScript.

## Features

### 🛍️ Core Features
- **Product Showcase** - Display premium fragrances and attars with descriptions and pricing
- **Shopping Cart** - Add/remove items, update quantities, and persistent cart storage
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Navigation** - Smooth scrolling between sections
- **Contact Form** - Customer inquiry form for direct communication

### 🎨 Design
- Luxurious color scheme (warm browns and golds)
- Beautiful gradient effects and animations
- Modern card-based product layout
- Professional footer with social media links

### 💾 Functionality
- Local storage for cart persistence
- Real-time cart updates
- Product quantity management
- Toast notifications for user actions
- Modal cart view

## File Structure

```
attar-fragrance-shop/
├── index.html      # Main HTML structure
├── styles.css      # Complete styling and animations
├── script.js       # JavaScript functionality
└── README.md       # Documentation
```

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or server required!

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/attar-fragrance-shop.git
cd attar-fragrance-shop
```

2. Open the website:
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
   ```bash
   python -m http.server 8000
   # Then visit http://localhost:8000
   ```

## Features Overview

### Navigation
- Sticky navigation bar with logo and menu
- Shopping cart icon with item counter
- Quick access to all sections

### Hero Section
- Eye-catching banner with call-to-action button
- Professional gradients and typography

### Product Section
- Grid layout with 6 sample products
- Each product card includes:
  - Product image (emoji icon)
  - Name and category
  - Description
  - Price
  - Star rating
  - Add to cart button

### Shopping Cart
- Modal popup for cart management
- View all items and quantities
- Update quantities inline
- Remove items
- Calculate total price
- Persistent storage using localStorage

### About Section
- Company information
- Key features highlight
- Professional layout

### Contact Section
- Contact information (phone, email, address)
- Contact form for inquiries
- Professional design

## Customization Guide

### 1. Update Product Information
Edit the `products` array in `script.js`:
```javascript
const products = [
    {
        id: 1,
        name: "Your Product Name",
        category: "Category",
        price: 99.99,
        description: "Product description",
        icon: "🧴"  // Use any emoji
    },
    // ... more products
];
```

### 2. Change Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary-color: #8B4513;      /* Brown */
    --secondary-color: #D2691E;    /* Dark Orange */
    --text-color: #333;
    --light-bg: #f9f7f4;
    --white: #ffffff;
}
```

### 3. Update Contact Information
Edit the contact section in `index.html`:
```html
<p>+1 (555) 123-4567</p>  <!-- Phone -->
<p>info@attarfragrance.com</p>  <!-- Email -->
<p>123 Fragrance Lane, Beauty City, BC 12345</p>  <!-- Address -->
```

### 4. Add Your Logo
Replace the navbar brand text:
```html
<div class="nav-brand">
    <img src="your-logo.png" alt="Logo" style="height: 40px;">
    <span>Your Shop Name</span>
</div>
```

## Browser Compatibility
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Responsive Breakpoints
- Desktop: 1200px and above
- Tablet: 768px to 1199px
- Mobile: Below 768px

## Features Implementation

### Cart Persistence
The shopping cart is saved to browser's localStorage, so items remain even after closing the browser.

### Notifications
Toast notifications appear for user actions:
- Product added to cart
- Item removed from cart
- Form submission

### Smooth Animations
- Product cards hover effect
- Navigation link hover effects
- Modal slide-in animation
- Fade-in animations for hero section

## Deployment

### Deploy to GitHub Pages
1. Push your changes to GitHub
2. Go to repository Settings → Pages
3. Select main branch as source
4. Your site will be live at `https://yourusername.github.io/attar-fragrance-shop/`

### Deploy to Other Platforms
- **Netlify**: Drag and drop the folder
- **Vercel**: Connect your GitHub repo
- **Firebase Hosting**: Follow Firebase documentation

## Future Enhancements

Potential features to add:
- [ ] Backend integration for payment processing
- [ ] Product filtering and search
- [ ] User authentication and accounts
- [ ] Order history
- [ ] Product reviews and ratings
- [ ] Newsletter subscription
- [ ] Admin dashboard for inventory management
- [ ] Multiple payment methods
- [ ] Shipping calculator
- [ ] Blog or fragrance guide

## License

This project is open source and available under the MIT License.

## Support

For questions or suggestions, please:
1. Open an issue on GitHub
2. Contact us at info@attarfragrance.com
3. Visit our website for more information

---

**Built with ❤️ for fragrance lovers everywhere**
