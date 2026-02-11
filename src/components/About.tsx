import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Code, BarChart3, Users } from "lucide-react";
import myAvatar from "@/assets/myavatar.png";

const stats = [
  { icon: Zap, value: "10+", label: "Years Experience" },
  { icon: Code, value: "50+", label: "Projects Delivered" },
  { icon: BarChart3, value: "90%", label: "Process Efficiency Gains" },
  { icon: Users, value: "20+", label: "Clients Served" },
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr_auto] gap-12 lg:gap-10 items-center">
          {/* Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex justify-center lg:justify-start"
          >
            <img
              src={myAvatar}
              alt="John Bucayan"
              className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 rounded-full object-cover shadow-lg"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="text-primary font-semibold text-sm tracking-widest uppercase">
              About Me
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-bold text-foreground leading-tight">
              Driving Business Efficiency Through{" "}
              <span className="text-gradient">Automation & Code</span>
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm an experienced RPA and Full-Stack Developer with over a decade of
                hands-on expertise transforming business operations through intelligent
                automation and scalable software solutions.
              </p>
              <p>
                My core strength lies in bridging the gap between complex business processes
                and modern technology — using tools like UiPath, Blue Prism, and Power
                Automate alongside full-stack development with C# .NET, Python, React, and
                more.
              </p>
              <p>
                Whether it's automating repetitive workflows, building enterprise-grade
                applications, or designing API integrations, I focus on delivering measurable
                results that save time, reduce errors, and scale with your business.
              </p>
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="glass-card p-6 text-center hover:shadow-warm transition-all duration-300 group"
              >
                <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-display font-bold text-foreground">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
