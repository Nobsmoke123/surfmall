# 🛒 React Shopping Cart UI

A modern, responsive shopping cart application built with React, TypeScript, and Tailwind CSS. This project demonstrates a complete e-commerce UI with product catalog, shopping cart functionality, and persistent cart storage using localStorage and the React Context API.

## ✨ Features

- **Product Catalog**: Browse a collection of products with images, descriptions, prices, and ratings
- **Shopping Cart**: Add/remove items from cart with quantity management
- **Cart Persistence**: Cart data is automatically saved to localStorage and persists across page refreshes
- **Real-time Updates**: Cart count and total amount update instantly when items are added or removed
- **Responsive Design**: Modern, mobile-friendly UI built with Tailwind CSS
- **Type Safety**: Full TypeScript support for better code reliability
- **Context API**: State management using React Context API for products and cart
- **Mock API**: JSON Server integration for simulating backend API calls

## 🚀 Tech Stack

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server
- **Tailwind CSS 4.1.17** - Utility-first CSS framework
- **React Icons 5.5.0** - Icon library
- **JSON Server 1.0.0** - Mock REST API server
- **ESLint** - Code linting

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18 or higher recommended)
- **npm** or **yarn** package manager

## 🛠️ Installation

1. **Clone the repository** (or navigate to the project directory):

   ```bash
   cd react-shopping-cart-ui
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

## 🎯 Running the Application

The application requires two servers to run: the Vite dev server and the JSON Server for the mock API.

### Option 1: Run in Separate Terminals

1. **Start the JSON Server** (in one terminal):

   ```bash
   npm run json-server
   ```

   This starts the mock API server on `http://localhost:5001`

2. **Start the Vite dev server** (in another terminal):
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5173` (or the port shown in the terminal)

### Option 2: Run Both Servers

You can run both servers in separate terminal windows/tabs, or use a process manager like `concurrently` if you prefer.

## 📁 Project Structure

```
react-shopping-cart-ui/
├── public/
│   └── images/          # Product images
├── src/
│   ├── assets/          # Static assets
│   ├── components/      # React components
│   │   ├── CartItem.tsx      # Individual cart item component
│   │   ├── Header.tsx        # Header with cart dropdown
│   │   ├── ProductCard.tsx   # Product display card
│   │   └── ProductList.tsx   # Product grid container
│   ├── context/         # React Context providers
│   │   ├── CartContext.tsx    # Cart state management
│   │   └── ProductContext.tsx # Product data fetching
│   ├── data/
│   │   └── db.json      # Mock product data (JSON Server)
│   ├── types/           # TypeScript type definitions
│   │   ├── Cart.ts      # Cart-related types
│   │   └── Product.ts  # Product type definition
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── package.json
├── vite.config.ts       # Vite configuration
└── tsconfig.json        # TypeScript configuration
```

## 🧩 Key Components

### App.tsx

The main application component that renders the header and product list. Handles loading and error states from the product context.

### Header.tsx

- Displays the application logo/title
- Shows shopping cart icon with item count badge
- Contains a dropdown cart view that toggles on click
- Displays cart items, total amount, and checkout button

### ProductList.tsx

Renders a grid of product cards from the products array.

### ProductCard.tsx

- Displays individual product information (image, name, description, price)
- Includes an "Add to Cart" button
- Handles adding products to the cart

### CartItem.tsx

- Displays individual items in the cart dropdown
- Shows product details, quantity, and subtotal
- Provides controls to increase/decrease item quantity

## 🔄 Context API

### ProductContext

- Fetches product data from the mock API (`/api/products`)
- Manages loading and error states
- Provides products to components via `useProducts()` hook

### CartContext

- Manages shopping cart state
- Persists cart to localStorage
- Calculates cart count and total amount
- Provides `addToCart()` and `removeFromCart()` functions
- Accessible via `useCart()` hook

## 📊 Data Structure

### Product Type

```typescript
type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  quantity: number; // Available stock
  category: string;
  rating: number;
  image: string;
};
```

### Cart Types

```typescript
type CartProduct = {
  id: string; // Unique cart item ID
  product: Product; // Product details
  quantity: number; // Quantity in cart
  price: number; // Total price (quantity * product.price)
};

type Cart = {
  cart: CartProduct[];
  cartCount: number; // Total items in cart
  amount: number; // Total cart value
};
```

## 📜 Available Scripts

- `npm run dev` - Start the Vite development server
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run json-server` - Start the JSON Server mock API on port 5001

## ⚙️ Configuration

### Vite Proxy Configuration

The application uses Vite's proxy feature to forward API requests:

- Requests to `/api/*` are proxied to `http://localhost:5001`
- This allows seamless API calls without CORS issues during development

### JSON Server

The mock API server serves product data from `src/data/db.json`. You can modify this file to add, remove, or update products.

## 🎨 Styling

The project uses Tailwind CSS for styling:

- Utility-first CSS approach
- Responsive design with mobile-first breakpoints
- Custom color scheme and spacing
- Hover effects and transitions

## 💾 Local Storage

Cart data is automatically saved to browser localStorage:

- Cart persists across page refreshes
- Data is stored under the key `"cart"`
- Automatically synced when cart items change

## 🔧 Development Notes

- The application uses React 19 with the new JSX transform
- TypeScript strict mode is enabled
- ESLint is configured for React and TypeScript
- The project follows modern React patterns with hooks and context

## 🚧 Future Enhancements

Potential improvements for the project:

- Product search and filtering
- Category-based filtering
- Product detail pages
- User authentication
- Order history
- Payment integration
- Product reviews and ratings display
- Inventory management (prevent adding out-of-stock items)

## 📝 License

This project is private and not licensed for public use.

## 👤 Author

Built as a demonstration of modern React development practices with TypeScript and Tailwind CSS.

---

**Happy Shopping! 🛒**
