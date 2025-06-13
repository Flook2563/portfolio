import { useEffect, useRef } from 'react';

// Experience data constant
const experienceData = [
  {
    position: "Golang Developer",
    company: "Kiatnakin Phatra Financial Group",
    period: "Oct. 2024 - Present",
    startDate: "2024-10-01",
    endDate: null,    
    current: true,
    workType: "Contract"
  },
  {
    position: "Full-Stack Developer", 
    company: "Avalant Co., Ltd.",
    period: "2021 - 2024",
    startDate: "2021-05-17",
    endDate: "2024-09-02",    
    current: false,
    workType: "Full-time"
  }
];

const calculateDuration = (startDate: string, endDate: string | null, current: boolean) => {
  const start = new Date(startDate);
  const end = current ? new Date() : new Date(endDate!);
  
  const diffTime = Math.abs(end.getTime() - start.getTime());
  const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
  
  if (diffYears >= 1) {
    const years = Math.floor(diffYears);
    const months = Math.floor((diffYears - years) * 12);
      if (months === 0) {
      return `${years} ${years === 1 ? 'year' : 'years'}`;
    } else {
      return `${years} ${years === 1 ? 'year' : 'years'} ${months} ${months === 1 ? 'month' : 'months'}`;
    }  } else {
    const months = Math.floor(diffYears * 12);
    return `${months} ${months === 1 ? 'month' : 'months'}`;
  }
};

export const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = aboutRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={aboutRef} className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto"> {/* Changed from max-w-4xl to max-w-6xl */}
          <h2 className="animate-on-scroll text-5xl font-bold mb-12 text-center">
            About Me
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-12 items-start"> {/* Changed md:grid-cols-2 to lg:grid-cols-3 and items-center to items-start */}
            {/* Left Column: Bio, Education, Experience (takes 2/3 width) */}
            <div className="lg:col-span-2 animate-on-scroll">
              {/* Bio Section */}
              <div>
                <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 lucide lucide-file-text"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>
                  Bio
                </h3>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Software Developer with 4 years of experience specializing in Full-Stack and Backend development. Skilled in designing and building high-performance web applications and APIs. Passionate about learning new technologies and committed to delivering high-quality solutions that meet business goals.
                </p>
              </div>
              
              {/* Education and Experience sections */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {/* Education Card */}
                <div className="bg-secondary p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 lucide lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>
                    Education
                  </h3>
                  <div>
                    <h4 className="font-semibold text-lg text-foreground">B.Sc. in Computer Science</h4>
                    <p className="text-muted-foreground text-sm mt-1">University of Phayao, Thailand</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-medium">2017 - 2021</span>
                      <span className="text-xs bg-blue-500/10 text-blue-500 px-2 py-0.5 rounded-full font-medium">GPA : 3.82</span>
                    </div>
                  </div>
                </div>                  {/* Experience Card */}
                <div className="bg-secondary p-6 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out">
                  <h3 className="text-xl font-semibold text-primary mb-4 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-6 w-6 lucide lucide-briefcase"><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                    Experience
                  </h3>
                    {/* Scrollable container for experiences */}
                  <div className="max-h-64 overflow-y-auto scrollbar-hide">
                    {experienceData.map((exp, index) => (
                      <div key={index} className={`${index > 0 ? 'mt-4 pt-4 border-t border-border/50' : ''}`}>                      {/* Two-column layout for position and duration */}
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-semibold text-lg text-foreground flex-1">{exp.position}</h4>
                          <div className="text-right ml-4 flex flex-col gap-1">
                            <span className="text-sm font-medium text-primary bg-primary/10 px-2 py-1 rounded-full">
                              {calculateDuration(exp.startDate, exp.endDate, exp.current)}
                            </span>
                          </div>
                        </div>
                        {/* Company and work type */}
                        <div className="flex justify-between items-center mb-2">
                          <p className="text-foreground/75 text-sm">{exp.company}</p>
                          <span className="text-xs bg-blue-500/10 text-blue-600 px-2 py-0.5 rounded-full font-medium">
                            {exp.workType}
                          </span>
                        </div>
                        
                        {/* Period */}
                        <span className="text-xs bg-secondary-foreground/10 text-secondary-foreground px-2 py-0.5 rounded-full font-medium inline-block">
                          {exp.current ? (
                            <>
                              {exp.period.split(' - ')[0]} - <span className="font-bold">Present</span>
                            </>
                          ) : (
                            exp.period
                          )}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right Column: Profile Info (takes 1/3 width) */}
            <div className="lg:col-span-1 animate-on-scroll flex flex-col items-center">
              <img
                src="/Profile.png" // Updated path to be relative to public folder
                alt="Nattanon Hanpap"
                className="rounded-full shadow-lg w-40 h-40 md:w-48 md:h-48 mx-auto hover:scale-105 hover:shadow-xl transition-transform duration-300 ease-in-out" // Added hover effects
              />
              <div className="mt-3 mb-3 text-center">
                <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out cursor-default inline-flex items-center">
                  <span className="relative flex h-2 w-2 mr-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  Online
                </span>
              </div>
              <h3 className="text-3xl font-bold text-center text-foreground mb-1">Nattanon Hanpap</h3>
              <p className="text-center text-muted-foreground text-md mb-4">Software Developer</p>
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out cursor-default">Golang</span>
                <span className="px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:scale-110 hover:shadow-lg transition-all duration-300 ease-in-out cursor-default">Backend</span>
              </div>
              <a
                href="https://drive.google.com/file/d/1rk9UPBBHQMgU9cUPcjz3cexRzBwP0H3H/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold py-3 px-6 rounded-lg shadow-md flex items-center justify-center transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2 h-5 w-5 lucide lucide-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
