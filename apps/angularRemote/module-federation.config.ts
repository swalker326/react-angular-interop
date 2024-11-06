export const mfConfig = {
	name: "angularRemote",
	filename: "remoteEntry.js",
	exposes: {
		"./Component": "./src/bootstrap.ts", // Changed from entry.component.ts to bootstrap.ts
	},
};

