import { testimonials, Testimonial } from '@/data/testimonials';

interface TestimonialsProps {
  title?: string;
  subtitle?: string;
  items?: Testimonial[];
  limit?: number;
}

export default function Testimonials({
  title = 'Mutlu Müşterilerimiz',
  subtitle = 'Gerçek yorumlar, gerçek sosyal kanıt.',
  items,
  limit = 3,
}: TestimonialsProps) {
  const displayItems = items || testimonials.slice(0, limit);

  return (
    <section id="referanslar" className="testimonials-section py-16 bg-white">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4 flex items-center justify-center gap-2">
            {title}
            <i className="fas fa-heart text-red-500"></i>
          </h2>
          <p className="text-lg text-muted">{subtitle}</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayItems.map((testimonial) => (
            <article
              key={testimonial.id}
              className="testimonial-card bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-lg transition-all"
            >
              {/* Star Rating */}
              <div className="text-orange-500 text-xl mb-4 flex justify-center gap-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="fas fa-star"></i>
                ))}
              </div>

              {/* Comment */}
              <blockquote className="text-gray-700 text-center mb-4 leading-relaxed">
                "{testimonial.comment}"
              </blockquote>

              {/* Author */}
              <figcaption className="text-center text-sm text-gray-600 font-medium">
                {testimonial.name} – {testimonial.location}
              </figcaption>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}