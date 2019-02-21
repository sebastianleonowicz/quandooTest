import React from 'react';
import styled from 'styled-components';

const RepoList = styled.li`
    padding: 1.5rem 2rem;
    width: 50%;
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
`
const RepoMinorSpan = styled.span`
    font-size: 1.4rem;
    padding: 1rem 0;
`

const Repository = (props) => {
    return   <RepoList>
                <RepoName>
                    <RepoAnchor href='#'>{props.repoName}</RepoAnchor>
                </RepoName>
                <RepoForkedFromSpan>Forked From Quandoo</RepoForkedFromSpan>
                <RepoDescrSpan>{props.description}</RepoDescrSpan>
                <RepoDataContainer>
                    <RepoMinorSpan>{props.language}</RepoMinorSpan>
                    <RepoMinorSpan>
                        <svg aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 10 16" version="1.1" width="10" height="16" role="img"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"></path></svg>
                        {props.forks}
                    </RepoMinorSpan>
                    <RepoMinorSpan>{props.license}</RepoMinorSpan>
                    <RepoMinorSpan>Updated on {props.updated}</RepoMinorSpan>
                </RepoDataContainer>
            </RepoList>
}

export default Repository;