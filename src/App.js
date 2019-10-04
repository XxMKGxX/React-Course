import React, { Component } from 'react';
import './App.css';
// import Person from './Person/Person';

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
    state = {
        username: 'Conrad Is Great'
    }

    usernameChangedHandler = (event) => {
        this.setState({username: event.target.value});
    }

    render() {
        return (
            <div>
            <UserInput changed={this.usernameChangedHandler} currentName={this.state.username}/>
            <UserOutput userName={this.state.username}/>
            <UserOutput userName="Caleb"/>
            <UserOutput userName="Clive"/>
        </div>
        )
    }
}






// const App = props => {
//     const [ personsState, setPersonsState ] = useState({
//         persons: [
//             { name: 'Conrad', age: 17 },
//             { name: 'Caleb', age: 25 },
//             { name: 'Akwesa', age: 21 }
//         ],
//         otherState: 'some value'
//     });
    
//     const switchNameHandler = (newName) => {
//         // console.log('was clicked');
//         // Dont Do Thisthis.state.persons[0].name='Conrad';
//         setPersonsState({persons: [
//             { name: newName, age: 18 },
//             { name: 'Anesu', age: 24 },
//             { name: 'Conrad', age: 17 }
//         ]
//     });
//     };

//     const nameChangedHandler = (event) => {
//         setPersonsState({persons: [
//             { name: 'Anashe', age: 18 },
//             { name: event.target.value, age: 24 },
//             { name: 'Conrad', age: 17 }
//         ]
//     });
//     }

//         return (
//         <div className="App">
//             <h1>Hi I'm a React App!</h1>
//             <button onClick={switchNameHandler.bind(this,'Conrad')}>Switch Name</button>
//             <Person
//              name={personsState.persons[0].name}
//              age={personsState.persons[0].age}/>
//             <Person
//              name={personsState.persons[1].name}
//              age={personsState.persons[1].age}
//              click={switchNameHandler.bind(this,'Conny!')}
//              changed={nameChangedHandler}>
//              My Hobbies: Video Games</Person>
//             <Person 
//              name={personsState.persons[2].name}
//              age={personsState.persons[2].age}/>
            

//         </div>
//         );
//     // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, 'Does This Work Now'))

//         };
export default App; 