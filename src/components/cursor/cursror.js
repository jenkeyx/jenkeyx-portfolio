import React, {useEffect, useRef} from "react";
import "./cursor.scss"
import {useRecoilValue} from "recoil";
import {cursorAtom} from "../../store/cursor.atom";


const Cursor = () => {
    const cursorState = useRecoilValue(cursorAtom)
    const circleRef = useRef()

    useEffect(() => {
        if (circleRef !== null) {
            document.addEventListener('mousemove', e => {
                const circle = circleRef.current;
                window.requestAnimationFrame(() => {
                    circle.style.top = `${e.clientY - circle.offsetHeight / 2}px`
                    circle.style.left = `${e.clientX - circle.offsetWidth / 2}px`
                })
            })
        }
        return () => {

        };
    }, [circleRef]);

    return (
        <>
            <div className={"cursor"} ref={circleRef}>
                <svg width={"100%"} height={"100%"} xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50%" cy="50%" fill={cursorState.color} r={100 * cursorState.scale}/>
                </svg>
            </div>
            <TrailCircle fill={cursorState.color} scale={cursorState.scale} index={1}/>
            <TrailCircle fill={cursorState.color} scale={cursorState.scale} index={2}/>
            <TrailCircle fill={cursorState.color} scale={cursorState.scale} index={3}/>
            <TrailCircle fill={cursorState.color} scale={cursorState.scale} index={4}/>

        </>
    )
}

const TrailCircle = ({fill, scale, index}) =>{
    const trailRef = useRef()
    useEffect(() => {
        if (trailRef.current !== null) {
            document.addEventListener('mousemove', e => {
                const circle = trailRef.current;
                window.requestAnimationFrame(() => {
                    circle.style.top = `${e.clientY - circle.offsetHeight / 2}px`
                    circle.style.left = `${e.clientX - circle.offsetWidth / 2}px`
                })
            })
        }
        return () => {

        };
    }, [trailRef]);
    return(
        <div className={"cursor"} ref={trailRef} style={{transition:`all ${0.025 * index}s ease`}}>
            <svg width={"100%"} height={"100%"} xmlns="http://www.w3.org/2000/svg">
                <circle cx="50%" cy="50%" fill={fill} r={(100 - 10*index)/scale }/>
            </svg>
        </div>
    )
}
export default Cursor