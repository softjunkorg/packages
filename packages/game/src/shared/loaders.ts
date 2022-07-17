import { CreatePromise } from "./lib";

export function LoadModel(model: string): Promise<unknown> {
    return CreatePromise((resolve) => {
        var hash = IsModelValid(model) ? parseInt(model) : GetHashKey(model);

        RequestModel(hash);
        var tick = setTick(() => {
            if (HasModelLoaded(hash)) {
                clearTick(tick);
                resolve(true);
            }
        });
    });
}

export function LoadStreamedTextureDict(dict: string): Promise<unknown> {
    return CreatePromise((resolve) => {
        RequestStreamedTextureDict(dict, false);
        var tick = setTick(() => {
            if (HasStreamedTextureDictLoaded(dict)) {
                clearTick(tick);
                resolve(true);
            }
        });
    });
}

export function LoadAnimDict(dict: string): Promise<unknown> {
    return CreatePromise((resolve) => {
        RequestAnimDict(dict);
        var tick = setTick(() => {
            if (HasAnimDictLoaded(dict)) {
                clearTick(tick);
                resolve(true);
            }
        });
    });
}

export function LoadResourceJson(resource: string, fileName: string): JSON {
    return JSON.parse(LoadResourceFile(resource, fileName));
}
