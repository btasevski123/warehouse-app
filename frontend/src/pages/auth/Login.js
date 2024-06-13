import React from "react";
import styles from "./auth.module.scss";
import { BiLogIn } from "react-icons/bi";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


const Login = () => {


  return (
    <div className={`container ${styles.auth}`}>
      <Card>
        <div className={styles.form}>
          <div className="--flex-center">
            <BiLogIn size={35} color="#999" />
          </div>
          <h2>Login</h2>

          <form>
            <TextField
              type="email"
              label="Email"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              name="email"
            />
            <TextField
              type="password"
              label="Password"
              variant="outlined"
              required
              fullWidth
              margin="normal"
              name="password"
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{
                height: '40px',
                marginTop: '20px',
              }}
            >
              Login
            </Button>
          </form>
        </div>
      </Card>
    </div>
  );
};

export default Login;
