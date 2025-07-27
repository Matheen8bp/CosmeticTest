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
  { name: "Skincare", value: 35, color: "#22C55E" },
  { name: "Makeup", value: 30, color: "#22C55F" },
  { name: "Fragrance", value: 20, color: "#22C56E" },
  { name: "Hair Care", value: 15, color: "#22C56F" },
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
          <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Plus className="w-4 h-4 mr-2" />
            Add Product
          </Button>
          <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
            <Plus className="w-4 h-4 mr-2" />
            Add Dealer
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Dealers</CardTitle>
            <Users className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-cyan-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2 this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Inventory</CardTitle>
            <Package className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">1,247</div>
            <p className="text-xs text-gray-600 flex items-center mt-1">
              <Package className="w-3 h-3 mr-1" />
              156 products
            </p>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Products Sold</CardTitle>
            <ShoppingCart className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">3,456</div>
            <p className="text-xs text-cyan-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-cyan-200 shadow-lg shadow-cyan-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-cyan-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹67,000</div>
            <p className="text-xs text-cyan-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.2% from last month
            </p>
          </CardContent>
        </Card>
      </div>
      
      {/* Tables Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Dealers */}
        <Card className="border-cyan-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Top Performing Dealers</CardTitle>
            <CardDescription>Best dealers by sales performance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topDealers.map((dealer, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-medium text-cyan-600">#{index + 1}</span>
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
                        <TrendingUp className="w-3 h-3 text-cyan-500" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-cyan-500" />
                      )}
                      <span className={`text-xs ${dealer.growth > 0 ? "text-cyan-600" : "text-cyan-600"}`}>
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
        <Card className="border-cyan-200">
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
                    <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
                      Completed
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent"
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
