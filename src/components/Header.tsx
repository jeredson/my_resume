import { useState, useEffect } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    document.documentElement.classList.toggle('dark', newTheme);
    localStorage.setItem('theme', newTheme ? 'dark' : 'light');
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-lg' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div 
            className="text-xl font-bold text-gradient cursor-pointer transition-all duration-300 hover:scale-105"
            onClick={() => scrollToSection("#hero")}
          >
            JEREDSON DANIEL RAJ
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <NavigationMenu>
              <NavigationMenuList>
                {navigationItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <NavigationMenuLink
                      className="group inline-flex h-10 w-max items-center justify-center rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 hover:bg-primary/10 hover:text-primary focus:bg-primary/10 focus:text-primary focus:outline-none cursor-pointer relative overflow-hidden"
                      onClick={() => scrollToSection(item.href)}
                    >
                      <span className="relative z-10">{item.name}</span>
                      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
            
            {/* Theme Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-4 relative overflow-hidden group"
            >
              <Sun className={`h-5 w-5 transition-all duration-500 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
              <Moon className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-lg" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="relative overflow-hidden group"
            >
              <Sun className={`h-5 w-5 transition-all duration-500 ${isDark ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}`} />
              <Moon className={`absolute h-5 w-5 transition-all duration-500 ${isDark ? 'rotate-0 scale-100' : '-rotate-90 scale-0'}`} />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="relative overflow-hidden group"
            >
              <div className={`transition-all duration-300 ${isMenuOpen ? 'rotate-90' : 'rotate-0'}`}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </div>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="pt-4 pb-2 space-y-2">
            {navigationItems.map((item, index) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-text-body hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;