
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const highlights = [
  { label: '5+ Years Experience', key: 'experience' },
  { label: '50+ Projects Completed', key: 'projects' },
  { label: 'Startup Founder', key: 'founder' },
];

export const About = () => {
  const aboutRef = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="animate-on-scroll text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-on-scroll space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with over 5 years of experience
                creating innovative web solutions. I specialize in building scalable
                applications using modern technologies like React, Node.js, and TypeScript.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                My expertise spans across frontend frameworks, backend development,
                database design, and cloud deployment. I'm constantly learning and
                adapting to new technologies to deliver cutting-edge solutions.
              </p>
              
              <div className="flex flex-wrap gap-4">
                {highlights.map(({ label, key }) => (
                  <span 
                    key={key}
                    className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="animate-on-scroll">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&h=400&fit=crop"
                alt="Developer workspace"
                className="rounded-lg shadow-2xl w-full h-auto"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
