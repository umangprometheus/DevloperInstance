export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p data-testid="text-copyright">
            © {currentYear} Your Company. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              data-testid="link-privacy"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="hover:text-foreground transition-colors"
              data-testid="link-terms"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
