import { FC } from "react";
import { createGlobalStyle, css } from "styled-components";
import { ResolutionsObject, ResolutionsProps } from "./types";
import DefaultResolutions from "./default";

const Styles = createGlobalStyle<{ resolutions: any }>`
    ${(props) => props.resolutions}
`;

const Resolutions: FC<ResolutionsProps> = (props) => {
    const { resolutions = DefaultResolutions } = props;
    return (
        <Styles
            resolutions={Object.entries(resolutions)
                .map((value) => {
                    const [width, height] = value[0].split(".");
                    const key = `@media only screen and (min-width: ${width}px) and (min-height: ${height}px)`;
                    return `${key} { body { ${css(value[1])} } }`;
                })
                .join("\n\n")}
        />
    );
};

export default Resolutions;
export { ResolutionsObject, ResolutionsProps, DefaultResolutions };
