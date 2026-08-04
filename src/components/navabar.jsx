import { useEffect, useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import { useColor } from '../contexts/ColorContext';
import ColorPicker from './ColorPicker';

const Navbar = () => {
    const { t, language, toggleLanguage } = useLanguage();
    const { isDark, toggleTheme } = useTheme();
    const { palette } = useColor();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('#home-section');

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        window.addEventListener('scroll', onScroll);
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleLinkClick = (href) => {
            const el = document.querySelector(href);
            if (el && el.scrollIntoView) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActive(href);
            setIsOpen(false);
    };

    // LINKS recalculé à chaque changement de langue grâce à useMemo
    const LINKS = useMemo(() => [
        { href: '#home-section', label: t.navbar.home },
        { href: '#about-section', label: t.navbar.about },
        { href: '#skills-section', label: t.navbar.skills },
        { href: '#education-section', label: t.navbar.education },
        { href: '#projects-section', label: t.navbar.projects },
        { href: '#contact-section', label: t.navbar.contact },
    ], [t, language]);

        useEffect(() => {
            const ids = LINKS.map((l) => l.href.replace('#', ''));
            const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
            if (!sections.length) return undefined;

            const observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            setActive(`#${entry.target.id}`);
                        }
                    });
                },
                { root: null, rootMargin: '0px 0px -55% 0px', threshold: [0.1, 0.5] }
            );

            sections.forEach((s) => observer.observe(s));
            return () => observer.disconnect();
        }, [LINKS]);

    return (
        <nav
            className={`fixed z-30 w-full top-0 left-0 transition-all duration-500 ${
                scrolled
                    ? 'backdrop-blur-md bg-black/95 shadow-2xl border-b glass-panel'
                    : 'bg-transparent'
            }`}
            style={scrolled ? {
                boxShadow: `0 25px 50px -12px rgba(var(--accent-rgb), 0.1)`,
                borderBottomColor: `rgba(var(--accent-rgb), 0.2)`,
            } : undefined}
            aria-label="Main navigation"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center gap-3">
                        <a href="/" className="flex items-center gap-3 text-white no-underline group">
                            <div
                                className="relative w-12 h-12 rounded-xl flex items-center justify-center shadow-xl transform group-hover:rotate-12 transition-all duration-300 group-hover:scale-110 overflow-hidden"
                                style={{
                                    boxShadow: `0 20px 25px -5px rgba(var(--accent-rgb), 0.5)`,
                                }}
                            >
                                <img src="/logo.png" alt="Mulho Logo" className="w-full h-full object-cover relative z-10" />
                            </div>
                            <span
                                className="text-xl font-bold tracking-wide bg-clip-text text-transparent"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${palette[400]}, ${palette.y600})`,
                                }}
                            >Mulho</span>
                        </a>
                        <span className="hidden sm:inline-block text-sm font-light" style={{ color: palette.light }}>— Junior Developer</span>
                    </div>

                    {/* Desktop menu */}
                    <div className="hidden md:flex items-center space-x-1">
                        {LINKS.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => handleLinkClick(link.href)}
                                className={`group relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                                    active === link.href
                                        ? 'bg-opacity-10'
                                        : 'text-gray-300 hover:bg-white/5'
                                }`}
                                style={active === link.href ? {
                                    color: palette[400],
                                    backgroundColor: `rgba(var(--accent-rgb), 0.1)`,
                                } : undefined}
                                onMouseEnter={(e) => {
                                    if (active !== link.href) e.currentTarget.style.color = palette[400];
                                }}
                                onMouseLeave={(e) => {
                                    if (active !== link.href) e.currentTarget.style.color = '';
                                }}
                            >
                                {link.label}
                                <span
                                    className={`absolute left-1/2 -translate-x-1/2 -bottom-1 h-0.5 rounded-full transition-all duration-300 ${
                                        active === link.href ? 'w-3/4 opacity-100' : 'w-0 opacity-0 group-hover:w-3/4 group-hover:opacity-100'
                                    }`}
                                    style={{
                                        backgroundImage: `linear-gradient(to right, ${palette[400]}, ${palette.y500}, ${palette[400]})`,
                                    }}
                                />
                            </a>
                        ))}

                        {/* Theme selector */}
                        <button
                            onClick={toggleTheme}
                            className="ml-2 p-2.5 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 border transition-all duration-300 text-white"
                            style={{
                                borderColor: `rgba(var(--accent-rgb), 0.2)`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.borderColor = `rgba(var(--accent-rgb), 0.4)`;
                                e.currentTarget.style.color = palette[400];
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.borderColor = `rgba(var(--accent-rgb), 0.2)`;
                                e.currentTarget.style.color = '';
                            }}
                            title={isDark ? 'Mode clair' : 'Mode sombre'}
                        >
                            {isDark ? (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414-1.414zM5 6a1 1 0 100-2H4a1 1 0 000 2h1z" clipRule="evenodd" />
                                </svg>
                            ) : (
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                </svg>
                            )}
                        </button>

                        {/* Color picker */}
                        <div className="ml-2">
                            <ColorPicker />
                        </div>

                        {/* Language selector */}
                        <div
                            className="ml-2 flex gap-1 bg-zinc-800/50 p-1 rounded-lg border"
                            style={{ borderColor: `rgba(var(--accent-rgb), 0.2)` }}
                        >
                            <button
                                onClick={() => toggleLanguage()}
                                className={`px-3 py-2 rounded-md text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                                    language === 'fr'
                                        ? 'shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                style={language === 'fr' ? {
                                    backgroundImage: `linear-gradient(to right, ${palette[500]}, ${palette.y600})`,
                                    boxShadow: `0 10px 15px -3px rgba(var(--accent-rgb), 0.5)`,
                                } : undefined}
                            >
                                <span className={language === 'fr' ? 'text-black' : ''}>FR</span>
                            </button>
                            <button
                                onClick={() => toggleLanguage()}
                                className={`px-3 py-2 rounded-md text-xs font-semibold transition-all duration-300 flex items-center gap-1.5 ${
                                    language === 'en'
                                        ? 'shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                style={language === 'en' ? {
                                    backgroundImage: `linear-gradient(to right, ${palette[500]}, ${palette.y600})`,
                                    boxShadow: `0 10px 15px -3px rgba(var(--accent-rgb), 0.5)`,
                                } : undefined}
                            >
                                <span className={language === 'en' ? 'text-black' : ''}>EN</span>
                            </button>
                        </div>

                        <a
                            href="#contact-section"
                            onClick={() => handleLinkClick('#contact-section')}
                            className="ml-4 relative inline-flex items-center gap-2 rounded-full px-6 py-2.5 text-sm font-semibold text-black hover:scale-105 transform transition-all duration-300 overflow-hidden group"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${palette[500]}, ${palette.y600})`,
                                boxShadow: `0 10px 15px -3px rgba(var(--accent-rgb), 0.5)`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.boxShadow = `0 20px 25px -5px rgba(var(--accent-rgb), 0.6)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.boxShadow = `0 10px 15px -3px rgba(var(--accent-rgb), 0.5)`;
                            }}
                        >
                            <span
                                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                style={{
                                    backgroundImage: `linear-gradient(to right, ${palette.y600}, ${palette[500]})`,
                                }}
                            ></span>
                            <span className="relative z-10">{t.navbar.hireMe}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform duration-300">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            className="relative inline-flex items-center justify-center p-2.5 rounded-xl text-gray-300 bg-white/5 focus:outline-none transition-all duration-300 border"
                            style={{
                                borderColor: `rgba(var(--accent-rgb), 0.2)`,
                            }}
                            onMouseEnter={(e) => {
                                e.currentTarget.style.color = palette[400];
                                e.currentTarget.style.backgroundColor = `rgba(var(--accent-rgb), 0.1)`;
                            }}
                            onMouseLeave={(e) => {
                                e.currentTarget.style.color = '';
                                e.currentTarget.style.backgroundColor = '';
                            }}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            ) : (
                                <svg className="h-6 w-6 transition-transform duration-300 rotate-90" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                id="mobile-menu"
                className={`md:hidden bg-black/98 backdrop-blur-lg transition-all duration-500 border-t ${
                    isOpen ? 'max-h-[700px] opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
                }`}
                style={{ borderTopColor: `rgba(var(--accent-rgb), 0.2)` }}
            >
                <div className="px-4 pt-6 pb-8 space-y-2 sm:px-6">
                    {LINKS.map((link, index) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => handleLinkClick(link.href)}
                            className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${
                                active === link.href
                                    ? 'shadow-lg'
                                    : 'text-gray-300 hover:bg-white/5'
                            }`}
                            style={active === link.href ? {
                                color: palette[400],
                                backgroundColor: `rgba(var(--accent-rgb), 0.1)`,
                                border: `1px solid rgba(var(--accent-rgb), 0.3)`,
                            } : undefined}
                            onMouseEnter={(e) => {
                                if (active !== link.href) e.currentTarget.style.color = palette[400];
                            }}
                            onMouseLeave={(e) => {
                                if (active !== link.href) e.currentTarget.style.color = '';
                            }}
                            data-delay={index * 50}
                        >
                            <span className="flex items-center gap-2">
                                <span
                                    className="w-1.5 h-1.5 rounded-full transition-all duration-300"
                                    style={active === link.href ? {
                                        backgroundColor: palette[400],
                                        boxShadow: `0 10px 15px -3px rgba(var(--accent-rgb), 0.5)`,
                                    } : { backgroundColor: '#6b7280' }}
                                ></span>
                                {link.label}
                            </span>
                        </a>
                    ))}

                    <div className="mt-6 px-2 space-y-4">
                        {/* Theme selector mobile */}
                        <button
                            onClick={toggleTheme}
                            className="w-full p-3 rounded-lg bg-zinc-800/50 hover:bg-zinc-700 border transition-all duration-300 text-white flex items-center justify-center gap-2"
                            style={{
                                borderColor: `rgba(var(--accent-rgb), 0.2)`,
                            }}
                        >
                            {isDark ? (
                                <>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zm5.657-9.193a1 1 0 00-1.414 0l-.707.707A1 1 0 005.05 6.464l.707-.707a1 1 0 011.414-1.414zM5 6a1 1 0 100-2H4a1 1 0 000 2h1z" clipRule="evenodd" />
                                    </svg>
                                    <span className="text-sm font-semibold">Mode clair</span>
                                </>
                            ) : (
                                <>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                                    </svg>
                                    <span className="text-sm font-semibold">Mode sombre</span>
                                </>
                            )}
                        </button>

                        {/* Color picker mobile */}
                        <div className="flex justify-center">
                            <ColorPicker />
                        </div>

                        {/* Language selector mobile */}
                        <div
                            className="flex gap-1 justify-center bg-zinc-800/50 p-1 rounded-lg border"
                            style={{ borderColor: `rgba(var(--accent-rgb), 0.2)` }}
                        >
                            <button
                                onClick={() => toggleLanguage()}
                                className={`flex-1 px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                    language === 'fr'
                                        ? 'shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                style={language === 'fr' ? {
                                    backgroundImage: `linear-gradient(to right, ${palette[500]}, ${palette.y600})`,
                                    boxShadow: `0 10px 15px -3px rgba(var(--accent-rgb), 0.5)`,
                                } : undefined}
                            >
                                <span className={language === 'fr' ? 'text-black' : ''}>FR</span>
                            </button>
                            <button
                                onClick={() => toggleLanguage()}
                                className={`flex-1 px-4 py-3 rounded-md text-sm font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                                    language === 'en'
                                        ? 'shadow-lg'
                                        : 'text-gray-400 hover:text-white'
                                }`}
                                style={language === 'en' ? {
                                    backgroundImage: `linear-gradient(to right, ${palette[500]}, ${palette.y600})`,
                                    boxShadow: `0 10px 15px -3px rgba(var(--accent-rgb), 0.5)`,
                                } : undefined}
                            >
                                <span className={language === 'en' ? 'text-black' : ''}>EN</span>
                            </button>
                        </div>

                        <a
                            href="#contact-section"
                            onClick={() => handleLinkClick('#contact-section')}
                            className="w-full inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold text-black hover:scale-105 transition-all duration-300"
                            style={{
                                backgroundImage: `linear-gradient(to right, ${palette[500]}, ${palette.y600})`,
                                boxShadow: `0 20px 25px -5px rgba(var(--accent-rgb), 0.5)`,
                            }}
                        >
                            <span>{t.navbar.hireMe}</span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
