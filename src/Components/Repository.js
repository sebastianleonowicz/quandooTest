import React from 'react';

const Repository = (props) => {
    return   <li>
                <p>{props.repoName}</p>
                <span>Forked From</span>
                <span>Description</span>
                <ul>
                <li>language</li>
                <li>number of forks</li>
                <li>appliable legal MIT/else</li>
                <li>last update</li>
                </ul>
            </li>
}

export default Repository;