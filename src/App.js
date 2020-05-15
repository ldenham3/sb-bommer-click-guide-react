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
            <FormattedDate date={this.state.date} />
            )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);