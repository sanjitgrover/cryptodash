import React, { Component } from 'react'
export const AppContext = React.createContext();
export default class AppProvider extends Component {
    state={
        page: 'dashboard'
    }

    setPage=page=>this.setPage({page});
    
    render() {
        return (
            <AppContext.Provider value={this.state}>
                {this.props.children}
                </AppContext.Provider>
        )
    }
}
