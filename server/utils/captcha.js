function generateRandomString(length = 6) {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    return Array.from({ length }, () => chars.charAt(Math.floor(Math.random() * chars.length))).join('');
}

function generateSVG(text) {
    const width = 200;
    const height = 60;
    const chars = text.split('');
    
    let svg = `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
        <rect width="100%" height="100%" fill="#f0f0f0"/>`;
    
    // Add random lines for noise
    for (let i = 0; i < 5; i++) {
        const x1 = Math.random() * width;
        const y1 = Math.random() * height;
        const x2 = Math.random() * width;
        const y2 = Math.random() * height;
        svg += `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="#ccc"/>`;
    }
    
    // Add characters with random transformations
    chars.forEach((char, i) => {
        const x = (width / (chars.length + 1)) * (i + 1);
        const y = height / 2;
        const rotation = Math.random() * 30 - 15;
        svg += `<text x="${x}" y="${y}" fill="#333" font-family="Arial" font-size="30" 
            transform="rotate(${rotation} ${x} ${y})">${char}</text>`;
    });
    
    svg += '</svg>';
    return Buffer.from(svg).toString('base64');
}

module.exports = {
    generateCaptcha() {
        const text = generateRandomString();
        const svg = generateSVG(text);
        return {
            text,
            image: `data:image/svg+xml;base64,${svg}`
        };
    }
};
