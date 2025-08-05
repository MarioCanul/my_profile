'use client';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import ThemeToggle from './ThemeToggle';
import LanguageSwitcher from './LanguageSwitcher';
import { useEffect, useState } from 'react';
import { Button } from './ui/Button';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false)
   const [activeSection, setActiveSection] = useState("hero")
   const t = useTranslations();
   const locale = useLocale();
   useEffect(() => {
      const handleScroll = () => {
         const sections = ["hero", "about", "skills", "experience", "projects", "contact"]
         const scrollPosition = window.scrollY + 100

         for (const section of sections) {
            const element = document.getElementById(section)
            if (element) {
               const offsetTop = element.offsetTop
               const offsetBottom = offsetTop + element.offsetHeight

               if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
                  setActiveSection(section)
                  break
               }
            }
         }
      }

      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
   }, [])

   const scrollToSection = (sectionId: string) => {
      const element = document.getElementById(sectionId)
      if (element) {
         element.scrollIntoView({ behavior: "smooth" })
      }
      setIsOpen(false)
   }
   const route = (path: string) => `/${locale}/${path}`;
   const navItems = [
      { id: "hero", label: t("nav.home") },
      { id: "about", label: t("nav.about") },
      { id: "skills", label: t("nav.skills") },
      { id: "experience", label: t("nav.experience") },
      { id: "projects", label: t("nav.projects") },
      { id: "contact", label: t("nav.contact") },
   ]
   return (
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
         <div className="container mx-auto px-4">
            <div className="ml-auto flex items-center gap-2 p-2">
               <ThemeToggle />
               <LanguageSwitcher />
            </div>
            <div className="flex items-center  h-16 justify-end">

               {/* Desktop Navigation */}
               <div className="hidden md:flex space-x-8">
                  {navItems.map((item) => (
                     <button
                        key={item.id}
                        onClick={() => scrollToSection(item.id)}
                        className={`text-sm font-medium transition-colors hover:text-primary ${activeSection === item.id ? "text-primary" : "text-muted-foreground"
                           }`}
                     >
                        {item.label}
                     </button>
                  ))}
               </div>

               {/* Mobile Navigation Button */}
               <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
               </Button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
               <div className="md:hidden py-4 border-t">
                  <div className="flex flex-col space-y-2">
                     {navItems.map((item) => (
                        <button
                           key={item.id}
                           onClick={() => scrollToSection(item.id)}
                           className={`text-left px-4 py-2 text-sm font-medium transition-colors hover:text-primary ${activeSection === item.id ? "text-primary" : "text-muted-foreground"
                              }`}
                        >
                           {item.label}
                        </button>
                     ))}
                  </div>
               </div>
            )}

         </div>
      </nav>
   );
}