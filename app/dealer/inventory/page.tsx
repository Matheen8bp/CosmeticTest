"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Package, AlertTriangle, TrendingUp, Edit, ShoppingCart } from "lucide-react"

const inventory = [
  {
    id: 1,
    name: "Premium Face Cream",
    sku: "PFC001",
    category: "Skincare",
    buyingPrice: 1500,
    sellingPrice: 2200,
    quantityBought: 50,
    quantitySold: 32,
    remainingStock: 18,
    profit: 22400,
    profitMargin: 46.7,
    lastRestocked: "2024-01-10",
  },
  {
    id: 2,
    name: "Luxury Lipstick Set",
    sku: "LLS002",
    category: "Makeup",
    buyingPrice: 900,
    sellingPrice: 1600,
    quantityBought: 25,
    quantitySold: 18,
    remainingStock: 7,
    profit: 12600,
    profitMargin: 77.8,
    lastRestocked: "2024-01-08",
  },
  {
    id: 3,
    name: "Anti-Aging Serum",
    sku: "AAS003",
    category: "Skincare",
    buyingPrice: 1800,
    sellingPrice: 2800,
    quantityBought: 30,
    quantitySold: 22,
    remainingStock: 8,
    profit: 22000,
    profitMargin: 55.6,
    lastRestocked: "2024-01-12",
  },
  {
    id: 4,
    name: "Foundation Kit",
    sku: "FK004",
    category: "Makeup",
    buyingPrice: 750,
    sellingPrice: 1200,
    quantityBought: 40,
    quantitySold: 35,
    remainingStock: 5,
    profit: 15750,
    profitMargin: 60.0,
    lastRestocked: "2024-01-05",
  },
  {
    id: 5,
    name: "Hair Serum",
    sku: "HS005",
    category: "Hair Care",
    buyingPrice: 1200,
    sellingPrice: 1800,
    quantityBought: 20,
    quantitySold: 12,
    remainingStock: 8,
    profit: 7200,
    profitMargin: 50.0,
    lastRestocked: "2024-01-15",
  },
]

export default function InventoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [editingPrice, setEditingPrice] = useState<number | null>(null)
  const [newPrice, setNewPrice] = useState("")

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.sku.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesCategory = categoryFilter === "all" || item.category.toLowerCase() === categoryFilter

    return matchesSearch && matchesCategory
  })

  const getStockBadge = (stock: number) => {
    if (stock === 0) {
      return (
        <Badge variant="destructive" className="bg-red-100 text-red-700">
          Out of Stock
        </Badge>
      )
    } else if (stock <= 10) {
      return (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
          Low Stock
        </Badge>
      )
    } else {
      return <Badge className="bg-green-100 text-green-700">In Stock</Badge>
    }
  }

  const getProfitBadge = (margin: number) => {
    if (margin >= 60) {
      return <Badge className="bg-green-100 text-green-700">High Profit</Badge>
    } else if (margin >= 40) {
      return <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
    } else {
      return <Badge className="bg-red-100 text-red-700">Low Profit</Badge>
    }
  }

  const handlePriceUpdate = (id: number) => {
    // Update price logic here
    console.log(`Updating price for item ${id} to ${newPrice}`)
    setEditingPrice(null)
    setNewPrice("")
  }

  const totalInventoryValue = inventory.reduce((sum, item) => sum + item.buyingPrice * item.remainingStock, 0)
  const totalProfit = inventory.reduce((sum, item) => sum + item.profit, 0)
  const lowStockItems = inventory.filter((item) => item.remainingStock <= 10).length
  const totalProducts = inventory.length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Inventory Management</h1>
          <p className="text-gray-600">Manage your product inventory and pricing</p>
        </div>
        <Button className="bg-pink-500 hover:bg-pink-600 text-white">
          <ShoppingCart className="w-4 h-4 mr-2" />
          Request Restock
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Products</CardTitle>
            <Package className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalProducts}</div>
            <p className="text-xs text-gray-600">Active products</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Inventory Value</CardTitle>
            <Package className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹{totalInventoryValue.toLocaleString()}</div>
            <p className="text-xs text-gray-600">Current stock value</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹{totalProfit.toLocaleString()}</div>
            <p className="text-xs text-green-600">From sales</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Low Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{lowStockItems}</div>
            <p className="text-xs text-yellow-600">Need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
          <CardDescription>Manage your stock levels and pricing</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search products by name or SKU..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={categoryFilter} onValueChange={setCategoryFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="skincare">Skincare</SelectItem>
                <SelectItem value="makeup">Makeup</SelectItem>
                <SelectItem value="fragrance">Fragrance</SelectItem>
                <SelectItem value="hair care">Hair Care</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border border-pink-100">
            <Table>
              <TableHeader>
                <TableRow className="bg-pink-50">
                  <TableHead className="font-semibold text-gray-900">Product</TableHead>
                  <TableHead className="font-semibold text-gray-900">SKU</TableHead>
                  <TableHead className="font-semibold text-gray-900">Buying Price</TableHead>
                  <TableHead className="font-semibold text-gray-900">Selling Price</TableHead>
                  <TableHead className="font-semibold text-gray-900">Stock</TableHead>
                  <TableHead className="font-semibold text-gray-900">Sold</TableHead>
                  <TableHead className="font-semibold text-gray-900">Profit</TableHead>
                  <TableHead className="font-semibold text-gray-900">Margin</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredInventory.map((item) => (
                  <TableRow key={item.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-500">{item.category}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{item.sku}</TableCell>
                    <TableCell>₹{item.buyingPrice.toLocaleString()}</TableCell>
                    <TableCell>
                      {editingPrice === item.id ? (
                        <div className="flex gap-2">
                          <Input
                            type="number"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                            className="w-24"
                            placeholder={item.sellingPrice.toString()}
                          />
                          <Button
                            size="sm"
                            onClick={() => handlePriceUpdate(item.id)}
                            className="bg-pink-500 hover:bg-pink-600"
                          >
                            Save
                          </Button>
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-pink-600">₹{item.sellingPrice.toLocaleString()}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => {
                              setEditingPrice(item.id)
                              setNewPrice(item.sellingPrice.toString())
                            }}
                            className="text-pink-600 hover:text-pink-700 hover:bg-pink-50"
                          >
                            <Edit className="w-3 h-3" />
                          </Button>
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${
                          item.remainingStock <= 5
                            ? "text-red-600"
                            : item.remainingStock <= 10
                              ? "text-yellow-600"
                              : "text-green-600"
                        }`}
                      >
                        {item.remainingStock}
                      </span>
                    </TableCell>
                    <TableCell>{item.quantitySold}</TableCell>
                    <TableCell className="font-medium text-green-600">₹{item.profit.toLocaleString()}</TableCell>
                    <TableCell>{getProfitBadge(item.profitMargin)}</TableCell>
                    <TableCell>{getStockBadge(item.remainingStock)}</TableCell>
                    <TableCell>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent"
                      >
                        Sell
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
