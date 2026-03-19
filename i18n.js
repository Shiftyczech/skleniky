// ===== INTERNATIONALIZATION (i18n) =====
const currencyConfig = {
  cs: { rate: 1, symbol: "Kč", after: true, locale: "cs-CZ" },
  en: { rate: 1 / 23, symbol: "$", after: false, locale: "en-US" },
  de: { rate: 1 / 25, symbol: "€", after: true, locale: "de-DE" }
};

function formatPrice(czk, lang) {
  var cfg = currencyConfig[lang] || currencyConfig.cs;
  var val = czk * cfg.rate;
  var formatted;
  if (val < 10 && lang !== "cs") {
    formatted = val.toFixed(2);
    if (lang === "de") formatted = formatted.replace(".", ",");
  } else {
    formatted = Math.round(val).toLocaleString(cfg.locale);
  }
  return cfg.after ? formatted + " " + cfg.symbol : cfg.symbol + formatted;
}

const translations = {
  // ========== CZECH (original) ==========
  cs: {
    // Meta
    "meta.title": "Skleníky Tobiáš – Šroubované skleníky pro beztmelé zasklení",
    "meta.description": "Skleníky Tobiáš – kvalitní šroubované skleníky pro beztmelé zasklení. Nejlevnější skleníky na českém trhu s pevnou konstrukcí. Daniel Tobiáš, Nymburk.",

    // Nav
    "nav.logo": "Skleníky Tobiáš",
    "nav.about": "O nás",
    "nav.products": "Skleníky",
    "nav.construction": "Konstrukce",
    "nav.assembly": "Montáž",
    "nav.pricing": "Ceník",
    "nav.services": "Služby",
    "nav.history": "O firmě",
    "nav.gallery": "Galerie",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",

    // Hero
    "hero.badge": "Aktuální cenová akce – ušetřete až 900 Kč",
    "hero.title": 'Kvalitní <span>šroubované skleníky</span> za nejlepší ceny',
    "hero.text": "Firma Daniel Tobiáš Vám nabídne pevné, kvalitní a současně bezkonkurenčně nejlevnější skleníky na českém trhu. Dodáváme jako jednoduchou stavebnici, kterou snadno zkompletujete přímo na místě.",
    "hero.btn_products": "Prohlédnout skleníky →",
    "hero.btn_contact": "Nezávazná objednávka",
    "hero.stat_models_label": "Modelů skleníků",
    "hero.stat_delivery_label": "Doprava – paušál po ČR",
    "hero.stat_since": "od 1926",
    "hero.stat_tradition_label": "Rodinná tradice",
    "hero.stat_glass_label": "Zahradnické sklo",

    // About
    "about.title": "Proč zvolit skleníky Tobiáš?",
    "about.subtitle": "Naše skleníky mají oproti konkurenci pevnější konstrukci a přitom patří k nejlevnějším na trhu.",
    "about.badge1_title": "Český výrobek",
    "about.badge1_text": "Český dodavatel · Česká kvalita",
    "about.badge2_title": "Rodinná firma od roku 1926",
    "about.badge2_text": "Sklenářství Tobiáš – přes 100 let zkušeností",
    "about.badge3_title": "Bezkonkurenční ceny",
    "about.badge3_text": "Nejlevnější skleníky na českém trhu",
    "about.f1_title": "Šroubovaná konstrukce",
    "about.f1_text": "Profily z pozinkovaného plechu tloušťky 1,3 mm sestavené šrouby a matkami. Žádné svařování – maximální pevnost a snadná montáž.",
    "about.f2_title": "Beztmelé zasklení",
    "about.f2_text": "Skla síly 4 mm se netmelí, ale uchycují pomocí speciálních svorek. Snadná výměna i údržba bez nutnosti tmelení.",
    "about.f3_title": "Variabilní rozměry",
    "about.f3_text": "Každý model lze prodloužit po úsecích v délce 1 metru. Získáte skleník přesně na míru vaší zahrady.",
    "about.f4_title": "Široké dveře 62 cm",
    "about.f4_text": "Světlá šířka dveří 62 cm umožňuje pohodlný průjezd kolečkem. Praktické řešení pro každodenní práci.",
    "about.f5_title": "Optimální svit",
    "about.f5_text": "Boční stěny se sklonem 15° pro lepší propustnost světla. Výška stěn 1,42 m – od kraje osazujte i vyšší zeleninou.",
    "about.f6_title": "Doprava a montáž",
    "about.f6_text": "Skleník Vám dopravíme až domů za paušální cenu. Zajistíme i kompletní montáž přímo na místě.",

    // Products
    "products.title": "Naše skleníky",
    "products.subtitle": "Vyberte si ze 5 modelů, každý s možností prodloužení po 1 metru. Skla čirá nebo rozptylová Helios.",
    "products.badge_compact": "Kompaktní",
    "products.badge_popular": "Oblíbený",
    "products.badge_spacious": "Prostorný",
    "products.badge_leanto": "Přístavba",
    "products.badge_leanto_xl": "Přístavba XL",
    "products.width": "Šířka",
    "products.height": "Výška",
    "products.doors": "Dveře",
    "products.vat": "vč. DPH",
    "products.inquiry": "Nezávazná poptávka",
    "products.central_desc": "Kompaktní model ideální pro menší zahrady. Nabízí dostatek prostoru pro základní pěstování.",
    "products.optimal_desc": "Nejoblíbenější model s vyváženým poměrem ceny a prostoru. Ideální volba pro většinu zahradníků.",
    "products.maximal_desc": "Největší volně stojící model pro náročné pěstitele. Maximální prostor pro vaši úrodu.",
    "products.satelit2_desc": "Přístěnný model pro přistavění ke zdi domu. Kompaktní řešení, které šetří místo na zahradě.",
    "products.satelit24_desc": "Širší přístěnný model s větším prostorem. Ideální pro náročnější pěstitele s menší zahradou.",

    // Construction
    "construction.title": "Konstrukce a technologie",
    "construction.subtitle": "Na\u0161e sklen\u00edky jsou navr\u017eeny pro maxim\u00e1ln\u00ed pevnost a snadnou mont\u00e1\u017e. Syst\u00e9m \u201eLego pro dosp\u011bl\u00e9\u201c.",
    "construction.f1_title": "Pozinkované profily 1,3 mm",
    "construction.f1_text": "Konstrukce z pozinkovaného plechu tloušťky 1,3 mm. Všechny spoje šroubované – maximální životnost a odolnost vůči korozi.",
    "construction.f2_title": "Zahradnické sklo 4 mm",
    "construction.f2_text": "Skla speciálně vyvinutá pro zahradnické účely. Volba mezi čirým sklem a rozptylovým Helios pro rovnoměrné osvětlení.",
    "construction.f3_title": "15° sklon bočních stěn",
    "construction.f3_text": "Optimalizovaný sklon pro maximální propustnost světla. Stěny 1,42 m – prostor pro vyšší zeleninu od samého kraje.",
    "construction.f4_title": "Variabilní základy",
    "construction.f4_text": "Instalace na betonové zdi, dřevěné trámy, betonové patky nebo speciální kovový základový rám (práškově lakovaný, 3 mm ocel).",
    "construction.f5_title": "Modulární systém",
    "construction.f5_text": "Prodloužení po 1 metru. Jednoduchá stavebnice – zvládnete montáž svépomocí nebo objednejte naši profesionální montáž.",

    // Assembly
    "assembly.title": "Montáž skleníku",
    "assembly.subtitle": "Skleník Tobiáš je jako dětská skládačka – zvládnete ho sami nebo vám rádi pomůžeme.",
    "assembly.step1_title": "Příprava základu",
    "assembly.step1_text": "Skleník lze osadit na betonové zdi, dřevěné trámy, betonové patky nebo speciální kovový základový rám z 3mm oceli (práškově lakovaný). Základ musí být vodorovný a pevný.",
    "assembly.step2_title": "Sestavení nosné konstrukce",
    "assembly.step2_text": "Profily z pozinkovaného plechu (1,3 mm) se spojují šrouby a maticemi. Žádné svařování ani tmelení – stačí šroubovák a klíč. Postup je přehledně popsán v návodu.",
    "assembly.step3_title": "Zasklení",
    "assembly.step3_text": "Skla síly 4 mm se vkládají do profilů a zajišťují speciálními svorkami – bez tmelení. Výměna poškozeného skla je pak velmi snadná.",
    "assembly.step4_title": "Montáž dveří a doplňků",
    "assembly.step4_text": "Nakonec se osadí dveřní křídlo (světlá šířka 62 cm – pohodlný průjezd kolečkem), větrací okno a případné příslušenství jako kapková závlaha nebo automatický otvírač oken.",
    "assembly.cta_title": "Nechcete montovat sami?",
    "assembly.cta_text": "Zajistíme kompletní montáž přímo na Vašem pozemku. Cena dle velikosti a vzdálenosti – individuální dohoda.",
    "assembly.cta_btn": "Poptat montáž →",

    // Pricing
    "pricing.title": "Ceník skleníků",
    "pricing.subtitle": "Ceny jsou uvedeny včetně skla a 21% DPH. Platné od 1. 2. 2025.",
    "pricing.tab_greenhouses": "Skleníky",
    "pricing.tab_bases": "Základové rámy",
    "pricing.tab_accessories": "Příslušenství",
    "pricing.th_model": "Model",
    "pricing.th_size": "Rozměr",
    "pricing.th_price": "Cena",
    "pricing.th_frame_type": "Typ rámu",
    "pricing.th_length": "Délka",
    "pricing.th_item": "Položka",
    "pricing.th_desc": "Popis",
    "pricing.acc_opener": "Automatický otvírač oken",
    "pricing.acc_opener_desc": "Termostatický otvírač střešního okna",
    "pricing.acc_delivery": "Doprava",
    "pricing.acc_delivery_desc": "Paušál kamkoli po ČR",
    "pricing.acc_shelf": "Držák poličky",
    "pricing.acc_shelf_desc": "Uchycení police na profil",
    "pricing.acc_irrigation": "Kapková závlaha",
    "pricing.acc_irrigation_desc": "Kompletní sada do skleníku",
    "pricing.acc_paint": "Speciální barva",
    "pricing.acc_paint_desc": "Akrylátová barva na profily",
    "pricing.acc_shelf_price": "30 Kč / ks",
    "pricing.acc_onrequest": "Na dotaz",
    "pricing.note": 'Ceny jsou orientační a platné od 1. 2. 2025, vč. skla a 21% DPH. Přesnou cenu Vám sdělíme po upřesnění požadavků.<br/>Skleníky lze prodloužit po 1 metru – CENTRÁL/OPTIMÁL <strong class="pricing-highlight">+4 550 Kč/m</strong>, MAXIMÁL <strong class="pricing-highlight">+5 550 Kč/m</strong>.',

    // Services
    "services.title": "Naše služby",
    "services.subtitle": "Kromě skleníků nabízíme kompletní servis – od dopravy až po profesionální montáž.",
    "services.s1_title": "Doprava po celé ČR",
    "services.s1_text": "Vlastní doprava kamkoli po České republice. Dodací lhůta 2–6 týdnů dle sezóny. Osobní odběr možný v Nymburce.",
    "services.s1_price": "1 700 Kč paušál",
    "services.s2_title": "Profesionální montáž",
    "services.s2_text": "Stavbu skleníku zajistíme přímo na Vašem pozemku. Cena montáže dle velikosti a lokality – individuální dohoda.",
    "services.s2_price": "Dle dohody",
    "services.s3_title": "Kapková závlaha",
    "services.s3_text": "Kompletní sada kapkové závlahy do skleníku. Efektivní zavlažování přímo ke kořenům rostlin.",
    "services.s3_price": "Na dotaz",
    "services.s4_title": "Sklenářství",
    "services.s4_text": "Řezání, broušení a vrtání skla na míru. Náhradní skla pro opravy a výměny. Profesionální sklenářské služby.",
    "services.s4_price": "Na dotaz",

    // History
    "history.label": "Rodinná tradice",
    "history.title": "Sklenářství Tobiáš<br/>od roku 1926",
    "history.text1": "Firma Daniel Tobiáš navazuje na dlouholetou rodinnou tradici sklenářského řemesla, která sahá až do roku 1926. Přes devadesát let zkušeností a znalosti materiálů nám umožňují nabízet skleníky špičkové kvality za bezkonkurenční ceny.",
    "history.text2": 'Kromě skleníků provozujeme kompletní <strong>sklenářství</strong> – řezání, broušení a vrtání skla na míru, náhradní skla pro opravy a výměny. Vše pod jednou střechou v Nymburce.',
    "history.stat1_label": "Rok založení",
    "history.stat2_label": "Let zkušeností",
    "history.stat3_label": "Český výrobce",
    "history.badge_subtitle": "Certifikát",
    "history.badge_item1": "Český výrobek",
    "history.badge_item2": "Český dodavatel",
    "history.badge_item3": "Česká kvalita",
    "history.cert_title": "Diplom s právem ražení stříbrné medaile",
    "history.cert_text": "Uděleno firmě J. Tobiáš Nymburk za vynikající jakost vystavených výrobků na I. výstavním trhu \u201eČeského ráje\u201c v Jičíně.",

    // Gallery
    "gallery.title": "Fotogalerie realizací",
    "gallery.subtitle": "Naše skleníky u spokojených zákazníků po celé České republice.",
    "gallery.cap_realization": "Realizace skleníku",
    "gallery.cap_customer": "Skleník u zákazníka",
    "gallery.cap_garden": "Zahradní skleník",
    "gallery.cap_garden2": "Realizace na zahradě",
    "gallery.cap_running": "Skleník v provozu",
    "gallery.cap_detail": "Detail konstrukce",
    "gallery.cap_happy": "Spokojený zákazník",
    "gallery.cap_leanto": "Přístěnný skleník",
    "gallery.cap_plot": "Skleník na pozemku",
    "gallery.cap_glazing": "Kvalitní zasklení",
    "gallery.cap_winter": "Skleník v zimě",
    "gallery.cap_profile": "Detail profilu",

    // FAQ
    "faq.title": "Časté dotazy",
    "faq.subtitle": "Odpovědi na nejčastěji kladené otázky ohledně skleníků Tobiáš.",
    "faq.q1": "Jsou skleníky dodávány i se sklem?",
    "faq.a1": 'Ano, ceny v ceníku jsou uváděny <strong>včetně skla</strong> a 21% DPH. Skla jsou zahradnická, síly 4 mm – buď čirá, nebo rozptylová Helios pro rovnoměrné osvětlení rostlin.',
    "faq.q2": "Jak dlouho trvá dodání skleníku?",
    "faq.a2": 'Dodací lhůta je <strong>2–6 týdnů</strong> v závislosti na sezóně. V jarních měsících (březen–květen) bývá poptávka nejvyšší a lhůty delší. Přesný termín upřesníme při objednávce.',
    "faq.q3": "Mohu si nechat skleník prodloužit?",
    "faq.a3": 'Ano, všechny modely lze prodloužit o <strong>1 metr</strong> nebo násobek. Příplatek za každý metr délky je u modelů CENTRÁL/OPTIMÁL cca 4 550 Kč/m a u MAXIMÁLU cca 5 550 Kč/m (vč. DPH).',
    "faq.q4": "Je montáž skleníku složitá?",
    "faq.a4": 'Skleník Tobiáš je navržen jako jednoduchá <strong>stavebnice</strong> – vše se spojuje šrouby a maticemi, bez svařování a bez tmelení. Průměrný zákazník zvládne montáž menšího modelu za jeden den s pomocí druhé osoby. Samozřejmě nabízíme i <a href="#contact">profesionální montáž</a>.',
    "faq.q5": "Jaký základ skleník potřebuje?",
    "faq.a5": 'Skleník lze osadit na <strong>betonové zdi, dřevěné trámy nebo betonové patky</strong>. Nabízíme také speciální kovový základový rám z 3mm oceli (práškově lakovaný) – viz ceník základových rámů.',
    "faq.q6": "Jaká je cena dopravy?",
    "faq.a6": 'Doprava je paušální – <strong>1 700 Kč</strong> kamkoli po České republice. Osobní odběr je možný zdarma v Nymburce.',
    "faq.q7": "Nabízíte náhradní skla?",
    "faq.a7": 'Ano, jako sklenářství poskytujeme <strong>náhradní skla</strong> pro opravy i výměny. Díky beztmelému systému uchycení zvládnete výměnu skla sami bez odborné pomoci.',

    // Contact
    "contact.title": "Kontakt a objednávky",
    "contact.subtitle": "Objednávka je předběžná – nic Vás nezavazuje. Zavoláme, probereme Vaše přání a sdělíme konečnou cenu.",
    "contact.person": "Daniel Tobiáš",
    "contact.phone_title": "Telefon",
    "contact.email_title": "E-mail",
    "contact.ic_title": "IČ",
    "contact.map_link": "Otevřít v Mapách →",
    "contact.form_title": "Nezávazná poptávka",
    "contact.form_note": "Formulář nás osloví přímo – zavoláme zpět do 1–2 pracovních dnů.",
    "contact.label_name": "Jméno a příjmení *",
    "contact.label_phone": "Telefon *",
    "contact.label_email": "E-mail",
    "contact.label_model": "Typ skleníku",
    "contact.label_message": "Zpráva / Vaše požadavky",
    "contact.placeholder_name": "Jan Novák",
    "contact.placeholder_phone": "+420 xxx xxx xxx",
    "contact.placeholder_email": "vas@email.cz",
    "contact.placeholder_model": "Vyberte model...",
    "contact.placeholder_message": "Popište Vaše požadavky – rozměr, délka, doplňky, dotazy...",
    "contact.submit": "Odeslat poptávku →",
    "contact.submitting": "Odesílám...",
    "contact.success": "✅ Poptávka odeslána! Ozveme se Vám brzy.",
    "contact.error": '❌ Něco se pokazilo. Zkuste nám napsat přímo na <a href="mailto:info@sklenikytobias.cz">info@sklenikytobias.cz</a>',
    "contact.opt_central": "CENTRÁL (š. 2,0 m)",
    "contact.opt_optimal": "OPTIMÁL (š. 2,5 m)",
    "contact.opt_maximal": "MAXIMÁL (š. 3,0 m)",
    "contact.opt_satelit2": "SATELIT 2 (š. 2,0 m)",
    "contact.opt_satelit24": "SATELIT 2.4 (š. 2,4 m)",

    // Footer
    "footer.brand_text": "Kvalitní šroubované skleníky za nejlepší ceny na českém trhu. Firma Daniel Tobiáš – Váš spolehlivý partner pro pěstování.",
    "footer.nav_title": "Navigace",
    "footer.contact_title": "Kontakt",
    "footer.orders": "Objednávky",
    "footer.copyright": "Daniel Tobiáš – Skleníky Tobiáš. Všechna práva vyhrazena.",

    // Lightbox
    "lightbox.close": "Zavřít",
    "lightbox.prev": "Předchozí",
    "lightbox.next": "Další",
    "scrolltop": "Nahoru",
  },

  // ========== ENGLISH ==========
  en: {
    // Meta
    "meta.title": "Tobiáš Greenhouses – Bolted Greenhouses with Putty-Free Glazing",
    "meta.description": "Tobiáš Greenhouses – quality bolted greenhouses with putty-free glazing. The most affordable greenhouses on the Czech market with solid construction. Daniel Tobiáš, Nymburk.",

    // Nav
    "nav.logo": "Tobiáš Greenhouses",
    "nav.about": "About",
    "nav.products": "Greenhouses",
    "nav.construction": "Construction",
    "nav.assembly": "Assembly",
    "nav.pricing": "Pricing",
    "nav.services": "Services",
    "nav.history": "Company",
    "nav.gallery": "Gallery",
    "nav.faq": "FAQ",
    "nav.contact": "Contact",

    // Hero
    "hero.badge": "Current price promotion – save up to $39",
    "hero.title": 'Quality <span>bolted greenhouses</span> at the best prices',
    "hero.text": "Daniel Tobiáš offers you solid, high-quality and at the same time the most affordable greenhouses on the Czech market. We deliver as a simple kit that you can easily assemble on site.",
    "hero.btn_products": "Browse greenhouses →",
    "hero.btn_contact": "Non-binding order",
    "hero.stat_models_label": "Greenhouse models",
    "hero.stat_delivery_label": "Delivery – flat rate in CZ",
    "hero.stat_since": "since 1926",
    "hero.stat_tradition_label": "Family tradition",
    "hero.stat_glass_label": "Horticultural glass",

    // About
    "about.title": "Why choose Tobiáš greenhouses?",
    "about.subtitle": "Our greenhouses have a stronger construction than the competition, yet remain among the most affordable on the market.",
    "about.badge1_title": "Czech product",
    "about.badge1_text": "Czech supplier · Czech quality",
    "about.badge2_title": "Family business since 1926",
    "about.badge2_text": "Tobiáš Glaziery – over 100 years of experience",
    "about.badge3_title": "Unbeatable prices",
    "about.badge3_text": "The most affordable greenhouses on the Czech market",
    "about.f1_title": "Bolted construction",
    "about.f1_text": "Profiles made of 1.3 mm galvanized sheet metal assembled with bolts and nuts. No welding – maximum strength and easy assembly.",
    "about.f2_title": "Putty-free glazing",
    "about.f2_text": "4 mm glass is not puttied but secured with special clips. Easy replacement and maintenance without putty.",
    "about.f3_title": "Variable dimensions",
    "about.f3_text": "Each model can be extended in 1-meter sections. Get a greenhouse tailored exactly to your garden.",
    "about.f4_title": "Wide doors 62 cm",
    "about.f4_text": "Clear door width of 62 cm allows comfortable passage with a wheelbarrow. Practical solution for everyday work.",
    "about.f5_title": "Optimal light",
    "about.f5_text": "Side walls with a 15° slope for better light transmission. Wall height 1.42 m – plant taller vegetables even at the edges.",
    "about.f6_title": "Delivery and assembly",
    "about.f6_text": "We deliver the greenhouse to your home at a flat rate. We also provide complete assembly on site.",

    // Products
    "products.title": "Our greenhouses",
    "products.subtitle": "Choose from 5 models, each extendable in 1-meter sections. Clear or diffused Helios glass.",
    "products.badge_compact": "Compact",
    "products.badge_popular": "Popular",
    "products.badge_spacious": "Spacious",
    "products.badge_leanto": "Lean-to",
    "products.badge_leanto_xl": "Lean-to XL",
    "products.width": "Width",
    "products.height": "Height",
    "products.doors": "Doors",
    "products.vat": "incl. VAT",
    "products.inquiry": "Non-binding inquiry",
    "products.central_desc": "Compact model ideal for smaller gardens. Offers enough space for basic growing.",
    "products.optimal_desc": "The most popular model with a balanced price-to-space ratio. The ideal choice for most gardeners.",
    "products.maximal_desc": "The largest freestanding model for demanding growers. Maximum space for your harvest.",
    "products.satelit2_desc": "Lean-to model designed to be attached to a wall. A compact solution that saves garden space.",
    "products.satelit24_desc": "A wider lean-to model with more space. Ideal for more demanding growers with smaller gardens.",

    // Construction
    "construction.title": "Construction and technology",
    "construction.subtitle": "Our greenhouses are designed for maximum strength and easy assembly. A \u201cLego for adults\u201d system.",
    "construction.f1_title": "Galvanized profiles 1.3 mm",
    "construction.f1_text": "Construction from 1.3 mm galvanized sheet metal. All joints bolted – maximum durability and corrosion resistance.",
    "construction.f2_title": "Horticultural glass 4 mm",
    "construction.f2_text": "Glass specially developed for horticultural purposes. Choice between clear glass and diffused Helios for even lighting.",
    "construction.f3_title": "15° side wall slope",
    "construction.f3_text": "Optimized slope for maximum light transmission. 1.42 m walls – room for taller plants right from the edge.",
    "construction.f4_title": "Variable foundations",
    "construction.f4_text": "Installation on concrete walls, wooden beams, concrete footings, or a special powder-coated 3 mm steel base frame.",
    "construction.f5_title": "Modular system",
    "construction.f5_text": "Extension in 1-meter increments. Simple kit – assemble it yourself or order our professional assembly.",

    // Assembly
    "assembly.title": "Greenhouse assembly",
    "assembly.subtitle": "The Tobiáš greenhouse is like a children's building set – you can do it yourself or we'll be happy to help.",
    "assembly.step1_title": "Foundation preparation",
    "assembly.step1_text": "The greenhouse can be placed on concrete walls, wooden beams, concrete footings, or a special powder-coated 3 mm steel base frame. The foundation must be level and solid.",
    "assembly.step2_title": "Assembling the frame",
    "assembly.step2_text": "Galvanized sheet metal profiles (1.3 mm) are joined with bolts and nuts. No welding or putty – just a screwdriver and wrench. The procedure is clearly described in the manual.",
    "assembly.step3_title": "Glazing",
    "assembly.step3_text": "4 mm glass panes are inserted into profiles and secured with special clips – no putty. Replacing damaged glass is then very easy.",
    "assembly.step4_title": "Door and accessory installation",
    "assembly.step4_text": "Finally, the door leaf is fitted (clear width 62 cm – comfortable wheelbarrow passage), vent window, and optional accessories such as drip irrigation or automatic window openers.",
    "assembly.cta_title": "Don't want to assemble it yourself?",
    "assembly.cta_text": "We provide complete assembly right on your property. Price depends on size and distance – individual agreement.",
    "assembly.cta_btn": "Request assembly →",

    // Pricing
    "pricing.title": "Greenhouse pricing",
    "pricing.subtitle": "Prices include glass and 21% VAT. Valid from 1 Feb 2025.",
    "pricing.tab_greenhouses": "Greenhouses",
    "pricing.tab_bases": "Base frames",
    "pricing.tab_accessories": "Accessories",
    "pricing.th_model": "Model",
    "pricing.th_size": "Dimensions",
    "pricing.th_price": "Price",
    "pricing.th_frame_type": "Frame type",
    "pricing.th_length": "Length",
    "pricing.th_item": "Item",
    "pricing.th_desc": "Description",
    "pricing.acc_opener": "Automatic window opener",
    "pricing.acc_opener_desc": "Thermostatic roof window opener",
    "pricing.acc_delivery": "Delivery",
    "pricing.acc_delivery_desc": "Flat rate anywhere in CZ",
    "pricing.acc_shelf": "Shelf bracket",
    "pricing.acc_shelf_desc": "Shelf mounting on profile",
    "pricing.acc_irrigation": "Drip irrigation",
    "pricing.acc_irrigation_desc": "Complete set for greenhouse",
    "pricing.acc_paint": "Special paint",
    "pricing.acc_paint_desc": "Acrylic paint for profiles",
    "pricing.acc_shelf_price": "$1.30 / pc",
    "pricing.acc_onrequest": "On request",
    "pricing.note": 'Prices are indicative, valid from 1 Feb 2025, incl. glass and 21% VAT. We will provide the exact price after specifying your requirements.<br/>Greenhouses can be extended by 1 meter – CENTRÁL/OPTIMÁL <strong class="pricing-highlight">+$198/m</strong>, MAXIMÁL <strong class="pricing-highlight">+$241/m</strong>.',

    // Services
    "services.title": "Our services",
    "services.subtitle": "In addition to greenhouses, we offer complete service – from delivery to professional assembly.",
    "services.s1_title": "Delivery across the Czech Republic",
    "services.s1_text": "Our own delivery anywhere in the Czech Republic. Delivery time 2–6 weeks depending on the season. Personal pickup available in Nymburk.",
    "services.s1_price": "$74 flat rate",
    "services.s2_title": "Professional assembly",
    "services.s2_text": "We provide greenhouse construction right on your property. Assembly price depends on size and location – individual agreement.",
    "services.s2_price": "By agreement",
    "services.s3_title": "Drip irrigation",
    "services.s3_text": "Complete drip irrigation set for the greenhouse. Efficient watering directly to the roots of plants.",
    "services.s3_price": "On request",
    "services.s4_title": "Glaziery",
    "services.s4_text": "Custom glass cutting, grinding, and drilling. Replacement glass for repairs and exchanges. Professional glaziery services.",
    "services.s4_price": "On request",

    // History
    "history.label": "Family tradition",
    "history.title": "Tobiáš Glaziery<br/>since 1926",
    "history.text1": "The company Daniel Tobiáš builds on a long family tradition of the glazier's craft, dating back to 1926. Over ninety years of experience and knowledge of materials allow us to offer top-quality greenhouses at unbeatable prices.",
    "history.text2": 'In addition to greenhouses, we operate a complete <strong>glaziery</strong> – custom glass cutting, grinding, and drilling, replacement glass for repairs and exchanges. All under one roof in Nymburk.',
    "history.stat1_label": "Year founded",
    "history.stat2_label": "Years of experience",
    "history.stat3_label": "Czech manufacturer",
    "history.badge_subtitle": "Certificate",
    "history.badge_item1": "Czech product",
    "history.badge_item2": "Czech supplier",
    "history.badge_item3": "Czech quality",
    "history.cert_title": "Diploma with the right to mint a silver medal",
    "history.cert_text": "Awarded to the company J. Tobiáš Nymburk for outstanding quality of exhibited products at the 1st exhibition market of \u201cČeský ráj\u201d in Jičín.",

    // Gallery
    "gallery.title": "Photo gallery of realizations",
    "gallery.subtitle": "Our greenhouses at satisfied customers across the Czech Republic.",
    "gallery.cap_realization": "Greenhouse realization",
    "gallery.cap_customer": "Customer's greenhouse",
    "gallery.cap_garden": "Garden greenhouse",
    "gallery.cap_garden2": "Garden realization",
    "gallery.cap_running": "Greenhouse in operation",
    "gallery.cap_detail": "Construction detail",
    "gallery.cap_happy": "Satisfied customer",
    "gallery.cap_leanto": "Lean-to greenhouse",
    "gallery.cap_plot": "Greenhouse on property",
    "gallery.cap_glazing": "Quality glazing",
    "gallery.cap_winter": "Greenhouse in winter",
    "gallery.cap_profile": "Profile detail",

    // FAQ
    "faq.title": "Frequently asked questions",
    "faq.subtitle": "Answers to the most commonly asked questions about Tobiáš greenhouses.",
    "faq.q1": "Are the greenhouses delivered with glass?",
    "faq.a1": 'Yes, the prices in the price list include <strong>glass</strong> and 21% VAT. The glass is horticultural, 4 mm thick – either clear or diffused Helios for even plant illumination.',
    "faq.q2": "How long does delivery take?",
    "faq.a2": 'Delivery time is <strong>2–6 weeks</strong> depending on the season. Demand is highest in spring (March–May) and lead times are longer. We will specify the exact date when ordering.',
    "faq.q3": "Can I have the greenhouse extended?",
    "faq.a3": 'Yes, all models can be extended by <strong>1 meter</strong> or multiples. The surcharge per meter is approximately $198/m for CENTRÁL/OPTIMÁL and $241/m for MAXIMÁL (incl. VAT).',
    "faq.q4": "Is greenhouse assembly difficult?",
    "faq.a4": 'The Tobiáš greenhouse is designed as a simple <strong>building kit</strong> – everything is connected with bolts and nuts, no welding or putty. An average customer can assemble a smaller model in one day with another person\'s help. We also offer <a href="#contact">professional assembly</a>.',
    "faq.q5": "What type of foundation does the greenhouse need?",
    "faq.a5": 'The greenhouse can be placed on <strong>concrete walls, wooden beams, or concrete footings</strong>. We also offer a special powder-coated 3 mm steel base frame – see the base frame pricing.',
    "faq.q6": "What is the delivery cost?",
    "faq.a6": 'Delivery is flat rate – <strong>$74</strong> anywhere in the Czech Republic. Free personal pickup is available in Nymburk.',
    "faq.q7": "Do you offer replacement glass?",
    "faq.a7": 'Yes, as a glaziery we provide <strong>replacement glass</strong> for repairs and exchanges. Thanks to the putty-free mounting system, you can replace the glass yourself without professional help.',

    // Contact
    "contact.title": "Contact and orders",
    "contact.subtitle": "The order is preliminary – it does not commit you to anything. We will call, discuss your wishes, and provide the final price.",
    "contact.person": "Daniel Tobiáš",
    "contact.phone_title": "Phone",
    "contact.email_title": "E-mail",
    "contact.ic_title": "Company ID",
    "contact.map_link": "Open in Maps →",
    "contact.form_title": "Non-binding inquiry",
    "contact.form_note": "The form contacts us directly – we'll call you back within 1–2 business days.",
    "contact.label_name": "Full name *",
    "contact.label_phone": "Phone *",
    "contact.label_email": "E-mail",
    "contact.label_model": "Greenhouse type",
    "contact.label_message": "Message / Your requirements",
    "contact.placeholder_name": "John Smith",
    "contact.placeholder_phone": "+1 xxx xxx xxxx",
    "contact.placeholder_email": "your@email.com",
    "contact.placeholder_model": "Select a model...",
    "contact.placeholder_message": "Describe your requirements – dimensions, length, accessories, questions...",
    "contact.submit": "Send inquiry →",
    "contact.submitting": "Sending...",
    "contact.success": "✅ Inquiry sent! We will get back to you soon.",
    "contact.error": '❌ Something went wrong. Please write to us directly at <a href="mailto:info@sklenikytobias.cz">info@sklenikytobias.cz</a>',
    "contact.opt_central": "CENTRÁL (w. 2.0 m)",
    "contact.opt_optimal": "OPTIMÁL (w. 2.5 m)",
    "contact.opt_maximal": "MAXIMÁL (w. 3.0 m)",
    "contact.opt_satelit2": "SATELIT 2 (w. 2.0 m)",
    "contact.opt_satelit24": "SATELIT 2.4 (w. 2.4 m)",

    // Footer
    "footer.brand_text": "Quality bolted greenhouses at the best prices on the Czech market. Daniel Tobiáš – your reliable partner for growing.",
    "footer.nav_title": "Navigation",
    "footer.contact_title": "Contact",
    "footer.orders": "Orders",
    "footer.copyright": "Daniel Tobiáš – Tobiáš Greenhouses. All rights reserved.",

    // Lightbox
    "lightbox.close": "Close",
    "lightbox.prev": "Previous",
    "lightbox.next": "Next",
    "scrolltop": "Top",
  },

  // ========== GERMAN ==========
  de: {
    // Meta
    "meta.title": "Gewächshäuser Tobiáš – Verschraubte Gewächshäuser mit kittloser Verglasung",
    "meta.description": "Gewächshäuser Tobiáš – hochwertige verschraubte Gewächshäuser mit kittloser Verglasung. Die günstigsten Gewächshäuser auf dem tschechischen Markt. Daniel Tobiáš, Nymburk.",

    // Nav
    "nav.logo": "Gewächshäuser Tobiáš",
    "nav.about": "Über uns",
    "nav.products": "Gewächshäuser",
    "nav.construction": "Konstruktion",
    "nav.assembly": "Montage",
    "nav.pricing": "Preisliste",
    "nav.services": "Leistungen",
    "nav.history": "Unternehmen",
    "nav.gallery": "Galerie",
    "nav.faq": "FAQ",
    "nav.contact": "Kontakt",

    // Hero
    "hero.badge": "Aktuelle Preisaktion – sparen Sie bis zu 36 €",
    "hero.title": 'Hochwertige <span>verschraubte Gewächshäuser</span> zum besten Preis',
    "hero.text": "Die Firma Daniel Tobiáš bietet Ihnen solide, hochwertige und gleichzeitig die günstigsten Gewächshäuser auf dem tschechischen Markt. Wir liefern als einfachen Bausatz, den Sie bequem vor Ort montieren können.",
    "hero.btn_products": "Gewächshäuser ansehen →",
    "hero.btn_contact": "Unverbindliche Bestellung",
    "hero.stat_models_label": "Gewächshausmodelle",
    "hero.stat_delivery_label": "Lieferung – Pauschale in CZ",
    "hero.stat_since": "seit 1926",
    "hero.stat_tradition_label": "Familientradition",
    "hero.stat_glass_label": "Gartenglas",

    // About
    "about.title": "Warum Tobiáš Gewächshäuser wählen?",
    "about.subtitle": "Unsere Gewächshäuser haben eine stärkere Konstruktion als die Konkurrenz und gehören dennoch zu den günstigsten auf dem Markt.",
    "about.badge1_title": "Tschechisches Produkt",
    "about.badge1_text": "Tschechischer Lieferant · Tschechische Qualität",
    "about.badge2_title": "Familienunternehmen seit 1926",
    "about.badge2_text": "Glaserei Tobiáš – über 100 Jahre Erfahrung",
    "about.badge3_title": "Konkurrenzlose Preise",
    "about.badge3_text": "Die günstigsten Gewächshäuser auf dem tschechischen Markt",
    "about.f1_title": "Verschraubte Konstruktion",
    "about.f1_text": "Profile aus 1,3 mm verzinktem Blech, verbunden mit Schrauben und Muttern. Kein Schweißen – maximale Festigkeit und einfache Montage.",
    "about.f2_title": "Kittlose Verglasung",
    "about.f2_text": "4 mm Glas wird nicht gekittet, sondern mit speziellen Klemmen befestigt. Einfacher Austausch und Wartung ohne Kitten.",
    "about.f3_title": "Variable Abmessungen",
    "about.f3_text": "Jedes Modell kann in 1-Meter-Abschnitten verlängert werden. Ein Gewächshaus genau nach Maß für Ihren Garten.",
    "about.f4_title": "Breite Türen 62 cm",
    "about.f4_text": "Lichte Türbreite von 62 cm ermöglicht bequemes Durchfahren mit einer Schubkarre. Praktische Lösung für die tägliche Arbeit.",
    "about.f5_title": "Optimales Licht",
    "about.f5_text": "Seitenwände mit 15° Neigung für bessere Lichtdurchlässigkeit. Wandhöhe 1,42 m – auch am Rand höheres Gemüse pflanzen.",
    "about.f6_title": "Lieferung und Montage",
    "about.f6_text": "Wir liefern das Gewächshaus zu einem Pauschalpreis zu Ihnen nach Hause. Wir bieten auch eine komplette Montage vor Ort.",

    // Products
    "products.title": "Unsere Gewächshäuser",
    "products.subtitle": "Wählen Sie aus 5 Modellen, jedes verlängerbar in 1-Meter-Abschnitten. Klares oder diffuses Helios-Glas.",
    "products.badge_compact": "Kompakt",
    "products.badge_popular": "Beliebt",
    "products.badge_spacious": "Geräumig",
    "products.badge_leanto": "Anbau",
    "products.badge_leanto_xl": "Anbau XL",
    "products.width": "Breite",
    "products.height": "Höhe",
    "products.doors": "Türen",
    "products.vat": "inkl. MwSt.",
    "products.inquiry": "Unverbindliche Anfrage",
    "products.central_desc": "Kompaktes Modell ideal für kleinere Gärten. Bietet genügend Platz für den Grundanbau.",
    "products.optimal_desc": "Das beliebteste Modell mit ausgewogenem Preis-Raum-Verhältnis. Die ideale Wahl für die meisten Gärtner.",
    "products.maximal_desc": "Das größte freistehende Modell für anspruchsvolle Züchter. Maximaler Platz für Ihre Ernte.",
    "products.satelit2_desc": "Anbaumodell zum Anlehnen an eine Hauswand. Eine kompakte Lösung, die Gartenplatz spart.",
    "products.satelit24_desc": "Ein breiteres Anbaumodell mit mehr Platz. Ideal für anspruchsvollere Züchter mit kleinerem Garten.",

    // Construction
    "construction.title": "Konstruktion und Technologie",
    "construction.subtitle": "Unsere Gew\u00e4chsh\u00e4user sind auf maximale Festigkeit und einfache Montage ausgelegt. Ein \u201eLego f\u00fcr Erwachsene\u201c-System.",
    "construction.f1_title": "Verzinkte Profile 1,3 mm",
    "construction.f1_text": "Konstruktion aus 1,3 mm verzinktem Blech. Alle Verbindungen verschraubt – maximale Lebensdauer und Korrosionsbeständigkeit.",
    "construction.f2_title": "Gartenglas 4 mm",
    "construction.f2_text": "Speziell für Gartenzwecke entwickeltes Glas. Wahl zwischen Klarglas und Streuglas Helios für gleichmäßige Beleuchtung.",
    "construction.f3_title": "15° Seitenwandneigung",
    "construction.f3_text": "Optimierte Neigung für maximale Lichtdurchlässigkeit. 1,42 m Wände – Platz für höhere Pflanzen direkt vom Rand.",
    "construction.f4_title": "Variable Fundamente",
    "construction.f4_text": "Aufstellung auf Betonmauern, Holzbalken, Betonfundamenten oder speziellem pulverbeschichtetem 3-mm-Stahlgrundrahmen.",
    "construction.f5_title": "Modulares System",
    "construction.f5_text": "Verlängerung in 1-Meter-Schritten. Einfacher Bausatz – montieren Sie selbst oder bestellen Sie unsere professionelle Montage.",

    // Assembly
    "assembly.title": "Gewächshausmontage",
    "assembly.subtitle": "Das Gewächshaus Tobiáš ist wie ein Kinderbaukasten – Sie schaffen es selbst oder wir helfen Ihnen gerne.",
    "assembly.step1_title": "Fundamentvorbereitung",
    "assembly.step1_text": "Das Gewächshaus kann auf Betonmauern, Holzbalken, Betonfundamenten oder einem speziellen pulverbeschichteten 3-mm-Stahlgrundrahmen aufgestellt werden. Das Fundament muss eben und fest sein.",
    "assembly.step2_title": "Aufbau der Tragkonstruktion",
    "assembly.step2_text": "Profile aus verzinktem Blech (1,3 mm) werden mit Schrauben und Muttern verbunden. Kein Schweißen oder Kitten – nur Schraubendreher und Schlüssel nötig. Der Ablauf ist in der Anleitung übersichtlich beschrieben.",
    "assembly.step3_title": "Verglasung",
    "assembly.step3_text": "4 mm Glasscheiben werden in die Profile eingesetzt und mit speziellen Klemmen gesichert – ohne Kitten. Der Austausch beschädigter Scheiben ist dann sehr einfach.",
    "assembly.step4_title": "Tür- und Zubehörmontage",
    "assembly.step4_text": "Zum Schluss wird das Türblatt (lichte Breite 62 cm – bequeme Schubkarrendurchfahrt), das Lüftungsfenster und ggf. Zubehör wie Tropfbewässerung oder automatische Fensteröffner montiert.",
    "assembly.cta_title": "Möchten Sie nicht selbst montieren?",
    "assembly.cta_text": "Wir bieten eine komplette Montage direkt auf Ihrem Grundstück. Preis nach Größe und Entfernung – individuelle Vereinbarung.",
    "assembly.cta_btn": "Montage anfragen →",

    // Pricing
    "pricing.title": "Preisliste der Gewächshäuser",
    "pricing.subtitle": "Preise inklusive Glas und 21% MwSt. Gültig ab 1. 2. 2025.",
    "pricing.tab_greenhouses": "Gewächshäuser",
    "pricing.tab_bases": "Grundrahmen",
    "pricing.tab_accessories": "Zubehör",
    "pricing.th_model": "Modell",
    "pricing.th_size": "Maße",
    "pricing.th_price": "Preis",
    "pricing.th_frame_type": "Rahmentyp",
    "pricing.th_length": "Länge",
    "pricing.th_item": "Artikel",
    "pricing.th_desc": "Beschreibung",
    "pricing.acc_opener": "Automatischer Fensteröffner",
    "pricing.acc_opener_desc": "Thermostatischer Dachfensteröffner",
    "pricing.acc_delivery": "Lieferung",
    "pricing.acc_delivery_desc": "Pauschal überall in CZ",
    "pricing.acc_shelf": "Regalhalter",
    "pricing.acc_shelf_desc": "Regalbefestigung am Profil",
    "pricing.acc_irrigation": "Tropfbewässerung",
    "pricing.acc_irrigation_desc": "Komplettset für Gewächshaus",
    "pricing.acc_paint": "Spezialfarbe",
    "pricing.acc_paint_desc": "Acrylfarbe für Profile",
    "pricing.acc_shelf_price": "1,20 € / Stk.",
    "pricing.acc_onrequest": "Auf Anfrage",
    "pricing.note": 'Preise sind Richtwerte, gültig ab 1. 2. 2025, inkl. Glas und 21% MwSt. Den genauen Preis teilen wir Ihnen nach Klärung Ihrer Anforderungen mit.<br/>Gewächshäuser können um 1 Meter verlängert werden – CENTRÁL/OPTIMÁL <strong class="pricing-highlight">+182 €/m</strong>, MAXIMÁL <strong class="pricing-highlight">+222 €/m</strong>.',

    // Services
    "services.title": "Unsere Leistungen",
    "services.subtitle": "Neben Gewächshäusern bieten wir einen Komplettservice – von der Lieferung bis zur professionellen Montage.",
    "services.s1_title": "Lieferung in der gesamten CZ",
    "services.s1_text": "Eigene Lieferung überall in der Tschechischen Republik. Lieferzeit 2–6 Wochen je nach Saison. Selbstabholung in Nymburk möglich.",
    "services.s1_price": "68 € Pauschale",
    "services.s2_title": "Professionelle Montage",
    "services.s2_text": "Wir bauen das Gewächshaus direkt auf Ihrem Grundstück auf. Montagepreis nach Größe und Standort – individuelle Vereinbarung.",
    "services.s2_price": "Nach Vereinbarung",
    "services.s3_title": "Tropfbewässerung",
    "services.s3_text": "Komplettes Tropfbewässerungsset für das Gewächshaus. Effiziente Bewässerung direkt an den Pflanzenwurzeln.",
    "services.s3_price": "Auf Anfrage",
    "services.s4_title": "Glaserei",
    "services.s4_text": "Maßgeschnittenes Glas, Schleifen und Bohren. Ersatzglas für Reparaturen und Austausch. Professionelle Glasereidienste.",
    "services.s4_price": "Auf Anfrage",

    // History
    "history.label": "Familientradition",
    "history.title": "Glaserei Tobiáš<br/>seit 1926",
    "history.text1": "Die Firma Daniel Tobiáš knüpft an eine langjährige Familientradition des Glaserhandwerks an, die bis ins Jahr 1926 zurückreicht. Über neunzig Jahre Erfahrung und Materialkenntnis ermöglichen es uns, Gewächshäuser höchster Qualität zu konkurrenzlosen Preisen anzubieten.",
    "history.text2": 'Neben Gewächshäusern betreiben wir eine komplette <strong>Glaserei</strong> – maßgeschnittenes Glas, Schleifen und Bohren, Ersatzglas für Reparaturen und Austausch. Alles unter einem Dach in Nymburk.',
    "history.stat1_label": "Gründungsjahr",
    "history.stat2_label": "Jahre Erfahrung",
    "history.stat3_label": "Tschechischer Hersteller",
    "history.badge_subtitle": "Zertifikat",
    "history.badge_item1": "Tschechisches Produkt",
    "history.badge_item2": "Tschechischer Lieferant",
    "history.badge_item3": "Tschechische Qualität",
    "history.cert_title": "Diplom mit dem Recht zur Prägung einer Silbermedaille",
    "history.cert_text": "Verliehen an die Firma J. Tobiáš Nymburk für hervorragende Qualität der ausgestellten Produkte auf dem 1. Messemarkt von \u201eČeský ráj\u201c in Jičín.",

    // Gallery
    "gallery.title": "Fotogalerie der Realisierungen",
    "gallery.subtitle": "Unsere Gewächshäuser bei zufriedenen Kunden in der gesamten Tschechischen Republik.",
    "gallery.cap_realization": "Gewächshausrealisierung",
    "gallery.cap_customer": "Kundengewächshaus",
    "gallery.cap_garden": "Gartengewächshaus",
    "gallery.cap_garden2": "Gartenrealisierung",
    "gallery.cap_running": "Gewächshaus in Betrieb",
    "gallery.cap_detail": "Konstruktionsdetail",
    "gallery.cap_happy": "Zufriedener Kunde",
    "gallery.cap_leanto": "Anbaugewächshaus",
    "gallery.cap_plot": "Gewächshaus auf dem Grundstück",
    "gallery.cap_glazing": "Hochwertige Verglasung",
    "gallery.cap_winter": "Gewächshaus im Winter",
    "gallery.cap_profile": "Profildetail",

    // FAQ
    "faq.title": "Häufig gestellte Fragen",
    "faq.subtitle": "Antworten auf die am häufigsten gestellten Fragen zu Tobiáš Gewächshäusern.",
    "faq.q1": "Werden die Gewächshäuser mit Glas geliefert?",
    "faq.a1": 'Ja, die Preise in der Preisliste verstehen sich <strong>inklusive Glas</strong> und 21% MwSt. Das Glas ist Gartenglas, 4 mm stark – entweder klar oder Streuglas Helios für gleichmäßige Pflanzenbeleuchtung.',
    "faq.q2": "Wie lange dauert die Lieferung?",
    "faq.a2": 'Die Lieferzeit beträgt <strong>2–6 Wochen</strong> je nach Saison. In den Frühjahrsmonaten (März–Mai) ist die Nachfrage am höchsten und die Lieferzeiten länger. Den genauen Termin klären wir bei der Bestellung.',
    "faq.q3": "Kann ich das Gewächshaus verlängern lassen?",
    "faq.a3": 'Ja, alle Modelle können um <strong>1 Meter</strong> oder Vielfache davon verlängert werden. Der Aufpreis pro Meter beträgt bei CENTRÁL/OPTIMÁL ca. 182 €/m und bei MAXIMÁL ca. 222 €/m (inkl. MwSt.).',
    "faq.q4": "Ist die Montage des Gewächshauses schwierig?",
    "faq.a4": 'Das Gewächshaus Tobiáš ist als einfacher <strong>Bausatz</strong> konzipiert – alles wird mit Schrauben und Muttern verbunden, ohne Schweißen und ohne Kitten. Ein durchschnittlicher Kunde schafft die Montage eines kleineren Modells an einem Tag mit Hilfe einer zweiten Person. Wir bieten auch <a href="#contact">professionelle Montage</a> an.',
    "faq.q5": "Welches Fundament braucht das Gewächshaus?",
    "faq.a5": 'Das Gewächshaus kann auf <strong>Betonmauern, Holzbalken oder Betonfundamenten</strong> aufgestellt werden. Wir bieten auch einen speziellen pulverbeschichteten 3-mm-Stahlgrundrahmen an – siehe Preisliste der Grundrahmen.',
    "faq.q6": "Was kostet die Lieferung?",
    "faq.a6": 'Die Lieferung ist pauschal – <strong>68 €</strong> überall in der Tschechischen Republik. Kostenlose Selbstabholung ist in Nymburk möglich.',
    "faq.q7": "Bieten Sie Ersatzglas an?",
    "faq.a7": 'Ja, als Glaserei bieten wir <strong>Ersatzglas</strong> für Reparaturen und Austausch. Dank des kittlosen Befestigungssystems können Sie das Glas selbst ohne Fachkenntnisse austauschen.',

    // Contact
    "contact.title": "Kontakt und Bestellungen",
    "contact.subtitle": "Die Bestellung ist unverbindlich – sie verpflichtet Sie zu nichts. Wir rufen an, besprechen Ihre Wünsche und nennen den Endpreis.",
    "contact.person": "Daniel Tobiáš",
    "contact.phone_title": "Telefon",
    "contact.email_title": "E-Mail",
    "contact.ic_title": "Unternehmens-ID",
    "contact.map_link": "In Karten öffnen →",
    "contact.form_title": "Unverbindliche Anfrage",
    "contact.form_note": "Das Formular kontaktiert uns direkt – wir rufen Sie innerhalb von 1–2 Werktagen zurück.",
    "contact.label_name": "Vor- und Nachname *",
    "contact.label_phone": "Telefon *",
    "contact.label_email": "E-Mail",
    "contact.label_model": "Gewächshaustyp",
    "contact.label_message": "Nachricht / Ihre Anforderungen",
    "contact.placeholder_name": "Max Mustermann",
    "contact.placeholder_phone": "+49 xxx xxxxxxx",
    "contact.placeholder_email": "ihre@email.de",
    "contact.placeholder_model": "Modell wählen...",
    "contact.placeholder_message": "Beschreiben Sie Ihre Anforderungen – Maße, Länge, Zubehör, Fragen...",
    "contact.submit": "Anfrage senden →",
    "contact.submitting": "Wird gesendet...",
    "contact.success": "✅ Anfrage gesendet! Wir melden uns bald bei Ihnen.",
    "contact.error": '❌ Etwas ist schiefgelaufen. Schreiben Sie uns direkt an <a href="mailto:info@sklenikytobias.cz">info@sklenikytobias.cz</a>',
    "contact.opt_central": "CENTRÁL (B. 2,0 m)",
    "contact.opt_optimal": "OPTIMÁL (B. 2,5 m)",
    "contact.opt_maximal": "MAXIMÁL (B. 3,0 m)",
    "contact.opt_satelit2": "SATELIT 2 (B. 2,0 m)",
    "contact.opt_satelit24": "SATELIT 2.4 (B. 2,4 m)",

    // Footer
    "footer.brand_text": "Hochwertige verschraubte Gewächshäuser zu den besten Preisen auf dem tschechischen Markt. Daniel Tobiáš – Ihr zuverlässiger Partner für den Anbau.",
    "footer.nav_title": "Navigation",
    "footer.contact_title": "Kontakt",
    "footer.orders": "Bestellungen",
    "footer.copyright": "Daniel Tobiáš – Gewächshäuser Tobiáš. Alle Rechte vorbehalten.",

    // Lightbox
    "lightbox.close": "Schließen",
    "lightbox.prev": "Zurück",
    "lightbox.next": "Weiter",
    "scrolltop": "Nach oben",
  },
};

