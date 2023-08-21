import React, {Component} from "react";
import RoomJoinPage from "./RoomJoinPage";
import CreateRoomPage from "./CreateRoomPage";

import { BrowserRouter as Router, Routes, Link, Redirect, Route} from "react-router-dom";

export default class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <Router>
                <Routes>
                    <Route path='/join' element={<RoomJoinPage />}/>
                    <Route path='/create' element={<CreateRoomPage />}/>
                    <Route exact path='/' element={<p>This is the homepage</p>}/>
                </Routes>
            </Router>

        );
    }
}