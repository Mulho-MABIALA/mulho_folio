import React from 'react';

const About = () => {
    return (
        <section id="about-section" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-zinc-900 to-black py-20">
            {/* Effets de fond dorés */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-600/5 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full px-8 sm:px-12 lg:px-16 xl:px-20 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <span className="text-amber-400 text-sm font-mono tracking-wider">&lt;About&gt;</span>
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-4 mb-6">
                        Qui Je Suis
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
                    {/* Left side - Image */}
                    <div className="relative group">
                        <div className="relative overflow-hidden rounded-2xl">
                            {/* Placeholder pour l'image - remplacer src avec votre image */}
                            <div className="aspect-[4/5] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center">
                                <div className="text-center p-8">                           
                                  <img src="../public/img1.jpg" alt="Ajoutez votre photo ici" />
                                    <p className="mt-5 text-gray-400">Mulho MABIALA</p>
                                </div>
                            </div>

                            {/* Overlay effect */}
                            <div className="absolute inset-0 bg-gradient-to-t from-amber-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                            {/* Border effect */}
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 rounded-2xl opacity-0 group-hover:opacity-30 blur transition-all duration-500"></div>
                        </div>

                        {/* Floating badges */}
                        <div className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-yellow-600 text-black px-6 py-3 rounded-full shadow-xl shadow-amber-500/50 font-bold transform rotate-12 hover:rotate-0 transition-transform duration-300">
                            Fullstack Dev
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div className="space-y-8">
                        {/* Introduction */}
                        <div className="space-y-4">
                            <h3 className="text-2xl sm:text-3xl font-bold text-white">
                                Bonjour ! Je suis <span className="bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">Mulho MAIALA</span>
                            </h3>
                            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                                Je suis un individu hautement motivé et polyvalent, toujours prêt à relever de nouveaux défis.
                                Animé par une passion pour l'apprentissage, je m'engage à fournir des résultats exceptionnels.
                                Avec une attitude positive et un esprit de croissance, je suis impatient de faire des contributions
                                significatives et d'atteindre un succès remarquable.
                            </p>
                        </div>

                        {/* Skills badges */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white mb-4">Compétences Clés</h4>
                            <div className="flex flex-wrap gap-3">
                                <div className="group flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-amber-500/30 rounded-full hover:bg-amber-500/10 transition-all duration-300">
                                    <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span className="text-gray-300 font-medium">Front End Development</span>
                                </div>

                                <div className="group flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-yellow-500/30 rounded-full hover:bg-yellow-500/10 transition-all duration-300">
                                    <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                                    </svg>
                                    <span className="text-gray-300 font-medium">Back End Development</span>
                                </div>

                                <div className="group flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-amber-500/30 rounded-full hover:bg-amber-500/10 transition-all duration-300">
                                    <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                    <span className="text-gray-300 font-medium">Problem Solving</span>
                                </div>

                                <div className="group flex items-center gap-2 px-4 py-2 bg-zinc-800/50 border border-yellow-500/30 rounded-full hover:bg-yellow-500/10 transition-all duration-300">
                                    <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                    <span className="text-gray-300 font-medium">Team Management</span>
                                </div>
                            </div>
                        </div>

                        {/* Info cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name Card */}
                            <div className="p-5 bg-zinc-900/50 border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                                        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                        </svg> 
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium">Nom</span>
                                </div>
                                <p className="text-white font-semibold">MABIALA - Mulho</p>
                                <p className="text-sm text-gray-400 mt-1">Ibrahim - Trésor</p>
                            </div>

                            {/* Email Card */}
                            <div className="p-5 bg-zinc-900/50 border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-amber-400/10 flex items-center justify-center group-hover:bg-amber-400/20 transition-colors">
                                        <svg className="w-5 h-5 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium">Email</span>
                                </div>
                                <p className="text-white font-semibold text-sm">mulhomabiala29@gmail.com</p>
                            </div>

                            {/* Phone Card */}
                            <div className="p-5 bg-zinc-900/50 border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-yellow-400/10 flex items-center justify-center group-hover:bg-yellow-400/20 transition-colors">
                                        <svg className="w-5 h-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium">Téléphone</span>
                                </div>
                                <p className="text-white font-semibold text-sm">+221 78 730 87 06</p>
                                <p className="text-sm text-gray-400 mt-1">WhatsApp: +242 05 553 08 52</p>
                            </div>

                            {/* Location Card */}
                            <div className="p-5 bg-zinc-900/50 border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:bg-amber-500/20 transition-colors">
                                        <svg className="w-5 h-5 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium">Localisation</span>
                                </div>
                                <p className="text-white font-semibold">Dakar, Sénégal</p>
                                <p className="text-sm text-gray-400 mt-1">Disponible pour le travail</p>
                            </div>

                            {/* Birthday Card */}
                            {/* <div className="p-5 bg-zinc-900/50 border border-amber-500/20 rounded-xl hover:border-amber-500/50 transition-all duration-300 group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-lg bg-yellow-500/10 flex items-center justify-center group-hover:bg-yellow-500/20 transition-colors">
                                        <svg className="w-5 h-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-400 font-medium">Date de naissance</span>
                                </div>
                                <p className="text-white font-semibold">10 Octobre 2002</p>
                            </div> */}
                        </div>

                        {/* Interests */}
                        <div className="space-y-4">
                            <h4 className="text-xl font-semibold text-white">Centres d'intérêt</h4>
                            <div className="flex flex-wrap gap-3">
                                {/* <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full border border-amber-500/20">
                                    <span className="text-2xl">🎵</span>
                                    <span className="text-gray-300 font-medium">Musique</span>
                                </div> */}
                                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full border border-amber-500/20">
                                    <span className="text-2xl">✈️</span>
                                    <span className="text-gray-300 font-medium">Voyage</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full border border-amber-500/20">
                                    <span className="text-2xl">🎬</span>
                                    <span className="text-gray-300 font-medium">Cinéma</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full border border-amber-500/20">
                                    <span className="text-2xl">⚽</span>
                                    <span className="text-gray-300 font-medium">Sports</span>
                                </div>
                                <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-zinc-800 to-zinc-700 rounded-full border border-amber-500/20">
                                    <span className="text-2xl">📚</span>
                                    <span className="text-gray-300 font-medium">Lecture</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
