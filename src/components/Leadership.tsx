"use client";

import { motion } from "framer-motion";
import { FaCrown, FaUsers, FaCalendarAlt } from "react-icons/fa";
import { leadership } from "@/config/data";

export function Leadership() {
  return (
    <div className="mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="mb-12"
      >
        <div className="flex items-center gap-4 mb-4">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="p-3 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-xl border border-yellow-500/30"
          >
            <FaCrown className="w-6 h-6 text-yellow-400" />
          </motion.div>
          <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white via-yellow-100 to-orange-300 bg-clip-text text-transparent">
            Leadership Experience
          </h2>
        </div>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent"
        />
      </motion.div>

      <div className="space-y-8">
        {leadership.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="bg-gray-900/30 rounded-xl p-6 border border-gray-800/50 hover:border-yellow-500/30 transition-all duration-500 group"
          >
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300">
                  {item.position}
                </h3>
                <div className="flex items-center gap-2 text-yellow-400 font-semibold mb-2">
                  <FaUsers className="w-4 h-4" />
                  {item.organization}
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm">
                  <FaCalendarAlt className="w-4 h-4" />
                  {item.period}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              {item.bulletPoints.map((point, pointIndex) => (
                <motion.div
                  key={pointIndex}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.2 + pointIndex * 0.1,
                    ease: "easeOut",
                  }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-yellow-400 rounded-full mt-2" />
                  <p className="text-gray-300 leading-relaxed">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}