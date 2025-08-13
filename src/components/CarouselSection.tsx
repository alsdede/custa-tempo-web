"use client";

import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./ui/card";
import Image from "next/image";

interface ProductData {
  id: string;
  name: string;
  price: number;
  image: string;
  workDays: number;
  workHours: number;
  workMinutes: number;
  totalSeconds: number;
  dateRange: string;
}

const products: ProductData[] = [
  {
    id: "1",
    name: "iPhone 16 Pro Max",
    price: 12499.0,
    image: "/iphone.png",
    workDays: 226,
    workHours: 3,
    workMinutes: 26,
    totalSeconds: 57,
    dateRange: "1 de jan até 30 de out", // ~10 meses
  },
  {
    id: "2",
    name: "PlayStation 5",
    price: 3899.0,
    image: "/playstation.png",
    workDays: 70,
    workHours: 5,
    workMinutes: 4,
    totalSeconds: 21,
    dateRange: "1 de jan até 31 de mar", // ~3 meses
  },
  {
    id: "3",
    name: 'Smart TV 32" LG',
    price: 1206.0,
    image: "/tv.png",
    workDays: 21,
    workHours: 6,
    workMinutes: 52,
    totalSeconds: 42,
    dateRange: "1 de jan até 31 de jan", // ~1 mês
  },
  {
    id: "4",
    name: "Supermercado",
    price: 500.0,
    image: "/market.png",
    workDays: 9,
    workHours: 0,
    workMinutes: 27,
    totalSeconds: 50,
    dateRange: "1 de jan até 15 de jan", // menos de 1 mês
  },
  {
    id: "5",
    name: "Conta de Luz",
    price: 100.0,
    image: "/energy.png",
    workDays: 1,
    workHours: 6,
    workMinutes: 29,
    totalSeconds: 34,
    dateRange: "1 de jan até 2 de jan", // ~1 dia
  },
];

function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);
}

// Função para calcular quantos meses são necessários para trabalhar
function calculateWorkMonths(workDays: number): number {
  // Considerando aproximadamente 22 dias úteis por mês
  const workDaysPerMonth = 22;
  return Math.ceil(workDays / workDaysPerMonth);
}

// Função para gerar o nome dos meses abreviados
function getMonthAbbreviations(): string[] {
  return ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
}

// Função para calcular o período de trabalho
function calculateDateRange(workDays: number): string {
  const monthNames = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  const workDaysPerMonth = 22;
  const totalMonths = Math.ceil(workDays / workDaysPerMonth);

  if (totalMonths <= 1) {
    if (workDays <= 1) {
      return "1 de jan até 2 de jan";
    } else if (workDays <= 15) {
      return `1 de jan até ${workDays + 1} de jan`;
    } else {
      return "1 de jan até 31 de jan";
    }
  }

  const endMonthIndex = Math.min(totalMonths - 1, 11);
  const endMonth = monthNames[endMonthIndex];

  // Calcula o dia aproximado do último mês
  const remainingDays = workDays % workDaysPerMonth;
  const endDay = remainingDays === 0 ? 30 : remainingDays;

  return `1 de jan até ${endDay} de ${endMonth}`;
}

