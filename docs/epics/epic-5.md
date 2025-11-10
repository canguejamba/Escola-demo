<!-- Epic: 5 -->
<!-- Title: Creazione del Pannello di Amministrazione (Admin Panel) -->

# Epic 5: Creazione del Pannello di Amministrazione (Admin Panel)

## Obiettivo dell'Epic

Sviluppare un'area di amministrazione sicura e funzionale che consenta a un utente con ruolo "admin" di gestire i contenuti del portale. L'obiettivo è creare un'interfaccia protetta per le operazioni di Creazione, Lettura, Aggiornamento e Cancellazione (CRUD) dei dati principali del sito, come post del blog e schede delle comunità.

## Storie Incluse in Questo Epic

*   **5.1: Implementazione del login per l'admin e protezione della dashboard**
    *   Obiettivo: Creare la pagina di login e proteggere una pagina di dashboard iniziale, accessibile solo agli utenti autenticati con il ruolo corretto.
*   **5.2: Gestione (CRUD) dei Post del Blog**
    *   Obiettivo: Sviluppare l'interfaccia per creare, modificare ed eliminare i post del blog.
*   **5.3: Gestione (CRUD) delle Comunità**
    *   Obiettivo: Sviluppare l'interfaccia per creare, modificare ed eliminare le schede delle comunità.
*   **5.4: Visualizzazione dei Messaggi di Contatto**
    *   Obiettivo: Creare una sezione nella dashboard per visualizzare i messaggi ricevuti tramite i moduli di contatto e di candidatura.

## Deliverables Chiave

*   Una pagina di login `/login`.
*   Un'area `/admin` protetta, accessibile solo dopo il login.
*   Una dashboard `/admin/dashboard` con un riepilogo delle informazioni.
*   Interfacce CRUD complete per la gestione dei contenuti.
*   Integrazione con Supabase Auth per l'autenticazione e la gestione delle sessioni.

## Criteri di Successo

*   Solo gli utenti autenticati con il ruolo di admin possono accedere all'area `/admin`.
*   L'amministratore può gestire tutti i contenuti del sito in modo autonomo.
*   Le operazioni CRUD funzionano correttamente e si riflettono sul sito pubblico.
*   La sessione utente è gestita in modo sicuro.
