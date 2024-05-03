import { useEffect, useState } from "react"

function Form() {
    const [formData, setFormDate] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [formDataErr, setFormDataErr] = useState({
        nameErr: '',
        emailErr: '',
        passwordErr: '',
        confirmPasswordErr: ''
    });
    const handler = (e) => {
        let copyData =  {...formData};
        copyData[e.target.name] = e.target.value
        setFormDate(copyData)
        let emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
        let passReg = /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+!=])(?=.{8,}).*$/
        if (copyData.name === '') {
            setFormDataErr({
                ...formDataErr,
                'nameErr': 'Please enter name'
            })
        } else {
            setFormDataErr({
                ...formDataErr,
                'nameErr': ''
            })
        }
        if(copyData.email.trim().length === 0){
            setFormDataErr({
                ...formDataErr,
                'emailErr': 'Please enter email'
            })
        }
        else if (!emailReg.test(copyData.email)) {
            setFormDataErr({
                ...formDataErr,
                'emailErr': 'Please enter valid email'
            })
        } else {
            setFormDataErr({
                ...formDataErr,
                'emailErr': ''
            })
        }
    }
    useEffect(() => {
        
    }, [formData])
    return <>
        <p>Name</p>
        <input onChange={handler} name="name" />
        {formDataErr.nameErr && <p className="invalid">{formDataErr.nameErr}</p>}
        <p>Email</p>
        <input onChange={handler} name="email" />
        {formDataErr.emailErr && <p className="invalid">{formDataErr.emailErr}</p>}
        <p>Password</p>
        <input type="text" onChange={handler} name="password" />
        {formDataErr.passwordErr && <p className="invalid">Invalid Password</p>}
        <p>Confirm Password</p>
        <input type="password" onChange={handler} name="confirmPassword" />
        {formDataErr.confirmPasswordErr && <p className="invalid">Password Mismatch</p>}
        <br />
        <button>Submit</button>
    </>

}
export default Form