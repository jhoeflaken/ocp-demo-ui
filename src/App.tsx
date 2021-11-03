import React from 'react';
import './App.css';
import {TopBar} from "./components/TopBar";
import {TaskList} from "./components/TaskList";
import {TaskActionBar} from "./components/TaskActionBar";


function App() {


    return (
        <div className="App">
            <TopBar />
            <TaskActionBar />
            <div style={{height: '400px', width: '100%'}}>
                <TaskList />
            </div>
        </div>
    );
}

export default App;
