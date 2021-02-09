import { DAT_CUOC, PLAY_AGAIN, SOCK_DEER } from '../types/GameBauCuaTypes'

const initialState = {
    danhSachCuoc: [
        { ma: "ga", hinhAnh: "./img/BaiTapGameBauCua/ga.png", diemCuoc: 0 },
        { ma: "bau", hinhAnh: "./img/BaiTapGameBauCua/bau.png", diemCuoc: 0 },
        { ma: "ca", hinhAnh: "./img/BaiTapGameBauCua/ca.png", diemCuoc: 0 },
        { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png", diemCuoc: 0 },
        { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png", diemCuoc: 0 },
        { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png", diemCuoc: 0 },
    ],
    tongDiem: 1000,
    mangXucXac: [
        { ma: "nai", hinhAnh: "./img/BaiTapGameBauCua/nai.png" },
        { ma: "cua", hinhAnh: "./img/BaiTapGameBauCua/cua.png" },
        { ma: "tom", hinhAnh: "./img/BaiTapGameBauCua/tom.png" },
    ],
};

const GameBauCuaReducer = (state = initialState, action) => {
    switch (action.type) {
        case DAT_CUOC: {
            let danhSachCuoc = [...state.danhSachCuoc];
            let index = danhSachCuoc.findIndex(
                (item) => item.ma === action.quanCuoc.ma
            );
            if (index !== -1) {
                if (action.tangGiam && state.tongDiem >= 100) {
                    state.tongDiem += -100;
                    danhSachCuoc[index].diemCuoc += 100;
                } else if (!action.tangGiam) {
                    if (danhSachCuoc[index].diemCuoc >= 100) {
                        danhSachCuoc[index].diemCuoc += -100;
                        state.tongDiem += 100;
                    }
                }
            }
            state.danhSachCuoc = [...danhSachCuoc];
            return { ...state };
        }
        case SOCK_DEER: {
            
            const mangXucXacNgauNhien = [];
            for (let i = 0; i < 3; ++i) {
                let randomNumber = Math.floor(Math.random() * 6);
                mangXucXacNgauNhien.push(state.danhSachCuoc[randomNumber]);
            }
            state.mangXucXac = [...mangXucXacNgauNhien];
            let mangXucXacWin = mangXucXacNgauNhien.filter(item => item.diemCuoc !== 0);
            let tienThuong = 0;
            if (mangXucXacWin.length > 0) {
                tienThuong = mangXucXacWin.reduce((tienThuong, item) => tienThuong += item.diemCuoc, 0);
                while (mangXucXacWin.length > 0) {
                    let item = {...mangXucXacWin[0]};
                    tienThuong += item.diemCuoc;
                    mangXucXacWin = mangXucXacWin.filter(xucXac => xucXac.ma !== item.ma);
                }
            }
            state.tongDiem += tienThuong;
            state.danhSachCuoc = state.danhSachCuoc.map(item => ({...item, diemCuoc: 0}))
            return {...state}
        }
        case PLAY_AGAIN: {
            state.danhSachCuoc = state.danhSachCuoc.map(item => ({...item, diemCuoc: 0}))
            state.tongDiem = 1000;
            return {...state}
        }
        default:
            return { ...state };
    }
};

export default GameBauCuaReducer;
