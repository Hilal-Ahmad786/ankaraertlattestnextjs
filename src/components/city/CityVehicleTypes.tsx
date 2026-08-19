import Link from 'next/link';
import { City } from '@/types';
import { services } from '@/data/services';

interface CityVehicleTypesProps {
    city: City;
}

/**
 * Replaces the former "son alınan araçlar" block, which rendered invented
 * transactions permanently stamped "2 saat önce". This lists the vehicle
 * conditions actually bought, linking to each service page.
 */
export default function CityVehicleTypes({ city }: CityVehicleTypesProps) {
    return (
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2 flex items-center gap-2">
                <i className="fas fa-list-check text-accent-ink"></i>
                {city.name} Bölgesinde Aldığımız Araçlar
            </h2>
            <p className="text-sm text-gray-500 mb-6">
                Aşağıdaki durumlardaki araçlar için {city.name} ve çevre ilçelerinden
                başvuru alıyoruz. Aracınızın durumu listede yoksa da bize yazabilirsiniz.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
                {services.map((service) => (
                    <Link
                        key={service.id}
                        href={`/${service.slug}`}
                        className="flex items-start gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:border-accent hover:bg-white transition"
                    >
                        <div className="w-10 h-10 shrink-0 bg-white rounded-full flex items-center justify-center text-accent-ink shadow-sm border border-gray-100">
                            <i className={service.icon}></i>
                        </div>
                        <div>
                            <h3 className="font-bold text-gray-800 text-sm">{service.title}</h3>
                            <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                                {service.shortDescription}
                            </p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
