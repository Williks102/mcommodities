import { ArrowLeft, ArrowRight, Check } from "lucide-react";

const catalogue = {
  cacao: { name: "Cacao", label: "Fèves sélectionnées", image: "https://images.unsplash.com/photo-1606312619070-d48b4c652a52?auto=format&fit=crop&w=1800&q=90", quote: "Une matière profonde, née de terroirs vivants.", details: [["Origine", "Côte d’Ivoire"], ["Préparation", "Fermentation & séchage contrôlés"], ["Disponibilité", "Selon campagne et lots"]] },
  "cafe-vert": { name: "Café vert", label: "Robusta de Côte d’Ivoire", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1800&q=90", quote: "Le caractère franc du robusta, travaillé avec précision.", details: [["Origine", "Côte d’Ivoire"], ["Variété", "Robusta"], ["Préparation", "Voie sèche"]] },
  anacarde: { name: "Anacarde", label: "Noix de cajou brutes", image: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=1800&q=90", quote: "Une graine généreuse, issue de terroirs vivants.", details: [["Origine", "Côte d’Ivoire"], ["Produit", "Noix de cajou brutes"], ["Disponibilité", "Selon campagne et lots"]] },
} as const;

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = catalogue[slug as keyof typeof catalogue] || catalogue.cacao;
  return <main className="product-page">
    <header className="product-header"><a className="brand" href="/"><img src="/logo-moses.svg" alt=""/><span><b>MOSES</b><i>COMMODITIES</i></span></a><a className="back" href="/#produits"><ArrowLeft size={16}/> Toutes les collections</a></header>
    <section className="product-hero"><div className="product-main-image" style={{ backgroundImage: `url(${product.image})` }}/><div className="product-title"><p className="eyebrow">Collection Moses · {product.label}</p><h1>{product.name}</h1><p>{product.quote}</p><a href="#demande" className="button dark">Demander une offre <ArrowRight size={17}/></a></div></section>
    <section className="product-detail"><div><p className="eyebrow">L’origine comme signature</p><h2>Une sélection<br/><em>sans détour.</em></h2></div><div><p>Nos équipes accompagnent l’origine de chaque lot, de la collecte jusqu’à la préparation. Une attention concrète aux gestes, à la régularité et aux exigences de nos partenaires.</p><div className="product-specs">{product.details.map(([k,v])=><div key={k}><small>{k}</small><b>{v}</b></div>)}</div></div></section>
    <section className="product-assurance"><p className="eyebrow">Notre engagement</p><h2>De la terre à votre<br/><em>chaîne d’approvisionnement.</em></h2><div>{["Sourcing direct auprès de notre réseau", "Traçabilité des producteurs et des lots", "Contrôle qualité adapté à vos besoins"].map(item=><p key={item}><Check size={15}/>{item}</p>)}</div></section>
    <section id="demande" className="product-cta"><p className="eyebrow">Parlons de votre besoin</p><h2>Le prochain lot<br/><em>commence ici.</em></h2><a className="button light" href="mailto:info@mcommodities.ci">info@mcommodities.ci <ArrowRight size={17}/></a></section>
    <footer><a className="brand" href="/"><img src="/logo-moses.svg" alt=""/><span><b>MOSES</b><i>COMMODITIES</i></span></a><p>© {new Date().getFullYear()} Moses Commodities</p></footer>
  </main>;
}
