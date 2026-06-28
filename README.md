# BetDay Lite

Mini aplicación web de apuestas deportivas simuladas construida con Next.js 16, React 18 y TypeScript.

## Stack

- **Next.js 16** — App Router, Server Components, API Routes
- **React 18** — Hooks, Suspense
- **TypeScript** — tipado estricto
- **NextAuth v5 (beta)** — autenticación con credenciales
- **Zustand** — estado global de apuestas en cliente
- **Zod** — validación de datos en infraestructura
- **Sonner** — notificaciones toast
- **Tailwind CSS** — estilos

## Arquitectura

El proyecto sigue **Clean Architecture** con programación funcional y principios SOLID:

```
src/
├── app/                          # Next.js App Router
│   ├── api/
│   │   ├── auth/[...nextauth]/   # NextAuth route handler
│   │   ├── matches/              # API Route — sirve matches
│   │   └── bets/                 # API Route — sirve bets
│   ├── bets/[betId]/             # Detalle de apuesta
│   │   ├── page.tsx              # Página de detalle
│   │   └── loading.tsx           # Loading UI del detalle
│   ├── login/                    # Página de login
│   ├── profile/                  # Perfil (protegida)
│   │   ├── page.tsx
│   │   └── loading.tsx           # Loading UI del perfil
│   ├── globals.css               # Estilos globales + tokens HeroUI
│   ├── icon.png                  # Logo de la app
│   ├── layout.tsx                # Layout raíz
│   ├── loading.tsx               # Loading UI del home
│   └── page.tsx                  # Home — timeline
│
├── auth.ts                       # Configuración de NextAuth
├── proxy.ts                      # Middleware de protección de rutas (Next.js 16)
│
└── core/                         # Independiente de Next.js
    ├── data/                     # JSON seed
    │   ├── matches.today.50.json
    │   └── bets.me.50.json
    │
    ├── domain/                   # Capa de dominio
    │   ├── entities/             # Tipos del dominio
    │   └── repositories/         # Interfaces (contratos)
    │
    ├── application/
    │   └── use-cases/            # Casos de uso (lógica de negocio)
    │
    ├── infrastructure/
    │   └── api/                  # Implementación de repositorios + Zod
    │
    ├── presentation/
    │   ├── components/           # Componentes React
    │   │   ├── Bet/              # BetCard, BetDetail, BetDetailView, BetList, BetListEmpty
    │   │   ├── Login/            # LoginForm
    │   │   ├── Match/            # MatchCard
    │   │   ├── Navbar/           # Navbar, NavbarClient, NavbarSkeleton
    │   │   ├── ProfileView/      # ProfileView
    │   │   ├── Timeline/         # Timeline, TimelineDayPanel, HourSeparator, BetPickButton
    │   │   ├── providers/        # SessionProvider, ThemeProvider, Providers
    │   │   └── ui/               # ThemeSwitcher, BetStatusChip, ScrollToTop
    │   ├── hooks/                # Custom hooks (usePlaceBet)
    │   └── store/                # Zustand store (bet.store)
    │
    └── helpers/                  # Utilidades puras (dates, consts, delay)
```

## Funcionalidades

- **Timeline** — matches del día agrupados por hora con pestañas por día
- **Apuestas simuladas** — click en 1, X o 2 con toast cancelable y feedback visual
- **Perfil** — historial de apuestas del usuario con estado (PENDING, WON, LOST)
- **Detalle de apuesta** — vista completa de cada bet en `/bets/[betId]`
- **Autenticación** — login con credenciales, ruta `/profile` protegida

## Requisitos

- Node.js 18+
- npm 9+

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/CRGuarda/betday-lite.git
cd betday-lite

# Instalar dependencias
npm install

# Configurar variables de entorno
cp .env.example .env.local
```

## Variables de entorno

```bash
# .env.local
API_BASE_URL=       # URL de la API de demostración
AUTH_SECRET=        # Generado con: npx auth secret
```

## Ejecución

```bash
# Desarrollo
npm run dev

# Producción
npm run build
npm start
```

La app estará disponible en [http://localhost:3000](http://localhost:3000)

## Credenciales de demo

```
Email: user@betday.com
Contraseña: 123456
```

## Deploy

La aplicación está desplegada en Vercel:
[https://betday-lite-six.vercel.app/](https://betday-lite-six.vercel.app/)

# .env.example

```bash
# .env.example
API_BASE_URL=http://localhost:3000
AUTH_SECRET=ce5a6c985267181cab262097ccdb1fee6b92583d4bb8a9d4336c3d22bc1d4b13
```
