import {atom} from "recoil";

export const themeAtom = atom({
    key: "themeAtom",
    default:{
        theme: window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
    }
})