import React from 'react';
import 'semantic-ui-css/semantic.min.css';
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";
import LanguageSelector from "./LanguageSelector"


class App extends React.Component {

    state = { language : 'english'};


    onLanguageChange=(language)=>{
        this.setState({language});
    }

    render(){
        return (<div className="ui container">
            <LanguageSelector onLanguageChange={this.onLanguageChange}/>

            <LanguageContext.Provider value={this.state.language}>
                <ColorContext.Provider value="primary">
                    <UserCreate/>
                </ColorContext.Provider>
            </LanguageContext.Provider>
        
        </div>)
    }
}

export default App