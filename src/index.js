import React from 'react';
import ReactDOM from 'react-dom';

const App=() =>{
return (
<div className="ui container">
    <div className="comment">
        <a href="/" className="avatar">
            <img alt="avtar"></img>
            <div className="content">
               
                <div className="metadata">
                    <span className="date">
                        today at 6:00pm
                    </span>
                </div>
                <div className="text">
                    nice blog post
                </div>
            </div>
            
        
    </div>


);

};

ReactDOM.render(<App/>,Document.querySelector('#root'));
