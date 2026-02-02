// Premium Animation System for Portfolio

export class AnimationController {
  private observers: IntersectionObserver[] = [];

  constructor() {
    this.initScrollAnimations();
    this.initParallaxEffects();
  }

  // Initialize scroll-triggered animations
  private initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          
          // Add staggered animation for child elements
          const children = entry.target.querySelectorAll('.stagger-child');
          children.forEach((child, index) => {
            setTimeout(() => {
              child.classList.add('revealed');
            }, index * 100);
          });
        }
      });
    }, observerOptions);

    // Observe all elements with section-reveal class
    document.querySelectorAll('.section-reveal').forEach((el) => {
      observer.observe(el);
    });

    this.observers.push(observer);
  }

  // Initialize parallax effects for premium feel
  private initParallaxEffects() {
    let ticking = false;

    const updateParallax = () => {
      const scrolled = window.pageYOffset;
      const parallaxElements = document.querySelectorAll('.parallax');
      
      parallaxElements.forEach((element) => {
        const rate = scrolled * -0.5;
        (element as HTMLElement).style.transform = `translateY(${rate}px)`;
      });

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', requestTick, { passive: true });
  }

  // Smooth scroll to element with offset for fixed header
  public scrollToElement(selector: string, offset: number = 80) {
    const element = document.querySelector(selector);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  // Add premium hover effects to cards
  public initCardEffects() {
    const cards = document.querySelectorAll('.premium-card');
    
    cards.forEach((card) => {
      card.addEventListener('mouseenter', (e) => {
        const target = e.currentTarget as HTMLElement;
        target.style.transform = 'translateY(-8px) scale(1.02)';
      });

      card.addEventListener('mouseleave', (e) => {
        const target = e.currentTarget as HTMLElement;
        target.style.transform = 'translateY(0) scale(1)';
      });
    });
  }

  // Cleanup observers
  public destroy() {
    this.observers.forEach(observer => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions for animations
export const fadeInUp = (element: HTMLElement, delay: number = 0) => {
  element.style.opacity = '0';
  element.style.transform = 'translateY(30px)';
  element.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
  
  setTimeout(() => {
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, delay);
};

export const staggerChildren = (container: HTMLElement, delay: number = 100) => {
  const children = container.children;
  Array.from(children).forEach((child, index) => {
    fadeInUp(child as HTMLElement, index * delay);
  });
};

// Initialize animations when DOM is loaded
export const initAnimations = () => {
  if (typeof window !== 'undefined') {
    const controller = new AnimationController();
    
    // Initialize card effects after a short delay
    setTimeout(() => {
      controller.initCardEffects();
    }, 500);

    return controller;
  }
  return null;
};