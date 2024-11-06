// biome-ignore lint/style/useImportType: <explanation>
import { ApplicationRef, Injector, NgModule } from "@angular/core";
import { createCustomElement } from "@angular/elements";
import { BrowserModule } from "@angular/platform-browser";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { RemoteEntryComponent } from "./app/remote-entry/remote-entry.component";


@NgModule({
	declarations: [],
	imports: [
		BrowserModule,
		RemoteEntryComponent, // Since it's standalone
	],
	providers: [],
	bootstrap: [], // No components to bootstrap automatically
})
export class AppModule {
	constructor(
		private injector: Injector,
		private applicationRef: ApplicationRef,
	) {
		// Wait for injector to be ready
		Promise.resolve().then(() => {
			// Create the custom element with the injector from DI
			const customElement = createCustomElement(RemoteEntryComponent, {
				injector: this.injector,
			});

			// Register the custom element if not already registered
			if (!customElements.get("angular-remote-entry")) {
				customElements.define("angular-remote-entry", customElement);
			}
		});
	}
}

const mount = () => {
	return platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.catch((err) => console.error("Error bootstrapping app:", err));
};

export { mount };
