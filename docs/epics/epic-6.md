<!-- Epic: 6 -->
<!-- Title: Gestione dei Media -->

# Epic 6: Gestione dei Media

## Obiettivo dell'Epic

Fornire all'amministratore la capacità di caricare file multimediali (immagini) direttamente dal pannello di amministrazione, salvandoli su Supabase Storage. Questo elimina la necessità di inserire manualmente URL di immagini, rendendo il processo di gestione dei contenuti più integrato, efficiente e meno prono a errori.

## Storie Incluse in Questo Epic

*   **6.1: Integrazione dell'upload di immagini nel form dei post del blog**
    *   Obiettivo: Aggiungere un campo di upload di file al form di creazione/modifica dei post del blog per caricare l'immagine di copertina.
*   **6.2: Integrazione dell'upload di immagini nel form delle comunità**
    *   Obiettivo: Aggiungere un campo di upload di file al form di creazione/modifica delle comunità per caricare l'immagine rappresentativa.

## Deliverables Chiave

*   Un componente di upload riutilizzabile nel pannello di amministrazione.
*   Endpoint API sicuri per gestire il caricamento dei file su Supabase Storage.
*   Integrazione del componente di upload nei form esistenti per post e comunità.
*   Salvataggio dell'URL del file caricato nel record del database corrispondente (post o comunità).

## Criteri di Successo

*   L'amministratore può selezionare un'immagine dal proprio computer e caricarla con successo.
*   I file caricati vengono salvati in un bucket designato su Supabase Storage.
*   L'URL pubblico del file caricato viene associato e salvato correttamente nel post o nella comunità.
*   Il processo è sicuro e impedisce il caricamento di file non autorizzati o di tipo non corretto.
