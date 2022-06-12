import React from 'react';
import { useState } from 'react';
import './assets/css/App.css';
import { Dashbroad as WritterDashbroad } from './pages/writter/dashbroad';
import { Dashbroad as AdminDashbroad } from './pages/admin/dashbroad';
import { Dashbroad as BrokerDashbroad } from './pages/broker/dashbroad';
import Authen from './shared/components/authen/idex';

const accounts = [
    {username: 'admin', password: '123', role: 0},
    {username: 'staff1', password: '123', role: 1},
    {username: 'staff2', password: '123', role: 2}
];

function App() {
    const [signInData, setSignInData] = useState(undefined);
    const [authen, setAuthen] = useState(false);

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

    const getDashbroad = () => {
        switch (signInData.role) {
            case 0: return <AdminDashbroad userData={accounts[0]} onSignOut={() => signOutHandle()} />;
            case 1: return <BrokerDashbroad userData={accounts[1]} onSignOut={() => signOutHandle()} />;
            case 2: return <WritterDashbroad userData={accounts[2]} onSignOut={() => signOutHandle()} />;
            default: return null;
        }
    }

    return (
        <div className="App">
            {
                authen ? getDashbroad() : <Authen onSubmit={(data) => authenHandle(data)} />
            }
        </div>
    );
}

export default App;
