import React from 'react';
import styled from 'styled-components';

const AssignmentContainer = styled.div`
  background-color: #fff;
  padding: 2rem;
  margin-top: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 1.5rem;
`;

const Subtitle = styled.h4`
  margin: 0.5rem 0;
  font-weight: normal;
  color: #666;
`;

const Content = styled.p`
  color: #666;
  font-size: 0.9rem;
`;

const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

const ActionButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #eee;
  cursor: pointer;
  margin-left: 0.5rem;
  border-radius: 4px;
`;

const Assignment = () => (
  <AssignmentContainer>
    <Title>Intro to React</Title>
    <Subtitle>100 Points | Due: May 15, 2023</Subtitle>
    <Content>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Explicabo distinctio quis repellendus maiores quasi natus unde...
    </Content>
    <Actions>
      <ActionButton>Add or Create</ActionButton>
      <ActionButton>Mark as Done</ActionButton>
    </Actions>
  </AssignmentContainer>
);

export default Assignment;
