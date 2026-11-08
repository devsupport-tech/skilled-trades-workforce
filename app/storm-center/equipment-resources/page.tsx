import { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { Truck, CheckCircle, ArrowRight, ArrowLeft } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Equipment & Resources | Storm Center',
  description: 'Equipment sourcing, tool rental, and resource coordination for storm response contractors.',
  keywords: ['equipment rental', 'storm equipment', 'contractor resources', 'tool rental'],
};

const equipmentCategories = [
  'Generators and temporary power',
  'Dehumidifiers and air movers',
  'Construction equipment and tools',
  'Safety equipment and PPE',
  'Vehicles and transportation',
  'Scaffolding and lifts',
  'Pumps and water extraction',
  'Storage containers and facilities',
];

const resources = [
  { title: 'Equipment Rental', description: 'Industrial equipment and tool sourcing' },
  { title: 'Vehicle Fleet', description: 'Trucks, trailers, and specialty vehicles' },
  { title: 'Housing Coordination', description: 'Crew accommodations and lodging' },
  { title: 'Supply Procurement', description: 'Materials, parts, and supplies' },
];

export default function EquipmentResourcesPage() {
  return (
    <>
      <section className="bg-gray-50 py-4 border-b">
        <div className="container mx-auto px-4">
          <Link
            href="/storm-center"
            className="inline-flex items-center text-red-700 hover:text-red-800 text-sm font-medium"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Storm Center
          </Link>
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Equipment & Resources
            </h1>
            <p className="text-xl text-indigo-100 mb-8">
              Equipment sourcing, tool rental, and logistical support for storm response contractors and restoration crews.
            </p>
            <Button size="lg" variant="default" className="bg-white text-indigo-700 hover:bg-indigo-50" asChild>
              <Link href="/storm-center/equipment-availability">
                Submit Equipment Availability
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment & Resource Coordination</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Storm response requires significant equipment and resources. We coordinate equipment rental, vehicle fleet access, crew housing, and supply procurement to support contractors in the field.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Equipment Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {equipmentCategories.map((category, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{category}</span>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">Resource Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {resources.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                      <Truck className="h-5 w-5 text-indigo-600" />
                    </div>
                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </CardHeader>
                </Card>
              ))}
            </div>

            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6 mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Equipment Providers</h3>
              <p className="text-gray-700 mb-4">
                If you have equipment, vehicles, housing, or other resources available for storm response contractors, register with our Storm Center. We connect resource providers with contractors who need them.
              </p>
              <Button asChild>
                <Link href="/storm-center/equipment-availability">
                  Submit Equipment Availability
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">For Contractors</h3>
              <p className="text-gray-700 mb-4">
                Need equipment or resources for storm response work? Contact our coordination center. We work with equipment rental companies, fleet providers, and housing coordinators throughout the Gulf Coast.
              </p>
              <Button variant="outline" asChild>
                <Link href="/storm-center/crew-deployment">
                  Request Equipment Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Equipment or Resource Coordination Needed?
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Let us help source the equipment and resources your crews need
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/storm-center/crew-deployment">
                  Request Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Contact Storm Center</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
