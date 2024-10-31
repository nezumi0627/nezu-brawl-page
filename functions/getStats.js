const fetch = require('node-fetch');

exports.handler = async function (event, context) {
    const playerTag = 'PQ0J8VJUY';  // 固定のプレイヤーID
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
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'  // すべてのオリジンからのアクセスを許可
            },
            body: JSON.stringify(data)
        };
    } catch (error) {
        return {
            statusCode: 500,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify({ error: 'Failed to fetch data', details: error.message })
        };
    }
};
