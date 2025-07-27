"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Download, Filter, Receipt, TrendingUp, Calendar } from "lucide-react"

const transactions = [
  {
    id: "TXN001",
    dealer: "Beauty Palace",
    product: "Premium Face Cream",
    quantity: 50,
    unitPrice: 1500,
    totalAmount: 75000,
    profit: 25000,
    date: "2024-01-15",
    status: "Completed",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN002",
    dealer: "Glamour Store",
    product: "Luxury Lipstick Set",
    quantity: 25,
    unitPrice: 900,
    totalAmount: 22500,
    profit: 7500,
    date: "2024-01-15",
    status: "Completed",
    paymentMethod: "UPI",
  },
  {
    id: "TXN003",
    dealer: "Style Hub",
    product: "Anti-Aging Serum",
    quantity: 30,
    unitPrice: 1800,
    totalAmount: 54000,
    profit: 18000,
    date: "2024-01-14",
    status: "Pending",
    paymentMethod: "Cash",
  },
  {
    id: "TXN004",
    dealer: "Cosmetic Corner",
    product: "Foundation Kit",
    quantity: 40,
    unitPrice: 750,
    totalAmount: 30000,
    profit: 10000,
    date: "2024-01-14",
    status: "Completed",
    paymentMethod: "Bank Transfer",
  },
  {
    id: "TXN005",
    dealer: "Beauty Palace",
    product: "Hair Serum",
    quantity: 20,
    unitPrice: 1200,
    totalAmount: 24000,
    profit: 8000,
    date: "2024-01-13",
    status: "Completed",
    paymentMethod: "UPI",
  },
  {
    id: "TXN006",
    dealer: "Glamour Store",
    product: "Eye Shadow Palette",
    quantity: 15,
    unitPrice: 2000,
    totalAmount: 30000,
    profit: 12000,
    date: "2024-01-12",
    status: "Failed",
    paymentMethod: "Bank Transfer",
  },
]

export default function TransactionsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [dateFilter, setDateFilter] = useState("all")

  const filteredTransactions = transactions.filter((transaction) => {
    const matchesSearch =
      transaction.dealer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.product.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || transaction.status.toLowerCase() === statusFilter

    return matchesSearch && matchesStatus
  })

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return <Badge className="bg-green-100 text-green-700">Completed</Badge>
      case "Pending":
        return <Badge className="bg-yellow-100 text-yellow-700">Pending</Badge>
      case "Failed":
        return <Badge className="bg-red-100 text-red-700">Failed</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  const totalRevenue = transactions.filter((t) => t.status === "Completed").reduce((sum, t) => sum + t.totalAmount, 0)

  const totalProfit = transactions.filter((t) => t.status === "Completed").reduce((sum, t) => sum + t.profit, 0)

  const totalTransactions = transactions.length
  const completedTransactions = transactions.filter((t) => t.status === "Completed").length

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Transaction History</h1>
          <p className="text-gray-600">Track all sales transactions and payments</p>
        </div>
        <div className="flex gap-3">
          <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50 bg-transparent">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button className="bg-pink-500 hover:bg-pink-600 text-white">
            <Filter className="w-4 h-4 mr-2" />
            Advanced Filter
          </Button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Transactions</CardTitle>
            <Receipt className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{totalTransactions}</div>
            <p className="text-xs text-green-600">{completedTransactions} completed</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Revenue</CardTitle>
            <TrendingUp className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹{totalRevenue.toLocaleString()}</div>
            <p className="text-xs text-gray-600">From completed sales</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">₹{totalProfit.toLocaleString()}</div>
            <p className="text-xs text-green-600">{((totalProfit / totalRevenue) * 100).toFixed(1)}% margin</p>
          </CardContent>
        </Card>

        <Card className="border-pink-200 shadow-lg shadow-pink-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Success Rate</CardTitle>
            <Calendar className="h-4 w-4 text-pink-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {((completedTransactions / totalTransactions) * 100).toFixed(1)}%
            </div>
            <p className="text-xs text-gray-600">Transaction success</p>
          </CardContent>
        </Card>
      </div>

      {/* Transactions Table */}
      <Card className="border-pink-200">
        <CardHeader>
          <CardTitle>All Transactions</CardTitle>
          <CardDescription>Complete history of sales transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search by dealer, product, or transaction ID..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="failed">Failed</SelectItem>
              </SelectContent>
            </Select>
            <Select value={dateFilter} onValueChange={setDateFilter}>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by date" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="today">Today</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border border-pink-100">
            <Table>
              <TableHeader>
                <TableRow className="bg-pink-50">
                  <TableHead className="font-semibold text-gray-900">Transaction ID</TableHead>
                  <TableHead className="font-semibold text-gray-900">Dealer</TableHead>
                  <TableHead className="font-semibold text-gray-900">Product</TableHead>
                  <TableHead className="font-semibold text-gray-900">Quantity</TableHead>
                  <TableHead className="font-semibold text-gray-900">Unit Price</TableHead>
                  <TableHead className="font-semibold text-gray-900">Total Amount</TableHead>
                  <TableHead className="font-semibold text-gray-900">Profit</TableHead>
                  <TableHead className="font-semibold text-gray-900">Date</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">Payment</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTransactions.map((transaction) => (
                  <TableRow key={transaction.id} className="hover:bg-gray-50">
                    <TableCell className="font-mono text-sm font-medium text-pink-600">{transaction.id}</TableCell>
                    <TableCell className="font-medium text-gray-900">{transaction.dealer}</TableCell>
                    <TableCell>{transaction.product}</TableCell>
                    <TableCell className="text-center">{transaction.quantity}</TableCell>
                    <TableCell>₹{transaction.unitPrice.toLocaleString()}</TableCell>
                    <TableCell className="font-medium">₹{transaction.totalAmount.toLocaleString()}</TableCell>
                    <TableCell className="font-medium text-green-600">₹{transaction.profit.toLocaleString()}</TableCell>
                    <TableCell>{transaction.date}</TableCell>
                    <TableCell>{getStatusBadge(transaction.status)}</TableCell>
                    <TableCell>
                      <Badge variant="outline" className="text-xs">
                        {transaction.paymentMethod}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {filteredTransactions.length === 0 && (
            <div className="text-center py-8">
              <Receipt className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-500">No transactions found matching your criteria</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
