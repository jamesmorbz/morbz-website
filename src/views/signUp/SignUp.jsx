import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  
  function signupAction() {
    console.log(email);
    console.log(pass);
  }
    

  function emailChangeAction(event) {
    setEmail(event.target.value);
  }

  function passChangeAction(event) {
    setPass(event.target.value);
  }


  return (
    <div>
      <Card sx={{ maxWidth: 275 }}>
        <CardContent>
          {/* <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
        </Typography>
          <Typography variant="h5" component="div">
            benevolent
        </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
        </Typography>
          <Typography variant="body2">
            well meaning and kindly.
          <br />
            {'"a benevolent smile"'}
          </Typography> */}
          <label>Email:
      <input type="text" value={email} onChange={emailChangeAction} />
          </label>
          <label>Password:
      <input type="text" value={pass} onChange={passChangeAction} />
          </label>
          <button onClick={signupAction}>Sign Up</button>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default SignUp;
