function checkTransaction() {
    const userId = document.getElementById("userId").value;
    const amount = parseFloat(document.getElementById("amount").value);
    const location = document.getElementById("location").value;
    const device = document.getElementById("device").value;

    const previousAmount = 1000; // Example historical average
    const usualLocation = "Hyderabad";
    const knownDevice = "LAP123";

    let riskScore = 0;
    let reasons = [];

    // Simple rules to detect suspicious transaction
    if (amount > 5 * previousAmount) {
        riskScore += 40;
        reasons.push("Amount unusually high");
    }
    if (location !== usualLocation) {
        riskScore += 30;
        reasons.push("Unusual location detected");
    }
    if (device !== knownDevice) {
        riskScore += 20;
        reasons.push("New or unrecognized device");
    }

    // Decide status
    let statusText = "";
    if (riskScore >= 70) {
        statusText = "🚨 FRAUD ALERT";
        document.getElementById("status").style.color = "red";
    } else if (riskScore >= 40) {
        statusText = "⚠️ WARNING";
        document.getElementById("status").style.color = "orange";
    } else {
        statusText = "✅ SAFE";
        document.getElementById("status").style.color = "green";
    }

    document.getElementById("status").innerText = statusText;

    const ul = document.getElementById("reasons");
    ul.innerHTML = "";
    reasons.forEach(r => {
        const li = document.createElement("li");
        li.innerText = r;
        ul.appendChild(li);
    });
}
