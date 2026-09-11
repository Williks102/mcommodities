"use client";

import { useState } from "react";
import {
  ArrowRight, Check, ChevronDown, Coffee, Globe2, Leaf,
  Mail, MapPin, Menu, PackageCheck, ShieldCheck, Sprout, Users, X
} from "lucide-react";

const products = [
  { title:"Cacao", tag:"Fèves de cacao", icon:"🍫", text:"Une production issue de notre réseau de producteurs, avec des dispositifs de suivi, de collecte et de contrôle qualité.", href:"#contact" },
  { title:"Café vert", tag:"Robusta de Côte d'Ivoire", icon:"☕", text:"Une offre destinée aux marchés professionnels, avec des spécifications adaptées aux besoins des acheteurs.", href:"#contact" },
  { title:"Café moulu", tag:"Valeur ajoutée locale", icon:"◒", text:"Une offre pensée pour valoriser le café ivoirien auprès du marché local et des consommateurs.", href:"#contact" },
  { title:"Anacarde", tag:"Filière complémentaire", icon:"◉", text:"Une opportunité de valorisation des productions agricoles ivoiriennes.", href:"#contact" }
];

const reasons = [
  ["Sourcing direct","Un réseau de producteurs organisé au plus près des zones de production.", Users],
  ["Traçabilité","Une meilleure connaissance de l'origine des produits et des lots.", PackageCheck],
  ["Capacité","Une organisation structurée autour de volumes importants de cacao et de café.", Globe2],
  ["Qualité","Des processus de collecte et de contrôle visant la conformité des produits.", ShieldCheck],
  ["Durabilité","Des programmes consacrés à l'agroforesterie, à l'environnement et aux communautés.", Leaf],
  ["Proximité","Une relation durable avec les producteurs et les partenaires.", Sprout]
] as const;