function ProductCard({ product }: { product: ProductData }) {
  return (
    <Card className="w-full max-w-sm mx-auto bg-white rounded-2xl  overflow-hidden border-none">
      <CardContent className="p-4 flex flex-col items-center">
        {/* Product Image and Info */}
        <div className="flex flex-col items-center mb-2">
          <div className="relative w-24 h-24 bg-gray-100 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
            <Image
              src={product.image}
              fill
              alt={product.name}
              className="object-contain"
            />
          </div>
          <h3 className="text-[10px] font-medium text-[#6D6E71] text-center mb-2">
            {product.name}
          </h3>
          <p className="text-[14px] font-extrabold text-black">
            {formatPrice(product.price)}
          </p>
        </div>

        {/* Time Indicators */}
        <div className="flex justify-between items-center bg-[#FF5B10] p-2 rounded-[8px] w-full mb-4">
          <div className="text-white flex flex-col items-center w-full">
            <p className=" text-[12px] font-extrabold">{product.workDays}</p>
            <p className="font-inter text-[8px] font-medium">Dias</p>
          </div>
          {/* separator */}
          <div className="h-6 w-px bg-white opacity-50"></div>
          {/* separator */}
          <div className="text-white flex flex-col items-center w-full">
            <p className=" text-[12px] font-extrabold">{product.workHours}</p>
            <p className="font-inter text-[8px] font-medium">Horas</p>
          </div>
          {/* separator */}
          <div className="h-6 w-px bg-white opacity-50"></div>
          {/* separator */}
          <div className="text-white  flex flex-col items-center w-full">
            <p className=" text-[12px] font-extrabold">{product.workMinutes}</p>
            <p className="font-inter text-[8px] font-medium">Min.</p>
          </div>
          {/* separator */}
          <div className="h-6 w-px bg-white opacity-50"></div>
          {/* separator */}
          <div className="text-white  flex flex-col items-center w-full">
            <p className=" text-[12px] font-extrabold">
              {product.totalSeconds}
            </p>
            <p className="font-inter text-[8px] font-medium">Seg.</p>
          </div>
        </div>

        {/* Date Range */}
        <p className="text-[10px] text-[#6D6E71] text-center mb-2">
          {calculateDateRange(product.workDays)}
        </p>

        {/* Calendar Grid */}
        <div className="space-y-1">
          {/* First row - Janeiro to Junho */}
          <div className="flex justify-between gap-1">
            {Array.from({ length: 6 }, (_, monthIndex) => {
              const workMonthsNeeded = calculateWorkMonths(product.workDays);
              const isWorkedMonth = monthIndex < workMonthsNeeded;
              const monthAbbreviation = getMonthAbbreviations()[monthIndex];

              return (
                <div
                  key={monthIndex}
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium text-black ${
                    isWorkedMonth ? "bg-[#FF5B10]" : "bg-[#F8F8F8]"
                  }`}
                >
                  {monthAbbreviation}
                </div>
              );
            })}
          </div>

          {/* Second row - Julho to Dezembro */}
          <div className="flex justify-between gap-1">
            {Array.from({ length: 6 }, (_, monthIndex) => {
              const actualMonthIndex = monthIndex + 6;
              const workMonthsNeeded = calculateWorkMonths(product.workDays);
              const isWorkedMonth = actualMonthIndex < workMonthsNeeded;
              const monthAbbreviation =
                getMonthAbbreviations()[actualMonthIndex];

              return (
                <div
                  key={actualMonthIndex}
                  className={`w-4 h-4 rounded-full flex items-center justify-center text-[10px] font-medium text-black ${
                    isWorkedMonth ? "bg-[#FF5B10]" : "bg-[#F8F8F8]"
                  }`}
                >
                  {monthAbbreviation}
                </div>
              );
            })}
          </div>

          {/* Week Days Labels */}
          {/* <div className="flex justify-between text-xs text-gray-400 mt-2">
            <span>J</span>
            <span>A</span>
            <span>S</span>
            <span>O</span>
            <span>N</span>
            <span>D</span>
          </div> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default function CarouselSection() {
  return (
    <section className="p-11 bg-[#FFF2E8] rounded-[32px]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between">
          {/* Left Side - Info Card */}
          <div className="max-w-[195px]">
            <div className="">
              <h2 className="text-xl font-black text-black mb-2 leading-[24px]">
                Na prática
              </h2>
              <p className="text-[12px] text-[#585858] mb-3 font-medium leading-[14px]">
                Quantas horas de trabalho são necessárias para comprar esses
                produtos?
              </p>
              <p className="text-[12px] text-[#585858] mb-4 font-medium leading-[14px]">
                Confira o cálculo pra quem ganha salário mínimo:
              </p>

              <div className="bg-white p-4 rounded-[12px] flex flex-col items-center gap-4 justify-center">
         
                  <div className="flex flex-col text-center">
                    <p className="text-[10px] text-[#585858] mb-1 font-medium leading-3">
                      Salário mínimo 2025:
                    </p>
                    <p className="text-[12px] font-extrabold text-black leading-[14px]">
                      R$ 1.518,00
                    </p>
                  </div>
                  <div className="flex flex-col text-center">
                    <p className="text-[10px] text-[#585858]">Carga horária:</p>
                                   <p className="text-[12px] font-extrabold text-black leading-[14px]">
                      8h / dia | 220h / mês
                    </p>
                  </div>
          

                <div className="bg-[#FF5B10] text-white rounded-lg p-2 text-center w-full">
                  <p className="text-[8px] font-inter font-medium">
                    Sua ganha por hora é
                  </p>
                  <p className="text-[12px] font-extrabold">R$ 6,90 / hora</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Carousel */}
          <div className="lg:w-2/3">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 w-full">
                {products.map((product) => (
                  <CarouselItem
                    key={product.id}
                    className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <ProductCard product={product} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
