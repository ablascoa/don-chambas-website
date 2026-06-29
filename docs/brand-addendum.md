# Adenda digital al manual de marca — Don Chambas

> Complementa `donchambas_manual-de-marca.pdf` (Doberman Estudio); **no lo reemplaza**.
> Cubre los recursos digitales nuevos: variantes de wordmark "solo nombre",
> uso de watermarks como fondo y los tokens de color para web.
> Última actualización: 2026-06-28.

---

## 1. Wordmark "solo nombre" — variantes y cuándo usar

El wordmark "solo nombre" es el lockup **sin la tagline** ("¿Buscas jale…"), con
las estrellitas, fondo transparente y alta resolución. Vive en
`Branding Don chambas/Digital/Variaciones de logotipo/Wordmark - solo nombre (PNG)/`.

| Variante | Archivo | Cuándo usarla |
|---|---|---|
| Amarillo + sombra **blanca** *(nuevo)* | `…_amarillo-sombra-blanca.png` | Fondos **navy/oscuros** y foto. Es la del nav del sitio. |
| Amarillo + sombra roja | `…_amarillo-sombra-roja.png` | Fondos claros; máximo "pop" lúdico. |
| Amarillo + sombra azul | `…_amarillo-azul.png` | Fondos claros, alternativa más sobria. |
| Rojo (con sombra) | `…_rojo.png` | Fondos claros. |
| Rojo plano (sin sombra) | `…_rojo-plano.png` | Cuando se necesita un solo color plano. |
| Blanco | `…_blanco.png` | Fondos oscuros o sobre foto (negativo). |
| Azul marino | `…_azul-marino.png` | Fondos claros / documentos. |
| Negro | `…_negro.png` | Monocromo. |

**Reglas (del manual, pág. 05):** respetar el área de respeto 1×1, y **no**:
outline, distorsión, rotación, ni colores fuera de la paleta.

---

## 2. Watermarks como fondo

El **watermark** es el wordmark (o la palabra "DON") repetido en mosaico a muy baja
opacidad, como textura de marca. Ya aparece en el manual (págs. 08–11) y en los
*heroes* del sitio web.

**Opacidad recomendada**
- Web (detrás de texto): **3–6 %**.
- Presentaciones / slides: **6–10 %**.

**Color según el fondo**
- Fondo **navy/oscuro** → marca en **blanco**.
- Fondo **claro** → marca en **navy**.

**Archivos de ejemplo** (en `Branding Don chambas/Digital/Watermarks - fondos (ejemplos)/`)
- `bg-watermark-navy.png` — slide 1920×1080, fondo navy.
- `bg-watermark-claro.png` — slide 1920×1080, fondo claro.
- `watermark-tile-blanco.png` / `watermark-tile-navy.png` — tile transparente para
  repetir (`background-repeat`) sobre cualquier color.

**En el sitio web** existe el componente reutilizable `<Watermark tone="dark|light" />`
(ver `src/components/Watermark.tsx`). Marca la sección con `has-watermark` y el
contenido queda por encima automáticamente.

---

## 3. Color — tokens para web

| Rol | Manual (impreso) | Web (tokens) | Nota |
|---|---|---|---|
| Azul marino | `#06275C` | `#06275C` | Coincide ✅ |
| Amarillo/naranja | `#F49F08` | `#F49F08` | Coincide ✅ |
| Rojo | `#B23636` | `#d31e1d` (`--dc-red-logo`) | **Difieren** ⚠️ |
| Gris claro | `#DDDDDD` | — | |
| Blanco / Negro | `#FFFFFF` / `#000000` | idem | |

⚠️ **Pendiente de decisión:** el rojo del manual (`#B23636`, apagado) y el rojo del
wordmark/web (`#d31e1d`, vivo) no coinciden. Conviene elegir uno como canónico y
alinear manual + web + assets.

---

## 4. Dónde vive cada cosa

- **Variantes de wordmark:** `Drive/Branding Don chambas/Digital/Variaciones de logotipo/Wordmark - solo nombre (PNG)/`
- **Watermarks (fondos):** `Drive/Branding Don chambas/Digital/Watermarks - fondos (ejemplos)/`
- **Manual original:** `Drive/Branding Don chambas/Manual de marca/donchambas_manual-de-marca.pdf`
- **Assets web:** repo `don-chambas-website/public/images/brand/`
