"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ShoppingCart, DollarSign, Package, TrendingUp, Plus, Eye } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const profitData = [
  { month: "Jan", profit: 8500, sales: 25000 },
  { month: "Feb", profit: 12000, sales: 35000 },
  { month: "Mar", profit: 9500, sales: 28000 },
  { month: "Apr", profit: 15000, sales: 42000 },
  { month: "May", profit: 11000, sales: 32000 },
  { month: "Jun", profit: 18000, sales: 48000 },
]

const recentSales = [
  {
    id: 1,
    product: "Premium Face Cream",
    customer: "Sarah Johnson",
    quantity: 2,
    salePrice: 2200,
    buyPrice: 1500,
    profit: 1400,
    date: "2024-01-15",
  },
  {
    id: 2,
    product: "Luxury Lipstick Set",
    customer: "Emma Davis",
    quantity: 1,
    salePrice: 1600,
    buyPrice: 900,
    profit: 700,
    date: "2024-01-15",
  },
  {
    id: 3,
    product: "Anti-Aging Serum",
    customer: "Lisa Wilson",
    quantity: 1,
    salePrice: 2800,
    buyPrice: 1800,
    profit: 1000,
    date: "2024-01-14",
  },
  {
    id: 4,
    product: "Foundation Kit",
    customer: "Maria Garcia",
    quantity: 3,
    salePrice: 1200,
    buyPrice: 750,
    profit: 1350,
    date: "2024-01-14",
  },
]

const topProducts = [
  { name: "Premium Face Cream", sold: 45, profit: 31500, margin: 46.7 },
  { name: "Anti-Aging Serum", sold: 32, profit: 32000, margin: 55.6 },
  { name: "Luxury Lipstick Set", sold: 28, profit: 19600, margin: 77.8 },
  { name: "Foundation Kit", sold: 25, profit: 11250, margin: 60.0 },
]

export default function DealerDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dealer Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your business overview.</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            New Sale
          </Button>
          <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
            <Eye className="w-4 h-4 mr-2" />
            View Inventory
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Products Sold</CardTitle>
            <ShoppingCart className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">130</div>
            <p className="text-xs text-cyan-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15% this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Profit</CardTitle>
            <DollarSign className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹18,000</div>
            <p className="text-xs text-cyan-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +22% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Remaining Stock</CardTitle>
            <Package className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">247</div>
            <p className="text-xs text-gray-600 flex items-center mt-1">
              <Package className="w-3 h-3 mr-1" />
              12 products
            </p>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg. Profit Margin</CardTitle>
            <TrendingUp className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">58.5%</div>
            <p className="text-xs text-cyan-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +3.2% improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts and Tables */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profit Trend Chart */}
        <Card className="border-cyan-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Profit & Sales Trend</CardTitle>
            <CardDescription>Your monthly profit and sales performance</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={profitData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="month" stroke="#666" />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #FF69B4",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="sales" stroke="#FF69B4" strokeWidth={3} name="Sales" />
                <Line type="monotone" dataKey="profit" stroke="#FF85C1" strokeWidth={2} name="Profit" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Top Products */}
        <Card className="border-cyan-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Top Performing Products</CardTitle>
            <CardDescription>Best products by profit margin</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-cyan-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{product.name}</p>
                      <p className="text-sm text-gray-600">{product.sold} units sold</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₹{product.profit.toLocaleString()}</p>
                    <Badge className="bg-cyan-100 text-cyan-700">{product.margin.toFixed(1)}% margin</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Sales */}
      <Card className="border-cyan-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Recent Sales</CardTitle>
          <CardDescription>Your latest transactions and profits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentSales.map((sale) => (
              <div key={sale.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-gray-900">{sale.product}</p>
                      <p className="text-sm text-gray-600">Customer: {sale.customer}</p>
                      <p className="text-xs text-gray-500">
                        Qty: {sale.quantity} • {sale.date}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">₹{sale.salePrice.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Cost: ₹{sale.buyPrice.toLocaleString()}</p>
                      <div className="flex items-center gap-1 justify-end">
                        <TrendingUp className="w-3 h-3 text-cyan-500" />
                        <span className="text-sm font-medium text-cyan-600">+₹{sale.profit.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <Button
            variant="outline"
            className="w-full mt-4 border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent"
          >
            <Eye className="w-4 h-4 mr-2" />
            View All Sales
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
