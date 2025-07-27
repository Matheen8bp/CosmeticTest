"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, DollarSign, Target, Calendar, Download } from "lucide-react"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts"

const profitData = [
  { month: "Jan", profit: 8500, sales: 25000, margin: 34.0 },
  { month: "Feb", profit: 12000, sales: 35000, margin: 34.3 },
  { month: "Mar", profit: 9500, sales: 28000, margin: 33.9 },
  { month: "Apr", profit: 15000, sales: 42000, margin: 35.7 },
  { month: "May", profit: 11000, sales: 32000, margin: 34.4 },
  { month: "Jun", profit: 18000, sales: 48000, margin: 37.5 },
]

const salesHistory = [
  {
    id: 1,
    date: "2024-01-15",
    product: "Premium Face Cream",
    customer: "Sarah Johnson",
    quantity: 2,
    costPrice: 1500,
    sellingPrice: 2200,
    totalCost: 3000,
    totalRevenue: 4400,
    profit: 1400,
    margin: 46.7,
  },
  {
    id: 2,
    date: "2024-01-15",
    product: "Luxury Lipstick Set",
    customer: "Emma Davis",
    quantity: 1,
    costPrice: 900,
    sellingPrice: 1600,
    totalCost: 900,
    totalRevenue: 1600,
    profit: 700,
    margin: 77.8,
  },
  {
    id: 3,
    date: "2024-01-14",
    product: "Anti-Aging Serum",
    customer: "Lisa Wilson",
    quantity: 1,
    costPrice: 1800,
    sellingPrice: 2800,
    totalCost: 1800,
    totalRevenue: 2800,
    profit: 1000,
    margin: 55.6,
  },
  {
    id: 4,
    date: "2024-01-14",
    product: "Foundation Kit",
    customer: "Maria Garcia",
    quantity: 3,
    costPrice: 750,
    sellingPrice: 1200,
    totalCost: 2250,
    totalRevenue: 3600,
    profit: 1350,
    margin: 60.0,
  },
  {
    id: 5,
    date: "2024-01-13",
    product: "Hair Serum",
    customer: "Jennifer Brown",
    quantity: 2,
    costPrice: 1200,
    sellingPrice: 1800,
    totalCost: 2400,
    totalRevenue: 3600,
    profit: 1200,
    margin: 50.0,
  },
]

const productProfitability = [
  { name: "Premium Face Cream", totalProfit: 22400, sales: 32, avgMargin: 46.7 },
  { name: "Anti-Aging Serum", totalProfit: 22000, sales: 22, avgMargin: 55.6 },
  { name: "Foundation Kit", totalProfit: 15750, sales: 35, avgMargin: 60.0 },
  { name: "Luxury Lipstick Set", totalProfit: 12600, sales: 18, avgMargin: 77.8 },
  { name: "Hair Serum", totalProfit: 7200, sales: 12, avgMargin: 50.0 },
]

export default function ProfitsPage() {
  const [timeFilter, setTimeFilter] = useState("all")
  const [sortBy, setSortBy] = useState("date")

  const totalProfit = salesHistory.reduce((sum, sale) => sum + sale.profit, 0)
  const totalRevenue = salesHistory.reduce((sum, sale) => sum + sale.totalRevenue, 0)
  const totalSales = salesHistory.length
  const avgMargin = totalRevenue > 0 ? (totalProfit / totalRevenue) * 100 : 0

  const getMarginBadge = (margin: number) => {
    if (margin >= 60) {
      return <Badge className="bg-green-100 text-green-700">High</Badge>
    } else if (margin >= 40) {
      return <Badge className="bg-yellow-100 text-yellow-700">Medium</Badge>
    } else {
      return <Badge className="bg-red-100 text-red-700">Low</Badge>
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Profit Tracker</h1>
          <p className="text-gray-600">Track your earnings and profit margins</p>
        </div>
        <div className="flex gap-3">
          <Select value={timeFilter} onValueChange={setTimeFilter}>
            <SelectTrigger className="w-48">
              <SelectValue placeholder="Filter by time" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Time</SelectItem>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Profit</CardTitle>
            <DollarSign className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹{totalProfit.toLocaleString()}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +22% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +15% from last month
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Sales</CardTitle>
            <Target className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalSales}</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +8 this month
            </p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Profit Margin</CardTitle>
            <Calendar className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{avgMargin.toFixed(1)}%</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="w-3 h-3 mr-1" />
              +3.2% improvement
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Profit Trend */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Profit Trend</CardTitle>
            <CardDescription>Monthly profit and sales performance</CardDescription>
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

        {/* Product Profitability */}
        <Card className="border-pink-200">
          <CardHeader>
            <CardTitle className="text-gray-900">Product Profitability</CardTitle>
            <CardDescription>Profit by product category</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={productProfitability}>
                <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                <XAxis dataKey="name" stroke="#666" angle={-45} textAnchor="end" height={80} />
                <YAxis stroke="#666" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "white",
                    border: "1px solid #FF69B4",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="totalProfit" fill="#FF69B4" name="Total Profit" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Sales History */}
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle className="text-gray-900">Sales History</CardTitle>
          <CardDescription>Detailed breakdown of all your sales and profits</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="date">Date</SelectItem>
                <SelectItem value="profit">Profit</SelectItem>
                <SelectItem value="margin">Margin</SelectItem>
                <SelectItem value="product">Product</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border border-pink-100">
            <Table>
              <TableHeader>
                <TableRow className="bg-pink-50">
                  <TableHead className="font-semibold text-gray-900">Date</TableHead>
                  <TableHead className="font-semibold text-gray-900">Product</TableHead>
                  <TableHead className="font-semibold text-gray-900">Customer</TableHead>
                  <TableHead className="font-semibold text-gray-900">Qty</TableHead>
                  <TableHead className="font-semibold text-gray-900">Cost</TableHead>
                  <TableHead className="font-semibold text-gray-900">Revenue</TableHead>
                  <TableHead className="font-semibold text-gray-900">Profit</TableHead>
                  <TableHead className="font-semibold text-gray-900">Margin</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {salesHistory.map((sale) => (
                  <TableRow key={sale.id} className="hover:bg-gray-50">
                    <TableCell>{sale.date}</TableCell>
                    <TableCell className="font-medium text-gray-900">{sale.product}</TableCell>
                    <TableCell>{sale.customer}</TableCell>
                    <TableCell className="text-center">{sale.quantity}</TableCell>
                    <TableCell>₹{sale.totalCost.toLocaleString()}</TableCell>
                    <TableCell className="font-medium">₹{sale.totalRevenue.toLocaleString()}</TableCell>
                    <TableCell className="font-medium text-green-600">₹{sale.profit.toLocaleString()}</TableCell>
                    <TableCell>{getMarginBadge(sale.margin)}</TableCell>
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
