"use client";

import { useEffect, useState } from "react";
import { ArrowDownRight, ArrowRight, Check, ChevronDown, Menu, Play, X } from "lucide-react";

const products = [
  { slug: "cacao", name: "Cacao", origin: "Fèves de cacao brutes", image: "https://unsplash.com/photos/jF3zJ1EFuNM/download?force=true&w=1200", tint: "cacao" },
  { slug: "cafe-vert", name: "Café vert", origin: "Grains de café robusta", image: "https://unsplash.com/photos/TD4DBagg2wE/download?force=true&w=1200", tint: "coffee" },
  { slug: "anacarde", name: "Anacarde", origin: "Noix d’anacarde brutes", image: "https://unsplash.com/photos/nYuO4NBH0xc/download?force=true&w=1200", tint: "cacao" },
];

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`reveal ${className}`}>{children}</div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")), { threshold: .12 });
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  const close = () => setOpen(false);

  return <main>
    <header className="site-header">
      <div className="utility"><span>Origine Côte d’Ivoire</span><span className="utility-dot"/><span>Récolte · sourcing · export</span><a href="#contact">Espace partenaires <ArrowRight size={13}/></a></div>
      <div className="nav-shell">
        <a href="#top" className="brand" aria-label="Moses Commodities, accueil"><img src="/logo-moses.svg" alt=""/><span><b>MOSES</b><i>COMMODITIES</i></span></a>
        <nav className="desktop-nav"><a href="#maison">La coopérative</a><a href="#produits">Produits</a><a href="#quality">Qualité</a><a href="#impact">Durabilité</a></nav>
        <a className="nav-contact" href="#contact">Demandez un devis <ArrowDownRight size={16}/></a>
        <button className="mobile-toggle" aria-label="Ouvrir le menu" onClick={() => setOpen(!open)}>{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <nav className="mobile-nav"><a onClick={close} href="#maison">La coopérative</a><a onClick={close} href="#produits">Produits</a><a onClick={close} href="#quality">Qualité</a><a onClick={close} href="#impact">Durabilité</a><a onClick={close} href="#contact">Demandez un devis</a></nav>}
    </header>

    <section id="top" className="hero">
      <div className="hero-image"/>
      <div className="hero-shade"/>
      <div className="hero-copy"><div className="hero-kicker">Cacao, café & anacarde <span>•</span> Depuis la terre ivoirienne</div><h1>La nature,<br/><em>mise en œuvre.</em></h1><p>Une maison de sourcing qui révèle la richesse des matières brutes ivoiriennes — fèves, grains et graines — du geste des producteurs jusqu’aux marchés du monde.</p><div className="hero-actions"><a className="button light" href="#produits">Explorer la collection <ArrowRight size={17}/></a><a className="play-link" href="#maison"><span><Play fill="currentColor" size={12}/></span> Notre histoire</a></div></div>
      <div className="hero-side"><span>01 — 03</span><div/><span>Faire grandir<br/>l’exception</span></div><a href="#maison" className="scroll-cue">Défiler <ChevronDown size={16}/></a>
    </section>

    <section className="signature-stats"><div><b>3 427</b><span>producteurs membres</span></div><div><b>11 417 ha</b><span>superficie cultivée</span></div><div><b>10 421 T</b><span>cacao / an*</span></div><div><b>625 T</b><span>café / an*</span></div></section>

    <section id="maison" className="intro section-pad">
      <Reveal className="intro-number">01</Reveal><Reveal><p className="eyebrow">Qui sommes-nous ?</p><h2>Une coopérative ivoirienne,<br/><em>au cœur des filières.</em></h2></Reveal><Reveal className="intro-text"><p>Moses Commodities accompagne les producteurs dans la production, la collecte et la commercialisation de cacao, café et anacarde. Notre modèle repose sur une relation de proximité, une chaîne de valeur structurée et une exigence constante de qualité.</p><a className="text-link" href="#savoir-faire">Découvrir notre modèle <ArrowRight size={16}/></a></Reveal>
    </section>

    <section id="produits" className="collections section-pad">
      <Reveal className="section-heading"><p className="eyebrow">Nos collections</p><h2>Des matières qui ont<br/><em>une histoire à raconter.</em></h2><p>Chaque lot est une expression de son terroir, sélectionnée et préparée avec précision.</p></Reveal>
      <div className="product-grid">{products.map((product, index) => <Reveal key={product.slug} className={`product-card ${product.tint}`}><a href={`/produits/${product.slug}`}><div className="product-photo" style={{backgroundImage: `url(${product.image})`}}/><div className="product-meta"><span>0{index + 1}</span><small>{product.origin}</small></div><h3>{product.name}</h3><div className="discover">Découvrir <span><ArrowRight size={17}/></span></div></a></Reveal>)}</div>
      <Reveal><a href="#contact" className="button dark">Parler de votre besoin <ArrowRight size={17}/></a></Reveal>
    </section>

    <section id="savoir-faire" className="craft"><div className="craft-photo"/><div className="craft-content section-pad"><Reveal><p className="eyebrow">Du champ au quai</p><h2>La rigueur,<br/><em>à chaque geste.</em></h2><p>Notre présence sur le terrain nous permet de veiller à chaque étape : accompagnement, collecte, fermentation, séchage, contrôle et expédition.</p></Reveal><Reveal className="steps">{[["01","Cultiver","Accompagner les producteurs au rythme des saisons."],["02","Préparer","Révéler le potentiel de chaque récolte."],["03","Transmettre","Acheminer des lots prêts pour vos exigences."]].map(([n,t,d]) => <div key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></div>)}</Reveal></div></section>

    <section id="quality" className="quality section-pad"><Reveal><p className="eyebrow">Qualité & traçabilité</p><h2>La qualité commence<br/><em>à la plantation.</em></h2></Reveal><Reveal className="quality-copy"><p>Notre démarche repose sur une meilleure connaissance de l’origine des produits, des processus de collecte et de contrôle, ainsi que sur l’amélioration continue de nos pratiques.</p>{["Traçabilité des producteurs et des lots", "Contrôle qualité adapté aux produits bruts", "Conformité avec les exigences des marchés", "Accompagnement et amélioration continue"].map(item=><div className="quality-point" key={item}><Check size={15}/><span>{item}</span></div>)}<aside><b>Standards & certifications</b><span>Rainforest Alliance et Fairtrade selon les produits, les lots concernés et les exigences applicables.</span></aside></Reveal></section>

    <section id="impact" className="impact section-pad"><Reveal><p className="eyebrow">Un impact enraciné</p><h2>Prendre soin<br/><em>de ce qui nous relie.</em></h2></Reveal><div className="impact-grid"><Reveal className="impact-statement"><span>«</span><p>La qualité d’une matière commence par la qualité de vie de celles et ceux qui la font naître.</p></Reveal><Reveal className="impact-data"><div><b>3 427</b><span>producteurs engagés</span></div><div><b>11 417</b><span>hectares cultivés</span></div><div><b>4</b><span>zones d’intervention</span></div></Reveal></div><Reveal><a href="#contact" className="text-link pale">Notre engagement durable <ArrowRight size={16}/></a></Reveal></section>

    <section id="zones" className="zones section-pad"><Reveal><p className="eyebrow">Nos zones d’intervention</p><h2>Au cœur des territoires<br/><em>agricoles ivoiriens.</em></h2><p>Notre réseau s’étend notamment dans les départements de Duékoué, Guiglo, Bloléquin et Toulepleu. Notre siège est situé à Doba, dans le département de San-Pédro.</p></Reveal><Reveal className="zone-card"><span>04 zones</span><b>Duékoué · Guiglo<br/>Bloléquin · Toulepleu</b><small>Doba — San-Pédro, Côte d’Ivoire</small></Reveal></section>

    <section className="journal section-pad"><Reveal><p className="eyebrow">Carnet de récolte</p><h2>Le temps long est<br/><em>notre plus belle matière.</em></h2></Reveal><Reveal className="journal-art"><div className="journal-image"/><div><span>Terroirs de l’Ouest ivoirien</span><h3>De la parcelle à la coopérative, une chaîne de confiance.</h3><a className="text-link" href="#contact">Lire le récit <ArrowRight size={16}/></a></div></Reveal></section>

    <section id="contact" className="contact"><div className="contact-bg"/><div className="contact-copy"><p className="eyebrow">Échangeons</p><h2>Donner forme à<br/><em>votre prochain lot.</em></h2><p>Parlez-nous de vos volumes, de vos spécifications et de vos ambitions.</p></div><form onSubmit={(e) => e.preventDefault()}><label>Votre nom<input placeholder="Nom et société" required/></label><label>Votre e-mail<input type="email" placeholder="bonjour@entreprise.com" required/></label><label>Votre besoin<select defaultValue=""><option value="" disabled>Choisir une matière</option><option>Cacao</option><option>Café vert</option><option>Anacarde</option></select></label><button className="button dark">Envoyer la demande <ArrowRight size={17}/></button></form></section>
    <footer><a className="brand" href="#top"><img src="/logo-moses.svg" alt=""/><span><b>MOSES</b><i>COMMODITIES</i></span></a><p>© {new Date().getFullYear()} Moses Commodities — Côte d’Ivoire</p><div><a href="#maison">La maison</a><a href="#produits">Collections</a><a href="#contact">Contact</a></div></footer>
  </main>;
}
