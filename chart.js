function renderPieChart(data) {
    const ipAddresses = [];
    const names = [];
    const dates = [];

    // Extract IP addresses, names, and dates from data
    for (const entry of data) {
        ipAddresses.push(entry.ip_address);
        names.push(entry.name);
        dates.push(entry.date);
    }

    // Render pie chart for IP addresses
    renderChart("IP Addresses", ipAddresses);

    // Render pie chart for names
    renderChart("Names", names);

    // Render pie chart for dates
    renderChart("Dates", dates);
}

function renderChart(label, values) {
    const chartCanvas = document.createElement('canvas');
    chartCanvas.setAttribute('class', 'chart');
    document.getElementById('chart-container').appendChild(chartCanvas);

    const chartContext = chartCanvas.getContext('2d');
    new Chart(chartContext, {
        type: 'pie',
        data: {
            labels: values,
            datasets: [{
                label: label,
                data: values,
                backgroundColor: generateRandomColors(values.length)
            }]
        }
    });
}
