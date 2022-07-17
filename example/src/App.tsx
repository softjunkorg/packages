import { GlobalStyle, Resolutions, useTheme } from "@softjunk/ui";

const App = () => {
    const [theme] = useTheme();
    return (
        <div>
            <Resolutions />
            <GlobalStyle />
            This is the current theme: {JSON.stringify(theme, null, 4)}
        </div>
    );
};

export default App;
