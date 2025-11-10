# 2. Ragionamento architetturale
1. Il requisito funzionale distingue pubblico e amministratore → due superfici: pagine pubbliche e area `/admin`.  
2. Next.js permette frontend e API integrate; Prisma funge da layer ORM per Supabase PostgreSQL.  
3. Supabase/Auth gestisce login e storage dei file (immagini comunità).  
4. Vercel gestisce build e distribuzione statica, garantendo scalabilità automatica.  
5. L’architettura punta alla semplicità e rapidità di sviluppo, con basi già pronte per la v2 (multi-ruolo e API dedicate).  

---
