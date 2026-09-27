// All visible wording, in English (en) and Polish (pl). Update both when you change something.
// Skill names live in src/components/Skills.jsx; homelab service names in src/components/HomelabRack.jsx.
export const translations = {
  en: {
    nav: {
      about: 'about',
      experience: 'work',
      projects: 'projects',
      education: 'edu',
      skills: 'skills',
      menu: 'menu',
      close: 'close'
    },
    hero: {
      name: 'Mateusz Pawłowski',
      role: 'AI / Automation Associate',
      company: 'Reyes Holdings',
      location: 'Greater Chicago Area',
      skip: 'click or press any key to skip',
      rackCaption: '# my homelab, as an illustration (not live data)'
    },
    contact: {
      email: 'email',
      linkedin: 'linkedin',
      github: 'github'
    },
    about: {
      p1: "I'm an AI / Automation Associate at Reyes Holdings, where I started as an AI intern in 2024, and a DePaul University graduate in Information Technology.",
      p2: "Outside of work, you'll usually find me in my homelab: a Proxmox server in a portable rack running 17 self-hosted services, from photos and documents to automation and monitoring. Nothing is exposed to the internet; everything is reachable only on my LAN or over Tailscale, and the whole lab is managed as code. It's also where I run local LLMs and build self-hosted tools like Loom and SportsDash.",
      interestsTitle: 'interests',
      interests: [
        { icon: '⚽', text: 'Chelsea FC supporter' },
        { icon: '🖥️', text: 'Homelabbing and self-hosting' },
        { icon: '📚', text: 'Reading and hiking' },
        { icon: '🍞', text: 'Baking' }
      ]
    },
    experience: {
      company: 'Reyes Holdings',
      location: 'Rosemont, IL',
      current: 'current',
      roles: [
        { title: 'AI / Automation Associate', type: 'Full-time', date: 'Jun 2026 – Present', current: true },
        { title: 'AI Intern', type: 'Internship', date: 'Jun 2024 – Jun 2026' }
      ],
      projectsTitle: "What I've built at Reyes",
      projects: [
        {
          name: 'AR Logistics Invoice Automation',
          desc: 'The finance team needed to generate weekly freight invoices and match them with proof-of-delivery documents. I built a skill that users trigger by emailing a spreadsheet to an allowlisted address. It classifies each load as standard or return (dunnage), checks POD requirements, pulls PODs from the TMS API, and returns a packaged archive with a summary report.',
          tags: ['OneReach.ai', 'JavaScript/Node.js', 'E2Open TMS API', 'Email gateway']
        },
        {
          name: 'Supplier POS Request Portal',
          desc: 'I built a customer-facing web portal where supplier users sign in and submit point-of-sale material requests. Account search runs server-side across 515K records, and each request is written to the data warehouse before the confirmation email is sent, so no request gets lost.',
          tags: ['JavaScript', 'Power Pages', 'OneReach.ai', 'Snowflake', 'PostgreSQL', 'Azure/MSAL']
        },
        {
          name: 'Purchase Order Invoice Parser',
          desc: 'This tool turns raw supplier balance sheets into structured, per-PO invoices. It was first built for one brand, and I refactored it into a registry-based design so each new brand only needs a product template.',
          tags: ['JavaScript', 'OneReach.ai', 'Excel/CSV parsing']
        },
        {
          name: 'Price Promotion Request Workflow',
          desc: 'This is a conversational workflow where suppliers submit pricing promotions. It calculates profitability metrics in Snowflake and posts a pricing grid to a supplier dashboard for the pricing team to review.',
          tags: ['OneReach.ai', 'Snowflake SQL', 'Power Pages', 'MSAL/JWT']
        }
      ]
    },
    projects: {
      repo: 'source',
      demo: 'live demo',
      // link: repository URL. demo: optional live site URL. image: file in public/projects/.
      items: [
        {
          name: 'Loom',
          tagline: 'Local-first AI memory system',
          desc: 'A personal knowledge system that keeps everything as plain Markdown on your own disk. A team of AI agents structures, links, summarizes, and validates your notes, and a graph view shows how they all connect. Runs on local models through Ollama or any provider you plug in.',
          tags: ['FastAPI', 'LanceDB', 'React', 'Sigma.js', 'Ollama'],
          link: 'https://github.com/Mpawlowski5467/Loom',
          image: 'projects/loom.webp',
          imageAlt: 'Loom graph view showing a vault of connected notes'
        },
        {
          name: 'SportsDash',
          tagline: 'Self-hosted sports dashboard',
          desc: 'Ten sports and 50+ leagues on one self-hosted screen: live scores, a full calendar, standings, stat leaders, playoff brackets, and push alerts through ntfy. Runs with docker compose or as a native macOS app, with no accounts, no tracking, and no API keys.',
          tags: ['FastAPI', 'React', 'PostgreSQL', 'Redis', 'MapLibre', 'Tauri'],
          link: 'https://github.com/Mpawlowski5467/SportsDash',
          image: 'projects/sportsdash.webp',
          imageAlt: 'SportsDash NBA playoff bracket view'
        },
        {
          name: 'Argus',
          tagline: 'Quantitative equity scanner',
          desc: 'Scans US stocks without survivorship bias: it parses SEC EDGAR filings into point-in-time signals, scores them with a walk-forward LightGBM model, and emits a backtested, cost-aware buy/sell verdict. A local LLM explains each call in plain language but never sets it. Runs unattended every night.',
          tags: ['Python', 'LightGBM', 'DuckDB', 'SHAP', 'Local LLM'],
          link: 'https://github.com/Mpawlowski5467/Argus',
          image: 'projects/argus.webp',
          imageAlt: 'Argus ticker view with a price chart and a buy signal (demo data)'
        }
      ]
    },
    education: {
      items: [
        { school: 'DePaul University', degree: 'B.S. in Information Technology', date: 'Sep 2023 – Mar 2026' },
        { school: 'Harper College', degree: 'Associate of Arts (A.A.), Information Technology', date: 'Aug 2021 – Jul 2023' }
      ],
      highlightsTitle: 'highlights:',
      highlights: ['Graduated March 2026', 'GPA 3.40', "Dean's List · Fall 2023"]
    },
    footer: {
      name: 'Mateusz Pawłowski',
      updated: 'last updated'
    },
    a11y: {
      skip: 'Skip to content',
      backToTop: 'Back to top'
    }
  },
  pl: {
    nav: {
      about: 'o mnie',
      experience: 'praca',
      projects: 'projekty',
      education: 'edukacja',
      skills: 'umiejętności',
      menu: 'menu',
      close: 'zamknij'
    },
    hero: {
      name: 'Mateusz Pawłowski',
      role: 'Specjalista ds. AI i automatyzacji',
      company: 'Reyes Holdings',
      location: 'Chicago i okolice',
      skip: 'kliknij lub naciśnij dowolny klawisz, aby pominąć',
      rackCaption: '# mój homelab w formie ilustracji (to nie są dane na żywo)'
    },
    contact: {
      email: 'email',
      linkedin: 'linkedin',
      github: 'github'
    },
    about: {
      p1: 'Jestem specjalistą ds. AI i automatyzacji w Reyes Holdings, gdzie w 2024 roku zacząłem jako stażysta AI, oraz absolwentem technologii informacyjnych na Uniwersytecie DePaul.',
      p2: 'Po pracy najczęściej siedzę w swoim homelabie: to serwer Proxmox w przenośnej szafie rack, na którym działa 17 samodzielnie hostowanych usług, od zdjęć i dokumentów po automatyzację i monitoring. Nic nie jest wystawione do internetu; wszystko jest dostępne tylko w sieci lokalnej lub przez Tailscale, a cały lab jest zarządzany jako kod. Tam też uruchamiam lokalne modele LLM i buduję własne narzędzia, takie jak Loom i SportsDash.',
      interestsTitle: 'zainteresowania',
      interests: [
        { icon: '⚽', text: 'Kibic Chelsea FC' },
        { icon: '🖥️', text: 'Homelab i self-hosting' },
        { icon: '📚', text: 'Czytanie i wędrówki' },
        { icon: '🍞', text: 'Pieczenie' }
      ]
    },
    experience: {
      company: 'Reyes Holdings',
      location: 'Rosemont, IL',
      current: 'obecnie',
      roles: [
        { title: 'Specjalista ds. AI i automatyzacji', type: 'Pełny etat', date: 'Czerwiec 2026 – obecnie', current: true },
        { title: 'Stażysta AI', type: 'Staż', date: 'Czerwiec 2024 – czerwiec 2026' }
      ],
      projectsTitle: 'Co zbudowałem w Reyes',
      projects: [
        {
          name: 'Automatyzacja faktur logistycznych (AR)',
          desc: 'Dział finansów musiał co tydzień generować faktury za fracht i dopasowywać je do potwierdzeń dostawy (POD). Zbudowałem skill, który użytkownicy uruchamiają, wysyłając arkusz kalkulacyjny e-mailem na zatwierdzony adres. Klasyfikuje każdy ładunek jako standardowy lub zwrotny (dunnage), sprawdza wymagania dotyczące POD, pobiera dokumenty POD z API systemu TMS i odsyła spakowane archiwum z raportem podsumowującym.',
          tags: ['OneReach.ai', 'JavaScript/Node.js', 'E2Open TMS API', 'Bramka e-mail']
        },
        {
          name: 'Portal zamówień materiałów POS dla dostawców',
          desc: 'Zbudowałem portal internetowy dla klientów, w którym użytkownicy po stronie dostawców logują się i składają zamówienia na materiały POS (point-of-sale). Wyszukiwanie kont działa po stronie serwera na 515 tys. rekordów, a każde zamówienie jest zapisywane w hurtowni danych przed wysłaniem e-maila z potwierdzeniem, więc żadne zamówienie nie ginie.',
          tags: ['JavaScript', 'Power Pages', 'OneReach.ai', 'Snowflake', 'PostgreSQL', 'Azure/MSAL']
        },
        {
          name: 'Parser faktur do zamówień (PO)',
          desc: 'Narzędzie zamienia surowe zestawienia sald od dostawców na uporządkowane faktury dla każdego zamówienia (PO). Najpierw powstało dla jednej marki, a potem przebudowałem je na architekturę opartą na rejestrze, dzięki czemu każda nowa marka potrzebuje tylko szablonu produktu.',
          tags: ['JavaScript', 'OneReach.ai', 'Parsowanie Excel/CSV']
        },
        {
          name: 'Proces zgłaszania promocji cenowych',
          desc: 'Konwersacyjny proces, w którym dostawcy zgłaszają promocje cenowe. Oblicza wskaźniki rentowności w Snowflake i publikuje siatkę cenową na panelu dostawcy, gdzie przegląda ją zespół cenowy.',
          tags: ['OneReach.ai', 'Snowflake SQL', 'Power Pages', 'MSAL/JWT']
        }
      ]
    },
    projects: {
      repo: 'kod źródłowy',
      demo: 'demo',
      items: [
        {
          name: 'Loom',
          tagline: 'Lokalny system pamięci AI',
          desc: 'Osobisty system wiedzy, który przechowuje wszystko jako zwykły Markdown na Twoim dysku. Zespół agentów AI porządkuje, łączy, streszcza i weryfikuje notatki, a widok grafu pokazuje, jak są ze sobą powiązane. Działa na lokalnych modelach przez Ollama lub u dowolnego podłączonego dostawcy.',
          tags: ['FastAPI', 'LanceDB', 'React', 'Sigma.js', 'Ollama'],
          link: 'https://github.com/Mpawlowski5467/Loom',
          image: 'projects/loom.webp',
          imageAlt: 'Widok grafu w Loom z siecią połączonych notatek'
        },
        {
          name: 'SportsDash',
          tagline: 'Samodzielnie hostowany panel sportowy',
          desc: 'Dziesięć dyscyplin i ponad 50 lig na jednym ekranie: wyniki na żywo, pełny kalendarz, tabele, liderzy statystyk, drabinki play-off i powiadomienia push przez ntfy. Działa przez docker compose lub jako natywna aplikacja na macOS, bez kont, śledzenia i kluczy API.',
          tags: ['FastAPI', 'React', 'PostgreSQL', 'Redis', 'MapLibre', 'Tauri'],
          link: 'https://github.com/Mpawlowski5467/SportsDash',
          image: 'projects/sportsdash.webp',
          imageAlt: 'Drabinka play-off NBA w SportsDash'
        },
        {
          name: 'Argus',
          tagline: 'Ilościowy skaner akcji',
          desc: 'Skanuje amerykańskie akcje bez błędu przeżywalności: przetwarza raporty SEC EDGAR na sygnały z danego momentu, ocenia je modelem LightGBM trenowanym metodą walk-forward i wydaje przetestowany historycznie werdykt kupna lub sprzedaży z uwzględnieniem kosztów. Lokalny model LLM wyjaśnia każdą decyzję prostym językiem, ale nigdy jej nie podejmuje. Działa automatycznie każdej nocy.',
          tags: ['Python', 'LightGBM', 'DuckDB', 'SHAP', 'Lokalny LLM'],
          link: 'https://github.com/Mpawlowski5467/Argus',
          image: 'projects/argus.webp',
          imageAlt: 'Widok spółki w Argus z wykresem ceny i sygnałem kupna (dane demonstracyjne)'
        }
      ]
    },
    education: {
      items: [
        { school: 'Uniwersytet DePaul', degree: 'Licencjat (B.S.) z technologii informacyjnych', date: 'Wrzesień 2023 – marzec 2026' },
        { school: 'Harper College', degree: 'Associate of Arts (A.A.), technologie informacyjne', date: 'Sierpień 2021 – lipiec 2023' }
      ],
      highlightsTitle: 'wyróżnienia:',
      highlights: ['Ukończone w marcu 2026', 'Średnia 3,40 (GPA)', 'Lista Dziekana · jesień 2023']
    },
    footer: {
      name: 'Mateusz Pawłowski',
      updated: 'ostatnia aktualizacja'
    },
    a11y: {
      skip: 'Przejdź do treści',
      backToTop: 'Wróć na górę'
    }
  }
};
