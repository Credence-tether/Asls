import Link from 'next/link';
import { Package, Truck, MapPin, Shield, Clock, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Package className="h-8 w-8 text-slate-800" />
            <span className="text-xl font-bold text-slate-800">AFGHCO</span>
          </div>
          <div className="flex items-center space-x-6">
            <Link href="/tracking">
              <Button variant="ghost">Track Shipment</Button>
            </Link>
            <Link href="/quote">
              <Button variant="ghost">Get Quote</Button>
            </Link>
            <Link href="/admin">
              <Button variant="outline" size="sm">Admin</Button>
            </Link>
          </div>
        </div>
      </nav>

      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <h1 className="text-5xl font-bold text-slate-900 leading-tight">
            Professional Logistics Solutions
            <br />
            <span className="text-slate-600">Across Afghanistan</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Fast, secure, and reliable shipping services connecting cities and
            communities throughout the country.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <Link href="/tracking">
              <Button size="lg" className="h-12 px-8">
                <MapPin className="mr-2 h-5 w-5" />
                Track Shipment
              </Button>
            </Link>
            <Link href="/quote">
              <Button size="lg" variant="outline" className="h-12 px-8">
                Get Quote
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-slate-200 hover:border-slate-300 transition-colors">
            <CardContent className="pt-6">
              <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center mb-4">
                <Truck className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Fast Delivery
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Express shipping options with guaranteed delivery times across
                major cities and regions.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:border-slate-300 transition-colors">
            <CardContent className="pt-6">
              <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Secure Handling
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Your packages are handled with utmost care and security at every
                step of the journey.
              </p>
            </CardContent>
          </Card>

          <Card className="border-slate-200 hover:border-slate-300 transition-colors">
            <CardContent className="pt-6">
              <div className="rounded-full bg-slate-100 w-12 h-12 flex items-center justify-center mb-4">
                <Clock className="h-6 w-6 text-slate-700" />
              </div>
              <h3 className="text-lg font-semibold text-slate-900 mb-2">
                Real-Time Tracking
              </h3>
              <p className="text-slate-600 leading-relaxed">
                Monitor your shipment status 24/7 with our advanced tracking
                system and live updates.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4">Why Choose AFGHCO?</h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                With years of experience in the logistics industry, we provide
                comprehensive shipping solutions tailored to your needs.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Globe className="h-5 w-5 mr-3 mt-1 text-slate-400" />
                  <span className="text-slate-200">
                    Nationwide coverage across all provinces
                  </span>
                </li>
                <li className="flex items-start">
                  <Shield className="h-5 w-5 mr-3 mt-1 text-slate-400" />
                  <span className="text-slate-200">
                    Insurance options for valuable cargo
                  </span>
                </li>
                <li className="flex items-start">
                  <Clock className="h-5 w-5 mr-3 mt-1 text-slate-400" />
                  <span className="text-slate-200">
                    24/7 customer support and assistance
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-slate-800 rounded-lg p-8">
              <h3 className="text-2xl font-semibold mb-4">Get Started Today</h3>
              <p className="text-slate-300 mb-6">
                Request a quote or track your existing shipment.
              </p>
              <div className="space-y-3">
                <Link href="/quote" className="block">
                  <Button variant="secondary" className="w-full" size="lg">
                    Request Quote
                  </Button>
                </Link>
                <Link href="/tracking" className="block">
                  <Button variant="outline" className="w-full" size="lg">
                    Track Shipment
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t bg-white py-8">
        <div className="container mx-auto px-4 text-center text-slate-600">
          <p>&copy; 2024 AFGHCO Shipping and Logistics Services. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
