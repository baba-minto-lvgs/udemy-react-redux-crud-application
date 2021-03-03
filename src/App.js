import React, { Component } from 'react';
import PropTypes from 'prop-types';

const App = () => {
    const profiles = [
        {name: "Taro", age: 10},
        {name: "Hanako", age: 5},
        {name: "Noname", age: 3}
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

User.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number.isRequired
};

export default App;
