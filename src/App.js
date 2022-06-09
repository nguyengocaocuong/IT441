import React from 'react';
import { useState } from 'react';
import './assets/css/App.css';
import Dashbroad from './pages/admin/dashbroad';
import Authen from './shared/components/authen/idex';

const accounts = [
    {username: 'admin', password: '123', role: 0},
    {username: 'staff1', password: '123', role: 1},
    {username: 'staff2', password: '123', role: 2}
];

function App() {
    const [signInData, setSignInData] = useState(undefined);
    const [authen, setAuthen] = useState(true);

    const authenHandle = (data) => {
        const result = accounts.findIndex(account => account.username === data.username && account.password === data.password);

        if (result !== -1)
        {
            setAuthen(true);
            setSignInData(accounts[result]);
        }
    }

    const signOutHandle = () => {
        setAuthen(false);
        setSignInData(undefined);
    }

    return (
        <div className="App">
            {
                authen ? <Dashbroad userData={accounts[1]} onSignOut={() => signOutHandle()} /> : <Authen onSubmit={(data) => authenHandle(data)} />
            }
        </div>
    );
}

export default App;
