"use client"

import * as React from "react"
import Image from "next/image"
import { useTranslations } from 'next-intl'

interface StepData {
  id: string
  number: string
  titleKey: string
  descriptionKey: string
  hasButton?: boolean
  buttonTextKey?: string
}

const steps: StepData[] = [
  {
    id: "1",
    number: "1.",
    titleKey: "step1.title",
    descriptionKey: "step1.description",
    hasButton: true,
    buttonTextKey: "step1.button"
  },
  {
    id: "2", 
    number: "2.",
    titleKey: "step2.title",
    descriptionKey: "step2.description"
  },
  {
    id: "3",
    number: "3.",
    titleKey: "step3.title", 
    descriptionKey: "step3.description"
  }
]

const usageSteps: StepData[] = [
  {
    id: "4",
    number: "1.",
    titleKey: "usage1.title",
    descriptionKey: "usage1.description"
  },
  {
    id: "5",
    number: "2.",
    titleKey: "usage2.title", 
    descriptionKey: "usage2.description"
  },
  {
    id: "6",
    number: "3.",
    titleKey: "usage3.title",
    descriptionKey: "usage3.description"
  }
]

function StepCard({ step }: { step: StepData }) {
  const t = useTranslations('howItWorks');
  
  return (
    <div className="flex flex-col items-center">
      {/* GIF Placeholder */}
      <div className="w-full h-40 bg-[#F8F8F8] rounded-xl flex items-center justify-center mb-6">
        <span className="text-gray-400 text-sm font-medium">GIF</span>
      </div>
      
      {/* Content */}
      <div className="text-center space-y-3">
        <h3 className="text-black text-base font-bold tracking-[0.5px]">
          {step.number} {t(step.titleKey)}
        </h3>
        <p className="text-black text-xs font-medium leading-relaxed">
          {t(step.descriptionKey)}
        </p>
        
        {step.hasButton && step.buttonTextKey && (
          <button className="bg-[#0047D6] text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto mt-4">
            <Image 
              src="/chrome-logo.png" 
              alt="Chrome" 
              width={16} 
              height={16}
              className="w-4 h-4"
            />
            <span className="text-base font-medium tracking-[0.5px]">
              {t(step.buttonTextKey)}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  const t = useTranslations('howItWorks');
  
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* First Section: Como funciona */}
        <div className="mb-12">
          <h2 className="text-black text-[32px] font-black tracking-[0.5px] mb-6 text-start">
            {t('title')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>

        {/* Second Section: Agora é só usar */}
        <div>
          <h2 className="text-black text-[32px] font-black tracking-[0.5px] mb-6 text-start">
            {t('nowUse')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {usageSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
