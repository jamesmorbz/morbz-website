import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';

function SignIn() {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const navigate = useNavigate();

    function signinAction(data) {
        console.log(email, pass)
        successAction()
    }

    function successAction() {
        console.log("Set redux to logged in, redirect to homepage");
        navigate('../', { replace: true })
    }

    function unAuthAction() {
        console.log("Set internal states to show errors.")
    }

    return (
        <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
            <Card sx={{ maxWidth: 275, backgroundColor: "#FFFFFF" }}>
                <CardContent sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: "10px", flexDirection: "column" }}>
                    <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
                    <TextField id="outlined-basic" label="Password" variant="outlined" value={pass} onChange={(event) => setPass(event.target.value)} />
                </CardContent>
                <CardActions sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                    <Button size="small" onClick={signinAction}>Sign In</Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default SignIn;

