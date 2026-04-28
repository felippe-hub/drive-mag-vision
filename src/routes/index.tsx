import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/proposal/Navbar";
import { SectionLabel } from "@/components/proposal/SectionLabel";
import { Reveal } from "@/components/proposal/Reveal";
import { Logo } from "@/components/proposal/Logo";
import { Check, ArrowRight, Zap } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const cases = [
  {
    badge: "Outbound + Pipeline",
    name: "Transking",
    desc: "Operação de prospecção outbound estruturada do zero para geração consistente de pipeline comercial. Cadências multicanal, ICP mapeado e integração ao CRM.",
    tags: ["Prospecção Outbound", "Pipeline", "Cadências"],
    link: "transking.com.br",
  },
  {
    badge: "IA + Site + SEO",
    name: "Alura",
    desc: "Desenvolvimento de software e assistente de IA para geração de conteúdo em escala. Produção acelerada sem perda de qualidade editorial.",
    tags: ["Software", "Assistente de IA", "Conteúdo"],
    link: "alura.com.br",
  },
  {
    badge: "Site + Blog + SEO",
    name: "Brasil BESS",
    desc: "Site institucional e blog para posicionar a marca como referência em um mercado técnico — atraindo leads qualificados via conteúdo orgânico.",
    tags: ["Site", "Blog", "Conteúdo"],
    link: "brasilbess.com.br",
  },
  {
    badge: "Site + Estratégia",
    name: "Casa Flora",
    desc: "Transformação digital de marca premium com site institucional e direção estratégica de posicionamento para um público exigente.",
    tags: ["Site", "Design", "Estratégia"],
    link: "casaflora-brand.com.br",
  },
  {
    badge: "Site + SEO",
    name: "Lattin",
    desc: "Site institucional e estrutura de SEO para captação orgânica em mercado de alta competitividade — foco em conversão e autoridade de domínio.",
    tags: ["Site", "SEO", "Conteúdo"],
    link: "grupo-lattin.vercel.app",
  },
];

const evpPillars = [
  { icon: "💰", title: "Ganho financeiro", desc: "Renda escalável e recorrente — quanto mais carteira, mais renda passiva anual. Argumento central para perfis orientados a resultado." },
  { icon: "🕐", title: "Liberdade", desc: "Autonomia de rotina, tempo e território. Trabalhe de onde quiser, com quem quiser, no seu ritmo. Poderoso para transições de carreira." },
  { icon: "🚀", title: "Crescimento acelerado", desc: "A MAG Universidade e o Potencialize oferecem capacitação estruturada desde o primeiro dia. Evolução rápida com suporte real." },
  { icon: "🤝", title: "Propósito", desc: "Proteger famílias é uma missão, não apenas uma venda. Argumento de entrada para perfis com interesse em cuidado e impacto social." },
  { icon: "🏗️", title: "Carreira sólida", desc: "Construção de patrimônio profissional com carteira própria, marca pessoal e independência de longo prazo." },
];

const phase1 = [
  { icon: "🏦", lp: "LP 1", title: "Ex-bancário em transição de carreira", motivacao: "Liberdade + Ganho financeiro", dor: "Teto de carreira, pressão crescente, digitalização bancária", gatilho: "Você passou anos aconselhando sobre finanças. A comissão ficou para o banco. Agora fica para você.", evp: "Ganho financeiro · Autonomia", canais: "LinkedIn · Seeb outbound · Meta Ads" },
  { icon: "🏠", lp: "LP 2", title: "Corretor de imóveis ativo (CRECI)", motivacao: "Ganho financeiro + recorrência", dor: "Renda sazonal, comissão única sem recorrência", gatilho: "Você fecha uma venda de R$400k e a comissão some em meses. Com seguro de vida, cada cliente vira receita recorrente anual.", evp: "Ganho financeiro · Crescimento", canais: "CRECI · LinkedIn · portais imobiliários" },
  { icon: "🔄", lp: "LP 3", title: "Corretor de outros ramos (auto, saúde)", motivacao: "Crescimento + portfólio", dor: "Produto sem recorrência, cliente que já tem mas não atende vida", gatilho: "Você já é corretor habilitado. Seus clientes precisam de vida também — você está deixando essa comissão para outro.", evp: "Crescimento · Carreira sólida", canais: "Sincor · LinkedIn outbound direto" },
];

