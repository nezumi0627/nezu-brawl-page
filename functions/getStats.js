async function fetchStats() {
    const apiUrl = 'https://api.brawlstars.com/v1/players/%23PQ0J8VJUY'; // 固定のプレイヤーID
    const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6ImY3ODJlOWFlLWUyZDAtNDI4MS05MjU4LTFjYzNlZTgyMDc0YyIsImlhdCI6MTczMDM2ODY5Niwic3ViIjoiZGV2ZWxvcGVyLzVmNWQ0NDQxLTk1ZWMtMTgxZi1kOGE1LWQ1MDAwOGMyNjRkNSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiNTkuMTcwLjE4My45OSJdLCJ0eXBlIjoiY2xpZW50In1dfQ.eVH0cxm4BraTjvS1KMRbMp89POxZHRiv6GrA6O43YZciBNuuOv-T5VGreENNmChlHOEGlHWAy6sRTocrlo9Aag';  // Brawl Stars APIキー

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) throw new Error(`HTTPエラー: ${response.status}`);

        const data = await response.json();
        displayStats(data);
    } catch (error) {
        document.getElementById('stats').innerText = `エラー: ${error.message}`;
    }
}

function displayStats(data) {
    const statsDiv = document.getElementById('stats');
    statsDiv.innerHTML = `
        <p class="stat">プレイヤー名: ${data.name}</p>
        <p class="stat">勝利数: ${data.wins}</p>
        <p class="stat">トロフィー数: ${data.trophies}</p>
        <p class="stat">最高トロフィー: ${data.highestTrophies}</p>
    `;
}
