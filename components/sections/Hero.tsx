import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            The Right People. The Right Opportunities.
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl">
            Staffing and recruiting solutions for Greater Houston businesses, with opportunities for skilled trades, office professionals, industrial teams, and more.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="xl" variant="default" className="bg-white text-blue-600 hover:bg-gray-100" asChild>
              <Link href="/employers/request-workers">
                Request Employees
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="xl" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link href="/jobs">
                Find Jobs & Apply
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Decorative element */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
