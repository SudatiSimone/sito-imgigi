'use client';

import Header from '../Components/Header'

import SocialSidebar from '../Components/SocialSidebar'


import { FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { motion } from "framer-motion"

export default function Home() {
  return (
    <>
      <Header />
      <SocialSidebar />

      {/* HERO */}
      <section id="hero" className="text-center py-20 px-6 bg-gradient-to-br from-gray-900 to-black">

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold text-white text-center"
        >
          Diventa un Professionista Consapevole
        </motion.h1>


        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}className="text-xl md:text-2xl text-gray-300 mb-8">Percorsi per operatori olistici e del benessere che vogliono distinguersi e crescere davvero.</motion.p>
        
        <motion.a
          href="#percorso"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="inline-block mt-8 px-8 py-3 bg-emerald-500 text-black font-semibold rounded-full hover:scale-105 transition"
        >
          Scopri il percorso
        </motion.a>
      </section>

      {/* CHI SONO */}
      <section id="chi-sono" className="max-w-4xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-10">
        
        <img
          src="/profilo.jpg"
          alt="Foto di Merisio Gianluigi"
          className="w-48 h-48 rounded-full object-cover shadow-lg"
        />

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
        <div>
          <h2 className="text-3xl font-bold mb-4">Merisio Gianluigi</h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Professionista con eccellenti competenze tecniche e manageriali, maturate in molti anni nel settore delle vendite e del beauty.
            Mi distinguo per leadership, pianificazione strategica e capacità di aiutare aziende e persone a raggiungere risultati concreti.
            Amo costruire relazioni autentiche, stimolare il cambiamento e accompagnare professionisti nella loro evoluzione.
          </p>
        </div>

        </motion.div>
      </section>

      {/* PERCORSO */}
      <section id="percorso" className="bg-gray-900 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center text-white">Percorso Strategico Evolutivo</h2>

                {/* TIMELINE DEL PERCORSO */}
                <section className="py-12">
                  <div className="max-w-5xl mx-auto px-6">
                    <h3 className="text-2xl font-bold mb-8 text-center text-emerald-400">Le 5 Fasi del Percorso Strategico Evolutivo</h3>
                    <div className="relative border-l border-gray-700 ml-4 space-y-10">

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >

                      {/* Fase 1 */}
                      <div className="pl-6 relative">
                        <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                        <h4 className="text-xl font-semibold text-white">1. Sbatta la testa contro lo specchio™</h4>
                        <p className="text-gray-300">Consapevolezza, verità, roadmap iniziale — test diagnostici e mappatura punti ciechi.</p>
                      </div>

                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >

                      {/* Fase 2 */}
                      <div className="pl-6 relative">
                        <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                        <h4 className="text-xl font-semibold text-white">2. La strategia: dalla coscienza all’azione</h4>
                        <p className="text-gray-300">Posizionamento, mindset strategico, bio professionale e piano d’azione personalizzato.</p>
                      </div>

                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >

                      {/* Fase 3 */}
                      <div className="pl-6 relative">
                        <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                        <h4 className="text-xl font-semibold text-white">3. Costruisci e differenziati</h4>
                        <p className="text-gray-300">Routine produttiva, strategia personale, verticalità e impatto reale sul tuo mercato.</p>
                      </div>

                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >

                      {/* Fase 4 */}
                      <div className="pl-6 relative">
                        <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                        <h4 className="text-xl font-semibold text-white">4. Analizza, ottimizza e scala</h4>
                        <p className="text-gray-300">KPI, miglioramento continuo e creazione di un sistema sostenibile di crescita.</p>
                      </div>

                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >

                      {/* Fase 5 */}
                      <div className="pl-6 relative">
                        <div className="absolute left-[-14px] top-1 w-4 h-4 bg-emerald-400 rounded-full"></div>
                        <h4 className="text-xl font-semibold text-white">5. Realizza e valorizza il cambiamento</h4>
                        <p className="text-gray-300">Consolidamento, piano di sviluppo personale, toolkit operativo e piena autonomia.</p>
                      </div>

                      </motion.div>

                    </div>
                  </div>
                </section>

          <div className="bg-white text-black p-6 rounded-xl shadow-lg space-y-6">
            <p><strong>🎯 A chi è rivolto:</strong> terapisti, operatori del benessere e professionisti olistici che vogliono posizionarsi con autenticità e ottenere risultati reali.</p>

            <div>
              <h3 className="text-xl font-semibold">🔥 Le 5 Fasi:</h3>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li><strong>Fase 1:</strong> Consapevolezza e roadmap personalizzata</li>
                <li><strong>Fase 2:</strong> Mindset e piano d’azione strategico</li>
                <li><strong>Fase 3:</strong> Differenziazione e impatto</li>
                <li><strong>Fase 4:</strong> Ottimizzazione e scalabilità</li>
                <li><strong>Fase 5:</strong> Autonomia e valorizzazione</li>
              </ul>
            </div>

            <div>
              <p><strong>✔ Include:</strong> 12 sessioni 1:1, strumenti, supporto WhatsApp, test iniziali e materiali personalizzati</p>
              <p><strong>💶 Investimento:</strong> 880€ (2 tranche da 440€)</p>
            </div>

            <div className="text-center pt-4">
              <a
                href="https://wa.me/3489841408" 
                target="_blank"
                className="bg-emerald-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                Richiedi una Call Gratuita
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* TESTIMONIANZE */}
      <section id="testimonianze" className="bg-black py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Dicono di me</h2>

          <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
            
            {/* Testimonianza 1 */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Cliente 1" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Chiara R.</h4>
                  <p className="text-sm text-gray-400">Estetista professionale</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                “Il percorso con Gianluigi è stato una svolta. Ho capito chi sono, cosa voglio e ho finalmente una strategia concreta.”
              </p>
            </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >

            {/* Testimonianza 2 */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Cliente 2" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Luca M.</h4>
                  <p className="text-sm text-gray-400">Massoterapista</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                “Mi sono smarcato dal ‘faccio tutto per tutti’. Ora lavoro solo con i clienti giusti, e guadagno di più con meno stress.”
              </p>
            </div>

            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >

            {/* Testimonianza 3 */}
            <div className="bg-gray-900 p-6 rounded-xl shadow-lg border border-gray-800">
              <div className="flex items-center gap-4 mb-4">
                <img src="https://randomuser.me/api/portraits/women/55.jpg" alt="Cliente 3" className="w-14 h-14 rounded-full object-cover" />
                <div>
                  <h4 className="text-lg font-semibold text-white">Francesca D.</h4>
                  <p className="text-sm text-gray-400">Coach Olistica</p>
                </div>
              </div>
              <p className="text-gray-300 italic">
                “Gianluigi ha un dono: ti aiuta a vedere quello che non vedi. Ho ricostruito la mia offerta da zero, con autenticità.”
              </p>
            </div>

            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-gray-900 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">Domande Frequenti</h2>

          <div className="space-y-6">

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
            
            {/* FAQ 1 */}
            <details className="group bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700">
              <summary className="cursor-pointer text-lg font-semibold text-white flex justify-between items-center">
                Devo avere già un’attività avviata per accedere al percorso?
                <span className="ml-4 text-emerald-400 group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <p className="mt-3 text-gray-300">
                No, puoi iniziare anche se sei in fase di transizione o apertura. Il percorso ti aiuterà proprio a partire con consapevolezza e metodo.
              </p>
            </details>

            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

            {/* FAQ 2 */}
            <details className="group bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700">
              <summary className="cursor-pointer text-lg font-semibold text-white flex justify-between items-center">
                Posso pagare in due rate?
                <span className="ml-4 text-emerald-400 group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <p className="mt-3 text-gray-300">
                Sì, puoi versare 440€ all’inizio e i restanti 440€ dopo la seconda fase. Il pagamento può essere effettuato via bonifico o PayPal.
              </p>
            </details>

            </motion.section>

            <motion.section
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

            {/* FAQ 3 */}
            <details className="group bg-gray-800 p-5 rounded-lg shadow-md border border-gray-700">
              <summary className="cursor-pointer text-lg font-semibold text-white flex justify-between items-center">
                Cosa succede se salto una sessione?
                <span className="ml-4 text-emerald-400 group-open:rotate-180 transition-transform">&#9660;</span>
              </summary>
              <p className="mt-3 text-gray-300">
                Nessun problema: possiamo riprogrammarla entro 10 giorni. La flessibilità fa parte del mio metodo.
              </p>
            </details>

            </motion.section>

          </div>
        </div>
      </section>


      {/* VIDEO + CTA WHATSAPP */}
      <section id="video" className="bg-black py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Guarda il video</h2>
          <p className="text-lg text-gray-300 mb-10">Chi sono, da dove parto e il mio percorso!</p>

          <div className="relative pb-[56.25%] h-0 mb-10">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              src="https://www.youtube.com/embed/5zmUll1XwvI"
              title="Merisio Gianluigi - Percorso Strategico Evolutivo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {/* Video 1 */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/nTbx_ynapZg" 
                title="Video 1"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/dlxFpYoP-hk" 
                title="Video 2"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 3 */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src="https://www.youtube.com/embed/2m78egHsUJM" 
                title="Video 3"
                className="w-full h-full rounded-lg"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="..."
          >


          <a
            href="https://wa.me/3489841408?text=Ciao%20Gianluigi%2C%20ho%20visto%20il%20video%20e%20voglio%20saperne%20di%20pi%C3%B9%20sul%20percorso%20evolutivo." 
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 inline-block bg-emerald-500 text-black px-8 py-3 rounded-full text-lg font-semibold hover:scale-105 transition"
          >
            Scrivimi su WhatsApp
          </a>

          </motion.a>
        </div>
      </section>

      {/* CONTATTI */}
      <section id="contatti" className="py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contattami</h2>
        <p className="mb-6 text-gray-300">Scrivimi su WhatsApp o prenota una call per capire se il percorso fa per te.</p>
        <a href="mailto:gigi97.38@gmail.com" className="underline hover:text-emerald-400">gigi97.38@gmail.com</a>
      </section>

      {/* FOOTER */}
      <footer className="bg-black border-t border-gray-800 py-10 text-center text-sm text-gray-400">
        <div className="mb-6">
          <p className="text-base font-semibold text-white mb-4">Seguimi sui social</p>
          <div className="flex justify-center space-x-6 text-2xl">
            <a
              href="https://www.instagram.com/i.m.gigi_" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/gianluigi-merisio-22a04912b" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.youtube.com/@i.m.Gigi_" 
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-400 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <p className="mt-6 text-gray-500">&copy; 2025 Merisio Gianluigi. Tutti i diritti riservati.</p>
      </footer>

    </>
  )
}
