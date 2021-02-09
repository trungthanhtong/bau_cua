import React, { Fragment } from "react";
import { config, useSpring, animated } from "react-spring";

export default function XucXac(props) {
    const [propsDice, set] = useSpring(() => ({
        xyz: [360, 360, 360],
        from: {
            xyz: [0, 0, 0],
        },
        config: { duration: 1000 },
        reset: true,
    }));

    set({
        xyz:[360, 360, 360]
    });

    return (
        <Fragment>
            <div
                className="scene"
            >
                <animated.div style={{
                    transform: propsDice.xyz.interpolate(
                        (x, y, z) =>
                            `translateZ(-25px) rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`
                    ),
                }} className="cube">
                    <div className="cube__face front">
                        <img
                            style={{ width: "50px" }}
                            src={props.xucXac.hinhAnh}
                            alt={props.xucXac.ma}
                        />
                    </div>
                    <div className="cube__face back">
                        <img
                            style={{ width: "100%" }}
                            src="./img/BaiTapGameBauCua/bau.png"
                            alt={props.xucXac.ma}
                        />
                    </div>
                    <div className="cube__face left">
                        <img
                            style={{ width: "100%" }}
                            src="./img/BaiTapGameBauCua/cua.png"
                            alt={props.xucXac.ma}
                        />
                    </div>
                    <div className="cube__face right">
                        <img
                            style={{ width: "100%" }}
                            src="./img/BaiTapGameBauCua/nai.png"
                            alt={props.xucXac.ma}
                        />
                    </div>
                    <div className="cube__face top">
                        <img
                            style={{ width: "100%" }}
                            src="./img/BaiTapGameBauCua/tom.png"
                            alt={props.xucXac.ma}
                        />
                    </div>
                    <div className="cube__face bottom">
                        <img
                            style={{ width: "100%" }}
                            src="./img/BaiTapGameBauCua/ca.png"
                            alt={props.xucXac.ma}
                        />
                    </div>
                    {/* <img src={props.xucXac.hinhAnh} alt={props.xucXac.ma} className="ms-3 cube__face back"/>
                    <img src={props.xucXac.hinhAnh} alt={props.xucXac.ma} className="ms-3 cube__face left"/>
                    <img src={props.xucXac.hinhAnh} alt={props.xucXac.ma} className="ms-3 cube__face right"/>
                    <img src={props.xucXac.hinhAnh} alt={props.xucXac.ma} className="ms-3 cube__face top"/>
                    <img src={props.xucXac.hinhAnh} alt={props.xucXac.ma} className="ms-3 cube__face bottom"/> */}
                </animated.div>
            </div>
        </Fragment>
    );
}
