import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Button } from './Primitives';

export default function Hero() {
  return (
    <div id="home" className="relative isolate pt-24 sm:pt-28 lg:pt-32">
      {/* 3D Background */}
      <div className="absolute inset-0 h-[560px] md:h-[640px] lg:h-[720px]">
        <Spline scene="https://prod.spline.design/igThmltzmqv5hkWo/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* Subtle readability gradient (non-blocking) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/20 to-[#F9FAFB]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 max-w-3xl pt-12 pb-16 sm:pb-20 lg:pt-16 lg:pb-28">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900"
            style={{ fontFamily: 'Rubik, ui-sans-serif, system-ui' }}
          >
            Schema-Driven ERP SaaS for Modern Businesses.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.7 }}
            className="mt-6 text-lg text-gray-600"
            style={{ fontFamily: 'Manrope, ui-sans-serif, system-ui' }}
          >
            Tauriam empowers organizations to manage products, people, and finances through a flexible, customizable system — built for efficiency and growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="mt-8 flex flex-col sm:flex-row gap-3"
          >
            <Button href="#signup" variant="primary" className="px-5 py-3 text-base bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-600">
              Get Started
            </Button>
            <Button href="#docs" variant="ghost" className="px-5 py-3 text-base">
              View Docs
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
            className="mt-10 text-sm text-gray-500"
          >
            Trusted by forward-thinking teams
            <div className="mt-3 flex items-center gap-6 opacity-70">
              <div className="h-6 w-24 rounded bg-gray-200" />
              <div className="h-6 w-24 rounded bg-gray-200" />
              <div className="h-6 w-24 rounded bg-gray-200" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
