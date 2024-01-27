import "./OTPComponentDesign.css"
export function OTPComponents(){

    function checkNo(){

    }

    return(
        <div>
            <div className="topDiv">
                <div className="otp-box">
                    <div className="otp-component header"><b>Login via OTP</b></div>
                    <input className="otp-component input" type="number" style={{width:"200px"}} placeholder="Enter you mobile No"/>
                    <button className="button" style={{width:"100px"}}>Send OTP</button>
                </div>
            </div>
            <div className="topDiv">
                <div className="otp-box">
                    <div className="otp-component header"><b>Login via OTP</b></div>
                    <div className="otp-type">
                        <input className="otp-component input" type="number" style={{width:"15px",margin: "5px"}}/>
                        <input className="otp-component input" type="number" style={{width:"15px",margin: "5px"}}/>
                        <input className="otp-component input" type="number" style={{width:"15px",margin: "5px"}}/>
                        <input className="otp-component input" type="number" style={{width:"15px",margin: "5px"}}/>
                    </div>
                    <button className="button" style={{width:"100px"}}>Login</button>
                </div>
            </div>
        </div>
    )
}