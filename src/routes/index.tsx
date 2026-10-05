import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import beautyImage from "@/assets/carolina-beauty.jpg";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Carolina Marques | Estética avançada em Curitiba" },
    { name: "description", content: "Conheça a Dra. Carolina Marques: estética personalizada, procedimentos faciais e corporais com ciência e acolhimento em Curitiba. Agende sua avaliação." },
    { property: "og:title", content: "Carolina Marques — Beleza com cuidado e propósito" },
    { property: "og:description", content: "Estética avançada e atendimento individualizado em Curitiba. Seu cuidado começa quando você escolhe olhar para si." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});

const whatsapp = "https://wa.me/5541996923397";
const services = [
  ["Limpeza de Pele", "Cuidado e limpeza profunda para uma pele mais saudável."],
  ["Design de Sobrancelhas", "Modelagem personalizada de acordo com o seu rosto."],
  ["Tratamentos Corporais", "Relaxamento e cuidado para o corpo."],
  ["Procedimentos Faciais", "Tratamentos voltados para o cuidado da pele."],
];
const differences = [
  ["Atendimento personalizado", "Cada atendimento é pensado de acordo com as necessidades de cada cliente."],
  ["Ambiente acolhedor", "Um espaço preparado para proporcionar conforto e tranquilidade."],
  ["Qualidade", "Cuidado e atenção em cada procedimento realizado."],
  ["Experiência", "Atendimento profissional e dedicado."],
];

function Index() {
  return (
    <div className="cm-page">
      <header className="cm-header">
        <div className="cm-header-inner">
          <a href="#inicio" className="cm-wordmark">Carolina Marques</a>
          <Button asChild variant="editorial"><a href="#contato">Agendar</a></Button>
        </div>
      </header>
      <main>
        <section id="inicio" className="cm-hero" aria-label="Carolina Marques, estética avançada">
          <div className="cm-hero-photo"><img src={beautyImage} alt="Fotografia editorial de pele natural sobre tecido em tom de vinho" width={1088} height={1920} fetchPriority="high" /></div>
          <div className="cm-hero-shade" />
          <div className="cm-hero-inner">
            <span className="cm-eyebrow cm-hero-label">Estética avançada</span>
            <h1>Carolina<br />Marques</h1>
            <p className="cm-hero-copy">Seu cuidado começa quando você escolhe olhar para si.</p>
            <Button asChild variant="cinematic" className="cm-hero-cta"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a></Button>
          </div>
        </section>
        <section id="sobre" className="cm-section cm-about">
          <div className="cm-container">
            <span className="cm-eyebrow">(a) Sobre</span>
            <h2>Enfermeira e especialista em estética avançada</h2>
            <div className="cm-prose">
              <p>Eu sou a Dra. Carolina Marques, tenho 30 anos e sou enfermeira por amor e por escolha. Sou movida pelo propósito de cuidar, acolher e fazer a diferença na vida das pessoas.</p>
              <p>Acredito que o cuidado vai muito além da técnica: envolve empatia, escuta, dedicação e busca constante por conhecimento. Minha missão é unir ciência, estética e humanização para promover saúde, bem-estar e autoestima, sempre com segurança e excelência.</p>
              <p>Sou bacharel em Enfermagem pela Faculdade FAPAR/UNIP, pós-graduada em Cardiologia e Hemodinâmica pela Faculdade Faveni e pós-graduada em Estética Avançada e Protocolos de Injetáveis pela Universidade Dom Bosco. Também possuo Residência Clínica em Harmonização Facial e Corporal pela Instituição Regional.</p>
              <p>Na Enfermagem, atuo nas áreas de Hemodinâmica, Cardiologia e Oncologia, oferecendo uma assistência humanizada e segura, com compromisso com a vida e atenção a cada detalhe.</p>
              <p>Na Estética, atuo com protocolos e procedimentos injetáveis minimamente invasivos, buscando realçar a beleza de forma natural e segura, sempre aliando tecnologia, ciência e personalização.</p>
            </div>
            <ul className="cm-values" aria-label="Meus valores">
              <li>Ética</li><li>Empatia</li><li>Excelência</li><li>Atualização constante</li><li>Propósito de transformar vidas</li>
            </ul>
            <p className="cm-essence">Cuidar e transformar: essa é a minha essência.</p>
          </div>
        </section>
        <section id="servicos" className="cm-section cm-wine-section">
          <div className="cm-container">
            <span className="cm-eyebrow">(b) Serviços</span>
            <h2>Cuidado para pele,<br className="cm-desktop-break" /> corpo e rosto</h2>
            <p className="cm-section-intro">Protocolos personalizados de estética para valorizar sua beleza natural, com cuidado, segurança e atendimento individualizado.</p>
            <div className="cm-list">
              {services.map(([title, description], index) => <article className="cm-list-item" key={title}>
                <span className="cm-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>)}
            </div>
          </div>
        </section>
        <section id="diferenciais" className="cm-section cm-differences">
          <div className="cm-container">
            <span className="cm-eyebrow">(c) Diferenciais</span>
            <h2>O que faz a diferença em cada encontro</h2>
            <div className="cm-list">
              {differences.map(([title, description], index) => <article className="cm-list-item" key={title}>
                <span className="cm-number">0{index + 1}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </article>)}
            </div>
          </div>
        </section>
        <section id="instagram" className="cm-section cm-instagram">
          <div className="cm-container">
            <span className="cm-eyebrow">(d) Instagram</span>
            <h2>Acompanhe nos bastidores</h2>
            <p className="cm-section-intro">Dicas de cuidado, novidades e o dia a dia do atendimento — direto no meu Instagram.</p>
            <div className="cm-ig-frame">
              <iframe
                src="https://www.instagram.com/enf_carolina_marques/embed/"
                title="Feed do Instagram de Carolina Marques"
                loading="lazy"
                scrolling="no"
              />
            </div>
            <Button asChild variant="editorial" className="cm-ig-cta"><a href="https://www.instagram.com/enf_carolina_marques/" target="_blank" rel="noopener noreferrer">Seguir @enf_carolina_marques</a></Button>
          </div>
        </section>
      </main>
      <footer id="contato" className="cm-section cm-wine-section cm-contact">
        <div className="cm-container">
          <span className="cm-eyebrow">(e) Contato</span>
          <h2>Vamos começar seu cuidado</h2>
          <p className="cm-section-intro">Entre em contato e agende seu horário.</p>
          <Button asChild variant="cinematicLight" className="cm-contact-cta"><a href={whatsapp} target="_blank" rel="noopener noreferrer">Agendar pelo WhatsApp</a></Button>
          <dl className="cm-contact-details">
            <div><dt>Endereço</dt><dd><a href="https://www.google.com/maps/search/?api=1&query=Rua+Cear%C3%A1+299+Curitiba+Paran%C3%A1" target="_blank" rel="noopener noreferrer">Rua Ceará, 299 — Curitiba, PR</a></dd></div>
            <div><dt>Telefone</dt><dd><a href={whatsapp} target="_blank" rel="noopener noreferrer">(41) 99692-3397</a></dd></div>
            <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/enf_carolina_marques/" target="_blank" rel="noopener noreferrer">@enf_carolina_marques</a></dd></div>
          </dl>
          <p className="cm-footer-mark">Carolina Marques — Estética avançada</p>
        </div>
      </footer>
      <Button asChild variant="cinematic" className="cm-fab" aria-label="Agendar pelo WhatsApp">
        <a href={whatsapp} target="_blank" rel="noopener noreferrer">
          <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
        </a>
      </Button>
    </div>
  );
}
