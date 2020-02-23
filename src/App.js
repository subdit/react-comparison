import React, {Component} from 'react';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [ ],
      isLoaded: false,
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        })
      });
  }

  render(){
    const { isLoaded, items} = this.state;

    if (!isLoaded) {
      return <div> Loading ... </div>

    }
    else {

      return (
        <div className="App">
          <h1>Hello React-API</h1>
          <ul>
            {items.map(items =>(
              <li key={items.id}>
                  name: {items.name} ||,
                  email: {items.email}
              </li>
            ))};
          </ul>
        </div>

     );
            }
  }
}
export default App;
