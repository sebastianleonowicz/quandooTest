import React from 'react';

const Repository = (props) => {
    return   <li>
                <h3>
                    <a href='#'>{props.repoName}</a>
                </h3>
                <span>Forked From</span>
                <span>{props.description}</span>
                <div>
                    <span>{props.language}</span>
                    <span>{props.forks}</span>
                    <span>{props.license}</span>
                    <span>{props.updated}</span>
                </div>
            </li>
}

export default Repository;