import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { playAgain } from '../../redux/actions/GameBauCuaActions'

export default function DiemCuoc(props) {

    const tongDiem = useSelector(state => state.GameBauCuaReducer.tongDiem)
    const dispatch = useDispatch()

    return (
        <div className="p-3">
            <h3 className="text-success text-center display-4">Game bầu cua</h3>
            <div className="text-center">
                <span style={{fontSize:'20px'}} className="p-3 text-white bg-danger">Tiền thưởng: <span className="text-warning">${tongDiem.toLocaleString()}</span> </span>
            </div>
            <div className="text-center mt-5">
                <button onClick={() => {
                    dispatch(playAgain())
                }} className="btn btn-primary">Play again</button>
            </div>
        </div>
    )
}
