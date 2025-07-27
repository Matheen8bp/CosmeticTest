"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, ShoppingCart, Star, Filter, Sparkles, Heart, Eye, Settings } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Face Cream",
    brand: "GlowSkin",
    category: "Skincare",
    price: 2200,
    originalPrice: 2500,
    rating: 4.8,
    reviews: 124,
    image: "/placeholder.svg?height=200&width=200",
    description: "Advanced anti-aging face cream with hyaluronic acid and vitamin C",
    inStock: true,
    discount: 12,
  },
  {
    id: 2,
    name: "Luxury Lipstick Set",
    brand: "ColorPop",
    category: "Makeup",
    price: 1600,
    originalPrice: 1800,
    rating: 4.6,
    reviews: 89,
    image: "/placeholder.svg?height=200&width=200",
    description: "Set of 3 long-lasting matte lipsticks in trending shades",
    inStock: true,
    discount: 11,
  },
  {
    id: 3,
    name: "Anti-Aging Serum",
    brand: "YouthGlow",
    category: "Skincare",
    price: 2800,
    originalPrice: 3200,
    rating: 4.9,
    reviews: 156,
    image: "/placeholder.svg?height=200&width=200",
    description: "Powerful retinol serum for fine lines and wrinkles",
    inStock: true,
    discount: 13,
  },
  {
    id: 4,
    name: "Foundation Kit",
    brand: "PerfectBase",
    category: "Makeup",
    price: 1200,
    originalPrice: 1500,
    rating: 4.4,
    reviews: 67,
    image: "/placeholder.svg?height=200&width=200",
    description: "Full coverage foundation with concealer and setting powder",
    inStock: false,
    discount: 20,
  },
  {
    id: 5,
    name: "Hair Serum",
    brand: "SilkStrands",
    category: "Hair Care",
    price: 1800,
    originalPrice: 2000,
    rating: 4.5,
    reviews: 92,
    image: "/placeholder.svg?height=200&width=200",
    description: "Nourishing hair serum for damaged and dry hair",
    inStock: true,
    discount: 10,
  },
  {
    id: 6,
    name: "Eye Shadow Palette",
    brand: "ColorPop",
    category: "Makeup",
    price: 2000,
    originalPrice: 2400,
    rating: 4.7,
    reviews: 134,
    image: "/placeholder.svg?height=200&width=200",
    description: "12-shade eyeshadow palette with shimmer and matte finishes",
    inStock: true,
    discount: 17,
  },
]

export default function CustomerStorePage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [sortBy, setSortBy] = useState("featured")
  const [cart, setCart] = useState<number[]>([])

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.brand.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || product.category.toLowerCase() === categoryFilter
    return matchesSearch && matchesCategory
  })

  const addToCart = (productId: number) => {
    setCart([...cart, productId])
  }

  const removeFromCart = (productId: number) => {
    setCart(cart.filter((id) => id !== productId))
  }

  const isInCart = (productId: number) => cart.includes(productId)

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-cyan-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">CosmetiCare Store</h1>
                <p className="text-xs text-gray-600">Premium Beauty Products</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent"
                onClick={() => (window.location.href = "/customer/settings")}
              >
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
              <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                <Heart className="w-4 h-4 mr-2" />
                Wishlist
              </Button>
              <Button className="bg-cyan-500 hover:bg-cyan-600 text-white relative">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {cart.length > 0 && (
                  <Badge className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-1 min-w-[20px] h-5 flex items-center justify-center rounded-full">
                    {cart.length}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Discover Premium Beauty Products</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Shop from our curated collection of high-quality cosmetics and skincare products
          </p>
        </div>

        {/* Filters */}
        <Card className="border-cyan-200 mb-8">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <Input
                  placeholder="Search products or brands..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="skincare">Skincare</SelectItem>
                  <SelectItem value="makeup">Makeup</SelectItem>
                  <SelectItem value="hair care">Hair Care</SelectItem>
                  <SelectItem value="fragrance">Fragrance</SelectItem>
                </SelectContent>
              </Select>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full md:w-48">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="featured">Featured</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Highest Rated</SelectItem>
                  <SelectItem value="newest">Newest</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                More Filters
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="border-cyan-200 hover:shadow-lg transition-shadow duration-200">
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  {product.discount > 0 && (
                    <Badge className="absolute top-2 left-2 bg-cyan-500 text-white">{product.discount}% OFF</Badge>
                  )}
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-t-lg">
                      <Badge variant="destructive" className="bg-cyan-600 text-white">
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2 bg-white hover:bg-gray-100 text-gray-600"
                  >
                    <Heart className="w-4 h-4" />
                  </Button>
                </div>

                <div className="p-4">
                  <div className="mb-2">
                    <Badge variant="outline" className="text-xs text-cyan-600 border-cyan-200">
                      {product.brand}
                    </Badge>
                  </div>

                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{product.description}</p>

                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(product.rating) ? "text-cyan-400 fill-current" : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews})
                    </span>
                  </div>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-lg font-bold text-gray-900">₹{product.price.toLocaleString()}</span>
                      {product.originalPrice > product.price && (
                        <span className="text-sm text-gray-500 line-through">
                          ₹{product.originalPrice.toLocaleString()}
                        </span>
                      )}
                    </div>
                    <Badge className="bg-cyan-100 text-cyan-700">{product.category}</Badge>
                  </div>

                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent"
                    >
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </Button>
                    <Button
                      size="sm"
                      className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white"
                      disabled={!product.inStock}
                      onClick={() => (isInCart(product.id) ? removeFromCart(product.id) : addToCart(product.id))}
                    >
                      <ShoppingCart className="w-4 h-4 mr-1" />
                      {isInCart(product.id) ? "Remove" : "Add to Cart"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
