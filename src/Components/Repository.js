import React from 'react';
import styled from 'styled-components';

const RepoList = styled.li`

`
const RepoName = styled.h3``
const RepoAnchor = styled.a``
const RepoForkedFromSpan = styled.span``
const RepoDescrSpan = styled.span``
const RepoDataContainer = styled.div``
const RepoMinorSpan = styled.span``

const Repository = (props) => {
    return   <RepoList>
                <RepoName>
                    <RepoAnchor href='#'>{props.repoName}</RepoAnchor>
                </RepoName>
                <RepoForkedFromSpan>Forked From</RepoForkedFromSpan>
                <RepoDescrSpan>{props.description}</RepoDescrSpan>
                <RepoDataContainer>
                    <RepoMinorSpan>{props.language}</RepoMinorSpan>
                    <RepoMinorSpan>{props.forks}</RepoMinorSpan>
                    <RepoMinorSpan>{props.license}</RepoMinorSpan>
                    <RepoMinorSpan>{props.updated}</RepoMinorSpan>
                </RepoDataContainer>
            </RepoList>
}

export default Repository;