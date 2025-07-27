"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Eye, EyeOff, Sparkles } from "lucide-react"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (userType: "owner" | "dealer") => {
    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (userType === "owner") {
      router.push("/owner/dashboard")
    } else {
      router.push("/dealer/dashboard")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Branding */}
        <div className="text-center md:text-left space-y-6">
          <div className="flex items-center justify-center md:justify-start gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">CosmetiCare</h1>
              <p className="text-sm text-gray-600">Dealer Management System</p>
            </div>
          </div>
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Manage Your Cosmetics Business</h2>
            <p className="text-gray-600 text-lg">
              Streamline your distribution network with our comprehensive management platform
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-pink-100">
                <div className="text-2xl font-bold text-pink-600">500+</div>
                <div className="text-sm text-gray-600">Products</div>
              </div>
              <div className="text-center p-4 bg-white rounded-lg shadow-sm border border-pink-100">
                <div className="text-2xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-gray-600">Dealers</div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <Card className="w-full max-w-md mx-auto border-pink-200 shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
            <CardDescription>Sign in to your account</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="owner" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="owner" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                  Owner
                </TabsTrigger>
                <TabsTrigger value="dealer" className="data-[state=active]:bg-pink-500 data-[state=active]:text-white">
                  Dealer
                </TabsTrigger>
              </TabsList>

              <TabsContent value="owner" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="owner-email">Email</Label>
                  <Input
                    id="owner-email"
                    type="email"
                    placeholder="owner@cosmeticare.com"
                    className="focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="owner-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="owner-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="focus:border-pink-500 focus:ring-pink-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                  onClick={() => handleLogin("owner")}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in as Owner"}
                </Button>
              </TabsContent>

              <TabsContent value="dealer" className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="dealer-email">Email</Label>
                  <Input
                    id="dealer-email"
                    type="email"
                    placeholder="dealer@example.com"
                    className="focus:border-pink-500 focus:ring-pink-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="dealer-password">Password</Label>
                  <div className="relative">
                    <Input
                      id="dealer-password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      className="focus:border-pink-500 focus:ring-pink-500 pr-10"
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                  onClick={() => handleLogin("dealer")}
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in as Dealer"}
                </Button>
              </TabsContent>
            </Tabs>

            <div className="mt-6 text-center">
              <Button variant="link" className="text-pink-600 hover:text-pink-700">
                Forgot your password?
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
