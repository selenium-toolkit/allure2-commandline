async function fetchHtml(url) {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`Fehler beim Laden der URL: ${url}`);
    return await response.text();
}

// Extrahiere Regel-Links von der Hauptseite
async function getRuleLinks() {
    const mainPageHtml = await fetchHtml('https://dequeuniversity.com/rules/axe/4.6');
    const parser = new DOMParser();
    const doc = parser.parseFromString(mainPageHtml, 'text/html');
    const ruleLinks = [...doc.querySelectorAll('a[href^="/rules/axe/4.6/"]')].map(link => {
        return `https://dequeuniversity.com${link.getAttribute('href')}`;
    });
    return ruleLinks;
}

// Extrahiere die gewünschten Details von einer Regel-Seite
async function extractRuleInfo(url) {
    const rulePageHtml = await fetchHtml(url);
    const parser = new DOMParser();
    const doc = parser.parseFromString(rulePageHtml, 'text/html');

    // Extrahiere ruleId aus der URL
    const ruleId = url.split('/').pop();

    const ruleInfo = {
        rule_description: '',
        why_it_matters: '',
        disabilities_affected: []
    };

    // Extrahiere den "Rule Description"-Text
    const ruleDescriptionHeader = [...doc.querySelectorAll('h2')].find(el => el.innerText.includes("Rule Description"));
    if (ruleDescriptionHeader) {
        const descriptionParagraph = ruleDescriptionHeader.nextElementSibling;
        ruleInfo.rule_description = descriptionParagraph ? descriptionParagraph.innerText.trim() : '';
    }

    // Extrahiere den "Why it Matters"-Text
    const whyItMattersHeader = [...doc.querySelectorAll('h2')].find(el => el.innerText.includes("Why it Matters"));
    if (whyItMattersHeader) {
        const nextParagraph = whyItMattersHeader.nextElementSibling;
        ruleInfo.why_it_matters = nextParagraph ? nextParagraph.innerText.trim() : '';
    }

    // Extrahiere "Disabilities Affected" inklusive Icon-Klassen
    const disabilitiesSection = doc.querySelector('.disabilityTypesAffectedData ul');
    if (disabilitiesSection) {
        ruleInfo.disabilities_affected = [...disabilitiesSection.querySelectorAll('li')].map(li => {
            const iconElement = li.querySelector('.disabilityIcon');
            const iconClass = iconElement ? iconElement.className : '';
            return {
                disability: li.innerText.trim(),
                icon_class: iconClass
            };
        });
    }

    return { ruleId, ruleInfo };
}

// Funktion zum Speichern als JSON-Datei
function downloadAsJson(data, filename = 'axe_rules.json') {
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// Hauptfunktion für den Abruf und die Speicherung
async function main(testRun = false) {
    try {
        const ruleLinks = await getRuleLinks();
        const limit = testRun ? 10 : ruleLinks.length;
        const allRulesInfo = {};

        for (let i = 0; i < limit; i++) {
            const url = ruleLinks[i];
            console.log(`Extrahiere Daten von ${url}`);
            const { ruleId, ruleInfo } = await extractRuleInfo(url);
            allRulesInfo[ruleId] = ruleInfo; // Speichere die Regel-Info unter dem `ruleId`-Schlüssel
            await new Promise(resolve => setTimeout(resolve, 1000)); // Kleine Pause zwischen den Anfragen
        }

        downloadAsJson(allRulesInfo);
    } catch (error) {
        console.error("Fehler beim Abrufen der Daten:", error);
    }
}

// Startet den Scraping-Prozess mit einer Test-Option (nur 10 Elemente)
main(false); // `true` aktiviert den Testlauf, `false` für alle Regeln
