import React from 'react';
import './Header.css';

function HeaderContent() {
    return (
        <div class="inlineblock flex">
        <img src="https://tk-assets.lambdaschool.com/1c1b7262-cf23-4a9f-90b6-da0d3c74a5c6_lambdacrest.png" alt="Lambda School Logo" class="logo"></img>
        <div class="inlineblock eighty">
        <h1>Lambda School</h1> <p class="tagdate">@LambdaSchool • 26 jan</p>
        <p class="toptext">Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
        </div>
        </div>
        )
}

export default HeaderContent;