import React from 'react'
import DanhSachCuoc from './DanhSachCuoc'
import DanhSachXucXac from './DanhSachXucXac'
import DiemCuoc from './DiemCuoc'
import './BaiTapGameBauCua.css'

export default function BaiTapGameBauCua() {
    return (
        <div id='BaiTapGameBauCua' className="container-fluid" style={{height:'100vh'}}>
            <DiemCuoc/>
            <div className="row">
                <div className="col-8">
                    <DanhSachCuoc/>
                </div>
                <div className="col-4">
                    <DanhSachXucXac/>
                </div>
            </div>
        </div>
    )
}