const phase2 = [
  { icon: "🎓", title: "Recém-formado em ADM/Economia/Contábeis", motivacao: "Carreira sólida + crescimento acelerado", gatilho: "Comece sua carreira com autonomia e propósito. A MAG forma você.", canais: "LinkedIn · Comunidades acadêmicas" },
  { icon: "👩", title: "Mãe retomando carreira", motivacao: "Liberdade + propósito", gatilho: "Trabalhe nos seus horários. Construa uma renda que cresce ano a ano.", canais: "Meta Ads · grupos WhatsApp" },
  { icon: "💼", title: "Vendedor B2C em busca de recorrência", motivacao: "Ganho financeiro + escala", gatilho: "Você já sabe vender. Só está no produto errado.", canais: "Meta Ads · LinkedIn" },
  { icon: "📊", title: "Contador com escritório próprio", motivacao: "Propósito + carreira sólida", gatilho: "Você já protege o patrimônio dos seus clientes. Proteja também o que o sustenta.", canais: "CRC · LinkedIn" },
];

const territorios = [
  { num: "01", title: "Carreiras não óbvias", desc: "Para quem não sabia que isso existia — e quando descobre, não consegue acreditar que não entrou antes. Linguagem de descoberta, surpresa e clareza.", clusters: "Bancário · Formandos · Vendedores B2C" },
  { num: "02", title: "Ganhar dinheiro com propósito", desc: "Para quem quer que o trabalho tenha significado além do salário. A proteção de famílias como missão — e a renda como consequência de fazer bem feito.", clusters: "Saúde · Líderes comunitários · Professores" },
  { num: "03", title: "Alta performance comercial", desc: "Para quem já tem perfil de vendas e quer um produto à altura da sua ambição. Foco em resultados, escala e autonomia para crescer rápido.", clusters: "Vendedor B2C · Corretor CRECI · Ex-bancário sênior" },
  { num: "04", title: "Autonomia profissional", desc: "Para quem não aguenta mais horário fixo, chefe, teto salarial. A carreira MAG como o projeto de vida que faltava. Liberdade com suporte real.", clusters: "Bancário em transição · Mãe retomando · Freelancers" },
  { num: "05", title: "Evolução rápida", desc: "Para quem quer crescer agora, não esperar 5 anos por uma promoção. MAG Universidade, Potencialize e mentores desde o primeiro dia.", clusters: "Recém-formados · Jovens em início de carreira" },
];

