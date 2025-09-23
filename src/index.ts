import { serve } from "@hono/node-server";
import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
	const html = `
	<!DOCTYPE html>
	<html lang="en">
	<head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Container Security Demo</title>
	  <style>
		* {
		  margin: 0;
		  padding: 0;
		  box-sizing: border-box;
		}
		body {
		  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
		  background-color: #ffffff;
		  color: #000000;
		  min-height: 100vh;
		  display: flex;
		  justify-content: center;
		  align-items: center;
		  text-align: center;
		}
		.content {
		  max-width: 800px;
		  padding: 2rem;
		}
		h1 {
		  font-size: 3rem;
		  margin-bottom: 1rem;
		}
		p {
		  font-size: 1.5rem;
		  margin-bottom: 2rem;
		}
		.highlight {
		  font-weight: bold;
		}
		.footer {
		  margin-top: 2rem;
		  font-size: 0.9rem;
		  color: #555;
		}
	  </style>
	</head>
	<body>
	  <div class="content">
		<h1>Container Security</h1>
		<p><span class="highlight">MNSEC 2025 Demo</span></p>
		<div class="footer">Powered by Hono.js</div>
	  </div>
	</body>
	</html>
  `;

	return c.html(html);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
	console.log(`Server is running on http://localhost:${info.port}`);
});
