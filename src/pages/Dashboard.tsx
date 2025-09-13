import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  MousePointer, 
  Users, 
  TrendingUp, 
  Calendar,
  Filter,
  Download,
  Settings,
  Home,
  Target,
  Zap,
  Eye,
  ArrowUp,
  ArrowDown,
  MoreHorizontal,
  Crown,
  Lock,
  UserCheck,
  Globe,
  Brain,
  Lightbulb,
  AlertTriangle,
  CheckCircle,
  TrendingDown,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [selectedTimeRange, setSelectedTimeRange] = useState("7d");
  const [selectedPersona, setSelectedPersona] = useState("all");
  const [viewMode, setViewMode] = useState("general"); // general or persona
  const [planType] = useState("free"); // free or premium
  const [sessionsUsed] = useState(67); // out of 100 for free plan

  // Mock personas data
  const personas = [
    { id: "all", name: "All Users", color: "analytics-blue", count: 8942 },
    { id: "first-time", name: "First-time Visitors", color: "analytics-green", count: 3421 },
    { id: "returning", name: "Returning Users", color: "analytics-orange", count: 4238 },
    { id: "power-users", name: "Power Users", color: "analytics-purple", count: 1283 },
  ];

  // Mock data for the dashboard
  const metrics = [
    {
      title: "Total Page Views",
      value: "24,567",
      change: "+12.5%",
      trend: "up",
      icon: Eye,
    },
    {
      title: "Unique Visitors",
      value: "8,942",
      change: "+8.2%",
      trend: "up",
      icon: Users,
    },
    {
      title: "Conversion Rate",
      value: "3.4%",
      change: "-0.5%",
      trend: "down",
      icon: Target,
    },
    {
      title: "Avg. Session Time",
      value: "2m 34s",
      change: "+15.3%",
      trend: "up",
      icon: TrendingUp,
    },
  ];

  const funnelData = [
    { step: "Landing Page", visitors: 10000, conversion: 100 },
    { step: "Product View", visitors: 7500, conversion: 75 },
    { step: "Add to Cart", visitors: 3000, conversion: 30 },
    { step: "Checkout", visitors: 1200, conversion: 12 },
    { step: "Purchase", visitors: 340, conversion: 3.4 },
  ];

  const topPages = [
    { page: "/", views: 5678, bounce: 45 },
    { page: "/products", views: 4321, bounce: 38 },
    { page: "/about", views: 2890, bounce: 52 },
    { page: "/contact", views: 1567, bounce: 33 },
    { page: "/pricing", views: 1234, bounce: 41 },
  ];

  // AI-generated insights based on the data
  const aiInsights = [
    {
      type: "critical",
      icon: AlertTriangle,
      title: "High Drop-off at Checkout",
      description: "72% of users abandon during checkout. Consider simplifying the checkout process or adding trust signals.",
      recommendation: "Add progress indicators and reduce form fields",
      impact: "Could improve conversion by 15-20%",
      color: "destructive"
    },
    {
      type: "opportunity", 
      icon: Lightbulb,
      title: "Strong Mobile Engagement",
      description: "Mobile users spend 40% more time on product pages. Your mobile UX is performing well.",
      recommendation: "Consider mobile-first design for new features",
      impact: "Mobile conversion rate: 4.2% vs 2.8% desktop",
      color: "analytics-green"
    },
    {
      type: "success",
      icon: CheckCircle,
      title: "CTA Performing Well",
      description: "Your main CTA button has a 35% click-through rate, which is above industry average.",
      recommendation: "Use similar design patterns on other pages",
      impact: "Could boost overall conversion by 8-12%",
      color: "analytics-blue"
    },
    {
      type: "warning",
      icon: TrendingDown,
      title: "Returning User Decline",
      description: "Returning user visits dropped 15% this week. Check for technical issues or content changes.",
      recommendation: "Review recent site changes and user feedback",
      impact: "Monitor closely to prevent further decline",
      color: "analytics-orange"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => navigate('/')}
                className="hover:bg-muted"
              >
                <Home className="w-4 h-4 mr-2" />
                Back to Home
              </Button>
              <div className="h-6 w-px bg-border" />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">InsightFlow</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* Plan indicator */}
              <div className="flex items-center space-x-2 px-3 py-1 bg-muted rounded-lg">
                {planType === "free" ? (
                  <>
                    <div className="w-2 h-2 bg-analytics-orange rounded-full"></div>
                    <span className="text-xs font-medium">Free Plan</span>
                    <span className="text-xs text-muted-foreground">({sessionsUsed}/100 sessions)</span>
                  </>
                ) : (
                  <>
                    <Crown className="w-4 h-4 text-analytics-orange" />
                    <span className="text-xs font-medium">Premium</span>
                  </>
                )}
              </div>

              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <select 
                  value={selectedTimeRange}
                  onChange={(e) => setSelectedTimeRange(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-1 text-sm"
                >
                  <option value="1d">Last 24 hours</option>
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                </select>
              </div>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-muted rounded-lg p-1">
                <Button
                  variant={viewMode === "general" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("general")}
                  className="h-8 px-3"
                >
                  <Globe className="w-4 h-4 mr-1" />
                  General
                </Button>
                <Button
                  variant={viewMode === "persona" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("persona")}
                  className="h-8 px-3"
                >
                  <UserCheck className="w-4 h-4 mr-1" />
                  Persona
                </Button>
              </div>

              {/* Persona selector (only show in persona mode) */}
              {viewMode === "persona" && (
                <select 
                  value={selectedPersona}
                  onChange={(e) => setSelectedPersona(e.target.value)}
                  className="bg-background border border-border rounded-md px-3 py-1 text-sm"
                >
                  {personas.map(persona => (
                    <option key={persona.id} value={persona.id}>
                      {persona.name} ({persona.count.toLocaleString()})
                    </option>
                  ))}
                </select>
              )}

              <Button variant="outline" size="sm">
                <Filter className="w-4 h-4 mr-2" />
                Filters
              </Button>
              <Button variant="outline" size="sm" disabled={planType === "free"}>
                <Download className="w-4 h-4 mr-2" />
                Export {planType === "free" && <Lock className="w-3 h-3 ml-1" />}
              </Button>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="p-6">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2">Analytics Dashboard</h1>
              <p className="text-muted-foreground">
                {viewMode === "general" 
                  ? "Real-time insights into your website performance and user behavior"
                  : `Insights for: ${personas.find(p => p.id === selectedPersona)?.name || "All Users"}`
                }
              </p>
            </div>
            {planType === "free" && (
              <Card className="bg-gradient-to-r from-analytics-orange/10 to-analytics-orange/5 border-analytics-orange/20">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Crown className="w-5 h-5 text-analytics-orange" />
                    <div>
                      <p className="font-medium text-sm">Upgrade to Premium</p>
                      <p className="text-xs text-muted-foreground">Get unlimited sessions & history access</p>
                    </div>
                    <Button size="sm" className="bg-analytics-orange hover:bg-analytics-orange/90 text-white">
                      $19.99/mo
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-gradient-card border-0 hover:shadow-hover transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-analytics-blue/10 flex items-center justify-center`}>
                    <metric.icon className="w-5 h-5 text-analytics-blue" />
                  </div>
                  <Badge 
                    variant={metric.trend === "up" ? "default" : "destructive"}
                    className="text-xs"
                  >
                    {metric.trend === "up" ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                    {metric.change}
                  </Badge>
                </div>
                <div className="space-y-1">
                  <p className="text-2xl font-bold">{metric.value}</p>
                  <p className="text-sm text-muted-foreground">{metric.title}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 mb-8">
          <div className="xl:col-span-2 space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Heatmap Visualization */}
              <Card className="bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <MousePointer className="w-5 h-5 text-analytics-blue" />
                      <span>Click Heatmap</span>
                      {viewMode === "persona" && (
                        <Badge variant="secondary" className="ml-2">
                          {personas.find(p => p.id === selectedPersona)?.name}
                        </Badge>
                      )}
                    </CardTitle>
                    <Button variant="outline" size="sm" disabled={planType === "free"}>
                      View Full {planType === "free" && <Lock className="w-3 h-3 ml-1" />}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="relative bg-gradient-to-br from-muted/30 to-muted/10 rounded-lg p-6 min-h-[350px]">
                    <div className="text-center mb-6">
                      <h3 className="font-semibold mb-2">Homepage Interactions Map</h3>
                      <p className="text-sm text-muted-foreground">
                        {viewMode === "persona" 
                          ? `Click patterns for ${personas.find(p => p.id === selectedPersona)?.name?.toLowerCase()}`
                          : "Click density over the last 7 days"
                        }
                      </p>
                    </div>
                    
                    {/* Visual website mockup with heatmap overlay */}
                    <div className="relative bg-white rounded-lg border-2 border-dashed border-muted mx-auto max-w-md p-4">
                      {/* Header section */}
                      <div className="relative bg-muted/50 rounded p-2 mb-3">
                        <div className="flex items-center justify-between">
                          <div className="w-16 h-3 bg-primary/20 rounded"></div>
                          <div className="flex space-x-1">
                            <div className="w-6 h-3 bg-muted rounded"></div>
                            <div className="w-6 h-3 bg-muted rounded"></div>
                          </div>
                        </div>
                        {/* Hot spot overlay */}
                        <div className="absolute inset-0 bg-analytics-orange/30 rounded pulse-animation"></div>
                        <div className="absolute top-1 right-8 w-6 h-6 bg-red-500/60 rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Hero section */}
                      <div className="relative bg-muted/30 rounded p-4 mb-3">
                        <div className="w-full h-2 bg-muted/70 rounded mb-2"></div>
                        <div className="w-3/4 h-2 bg-muted/70 rounded mb-3"></div>
                        <div className="w-20 h-6 bg-primary/30 rounded mx-auto"></div>
                        {/* Super hot spot */}
                        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-red-500/70 rounded-full animate-pulse"></div>
                      </div>
                      
                      {/* Content sections */}
                      <div className="space-y-2">
                        <div className="relative bg-muted/20 rounded p-2">
                          <div className="w-full h-1 bg-muted/60 rounded mb-1"></div>
                          <div className="w-2/3 h-1 bg-muted/60 rounded"></div>
                          <div className="absolute inset-0 bg-analytics-teal/20 rounded"></div>
                        </div>
                        <div className="bg-muted/20 rounded p-2">
                          <div className="w-full h-1 bg-muted/60 rounded mb-1"></div>
                          <div className="w-1/2 h-1 bg-muted/60 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Footer */}
                      <div className="relative bg-muted/40 rounded p-2 mt-3">
                        <div className="flex justify-between">
                          <div className="w-8 h-2 bg-muted/70 rounded"></div>
                          <div className="w-12 h-2 bg-muted/70 rounded"></div>
                        </div>
                        <div className="absolute inset-0 bg-analytics-teal/20 rounded"></div>
                      </div>
                    </div>

                    {/* Click statistics */}
                    <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                      <div className="p-3 bg-card rounded-lg border">
                        <div className="text-lg font-bold text-red-500">4,789</div>
                        <div className="text-xs text-muted-foreground">CTA Clicks</div>
                      </div>
                      <div className="p-3 bg-card rounded-lg border">
                        <div className="text-lg font-bold text-analytics-orange">2,456</div>
                        <div className="text-xs text-muted-foreground">Nav Clicks</div>
                      </div>
                      <div className="p-3 bg-card rounded-lg border">
                        <div className="text-lg font-bold text-analytics-teal">892</div>
                        <div className="text-xs text-muted-foreground">Footer Clicks</div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>Low Activity</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-3 h-3 bg-analytics-teal rounded-full opacity-40"></div>
                          <div className="w-3 h-3 bg-analytics-orange rounded-full opacity-60"></div>
                          <div className="w-3 h-3 bg-red-500 rounded-full opacity-80"></div>
                        </div>
                        <span>High Activity</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Funnel Analysis */}
              <Card className="bg-gradient-card border-0">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <CardTitle className="flex items-center space-x-2">
                      <Target className="w-5 h-5 text-analytics-orange" />
                      <span>Conversion Funnel</span>
                      {viewMode === "persona" && (
                        <Badge variant="secondary" className="ml-2">
                          {personas.find(p => p.id === selectedPersona)?.name}
                        </Badge>
                      )}
                    </CardTitle>
                    <Button variant="outline" size="sm" disabled={planType === "free"}>
                      <MoreHorizontal className="w-4 h-4" />
                      {planType === "free" && <Lock className="w-3 h-3 ml-1" />}
                    </Button>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {funnelData.map((step, index) => (
                      <div key={index} className="relative">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-base font-medium">{step.step}</span>
                          <div className="flex items-center space-x-6">
                            <span className="text-sm text-muted-foreground">
                              {step.visitors.toLocaleString()} visitors
                            </span>
                            <Badge variant="secondary" className="text-base font-semibold px-3 py-1">
                              {step.conversion}%
                            </Badge>
                          </div>
                        </div>
                        
                        {/* Enhanced funnel bar matching the reference */}
                        <div className="relative">
                          <div className="w-full bg-muted/30 rounded-full h-8">
                            <div 
                              className="bg-gradient-to-r from-analytics-blue to-analytics-teal h-8 rounded-full transition-all duration-500 flex items-center justify-end pr-4"
                              style={{ width: `${Math.max(step.conversion * 2.5, 8)}%` }}
                            >
                              <span className="text-white text-xs font-medium">
                                {step.visitors.toLocaleString()}
                              </span>
                            </div>
                          </div>
                          
                          {/* Drop-off indicator */}
                          {index < funnelData.length - 1 && (
                            <div className="absolute -bottom-6 right-0 text-sm text-muted-foreground bg-card px-2 py-1 rounded border">
                              -{Math.round(((funnelData[index].visitors - funnelData[index + 1].visitors) / funnelData[index].visitors) * 100)}% drop-off
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Funnel insights */}
                  <div className="mt-8 pt-6 border-t">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-analytics-orange mb-1">72%</div>
                        <div className="text-sm text-muted-foreground">Biggest Drop-off</div>
                        <div className="text-xs text-muted-foreground mt-1">Checkout → Purchase</div>
                      </div>
                      <div className="text-center p-4 bg-muted/20 rounded-lg">
                        <div className="text-2xl font-bold text-analytics-green mb-1">3.4%</div>
                        <div className="text-sm text-muted-foreground">Overall Conversion</div>
                        <div className="text-xs text-muted-foreground mt-1">Landing → Purchase</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Top Pages */}
            <Card className="bg-gradient-card border-0">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center space-x-2">
                    <Zap className="w-5 h-5 text-analytics-green" />
                    <span>Top Performing Pages</span>
                    {viewMode === "persona" && (
                      <Badge variant="secondary" className="ml-2">
                        {personas.find(p => p.id === selectedPersona)?.name}
                      </Badge>
                    )}
                  </CardTitle>
                  {planType === "free" && (
                    <Badge variant="outline" className="text-analytics-orange border-analytics-orange">
                      <Lock className="w-3 h-3 mr-1" />
                      History locked
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-3 font-medium text-muted-foreground">Page</th>
                        <th className="text-right p-3 font-medium text-muted-foreground">Views</th>
                        <th className="text-right p-3 font-medium text-muted-foreground">Bounce Rate</th>
                        <th className="text-right p-3 font-medium text-muted-foreground">Trend</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topPages.map((page, index) => (
                        <tr key={index} className="border-b last:border-0 hover:bg-muted/20 transition-colors">
                          <td className="p-3">
                            <code className="text-sm bg-muted px-2 py-1 rounded">{page.page}</code>
                          </td>
                          <td className="p-3 text-right font-medium">
                            {page.views.toLocaleString()}
                          </td>
                          <td className="p-3 text-right">
                            <Badge variant={page.bounce > 50 ? "destructive" : "secondary"}>
                              {page.bounce}%
                            </Badge>
                          </td>
                          <td className="p-3 text-right">
                            <div className="w-12 h-6 bg-analytics-blue/20 rounded flex items-center justify-center">
                              <TrendingUp className="w-4 h-4 text-analytics-blue" />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* AI Insights Sidebar */}
          <div className="space-y-6">
            <Card className="bg-gradient-to-br from-analytics-purple/5 to-analytics-blue/5 border-analytics-purple/20">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center space-x-2">
                  <Brain className="w-5 h-5 text-analytics-purple" />
                  <span>AI Insights</span>
                  {planType === "free" && (
                    <Crown className="w-4 h-4 text-analytics-orange ml-2" />
                  )}
                </CardTitle>
                {planType === "free" && (
                  <p className="text-xs text-muted-foreground">
                    Upgrade to Premium for AI-powered insights and recommendations
                  </p>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                {planType === "premium" ? (
                  aiInsights.map((insight, index) => (
                    <div key={index} className="p-4 bg-card rounded-lg border">
                      <div className="flex items-start space-x-3">
                        <div className={`w-8 h-8 rounded-lg bg-${insight.color}/10 flex items-center justify-center flex-shrink-0`}>
                          <insight.icon className={`w-4 h-4 text-${insight.color}`} />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm mb-2">{insight.title}</h4>
                          <p className="text-xs text-muted-foreground mb-3 leading-relaxed">
                            {insight.description}
                          </p>
                          <div className="space-y-2">
                            <div className="bg-muted/50 rounded p-2">
                              <p className="text-xs font-medium text-analytics-blue mb-1">
                                💡 Recommendation:
                              </p>
                              <p className="text-xs text-muted-foreground">
                                {insight.recommendation}
                              </p>
                            </div>
                            <div className="bg-analytics-green/10 rounded p-2">
                              <p className="text-xs font-medium text-analytics-green">
                                📈 Impact: {insight.impact}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="p-6 text-center bg-muted/20 rounded-lg border-2 border-dashed">
                    <Brain className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="font-semibold text-sm mb-2">AI Insights Locked</h4>
                    <p className="text-xs text-muted-foreground mb-4">
                      Get personalized recommendations and insights with Premium
                    </p>
                    <Button size="sm" className="bg-analytics-orange hover:bg-analytics-orange/90 text-white">
                      <Crown className="w-3 h-3 mr-1" />
                      Upgrade to Premium
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-card border-0">
              <CardHeader className="pb-4">
                <CardTitle className="text-base">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" size="sm" className="w-full justify-start" disabled={planType === "free"}>
                  <Download className="w-4 h-4 mr-2" />
                  Export Report
                  {planType === "free" && <Lock className="w-3 h-3 ml-auto" />}
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Configure Tracking
                </Button>
                <Button variant="outline" size="sm" className="w-full justify-start">
                  <Filter className="w-4 h-4 mr-2" />
                  Create Custom Filter
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;