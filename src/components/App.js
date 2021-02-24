import React, { Component } from 'react'

// function App(props){
//     return(
//         <h1>{props.name}</h1>
//     );
// }

// export default App;

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            text: "Good Morning Birmingham",
            userInput: '',
            hasLoaded: false
        }


    }

    handleInputChange = (value) => {
        this.setState({ userInput: value });
    }

    handleClickTrue = () => {
        this.setState(
            {
                hasLoaded: true
            })
    }

    handleClickFalse = () => {
        this.setState(
            {
                hasLoaded: false
            })
    }

    componentDidMount() {
        this.setState(
            {
                hasLoaded: true
            })
    }

    render() {

        if (this.state.hasLoaded === false) {
            return (
                <React.Fragment>
                    <h1>Loading....</h1>
                    <button onClick={this.handleClickTrue}>Click Me</button>
                </React.Fragment>

            )
        } else {
            return (
                <React.Fragment>
                    <h1>{this.props.name}...{this.state.text}</h1>
                    <input
                        value={this.state.userInput}
                        placeholder={this.state.text}
                        onChange={(event) => this.handleInputChange(event.target.value)}
                    />
                    <button onClick={this.handleClickFalse}>Click Me</button>
                </React.Fragment>
            )

        }
    }
}



export default App;



