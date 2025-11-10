# 5. Rischi architetturali e mitigazioni
| Rischio | Descrizione | Mitigazione |
|----------|--------------|-------------|
| Scalabilità backend | Carico alto su API Next | Spostare API su Supabase Functions / microservizi |
| Affidabilità storage | Disordine o lentezza media | Naming coerente e cleanup periodico |
| RLS mal configurato | Esposizione dati riservati | Policy minime e test accessi |
| Assenza cache | Pagine lente in Africa | ISR + caching edge |
| Error handling/log | Difficoltà debugging | Integrazione Sentry / Supabase logs |
| Singolo admin | Blocco operativo | Struttura ruoli predisposta |

---
