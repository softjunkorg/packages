import { FC } from "react";
import { NuiProps } from "./types";

const Nui: FC<NuiProps> = (props) => {
    const { show, children } = props;
    return <div style={{ display: show ? "block" : "none" }}>{children}</div>;
};

export default Nui;
export { NuiProps };
