"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Users, Package, ShoppingCart, DollarSign, TrendingUp, TrendingDown, Plus, Eye } from "lucide-react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts"

const revenueData = [
  { month: "Jan", revenue: 45000, profit: 12000 },
  { month: "Feb", revenue: 52000, profit: 15600 },
  { month: "Mar", revenue: 48000, profit: 14400 },
  { month: "Apr", revenue: 61000, profit: 18300 },
  { month: "May", revenue: 55000, profit: 16500 },
  { month: "Jun", revenue: 67000, profit: 20100 },
]

const categoryData = [
  { name: "Skincare", value: 35, color: "#FF69B4" },
  { name: "Makeup", value: 30, color: "#FF85C1" },
  { name: "Fragrance", value: 20, color: "#FFA1D1" },
  { name: "Hair Care", value: 15, color: "#FFBDE1" },
]

const topDealers = [
  { name: "Beauty Palace", sales: 125000, profit: 37500, growth: 12.5 },
  { name: "Glamour Store", sales: 98000, profit: 29400, growth: 8.3 },
  { name: "Style Hub", sales: 87000, profit: 26100, growth: -2.1 },
  { name: "Cosmetic Corner", sales: 76000, profit: 22800, growth: 15.7 },
]

const recentTransactions = [
  { id: 1, dealer: "Beauty Palace", product: "Premium Face Cream", quantity: 50, amount: 12500, date: "2024-01-15" },
  { id: 2, dealer: "Glamour Store", product: "Luxury Lipstick Set", quantity: 25, amount: 7500, date: "2024-01-15" },
  { id: 3, dealer: "Style Hub", product: "Anti-Aging Serum", quantity: 30, amount: 9000, date: "2024-01-14" },
  { id: 4, dealer: "Cosmetic Corner", product: "Foundation Kit", quantity: 40, amount: 8000, date: "2024-01-14" },
]

export default function OwnerDashboard() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Owner Dashboard</h1>
          <p className="text-gray-600">Welcome back! Here's your business overview.</p>
        </div>
        <div className="flex gap-3">
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
          <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Add Dealer
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Dealers</CardTitle>
            <Users className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2 this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Inventory</CardTitle>
            <Package className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <p className="text-xs text-gray-600 flex items-center mt-1">
              <Package className="w-3 h-3 mr-1" />
              156 products
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Products Sold</CardTitle>
            <ShoppingCart className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3,456</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹67,000</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Monthly Revenue & Profit</CardTitle>
            <CardDescription>Revenue and profit trends over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
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
                <Line type="monotone" dataKey="revenue" stroke="#FF69B4" strokeWidth={3} name="Revenue" />
                <Line type="monotone" dataKey="profit" stroke="#FF85C1" strokeWidth={2} name="Profit" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Sales by Category</CardTitle>
            <CardDescription>Product category distribution</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-2 mt-4">
              {categoryData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-sm text-gray-600">
                    {item.name} ({item.value}%)
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Dealers */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Top Performing Dealers</CardTitle>
            <CardDescription>Best dealers by sales performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDealers.map((dealer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-pink-600">#{index + 1}</span>
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{dealer.name}</p>
                      <p className="text-sm text-gray-600">₹{dealer.sales.toLocaleString()} sales</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₹{dealer.profit.toLocaleString()}</p>
                    <div className="flex items-center gap-1">
                      {dealer.growth > 0 ? (
                        <TrendingUp className="w-3 h-3 text-green-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-500" />
                      )}
                      <span className={`text-xs ${dealer.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                        {dealer.growth > 0 ? "+" : ""}
                        {dealer.growth}%
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Transactions */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Recent Transactions</CardTitle>
            <CardDescription>Latest sales to dealers</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentTransactions.map((transaction) => (
                <div key={transaction.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{transaction.dealer}</p>
                    <p className="text-sm text-gray-600">{transaction.product}</p>
                    <p className="text-xs text-gray-500">
                      Qty: {transaction.quantity} • {transaction.date}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₹{transaction.amount.toLocaleString()}</p>
                    <Badge variant="secondary" className="bg-pink-100 text-pink-700">
                      Completed
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent"
            >
              <Eye className="w-4 h-4 mr-2" />
              View All Transactions
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
