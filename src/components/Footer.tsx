const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border py-8">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground">
          © {new Date().getFullYear()} Yiling Shi. All rights reserved.
        </p>
        <p className="text-muted-foreground text-sm mt-2">
          PhD Student in Psychosis Research
        </p>
      </div>
    </footer>
  );
};

export default Footer;
