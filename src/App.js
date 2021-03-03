// import React, { Component } from 'react';

// class App extends Component {
//   render() {
//       return (
//           <>
//               <label>label</label>
//               <input type="text" onChange={() => {alert("test")}}/>
//           </>
//           );
//   };
// }

const App = () => {
    return (
        <div>
            <Cat/>
            <Cat/>
            <Cat/>
            <Cat/>
        </div>


        )

};

const Cat = () => {
    return <div>Meow!</div>
};

export default App;
