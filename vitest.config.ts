import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		reporters: ["default", "junit"],
		outputFile: {
			junit: "reports/junit.xml",
		},
		coverage: {
			provider: "v8",
			reportsDirectory: "coverage",
			reporter: ["text", "lcov", "html", "cobertura"],
		},
	},
});
