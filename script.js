async function fetchStats() {
    const netlifyEndpoint = 'https://your-netlify-site.netlify.app/.netlify/functions/getStats'; // Netlifyのエンドポイントに変更

    try {
        const response = await fetch(netlifyEndpoint);
        if (!response.ok) throw new Error(`エラーが発生しました: ${response.status}`);
        const data = await response.json();

        // データを表示
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
