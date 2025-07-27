"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Calculator, Plus, TrendingUp } from "lucide-react"

const availableProducts = [
  {
    id: 1,
    name: "Premium Face Cream",
    sku: "PFC001",
    buyingPrice: 1500,
    currentSellingPrice: 2200,
    stock: 18,
    category: "Skincare",
  },
  {
    id: 2,
    name: "Luxury Lipstick Set",
    sku: "LLS002",
    buyingPrice: 900,
    currentSellingPrice: 1600,
    stock: 7,
    category: "Makeup",
  },
  {
    id: 3,
    name: "Anti-Aging Serum",
    sku: "AAS003",
    buyingPrice: 1800,
    currentSellingPrice: 2800,
    stock: 8,
    category: "Skincare",
  },
  {
    id: 4,
    name: "Foundation Kit",
    sku: "FK004",
    buyingPrice: 750,
    currentSellingPrice: 1200,
    stock: 5,
    category: "Makeup",
  },
  {
    id: 5,
    name: "Hair Serum",
    sku: "HS005",
    buyingPrice: 1200,
    currentSellingPrice: 1800,
    stock: 8,
    category: "Hair Care",
  },
]

export default function SellProductPage() {
  const [selectedProduct, setSelectedProduct] = useState<number | null>(null)
  const [quantity, setQuantity] = useState("")
  const [sellingPrice, setSellingPrice] = useState("")
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")

  const product = selectedProduct ? availableProducts.find((p) => p.id === selectedProduct) : null

  const calculateProfit = () => {
    if (!product || !quantity || !sellingPrice) return 0
    const totalCost = product.buyingPrice * Number.parseInt(quantity)
    const totalRevenue = Number.parseFloat(sellingPrice) * Number.parseInt(quantity)
    return totalRevenue - totalCost
  }

  const calculateProfitMargin = () => {
    if (!product || !quantity || !sellingPrice) return 0
    const profit = calculateProfit()
    const totalCost = product.buyingPrice * Number.parseInt(quantity)
    return totalCost > 0 ? (profit / totalCost) * 100 : 0
  }

  const handleSale = () => {
    if (!product || !quantity || !sellingPrice || !customerName) {
      alert("Please fill all required fields")
      return
    }

    const saleData = {
      productId: product.id,
      productName: product.name,
      quantity: Number.parseInt(quantity),
      sellingPrice: Number.parseFloat(sellingPrice),
      totalAmount: Number.parseFloat(sellingPrice) * Number.parseInt(quantity),
      profit: calculateProfit(),
      customerName,
      customerPhone,
      date: new Date().toISOString().split("T")[0],
    }

    console.log("Processing sale:", saleData)

    // Reset form
    setSelectedProduct(null)
    setQuantity("")
    setSellingPrice("")
    setCustomerName("")
    setCustomerPhone("")

    alert("Sale recorded successfully!")
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Sell Product</h1>
          <p className="text-gray-600">Process new sales and track profits</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Sale Form */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900">New Sale</CardTitle>
            <CardDescription>Enter sale details and customer information</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Product Selection */}
            <div className="space-y-2">
              <Label htmlFor="product">Select Product</Label>
              <Select
                value={selectedProduct?.toString() || ""}
                onValueChange={(value) => {
                  setSelectedProduct(Number.parseInt(value))
                  const prod = availableProducts.find((p) => p.id === Number.parseInt(value))
                  if (prod) {
                    setSellingPrice(prod.currentSellingPrice.toString())
                  }
                }}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose a product to sell" />
                </SelectTrigger>
                <SelectContent>
                  {availableProducts.map((product) => (
                    <SelectItem key={product.id} value={product.id.toString()}>
                      <div className="flex items-center justify-between w-full">
                        <span>{product.name}</span>
                        <Badge variant="outline" className="ml-2">
                          Stock: {product.stock}
                        </Badge>
                      </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {product && (
              <div className="p-3 bg-pink-50 rounded-lg">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-gray-600">SKU:</span>
                    <span className="ml-2 font-mono">{product.sku}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Category:</span>
                    <span className="ml-2">{product.category}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Your Cost:</span>
                    <span className="ml-2 font-medium">₹{product.buyingPrice}</span>
                  </div>
                  <div>
                    <span className="text-gray-600">Available:</span>
                    <span className="ml-2 font-medium">{product.stock} units</span>
                  </div>
                </div>
              </div>
            )}

            {/* Quantity */}
            <div className="space-y-2">
              <Label htmlFor="quantity">Quantity</Label>
              <Input
                id="quantity"
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                placeholder="Enter quantity"
                max={product?.stock || 0}
                min="1"
              />
              {product && quantity && Number.parseInt(quantity) > product.stock && (
                <p className="text-sm text-red-600">Quantity exceeds available stock ({product.stock})</p>
              )}
            </div>

            {/* Selling Price */}
            <div className="space-y-2">
              <Label htmlFor="sellingPrice">Selling Price per Unit (₹)</Label>
              <Input
                id="sellingPrice"
                type="number"
                value={sellingPrice}
                onChange={(e) => setSellingPrice(e.target.value)}
                placeholder="Enter selling price"
                step="0.01"
              />
            </div>

            {/* Customer Information */}
            <div className="space-y-4 pt-4 border-t">
              <h3 className="font-medium text-gray-900">Customer Information</h3>
              <div className="space-y-2">
                <Label htmlFor="customerName">Customer Name *</Label>
                <Input
                  id="customerName"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  placeholder="Enter customer name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="customerPhone">Phone Number (Optional)</Label>
                <Input
                  id="customerPhone"
                  value={customerPhone}
                  onChange={(e) => setCustomerPhone(e.target.value)}
                  placeholder="Enter phone number"
                />
              </div>
            </div>

            <Button
              onClick={handleSale}
              className="w-full bg-pink-500 hover:bg-pink-600 text-white"
              disabled={
                !product ||
                !quantity ||
                !sellingPrice ||
                !customerName ||
                Number.parseInt(quantity) > (product?.stock || 0)
              }
            >
              <ShoppingCart className="w-4 h-4 mr-2" />
              Complete Sale
            </Button>
          </CardContent>
        </Card>

        {/* Profit Calculator */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900 flex items-center gap-2">
              <Calculator className="w-5 h-5" />
              Profit Calculator
            </CardTitle>
            <CardDescription>Real-time profit calculation for this sale</CardDescription>
          </CardHeader>
          <CardContent>
            {product && quantity && sellingPrice ? (
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Cost</p>
                    <p className="text-lg font-bold text-gray-900">
                      ₹{(product.buyingPrice * Number.parseInt(quantity)).toLocaleString()}
                    </p>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-600">Total Revenue</p>
                    <p className="text-lg font-bold text-gray-900">
                      ₹{(Number.parseFloat(sellingPrice) * Number.parseInt(quantity)).toLocaleString()}
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-green-600">Total Profit</p>
                      <p className="text-2xl font-bold text-green-700">₹{calculateProfit().toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-green-600">Profit Margin</p>
                      <div className="flex items-center gap-1">
                        <TrendingUp className="w-4 h-4 text-green-500" />
                        <span className="text-xl font-bold text-green-700">{calculateProfitMargin().toFixed(1)}%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Breakdown:</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cost per unit:</span>
                      <span>₹{product.buyingPrice.toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Selling price per unit:</span>
                      <span>₹{Number.parseFloat(sellingPrice).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Profit per unit:</span>
                      <span className="text-green-600">
                        ₹{(Number.parseFloat(sellingPrice) - product.buyingPrice).toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Quantity:</span>
                      <span>{quantity} units</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Calculator className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-500">Select a product and enter details to see profit calculation</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Quick Actions</CardTitle>
          <CardDescription>Frequently used products for quick sales</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {availableProducts.slice(0, 3).map((product) => (
              <div
                key={product.id}
                className="p-4 border border-pink-100 rounded-lg hover:bg-pink-50 transition-colors"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-medium text-gray-900">{product.name}</h3>
                  <Badge variant="outline" className="text-xs">
                    {product.stock} left
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">
                  ₹{product.currentSellingPrice} (Cost: ₹{product.buyingPrice})
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent"
                  onClick={() => {
                    setSelectedProduct(product.id)
                    setSellingPrice(product.currentSellingPrice.toString())
                  }}
                >
                  <Plus className="w-3 h-3 mr-1" />
                  Quick Sell
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
