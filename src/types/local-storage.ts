import { LoginResponse } from "../types/auth";

export type LocalStorageNamespaces = "auth";

export type LocalStorageAuth = LoginResponse | null;