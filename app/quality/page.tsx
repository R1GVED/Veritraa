import { CheckCircle2, Zap, Shield, Award } from 'lucide-react';

export default function QualityPage() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero */}
      <section className="relative h-80 bg-gradient-to-br from-veritraa-green to-veritraa-charcoal text-white overflow-hidden pt-32">
        <div className="container-max relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Our Commitment to Purity</h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Every claim backed by testing. Every promise kept through discipline.
          </p>
        </div>
      </section>

      {/* Quality Pillars */}
      <section className="py-20 bg-white">
        <div className="container-max">
          <div className="space-y-20">
            {/* Sourcing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-veritraa-green mb-6">01. Sourcing</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We partner directly with farmers across India's premier spice regions. Our region-specific sourcing ensures authenticity and quality. Kerala for turmeric, Rajasthan for cumin, Karnataka for coriander—each region's best practices are honored.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Direct farmer partnerships</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Region-specific selection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Peak harvest collection</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Fair trade practices</span>
                  </li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1574943320219-553eb213f72d?w=500&h=500&fit=crop"
                alt="Sourcing"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Processing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center order-last md:order-none md:grid-cols-2 md:direction-rtl">
              <img
                src="https://images.unsplash.com/photo-1599599810694-b5ac4dd4eae5?w=500&h=500&fit=crop"
                alt="Processing"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-4xl font-serif font-bold text-veritraa-gold mb-6">02. Processing</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Our state-of-the-art, hygienic facilities maintain strict temperature and humidity controls. We use minimal processing to retain natural oils, aroma, and nutritional value.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Hygienic facilities</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Temperature controlled</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Minimal processing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Aroma & oils preserved</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Testing */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-serif font-bold text-veritraa-terracotta mb-6">03. Lab Testing</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  Every batch undergoes rigorous third-party lab testing for purity, microbial content, heavy metals, and potential adulterants. We exceed FSSAI standards consistently.
                </p>
                <div className="space-y-4 bg-veritraa-cream p-6 rounded-lg">
                  <h4 className="font-bold text-veritraa-charcoal">Test Parameters:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>✓ Purity analysis</li>
                    <li>✓ Moisture content</li>
                    <li>✓ Microbial testing</li>
                    <li>✓ Heavy metal testing</li>
                    <li>✓ Adulteration checks</li>
                    <li>✓ Pesticide residue analysis</li>
                  </ul>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=500&h=500&fit=crop"
                alt="Testing"
                className="rounded-lg shadow-lg"
              />
            </div>

            {/* Packaging */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center order-last">
              <img
                src="https://images.unsplash.com/photo-1599599810032-9bfb9c9d5d3f?w=500&h=500&fit=crop"
                alt="Packaging"
                className="rounded-lg shadow-lg"
              />
              <div>
                <h2 className="text-4xl font-serif font-bold text-veritraa-success mb-6">04. Packaging</h2>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  We use food-grade materials with tamper-proof sealing to ensure maximum freshness and safety. Every package includes clear labeling, batch codes, and traceability information.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Food-grade materials</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Tamper-proof sealing</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Full batch traceability</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="text-veritraa-gold" size={24} />
                    <span className="text-gray-700">Clear labeling & expiry</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max">
          <h2 className="text-4xl font-serif font-bold text-center text-veritraa-charcoal mb-12">
            Certified & Compliant
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'FSSAI License',
                cert: 'License #XXXX2024XXX',
                validity: 'Valid until 2027',
                icon: '🔒',
              },
              {
                title: 'ISO 22000:2018',
                cert: 'Food Safety Management',
                validity: 'Valid until 2026',
                icon: '✓',
              },
              {
                title: 'Lab Tested',
                cert: 'Third-Party Certification',
                validity: 'Every Batch',
                icon: '🔬',
              },
            ].map((cert, i) => (
              <div key={i} className="bg-white p-8 rounded-lg shadow hover:shadow-lg transition-shadow text-center">
                <div className="text-5xl mb-4">{cert.icon}</div>
                <h3 className="text-xl font-bold text-veritraa-charcoal mb-2">{cert.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{cert.cert}</p>
                <p className="text-xs text-veritraa-success font-semibold">{cert.validity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="py-20 bg-white">
        <div className="container-max max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-veritraa-charcoal mb-12">
            Know Your Source
          </h2>

          <div className="bg-veritraa-cream p-8 rounded-lg mb-12">
            <p className="text-center text-lg text-gray-700 leading-relaxed">
              Every Veritraa product comes with a unique batch code. Use this code to trace your spice back to its origin, processing facility, testing results, and best-by date.
            </p>
          </div>

          <div className="space-y-8">
            {[
              { step: '1', title: 'Farm to Batch', desc: 'Region sourced and batch number assigned' },
              { step: '2', title: 'Processing', desc: 'Logged in our facility with date and time' },
              { step: '3', title: 'Lab Testing', desc: 'Complete testing results recorded' },
              { step: '4', title: 'Your Package', desc: 'Batch code printed for traceability' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-6">
                <div className="w-12 h-12 bg-veritraa-gold text-white rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h4 className="font-bold text-veritraa-charcoal text-lg">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-veritraa-green text-white rounded-lg text-center">
            <p className="text-sm mb-2">Example Batch Code on Your Package:</p>
            <p className="text-2xl font-mono font-bold">VER-TUR-250-2024-001</p>
            <p className="text-sm mt-2 text-gray-200">Scan or enter this code to see full traceability details</p>
          </div>
        </div>
      </section>

      {/* Quality Comparison */}
      <section className="py-20 bg-veritraa-cream">
        <div className="container-max max-w-4xl mx-auto">
          <h2 className="text-4xl font-serif font-bold text-center text-veritraa-charcoal mb-12">
            Why We're Different
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full text-center border-collapse">
              <thead>
                <tr className="border-b-2 border-veritraa-gold">
                  <th className="text-left p-4 font-bold text-veritraa-charcoal">Feature</th>
                  <th className="p-4 font-bold text-veritraa-green">Veritraa</th>
                  <th className="p-4 font-bold text-gray-600">Standard Market</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Lab Tested Purity', '✓', '✗'],
                  ['Source Traced', '✓', '✗'],
                  ['No Additives', '✓', '✗'],
                  ['FSSAI Certified', '✓', '✓'],
                  ['Temperature Packed', '✓', '✗'],
                  ['Batch Traceability', '✓', '✗'],
                  ['Direct Farmer Partnerships', '✓', '✗'],
              ].map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                    <td className="text-left p-4 font-medium text-veritraa-charcoal border-b border-veritraa-light-gray">
                      {row[0]}
                    </td>
                    <td className="p-4 text-veritraa-success font-bold border-b border-veritraa-light-gray">
                      {row[1]}
                    </td>
                    <td className="p-4 text-gray-600 border-b border-veritraa-light-gray">
                      {row[2]}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}
