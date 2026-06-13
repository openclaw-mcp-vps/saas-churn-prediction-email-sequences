export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold uppercase tracking-widest">
          Churn Prevention
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Predict Churn Before It Happens.
          <br />
          <span className="text-[#58a6ff]">Retain Customers Automatically.</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          ChurnGuard analyzes your users&apos; behavior patterns to flag high-risk accounts and instantly triggers personalized retention email sequences — so you keep more customers without lifting a finger.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors duration-150"
        >
          Start for $19/mo
        </a>
        <p className="mt-3 text-xs text-[#6e7681]">No credit card required to try. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {['ML-powered churn scoring','Automated email sequences','Real-time risk dashboard','Integrates with your stack','Segment & personalize','Instant alerts'].map((f) => (
            <span key={f} className="px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-sm text-[#c9d1d9]">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <div className="rounded-2xl border border-[#30363d] bg-[#161b22] p-8 text-center shadow-xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#58a6ff] mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$19<span className="text-xl font-normal text-[#8b949e]">/mo</span></p>
          <p className="text-sm text-[#6e7681] mb-6">Everything you need to stop churn</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Up to 5,000 tracked users',
              'Unlimited email sequences',
              'Churn risk scoring dashboard',
              'Slack & email alerts',
              'CSV & API data import',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors duration-150"
          >
            Get Started — $19/mo
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">How does ChurnGuard predict churn?</h3>
            <p className="text-sm text-[#8b949e]">ChurnGuard ingests your product usage data and applies machine learning models trained on SaaS behavioral signals — login frequency, feature adoption, support tickets, and more — to assign each user a real-time churn risk score.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Which email providers does it integrate with?</h3>
            <p className="text-sm text-[#8b949e]">ChurnGuard works with SendGrid, Mailgun, Postmark, and any SMTP provider. You can also connect to Mailchimp or ActiveCampaign to trigger sequences inside your existing workflows.</p>
          </div>
          <div className="border border-[#30363d] rounded-xl bg-[#161b22] p-6">
            <h3 className="font-semibold text-white mb-2">Can I cancel my subscription at any time?</h3>
            <p className="text-sm text-[#8b949e]">Yes. There are no long-term contracts. You can cancel your $19/mo subscription at any time from your billing dashboard and you won&apos;t be charged again.</p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#21262d] py-6 text-center text-xs text-[#6e7681]">
        © {new Date().getFullYear()} ChurnGuard. All rights reserved.
      </footer>
    </main>
  )
}
