# 4. Flusso logico e coerenza
1. **Frontend (Next.js)**: pagine pubbliche + `/admin` protetta da Supabase Auth.  
2. **Backend (API Routes + Prisma)**: gestisce CRUD di post, comunità e messaggi.  
3. **Database e Storage (Supabase)**: PostgreSQL con RLS, tabelle `users`, `posts`, `communities`, `messages`, `media`.  
4. **Deployment (Vercel)**: ISR per pagine pubbliche, edge caching e log automatici.  

**Coerenza:** architettura lineare, facilmente estendibile. Unico rischio: crescita futura del backend integrato, mitigabile con servizi esterni.

---
