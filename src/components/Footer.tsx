import { Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="font-display font-bold text-lg text-background">
            John Bucayan
          </div>
          <div className="text-background/50 text-sm mt-0.5">
            RPA & Full-Stack Developer
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:johnbucayan@outlook.com"
            className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/john-bucayan-456a7236"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-lg bg-background/10 flex items-center justify-center text-background/60 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>

        <div className="text-background/40 text-sm">
          © {new Date().getFullYear()} John Bucayan. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
