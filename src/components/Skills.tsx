import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    category: "RPA & Automation",
    skills: ["UiPath", "Blue Prism", "Power Automate", "Smartsheet"],
  },
  {
    category: "Programming Languages",
    skills: ["Python", "C# .NET", "PHP", "JavaScript", "TypeScript"],
  },
  {
    category: "Frontend Frameworks",
    skills: ["React", "Angular", "Blazor", "HTML", "CSS"],
  },
  {
    category: "Backend Frameworks",
    skills: ["Django", "ASP.NET", "Node.js"],
  },
  {
    category: "Databases",
    skills: ["PostgreSQL", "MSSQL", "MySQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Microsoft 365", "Power BI", "REST APIs", "Git"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Technology Stack
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            Skills & <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            A comprehensive toolkit built over 10+ years of automating businesses
            and building scalable software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group"
            >
              <h3 className="text-sm font-semibold text-primary tracking-widest uppercase mb-4">
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-lg bg-card border border-border text-foreground text-sm font-medium hover:border-primary/40 hover:bg-primary/5 hover:shadow-warm transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
