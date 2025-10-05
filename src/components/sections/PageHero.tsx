interface PageHeroProps {
    title: string;
    subtitle: string;
  }
  
  export default function PageHero({ title, subtitle }: PageHeroProps) {
    return (
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600 text-white py-20">
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            {title}
          </h1>
          <p className="text-xl max-w-2xl mx-auto drop-shadow-md">
            {subtitle}
          </p>
        </div>
      </section>
    );
  }