import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from 'next-intl';

export default function HeroSection() {
  const t = useTranslations('hero');
  
  return (
  <section className="max-w-content mx-auto flex justify-center gap-10 py-20">

      {/* Left side */}
      <div className="flex flex-col justify-between gap-4  max-w-[258px]">
      <h1 className={`text-[20px] font-black text-black`}>
        {t('title')}{" "}
        <span className="text-primary">{t('subtitle')}</span>
      </h1>
        <p
          className={`text-[12px] font-medium text-black`}
        >
          {t('description')}
        </p>
        <Button className={` font-inter inline-flex items-center gap-2 bg-[#0047D6]`}>
          <ArrowRight size={16} />
          {t('cta')}
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
