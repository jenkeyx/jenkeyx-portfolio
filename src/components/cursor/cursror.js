import React, {useEffect, useRef} from "react";
import "./cursor.scss"
import {useRecoilState} from "recoil";
import {cursorAtom} from "../../store/cursor.atom";
import gsap from "gsap";


const Cursor = () => {
    const [cursorState, setCursorState] = useRecoilState(cursorAtom)

    const svgBoxRef = useRef(null);

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            gsap.to('circle', {
                x: e.clientX - window.innerWidth / 2,
                y: e.clientY - window.innerHeight / 2,
                stagger: 0.1
            })
        })

        document.addEventListener('mousedown', (e) => {
            setCursorState(prev=>{
                return {
                    ...prev,
                    scale: 0.5
                }
            })
        })

        document.addEventListener('mouseup', () => {
            setCursorState(prev=>{
                return {
                    ...prev,
                    scale: 1
                }
            })
        })
    }, [svgBoxRef.current]);

    return (
        <div className={"cursor"}>
            <svg width={"110vw"} height={"110vh"} ref={svgBoxRef}>
                <circle className={"trailing-circle"} filter={"url(#filter0_f_57_12)"} cx={"50vw"} cy={"50vh"}
                        fill={cursorState.color}
                        r={cursorState.r * cursorState.scale}/>
                <circle className={"trailing-circle"} filter={"url(#filter0_f_57_12)"} cx={"50vw"} cy={"50vh"}
                        fill={cursorState.color}
                        r={cursorState.r * cursorState.scale}/>
                <circle className={"trailing-circle"} filter={"url(#filter0_f_57_12)"} cx={"50vw"} cy={"50vh"}
                        fill={cursorState.color}
                        r={cursorState.r * cursorState.scale * 0.90}/>
                <circle className={"trailing-circle"} filter={"url(#filter0_f_57_12)"} cx={"50vw"} cy={"50vh"}
                        fill={cursorState.color}
                        r={cursorState.r * cursorState.scale * 0.85}/>
                <defs>
                    <filter id="filter0_f_57_12" x={0} y={0} width="100%" height="100%" filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feGaussianBlur stdDeviation="30" result="effect1_foregroundBlur_57_12"/>
                    </filter>
                </defs>
            </svg>
        </div>
    )
}
export default Cursor