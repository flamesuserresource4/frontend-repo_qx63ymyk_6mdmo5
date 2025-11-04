import { motion } from 'framer-motion';
import { Rocket, Shield, Layers, Building2, BarChart3, Wallet } from 'lucide-react';
import { Button, Section, fadeIn, container } from './Primitives';

export default function Sections() {
  return (
    <div className="relative">
      {/* Features */}
      <Section id="features" className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={container}>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight" style={{ fontFamily: 'Rubik, ui-sans-serif, system-ui' }}>
              Built for precision. Designed for scale.
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-3 text-gray-600 max-w-2xl" style={{ fontFamily: 'Satoshi, ui-sans-serif, system-ui' }}>
              From schema-driven data to real-time ledgers — Tauriam brings modern software craft to serious business operations.
            </motion.p>

            <motion.div variants={container} className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((f, i) => (
                <motion.div key={i} variants={fadeIn} className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md hover:-translate-y-0.5">
                  <div className="flex items-center gap-3">
                    <f.icon className="h-5 w-5 text-indigo-600" />
                    <h3 className="text-lg font-semibold text-gray-900">{f.title}</h3>
                  </div>
                  <p className="mt-3 text-sm text-gray-600">{f.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* How It Works */}
      <Section id="how" className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={container}>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight" style={{ fontFamily: 'Rubik, ui-sans-serif, system-ui' }}>
              How it works
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-3 text-gray-600 max-w-2xl" style={{ fontFamily: 'Satoshi, ui-sans-serif, system-ui' }}>
              Get operational in minutes. Scale with confidence.
            </motion.p>

            <ol className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {steps.map((s, i) => (
                <motion.li key={i} variants={fadeIn} className="relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 font-semibold">{i + 1}</div>
                    <div>
                      <h4 className="text-base font-semibold text-gray-900">{s.title}</h4>
                      <p className="mt-2 text-sm text-gray-600">{s.desc}</p>
                    </div>
                  </div>
                </motion.li>
              ))}
            </ol>
          </motion.div>
        </div>
      </Section>

      {/* Pricing */}
      <Section id="pricing" className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <motion.div initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} variants={container}>
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-semibold text-gray-900 tracking-tight" style={{ fontFamily: 'Rubik, ui-sans-serif, system-ui' }}>
              Simple pricing for growing teams
            </motion.h2>
            <motion.p variants={fadeIn} className="mt-3 text-gray-600 max-w-2xl" style={{ fontFamily: 'Satoshi, ui-sans-serif, system-ui' }}>
              Pay-as-you-go for Pakistani enterprises. No hidden fees.
            </motion.p>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {plans.map((p, i) => (
                <motion.div key={i} variants={fadeIn} className={`rounded-2xl border bg-white p-6 shadow-sm ${p.highlight ? 'border-indigo-300 ring-1 ring-indigo-200' : 'border-gray-200'}`}>
                  <div className="flex items-baseline justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{p.name}</h3>
                    {p.highlight && (
                      <span className="rounded-full bg-indigo-50 px-2 py-1 text-xs text-indigo-600">Recommended</span>
                    )}
                  </div>
                  <div className="mt-4 flex items-end gap-1">
                    <span className="text-3xl font-semibold text-gray-900">{p.price}</span>
                    <span className="text-sm text-gray-500">/mo</span>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-gray-600">
                    {p.features.map((f, idx) => (
                      <li key={idx} className="flex gap-2"><span className="text-indigo-600">•</span>{f}</li>
                    ))}
                  </ul>
                  <Button href="#" variant={p.highlight ? 'primary' : 'ghost'} className="mt-6 w-full">Choose {p.name}</Button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>
    </div>
  );
}

const features = [
  { icon: Layers, title: 'SDEC (Schema Driven)', desc: 'Customize business entities with JSON schemas for ultimate flexibility.' },
  { icon: Shield, title: 'RBAC System', desc: 'Role-based permissions ensure the right access for every team member.' },
  { icon: Wallet, title: 'Real-Time Ledger', desc: 'Automatic debit/credit balancing with instant insights.' },
  { icon: Building2, title: 'Multi-Organization', desc: 'Operate multiple businesses from a single account.' },
  { icon: BarChart3, title: 'Dynamic Reports', desc: 'Generate, export, and print business insights on demand.' },
  { icon: Rocket, title: 'Affordable SaaS', desc: 'Predictable pricing optimized for Pakistani enterprises.' },
];

const steps = [
  { title: 'Sign Up or Log In', desc: 'Create your account in minutes with secure authentication.' },
  { title: 'Create or Join an Organization', desc: 'Bring your team together under one collaborative workspace.' },
  { title: 'Define Schemas Dynamically', desc: 'Model products, suppliers, and more with JSON-based schemas.' },
  { title: 'Add Members and Assign Roles', desc: 'Fine-grained permissions powered by RBAC keep data safe.' },
  { title: 'Manage Everything from One Dashboard', desc: 'Track inventory, finances, HR, and operations in one place.' },
];

const plans = [
  { name: 'Starter', price: '₨2,500', highlight: false, features: ['Up to 5 users', 'Core modules', 'Basic reports'] },
  { name: 'Pro', price: '₨7,500', highlight: true, features: ['Up to 25 users', 'Advanced RBAC', 'Real-time ledger', 'Custom reports'] },
  { name: 'Enterprise', price: 'Custom', highlight: false, features: ['Unlimited users', 'SLA & priority support', 'Dedicated environment'] },
];