export default function Home() {
  const [open, setOpen] = useState(false);
  const [sent, setSent] = useState(false);

  return (
    <main>
      <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#102A22]/95 text-white backdrop-blur">
        <div className="container-x flex h-20 items-center justify-between">
          <a href="#" className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-full border border-[#B88A45]/70 text-[#D8B778]">
              <span className="font-serif text-lg">MC</span>
            </div>
            <div>
              <div className="font-bold tracking-[.16em] text-sm">MOSES</div>
              <div className="text-[10px] tracking-[.32em] text-[#D8B778]">COMMODITIES</div>
            </div>
          </a>
          <nav className="hidden items-center gap-7 text-sm md:flex">
            <a href="#about" className="hover:text-[#D8B778]">À propos</a>
            <a href="#products" className="hover:text-[#D8B778]">Produits</a>
            <a href="#quality" className="hover:text-[#D8B778]">Qualité</a>
            <a href="#impact" className="hover:text-[#D8B778]">Durabilité</a>
            <a href="#contact" className="rounded-full bg-[#B88A45] px-5 py-3 font-bold text-white hover:bg-[#c59a5b]">Demander un devis</a>
          </nav>
          <button aria-label="Menu" onClick={()=>setOpen(!open)} className="md:hidden">
            {open ? <X/> : <Menu/>}
          </button>
        </div>
        {open && <nav className="border-t border-white/10 bg-[#102A22] px-5 py-5 md:hidden">
          <div className="container-x flex flex-col gap-5 text-sm">
            <a onClick={()=>setOpen(false)} href="#about">À propos</a>
            <a onClick={()=>setOpen(false)} href="#products">Produits</a>
            <a onClick={()=>setOpen(false)} href="#quality">Qualité</a>
            <a onClick={()=>setOpen(false)} href="#impact">Durabilité</a>
            <a onClick={()=>setOpen(false)} href="#contact" className="rounded-full bg-[#B88A45] px-5 py-3 text-center font-bold">Demander un devis</a>
          </div>
        </nav>}
      </header>

      <section className="relative overflow-hidden bg-[#16382D] pt-20 text-white">
        <div className="absolute inset-0 opacity-20 grain"/>
        <div className="container-x relative grid min-h-[650px] items-center gap-10 py-20 lg:grid-cols-[1.05fr_.95fr]">
          <div className="max-w-2xl">
            <div className="eyebrow mb-5 text-[#D8B778]">Cacao & café de Côte d'Ivoire</div>
            <h1 className="display text-5xl leading-[.98] sm:text-6xl lg:text-7xl">De nos producteurs<br/><span className="text-[#D8B778]">aux marchés du monde.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/75">Moses Commodities accompagne ses producteurs dans la production, la collecte et la commercialisation de cacao et de café, avec une approche fondée sur la traçabilité, la durabilité et la proximité.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="#products" className="rounded-full bg-[#B88A45] px-6 py-4 font-bold hover:bg-[#c59a5b]">Découvrir nos produits <ArrowRight className="ml-2 inline h-4 w-4"/></a>
              <a href="#contact" className="rounded-full border border-white/25 px-6 py-4 font-bold hover:bg-white/10">Demander un devis</a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-[500px]">
            <div className="aspect-[4/5] overflow-hidden rounded-[180px_180px_32px_32px] border border-white/10 bg-gradient-to-br from-[#9D6C40] via-[#5D3927] to-[#152F26] shadow-2xl">
              <div className="flex h-full flex-col justify-end p-9">
                <div className="mb-auto pt-12 text-8xl opacity-40">🍃</div>
                <div className="eyebrow text-[#D8B778]">Notre ambition</div>
                <div className="display mt-3 text-4xl">Valoriser nos terres,<br/>nourrir le monde.</div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 bg-black/10">
          <div className="container-x grid grid-cols-2 divide-x divide-white/10 py-7 sm:grid-cols-4">
            {[["3 427","producteurs membres"],["11 417 ha","superficie cultivée"],["10 421 T","cacao / an*"],["625 T","café / an*"]].map(([n,l])=><div key={n} className="px-4 first:pl-0 last:pr-0 sm:px-7"><div className="display text-2xl text-[#D8B778] sm:text-3xl">{n}</div><div className="mt-1 text-xs text-white/55">{l}</div></div>)}
          </div>
        </div>
      </section>

      <section id="about" className="bg-[#FBFAF7] py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <div className="eyebrow text-[#B88A45]">Qui sommes-nous ?</div>
            <h2 className="display mt-4 text-4xl leading-tight sm:text-5xl">Une coopérative ivoirienne au cœur des filières cacao & café.</h2>
          </div>
          <div className="max-w-2xl text-lg leading-8 text-slate-600">
            <p>Moses Commodities est une coopérative agricole engagée aux côtés des producteurs pour valoriser les ressources agricoles de la Côte d'Ivoire et contribuer au développement durable des communautés rurales.</p>
            <p className="mt-5">Notre modèle repose sur une relation de proximité avec les producteurs, une meilleure structuration de la chaîne de valeur et une exigence constante en matière de qualité et de traçabilité.</p>
            <a href="#impact" className="mt-7 inline-flex items-center gap-2 font-bold text-[#16382D]">Découvrir notre démarche <ArrowRight className="h-4 w-4"/></a>
          </div>
        </div>
      </section>

      <section id="products" className="bg-[#F5F0E7] py-24">
        <div className="container-x">
          <div className="max-w-2xl">
            <div className="eyebrow text-[#B88A45]">Nos produits</div>
            <h2 className="display mt-4 text-4xl sm:text-5xl">Des produits agricoles issus du terroir ivoirien.</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {products.map(p=><article key={p.title} className="group flex min-h-[330px] flex-col justify-between rounded-3xl bg-white p-7 shadow-soft transition hover:-translate-y-1">
              <div><div className="text-5xl">{p.icon}</div><div className="eyebrow mt-8 text-[#B88A45]">{p.tag}</div><h3 className="display mt-2 text-3xl">{p.title}</h3><p className="mt-4 text-sm leading-6 text-slate-600">{p.text}</p></div>
              <a href={p.href} className="mt-7 flex items-center gap-2 font-bold text-[#16382D]">Demander une offre <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1"/></a>
            </article>)}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x">
          <div className="max-w-2xl"><div className="eyebrow text-[#B88A45]">Pourquoi Moses Commodities ?</div><h2 className="display mt-4 text-4xl sm:text-5xl">Plus qu'un fournisseur : un partenaire de votre chaîne d'approvisionnement.</h2></div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-[#DCE2DD] sm:grid-cols-2 lg:grid-cols-3">
            {reasons.map(([title,text,Icon])=><div key={title as string} className="bg-white p-8"><Icon className="h-7 w-7 text-[#B88A45]"/><h3 className="mt-6 text-lg font-bold">{title as string}</h3><p className="mt-3 text-sm leading-6 text-slate-600">{text as string}</p></div>)}
          </div>
        </div>
      </section>

      <section className="bg-[#16382D] py-24 text-white">
        <div className="container-x">
          <div className="eyebrow text-[#D8B778]">Notre chaîne de valeur</div>
          <h2 className="display mt-4 max-w-3xl text-4xl sm:text-5xl">De la parcelle au marché, chaque étape compte.</h2>
          <div className="mt-14 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {["Producteurs","Collecte","Contrôle qualité","Stockage","Commercialisation","Marchés"].map((x,i)=><div key={x} className="relative rounded-2xl border border-white/10 bg-white/5 p-6"><div className="text-sm font-bold text-[#D8B778]">0{i+1}</div><div className="mt-8 font-semibold">{x}</div></div>)}
          </div>
        </div>
      </section>

      <section id="quality" className="bg-[#FBFAF7] py-24">
        <div className="container-x grid gap-14 lg:grid-cols-2 lg:items-center">
          <div className="rounded-[2rem] bg-gradient-to-br from-[#6B432C] to-[#16382D] p-10 text-white shadow-soft sm:p-14">
            <div className="text-7xl">🍫</div>
            <div className="eyebrow mt-16 text-[#D8B778]">Qualité & traçabilité</div>
            <h2 className="display mt-4 text-4xl sm:text-5xl">La qualité commence à la plantation.</h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">Notre démarche repose sur une meilleure connaissance de l'origine des produits, des processus de collecte et de contrôle qualité, ainsi que sur l'amélioration continue.</p>
            <div className="mt-9 space-y-5">
              {["Traçabilité des producteurs et des lots","Contrôle qualité adapté aux produits","Conformité et exigences des marchés","Amélioration continue et accompagnement"].map(x=><div key={x} className="flex gap-3"><span className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-[#16382D] text-white"><Check className="h-3 w-3"/></span><span className="font-medium">{x}</span></div>)}
            </div>
            <div className="mt-10 rounded-2xl border border-[#16382D]/10 bg-white p-6"><div className="font-bold">Standards & certifications</div><p className="mt-2 text-sm text-slate-600">Rainforest Alliance et Fairtrade selon les produits/lots concernés et les exigences applicables.</p></div>
          </div>
        </div>
      </section>

      <section id="impact" className="bg-[#F5F0E7] py-24">
        <div className="container-x">
          <div className="max-w-2xl"><div className="eyebrow text-[#B88A45]">Notre impact</div><h2 className="display mt-4 text-4xl sm:text-5xl">Produire. Préserver. Transformer.</h2></div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[["3 427","Producteurs membres"],["11 417 ha","Superficie cultivée"],["4","Zones d'intervention"],["Durable","Engagement environnemental"]].map(([n,l])=><div key={l} className="rounded-3xl bg-white p-8"><div className="display text-4xl text-[#16382D]">{n}</div><div className="mt-3 text-sm text-slate-600">{l}</div></div>)}
          </div>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[[Leaf,"Agroforesterie","Promouvoir des pratiques agricoles plus durables."],[Users,"Producteurs","Former, accompagner et structurer les communautés de producteurs."],[Sprout,"Environnement","Contribuer à la protection des ressources naturelles."]].map(([Icon,t,d])=>{const I=Icon as any; return <div key={t as string} className="rounded-3xl border border-[#16382D]/10 p-7"><I className="h-7 w-7 text-[#B88A45]"/><h3 className="mt-5 font-bold">{t as string}</h3><p className="mt-2 text-sm leading-6 text-slate-600">{d as string}</p></div>})}
          </div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          <div><div className="eyebrow text-[#B88A45]">Nos zones d'intervention</div><h2 className="display mt-4 text-4xl sm:text-5xl">Au cœur des territoires agricoles ivoiriens.</h2><p className="mt-6 max-w-xl text-lg leading-8 text-slate-600">Notre réseau s'étend notamment dans les départements de Duékoué, Guiglo, Bloléquin et Toulepleu. Le siège est situé à Doba, dans le département de San-Pédro.</p></div>
          <div className="grid min-h-[320px] place-items-center rounded-[2rem] bg-[#16382D] p-10 text-center text-white"><MapPin className="h-12 w-12 text-[#D8B778]"/><div className="display mt-5 text-3xl">Duékoué · Guiglo<br/>Bloléquin · Toulepleu</div><div className="mt-5 text-sm text-white/60">Doba — San-Pédro, Côte d'Ivoire</div></div>
        </div>
      </section>

      <section id="contact" className="bg-[#102A22] py-24 text-white">
        <div className="container-x grid gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><div className="eyebrow text-[#D8B778]">Pour les acheteurs</div><h2 className="display mt-4 text-4xl sm:text-5xl">Vous recherchez du cacao ou du café de Côte d'Ivoire ?</h2><p className="mt-6 text-lg leading-8 text-white/65">Importateur, industriel, négociant ou distributeur : échangeons sur votre besoin, vos volumes et votre destination.</p><div className="mt-8 space-y-3 text-sm text-white/70"><div className="flex gap-3"><Mail className="h-5 w-5 text-[#D8B778]"/> info@mcommodities.ci</div><div className="flex gap-3"><MapPin className="h-5 w-5 text-[#D8B778]"/> Doba — San-Pédro, Côte d'Ivoire</div></div></div>
          <form onSubmit={(e)=>{e.preventDefault();setSent(true)}} className="rounded-3xl bg-white p-7 text-[#18332A] sm:p-9">
            {sent ? <div className="flex min-h-[420px] flex-col items-center justify-center text-center"><div className="grid h-16 w-16 place-items-center rounded-full bg-[#16382D] text-white"><Check/></div><h3 className="display mt-6 text-3xl">Demande reçue</h3><p className="mt-3 max-w-md text-slate-600">Merci. Connectez ce formulaire à votre service email/CRM avant la mise en production pour recevoir réellement les demandes.</p></div> :
            <><div className="grid gap-5 sm:grid-cols-2">
              <label className="text-sm font-bold">Nom / Société<input required className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#B88A45]" placeholder="Votre nom ou société"/></label>
              <label className="text-sm font-bold">Email professionnel<input required type="email" className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none focus:border-[#B88A45]" placeholder="nom@entreprise.com"/></label>
              <label className="text-sm font-bold">Produit<select className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal"><option>Cacao</option><option>Café vert</option><option>Café moulu</option><option>Anacarde</option></select></label>
              <label className="text-sm font-bold">Volume souhaité<input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" placeholder="Ex. 500 tonnes"/></label>
              <label className="text-sm font-bold sm:col-span-2">Destination<input className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" placeholder="Pays / port de destination"/></label>
              <label className="text-sm font-bold sm:col-span-2">Votre besoin<textarea rows={4} className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 font-normal" placeholder="Spécifications, certification, Incoterm, calendrier..."/></label>
            </div><button className="mt-6 w-full rounded-xl bg-[#B88A45] px-6 py-4 font-bold text-white hover:bg-[#a77a39]">Envoyer ma demande <ArrowRight className="ml-2 inline h-4 w-4"/></button></>}
          </form>
        </div>
      </section>

      <footer className="bg-[#0C211B] py-12 text-white">
        <div className="container-x grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2"><div className="font-bold tracking-[.18em]">MOSES COMMODITIES</div><p className="mt-4 max-w-sm text-sm leading-6 text-white/50">Valoriser nos terres, nourrir le monde.</p></div>
          <div><div className="font-bold">Navigation</div><div className="mt-4 space-y-2 text-sm text-white/55"><a className="block hover:text-white" href="#about">À propos</a><a className="block hover:text-white" href="#products">Produits</a><a className="block hover:text-white" href="#quality">Qualité</a><a className="block hover:text-white" href="#impact">Durabilité</a></div></div>
          <div><div className="font-bold">Contact</div><div className="mt-4 text-sm leading-7 text-white/55">Doba — San-Pédro<br/>Côte d'Ivoire<br/>info@mcommodities.ci</div></div>
        </div>
        <div className="container-x mt-10 border-t border-white/10 pt-6 text-xs text-white/35">© {new Date().getFullYear()} Moses Commodities. Tous droits réservés.</div>
      </footer>
    </main>
  );
}