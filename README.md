# CosmetiCare - Cosmetics Dealer Management System

A comprehensive web-based dashboard application for managing a cosmetics distribution business with a multi-tier model (Owner → Dealer → End User).

## 🏗️ System Architecture

### Business Model
- **Owner (Admin)**: Buys products at discounted prices from manufacturers, sells to dealers with profit margins
- **Dealers**: Purchase products from owner, sell to end users at profitable rates
- **Customers**: End users who purchase cosmetics from dealers

### User Roles

#### 1. Owner (Admin Dashboard)
- **Route**: `/owner/*`
- **Capabilities**:
  - Add and manage dealers
  - Add and manage products with pricing
  - Track purchase prices from manufacturers
  - Monitor sales, profits, and stock status
  - Analyze dealer performance and product trends

#### 2. Dealer Dashboard
- **Route**: `/dealer/*`
- **Capabilities**:
  - View purchased products from owner
  - Set selling prices for end users
  - Track personal profit and inventory
  - Process sales transactions
  - Monitor earnings and performance

#### 3. Customer Store
- **Route**: `/customer`
- **Capabilities**:
  - Browse and search products
  - View product details and reviews
  - Add products to cart
  - Purchase cosmetics online

## 📊 Data Models

### Product Model
\`\`\`typescript
interface Product {
  id: number
  name: string
  sku: string
  mrp: number                    // Maximum Retail Price
  manufacturerPrice: number      // Owner's purchase price
  ownerToDealer: number         // Calculated with markup
  dealerToEndUser: number       // Set by dealer
  quantity: number
  category: string
  profitMargin: number          // Auto-calculated
}
\`\`\`

### Business Logic
- **Owner Profit** = (Owner-to-Dealer Price - Manufacturer Price) × Quantity
- **Dealer Profit** = (End User Price - Owner-to-Dealer Price) × Quantity
- **Default Markup**: 50% over manufacturer price (configurable)

## 🎨 Design System

### Color Palette
- **Primary**: #FF69B4 (Hot Pink)
- **Secondary**: #FF85C1 (Soft Pink)
- **Background**: #FFFFFF (White)
- **Text Primary**: #333333 (Dark Grey)
- **Text Secondary**: #777777 (Grey)
- **Success**: Green variants
- **Warning**: Yellow variants
- **Error**: Red variants

### UI Components
- **Cards**: Hot pink borders with subtle shadows
- **Badges**: Color-coded for profit levels (Green: High, Yellow: Medium, Red: Low)
- **Charts**: Hot pink color scheme with responsive design
- **Tables**: Interactive with search, filter, sort, and pagination

## 📱 Pages & Routes

### Owner Dashboard (`/owner/`)
1. **Dashboard** (`/dashboard`) - Overview with KPIs and charts
2. **Dealers** (`/dealers`) - Dealer management and performance
3. **Products** (`/products`) - Product catalog and pricing
4. **Transactions** (`/transactions`) - Sales history and payments
5. **Analytics** (`/analytics`) - Business insights and reports
6. **Settings** (`/settings`) - System configuration

### Dealer Dashboard (`/dealer/`)
1. **Dashboard** (`/dashboard`) - Personal performance overview
2. **Inventory** (`/inventory`) - Stock management and pricing
3. **Sell Product** (`/sell`) - Sales interface with profit calculator
4. **Profit Tracker** (`/profits`) - Earnings analysis and history

### Customer Store (`/customer`)
1. **Product Catalog** - Browse and search products
2. **Product Details** - Detailed product information
3. **Shopping Cart** - Cart management
4. **Checkout** - Purchase process

### Authentication (`/login`)
- Dual login system for Owner and Dealer
- Clean two-column layout with branding
- Password recovery functionality

## 🔧 Technical Implementation

### Framework & Libraries
- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **shadcn/ui** for UI components
- **Recharts** for data visualization
- **Lucide React** for icons

### Key Features
- **Responsive Design**: Mobile, tablet, and desktop optimized
- **Real-time Calculations**: Profit margins and pricing
- **Interactive Charts**: Revenue, profit, and performance analytics
- **Advanced Filtering**: Search, sort, and filter across all tables
- **Sidebar Navigation**: Collapsible with proper layout handling

### Component Structure
\`\`\`
components/
├── ui/                 # shadcn/ui components
├── owner-sidebar.tsx   # Owner navigation
├── dealer-sidebar.tsx  # Dealer navigation
└── charts/            # Custom chart components

app/
├── login/             # Authentication
├── owner/             # Owner dashboard pages
├── dealer/            # Dealer dashboard pages
└── customer/          # Customer store
\`\`\`

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation
\`\`\`bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Run development server
npm run dev
\`\`\`

### Environment Setup
Create a `.env.local` file:
\`\`\`env
NEXT_PUBLIC_APP_URL=http://localhost:3000
\`\`\`

## 📈 Business Metrics

### Owner KPIs
- Total Revenue and Profit
- Number of Active Dealers
- Product Performance
- Inventory Turnover
- Dealer Performance Rankings

### Dealer KPIs
- Personal Profit and Margins
- Sales Volume
- Inventory Levels
- Customer Acquisition
- Product Performance

### Analytics Features
- Monthly revenue trends
- Category-wise sales distribution
- Dealer performance comparison
- Product profitability analysis
- Profit margin optimization

## 🔐 Security Features
- Role-based access control
- Secure authentication
- Data validation
- Protected routes
- Session management

## 📱 Responsive Design
- Mobile-first approach
- Tablet optimization
- Desktop enhancement
- Touch-friendly interfaces
- Adaptive layouts

## 🎯 Future Enhancements
- Real-time notifications
- Advanced reporting
- Inventory alerts
- Multi-currency support
- API integrations
- Mobile app development

## 📞 Support
For technical support or business inquiries, contact the development team.

---

**CosmetiCare** - Streamlining cosmetics distribution with modern technology.
