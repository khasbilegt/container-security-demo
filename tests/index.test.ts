import { testClient } from "hono/testing";
import { describe, expect, it } from "vitest";

import app from "../src/index.js";

describe("routes", () => {
	const client = testClient(app);

	it("/ should return html", async () => {
		const res = await client.index.$get();

		expect(res.status).toBe(200);
		expect(await res.text()).toContain("Container Security");
	});

	it("/health should return 200", async () => {
		const res = await client.health.$all();

		expect(res.status).toBe(200);
		expect(await res.json()).toEqual({ status: "ok" });
	});
});