// ===== i18n ENGINE =====
let currentLang = localStorage.getItem("lang") || "cs";

// Simple HTML sanitizer – only allow safe tags and attributes
function sanitizeHTML(html) {
  var temp = document.createElement("div");
  temp.innerHTML = html;
  temp.querySelectorAll("*").forEach(function (el) {
    var tag = el.tagName.toLowerCase();
    var allowed = ["strong", "em", "br", "a", "span", "b", "i"];
    if (allowed.indexOf(tag) === -1) {
      el.replaceWith(document.createTextNode(el.textContent));
      return;
    }
    // Only allow safe attributes
    Array.from(el.attributes).forEach(function (attr) {
      if (tag === "a" && (attr.name === "href" || attr.name === "target" || attr.name === "rel")) {
        // Validate href – only allow http(s), mailto, tel, and anchor links
        if (attr.name === "href") {
          var val = attr.value.trim().toLowerCase();
          if (!(val.startsWith("http://") || val.startsWith("https://") || val.startsWith("mailto:") || val.startsWith("tel:") || val.startsWith("#"))) {
            el.removeAttribute(attr.name);
          }
        }
        return;
      }
      if (attr.name === "class") return;
      el.removeAttribute(attr.name);
    });
  });
  return temp.innerHTML;
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;

  const t = translations[lang];

  // Update page title & meta
  if (t["meta.title"]) document.title = t["meta.title"];
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc && t["meta.description"]) metaDesc.content = t["meta.description"];

  // Translate [data-i18n] → textContent
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) el.textContent = t[key];
  });

  // Translate [data-i18n-html] → innerHTML (sanitized)
  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (t[key] !== undefined) el.innerHTML = sanitizeHTML(t[key]);
  });

  // Translate placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (t[key] !== undefined) el.placeholder = t[key];
  });

  // Translate aria-labels
  document.querySelectorAll("[data-i18n-aria]").forEach((el) => {
    const key = el.getAttribute("data-i18n-aria");
    if (t[key] !== undefined) el.setAttribute("aria-label", t[key]);
  });

  // Convert price elements
  document.querySelectorAll("[data-price-czk]").forEach((el) => {
    var czk = parseInt(el.getAttribute("data-price-czk"), 10);
    if (!isNaN(czk)) el.textContent = formatPrice(czk, lang);
  });

  // Update active language button
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });
}

// Initialize i18n and bind language switcher buttons
(function initI18n() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLanguage(btn.getAttribute("data-lang"));
    });
  });
  // Apply saved language (or default cs)
  setLanguage(currentLang);
})();
