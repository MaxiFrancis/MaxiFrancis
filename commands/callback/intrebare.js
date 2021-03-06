const { MessageEmbed } = require('discord.js')
exports.intrebare = function (args) {

    const embed = new MessageEmbed().setTitle('Întrebare')

    let replies = [
        "Prin definiție omul vulnerabil înseamnă un om slab, atacabil, om cu părți defectuase și criticabile. Cu alte cuvinte un om ce își recunoaște eșecurile... dar totuși, care credeți că este caracterizarea Biblică a unei astfel de persoane?",
        "Crezi că te ajută să știi vulnerabilitățile celor din jur? De ce? Pe ceilalți ajută să ți le spună? De ce?",
        "E bună vulnerabilitatea?",
        "Când a fost ultima dată când cineva te-a întrebat, de ce plângi? Sau când a fost ultima dată când ai întrebat tu pe cineva?",
        "Ce beneficii aduce acestă stare de vulnerabilitate nouă și celor din jurul nostru?",
        "Cum te-ai simțit după ce te-ai făcut vulnerabil, spunând cuiva ceva anume despre tine?",
        "Ți-e teamă că cineva s-ar folosi de vulnerabilitatea ta? Cum te protejezi? În fața cui te poți face vulnerabil? ",
        "Cum ai defini vulnerabilitatea în contextul Scripturii și a identității în Hristos?",
        "Vulnerabilitatea este unică, și diferă de la om la om? ",
        "Care este cea mai frumoasă amintire pe care o ai, atunci când ai decis să te deschizi și să fii vulnerabil/ă? ",
        "În anumite contexte, cu anumite persoane nu te poti face vulnerabil. De ce e important să păstrezi aceste limite?",
        "Cum ai proceda dacă o persoană s-ar face vulnerabilă față de tine? Care crezi că e atitudinea corectă?",
        "Dacă ne gândim la persoana lui Isus (în calitate de om) a avut momente de vulnerabilitate ? Dacă da..aduceți exemple din biblie.",
        "Dacă știi că vulnerabilitatea te face o ”țintă”, adică ceilalți se pot folosi de vulnerabilitatea ta ca să te rănească, atunci de ce alegi totuși să te deschizi ?",
        "Pentru tine ce înseamnă vulnerabilitatea?",
        "Ce ai în vedere cand dorești ca inima ta să fie pe placul lui Dumnezeu?",
        "Cum e inima lui Dumnezeu conform Scripturii? ",
        "Ca și creștin, cum îți păzești inima? Cum reușești să nu asculți de ea (practic) ci de îndemnurile Duhului Sfânt? ",
        "De ce e important să ai o inimă predată total Domnului ? Ce spune Sriptura despre asta? ...de ce inima?",
        "Care profet a venit după Ilie?  (2 Împărați 2:15)",
        "Cine erau împaratul și împărăteasa Israelului în timpul lui Ilie? (1 Împărați 21:4,5) ",
        "În ce oraş erau mulţi dintre oamenii din Iuda, luaţi ca robi? (2 Împărați 24:10-16) ",
        "Cine era numit 'proorocul care plânge'? ",
        "Cum a salvat Estera poporul evreu? ",
        "Care om a pierdut tot ce avea, inclusiv sănătatea lui dar a rămas cu Dumnezeu?",
        "Cui a dat Dumnezeu drept semn că este vindecat, faptul că umbra s a dat înapoi cu 10 trepte? ",
        "‭Unde a spus Mica, profetul, că se va naşte Mesia?‬ ",
        "Cine a fost înghiţit de un peşte mare atunci când fugea de împlinirea voii Domnului‬?",
        "Cum a descris Ioan felul în care va boteza Isus? ‬(Matei 3:11)",
        "‭Care este dovada fizică iniţială a Botezului cu Duhul Sfânt? ‬(Fapte 2:4) ",
        "‭Care sunt cele trei lucruri despre care spune Pavel că formează Împaraţia lui ‬Dumnezeu? (Romani 14:17) ",
        "‭Numiţi şapte caracteristici ale dragostei creştine adevărate.",
        "‭Potrivit Romani 12:1, ce doreşte Dumnezeu de la fiecare ‬creștin? ",
        "Cum crezi tu că dragostea pentru Isus influentează și modelează viață ta de zi cu zi? ", 
        "Cum ai ajuns să te indrăgostești de Hristos? ", 
        "Cum poți face din Isus centrul vieții tale? ", 
        "Ce înseamnă a pune lumina sub baniță / obroc? (Ioan 8:12) ", 
        "Ce domină mai mult în viață ta, pacea sau neliniștea? ( 2 Petru 1:2; Romani 2:4; Coloseni 3:10) ", 
        "Câtă importanță dai smereniei în viața ta? ", 
        "Mai contează ceea ce facem pentru Domnul dacă mântuirea nu e prin fapte ? (Iacov 2:17,18) ", 
        "De ce e important ca să îl lăsăm pe El să crească în noi? ", 
        "Cum putem avea pace chiar și în mijlocul furtunii? ( 2 Corinteni 3:4; Efeseni 3:12; Evrei 2:13) ", 
        "Ce înseamnă pentru tine ”Trebuie ca El să crească, iar eu să mă micșorez„ ? ", 
        "Cum ai defini diferența dintre pacea lumească și pacea oferită de Isus? ( Ioan 14:27) ", 
        "Cum îți dai seamă că viață ta nu mai e centrată pe Dumnezeu și ce faci în acel caz? ", 
        "Ce înseamnă că Dumnezeu crește în noi? Există vreun beneficiu? ", 
        "De ce nu poți intra în rai prin forțele proprii? ", 
        "Cui îi dă Domnul pacea? (Matei 21:22) ", 
        "De ce unii cred că prin fapte au să primească credința și mântuirea ? ", 
        "Ai pace când te gândești la viitor? ", 
        "Ce înseamnă ”Caută pacea și aleargă după ea” (ps 34:14)? ", 
        "Care este soluția, ca în urma ingrijorărilor și luptelor din viața ta, să ai totuși pace? (Evrei 11:1.....)", 
        "Cum să îți zidești familia? ", 
        "Cum ai descrie omul duhovnicesc? ( 1 Petru 1:16...etc) ", 
        "De ce e important să nu purtăm de grijă firii pământești? ( “ceea ce hrănesti, aceea crește”) ", 
        "Cum îți dai seama că ești duhovnicesc? (Galateni 5:19-23) ", 
        "Ce importanță are pentru tine Cina Domnului? ", 
        "Ce este mulțumirea? ", 
        "De ce trebuie să mulțumim? (Efeseni 5:20) ", 
        "Când trebuie să mulțumim? (Romani 5:2-3) ", 
        "Când ai trecut printr-un necaz ai avut o atitudine de mulțumire? Cum? ", 
        "Cum putem fi niște inchinători adevărati? ( Psalm 5:7-8, Ioan 4:23,24) ", 
        "Care e atitudinea corectă pe care trebuie să o avem în închinare? (Coloseni 3:12) ", 
        "Ce vă atrage cel mai mult la Caracterul Domnului Isus? ", 
        "Care caracteristică a ta te definește cel mai bine? ", 
        "Care e hobby-ul tău preferat? ", 
        "Care e pasajul tău preferat din Biblie? ", 
        "Care e cartea ta preferată? ", 
        "E bună vulnerabilitatea? ", 
        "Ce beneficii aduce acestă stare de vulnerabilitate nouă și celor din jurul nostru? ", 
        "Pentru tine ce inseamnă vulnerabilitatea?"

        ];

    var result = Math.floor(Math.random() * replies.length);
    embed.setDescription(replies[result])

    return embed
  }
