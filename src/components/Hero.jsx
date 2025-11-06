import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Hero = () => {
    const { t } = useLanguage();

    return (
        <section id="home-section" className="relative h-screen w-screen flex items-center justify-start overflow-x-hidden bg-black/95">
            {/* Effets de fond dorés */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 -left-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-yellow-600/10 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/5 rounded-full blur-2xl"></div>
            </div>

            <div className="w-full h-full flex items-center pt-20 pb-10 px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                    {/* Left side - Text content */}
                    <div className="space-y-6 text-left">
                        {/* Tag */}
                        <div className="inline-block">
                            <span className="text-amber-400 text-sm font-mono tracking-wider animate-pulse">
                                {t.hero.welcome}
                            </span>
                        </div>

                        {/* Main heading */}
                        <div className="space-y-4">
                            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
                                <span className="text-white">{t.hero.title} </span>
                                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                                    {t.hero.name}
                                </span>
                            </h1>

                            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                                <span className="text-amber-400">{t.hero.role}</span>
                            </h2>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed">
                            {t.hero.description}
                        </p>

                        {/* Social links */}
                        <div className="flex items-center gap-5 justify-start">
                            <a
                                href="https://github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transform transition-all duration-300"
                                style={{ color: '#ffffff' }}
                                aria-label="GitHub"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                                </svg>
                            </a>

                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transform transition-all duration-300"
                                style={{ color: '#0A66C2' }}
                                aria-label="LinkedIn"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                            </a>

                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:scale-110 transform transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg className="w-7 h-7" fill="url(#instagram-gradient-hero)" viewBox="0 0 24 24">
                                    <defs>
                                        <linearGradient id="instagram-gradient-hero" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" style={{ stopColor: '#f09433', stopOpacity: 1 }} />
                                            <stop offset="25%" style={{ stopColor: '#e6683c', stopOpacity: 1 }} />
                                            <stop offset="50%" style={{ stopColor: '#dc2743', stopOpacity: 1 }} />
                                            <stop offset="75%" style={{ stopColor: '#cc2366', stopOpacity: 1 }} />
                                            <stop offset="100%" style={{ stopColor: '#bc1888', stopOpacity: 1 }} />
                                        </linearGradient>
                                    </defs>
                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                </svg>
                            </a>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-start pt-4">
                            <a
                                href="#contact-section"
                                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold text-base rounded-full shadow-xl shadow-amber-500/50 hover:shadow-2xl hover:shadow-amber-500/70 hover:scale-105 transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                                </svg>
                                <span>{t.hero.contactButton}</span>
                            </a>

                            <a
                                href="/cv.pdf"
                                download
                                className="group inline-flex items-center justify-center gap-3 px-10 py-4 bg-transparent text-white font-bold text-base rounded-full border-2 border-amber-500/50 hover:border-amber-400 hover:bg-amber-500/10 transition-all duration-300"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                                </svg>
                                <span>{t.hero.downloadCV}</span>
                            </a>
                        </div>
                    </div>

                    {/* Right side - Code window */}
                    <div className="hidden lg:block">
                        <div className="relative">
                            <div className="relative bg-zinc-900 rounded-2xl border border-amber-500/20 shadow-2xl shadow-amber-500/10 overflow-hidden">
                                {/* Window header */}
                                <div className="bg-black border-b border-amber-500/20 px-4 py-3 flex items-center">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="ml-4 text-xs text-amber-400 font-mono">Junior-code.js</span>
                                </div>

                                {/* Code content */}
                                <div className="p-6 font-mono text-sm space-y-1 bg-gradient-to-br from-zinc-900 to-black">
                                    <div className="text-gray-500">
                                        <span className="select-none text-gray-600 mr-4">1</span>
                                        <span>{t.hero.codeComment}</span>
                                    </div>

                                    <div>
                                        <span className="select-none text-gray-600 mr-4">2</span>
                                        <span className="text-amber-400">const</span>
                                        <span className="text-yellow-300"> expertise</span>
                                        <span className="text-white"> = {'{'}</span>
                                    </div>

                                    <div className="pl-8">
                                        <span className="select-none text-gray-600 mr-4">3</span>
                                        <span className="text-amber-400">{t.hero.expertise.frontend}</span>
                                        <span className="text-white">: [</span>
                                        <span className="text-yellow-300">'React'</span>
                                        <span className="text-white">, </span>
                                        <span className="text-yellow-300">'Vue'</span>
                                        <span className="text-white">, </span>
                                        <span className="text-yellow-300">'Next.js'</span>
                                        <span className="text-white">],</span>
                                    </div>

                                    <div className="pl-8">
                                        <span className="select-none text-gray-600 mr-4">4</span>
                                        <span className="text-amber-400">{t.hero.expertise.backend}</span>
                                        <span className="text-white">: [</span>
                                        <span className="text-yellow-300">'Node.js'</span>
                                        <span className="text-white">, </span>
                                        <span className="text-yellow-300">'Express'</span>
                                        <span className="text-white">, </span>
                                        <span className="text-yellow-300">'MongoDB'</span>
                                        <span className="text-white">],</span>
                                    </div>

                                    <div className="pl-8">
                                        <span className="select-none text-gray-600 mr-4">5</span>
                                        <span className="text-amber-400">{t.hero.expertise.level}</span>
                                        <span className="text-white">: </span>
                                        <span className="text-yellow-300">'{t.hero.expertise.levelValue}'</span>
                                        <span className="text-white">,</span>
                                    </div>

                                    <div className="pl-8">
                                        <span className="select-none text-gray-600 mr-4">6</span>
                                        <span className="text-amber-400">{t.hero.expertise.experience}</span>
                                        <span className="text-white">: </span>
                                        <span className="text-yellow-300">'{t.hero.expertise.experienceValue}'</span>
                                        <span className="text-white">,</span>
                                    </div>

                                    <div className="pl-8">
                                        <span className="select-none text-gray-600 mr-4">7</span>
                                        <span className="text-amber-400">{t.hero.expertise.projects}</span>
                                        <span className="text-white">: </span>
                                        <span className="text-yellow-300">'{t.hero.expertise.projectsValue}'</span>
                                    </div>

                                    <div>
                                        <span className="select-none text-gray-600 mr-4">8</span>
                                        <span className="text-white">{'}'};</span>
                                    </div>

                                    <div className="pt-2">
                                        <span className="select-none text-gray-600 mr-4">9</span>
                                        <span className="text-yellow-300">console</span>
                                        <span className="text-white">.</span>
                                        <span className="text-amber-400">log</span>
                                        <span className="text-white">(</span>
                                        <span className="text-yellow-300">"{t.hero.consoleLog}"</span>
                                        <span className="text-white">);</span>
                                    </div>
                                </div>

                                {/* Effet de lumière dorée */}
                                <div className="absolute inset-0 bg-gradient-to-t from-amber-500/5 via-transparent to-transparent pointer-events-none"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Down indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                    <span className="text-amber-400 text-sm mb-2">{t.hero.scrollDown}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 text-amber-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Hero;
