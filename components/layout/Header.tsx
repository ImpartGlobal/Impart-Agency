"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, type NavItem } from "@/content/navigation";
import { Button } from "@/components/ui/Button";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setIsMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-brand-bg/95 backdrop-blur-md border-b border-brand-border shadow-[0_1px_20px_rgba(0,0,0,0.5)]"
          : "bg-transparent"
      )}
    >
      <div className="container-wide">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-bold text-xl text-white hover:text-brand-orange transition-colors duration-200 shrink-0"
            aria-label="Impart Agency — Home"
          >
            <span className="text-brand-orange">Impart</span>
            <span>Agency</span>
          </Link>

          {/* Desktop nav */}
          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navigation.map((item) =>
              item.children ? (
                <DropdownItem
                  key={item.href}
                  item={item}
                  isActive={activeDropdown === item.href}
                  onToggle={(href) =>
                    setActiveDropdown(activeDropdown === href ? null : href)
                  }
                />
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
                    pathname === item.href
                      ? "text-brand-orange"
                      : "text-brand-muted hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Button size="sm" asChild>
              <Link href="/contact">Get a Quote</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-brand-muted hover:text-white transition-colors"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
            aria-label={isMobileOpen ? "Close menu" : "Open menu"}
          >
            {isMobileOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 bg-brand-surface border-b border-brand-border",
          isMobileOpen ? "max-h-[80vh] overflow-y-auto" : "max-h-0"
        )}
        aria-hidden={!isMobileOpen}
      >
        <nav className="container-wide py-4 flex flex-col gap-1" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <MobileNavItem key={item.href} item={item} pathname={pathname} />
          ))}
          <div className="pt-3 border-t border-brand-border mt-2">
            <Button className="w-full" asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}

function DropdownItem({
  item,
  isActive,
  onToggle,
}: {
  item: NavItem;
  isActive: boolean;
  onToggle: (href: string) => void;
}) {
  return (
    <div
      className="relative"
      onMouseEnter={() => onToggle(item.href)}
      onMouseLeave={() => onToggle(item.href)}
    >
      <button
        className={cn(
          "flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200",
          isActive ? "text-white" : "text-brand-muted hover:text-white"
        )}
        aria-expanded={isActive}
        aria-haspopup="true"
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-3.5 w-3.5 transition-transform duration-200",
            isActive && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>

      {isActive && item.children && (
        <div
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-brand-surface border border-brand-border rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.6)] p-2 z-50"
          role="menu"
        >
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              role="menuitem"
              className="flex items-center px-3 py-2.5 text-sm text-brand-muted hover:text-white hover:bg-brand-elevated rounded-xl transition-colors duration-150"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function MobileNavItem({
  item,
  pathname,
}: {
  item: NavItem;
  pathname: string;
}) {
  const [open, setOpen] = useState(false);

  if (!item.children) {
    return (
      <Link
        href={item.href}
        className={cn(
          "px-3 py-2.5 rounded-xl text-sm font-medium transition-colors duration-200",
          pathname === item.href
            ? "text-brand-orange bg-brand-orange/10"
            : "text-brand-muted hover:text-white hover:bg-brand-elevated"
        )}
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl text-sm font-medium text-brand-muted hover:text-white hover:bg-brand-elevated transition-colors duration-200"
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={cn(
            "h-4 w-4 transition-transform duration-200",
            open && "rotate-180"
          )}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="ml-3 mt-1 flex flex-col gap-0.5 border-l border-brand-border pl-3">
          {item.children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className="py-2 px-3 text-sm text-brand-muted hover:text-white rounded-lg hover:bg-brand-elevated transition-colors duration-150"
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
