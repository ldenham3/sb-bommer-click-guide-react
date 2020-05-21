function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div>
                <FormattedDate date={this.state.date} />
                <Circle2 />
            </div>
            )
    }
}

class Circle2 extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div>inside circle 2</div>
        );
    }
}

// ReactDOM.render(
//     <App />,
//     document.getElementById('root')
// );

export default App;