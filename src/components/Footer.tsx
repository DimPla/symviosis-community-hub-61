const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <span className="font-heading font-semibold text-foreground">Symviosis</span>
        <span>© {new Date().getFullYear()} Symviosis. All rights reserved.</span>
        <a href="mailto:hello@symviosis.com" className="hover:text-primary transition-colors">
          hello@symviosis.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
