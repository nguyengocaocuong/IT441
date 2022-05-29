import { useState } from 'react';
import './authen.css';

const Authen = ({onSubmit}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmitHandle = () => {
        onSubmit({username, password});
    }

    return (
        <div className='authen'>
            <div className='signIn__form'>
                <div className='signIn__form__title'>
                    <h2>Đăng nhập</h2>
                </div>
                <div className='signIn__form__input'>
                    <div className='text__field'>
                        <input
                            type='text'
                            placeholder='tên đăng nhập'
                            value={username}
                            onChange={e => setUsername(e.target.value)}    
                        />
                        <i className='fa fa-user authen__icon' />
                    </div>
                    <div className='text__field'>
                        <input
                            type='password'
                            placeholder='mật khẩu'
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                        <i className='fa fa-lock authen__icon' />
                    </div>
                </div>
                <div className='signIn__form__action'>
                    <button onClick={onSubmitHandle} >Đăng nhập</button><br />
                    <span><i className='fa fa-question-circle-o' />Quên mật khẩu</span>
                </div>
            </div>
        </div>
    );
}

export default Authen;
