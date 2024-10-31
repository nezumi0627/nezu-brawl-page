const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const playerTag = 'PQ0J8VJUY';  // 固定のプレイヤーIDを設定
    const apiUrl = `https://api.brawlstars.com/v1/players/%23${playerTag}`;
    const apiKey = process.env.BRAWL_API_KEY;

    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${apiKey}`
            }
        });

        if (!response.ok) throw new Error(`HTTPエラー: ${response.status}`);

        const data = await response.json();
        return {
            statusCode: 200,
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to fetch data', details: error.message })
        };
    }
};
