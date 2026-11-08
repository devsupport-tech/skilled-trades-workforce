import Link from 'next/link';
import { jobCategories } from '@/lib/config';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight, Wrench, Building, FileText, Users, Calculator, UserCheck, Phone, Factory, Package, ClipboardList, Monitor } from 'lucide-react';

const iconMap: Record<string, any> = {
  'construction-skilled-trades': Wrench,
  'restoration-disaster-recovery': Building,
  'administrative-clerical': FileText,
  'office-management': Users,
  'accounting-finance': Calculator,
  'human-resources': UserCheck,
  'customer-service-sales': Phone,
  'industrial-manufacturing': Factory,
  'warehouse-logistics': Package,
  'construction-office-support': ClipboardList,
  'remote-virtual': Monitor,
};

export function IndustryCards() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From construction sites to corporate offices, we connect talent across all major industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {jobCategories.map((category) => {
            const Icon = iconMap[category.id] || Wrench;
            return (
              <Link
                key={category.id}
                href={`/industries/${category.slug}`}
                className="group"
              >
                <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                    <CardTitle className="mt-4">{category.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {category.examples}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/industries"
            className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors"
          >
            View All Industries
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
