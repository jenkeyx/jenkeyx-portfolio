import React, {useEffect, useRef} from "react";
import "./cursor.scss"
import {useRecoilState} from "recoil";
import {cursorAtom} from "../../store/cursor.atom";


const Cursor = () => {
    const [cursorState, setCursorState] = useRecoilState(cursorAtom)

    useEffect(() => {
        document.addEventListener('mousemove', e => {
            setCursorState(prev=>{
                return{
                    ...prev,
                    x: e.clientX +50 - prev.r/2 ,
                    y: e.clientY +50 - prev.r/2
                }
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
        return () => {
        };
    }, []);

    return (
            <div className={"cursor"}>
                <svg width={"100vw"} height={"100vh"}>
                        <circle filter={"url(#filter0_f_57_12)"} cx={cursorState.x} cy={cursorState.y} fill={cursorState.color}
                                r={cursorState.r * cursorState.scale}
                                style={{transition: `all 0.15s ease-out`}}/>
                        <circle filter={"url(#filter0_f_57_12)"} cx={cursorState.x} cy={cursorState.y} fill={cursorState.color}
                                r={cursorState.r * cursorState.scale * 0.95}
                                style={{transition: `all 0.20s ease-out`}}/>
                        <circle filter={"url(#filter0_f_57_12)"} cx={cursorState.x} cy={cursorState.y} fill={cursorState.color}
                                r={cursorState.r * cursorState.scale * 0.90}
                                style={{transition: `all 0.25s ease-out`}}/>
                        <circle filter={"url(#filter0_f_57_12)"} cx={cursorState.x} cy={cursorState.y} fill={cursorState.color}
                                r={cursorState.r * cursorState.scale * 0.85}
                                style={{transition: `all 0.30s ease-out`}}/>
                    <defs>
                        <filter id="filter0_f_57_12" x={0} y={0} width="100%" height="100%" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feGaussianBlur stdDeviation="40" result="effect1_foregroundBlur_57_12"/>
                        </filter>
                    </defs>
                </svg>
            </div>
    )
}
export default Cursor