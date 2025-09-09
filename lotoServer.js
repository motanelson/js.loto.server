const http = require("http");

function generateNumbers() {
    let nums = new Set();
    while (nums.size < 10) {
        nums.add(Math.floor(Math.random() * 49) + 1);
    }
    return Array.from(nums).join(" ");
}

const srv = http.createServer((req, res) => {
    if (req.url === "/loto") {
        let vv = generateNumbers();
        console.log("Números enviados:", vv);
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(vv);
    } else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 - Not Found. Usa /loto");
    }
});

srv.listen(8080, "0.0.0.0", () => {
    console.log("Servidor HTTP loto ativo em http://0.0.0.0:8080/loto");
});