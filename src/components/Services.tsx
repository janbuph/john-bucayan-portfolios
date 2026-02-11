import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Workflow, Wrench } from "lucide-react";

type ServiceLogo = {
  name: string;
  url: string;
};

type Service = {
  logos: ServiceLogo[];
  title: string;
  description: string;
  icon?: typeof Workflow;
};

const services: Service[] = [
  {
    logos: [
      { name: "UiPath", url: "https://cdn.simpleicons.org/uipath" },
      { name: "Blue Prism", url: "https://cdn.simpleicons.org/blueprism" },
      { name: "Power Automate", url: "https://cdn.simpleicons.org/powerautomate" },
    ],
    title: "RPA Automation",
    description:
      "End-to-end robotic process automation using UiPath, Blue Prism, and Microsoft Power Automate to eliminate manual, repetitive tasks.",
  },
  {
    icon: Workflow,
    logos: [],
    title: "Business Process Automation",
    description:
      "Streamline workflows and optimize business processes with intelligent automation strategies that deliver measurable ROI.",
  },
  {
    logos: [
      { name: "Power BI", url: "https://cdn.simpleicons.org/powerbi" },
    ],
    title: "Microsoft Power BI",
    description:
      "Transform raw data into actionable insights with custom Power BI dashboards, reports, and real-time analytics.",
  },
  {
    logos: [
      { name: "Smartsheet", url: "https://cdn.simpleicons.org/smartsheet" },
    ],
    title: "Smartsheet Automation",
    description:
      "Automate project management and collaboration workflows within Smartsheet for improved team productivity.",
  },
  {
    logos: [
      { name: "C#", url: "https://cdn.simpleicons.org/csharp" },
      { name: "PHP", url: "https://cdn.simpleicons.org/php" },
      { name: "Python", url: "https://cdn.simpleicons.org/python" },
      { name: "Django", url: "https://cdn.simpleicons.org/django/white" },
      { name: "React", url: "https://cdn.simpleicons.org/react" },
      { name: "jQuery", url: "https://cdn.simpleicons.org/jquery" },
      { name: "HTML5", url: "https://cdn.simpleicons.org/html5" },
      { name: "CSS3", url: "https://cdn.simpleicons.org/css3" },
    ],
    title: "Full-Stack Development",
    description:
      "Build robust web applications and software solutions using React, C# .NET, Python, Django, and modern frameworks.",
  },
  {
    logos: [
      { name: "PostgreSQL", url: "https://cdn.simpleicons.org/postgresql" },
      { name: "MySQL", url: "https://cdn.simpleicons.org/mysql" },
      { name: "MSSQL", url: "https://cdn.simpleicons.org/microsoftsqlserver" },
    ],
    title: "API Integration & Database Design",
    description:
      "Design scalable database architectures and seamless REST API integrations connecting your systems together.",
  },
  {
    icon: Wrench,
    logos: [],
    title: "Automation Support & Maintenance",
    description:
      "Ongoing monitoring, support, and optimization of automated processes to ensure peak performance.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="section-padding bg-section-alt" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-primary font-semibold text-sm tracking-widest uppercase">
            Services
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground">
            How I Can Help Your{" "}
            <span className="text-gradient">Business Grow</span>
          </h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            From automating workflows to building full-stack solutions, I deliver
            end-to-end services designed for efficiency and scale.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass-card p-7 hover:shadow-warm hover:-translate-y-1 transition-all duration-300 group cursor-default"
            >
              {service.logos.length > 0 ? (
                <div className="flex flex-wrap gap-3 mb-5">
                  {service.logos.map((logo) => (
                    <div
                      key={logo.name}
                      className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors p-2"
                      title={logo.name}
                    >
                      <img
                        src={logo.url}
                        alt={logo.name}
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                  ))}
                </div>
              ) : service.icon ? (
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-warm-gradient group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
              ) : null}
              <h3 className="text-lg font-display font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
