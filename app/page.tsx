export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <div className="inline-block bg-[#161b22] border border-[#30363d] rounded-full px-4 py-1 text-sm text-[#58a6ff] mb-6">
          For Commercial &amp; Private Pilots
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Turn Your Logbook Into{" "}
          <span className="text-[#58a6ff]">Stunning Visualizations</span>
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Upload your pilot logbook CSV or Excel export and instantly get interactive flight maps,
          hour charts, and shareable social media content — no manual work required.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Start Visualizing — $12/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-lg"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-2">🗺️</div>
            <div className="font-semibold text-white mb-1">Interactive Maps</div>
            <div className="text-sm text-[#8b949e]">Visualize every route you've flown on a live map</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-2">📊</div>
            <div className="font-semibold text-white mb-1">Flight Charts</div>
            <div className="text-sm text-[#8b949e]">Track hours, aircraft types, and milestones over time</div>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <div className="text-3xl font-bold text-[#58a6ff] mb-2">📤</div>
            <div className="font-semibold text-white mb-1">Social Sharing</div>
            <div className="text-sm text-[#8b949e]">Export beautiful cards for Instagram, Twitter, and more</div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">Simple Pricing</h2>
        <div className="bg-[#161b22] border-2 border-[#58a6ff] rounded-2xl p-8 text-center relative">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#58a6ff] text-[#0d1117] text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wide">
            Most Popular
          </div>
          <div className="text-xl font-semibold text-white mb-2">Pilot Pro</div>
          <div className="text-5xl font-bold text-white mb-1">
            $12<span className="text-xl font-normal text-[#8b949e]">/mo</span>
          </div>
          <div className="text-sm text-[#8b949e] mb-8">Cancel anytime</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited logbook uploads",
              "Interactive flight route maps",
              "Hour & milestone charts",
              "Social media export cards",
              "CSV and Excel support",
              "Priority email support"
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {feature}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors text-lg"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Which logbook formats are supported?</h3>
            <p className="text-[#8b949e] text-sm">We support CSV and Excel exports from all major logbook apps including ForeFlight, Logbook Pro, MyFlightbook, and standard EASA/FAA formats.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Is my flight data kept private?</h3>
            <p className="text-[#8b949e] text-sm">Yes. Your logbook data is encrypted at rest and never shared with third parties. You control what you share publicly via the social export feature.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription anytime?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. Cancel with one click from your account dashboard. You'll retain access until the end of your billing period with no hidden fees.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#30363d] py-8 text-center text-sm text-[#8b949e]">
        <p>© {new Date().getFullYear()} FlightLog Viz. Built for pilots, by pilots.</p>
      </footer>
    </main>
  );
}
