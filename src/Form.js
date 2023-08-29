import { useDispatch } from "react-redux"
import { useState } from "react"
import {deposit,withdraw,nameUpdate,mobileUpdate,reset} from './Redux/Actions'

function Form() {

    let dispatch = useDispatch()
    const [amount, setAmount] = useState("")
    const [fullName, setFullName] = useState("")
    const [mobile, setMobile] = useState("")

    return (


        <>
            <div className="container">
                <h2 className="text-primary">Form</h2>
                <div className="row">
                    <div className="col-4">
                        <input className="form-control"
                            type="number"
                            placeholder="Enter amount"
                            value={amount}
                            onChange={(e) => {
                                let data = e.target.value;
                                setAmount(data)
                            }}

                        />
                    </div>
                    
                    <button
                        className="btn btn-primary col-1"
                        onClick={() => {
                            dispatch(deposit(amount))
                            // { type: "deposit", payload: amount }
                            setAmount("")
                        }}
                    >
                        Deposit
                    </button>
                    <button
                        className="btn btn-secondary mx-2  col-1"
                        onClick={() => {
                            dispatch(withdraw(amount));
                            // { type: "withdraw", payload: amount }
                            setAmount("")
                        }}
                    >
                        Withdraw
                    </button>


                    <div className="row mt-4">
                        <div className="col-4">
                            <input className="form-control"
                                type="text"
                                placeholder="Enter Full Name"
                                value={fullName}
                                onChange={(e) => {
                                    let data = e.target.value;
                                    setFullName(data)
                                }}
                            />
                        </div>

                        <button
                            className="btn btn-primary col-1 mx-2"
                            onClick={() => {
                                dispatch(nameUpdate(fullName));
                                // { type: "nameUpdate", payload: fullName }
                                setFullName("")
                            }}
                        >
                            Update
                        </button>

                    </div>
                    <div className="row mt-4">
                        <div className="col-4">
                            <input className="form-control"
                                type="text"
                                placeholder="Enter Mobile Number"
                                value={mobile}
                                onChange={(e) => {
                                    let data = e.target.value;
                                    setMobile(data)
                                }}
                            />
                        </div>

                        <button
                            className="btn btn-primary col-1 mx-2"
                            onClick={() => {
                                dispatch(mobileUpdate(mobile));
                                // { type: "mobileUpdate", payload: mobile }
                                setMobile("")
                            }}
                        >
                            Update
                        </button>
                    </div>
                    <button
                        className="btn btn-danger mt-2 col-1 mx-2"
                        onClick={() => {
                            dispatch(reset());
                            // { type: "reset" }

                        }}
                    >
                        Reset
                    </button>


                </div>
            </div>
        </>
    )
}

export default Form;