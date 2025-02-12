import { z } from "zod";

export enum ThemeKind {
	DEFAULT = "default",
	BACKEND_DEVELOPER = "BACKEND_DEVELOPER",
	FULLSTACK_DEVELOPER = "FULLSTACK_DEVELOPER",
	UX_DEVELOPER = "UX_DEVELOPER",
	UI_DEVELOPER = "UI_DEVELOPER"
}

export const Theme = z.nativeEnum(ThemeKind);
