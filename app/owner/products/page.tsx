"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Package, TrendingUp, AlertTriangle } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Premium Face Cream",
    sku: "PFC001",
    mrp: 2500,
    manufacturerPrice: 1000,
    ownerToDealer: 1500,
    quantity: 150,
    category: "Skincare",
    status: "In Stock",
    profitMargin: 50,
  },
  {
    id: 2,
    name: "Luxury Lipstick Set",
    sku: "LLS002",
    mrp: 1800,
    manufacturerPrice: 600,
    ownerToDealer: 900,
    quantity: 75,
    category: "Makeup",
    status: "Low Stock",
    profitMargin: 50,
  },
  {
    id: 3,
    name: "Anti-Aging Serum",
    sku: "AAS003",
    mrp: 3200,
    manufacturerPrice: 1200,
    ownerToDealer: 1800,
    quantity: 200,
    category: "Skincare",
    status: "In Stock",
    profitMargin: 50,
  },
  {
    id: 4,
    name: "Foundation Kit",
    sku: "FK004",
    mrp: 1500,
    manufacturerPrice: 500,
    ownerToDealer: 750,
    quantity: 0,
    category: "Makeup",
    status: "Out of Stock",
    profitMargin: 50,
  },
]

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newProduct, setNewProduct] = useState({
    name: "",
    sku: "",
    mrp: "",
    manufacturerPrice: "",
    quantity: "",
    category: "",
  })

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.sku.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string, quantity: number) => {
    if (status === "Out of Stock" || quantity === 0) {
      return (
        <Badge variant="destructive" className="bg-red-100 text-red-700">
          Out of Stock
        </Badge>
      )
    } else if (status === "Low Stock" || quantity < 100) {
      return (
        <Badge variant="secondary" className="bg-yellow-100 text-yellow-700">
          Low Stock
        </Badge>
      )
    } else {
      return (
        <Badge variant="secondary" className="bg-green-100 text-green-700">
          In Stock
        </Badge>
      )
    }
  }

  const getProfitBadge = (profit: number) => {
    if (profit >= 40) {
      return <Badge className="bg-green-100 text-green-700">High Profit</Badge>
    } else if (profit >= 20) {
      return <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
    } else {
      return <Badge className="bg-red-100 text-red-700">Low Profit</Badge>
    }
  }

  const calculateOwnerToDealer = (manufacturerPrice: number, margin = 50) => {
    return manufacturerPrice * (1 + margin / 100)
  }

  const handleAddProduct = () => {
    // Add product logic here
    console.log("Adding product:", newProduct)
    setIsAddDialogOpen(false)
    setNewProduct({
      name: "",
      sku: "",
      mrp: "",
      manufacturerPrice: "",
      quantity: "",
      category: "",
    })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600">Manage your product inventory and pricing</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Product
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Product</DialogTitle>
              <DialogDescription>Add a new product to your inventory with pricing details.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Product Name</Label>
                  <Input
                    id="name"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    placeholder="Enter product name"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="sku">SKU</Label>
                  <Input
                    id="sku"
                    value={newProduct.sku}
                    onChange={(e) => setNewProduct({ ...newProduct, sku: e.target.value })}
                    placeholder="e.g., PFC001"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mrp">MRP (₹)</Label>
                  <Input
                    id="mrp"
                    type="number"
                    value={newProduct.mrp}
                    onChange={(e) => setNewProduct({ ...newProduct, mrp: e.target.value })}
                    placeholder="Maximum Retail Price"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="manufacturerPrice">Manufacturer Price (₹)</Label>
                  <Input
                    id="manufacturerPrice"
                    type="number"
                    value={newProduct.manufacturerPrice}
                    onChange={(e) => setNewProduct({ ...newProduct, manufacturerPrice: e.target.value })}
                    placeholder="Your purchase price"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="quantity">Quantity</Label>
                  <Input
                    id="quantity"
                    type="number"
                    value={newProduct.quantity}
                    onChange={(e) => setNewProduct({ ...newProduct, quantity: e.target.value })}
                    placeholder="Stock quantity"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Select
                    value={newProduct.category}
                    onValueChange={(value) => setNewProduct({ ...newProduct, category: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="skincare">Skincare</SelectItem>
                      <SelectItem value="makeup">Makeup</SelectItem>
                      <SelectItem value="fragrance">Fragrance</SelectItem>
                      <SelectItem value="haircare">Hair Care</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              {newProduct.manufacturerPrice && (
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>Calculated Dealer Price:</strong> ₹
                    {calculateOwnerToDealer(Number.parseInt(newProduct.manufacturerPrice)).toFixed(2)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">Based on 50% margin over manufacturer price</p>
                </div>
              )}
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddProduct} className="bg-green-500 hover:bg-green-600">
                Add Product
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Products</CardTitle>
            <Package className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{products.length}</div>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Stock</CardTitle>
            <Package className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {products.reduce((sum, product) => sum + product.quantity, 0)}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Low Stock Items</CardTitle>
            <AlertTriangle className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{products.filter((p) => p.quantity < 100).length}</div>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg. Profit Margin</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">50%</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filters */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle>Product Inventory</CardTitle>
          <CardDescription>Manage your product catalog and pricing</CardDescription>
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
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Categories</SelectItem>
                <SelectItem value="skincare">Skincare</SelectItem>
                <SelectItem value="makeup">Makeup</SelectItem>
                <SelectItem value="fragrance">Fragrance</SelectItem>
                <SelectItem value="haircare">Hair Care</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Products Table */}
          <div className="rounded-md border border-green-100">
            <Table>
              <TableHeader>
                <TableRow className="bg-green-50">
                  <TableHead className="font-semibold text-gray-900">Product</TableHead>
                  <TableHead className="font-semibold text-gray-900">SKU</TableHead>
                  <TableHead className="font-semibold text-gray-900">MRP</TableHead>
                  <TableHead className="font-semibold text-gray-900">Mfg. Price</TableHead>
                  <TableHead className="font-semibold text-gray-900">Dealer Price</TableHead>
                  <TableHead className="font-semibold text-gray-900">Stock</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">Profit</TableHead>
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProducts.map((product) => (
                  <TableRow key={product.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">{product.name}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                      </div>
                    </TableCell>
                    <TableCell className="font-mono text-sm">{product.sku}</TableCell>
                    <TableCell className="font-medium">₹{product.mrp.toLocaleString()}</TableCell>
                    <TableCell>₹{product.manufacturerPrice.toLocaleString()}</TableCell>
                    <TableCell className="font-medium text-green-600">
                      ₹{product.ownerToDealer.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <span
                        className={`font-medium ${product.quantity < 50 ? "text-red-600" : product.quantity < 100 ? "text-yellow-600" : "text-green-600"}`}
                      >
                        {product.quantity}
                      </span>
                    </TableCell>
                    <TableCell>{getStatusBadge(product.status, product.quantity)}</TableCell>
                    <TableCell>{getProfitBadge(product.profitMargin)}</TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-green-600 hover:text-green-700 hover:bg-green-50"
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700 hover:bg-red-50">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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
