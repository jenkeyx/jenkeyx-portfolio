import {atom} from "recoil";

export const cursorAtom = atom({
    key: "cursorState",
    default: {
        color: "#FCA311",
        scale: 1
    }
})