async function loadReport() {
    const urlParams = new URLSearchParams(window.location.search);
    const fileParam = urlParams.get("file");

    if (!fileParam) {
        alert("Please specify a JSON file using ?file=your-report.json");
        return;
    }

    try {
        const response = await fetch(fileParam);
        if (!response.ok) throw new Error("Could not load the JSON file.");
        const axeResults = await response.json();
        const reportContainer = document.getElementById('report-content');

        axeResults.violations.forEach((rule, index) => {
            const ruleDiv = document.createElement('div');
            ruleDiv.className = 'rule';

            ruleDiv.innerHTML = `
            <div class="rule-header" onclick="toggleDetails(${index})">
                ${rule.id}: ${rule.description}
                <span>[Impact: <span class="impact">${rule.impact || 'N/A'}</span>]</span>
            </div>
            <div class="rule-details" id="details-${index}">
                <p><strong>Help:</strong> <a class="help-link" href="${rule.helpUrl}" target="_blank">${rule.helpUrl}</a></p>
                <div class="nodes">
                    ${rule.nodes.map(node => `
                        <div class="node">
                            <div><strong>HTML:</strong> <span class="html-snippet">${node.html}</span></div>
                            <div><strong>Message:</strong> ${node.any.map(a => a.message).join(', ')}</div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

            reportContainer.appendChild(ruleDiv);
        });

        function toggleDetails(index) {
            const details = document.getElementById(`details-${index}`);
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        }
    } catch (error) {
        console.error("Error generating the report:", error);
        alert("Error loading report.");
    }
}

window.onload = loadReport;
