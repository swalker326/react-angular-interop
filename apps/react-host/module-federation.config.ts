// eslint-disable-next-line @nx/enforce-module-boundaries
// import { dependencies as deps } from "../../package.json";
// const deps = require("../../package.json").dependencies;
// import type { moduleFederationPlugin } from "@module-federation/sdk";

const mfConfig = {
	name: "react-host",
	library: { type: "module", name: "reactHost" },
	remotes: {
		// 'react-remote': 'react_remote@http://localhost:3001/remoteEntry.js',
		// When working with type 'module' you cannot use remote@url syntax
		angularRemote: "http://localhost:4200/remoteEntry.js",
	},
};

export default mfConfig;
