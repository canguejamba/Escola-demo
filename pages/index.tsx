import Head from "next/head";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-slate-50">
      <Head>
        <title>Escola Comunitária Novo Horizonte</title>
        <meta
          name="description"
          content="Una piattaforma narrativa per raccontare la trasformazione sociale della Escola Comunitária Novo Horizonte."
        />
      </Head>
      <Header />
      <main className="flex-1">
        <Hero
          title="Accendiamo nuovi orizzonti per le comunità brasiliane"
          subtitle="Una rete di educazione comunitaria che coltiva opportunità e speranza attraverso storie, azioni e partecipazione collettiva."
        />
        <section id="vision" className="bg-white py-20">
          <div className="mx-auto max-w-5xl space-y-6 px-6 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Perché esistiamo</h2>
            <p className="text-lg text-slate-600">
              Lavoriamo con le comunità rurali e urbane per costruire spazi educativi rigenerativi, dove ogni bambino possa
              crescere con dignità, creatività e la forza della propria cultura.
            </p>
          </div>
        </section>
        <section id="storie" className="bg-slate-100 py-20">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900">Storie che ispirano</h3>
              <p className="mt-4 text-base text-slate-600">
                Ogni comunità con cui collaboriamo porta una storia unica. Attraverso laboratori creativi, orti comunitari e
                spazi sicuri per famiglie e bambini, stiamo co-creando un futuro più luminoso.
              </p>
            </article>
            <article className="rounded-3xl bg-white p-8 shadow-lg">
              <h3 className="text-2xl font-semibold text-slate-900">Partecipazione aperta</h3>
              <p className="mt-4 text-base text-slate-600">
                Coinvolgiamo volontari, educatori e partner locali per sviluppare programmi educativi che rispondono ai bisogni
                reali e valorizzano la conoscenza del territorio.
              </p>
            </article>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
