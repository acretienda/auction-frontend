# Auction Frontend

Este es el frontend de la aplicación de subastas.

## 🚀 Deploy en Vercel

1. Sube este proyecto a un repositorio en GitHub.
2. Ve a [Vercel](https://vercel.com/).
3. Importa el repositorio.
4. Configura:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Dale a **Deploy**.

## 🛠️ Scripts

- `npm run dev` → Inicia en desarrollo
- `npm run build` → Compila para producción
- `npm run start` → Previsualiza producción

## 🔗 Backend
Este frontend ya está conectado al backend en Render:

https://square-subastas.onrender.com

- Página **Auctions** → lista las subastas activas (`GET /auctions/`).
- Página **Admin** → permite crear nuevas subastas (`POST /auctions/`).
