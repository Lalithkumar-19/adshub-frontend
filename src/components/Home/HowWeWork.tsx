"use client"

import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check, Play, Pause } from "lucide-react"

interface WorkStep {
  icon: string
  step: string
  title: string
  description: string
}

interface HowWeWorkProps {
  steps?: WorkStep[]
  className?: string
  title?: string
  autoPlayInterval?: number
}

const defaultSteps: WorkStep[] = [
  {
    icon: "🎯",
    step: "Phase 1",
    title: "Discovery & Strategy",
    description: "Deep dive into your brand, target audience, and market landscape to craft a winning strategy."
  },
  {
    icon: "💡",
    step: "Phase 2", 
    title: "Concept Development",
    description: "Brainstorming innovative ideas and creative concepts that will make your brand stand out."
  },
  {
    icon: "✍️",
    step: "Phase 3",
    title: "Creative Execution", 
    description: "Bringing concepts to life through stunning visuals, compelling copy, and engaging content."
  },
  {
    icon: "📊",
    step: "Phase 4",
    title: "Campaign Launch",
    description: "Strategic deployment across selected channels with precision timing and optimal targeting."
  },
  {
    icon: "🔍",
    step: "Phase 5",
    title: "Performance Analysis",
    description: "Monitoring campaign performance with real-time analytics and data-driven insights."
  },
  {
    icon: "🔄",
    step: "Phase 6",
    title: "Optimization & Scaling",
    description: "Refining strategies based on performance data and scaling successful campaigns for maximum ROI."
  }
]

export function HowWeWork({
  steps = defaultSteps,
  className,
  title = "Our Creative Process",
  autoPlayInterval = 4000,
}: HowWeWorkProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [progress, setProgress] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const resetAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setProgress((prev) => {
          const newProgress = prev + 100 / (autoPlayInterval / 100);
          if (newProgress >= 100) {
            setCurrentStep((prevStep) => (prevStep + 1) % steps.length);
            return 0;
          }
          return newProgress;
        });
      }, 100);
    }
  };

  useEffect(() => {
    resetAutoPlay();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [currentStep, steps.length, autoPlayInterval, isPaused]);

  const handleStepClick = (index: number) => {
    setCurrentStep(index);
    setProgress(0);
    setIsPaused(true);
  };

  const togglePlayPause = () => {
    setIsPaused((prev) => !prev);
    setProgress(0);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  }

  return (
    <motion.div
      className={cn("py-16 px-4 md:px-8 bg-black text-white", className)}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-bold mb-16 text-center text-purple-700"
          variants={stepVariants}
        >
          {title}
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps List */}
          <motion.div className="space-y-6" variants={containerVariants}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={cn(
                  "flex items-start gap-6 p-6 rounded-2xl border transition-all duration-500 cursor-pointer",
                  index === currentStep
                    ? "bg-gray-900 border-purple-600 shadow-lg shadow-purple-500/20 scale-[1.02]"
                    : "bg-gray-800 border-gray-700 hover:bg-gray-750"
                )}
                variants={stepVariants}
                whileHover={{ scale: index === currentStep ? 1.02 : 1.01 }}
                onClick={() => handleStepClick(index)}
              >
                <motion.div
                  className={cn(
                    "flex items-center justify-center w-16 h-16 rounded-2xl text-2xl font-bold transition-all duration-500",
                    index === currentStep
                      ? "bg-purple-700 text-white shadow-lg shadow-purple-700/50"
                      : index < currentStep
                      ? "bg-purple-600 text-white"
                      : "bg-gray-700 text-purple-400"
                  )}
                  variants={iconVariants}
                  animate={
                    index === currentStep
                      ? {
                          scale: [1, 1.1, 1],
                          transition: { duration: 2, repeat: Infinity },
                        }
                      : {}
                  }
                >
                  {index < currentStep || (index === currentStep && progress >= 100) ? <Check className="w-8 h-8" /> : step.icon}
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span
                      className={cn(
                        "text-sm font-semibold px-3 py-1 rounded-full",
                        index === currentStep
                          ? "bg-purple-700 text-white"
                          : index < currentStep
                          ? "bg-purple-900 text-purple-300"
                          : "bg-gray-700 text-gray-400"
                      )}
                    >
                      {step.step}
                    </span>
                    {index === currentStep && (
                      <motion.div
                        className="h-2 bg-gray-700 rounded-full flex-1 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                      >
                        <motion.div
                          className="h-full bg-purple-700 rounded-full"
                          style={{ width: `${progress}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </motion.div>
                    )}
                  </div>
                  <h3
                    className={cn(
                      "text-xl font-semibold mb-2 transition-colors",
                      index === currentStep
                        ? "text-purple-400"
                        : "text-white"
                    )}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Visual Representation */}
          <motion.div
            className="relative h-[500px] lg:h-[600px] overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-black to-purple-900/20 border border-gray-800"
            variants={stepVariants}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
                animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="text-center p-8">
                  <motion.div
                    className="text-8xl mb-8"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    {steps[currentStep].icon}
                  </motion.div>
                  <motion.h3
                    className="text-3xl font-bold text-purple-400 mb-4"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {steps[currentStep].title}
                  </motion.h3>
                  <motion.p
                    className="text-lg text-gray-300 max-w-md mx-auto"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {steps[currentStep].description}
                  </motion.p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Step indicators and Play/Pause button */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-3">
              <motion.button
                className="w-8 h-8 rounded-full bg-purple-700 text-white flex items-center justify-center shadow-md shadow-purple-700/30"
                onClick={togglePlayPause}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                aria-label={isPaused ? "Play autoplay" : "Pause autoplay"}
              >
                {isPaused ? <Play className="w-4 h-4" /> : <Pause className="w-4 h-4" />}
              </motion.button>
              {steps.map((_, index) => (
                <motion.button
                  key={index}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentStep
                      ? "bg-purple-700 scale-125"
                      : index < currentStep
                      ? "bg-purple-600"
                      : "bg-gray-600"
                  )}
                  onClick={() => handleStepClick(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function HowWeWorkDemo() {
  return <HowWeWork />
}