import { useState } from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import axios from 'axios';

function SignUp() {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  function signupAction(data) {
    console.log(email, pass);

    var data = JSON.stringify({
      "collection": "UserCreds",
      "database": "MorbzBackend",
      "dataSource": "Cluster0",
      "projection": {
        "_id": 5748,
        "username": { email },
        "password": { pass }
      }
    });

    var config = {
      method: 'post',
      url: 'https://data.mongodb-api.com/app/data-btmov/endpoint/data/beta/action/findOne',
      headers: {
        'Content-Type': 'application/json',
        'api-key': 'Q5H2NJLe4Dpf9Wa0FnbLTC5vNjJX7wOqZbvMMu11iqMIHyGCuHja0HFkC0EX0WT4'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div style={{ display: "flex", alignItems: 'center', justifyContent: 'center', height: "100vh" }}>
      <Card sx={{ maxWidth: 275, backgroundColor: "#FFFFFF" }}>
        <CardContent sx={{ display: "flex", alignItems: 'center', justifyContent: 'center', gap: "10px", flexDirection: "column" }}>
          <TextField id="outlined-basic" label="Email" variant="outlined" value={email} onChange={(event) => setEmail(event.target.value)} />
          <TextField id="outlined-basic" label="Password" variant="outlined" value={pass} onChange={(event) => setPass(event.target.value)} />
        </CardContent>
        <CardActions sx={{ display: "flex", alignItems: 'center', justifyContent: 'center' }}>
          <Button size="small" onClick={signupAction}>Sign Up</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default SignUp;

