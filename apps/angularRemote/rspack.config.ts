import { NgRspackModuleFederationPlugin } from "@ng-rspack/build";
import {mfConfig} from "./module-federation.config";

export default {
	output: {
		publicPath: "auto",
		// library: {
		// 	name: "angularRemote",
		// 	type: "var", // or 'assign' or 'assign-properties'
		// },
	},
	plugins: [new NgRspackModuleFederationPlugin(mfConfig, { dts: false })],
};
