const referenceData = {
    "Tiranë": { "Apartamente": 30.0, "Dyqane": 50.0 },
    "Bajram Curri": { "Apartamente": 12.2355, "Dyqane": 18.35325 },
    "Ballsh": { "Apartamente": 13.545, "Dyqane": 20.3175 },
    "Belesh": { "Apartamente": 15.75 },
    "Berat": { "Apartamente": 18.9855, "Dyqane": 28.47825 },
    "Bilisht": { "Apartamente": 15.75, "Dyqane": 23.625 },
    "Bulqizë": { "Apartamente": 19.341, "Dyqane": 29.0115 },
    "Burrel": { "Apartamente": 19.881, "Dyqane": 29.8215 },
    "Cërrik": { "Apartamente": 17.235, "Dyqane": 25.8525 },
    "Delvinë": { "Apartamente": 12.0375, "Dyqane": 18.05625 },
    "Divjakë": { "Apartamente": 20.25, "Dyqane": 30.375 },
    "Durrës": { "Apartamente": 31.54185, "Dyqane": 47.312775 },
    "Elbasan": { "Apartamente": 22.68, "Dyqane": 34.02 },
    "Ersekë": { "Apartamente": 10.44, "Dyqane": 15.66 },
    "Fier": { "Apartamente": 23.94, "Dyqane": 35.91 },
    "Fushë-Arrëz": { "Apartamente": 3.375, "Dyqane": 5.0625 },
    "Fushë-Krujë": { "Apartamente": 22.95, "Dyqane": 34.425 },
    "Gjirokastër": { "Apartamente": 22.311, "Dyqane": 33.4665 },
    "Gramsh": { "Apartamente": 19.36035, "Dyqane": 29.040525 },
    "Himarë": { "Apartamente": 24.3, "Dyqane": 36.45 },
    "Kamëz": { "Apartamente": 23.265, "Dyqane": 34.8975 },
    "Kavajë": { "Apartamente": 26.2935, "Dyqane": 39.44025 },
    "Konispol": { "Apartamente": 12.6, "Dyqane": 18.9 },
    "Koplik": { "Apartamente": 18.225, "Dyqane": 27.3375 },
    "Korçë": { "Apartamente": 21.15, "Dyqane": 31.725 },
    "Krujë": { "Apartamente": 21.825, "Dyqane": 32.7375 },
    "Krume": { "Apartamente": 11.025, "Dyqane": 16.5375 },
    "Kukës": { "Apartamente": 24.165, "Dyqane": 36.2475 },
    "Kuçovë": { "Apartamente": 18.135, "Dyqane": 27.2025 },
    "Këlcyrë": { "Apartamente": 11.07, "Dyqane": 19.17 },
    "Laç": { "Apartamente": 19.125, "Dyqane": 28.6875 },
    "Lezhë": { "Apartamente": 25.2, "Dyqane": 37.8 },
    "Librazhd": { "Apartamente": 19.809, "Dyqane": 29.7135 },
    "Lushnjë": { "Apartamente": 17.325, "Dyqane": 25.9875 },
    "Mamurras": { "Apartamente": 13.95, "Dyqane": 20.925 },
    "Orikum": { "Apartamente": 27.9, "Dyqane": 41.85 },
    "Patos": { "Apartamente": 12.6, "Dyqane": 18.9 },
    "Peqin": { "Apartamente": 17.5815, "Dyqane": 26.37225 },
    "Pogradec": { "Apartamente": 22.5, "Dyqane": 33.75 },
    "Roskovec": { "Apartamente": 13.5, "Dyqane": 20.25 },
    "Sarandë": { "Apartamente": 22.851, "Dyqane": 34.2765 },
    "Shkodër": { "Apartamente": 25.875, "Dyqane": 38.8125 },
    "Tepelenë": { "Apartamente": 12.78, "Dyqane": 19.17 },
    "Vlorë": { "Apartamente": 27.74925, "Dyqane": 41.623875 },
    "Vorë": { "Apartamente": 23.175, "Dyqane": 34.7625 }
};

const citySelect = document.getElementById('city');
const tableBody = document.getElementById('referenceTable');

for (const city in referenceData) {
    citySelect.innerHTML += `<option value="${city}">${city}</option>`;
    tableBody.innerHTML += `
        <tr>
            <td>${city}</td>
            <td>${referenceData[city]["Apartamente"] || "N/A"}</td>
            <td>${referenceData[city]["Dyqane"] || "N/A"}</td>
        </tr>
    `;
}

function calculate(event) {
    event.preventDefault();
    const city = document.getElementById('city').value;
    const propertyType = document.getElementById('propertyType').value;
    const area = parseFloat(document.getElementById('area').value);
    const contractPrice = parseFloat(document.getElementById('contractPrice').value);
    const referencePrice = referenceData[city]?.[propertyType];

    if (!referencePrice) {
        document.getElementById('output').innerHTML = "<strong>Të dhënat nuk janë të plota për këtë qytet/pronë!</strong>";
        return;
    }

    const taxableValue = Math.max(referencePrice, contractPrice) * area * 0.1;
    document.getElementById('output').innerHTML = `
        <strong>Tatimi për qiranë është: ${taxableValue.toFixed(2)} Lek</strong>
    `;
}

function showContent(contentId) {
    document.querySelectorAll('.content').forEach(div => div.classList.remove('active'));
    document.getElementById(contentId).classList.add('active');
}
