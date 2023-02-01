import React, {useEffect, useRef, useState} from "react";
import styles from "./navPanel.module.scss"
import {useRecoilState} from "recoil";
import {cursorAtom} from "../../store/cursor.atom";
const NavPanel = ({about, project, skills}) =>{
    return(
        <div className={styles.wrap} id={"nav-panel"}>
            <div className={styles["nav-panel"]}>
                <NavItem href={"#about"} color={"#219ebc"} isVisible={about}>
                    About me
                </NavItem>
                <NavItem href={"#projects"} color={"#4361ee"} isVisible={project}>
                    Projects
                </NavItem>
                <NavItem href={"#skills"} color={"#f22845"} isVisible={skills}>
                    Skills
                </NavItem>
            </div>
        </div>
    )
}

const NavItem = ({href, children, color, isVisible}) =>{
    const navItemRef = useRef()
    const [_, setCursorState] = useRecoilState(cursorAtom)
    const [selected, setSelected] = useState(true)

    const changeCursorState = (scale)=>{
        setCursorState(prev=>(
            {
                ...prev,
                scale: scale,
                color: color
            }
        ))
    }

    useEffect(() => {
        if (navItemRef.current){
            navItemRef.current.addEventListener("mouseover",()=>changeCursorState(2))

            navItemRef.current.addEventListener("click",()=>changeCursorState(2))

            navItemRef.current.addEventListener("mouseleave", ()=>changeCursorState(1))
        }
    }, [navItemRef]);

    useEffect(() => {
        if (isVisible) {
            changeCursorState(1)
            setSelected(isVisible)
        }else {
            setSelected(false)
        }
    }, [isVisible]);


    return (
        <a href={href} ref={navItemRef}>
            <button className={`${styles["nav-item"]} ${selected && styles["selected"]}`}>
                {children}
            </button>
        </a>
    )
}

export default NavPanel