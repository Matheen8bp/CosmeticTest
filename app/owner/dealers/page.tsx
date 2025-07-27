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
import { Plus, Search, Edit, Trash2, Users, MapPin, Phone, Mail, TrendingUp, TrendingDown } from "lucide-react"

const dealers = [
  {
    id: 1,
    name: "Beauty Palace",
    email: "contact@beautypalace.com",
    phone: "+91 98765 43210",
    location: "Mumbai, Maharashtra",
    totalPurchase: 125000,
    totalProfit: 37500,
    performance: 12.5,
    status: "Active",
    joinDate: "2023-06-15",
    lastOrder: "2024-01-15",
  },
  {
    id: 2,
    name: "Glamour Store",
    email: "info@glamourstore.com",
    phone: "+91 87654 32109",
    location: "Delhi, Delhi",
    totalPurchase: 98000,
    totalProfit: 29400,
    performance: 8.3,
    status: "Active",
    joinDate: "2023-08-22",
    lastOrder: "2024-01-14",
  },
  {
    id: 3,
    name: "Style Hub",
    email: "orders@stylehub.com",
    phone: "+91 76543 21098",
    location: "Bangalore, Karnataka",
    totalPurchase: 87000,
    totalProfit: 26100,
    performance: -2.1,
    status: "Inactive",
    joinDate: "2023-04-10",
    lastOrder: "2024-01-10",
  },
  {
    id: 4,
    name: "Cosmetic Corner",
    email: "hello@cosmeticcorner.com",
    phone: "+91 65432 10987",
    location: "Chennai, Tamil Nadu",
    totalPurchase: 76000,
    totalProfit: 22800,
    performance: 15.7,
    status: "Active",
    joinDate: "2023-09-05",
    lastOrder: "2024-01-13",
  },
]

export default function DealersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false)
  const [newDealer, setNewDealer] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  })

  const filteredDealers = dealers.filter(
    (dealer) =>
      dealer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dealer.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const getStatusBadge = (status: string) => {
    if (status === "Active") {
      return <Badge className="bg-green-100 text-green-700">Active</Badge>
    } else {
      return (
        <Badge variant="secondary" className="bg-red-100 text-red-700">
          Inactive
        </Badge>
      )
    }
  }

  const getPerformanceBadge = (performance: number) => {
    if (performance > 10) {
      return <Badge className="bg-green-100 text-green-700">Excellent</Badge>
    } else if (performance > 0) {
      return <Badge className="bg-yellow-100 text-yellow-700">Good</Badge>
    } else {
      return <Badge className="bg-red-100 text-red-700">Poor</Badge>
    }
  }

  const handleAddDealer = () => {
    console.log("Adding dealer:", newDealer)
    setIsAddDialogOpen(false)
    setNewDealer({
      name: "",
      email: "",
      phone: "",
      location: "",
    })
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Dealer Management</h1>
          <p className="text-gray-600">Manage your dealer network and track performance</p>
        </div>
        <Dialog open={isAddDialogOpen} onOpenChange={setIsAddDialogOpen}>
          <DialogTrigger asChild>
            <Button className="bg-green-500 hover:bg-green-600 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Dealer
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Add New Dealer</DialogTitle>
              <DialogDescription>Add a new dealer to your network.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Dealer Name</Label>
                <Input
                  id="name"
                  value={newDealer.name}
                  onChange={(e) => setNewDealer({ ...newDealer, name: e.target.value })}
                  placeholder="Enter dealer name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={newDealer.email}
                  onChange={(e) => setNewDealer({ ...newDealer, email: e.target.value })}
                  placeholder="dealer@example.com"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  value={newDealer.phone}
                  onChange={(e) => setNewDealer({ ...newDealer, phone: e.target.value })}
                  placeholder="+91 98765 43210"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={newDealer.location}
                  onChange={(e) => setNewDealer({ ...newDealer, location: e.target.value })}
                  placeholder="City, State"
                />
              </div>
            </div>
            <DialogFooter>
              <Button variant="outline" onClick={() => setIsAddDialogOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleAddDealer} className="bg-green-500 hover:bg-green-600">
                Add Dealer
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Dealers</CardTitle>
            <Users className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{dealers.length}</div>
            <p className="text-xs text-green-600">{dealers.filter((d) => d.status === "Active").length} active</p>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Sales</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ₹{dealers.reduce((sum, dealer) => sum + dealer.totalPurchase, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Total Profit</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              ₹{dealers.reduce((sum, dealer) => sum + dealer.totalProfit, 0).toLocaleString()}
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-200 shadow-lg shadow-green-100/50">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Avg Performance</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">
              {(dealers.reduce((sum, dealer) => sum + dealer.performance, 0) / dealers.length).toFixed(1)}%
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dealers Table */}
      <Card className="border-green-200">
        <CardHeader>
          <CardTitle>Dealer Network</CardTitle>
          <CardDescription>Manage your dealer relationships and track performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input
                placeholder="Search dealers by name or location..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="inactive">Inactive</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="rounded-md border border-green-100">
            <Table>
              <TableHeader>
                <TableRow className="bg-green-50">
                  <TableHead className="font-semibold text-gray-900">Dealer</TableHead>
                  <TableHead className="font-semibold text-gray-900">Contact</TableHead>
                  <TableHead className="font-semibold text-gray-900">Location</TableHead>
                  <TableHead className="font-semibold text-gray-900">Total Purchase</TableHead>
                  <TableHead className="font-semibold text-gray-900">Profit Generated</TableHead>
                  <TableHead className="font-semibold text-gray-900">Performance</TableHead>
                  <TableHead className="font-semibold text-gray-900">Status</TableHead>
                  <TableHead className="font-semibold text-gray-900">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDealers.map((dealer) => (
                  <TableRow key={dealer.id} className="hover:bg-gray-50">
                    <TableCell>
                      <div>
                        <p className="font-medium text-gray-900">{dealer.name}</p>
                        <p className="text-sm text-gray-500">Joined: {dealer.joinDate}</p>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="space-y-1">
                        <div className="flex items-center gap-1">
                          <Mail className="w-3 h-3 text-gray-400" />
                          <span className="text-sm">{dealer.email}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-3 h-3 text-gray-400" />
                          <span className="text-sm">{dealer.phone}</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-gray-400" />
                        <span className="text-sm">{dealer.location}</span>
                      </div>
                    </TableCell>
                    <TableCell className="font-medium">₹{dealer.totalPurchase.toLocaleString()}</TableCell>
                    <TableCell className="font-medium text-green-600">₹{dealer.totalProfit.toLocaleString()}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {dealer.performance > 0 ? (
                          <TrendingUp className="w-4 h-4 text-green-500" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-500" />
                        )}
                        <span className={dealer.performance > 0 ? "text-green-600" : "text-red-600"}>
                          {dealer.performance > 0 ? "+" : ""}
                          {dealer.performance}%
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>{getStatusBadge(dealer.status)}</TableCell>
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
