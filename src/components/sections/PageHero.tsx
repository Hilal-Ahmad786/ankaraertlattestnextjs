interface PageHeroProps {
    title: string;
    subtitle: string;
  }
  
  export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
      <section className="relative text-white py-14 sm:py-20 lg:py-24 overflow-hidden">
        {/* Soft overlay for readability */}
        <div className="absolute inset-0 bg-brand"></div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="hero-heading text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            {title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        </div>
      </section>
    );
  }
