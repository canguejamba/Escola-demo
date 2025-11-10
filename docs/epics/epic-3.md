<!-- Epic: 3 -->
<!-- Title: Implementazione delle Funzionalità di "Partecipazione" e "Contatti" -->

# Epic 3: Implementazione delle Funzionalità di "Partecipazione" e "Contatti"

## Obiettivo dell'Epic

Sviluppare le sezioni del portale dedicate alla "Partecipazione" e ai "Contatti", permettendo agli utenti di interagire con il progetto attraverso moduli specifici. L'obiettivo è facilitare la raccolta di informazioni da volontari e sostenitori, nonché la gestione delle richieste di contatto, garantendo che tutti i messaggi vengano acquisiti e resi disponibili per l'amministrazione.

## Storie Incluse in Questo Epic

*   **3.1: Creazione del modulo di contatto e salvataggio messaggi**
    *   Obiettivo: Implementare un modulo di contatto generico e la logica backend per salvare i messaggi inviati.
*   **3.2: Creazione del modulo di candidatura volontari**
    *   Obiettivo: Sviluppare un modulo specifico per la raccolta delle candidature dei volontari, con campi pertinenti.

## Deliverables Chiave

*   Una pagina `/contatti` con un modulo funzionante.
*   Una pagina `/partecipa` con un modulo di candidatura volontari.
*   Endpoint API per la ricezione e il salvataggio dei dati dei moduli.
*   Integrazione con il database Supabase per la persistenza dei messaggi.

## Criteri di Successo

*   Gli utenti possono inviare messaggi e candidature con successo.
*   Tutti i dati inviati tramite i moduli vengono salvati correttamente nel database.
*   I moduli sono validati lato client e lato server per garantire l'integrità dei dati.
*   Le pagine dei moduli sono responsive e facili da usare.
