import Image from "next/image";
import CTAButton from "@/components/CTAButton";

export interface HeroProps {
  title: string;
  subtitle: string;
}

export function Hero({ title, subtitle }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-emerald-950 text-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 py-20 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1 space-y-6">
          <p className="text-sm uppercase tracking-[0.35em] text-emerald-200">Escola Comunitária Novo Horizonte</p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">{title}</h1>
          <p className="max-w-xl text-lg text-emerald-100 md:text-xl">{subtitle}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <CTAButton>Scopri le comunità</CTAButton>
            <CTAButton variant="secondary" className="sm:ml-4">
              Partecipa
            </CTAButton>
          </div>
        </div>
        <div className="flex-1">
          <div className="relative h-72 w-full overflow-hidden rounded-3xl border border-emerald-700/60 bg-emerald-900 shadow-2xl sm:h-96">
            <Image
              src="/images/hero-placeholder.svg"
              alt="Bambini e famiglie impegnati in un'attività educativa comunitaria"
              fill
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -bottom-24 left-1/2 h-48 w-[120%] -translate-x-1/2 rounded-[50%] bg-emerald-700/30 blur-3xl" />
    </section>
  );
}

export default Hero;
