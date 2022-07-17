import { useContext, Dispatch, SetStateAction } from "react";
import { Theme, ThemeContext } from "../providers/Theme";

export default function useTheme(): [Theme, Dispatch<SetStateAction<Theme>>] {
    const context = useContext(ThemeContext);
    const { object, handler } = context;
    return [object, handler];
}
