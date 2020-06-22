import React,{ useState, useContext } from 'react';
import PropTypes from 'prop-types';
import '../css/bootstrap.css';
import AuthContext from "../contexts/AuthContext";
AuthForm.propTypes = {

};

function AuthForm(props) {
    const [form,setForm] = useState({username:'',password:''});
    const {handleLogin} = useContext(AuthContext);
    const onFormChange = evt => {
        const { target } =evt;
        setForm({...form,[target.name] : target.value });
    };

    const onSubmit =evt => {
        evt.preventDefault();
        handleLogin(form.username,form.password);
    };

    return (
            <form className=" form-inline my-2 my-lg-0 " onSubmit={onSubmit} >
                <div className="form-group">
                    <input name={'username'} className="form-control  mr-sm-2" value={form.username} placeholder="Username" onChange={onFormChange} />
                </div>
                <div className="form-group">
                    <input name={'password'} className="form-control  mr-sm-2" value={form.password} placeholder="Password" onChange={onFormChange} />
                </div>
                <button  type="btn btn-outline-success my-2 my-sm-0" className="btn btn-success" >Login</button>
            </form>

    );
}

export default AuthForm;