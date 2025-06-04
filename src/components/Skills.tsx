
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { MY_STACK } from '@/lib/skillsData';

export const Skills = () => {
  const skillsRef = useIntersectionObserver({ 
    threshold: 0.1, 
    triggerOnce: true 
  });

  return (
    <section id="skills" ref={skillsRef} className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold mb-16 text-center">
          My Stack
        </h2>

        <div className="space-y-20">
          {Object.entries(MY_STACK).map(([category, skills]) => (
            <div className="grid sm:grid-cols-12 gap-8" key={category}>
              <div className="sm:col-span-5">
                <h3 className="slide-up text-5xl font-bold leading-none text-muted-foreground uppercase tracking-wider">
                  {category}
                </h3>
              </div>

              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap">
                {skills.map((skill) => (
                  <div
                    className="slide-up flex gap-3.5 items-center leading-none group hover:scale-105 transition-transform duration-200"
                    key={skill.name}
                  >
                    <div className="w-10 h-10 flex items-center justify-center">
                      <img
                        src={skill.icon}
                        alt={`${skill.name} icon`}
                        className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-200"
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                        }}
                      />
                    </div>
                    <span className="text-2xl capitalize font-medium">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
