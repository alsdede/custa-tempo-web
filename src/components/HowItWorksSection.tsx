"use client"

import * as React from "react"
import Image from "next/image"

interface StepData {
  id: string
  number: string
  title: string
  description: string
  hasButton?: boolean
  buttonText?: string
}

const steps: StepData[] = [
  {
    id: "1",
    number: "1.",
    title: "Instalar",
    description: "Clique no botão abaixo e instale direto da loja. É seguro e gratuito.",
    hasButton: true,
    buttonText: "Instalar"
  },
  {
    id: "2", 
    number: "2.",
    title: "Informações",
    description: "Insira as informações de dias e horas trabalhadas na meta pra saber o quanto você recebe por hora.",
    hasButton: false
  },
  {
    id: "3",
    number: "3.",
    title: "Pronto!",
    description: "Agora você já pode conferir quanto tempo custa cada coisa que quer comprar.",
    hasButton: false
  }
]

const usageSteps: StepData[] = [
  {
    id: "1",
    number: "1.",
    title: "Quando você quiser",
    description: "Clique na extensão, insira o valor desejado e veja o quanto você precisará trabalhar para comprar.",
    hasButton: false
  },
  {
    id: "2",
    number: "2.", 
    title: "Um atalho",
    description: "Selecione qualquer número direto do navegador, clique bem fácil direto e clique na extensão.",
    hasButton: false
  },
  {
    id: "4",
    number: "4.",
    title: "Checkout",
    description: "Nos principais lojas, você encontra a informação de horas direto no checkout, sem precisar fazer nada.",
    hasButton: false
  }
]

function StepCard({ step }: { step: StepData }) {
  return (
    <div className="flex flex-col items-center">
      {/* GIF Placeholder */}
      <div className="w-full h-40 bg-[#F8F8F8] rounded-xl flex items-center justify-center mb-6">
        <span className="text-gray-400 text-sm font-medium">GIF</span>
      </div>
      
      {/* Content */}
      <div className="text-center space-y-3">
        <h3 className="text-black text-base font-bold tracking-[0.5px]">
          {step.number} {step.title}
        </h3>
        <p className="text-black text-xs font-medium leading-relaxed">
          {step.description}
        </p>
        
        {step.hasButton && (
          <button className="bg-[#0047D6] text-white px-4 py-2 rounded-lg flex items-center gap-2 mx-auto mt-4">
            <Image 
              src="/chrome-logo.png" 
              alt="Chrome" 
              width={16} 
              height={16}
              className="w-4 h-4"
            />
            <span className="text-base font-medium tracking-[0.5px]">
              {step.buttonText}
            </span>
          </button>
        )}
      </div>
    </div>
  )
}

export default function HowItWorksSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* First Section: Como funciona */}
        <div className="mb-12">
          <h2 className="text-black text-[32px] font-black tracking-[0.5px] mb-6 text-start">
            Como funciona
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {steps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>

        {/* Second Section: Agora é só usar */}
        <div>
          <h2 className="text-black text-2xl font-medium tracking-[0.5px] mb-6 text-start">
            Agora é só usar...
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {usageSteps.map((step) => (
              <StepCard key={step.id} step={step} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
