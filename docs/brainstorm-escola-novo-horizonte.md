# Brainstorming: Portale Web “Escola Comunitária Novo Horizonte”
**Data:** 2025-11-10

---

## Obiettivo generale
Creare un portale web che aumenti la visibilità delle scuole comunitarie in Angola, racconti storie autentiche e attragga volontari e sostenitori, migliorando la comunicazione e la trasparenza del progetto.

---

## 1. Visione e impatto
- Comunicare la missione del progetto con un linguaggio visivo empatico e autentico.
- Creare un ponte tra comunità locali e pubblico globale.
- Trasmettere trasparenza, fiducia e partecipazione.

---

## 2. Funzionalità principali (MVP)
1. **Homepage narrativa**: messaggio chiaro + immagine/video d’impatto + CTA “Scopri le comunità” / “Partecipa”.
2. **Le nostre comunità**: schede per ciascuna comunità con immagini, descrizione, statistiche (scuole, bambini, volontari).
3. **Partecipa**: modulo volontariato + elenco beni donabili con indicazioni logistiche.
4. **Blog / Diario di bordo**: articoli e aggiornamenti dal campo.
5. **Contatti e social hub**: form + link social.
6. **Amministrazione (ruolo admin unico)**:
   - CRUD post e comunità.
   - Gestione messaggi ricevuti dai form.
   - Dashboard riepilogativa.

---

## 3. Architettura tecnica proposta
**Stack:** React/Next.js + TypeScript + TailwindCSS + Prisma + Supabase (Auth + DB + Storage) + deploy su Vercel.

**Struttura a 3 livelli:**
1. **Frontend** – Next.js con pagine pubbliche e area `/admin` protetta.
2. **API Backend** – API Routes con Prisma ORM e middleware Supabase Auth.
3. **Database (PostgreSQL/Supabase)** – tabelle: `users`, `posts`, `communities`, `messages`.

**Autenticazione:** Supabase Auth con singolo ruolo admin.  
**Storage:** immagini e file statici su bucket Supabase.  
**Deployment:** continuo su Vercel.  

---

## 4. Wireflow logico
### Utente pubblico
- **Home** → CTA → Comunità / Partecipa / Blog
- **Comunità** → scheda singola → storie e statistiche
- **Partecipa** → moduli volontariato/donazioni
- **Blog** → elenco post → post completo
- **Contatti** → form → invio → salvataggio messaggio

### Amministratore
- **Login (/login)** → accesso Supabase Auth
- **Dashboard** → riepilogo (post, comunità, messaggi)
- **Gestione contenuti**: CRUD post e comunità
- **Gestione messaggi**: visualizza, marca come letto

---

## 5. Matrice funzionalità (v1 vs v2)

| Categoria | v1 – MVP | v2 – Espansione |
|------------|-----------|----------------|
| **Contenuti pubblici** | Homepage narrativa | Homepage dinamica con video hero |
| **Comunità** | Schede statiche | Mappe, grafici, filtri |
| **Blog/Diario** | CRUD base | Categorie, tag, bozze |
| **Partecipa** | Moduli volontariato e beni | Campagne e gestione stock |
| **Contatti** | Form semplice | Dashboard messaggi e risposte |
| **Admin Panel** | CRUD base, 1 admin | Multi-ruolo, statistiche |
| **Auth** | Supabase Auth | Ruoli multipli |
| **Storage Media** | Upload base | Gallerie avanzate |
| **Internazionalizzazione** | 1 lingua | Multilingua completo |
| **Integrazioni esterne** | Nessuna | Email notifica, API pubblica |

---

## 6. Prossimi step
1. Definire stile visivo e palette (coerente col logo esistente).
2. Disegnare wireframe responsive per homepage e admin.
3. Generare schema Prisma e setup iniziale Supabase.
4. Pianificare milestone di rilascio (v1 → v2).
