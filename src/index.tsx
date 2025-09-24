import { Hono } from "hono";

import { Layout } from "./components/layout.js";

const app = new Hono<{ Bindings: CloudflareBindings }>()
	.get("/", (c) =>
		c.html(
			<Layout>
				<h1>Container Security Demo</h1>
				<p>
					<span class="highlight">MNSEC 2025</span>
				</p>
				<div class="footer">Powered by Hono.js</div>
			</Layout>,
		),
	)
	.all("/health", (c) => c.json({ status: "ok" }));

export default app;
