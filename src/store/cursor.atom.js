import {atom} from "recoil";

export const cursorAtom = atom({
    key: "cursorState",
    default: {
        color: "#FCA311",
        scale: 1,
        r: 100,
        x: 0,
        y: 0,
    }
})