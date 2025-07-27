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
  Settings,
  User,
  Bell,
  Shield,
  Database,
  Mail,
  Phone,
  MapPin,
  Save,
  RefreshCw,
  Download,
  Upload,
} from "lucide-react"

export default function OwnerSettingsPage() {
  const [settings, setSettings] = useState({
    // Business Settings
    businessName: "CosmetiCare",
    businessEmail: "owner@cosmeticare.com",
    businessPhone: "+91 98765 43210",
    businessAddress: "123 Beauty Street, Mumbai, Maharashtra",
    defaultProfitMargin: 50,
    taxRate: 18,
    currency: "INR",

    // Profile Settings
    ownerName: "John Doe",
    ownerEmail: "john@cosmeticare.com",
    ownerPhone: "+91 98765 43210",

    // Notification Settings
    emailNotifications: true,
    smsNotifications: false,
    lowStockAlerts: true,
    newDealerAlerts: true,
    dailyReports: true,

    // Security Settings
    twoFactorAuth: false,
    sessionTimeout: 30,
    passwordExpiry: 90,

    // System Settings
    autoBackup: true,
    backupFrequency: "daily",
    dataRetention: 365,
    theme: "light",
  })

  const handleSave = () => {
    console.log("Saving settings:", settings)
    // Save settings logic here
  }

  const handleReset = () => {
    // Reset to default settings
    console.log("Resetting settings")
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Manage your business preferences and system configuration</p>
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

      <Tabs defaultValue="business" className="space-y-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="business" className="flex items-center gap-2">
            <Settings className="w-4 h-4" />
            Business
          </TabsTrigger>
          <TabsTrigger value="profile" className="flex items-center gap-2">
            <User className="w-4 h-4" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="flex items-center gap-2">
            <Bell className="w-4 h-4" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            Security
          </TabsTrigger>
          <TabsTrigger value="system" className="flex items-center gap-2">
            <Database className="w-4 h-4" />
            System
          </TabsTrigger>
        </TabsList>

        {/* Business Settings */}
        <TabsContent value="business" className="space-y-6">
          <Card className="border-cyan-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="w-5 h-5" />
                Business Information
              </CardTitle>
              <CardDescription>Configure your business details and default settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessName">Business Name</Label>
                  <Input
                    id="businessName"
                    value={settings.businessName}
                    onChange={(e) => setSettings({ ...settings, businessName: e.target.value })}
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
                <Label htmlFor="businessEmail" className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  Business Email
                </Label>
                <Input
                  id="businessEmail"
                  type="email"
                  value={settings.businessEmail}
                  onChange={(e) => setSettings({ ...settings, businessEmail: e.target.value })}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="businessPhone" className="flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Business Phone
                  </Label>
                  <Input
                    id="businessPhone"
                    value={settings.businessPhone}
                    onChange={(e) => setSettings({ ...settings, businessPhone: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="taxRate">Tax Rate (%)</Label>
                  <Input
                    id="taxRate"
                    type="number"
                    value={settings.taxRate}
                    onChange={(e) => setSettings({ ...settings, taxRate: Number(e.target.value) })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="businessAddress" className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Business Address
                </Label>
                <Input
                  id="businessAddress"
                  value={settings.businessAddress}
                  onChange={(e) => setSettings({ ...settings, businessAddress: e.target.value })}
                />
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="text-lg font-medium">Pricing Configuration</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="defaultProfitMargin">Default Profit Margin (%)</Label>
                    <Input
                      id="defaultProfitMargin"
                      type="number"
                      value={settings.defaultProfitMargin}
                      onChange={(e) => setSettings({ ...settings, defaultProfitMargin: Number(e.target.value) })}
                    />
                    <p className="text-sm text-gray-500">Applied to new products by default</p>
                  </div>
                </div>
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
                  <Label htmlFor="ownerName">Full Name</Label>
                  <Input
                    id="ownerName"
                    value={settings.ownerName}
                    onChange={(e) => setSettings({ ...settings, ownerName: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="ownerEmail">Email Address</Label>
                  <Input
                    id="ownerEmail"
                    type="email"
                    value={settings.ownerEmail}
                    onChange={(e) => setSettings({ ...settings, ownerEmail: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="ownerPhone">Phone Number</Label>
                <Input
                  id="ownerPhone"
                  value={settings.ownerPhone}
                  onChange={(e) => setSettings({ ...settings, ownerPhone: e.target.value })}
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
                    <Label>New Dealer Alerts</Label>
                    <p className="text-sm text-gray-500">Get notified when new dealers join</p>
                  </div>
                  <Switch
                    checked={settings.newDealerAlerts}
                    onCheckedChange={(checked) => setSettings({ ...settings, newDealerAlerts: checked })}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Daily Reports</Label>
                    <p className="text-sm text-gray-500">Receive daily business summary reports</p>
                  </div>
                  <Switch
                    checked={settings.dailyReports}
                    onCheckedChange={(checked) => setSettings({ ...settings, dailyReports: checked })}
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

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="sessionTimeout">Session Timeout (minutes)</Label>
                    <Select
                      value={settings.sessionTimeout.toString()}
                      onValueChange={(value) => setSettings({ ...settings, sessionTimeout: Number(value) })}
                    >
                      <SelectTrigger>
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

                  <div className="space-y-2">
                    <Label htmlFor="passwordExpiry">Password Expiry (days)</Label>
                    <Select
                      value={settings.passwordExpiry.toString()}
                      onValueChange={(value) => setSettings({ ...settings, passwordExpiry: Number(value) })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="30">30 days</SelectItem>
                        <SelectItem value="60">60 days</SelectItem>
                        <SelectItem value="90">90 days</SelectItem>
                        <SelectItem value="180">180 days</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* System */}
        <TabsContent value="system" className="space-y-6">
          <Card className="border-cyan-200">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5" />
                System Configuration
              </CardTitle>
              <CardDescription>Manage system preferences and data settings</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>Automatic Backup</Label>
                    <p className="text-sm text-gray-500">Automatically backup your data</p>
                  </div>
                  <Switch
                    checked={settings.autoBackup}
                    onCheckedChange={(checked) => setSettings({ ...settings, autoBackup: checked })}
                  />
                </div>

                {settings.autoBackup && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="backupFrequency">Backup Frequency</Label>
                      <Select
                        value={settings.backupFrequency}
                        onValueChange={(value) => setSettings({ ...settings, backupFrequency: value })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="daily">Daily</SelectItem>
                          <SelectItem value="weekly">Weekly</SelectItem>
                          <SelectItem value="monthly">Monthly</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="dataRetention">Data Retention (days)</Label>
                      <Input
                        id="dataRetention"
                        type="number"
                        value={settings.dataRetention}
                        onChange={(e) => setSettings({ ...settings, dataRetention: Number(e.target.value) })}
                      />
                    </div>
                  </div>
                )}

                <Separator />

                <div className="space-y-4">
                  <h3 className="text-lg font-medium">Data Management</h3>
                  <div className="flex gap-4">
                    <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                    <Button variant="outline" className="border-cyan-200 text-cyan-600 hover:bg-cyan-50 bg-transparent">
                      <Upload className="w-4 h-4 mr-2" />
                      Import Data
                    </Button>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Label htmlFor="theme">Theme</Label>
                  <Select value={settings.theme} onValueChange={(value) => setSettings({ ...settings, theme: value })}>
                    <SelectTrigger className="w-48">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="light">Light</SelectItem>
                      <SelectItem value="dark">Dark</SelectItem>
                      <SelectItem value="system">System</SelectItem>
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
