# Product Requirements Document (PRD)
**Progetto:** Escola Comunitária Novo Horizonte  
**Data:** 2025-11-10  
**Versione:** Greenfield – MVP

---

## 1. Panoramica e obiettivi

### Contesto e problema
Le *Escolas Comunitárias Novo Horizonte* operano in Angola grazie al contributo volontario di insegnanti e sostenitori locali.  
L’assenza di una presenza digitale limita la visibilità, la credibilità e la capacità di attrarre nuovi volontari, materiali didattici e partnership.

### Soluzione proposta
Realizzare un portale web accessibile e autentico che racconti le storie delle comunità, mostri l’impatto educativo e faciliti il coinvolgimento del pubblico.  
Il portale fungerà da piattaforma di trasparenza e connessione, dove scuole e volontari potranno condividere esperienze, dati concreti e testimonianze dirette.

### Obiettivi principali
1. Aumentare visibilità e riconoscimento del progetto a livello nazionale e internazionale.  
2. Rafforzare la fiducia del pubblico attraverso storie vere, dati e aggiornamenti regolari.  
3. Creare un punto di contatto per volontari e sostenitori, con moduli e canali chiari di partecipazione.  
4. Costruire le basi per una futura sostenibilità economica (donazioni monetarie, partnership).

### Obiettivi misurabili (MVP)
- 1.000 visitatori/mese entro 6 mesi.  
- 20 candidature volontari e 10 nuove collaborazioni.  
- Almeno 10 storie pubblicate nel primo semestre.  
- Aggiornamenti mensili verificabili da un admin designato.

### Allineamento alla missione
Il progetto è pienamente coerente con la missione di promuovere l’educazione comunitaria in Angola e rendere visibile l’impatto sociale delle scuole.  
Il portale diventa strumento di trasformazione, non solo vetrina: un ponte digitale tra le comunità locali e chi può sostenerle.

### Rischi e mitigazioni
| Rischio | Descrizione | Mitigazione |
|----------|--------------|-------------|
| Operativo | Mancanza di tempo o risorse per aggiornamenti | Formazione admin e calendario redazionale |
| Connettività | Reti lente o instabili in Angola | Ottimizzazione pagine e media compressi |
| Privacy | Uso immagini di minori e volontari | Consenso scritto e policy privacy visibile |
| Dati | Statistiche non aggiornate | Verifica periodica dei dati inseriti |

### Flusso editoriale
Creazione → revisione → pubblicazione → monitoraggio impatto  
Un unico admin gestisce contenuti e statistiche, con estensioni future per ruoli aggiuntivi.

### Visione a lungo termine
Il portale crescerà verso un ecosistema educativo digitale con sezioni multilingua, dati d’impatto e strumenti per partnership e raccolta fondi.

---

## 2. Contesto tecnico (riassunto)
**Stack:** React/Next.js + TypeScript + TailwindCSS + Prisma + Supabase (Auth + DB + Storage) + deploy su Vercel  
**Ruolo admin unico**, autenticato tramite Supabase Auth.  
**Database:** PostgreSQL con tabelle `users`, `posts`, `communities`, `messages`.  
**Hosting:** Vercel + storage Supabase bucket.

---

## 3. Wireflow logico (riassunto)

### Utente pubblico
- **Home** → CTA → Comunità / Partecipa / Blog  
- **Comunità** → scheda → storie e statistiche  
- **Partecipa** → moduli volontariato/donazioni  
- **Blog** → elenco post → post completo  
- **Contatti** → form → salvataggio messaggio

### Amministratore
- **Login (/login)** → accesso Supabase Auth  
- **Dashboard** → riepilogo (post, comunità, messaggi)  
- **Gestione contenuti:** CRUD post e comunità  
- **Gestione messaggi:** visualizza, marca come letto

---

## 4. Matrice funzionalità (v1 vs v2)

| Categoria | v1 – MVP | v2 – Espansione |
|------------|-----------|----------------|
| Contenuti pubblici | Homepage narrativa | Homepage dinamica con video hero |
| Comunità | Schede statiche | Mappe, grafici, filtri |
| Blog/Diario | CRUD base | Categorie, tag, bozze |
| Partecipa | Moduli volontariato e beni | Campagne e gestione stock |
| Contatti | Form semplice | Dashboard messaggi e risposte |
| Admin Panel | CRUD base, 1 admin | Multi-ruolo, statistiche |
| Auth | Supabase Auth | Ruoli multipli |
| Storage Media | Upload base | Gallerie avanzate |
| Internazionalizzazione | 1 lingua | Multilingua completo |
| Integrazioni esterne | Nessuna | Email notifica, API pubblica |

---

## 5. Considerazioni finali
- Priorità su contenuti autentici e facilità d’uso.  
- Valutare partnership per formazione admin e supporto tecnico.  
- Pianificare aggiornamenti mensili e revisione trimestrale del portale.  
