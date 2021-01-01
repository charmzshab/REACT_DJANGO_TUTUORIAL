 import React, { Component } from "react";
 import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";
import Room from "./Room";

import { Button, Grid, Typography, ButtonGroup} from '@material-ui/core';

import { BrowserRouter as Router, Switch, Route, Link,Redirect } from "react-router-dom"


 export default class HomePage extends Component {
     constructor(props){
         super(props);
         this.state = {
             roomCode: null,
         };
     }

     async componentDidMount(){ //means the component just did mount for the first time on the screen(its a life cycle method)
        fetch("/api/user-in-room")
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    roomCode: data.code
                });
            });
     }

     renderHomePage(){
         return (
            <Grid container spacing={3}>
                <Grid item xs={12} align="center">
                    <Typography variant="h3" component="h3">
                        House Party
                    </Typography>
                </Grid>
                <Grid item xs={12} align="center">
                    <ButtonGroup disableElevation variant="contained" color="primary">
                        <Button color="primary" to='/join' component={ Link }>
                            Join a Room
                        </Button>
                        <Button color="secondary" to='/create' component={ Link }>
                            Create a Room
                        </Button>
                    </ButtonGroup>
                </Grid>

            </Grid>
         );

     }

     render(){
         return (
             <Router>
                 <switch>
                     <Route exact path="/">{this.renderHomePage()}</Route>
                     <Route exact path="/" render={() =>{return this.state.roomCode ? 
                        (<Redirect to={`/room/${this.state.roomCode}`} />):(this.renderHomePage())} }/>
                     <Route path='/join' component={RoomJoinPage} />
                     <Route path='/create' component={CreateRoomPage} />
                     <Route path='/room/:roomCode' component={Room} />
                 </switch>
             </Router>

         );
     }
 }