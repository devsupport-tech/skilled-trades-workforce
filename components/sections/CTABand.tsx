import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface CTABandProps {
  title: string;
  description: string;
  primaryCTA: {
    label: string;
    href: string;
  };
  secondaryCTA?: {
    label: string;
    href: string;
  };
  variant?: 'default' | 'gradient';
}

export function CTABand({
  title,
  description,
  primaryCTA,
  secondaryCTA,
  variant = 'default',
}: CTABandProps) {
  const bgClass = variant === 'gradient'
    ? 'bg-gradient-to-r from-blue-600 to-blue-800'
    : 'bg-blue-600';

  return (
    <section className={`${bgClass} text-white py-16`}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="default"
              className="bg-white text-blue-600 hover:bg-gray-100"
              asChild
            >
              <Link href={primaryCTA.href}>
                {primaryCTA.label}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            {secondaryCTA && (
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href={secondaryCTA.href}>
                  {secondaryCTA.label}
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
