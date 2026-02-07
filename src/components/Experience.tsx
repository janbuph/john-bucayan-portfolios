import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, ArrowUpRight } from "lucide-react";

const experiences = [
  {
    role: "RPA Support Engineer",
    company: "Canon Business Process Services",
    period: "Recent",
    highlights: [
      "Maintained and optimized UiPath automation workflows across enterprise operations",
      "Reduced manual processing time by 70% through intelligent bot orchestration",
      "Provided L2/L3 support for production automation environments",
      "Collaborated with business stakeholders to identify automation opportunities",
    ],
  },
  {
    role: "Application Developer / RPA Developer",
    company: "Quantrics (Bell Canada)",
    period: "Previous",
    highlights: [
      "Developed and deployed RPA solutions using Blue Prism and UiPath",
      "Built custom applications for telecom operations and customer management",
      "Led automation initiatives reducing operational costs and processing errors",
      "Integrated automated workflows with existing enterprise systems",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Red Core Solutions",
    period: "Previous",
    highlights: [
      "Architected and built full-stack web applications using C# .NET and React",
      "Designed RESTful APIs and scalable database solutions with MSSQL and PostgreSQL",
      "Implemented DevOps practices improving deployment frequency and reliability",
      "Mentored junior developers and established coding standards",
    ],
  },
];

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Experience
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Professional{" "}
            <span className="text-gradient">Journey</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A track record of delivering automation solutions and enterprise
            software across diverse industries.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card p-8 hover:shadow-warm transition-all duration-300 group"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-warm-gradient transition-all duration-300">
                      <Briefcase className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-lg font-display font-semibold text-foreground">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium text-sm">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-muted-foreground text-sm leading-relaxed"
                      >
                        <ArrowUpRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
                <span className="text-sm text-muted-foreground font-medium bg-muted px-3 py-1 rounded-full self-start">
                  {exp.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
