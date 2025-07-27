"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import {
  User,
  Bell,
  Shield,
  Store,
  Mail,
  Phone,
  MapPin,
  Save,
  RefreshCw,
  Upload,
  Target,
  TrendingUp,
} from "lucide-react"

export default function DealerSettingsPage() {
  const [settings, setSettings] = useState({
    // Store Settings
    storeName: "Beauty Palace",
    storeEmail: "contact@beautypalace.com",
    storePhone: "+91 98765 43210",
    storeAddress: "456 Market Street, Mumbai, Maharashtra",
    storeDescription: "Premium beauty products and cosmetics",

    // Profile Settings
    dealerName: "Sarah Johnson",
    dealerEmail: "sarah@beautypalace.com",
    dealerPhone: "+91 98765 43210",

    // Business Settings
    defaultMarkup: 40,
    minProfitMargin: 20,
    maxDiscount: 15,

    // Notification Settings
    emailNotifications: true,
    smsNotifications: true,
    lowStockAlerts: true,
    salesAlerts: true,
    profitAlerts: true,

    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: 30,

    // Display Settings
    theme: "light",
    currency: "INR",
    dateFormat: "DD/MM/YYYY",
  })

  const handleSave = () => {
    console.log("Saving dealer settings:", settings)
    // Save settings logic here
  }

  const handleReset = () => {
    console.log("Resetting dealer settings")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your store preferences and account settings</p>
        </div>
        <div className="flex gap-3">
          <Button
            variant="outline"
            onClick={handleReset}
            className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent"
          >
            <RefreshCw className="w-4 h-4 mr-2" />
            Reset
          </Button>
          <Button onClick={handleSave} className="bg-cyan-500 hover:bg-cyan-600 text-white">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      <Tabs defaultValue="store" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="store" className="flex items-center gap-2">
            <Store className="w-4 h-4" />
            Store
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="business" className="flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Business
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
        </TabsList>

        {/* Store Settings */}
        <TabsContent value="store" className="space-y-6">
          <Card className="border-cyan-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Store className="w-5 h-5" />
                Store Information
              </CardTitle>
              <CardDescription>Configure your store details and branding</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center">
                  <Store className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Logo
                  </Button>
                  <p className="text-sm text-gray-500">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="storeName">Store Name</Label>
                  <Input
                    id="storeName"
                    value={settings.storeName}
                    onChange={(e) => setSettings({ ...settings, storeName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="storeEmail" className="flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Store Email
                  </Label>
                  <Input
                    id="storeEmail"
                    type="email"
                    value={settings.storeEmail}
                    onChange={(e) => setSettings({ ...settings, storeEmail: e.target.value })}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="storePhone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Store Phone
                  </Label>
                  <Input
                    id="storePhone"
                    value={settings.storePhone}
                    onChange={(e) => setSettings({ ...settings, storePhone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="currency">Currency</Label>
                  <Select
                    value={settings.currency}
                    onValueChange={(value) => setSettings({ ...settings, currency: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="INR">INR (₹)</SelectItem>
                      <SelectItem value="USD">USD ($)</SelectItem>
                      <SelectItem value="EUR">EUR (€)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeAddress" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Store Address
                </Label>
                <Input
                  id="storeAddress"
                  value={settings.storeAddress}
                  onChange={(e) => setSettings({ ...settings, storeAddress: e.target.value })}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="storeDescription">Store Description</Label>
                <Input
                  id="storeDescription"
                  value={settings.storeDescription}
                  onChange={(e) => setSettings({ ...settings, storeDescription: e.target.value })}
                  placeholder="Brief description of your store"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Profile Settings */}
        <TabsContent value="profile" className="space-y-6">
          <Card className="border-cyan-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="w-5 h-5" />
                Personal Information
              </CardTitle>
              <CardDescription>Manage your personal profile details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-cyan-100 rounded-full flex items-center justify-center">
                  <User className="w-8 h-8 text-cyan-600" />
                </div>
                <div className="space-y-2">
                  <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                    <Upload className="w-4 h-4 mr-2" />
                    Upload Photo
                  </Button>
                  <p className="text-sm text-gray-500">JPG, PNG up to 2MB</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="dealerName">Full Name</Label>
                  <Input
                    id="dealerName"
                    value={settings.dealerName}
                    onChange={(e) => setSettings({ ...settings, dealerName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dealerEmail">Email Address</Label>
                  <Input
                    id="dealerEmail"
                    type="email"
                    value={settings.dealerEmail}
                    onChange={(e) => setSettings({ ...settings, dealerEmail: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="dealerPhone">Phone Number</Label>
                <Input
                  id="dealerPhone"
                  value={settings.dealerPhone}
                  onChange={(e) => setSettings({ ...settings, dealerPhone: e.target.value })}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Change Password</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="currentPassword">Current Password</Label>
                    <Input id="currentPassword" type="password" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="newPassword">New Password</Label>
                    <Input id="newPassword" type="password" />
                  </div>
                </div>
                <Button className="bg-cyan-500 hover:bg-cyan-600 text-white">Update Password</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Business Settings */}
        <TabsContent value="business" className="space-y-6">
          <Card className="border-cyan-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                Business Configuration
              </CardTitle>
              <CardDescription>Configure your pricing and business rules</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="defaultMarkup">Default Markup (%)</Label>
                  <Input
                    id="defaultMarkup"
                    type="number"
                    value={settings.defaultMarkup}
                    onChange={(e) => setSettings({ ...settings, defaultMarkup: Number(e.target.value) })}
                  />
                  <p className="text-sm text-gray-500">Applied to new products</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="minProfitMargin">Min Profit Margin (%)</Label>
                  <Input
                    id="minProfitMargin"
                    type="number"
                    value={settings.minProfitMargin}
                    onChange={(e) => setSettings({ ...settings, minProfitMargin: Number(e.target.value) })}
                  />
                  <p className="text-sm text-gray-500">Minimum acceptable margin</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="maxDiscount">Max Discount (%)</Label>
                  <Input
                    id="maxDiscount"
                    type="number"
                    value={settings.maxDiscount}
                    onChange={(e) => setSettings({ ...settings, maxDiscount: Number(e.target.value) })}
                  />
                  <p className="text-sm text-gray-500">Maximum discount allowed</p>
                </div>
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Display Preferences</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="theme">Theme</Label>
                    <Select
                      value={settings.theme}
                      onValueChange={(value) => setSettings({ ...settings, theme: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="light">Light</SelectItem>
                        <SelectItem value="dark">Dark</SelectItem>
                        <SelectItem value="system">System</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dateFormat">Date Format</Label>
                    <Select
                      value={settings.dateFormat}
                      onValueChange={(value) => setSettings({ ...settings, dateFormat: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                        <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                        <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications" className="space-y-6">
          <Card className="border-cyan-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Bell className="w-5 h-5" />
                Notification Preferences
              </CardTitle>
              <CardDescription>Configure how you want to receive notifications</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Email Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via email</p>
                  </div>
                  <Switch
                    checked={settings.emailNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, emailNotifications: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>SMS Notifications</Label>
                    <p className="text-sm text-gray-500">Receive notifications via SMS</p>
                  </div>
                  <Switch
                    checked={settings.smsNotifications}
                    onCheckedChange={(checked) => setSettings({ ...settings, smsNotifications: checked })}
                  />
                </div>

                <Separator />

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Low Stock Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified when products are running low</p>
                  </div>
                  <Switch
                    checked={settings.lowStockAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, lowStockAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Sales Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified about new sales and orders</p>
                  </div>
                  <Switch
                    checked={settings.salesAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, salesAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Profit Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified about profit milestones</p>
                  </div>
                  <Switch
                    checked={settings.profitAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, profitAlerts: checked })}
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Security */}
        <TabsContent value="security" className="space-y-6">
          <Card className="border-cyan-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Security Settings
              </CardTitle>
              <CardDescription>Manage your account security and access controls</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Two-Factor Authentication</Label>
                    <p className="text-sm text-gray-500">Add an extra layer of security to your account</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Switch
                      checked={settings.twoFactorAuth}
                      onCheckedChange={(checked) => setSettings({ ...settings, twoFactorAuth: checked })}
                    />
                    {settings.twoFactorAuth && <Badge className="bg-cyan-100 text-cyan-700">Enabled</Badge>}
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="sessionTimeout">Session Timeout</Label>
                  <Select
                    value={settings.sessionTimeout.toString()}
                    onValueChange={(value) => setSettings({ ...settings, sessionTimeout: Number(value) })}
                  >
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                      <SelectItem value="60">1 hour</SelectItem>
                      <SelectItem value="120">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
