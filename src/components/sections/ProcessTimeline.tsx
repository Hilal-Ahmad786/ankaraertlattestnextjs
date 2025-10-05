interface ProcessStep {
    icon: string;
    title: string;
    description: string;
  }
  
  interface ProcessTimelineProps {
    title: string;
    subtitle: string;
    steps: ProcessStep[];
  }
  
  export default function ProcessTimeline({
    title,
    subtitle,
    steps,
  }: ProcessTimelineProps) {
    return (
      <section id="surec" className="process-timeline py-16 bg-light">
        <div className="container mx-auto px-4">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              {title}
            </h2>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              {subtitle}
            </p>
          </header>
  
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="timeline-step text-center flex-1 relative"
                >
                  <div className="timeline-icon mx-auto mb-4">
                    <i className={step.icon}></i>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-primary">
                    {index + 1}. {step.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }