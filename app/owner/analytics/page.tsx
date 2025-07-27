"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TrendingUp, TrendingDown, Users, Package, DollarSign, Target, Download } from "lucide-react"
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
  BarChart,
  Bar,
  AreaChart,
  Area,
} from "recharts"

const monthlyData = [
  { month: "Jan", revenue: 45000, profit: 12000, orders: 85, dealers: 20 },
  { month: "Feb", revenue: 52000, profit: 15600, orders: 98, dealers: 22 },
  { month: "Mar", revenue: 48000, profit: 14400, orders: 89, dealers: 21 },
  { month: "Apr", revenue: 61000, profit: 18300, orders: 112, dealers: 24 },
  { month: "May", revenue: 55000, profit: 16500, orders: 95, dealers: 23 },
  { month: "Jun", revenue: 67000, profit: 20100, orders: 125, dealers: 24 },
]

const categoryData = [
  { name: "Skincare", value: 35, revenue: 234500, color: "#FF69B4" },
  { name: "Makeup", value: 30, revenue: 201000, color: "#FF85C1" },
  { name: "Fragrance", value: 20, revenue: 134000, color: "#FFA1D1" },
  { name: "Hair Care", value: 15, revenue: 100500, color: "#FFBDE1" },
]

const dealerPerformance = [
  { name: "Beauty Palace", sales: 125000, profit: 37500, orders: 45 },
  { name: "Glamour Store", sales: 98000, profit: 29400, orders: 38 },
  { name: "Style Hub", sales: 87000, profit: 26100, orders: 32 },
  { name: "Cosmetic Corner", sales: 76000, profit: 22800, orders: 28 },
  { name: "Elegance Emporium", sales: 65000, profit: 19500, orders: 24 },
]

const topProducts = [
  { name: "Premium Face Cream", sold: 245, revenue: 367500, profit: 122500, growth: 15.2 },
  { name: "Anti-Aging Serum", sold: 189, revenue: 340200, profit: 113400, growth: 22.8 },
  { name: "Luxury Lipstick Set", sold: 156, revenue: 140400, profit: 62400, growth: -5.3 },
  { name: "Foundation Kit", sold: 134, revenue: 100500, profit: 40200, growth: 8.7 },
  { name: "Eye Shadow Palette", sold: 98, revenue: 196000, profit: 78400, growth: 31.5 },
]

const profitMarginData = [
  { month: "Jan", margin: 26.7 },
  { month: "Feb", margin: 30.0 },
  { month: "Mar", margin: 30.0 },
  { month: "Apr", margin: 30.0 },
  { month: "May", margin: 30.0 },
  { month: "Jun", margin: 30.0 },
]

export default function AnalyticsPage() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics Dashboard</h1>
          <p className="text-gray-600">Comprehensive business insights and performance metrics</p>
        </div>
        <div className="flex gap-3">
          <Select defaultValue="6months">
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Select period" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1month">Last Month</SelectItem>
              <SelectItem value="3months">Last 3 Months</SelectItem>
              <SelectItem value="6months">Last 6 Months</SelectItem>
              <SelectItem value="1year">Last Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-green-200 text-green-600 hover:bg-green-50 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export Report
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹3,28,000</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +12.5% from last period
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Profit</CardTitle>
            <Target className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹96,900</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +18.3% from last period
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Active Dealers</CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">24</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +2 new this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Order Value</CardTitle>
            <Package className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹5,410</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8.7% from last period
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue & Profit Trend */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Revenue & Profit Trend</CardTitle>
            <CardDescription>Monthly performance over the last 6 months</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={monthlyData}>
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
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stackId="1"
                  stroke="#FF69B4"
                  fill="#FF69B4"
                  fillOpacity={0.3}
                  name="Revenue"
                />
                <Area
                  type="monotone"
                  dataKey="profit"
                  stackId="2"
                  stroke="#FF85C1"
                  fill="#FF85C1"
                  fillOpacity={0.6}
                  name="Profit"
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Category Distribution */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Sales by Category</CardTitle>
            <CardDescription>Revenue distribution across product categories</CardDescription>
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
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">₹{(item.revenue / 1000).toFixed(0)}K</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Dealer Performance */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Top Dealer Performance</CardTitle>
            <CardDescription>Sales performance by dealer</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dealerPerformance} layout="horizontal">
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis type="number" stroke="#666" />
                <YAxis dataKey="name" type="category" stroke="#666" width={100} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #FF69B4",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="sales" fill="#FF69B4" name="Sales" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Profit Margin Trend */}
        <Card className="border-green-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Profit Margin Trend</CardTitle>
            <CardDescription>Monthly profit margin percentage</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={profitMarginData}>
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
                <Line type="monotone" dataKey="margin" stroke="#FF69B4" strokeWidth={3} name="Profit Margin %" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Top Products Table */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Top Performing Products</CardTitle>
          <CardDescription>Best-selling products with performance metrics</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topProducts.map((product, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-green-600">#{index + 1}</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-600">{product.sold} units sold</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="text-right">
                    <p className="font-medium text-gray-900">₹{product.revenue.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Revenue</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-green-600">₹{product.profit.toLocaleString()}</p>
                    <p className="text-sm text-gray-600">Profit</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1">
                      {product.growth > 0 ? (
                        <TrendingUp className="w-4 h-4 text-green-500" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-red-500" />
                      )}
                      <span className={`font-medium ${product.growth > 0 ? "text-green-600" : "text-red-600"}`}>
                        {product.growth > 0 ? "+" : ""}
                        {product.growth}%
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">Growth</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
