interface WhyUsItem {
    icon: string;
    title: string;
    description: string;
  }
  
  interface WhyUsProps {
    title: string;
    subtitle: string;
    items: WhyUsItem[];
  }
  
  export default function WhyUs({ title, subtitle, items }: WhyUsProps) {
    return (
      <section id="neden-biz" className="why-us-section py-16 bg-white">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {subtitle}
            </p>
          </header>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {items.map((item, index) => (
              <article
                key={index}
                className="pain-card text-center p-6 rounded-lg transition-all hover:shadow-lg"
              >
                <i className={`${item.icon} text-4xl mb-4 text-orange-500`}></i>
                <h3 className="text-xl font-semibold mb-3 text-primary">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }