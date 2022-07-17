import {
    ResolutionsObject,
    DefaultResolutions,
} from "../components/Resolutions";

export default function createResolutions(
    resolutions?: ResolutionsObject
): ResolutionsObject {
    return { ...DefaultResolutions, ...resolutions };
}
