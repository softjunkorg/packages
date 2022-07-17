import { ReactNode } from "react";
import DefaultTheme from "./default";

export type Theme = typeof DefaultTheme;

export interface ThemeProviderProps {
    children: ReactNode;
    theme?: Theme;
    isStyled?: boolean;
}
