const http = require('http')
const port = 8080;
const server = http.createServer((req, res) => {
	res.end("Hello from Jenkins and Kubernetes!");
})
server.listen(port, () => console.log("Listening on " + port));
