import { FC, createContext, useState, useEffect, ReactNode } from "react";
import { ThemeProvider as Styles } from "styled-components";
import { Theme, ThemeProviderProps } from "./types";
import DefaultTheme from "./default";

const ThemeContext = createContext<any>({
    object: DefaultTheme,
    handler: null,
});

const ThemeProvider: FC<ThemeProviderProps> = (props) => {
    const { children, theme = DefaultTheme, isStyled = true } = props;
    const [currentTheme, setCurrentTheme] = useState<Theme>(
        theme || DefaultTheme
    );

    const handleChangeTheme = (theme: Theme) => {
        if (theme !== currentTheme) {
            setCurrentTheme(theme);
        }
    };

    useEffect(() => {
        handleChangeTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider
            value={{ object: currentTheme, handler: handleChangeTheme }}
        >
            {isStyled ? (
                <Styles theme={currentTheme}>{children}</Styles>
            ) : (
                children
            )}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;
export { DefaultTheme, Theme, ThemeContext, ThemeProviderProps };
