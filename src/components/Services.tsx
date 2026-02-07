import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Bot,
  Workflow,
  BarChart3,
  TableProperties,
  Globe,
  Plug,
  Wrench,
} from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "RPA Automation",
    description:
      "End-to-end robotic process automation using UiPath, Blue Prism, and Microsoft Power Automate to eliminate manual, repetitive tasks.",
  },
  {
    icon: Workflow,
    title: "Business Process Automation",
    description:
      "Streamline workflows and optimize business processes with intelligent automation strategies that deliver measurable ROI.",
  },
  {
    icon: BarChart3,
    title: "Microsoft Power BI",
    description:
      "Transform raw data into actionable insights with custom Power BI dashboards, reports, and real-time analytics.",
  },
  {
    icon: TableProperties,
    title: "Smartsheet Automation",
    description:
      "Automate project management and collaboration workflows within Smartsheet for improved team productivity.",
  },
  {
    icon: Globe,
    title: "Full-Stack Development",
    description:
      "Build robust web applications and software solutions using React, C# .NET, Python, Django, and modern frameworks.",
  },
  {
    icon: Plug,
    title: "API Integration & Database Design",
    description:
      "Design scalable database architectures and seamless REST API integrations connecting your systems together.",
  },
  {
    icon: Wrench,
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
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-warm-gradient group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
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
