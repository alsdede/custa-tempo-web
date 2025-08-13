import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";




export default function HeroSection() {
  return (
  <section className="max-w-content mx-auto flex justify-center gap-10 py-20">

      {/* Left side */}
      <div className="flex flex-col justify-between gap-4  max-w-[258px]">
      <h1 className={`text-[20px] font-black text-black`}>
  A moeda mais valiosa do mundo é o{" "}
  <span className="text-primary">tempo.</span>
</h1>
        <p
          className={`text-[12px] font-medium text-black`}
        >
          Saber o quanto você precisa gastar para comprar qualquer coisa é fundamental para ter consciência financeira e tomar decisões mais inteligentes.
        </p>
        <Button className={` font-inter inline-flex items-center gap-2 bg-[#0047D6]`}>
          <ArrowRight size={16} />
          Adicionar ao Chrome, é grátis!
        </Button>
      </div>

      {/* Right side */}
      <div className="flex flex-col items-center gap-2">
        <iframe
          width="310"
          height="175"
          src="https://www.youtube.com/embed/t-HdGQagPRc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className=" rounded-xl"
        ></iframe>
        <p
          className="text-[8px] text-center w-[310px] bg-[#eeeeee] py-2 mt-2 rounded-full"
        >
          Veja o que a Nathalia do <span className=" text-[#7F6FE8] font-bold">MePoupe</span> tem a dizer sobre o assunto.
        </p>
      </div>
    </section>
  );
}
