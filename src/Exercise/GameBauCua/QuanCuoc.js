import React from "react";
import { useDispatch } from "react-redux";
import { useSpring, animated } from "react-spring";
import { DAT_CUOC } from "../../redux/types/GameBauCuaTypes";

export default function QuanCuoc(props) {
    const dispatch = useDispatch();

    const [propsUseSpringIncrease, setIncrease] = useSpring(() => ({
        scale: 1.25,
        from: { scale: 1 },
        reset: true,
    }));

    const [propsUseSpringDecrease, setDecrease] = useSpring(() => ({
        scale: 1.25,
        from: { scale: 1 },
        reset: true,
    }));

    return (
        <div className="mt-3 mx-auto" style={{ width: "200px" }}>
            <img
                style={{ width: "100%" }}
                src={props.qc.hinhAnh}
                alt={props.qc.ma}
            />
            <div className="bg-success text-center">
                <animated.button
                    style={{
                        transform: propsUseSpringIncrease.scale.interpolate(
                            (scale) => `scale(${scale})`
                        ),
                    }}
                    onClick={() => {
                        setIncrease({ scale: 1 });
                        setIncrease({ scale: 1.25 });
                        dispatch({
                            type: DAT_CUOC,
                            quanCuoc: props.qc,
                            tangGiam: true,
                        });
                    }}
                    className="btn btn-danger m-2"
                >
                    +
                </animated.button>
                <span className="text-warning" style={{ fontSize: "25px" }}>
                    {props.qc.diemCuoc}
                </span>
                <animated.button
                    style={{
                        transform: propsUseSpringDecrease.scale.interpolate(
                            (scale) => `scale(${scale})`
                        ),
                    }}
                    onClick={() => {
                        setDecrease({ scale: 1 });
                        setDecrease({ scale: 1.25 });
                        dispatch({
                            type: DAT_CUOC,
                            quanCuoc: props.qc,
                            tangGiam: false,
                        });
                    }}
                    className="btn btn-danger m-2"
                >
                    -
                </animated.button>
            </div>
        </div>
    );
}
