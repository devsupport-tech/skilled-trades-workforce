import { services } from '@/lib/config';

export function TrustStrip() {
  return (
    <section className="bg-gray-50 border-y">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Comprehensive Staffing Solutions
          </h2>
          <p className="text-gray-600">
            Flexible staffing arrangements to match your business needs
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {services.staffing.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow text-center"
            >
              <div className="font-semibold text-gray-900 mb-1 text-sm">
                {service.name}
              </div>
              <div className="text-xs text-gray-500 line-clamp-2">
                {service.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
