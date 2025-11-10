# 1. Contesto e obiettivi
Il sistema deve fornire un portale pubblico (storytelling, comunità, blog) e un pannello admin protetto per creare, modificare e pubblicare contenuti.  
Stack scelto: **Next.js + TypeScript + TailwindCSS + Prisma + Supabase (Auth + DB + Storage)** con deploy su **Vercel**.  
Obiettivi principali:  
- separazione tra vista pubblica e area riservata admin;  
- autenticazione sicura e unica (ruolo admin);  
- alta performance anche con connessioni lente;  
- struttura dati chiara per comunità, post e messaggi;  
- semplicità di manutenzione e aggiornamento.  

---
