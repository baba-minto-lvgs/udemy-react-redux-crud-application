import React, { Component } from 'react';

const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 5},
        {name: "noname"}
    ];

    return (
        <div>
            {profiles.map((profile, index) => {
                return <User key={index} name={profile.name} age={profile.age}/>
            })}
        </div>
        )

};

const User = (props) => {
    const {name, age} = props;
    return <div>Hi, I am {name}! I am {age} years old</div>
};

User.defaultProps = {
    age : 1
};

export default App;
