import { Theme, DefaultTheme } from "../providers/Theme";

export default function createTheme(theme?: Theme): Theme {
    return { ...DefaultTheme, ...theme };
}
