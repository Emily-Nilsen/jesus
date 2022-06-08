import Link from 'next/link';
import { motion } from 'framer-motion';

const Logo = () => {
  return (
    <div className="relative z-20 flex items-center w-5/6 cursor-pointer h-5/6 sm:h-full sm:w-full">
      <Link href="/" exact="true" passHref>
        <svg
          width="40"
          height="40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 280.51 270.93"
        >
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: 0.1, duration: 1, ease: 'easeInOut' }}
                className="cls-1"
                stroke="#d97706"
                strokeWidth="10"
                fill="none"
                d="M22.84,96.12c-17.55-15-23-42.39-12.53-62.94S46.16.92,68.59,6.31s39.73,27.34,39.72,50.41q0,86.32,0,172.64a37.52,37.52,0,0,1-21.1,33.2c-12.54,5.88-28.38,3.85-39.54-4.33"
              />
              <motion.path
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ delay: 1, duration: 1.5, ease: 'easeInOut' }}
                className="cls-2"
                stroke="#8a504e"
                strokeWidth="10"
                fill="none"
                d="M82,158.07C46.37,99.09,96.05,24.6,176,37.07c114.32,17.82,90.12,138.59-27,130.21m29.75-.54c23.24,2.95,41.94,20.47,49,42,5.95,19.47,29.6,29.81,47.77,20.88m-157.76,3.71C128,240,147,235,147.54,220.53c1.89-47.43,1.48-95.44.25-143.58"
              />
            </g>
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default Logo;
