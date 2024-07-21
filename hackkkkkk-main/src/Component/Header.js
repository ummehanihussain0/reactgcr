import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

const ProfileName = styled.div`
  font-weight: bold;
`;

const FollowButton = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  background-color: #ddd;
  cursor: pointer;
  border-radius: 4px;
`;

const Header = () => (
  <HeaderContainer>
    <Profile>
      <Avatar src="https://via.placeholder.com/40" alt="Profile" />
      <ProfileName>Musab Khan</ProfileName>
    </Profile>
    <FollowButton>Follow</FollowButton>
  </HeaderContainer>
);

export default Header;
