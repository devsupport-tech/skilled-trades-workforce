import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CloudRain, Users, Building2, MapPin } from 'lucide-react';

export function StormCenterFeature() {
  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 text-white rounded-full mb-4">
              <CloudRain className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              National Storm Response Workforce Center
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connecting skilled workers and complete crews with disaster response opportunities nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Individual Workers</CardTitle>
                <CardDescription>
                  Register your skills and deployment preferences for storm response opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/storm-center/register">Register as Worker</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Crew Leaders</CardTitle>
                <CardDescription>
                  Register your established crew for nationwide deployment opportunities
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/storm-center/register-crew">Register Your Crew</Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                  <Building2 className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-lg">Response Employers</CardTitle>
                <CardDescription>
                  Request qualified workers or complete crews for disaster recovery projects
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="outline" className="w-full" asChild>
                  <Link href="/storm-center/request-crews">Request Storm Crews</Link>
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-6 shadow-sm">
            <div className="flex items-start space-x-3">
              <MapPin className="h-5 w-5 text-orange-600 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Nationwide Deployment</h3>
                <p className="text-sm text-gray-600">
                  Storm response workers and crews are registered for deployment opportunities across the United States. Registration is an expression of interest and does not guarantee deployment. All assignments are subject to availability, qualifications verification, and mutual agreement.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/storm-center"
              className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700 transition-colors"
            >
              Learn More About Storm Center →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
