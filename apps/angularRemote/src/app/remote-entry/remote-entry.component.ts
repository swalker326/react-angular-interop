import { CommonModule } from "@angular/common";
// src/app/remote-entry/entry.component.ts
import { Component } from "@angular/core";
import { NxWelcomeComponent } from "../nx-welcome.component";

@Component({
	standalone: true,
	imports: [CommonModule, NxWelcomeComponent],
	selector: "app-angular-remote-entry",
	template: "<app-nx-welcome></app-nx-welcome>",
})
export class RemoteEntryComponent {}