function Index() {
  return (
    <div id="top" className="min-h-screen" style={{ background: "#0A0A0A", color: "white" }}>
      <Navbar />

      {/* HERO */}
      <section className="pt-36 pb-24 px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="sd-tag mb-6">Proposta Estratégica · MAG Seguros · 2025</span>
            <h1 className="font-bold tracking-tight text-white text-[40px] md:text-[52px] leading-[1.08] mt-6">
              Transformar atração de corretores em um sistema escalável.
            </h1>
            <p className="mt-6 text-[var(--sd-text-secondary)] text-[16px] leading-[1.7]">
              A SalesDrive une growth, tecnologia e execução para construir uma máquina de captação de corretores MAG — segmentada, previsível e orientada à conversão.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="#proposta" className="sd-btn-primary">Ver a proposta <ArrowRight size={16} /></a>
              <a href="#quem-somos" className="sd-btn-outline">Conhecer a SalesDrive</a>
            </div>
          </Reveal>
        </div>
        <div className="mx-auto max-w-6xl mt-24 sd-divider" />
      </section>

      {/* QUEM SOMOS */}
      <section id="quem-somos" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Quem somos</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight max-w-3xl">
              Growth e tecnologia para operações que precisam crescer com inteligência.
            </h2>
            <p className="mt-6 text-[var(--sd-text-secondary)] max-w-3xl leading-[1.7]">
              A Sales Drive desenha e opera sistemas de aquisição, produtividade e pipeline para empresas B2B. Não entregamos peças soltas — construímos o sistema que conecta mercado, captação e operação comercial. Unimos estratégia, execução e tecnologia própria para transformar esforço em previsibilidade.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            {[
              { icon: "🎯", title: "IA-First", desc: "Abordagem orientada a inteligência artificial em todas as camadas — desde a geração de conteúdo até a priorização de leads." },
              { icon: "⚙️", title: "End-to-End", desc: "Não terceirizamos partes do sistema. Estratégia, execução e tecnologia sob um único guarda-chuva." },
              { icon: "🏭", title: "Tecnologia Própria", desc: "SDCMS: nosso software de CMS, SEO e conteúdo com IA integrado, desenvolvido para operações de crescimento." },
              { icon: "📊", title: "B2B Focus", desc: "Experiência construída em vendas complexas, ciclos longos e múltiplos decisores — onde pipeline previsível é crítico." },
            ].map((c) => (
              <Reveal key={c.title}>
                <div className="sd-card p-7 h-full">
                  <div className="text-2xl">{c.icon}</div>
                  <h3 className="mt-4 text-[18px] font-semibold">{c.title}</h3>
                  <p className="mt-2 text-[14px] text-[var(--sd-text-secondary)] leading-[1.7]">{c.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CASES */}
      <section id="cases" className="py-24 px-6" style={{ background: "#111111" }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Cases</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight max-w-3xl">
              Impacto real em empresas que precisavam crescer com sistema.
            </h2>
            <p className="mt-4 text-[var(--sd-text-muted)] max-w-3xl leading-[1.7]">
              Selecionamos os projetos mais aderentes ao desafio da MAG em captação, conversão e presença digital segmentada.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-5 mt-12">
            {cases.map((c) => (
              <Reveal key={c.name}>
                <div className="sd-card-dark p-6 h-full flex flex-col">
                  <span className="sd-tag self-start mb-4">{c.badge}</span>
                  <h3 className="text-[20px] font-semibold">{c.name}</h3>
                  <p className="mt-3 text-[14px] text-[var(--sd-text-secondary)] leading-[1.7] flex-1">{c.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {c.tags.map((t) => <span key={t} className="sd-tag-neutral">{t}</span>)}
                  </div>
                  <a href={`https://${c.link}`} target="_blank" rel="noreferrer" className="mt-5 text-[13px] text-[var(--sd-orange)] hover:underline">
                    {c.link} ↗
                  </a>
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-8 text-center text-[13px] italic text-[var(--sd-text-muted)]">
            Outros projetos disponíveis mediante solicitação.
          </p>
        </div>
      </section>

      {/* DESAFIO */}
      <section id="proposta" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>O desafio</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight max-w-4xl">
              A atração de corretores precisa evoluir de campanha para sistema.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-5 mt-12">
            <Reveal>
              <div className="sd-card p-7 h-full" style={{ borderLeft: "3px solid #333" }}>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-text-muted)] font-medium">Hoje</div>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--sd-text-secondary)]">
                  Uma mensagem única para todos os perfis. Campanhas de performance sem segmentação específica. Pipeline imprevisível e dependente de iniciativas pontuais dos gerentes comerciais.
                </p>
              </div>
            </Reveal>
            <Reveal>
              <div className="sd-card p-7 h-full" style={{ borderLeft: "3px solid var(--sd-orange)" }}>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-orange)] font-medium">Com o sistema SalesDrive</div>
                <p className="mt-4 text-[15px] leading-[1.7] text-[var(--sd-text-secondary)]">
                  Uma entrada personalizada para cada cluster de corretor, em cada praça. LPs dedicadas, SEO por nicho, parcerias institucionais e operação conectada ao funil MAG — tudo integrado e mensurável.
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="sd-card p-8 mt-6 text-center">
              <p className="text-[16px] md:text-[18px] leading-[1.7] text-[var(--sd-text-primary)] max-w-3xl mx-auto">
                A premissa: cada público tem motivações distintas, dores específicas, gatilhos próprios e precisa de um discurso dedicado. É assim que conversão escala.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EVP */}
      <section className="py-24 px-6" style={{ background: "#111111" }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Proposta de valor</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight max-w-4xl">
              Mais do que captação: um EVP que transforma a percepção da carreira MAG.
            </h2>
          </Reveal>

          <Reveal>
            <div className="sd-card-dark p-8 md:p-10 mt-10" style={{ borderColor: "var(--sd-orange-border)" }}>
              <p className="text-[18px] md:text-[20px] leading-[1.6] text-white">
                A carreira de corretor MAG precisa ser vista como uma das melhores oportunidades do mercado para quem quer crescer com propósito, autonomia e renda escalável. Não estamos apenas atraindo leads — estamos construindo um ativo estratégico de posicionamento de longo prazo.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 mt-10">
            {evpPillars.map((p) => (
              <Reveal key={p.title}>
                <div className="sd-card-dark p-6 h-full">
                  <div className="text-2xl">{p.icon}</div>
                  <h3 className="mt-4 text-[16px] font-semibold">{p.title}</h3>
                  <p className="mt-2 text-[13px] text-[var(--sd-text-secondary)] leading-[1.7]">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CLUSTERS */}
      <section id="clusters" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Segmentação</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight max-w-4xl">
              Uma LP para cada perfil. Um discurso para cada cluster.
            </h2>
            <p className="mt-4 text-[var(--sd-text-muted)] max-w-3xl">
              O critério de priorização: tamanho da rede de relacionamento × perfil comercial × aderência ao EVP MAG.
            </p>
          </Reveal>

          <div className="mt-12">
            <div className="sd-label">Fase 1 · Prioridade imediata</div>
            <div className="sd-label-line" />
          </div>

          <div className="grid md:grid-cols-3 gap-5 mt-8">
            {phase1.map((c) => (
              <Reveal key={c.lp}>
                <div className="sd-card p-7 h-full" style={{ borderLeft: "2px solid var(--sd-orange)" }}>
                  <div className="flex items-center justify-between">
                    <div className="text-3xl">{c.icon}</div>
                    <span className="sd-tag">{c.lp}</span>
                  </div>
                  <h3 className="mt-5 text-[18px] font-semibold leading-snug">{c.title}</h3>
                  <div className="mt-5 space-y-3 text-[13px]">
                    <Row label="Motivação" value={c.motivacao} />
                    <Row label="Dor" value={c.dor} />
                  </div>
                  <div className="mt-5 p-4 rounded-md" style={{ background: "#0A0A0A", border: "1px solid #262626" }}>
                    <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-orange)] font-medium mb-2">Gatilho</div>
                    <p className="text-[13px] italic text-white leading-[1.6]">"{c.gatilho}"</p>
                  </div>
                  <div className="mt-5 space-y-3 text-[13px]">
                    <Row label="EVP" value={c.evp} />
                    <Row label="Canais" value={c.canais} />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16">
            <div className="sd-label sd-label-muted">Fase 2 · 30–60 dias</div>
            <div className="sd-label-line sd-label-line-muted" />
          </div>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            {phase2.map((c) => (
              <Reveal key={c.title}>
                <div className="sd-card p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="text-2xl">{c.icon}</div>
                    <div className="flex-1">
                      <h3 className="text-[16px] font-semibold">{c.title}</h3>
                      <div className="mt-3 space-y-2 text-[13px]">
                        <Row label="Motivação" value={c.motivacao} />
                      </div>
                      <p className="mt-3 text-[13px] italic text-white leading-[1.6]">"{c.gatilho}"</p>
                      <div className="mt-3 text-[12px] text-[var(--sd-text-muted)]">
                        <span className="text-[var(--sd-text-muted)]">Canais: </span>{c.canais}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TERRITÓRIOS */}
      <section className="py-24 px-6" style={{ background: "#111111" }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Territórios</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight">A narrativa que ancora cada entrada.</h2>
            <p className="mt-4 text-[var(--sd-text-muted)] max-w-3xl">
              Cada território é uma direção de linguagem e argumento que pode ser ativada por cluster, praça e canal.
            </p>
          </Reveal>

          <div className="mt-12 space-y-4">
            {territorios.map((t) => (
              <Reveal key={t.num}>
                <div className="sd-card-dark p-7">
                  <div className="flex flex-wrap items-start gap-6">
                    <span className="sd-tag">Território {t.num}</span>
                    <div className="flex-1 min-w-[260px]">
                      <h3 className="text-[20px] font-semibold">{t.title}</h3>
                      <p className="mt-2 text-[14px] text-[var(--sd-text-secondary)] leading-[1.7]">{t.desc}</p>
                      <div className="mt-3 text-[12px] text-[var(--sd-text-muted)]">
                        <span>Clusters: </span>{t.clusters}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CANAIS */}
      <section id="canais" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Execução</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight">Os canais que ativamos para cada cluster.</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <Reveal>
              <div>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-text-muted)] font-medium mb-3">Digital</div>
                <h3 className="text-[20px] font-semibold mb-6">LP Factory · Ativos digitais</h3>
                <div className="space-y-4">
                  <ChannelItem arrow title="Landing pages por cluster (SLA 72h)" desc="Uma LP dedicada por persona — copy, hero, prova social e CTA construídos para aquele perfil. Operacional em 72h após briefing aprovado. Responsiva, integrada ao funil MAG." tag="Core da entrega" />
                  <ChannelItem arrow title="SEO + Blog por nicho" desc="Cada LP tem 4–6 artigos otimizados para os termos que aquela persona pesquisa. Tráfego orgânico de longo prazo em paralelo ao pago." tag="SDCMS" />
                  <ChannelItem arrow title="Conteúdo e narrativa por território criativo" desc="Criação de materiais, posts e formatos baseados nos territórios do EVP — cada cluster com seu tom de voz e argumento central." tag="IA-First" />
                  <ChannelItem arrow title="Suporte a tráfego pago (se necessário)" desc="Co-operação ou operação independente de campanhas nos clusters piloto, em paralelo ao time de performance MAG." tag="Opcional" />
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="md:border-l md:border-[#262626] md:pl-8">
                <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-text-muted)] font-medium mb-3">Institucional</div>
                <h3 className="text-[20px] font-semibold mb-6">Parcerias Institucionais · Outbound</h3>
                <div className="space-y-4">
                  <ChannelItem arrow title="Replicar modelo IES (referência: Ânima)" desc="Estruturar e executar parcerias com novas IES — UNOPAR, Uninove, Unip, Unisociesc, faculdades regionais. Contrato por instituição + LP exclusiva co-branded." tag="Parceria estratégica" />
                  <ChannelItem arrow title="Associações por praça (Seeb, CRECI, CRC)" desc="Prospecção e negociação de acesso às bases do Seeb e CRECI regionais. Palestra + LP dedicada com marca do parceiro. Leads com perfil já qualificado." tag="Outbound institucional" />
                  <ChannelItem arrow title="RH e outplacement" desc="Consultorias de outplacement atendem demissões de bancos e empresas — perfil comercial e motivação real para transição. Remuneração por candidato qualificado no programa MAG, não por lead frio." tag="Qualificação prévia" />
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="sd-card p-8 mt-12 flex flex-col md:flex-row items-start md:items-center gap-6" style={{ borderColor: "var(--sd-orange-border)" }}>
              <div className="flex h-12 w-12 items-center justify-center rounded-lg" style={{ background: "var(--sd-orange-dim)", color: "var(--sd-orange)" }}>
                <Zap size={22} />
              </div>
              <div>
                <div className="text-[22px] font-semibold">LP operacional em 72h</div>
                <p className="mt-1 text-[14px] text-[var(--sd-text-secondary)]">Do briefing aprovado à página no ar, integrada e com pixel instalado. Velocidade que equipes internas não conseguem entregar em paralelo a outras prioridades.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SISTEMA */}
      <section className="py-24 px-6" style={{ background: "#111111" }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Sistema</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight">Mapear, criar, ativar e otimizar — em ciclo contínuo.</h2>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-5 mt-12 relative">
            {[
              { t: "Mapear", d: "Cluster · ICP · Território criativo · Argumento" },
              { t: "Criar", d: "LP · Blog SEO · Copy · Criativos" },
              { t: "Ativar", d: "Tráfego pago · Outbound · Parcerias IES" },
              { t: "Otimizar", d: "A/B · CRO · Novos clusters · Relatório mensal" },
            ].map((s, i, arr) => (
              <Reveal key={s.t}>
                <div className="sd-card-dark p-6 h-full relative">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-orange)] font-medium">Etapa {i+1}</div>
                  <div className="mt-2 text-[20px] font-semibold">{s.t}</div>
                  <p className="mt-2 text-[13px] text-[var(--sd-text-secondary)] leading-[1.7]">{s.d}</p>
                  {i < arr.length - 1 && (
                    <ArrowRight size={18} className="hidden md:block absolute -right-4 top-1/2 -translate-y-1/2 text-[var(--sd-orange)]" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 text-center text-[14px] text-[var(--sd-text-muted)] max-w-3xl mx-auto">
            Cada cluster passa por esse ciclo. Os que performam ganham mais investimento. Os que não performam são ajustados ou descartados. Sistema, não campanha.
          </p>
        </div>
      </section>

      {/* INVESTIMENTO */}
      <section id="investimento" className="py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Investimento</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight">Transparência total. Sem surpresas.</h2>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <Reveal>
              <div className="sd-card p-8 h-full" style={{ borderColor: "var(--sd-orange-border)" }}>
                <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-orange)] font-medium">Setup · Pagamento único</div>
                <div className="mt-4 text-[44px] font-bold leading-none" style={{ color: "var(--sd-orange)" }}>R$ 15.000</div>
                <div className="mt-3 text-[13px] text-[var(--sd-text-muted)]">Entregue em 30 dias · LPs no ar em 72h após kickoff</div>
                <div className="my-6 sd-divider" />
                <ul className="space-y-3">
                  {[
                    "2 primeiras LPs desenvolvidas (clusters bancário + CRECI), responsivas e integradas ao funil MAG",
                    "Mapeamento completo de clusters, ICPs e territórios criativos por persona",
                    "Integração técnica: pixel, tags de origem, CRM",
                    "Estrutura de SEO: pesquisa de keywords, arquitetura de blog, briefing dos 4 primeiros artigos",
                    "Abertura de 3 parceiros institucionais prioritários (Seeb SP, CRECI SP, 1 IES)",
                  ].map((l) => (
                    <li key={l} className="flex gap-3 text-[14px] text-[var(--sd-text-secondary)] leading-[1.6]">
                      <Check size={16} className="mt-1 shrink-0" style={{ color: "var(--sd-orange)" }} />
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="sd-card p-8 h-full">
                <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-text-muted)] font-medium">Retainer mensal</div>
                <div className="mt-4 text-[44px] font-bold leading-none text-white">R$ 8.000<span className="text-[16px] font-normal text-[var(--sd-text-muted)]">/mês</span></div>
                <div className="mt-3 text-[13px] text-[var(--sd-text-muted)]">Contrato mínimo de 3 meses</div>
                <div className="my-6 sd-divider" />
                <table className="w-full text-[14px]">
                  <tbody>
                    {[
                      ["Novas LPs por cluster", "1–2 por mês"],
                      ["Artigos SEO", "4 por mês"],
                      ["Parcerias ativas", "3–5 contatos/mês"],
                      ["Relatório de clusters", "1 por mês"],
                      ["Otimização CRO das LPs", "Contínuo"],
                      ["Suporte ao tráfego MAG", "Sob demanda"],
                    ].map(([k, v]) => (
                      <tr key={k} className="border-b border-[#262626] last:border-0">
                        <td className="py-3 text-[var(--sd-text-secondary)]">{k}</td>
                        <td className="py-3 text-right text-white">{v}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Reveal>
          </div>

          <Reveal>
            <div className="sd-card p-8 mt-6 text-center">
              <p className="text-[15px] md:text-[16px] leading-[1.7] text-[var(--sd-text-secondary)] max-w-3xl mx-auto">
                R$ 8.000/mês é o custo de um analista júnior sem operação. O que entregamos é uma máquina completa de microsegmentação — com LPs, SEO e parcerias institucionais que o time interno não teria capacidade de rodar em paralelo.
              </p>
            </div>
          </Reveal>

          <div className="my-10 sd-divider" />

          <div className="grid md:grid-cols-3 gap-5">
            {[
              ["Break-even", "1 corretor ativo / mês para cobrir o retainer"],
              ["Piloto", "90 dias · 2 clusters · resultado mensurável antes de escalar"],
              ["Mínimo de LPs no ar", "4 páginas ativas ao final do mês 1"],
            ].map(([k, v]) => (
              <Reveal key={k}>
                <div className="sd-card p-6 h-full">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-orange)] font-medium">{k}</div>
                  <p className="mt-3 text-[15px] text-white leading-[1.6]">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PILOTO */}
      <section className="py-24 px-6" style={{ background: "#111111" }}>
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionLabel>Por onde começar</SectionLabel>
            <h2 className="text-[28px] md:text-[34px] font-semibold leading-tight">Piloto de 90 dias. Sem compromisso de escala imediata.</h2>
          </Reveal>

          <Reveal>
            <div className="sd-card-dark p-8 md:p-10 mt-10" style={{ borderLeft: "3px solid var(--sd-orange)" }}>
              <p className="text-[16px] md:text-[17px] leading-[1.7] text-white">
                Começamos com 2 clusters — ex-bancário e corretor CRECI — as personas de maior volume e menor fricção de abordagem. Em 90 dias, você tem dados reais de conversão por cluster para decidir se e como escala para outras praças e perfis.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-4 gap-5 mt-10">
            {[
              ["Semana 1", "Kickoff + briefing dos 2 clusters aprovados"],
              ["Semana 1–2", "2 LPs no ar · Estrutura SEO ativa · Pixels instalados"],
              ["Mês 1–3", "Parcerias iniciadas · Conteúdo rodando · Tráfego ativo"],
              ["Dia 90", "Relatório completo com dados reais · Recomendação de escala"],
            ].map(([when, what], i) => (
              <Reveal key={when}>
                <div className="sd-card-dark p-6 h-full">
                  <div className="text-[11px] uppercase tracking-[0.1em] text-[var(--sd-orange)] font-medium">Marco {i+1}</div>
                  <div className="mt-2 text-[15px] font-semibold">{when}</div>
                  <p className="mt-2 text-[13px] text-[var(--sd-text-secondary)] leading-[1.7]">{what}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-3 mt-10">
            {[
              "2 LPs ativas em 72h do kickoff",
              "SEO estruturado para os 2 clusters",
              "3 parcerias institucionais abertas",
              "Dashboard de acompanhamento em tempo real",
            ].map((c) => (
              <div key={c} className="flex items-center gap-3 text-[14px] text-[var(--sd-text-secondary)]">
                <Check size={16} style={{ color: "var(--sd-orange)" }} />
                <span>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="py-28 px-6 relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto h-[2px] w-10 rounded mb-10" style={{ background: "var(--sd-orange)" }} />
          <Reveal>
            <h2 className="text-[30px] md:text-[40px] font-semibold leading-[1.15]">
              Pronto para construir o sistema de atração de corretores da MAG?
            </h2>
            <p className="mt-5 text-[var(--sd-text-muted)]">
              Conversa de 30 minutos para alinhar o escopo do piloto e dar o primeiro passo.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a href="mailto:contato@salesdrive.com.br?subject=Proposta MAG Seguros" className="sd-btn-primary">
                Solicitar proposta comercial
              </a>
              <a href="https://www.salesdrive.com.br/pt" target="_blank" rel="noreferrer" className="sd-btn-outline">
                Visitar salesdrive.com.br
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="px-6 py-10" style={{ borderTop: "1px solid #1A1A1A" }}>
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <Logo />
          <div className="text-[13px] text-[var(--sd-text-muted)]">
            <div>Sales Drive · Growth e tecnologia para pipeline previsível · salesdrive.com.br</div>
            <div className="mt-1 text-[12px]">Documento de proposta estratégica confidencial · MAG Seguros · 2025</div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-[0.1em] text-[var(--sd-text-muted)] font-medium">{label}</div>
      <div className="text-[13px] text-[var(--sd-text-secondary)] leading-[1.6] mt-1">{value}</div>
    </div>
  );
}

function ChannelItem({ title, desc, tag }: { title: string; desc: string; tag: string; arrow?: boolean }) {
  return (
    <div className="flex gap-3">
      <ArrowRight size={16} className="mt-1 shrink-0" style={{ color: "var(--sd-orange)" }} />
      <div>
        <div className="flex items-center gap-3 flex-wrap">
          <div className="text-[15px] font-semibold text-white">{title}</div>
          <span className="sd-tag-neutral">{tag}</span>
        </div>
        <p className="mt-1 text-[13px] text-[var(--sd-text-secondary)] leading-[1.7]">{desc}</p>
      </div>
    </div>
  );
}
