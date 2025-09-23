import type { PropsWithChildren } from "hono/jsx";

export function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<meta charset="UTF-8" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<title>Container Security Demo</title>
			<body>{children}</body>
		</html>
	);
}
