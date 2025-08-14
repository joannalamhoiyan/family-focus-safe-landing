import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-secondary">Family Focus Safe</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering parents with the tools and knowledge to keep their children safe in the digital world.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-background/60 hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-secondary" />
                <a href="mailto:support@familyfocussafe.com" className="text-background/80 hover:text-secondary transition-colors text-sm">
                  support@familyfocussafe.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-secondary" />
                <a href="tel:+1-800-SAFE-KID" className="text-background/80 hover:text-secondary transition-colors text-sm">
                  1-800-SAFE-KID
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-secondary mt-0.5" />
                <div className="text-background/80 text-sm">
                  123 Safety Street<br />
                  Protection City, PC 12345
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Quick Links</h4>
            <div className="space-y-2">
              <a href="#features" className="block text-background/80 hover:text-secondary transition-colors text-sm">Features</a>
              <a href="#pricing" className="block text-background/80 hover:text-secondary transition-colors text-sm">Pricing</a>
              <a href="#resources" className="block text-background/80 hover:text-secondary transition-colors text-sm">Safety Resources</a>
              <a href="#blog" className="block text-background/80 hover:text-secondary transition-colors text-sm">Parent Blog</a>
              <a href="#help" className="block text-background/80 hover:text-secondary transition-colors text-sm">Help Center</a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-background">Support</h4>
            <div className="space-y-2">
              <a href="#faq" className="block text-background/80 hover:text-secondary transition-colors text-sm">FAQ</a>
              <a href="#privacy" className="block text-background/80 hover:text-secondary transition-colors text-sm">Privacy Policy</a>
              <a href="#terms" className="block text-background/80 hover:text-secondary transition-colors text-sm">Terms of Service</a>
              <a href="#emergency" className="block text-background/80 hover:text-secondary transition-colors text-sm">Emergency Contacts</a>
            </div>
            
            {/* Emergency Notice */}
            <div className="bg-destructive/20 border border-destructive/30 rounded-lg p-3 mt-4">
              <p className="text-xs text-background/90">
                <strong>Emergency:</strong> If your child is in immediate danger, contact local authorities at 911.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-background/60 text-sm">
              © 2024 Family Focus Safe. All rights reserved. Protecting families since 2020.
            </p>
            <div className="flex space-x-6">
              <a href="#accessibility" className="text-background/60 hover:text-secondary transition-colors text-sm">
                Accessibility
              </a>
              <a href="#sitemap" className="text-background/60 hover:text-secondary transition-colors text-sm">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;