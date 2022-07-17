import { CSSObject } from "styled-components";

export interface ResolutionsObject {
    "1200.800": CSSObject;
    "1280.720": CSSObject;
    "1280.1024": CSSObject;
    "1360.768": CSSObject;
    "1366.768": CSSObject;
    "1440.900": CSSObject;
    "1536.864": CSSObject;
    "1600.900": CSSObject;
    "1920.1080": CSSObject;
}

export interface ResolutionsProps {
    resolutions?: Partial<ResolutionsObject>;
}
