let logs = [];
let riskyKeywords = ['gambling', 'adult', 'violence', 'selfharm']; // Simulated risky terms

function logActivity() {
    const input = document.getElementById('siteInput');
    const site = input.value.trim().toLowerCase();
    if (!site) return;

    const timestamp = new Date().toLocaleString();
    const isRisky = riskyKeywords.some(keyword => site.includes(keyword));
    const logEntry = { site, timestamp, risky: isRisky };

    logs.push(logEntry);
    input.value = '';

    if (isRisky) {
        alert(`Risky activity detected: ${site}. Flagged for review!`);
        document.getElementById('alertList').innerHTML += `<li class="alert">${timestamp}: ${site} (RISKY)</li>`;
    } else {
        document.getElementById('logList').innerHTML += `<li>${timestamp}: Visited ${site}</li>`;
    }

    // Auto-show dashboard after logging
    document.getElementById('dashboard').style.display = 'block';
}

function toggleDashboard() {
    const dashboard = document.getElementById('dashboard');
    dashboard.style.display = dashboard.style.display === 'none' ? 'block' : 'none';
}

// Simulate periodic "student" activity (for demo)
setInterval(() => {
    const demoSites = ['google.com', 'youtube.com', 'example.com', 'bad-site.com'];
    const randomSite = demoSites[Math.floor(Math.random() * demoSites.length)];
    // Uncomment to auto-log demo activities
    // logActivity(randomSite); // This would simulate without input
}, 10000); // Every 10 seconds (disabled by default)
