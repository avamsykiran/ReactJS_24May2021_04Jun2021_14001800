import {Component} from 'react'

class Header extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expan-sm">
                <a href="#" className="navbar-brand">{this.props.appName}</a>
            </nav>
        );
    }
}

export default Header;