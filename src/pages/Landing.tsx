
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  MousePointer,
  BarChart3,
  Zap,
  Download,
  Eye,
  Code,
  TrendingUp,
  Target,
  ArrowRight,
  Play,
  Check,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Landing = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: MousePointer,
      title: "Click & Scroll Heatmaps",
      description:
        "Visual maps showing exactly where users click and how far they scroll on each page.",
      color: "analytics-blue",
    },
    {
      icon: Target,
      title: "Funnel Analysis",
      description:
        "Track user flows and identify where visitors drop off in your conversion process.",
      color: "analytics-orange",
    },
    {
      icon: Zap,
      title: "Real-Time Dashboard",
      description:
        "Live insights with filters, alerts, and comprehensive data visualizations.",
      color: "analytics-teal",
    },
    {
      icon: Download,
      title: "Export & Integration",
      description:
        "Export data in multiple formats and integrate with your existing tools.",
      color: "analytics-purple",
    },
    {
      icon: Code,
      title: "Easy Installation",
      description:
        "One script tag and you're ready to go. No complex setup required.",
      color: "analytics-green",
    },
    {
      icon: Eye,
      title: "Invisible Operation",
      description:
        "Runs silently in the background without affecting user experience.",
      color: "analytics-blue",
    },
  ];

  const stats = [
    { number: "$5.9M+", label: "SOM" },
    { number: "$2.9B+", label: "Market Valuation" },
    { number: "60%", label: "Accessible TAM" },
  ];

  const [copied, setCopied] = useState(false);
  const scriptUrl = "https://hackathon-cdn.opencnt.com/dist/script.min.js";

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(scriptUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // reset after 2s
    } catch (e) {
      console.error("Failed to copy", e);
    }
  }


  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-card/50 backdrop-blur-sm sticky top-0 z-50 w-full">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-analytics-blue to-analytics-teal rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">StandLog</span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#features"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Pricing
              </a>
              <a
                href="#setup"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Setup
              </a>
              <Button variant="outline" size="sm">
                Login
              </Button>
              <Button
                size="sm"
                onClick={() => navigate("/dashboard")}
                className="bg-primary hover:bg-primary/90"
              >
                Live Demo
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-6">
            🚀 Trusted by 1000+ businesses
          </Badge>

          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-green-500 bg-clip-text text-transparent">
            Understand Your Users
            <br />
            Like Never Before
          </h1>

          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Get deep insights into user behavior with heatmaps, funnel analysis,
            and real-time analytics. Make data-driven decisions that boost
            conversions.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              onClick={() => navigate("/dashboard")}
              className="bg-gradient-to-r from-analytics-blue to-analytics-teal text-white hover:shadow-glow transition-all duration-300"
            >
              <Play className="w-5 h-5 mr-2" />
              View Live Demo
            </Button>
            <Button variant="outline" size="lg">
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-md mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Powerful Analytics Features
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to understand user behavior and optimize your
              website for better conversions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="group hover:shadow-hover transition-all duration-300 border-0 bg-gradient-card"
              >
                <CardContent className="p-8">
                  <div
                    className={`w-12 h-12 rounded-lg bg-${feature.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className={`w-6 h-6 text-${feature.color}`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Setup Section */}
      <section id="setup" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Setup in Minutes</h2>
            <p className="text-xl text-muted-foreground">
              Add one line of code and start collecting insights immediately.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="bg-muted border-0">
              <CardContent className="p-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">
                      Copy & Paste Installation
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      Just add this script to your website and you're ready to go. 
                      No complex configuration needed.
                    </p>
                    <div className="bg-card rounded-lg p-4 border font-mono text-sm mb-6">
                      <code className="text-primary">
                        {`${scriptUrl}`}
                      </code>
                    </div>
                    <Button
                      onClick={handleCopy}
                      className="bg-primary hover:bg-primary/90"
                    >
                      {copied ? (
                        <>
                          Copied! <Check className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Copy Link <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                  <div className="bg-card rounded-lg p-6 border">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-analytics-green/10 rounded-full flex items-center justify-center">
                          <span className="text-analytics-green font-semibold">
                            1
                          </span>
                        </div>
                        <span>Create your account</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-analytics-blue/10 rounded-full flex items-center justify-center">
                          <span className="text-analytics-blue font-semibold">
                            2
                          </span>
                        </div>
                        <span>Add the script to your site</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-analytics-orange/10 rounded-full flex items-center justify-center">
                          <span className="text-analytics-orange font-semibold">
                            3
                          </span>
                        </div>
                        <span>Start collecting insights</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-muted-foreground">
              Start free, upgrade when you need more insights and history
              access.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <Card className="bg-muted border-0 relative">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Free</h3>
                  <div className="text-4xl font-bold mb-2">$0</div>
                  <p className="text-muted-foreground">
                    Perfect for getting started
                  </p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-analytics-green rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>500 sessions per month</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-analytics-green rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Real-time heatmaps</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-analytics-green rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Basic funnel analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-analytics-green rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span>Current data only</span>
                  </div>
                  <div className="flex items-center space-x-3 opacity-50">
                    <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">✗</span>
                    </div>
                    <span>No historical data</span>
                  </div>
                  <div className="flex items-center space-x-3 opacity-50">
                    <div className="w-5 h-5 bg-muted rounded-full flex items-center justify-center">
                      <span className="text-muted-foreground text-xs">✗</span>
                    </div>
                    <span>No data export</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  Get Started Free
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-primary text-white border-0 relative transform scale-105">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-analytics-orange text-white">
                  Most Popular
                </Badge>
              </div>
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">Premium</h3>
                  <div className="text-4xl font-bold mb-2">$19.99</div>
                  <p className="text-white/90">per month</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Unlimited sessions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Advanced heatmaps & personas</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Complete funnel analysis</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Full historical data</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Data export (CSV, PDF)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>AI-powered insights</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Priority support</span>
                  </div>
                </div>

                <Button
                  variant="secondary"
                  className="w-full bg-white text-primary hover:bg-white/90"
                >
                  Start Premium Trial
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">
              Need more? We offer enterprise plans for large organizations.
            </p>
            <Button variant="outline">Contact Sales</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-analytics-blue to-analytics-teal text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Understand Your Users?
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using StandLog to optimize
            their websites and boost conversions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate("/dashboard")}
              className="bg-white text-primary hover:bg-white/90"
            >
              <TrendingUp className="w-5 h-5 mr-2" />
              Try Live Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white bg-primary text-white hover:bg-white/10"
            >
              Start Free Trial
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">StandLog</span>
            </div>
            <div className="text-sm text-muted-foreground">
              © 2024 StandLog. Built for the hackathon.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
