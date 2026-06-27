import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Don Chambas — Reclutamiento WhatsApp-first para restaurantes en México",
  description:
    "Don Chambas conecta negocios de servicio con candidatos verificados, usando WhatsApp como canal principal. Candidatos rankeados, negocios verificados físicamente, comunicación automatizada.",
};

const CONTACT_EMAIL = "hola@donchambas.com.mx";

export default function LandingPage() {
  return (
    <>
      <Nav />

      {/* ── HERO ── */}
      <div className="hero">
        <div className="wrap">
          <span className="eyebrow">Piloto · CDMX · 2026</span>
          <h1>
            Reclutamiento{" "}
            <span className="accent">WhatsApp-first</span>{" "}
            para negocios de servicio en México.
          </h1>
          <p className="hero-sub">
            Candidatos verificados, ranking de cumplimiento, comunicación
            automatizada end-to-end. La plataforma hace el trabajo; tú no.
          </p>
          <p>
            <span className="dc-tagline">
              ¿Buscas jale o quien jale pa´ tu restaurante?
            </span>
          </p>
          <div className="hero-ctas">
            <Link href="/restaurantes#piloto" className="btn btn-primary">
              Soy restaurante — quiero el piloto
            </Link>
            <Link href="/inversionistas" className="btn btn-outline">
              Soy inversionista
            </Link>
          </div>
          <div className="hero-meta">
            <div>
              <b>Empezamos en</b> Restaurantería CDMX
            </div>
            <div>
              <b>Escalamos a</b> Cafés · Bares · Hoteles · Retail
            </div>
            <div>
              <b>Visión fintech</b> Nómina · Préstamos · Caja de ahorro
            </div>
          </div>
        </div>
      </div>

      {/* ── PROBLEMA ── */}
      <section id="problema" className="alt">
        <div className="wrap">
          <p className="section-tag">El problema</p>
          <h2>El reclutamiento en negocios de servicio está roto en cuatro frentes.</h2>
          <p className="lead">
            No es difícil encontrar candidatos. Lo difícil es que lleguen, que
            no se pierdan en el camino, y que el proceso no consuma horas de tu
            semana.
          </p>
          <div className="grid four">
            <div className="card">
              <div className="num">70%</div>
              <h3>Rotación crónica</h3>
              <p>
                La industria restaurantera convive con rotación anual
                sostenidamente alta. Cada vacante cubierta vuelve a abrirse en
                meses.
              </p>
            </div>
            <div className="card">
              <div className="num">0</div>
              <h3>Talento sin verificar</h3>
              <p>
                Cartel en ventana, boca a boca, Facebook Groups — ninguno filtra
                por confiabilidad ni cumplimiento. El negocio paga el costo de
                los no-shows.
              </p>
            </div>
            <div className="card">
              <div className="num">$240</div>
              <h3>Canales rotos</h3>
              <p>
                Indeed/OCC cobran $240/día por vacante. El negocio paga y aún
                así filtra 100+ mensajes irrelevantes a mano.
              </p>
            </div>
            <div className="card">
              <div className="num">∞</div>
              <h3>Comunicación bilateral</h3>
              <p>
                Confirmaciones manuales, no-shows sin aviso, WhatsApp personal
                prestado, misma info repetida 50 veces. Nadie cubre el flujo
                end-to-end.
              </p>
            </div>
          </div>
          <blockquote className="quote">
            "La gente agenda entrevistas pero no llega y no avisa; agenda día de
            prueba y no llega; agenda primer día contratado y no llega; ya no
            vuelve al segundo o tercer día."
            <cite>— Luisa, propietaria de restaurante, CDMX</cite>
          </blockquote>
        </div>
      </section>

      {/* ── SOLUCIÓN ── */}
      <section id="solucion">
        <div className="wrap">
          <p className="section-tag">La solución</p>
          <h2>Seis pasos. La plataforma hace el trabajo. El usuario no.</h2>
          <p className="lead">
            El candidato se registra por WhatsApp sin descargar app. Ve vacantes
            ordenadas por cercanía real y turno. Aplica 1-tap. El negocio decide
            con datos — no con fe.
          </p>
          <div className="flow">
            <div className="step">
              <div className="step-num">01</div>
              <strong>Registro WA</strong>
              <p>Sin app. El candidato entra por WhatsApp y el agente IA le arma su perfil.</p>
            </div>
            <div className="step">
              <div className="step-num">02</div>
              <strong>Perfil con IA</strong>
              <p>Conversación de texto o voz. CV generado sin que el candidato escriba un formato.</p>
            </div>
            <div className="step">
              <div className="step-num">03</div>
              <strong>Vacantes ordenadas</strong>
              <p>Por cercanía real (transporte público a ese turno), no solo por código postal.</p>
            </div>
            <div className="step">
              <div className="step-num">04</div>
              <strong>Aplicar 1-tap</strong>
              <p>El candidato aplica en un toque. El negocio ve su ranking antes de agendar.</p>
            </div>
            <div className="step">
              <div className="step-num">05</div>
              <strong>Confirmar 1-tap</strong>
              <p>Recordatorios automáticos. Sin perseguir. El bot absorbe las preguntas.</p>
            </div>
            <div className="step">
              <div className="step-num">06</div>
              <strong>Contratar</strong>
              <p>Día de prueba pagado vía Don Chambas. Backoffice humano resuelve disputas.</p>
            </div>
          </div>

          <h3 style={{ marginTop: "var(--sp-12)" }}>
            Lo que el usuario nunca tiene que hacer
          </h3>
          <div className="friction-grid">
            <div>
              <p className="section-tag" style={{ marginBottom: "var(--sp-3)" }}>
                Lado candidato
              </p>
              <ul className="friction">
                <li>Armar un CV formal</li>
                <li>Tener email activo o descargar app</li>
                <li>Saber qué escribir en mensajes</li>
                <li>Recordar citas manualmente</li>
                <li>Buscar vacantes por su cuenta</li>
                <li>Quedarse sin feedback tras rechazo</li>
              </ul>
            </div>
            <div>
              <p className="section-tag" style={{ marginBottom: "var(--sp-3)" }}>
                Lado negocio
              </p>
              <ul className="friction">
                <li>Filtrar 100+ mensajes irrelevantes</li>
                <li>Perseguir no-shows uno por uno</li>
                <li>Perseguir confirmaciones</li>
                <li>Explicar la misma vacante 50 veces</li>
                <li>Prestar el WhatsApp personal</li>
                <li>Verificar candidato a mano</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOATS ── */}
      <section id="moats" className="dark">
        <div className="wrap">
          <p className="section-tag">Ventajas estructurales</p>
          <h2>Tres moats que ningún competidor tiene hoy.</h2>
          <p className="lead">
            WhatsApp-first, verificado, ranking transparente — para el sector
            que Indeed ignora y que Facebook Groups no protege.
          </p>

          <div className="moat">
            <div className="moat-head">
              <h3>Ranking del candidato</h3>
              <span className="id">MOAT 1 · DEC-013</span>
            </div>
            <div className="body">
              <p>
                Score numérico de cumplimiento — asistencia a entrevistas,
                llegada al primer día de prueba, permanencia semana 1.{" "}
                <b>Sin reviews abiertas.</b> Comentarios cualitativos son
                privados. El negocio ve el número <b>antes</b> de agendar.
              </p>
              <p>
                Ningún competidor lo ofrece. Construirlo requiere flujo
                operativo cerrado, no solo agregar un campo. Es también la base
                del moat fintech futuro (underwriting de crédito).
              </p>
            </div>
          </div>

          <div className="moat">
            <div className="moat-head">
              <h3>Verificación física del negocio</h3>
              <span className="id">MOAT 2 · DEC-012</span>
            </div>
            <div className="body">
              <p>
                Visita física obligatoria al establecimiento antes de publicar
                vacantes. Outsourced a partner externo (modelo Hireright MX).
                Renovación anual. El "depósito de uniforme" de Facebook Groups{" "}
                <b>deja de ser posible.</b>
              </p>
              <p>
                Facebook Groups y Computrabajo no verifican. Indeed/OCC
                verifican domicilio fiscal — no que la operación sea real. La
                visita física es la única barrera que detecta el patrón "negocio
                fantasma".
              </p>
            </div>
          </div>

          <div className="moat">
            <div className="moat-head">
              <h3>Reducción bilateral de fricción</h3>
              <span className="id">MOAT 3 · DEC-021</span>
            </div>
            <div className="body">
              <p>
                Bot WA absorbe preguntas frecuentes. Confirmaciones 1-tap,
                recordatorios automáticos, templates precargados. Voz como
                modalidad de primera clase — WA voice + llamada + push-to-talk.
              </p>
              <p>
                Indeed manda email. Facebook Groups no estructura nada. Chambas
                AI hace pre-filtro pero el negocio sigue cargando con
                confirmaciones manuales.{" "}
                <b>Nadie automatiza el flujo bilateral end-to-end.</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTO ── */}
      <section id="producto" className="alt">
        <div className="wrap">
          <p className="section-tag">El producto</p>
          <h2>Wireframes hi-fi v0 — 29 historias de usuario.</h2>
          <p className="lead">
            Diseño validado con propietarios de restaurantes reales en CDMX.
            Estas tres pantallas resumen la experiencia candidato + negocio.
          </p>
          <div className="screens">
            <div className="screen">
              <Image
                src="/images/wireframes/hu-c01-onboarding-wa.png"
                alt="Registro sin app por WhatsApp"
                width={400}
                height={700}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="screen-label">
                <b>Registro sin app</b>
                <span>HU-C01 · WhatsApp</span>
              </div>
            </div>
            <div className="screen">
              <Image
                src="/images/wireframes/hu-c06-vacantes-cercania.png"
                alt="Vacantes ordenadas por cercanía real"
                width={400}
                height={700}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="screen-label">
                <b>Vacantes por cercanía</b>
                <span>HU-C06 · PWA</span>
              </div>
            </div>
            <div className="screen">
              <Image
                src="/images/wireframes/hu-r06-kanban-ranking.png"
                alt="Kanban del negocio con ranking visible"
                width={400}
                height={700}
                style={{ width: "100%", height: "auto" }}
              />
              <div className="screen-label">
                <b>Kanban rankeado</b>
                <span>HU-R06 · Desktop · moat 1+3</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILOTO ── */}
      <section id="piloto">
        <div className="wrap">
          <p className="section-tag">Programa piloto</p>
          <h2>Buscamos 10 restaurantes en CDMX para el piloto.</h2>
          <p className="lead">
            Uso gratuito durante el piloto. Soporte directo del equipo. Tarifa
            preferencial por 12 meses al terminar.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "var(--sp-10)",
            }}
          >
            <div>
              <h3>¿Qué busca Don Chambas en un negocio piloto?</h3>
              <ul className="criteria-list">
                <li>📍 Ubicado en CDMX</li>
                <li>📋 5+ vacantes al año</li>
                <li>🕐 Compromiso de 60–90 días</li>
                <li>💬 1 vacante activa para probar</li>
                <li>🤝 Retroalimentación semanal</li>
              </ul>
            </div>
            <div>
              <h3>¿Qué obtiene tu negocio?</h3>
              <ul className="criteria-list">
                <li>✓ Uso completamente gratis</li>
                <li>✓ Soporte directo del equipo fundador</li>
                <li>✓ Tarifa preferencial 12 meses post-piloto</li>
                <li>✓ Candidatos verificados y rankeados</li>
                <li>✓ Comunicación automatizada</li>
              </ul>
            </div>
          </div>

          <div className="cta-final">
            <h3>
              ¿Tu restaurante califica?{" "}
              <span className="accent">Escríbenos.</span>
            </h3>
            <p>
              Responderemos en menos de 24 horas para agendar una llamada corta
              y confirmar si el piloto es el siguiente paso correcto.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=Quiero unirme al piloto de Don Chambas&body=Hola, me interesa participar en el programa piloto. Mi restaurante está en CDMX y tenemos más de 5 vacantes al año.`}
              className="btn btn-primary"
              style={{ display: "inline-block", marginTop: "var(--sp-5)" }}
            >
              Contáctanos para el piloto →
            </a>
          </div>
        </div>
      </section>

      {/* ── EQUIPO ── */}
      <section id="equipo" className="alt">
        <div className="wrap">
          <p className="section-tag">Equipo</p>
          <h2>Tres socios fundadores. Empresa AI-first.</h2>
          <p className="lead">
            Don Chambas es el primer vertical de una empresa de transformación
            digital AI-native. Producimos en semanas lo que antes tomaba años.
          </p>
          <div className="grid three">
            <div className="card">
              <h3>Alex Blasco</h3>
              <p>
                Fundador. Producto y operaciones. Arquitectura de la plataforma
                y protocolo de agentes AI.
              </p>
            </div>
            <div className="card">
              <h3>Co-fundador</h3>
              <p>
                Diseño de producto y experiencia de usuario. Validación con
                negocios y candidatos reales.
              </p>
            </div>
            <div className="card">
              <h3>Co-fundador</h3>
              <p>
                Go-to-market, relaciones institucionales y expansión. Red
                CANIRAC y escuelas de gastronomía.
              </p>
            </div>
          </div>
          <div className="grid four" style={{ marginTop: "var(--sp-8)" }}>
            <div className="card">
              <div className="num">35+</div>
              <h3>Decisiones documentadas</h3>
              <p>
                Con rationale y contexto. Trazabilidad completa de cada elección
                de producto.
              </p>
            </div>
            <div className="card">
              <div className="num">36</div>
              <h3>HUs canónicas</h3>
              <p>
                Historias de usuario cortadas a MVP v0, con criterios de
                aceptación.
              </p>
            </div>
            <div className="card">
              <div className="num">29</div>
              <h3>Wireframes hi-fi</h3>
              <p>
                Producidos y validados con propietarios de restaurantes reales en
                CDMX.
              </p>
            </div>
            <div className="card">
              <div className="num">8 sem</div>
              <h3>De README a diseño</h3>
              <p>
                De concepto a wireframes hi-fi validados en menos de 8 semanas de
                trabajo concentrado.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
