import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { sockDeer } from "../../redux/actions/GameBauCuaActions";
import XucXac from "./XucXac";

export default function DanhSachXucXac() {

    const dispatch = useDispatch();

    const danhSachXucXac = useSelector(state => state.GameBauCuaReducer.mangXucXac);

    const renderMangXucXac = () => danhSachXucXac.map((item, index) => {
        return <div className="mx-3" style={{width:200}} key={index}>
            <XucXac xucXac={item}/>
        </div>
    })
    
    return (
        <div className="mt-2 ms-5 text-center ">
            <div
                className="bg-white mx-auto mb-5"
                style={{ width: 300, height: 300, borderRadius: "50%" }}
            >
                <div className="row">
                    <div className="col-12 text-center d-flex mt-5 ms-">
                        {renderMangXucXac()}
                    </div>
                   
                </div>
            </div>
            <button onClick={() => {
                dispatch(sockDeer())
            }} className="text-center btn btn-danger">Sock Deer</button>
        </div>
    );
}
