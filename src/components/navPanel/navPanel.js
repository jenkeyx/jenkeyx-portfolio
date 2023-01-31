import React, {useEffect, useRef} from "react";
import styles from "./navPanel.module.scss"
import {useRecoilState} from "recoil";
import {cursorAtom} from "../../store/cursor.atom";
const NavPanel = () =>{
    return(
        <div className={styles.wrap} id={"nav-panel"}>
            <div className={styles["nav-panel"]}>
                <NavItem href={"#about"} color={"#219ebc"}>
                    About me
                </NavItem>
                <NavItem href={"#projects"} color={"#4361ee"}>
                    Projects
                </NavItem>
                <NavItem href={"#skills"} color={"#f22845"}>
                    Skills
                </NavItem>
            </div>
        </div>
    )
}

const NavItem = ({href, children, color}) =>{
    const navItemRef = useRef()
    const [cursorState, setCursorState] = useRecoilState(cursorAtom)
    useEffect(() => {
        if (navItemRef.current){
            const prevState = cursorState
            navItemRef.current.addEventListener("mouseover",()=>{
                setCursorState(prev=> {
                    return {
                        ...prev,
                        color: color,
                        scale: 2
                    }
                })
            })

            navItemRef.current.addEventListener("click",()=>{
                setCursorState(prev=> {
                    return {
                        ...prev,
                        color: color,
                        scale: 2
                    }
                })
            })

            navItemRef.current.addEventListener("mouseleave", ()=>{
                setCursorState({
                    ...prevState,
                    color: color
                })
            })
        }
        return () => {

        };
    }, [navItemRef]);

    return (
        <a href={href} ref={navItemRef}>
            <button className={styles["nav-item"]}>
                {children}
            </button>
        </a>
    )
}

export default NavPanel