interface DamageType {
  icon: string;
  title: string;
  description: string;
}

interface DamageTypesGridProps {
  title: string;
  subtitle?: string;
  items: DamageType[];
}

/**
 * Every competitor page we checked (kazaliaracinisat.com.tr, hasarliaracalim.com.tr)
 * breaks damage type into 6+ sub-categories (motor arızalı, şanzıman arızalı, yanık,
 * çekme belgeli, ticari araç...) instead of one generic pitch. Real search volume
 * exists for these sub-types individually; this section names them explicitly so
 * the page targets that demand instead of only the umbrella term.
 */
export default function DamageTypesGrid({ title, subtitle, items }: DamageTypesGridProps) {
  return (
    <section className="py-14 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">{title}</h2>
          {subtitle && <p className="mt-3 text-gray-600">{subtitle}</p>}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-orange-200 transition"
            >
              <i className={`${item.icon} text-orange-500 text-2xl mb-3`} aria-hidden></i>
              <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
