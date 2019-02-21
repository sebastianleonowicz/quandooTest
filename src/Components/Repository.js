import React from 'react';
import styled from 'styled-components';

const RepoList = styled.li`
    padding: 1.5rem 2rem;
    width: 50%;

    @media only screen and (max-width: 620px) {
        width: 100%;
    }
`
const RepoName = styled.h3`
    font-size: 2rem;
    background-color: #47DD92;
    padding: 1rem;
    color: white;
    border-radius: 3px;
`
const RepoAnchor = styled.a`
    /* font-size: 2rem; */
    text-decoration: none;

    &:visited {
        color: inherit;
    }
`
const RepoForkedFromSpan = styled.span`
    font-size: 1.4rem;
    padding: 1rem 0;
    display: block;
    font-weight: 300;
`
const RepoDescrSpan = styled.span`
    font-size: 1.8rem;
    display: block;
    
`
const RepoDataContainer = styled.div`
    /* font-size: 1.2rem; */
    padding: 1rem 0;
`

const DotSpan = styled.span`
    border-radius: 50%;
    color: red;
    height: 1rem;
    width: 1rem;
    display: inline-block;
`

const RepoMinorSpan = styled.span`
    font-size: 1.4rem;
    padding: 0 1rem;
`

const Repository = (props) => {
    if(props.license === undefined) {
        return   <RepoList>
                <RepoName>
                    <RepoAnchor href='#'>{props.repoName}</RepoAnchor>
                </RepoName>
                <RepoForkedFromSpan>Forked From Quandoo</RepoForkedFromSpan>
                <RepoDescrSpan>{props.description}</RepoDescrSpan>
                <RepoDataContainer>
                    <RepoMinorSpan>
                        <DotSpan></DotSpan>
                        {props.language}
                    </RepoMinorSpan>
                    <RepoMinorSpan>
                        <svg aria-label="fork" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                        {props.forks}
                    </RepoMinorSpan>
                    <RepoMinorSpan>Updated on {props.updated}</RepoMinorSpan>
                </RepoDataContainer>
            </RepoList>
    } else {
    return   <RepoList>
                <RepoName>
                    <RepoAnchor href='#'>{props.repoName}</RepoAnchor>
                </RepoName>
                <RepoForkedFromSpan>Forked From Quandoo</RepoForkedFromSpan>
                <RepoDescrSpan>{props.description}</RepoDescrSpan>
                <RepoDataContainer>
                    <RepoMinorSpan>
                        <DotSpan></DotSpan>
                        {props.language}
                    </RepoMinorSpan>
                    <RepoMinorSpan>
                        <svg aria-label="fork" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fillRule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                        {props.forks}
                    </RepoMinorSpan>
                    <RepoMinorSpan>
                        <svg viewBox="0 0 14 16" version="1.1" width="14" height="16" aria-hidden="true"><path fillRule="evenodd" d="M7 4c-.83 0-1.5-.67-1.5-1.5S6.17 1 7 1s1.5.67 1.5 1.5S7.83 4 7 4zm7 6c0 1.11-.89 2-2 2h-1c-1.11 0-2-.89-2-2l2-4h-1c-.55 0-1-.45-1-1H8v8c.42 0 1 .45 1 1h1c.42 0 1 .45 1 1H3c0-.55.58-1 1-1h1c0-.55.58-1 1-1h.03L6 5H5c0 .55-.45 1-1 1H3l2 4c0 1.11-.89 2-2 2H2c-1.11 0-2-.89-2-2l2-4H1V5h3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1h3v1h-1l2 4zM2.5 7L1 10h3L2.5 7zM13 10l-1.5-3-1.5 3h3z"></path></svg>
                        {props.license}
                    </RepoMinorSpan>
                    <RepoMinorSpan>Updated on {props.updated}</RepoMinorSpan>
                </RepoDataContainer>
            </RepoList>
    }
}

export default Repository;