import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import "./App.css";

function App() {
  const [findopen, setFindOpen] = React.useState(false);
  const [open, setActiveOpen] = React.useState(false);
  const [inopen, setInActiveOpen] = React.useState(false);
  const [name, setname] = React.useState("");
  const [pwd, setpwd] = React.useState("");

  const handleClickToOpenFind = () => {
    setFindOpen(true);
  };
  const handleClickToOpenActivate = () => {
    setActiveOpen(true);
  };
  const handleClickToOpen = () => {
    setInActiveOpen(true);
  };
  const handleChange = (e) => {
    setname(e.target.value);
  };
  const handleChangePwd = (e) => {
    setpwd(e.target.value);
  };
  const handleTofind = () => {
    setFindOpen(false);
    alert(name + "- your account found successfully");
    setname("");
  };
  const handleToactivate = () => {
    setActiveOpen(false);
    alert(name + "- your account activated successfully");
    setname("");
  };
  const handleToInactivate = () => {
    setInActiveOpen(false);
    alert(name + "- your account inactivated successfully");
    setname("");
  };

  return (
    <div className="App-header">
      <div>Welcome to The User Support System Dashboard</div>
      <div>
        <button onClick={handleClickToOpenFind}>Find user</button>
        <Dialog open={findopen}>
          <DialogTitle>{"Find User"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <label>userName:</label>
              <input
                type="text"
                placeholder="username"
                onChange={handleChange}
              ></input>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              onClick={handleTofind}
              color="primary"
              autoFocus
              class="submit"
            >
              Find
            </button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <button onClick={handleClickToOpenActivate}>Activate user</button>
        <Dialog open={open}>
          <DialogTitle>{"Activate User"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <label>userName:</label>
              <input
                type="text"
                placeholder="username"
                onChange={handleChange}
              ></input>
              <br />
              <label>password:</label>
              <input
                type="text"
                placeholder="password"
                onChange={handleChangePwd}
              ></input>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              onClick={handleToactivate}
              color="primary"
              autoFocus
              class="submit"
            >
              Activate
            </button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        <button onClick={handleClickToOpen}>InActivate user</button>
        <Dialog open={inopen}>
          <DialogTitle>{"InActivate User"}</DialogTitle>
          <DialogContent>
            <DialogContentText>
              <form>
                <label>userName*:</label>
                <input
                  type="text"
                  placeholder="username"
                  onChange={handleChange}
                ></input>
                <br />
                <label>password*:</label>
                <input
                  type="text"
                  placeholder="password"
                  onChange={handleChangePwd}
                  required
                ></input>
              </form>
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <button
              onClick={handleToInactivate}
              color="primary"
              autoFocus
              class="submit"
            >
              InActivate
            </button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}

export default App;
