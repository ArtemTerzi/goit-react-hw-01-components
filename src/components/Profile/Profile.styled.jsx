import styled from '@emotion/styled';

export const ProfileWrapper = styled.div`
  padding: 8px;
  margin-top: 40px;
  border-radius: 16px;
  text-align: center;
  background-color: white;
  border: 2px solid #ffff4d;
  transition: all 300ms;
  width: 500px;

  :hover,
  :focus {
    scale: 1.05;
    box-shadow: 1px 1px 2px 3px #929292;
    background: linear-gradient(
      180deg,
      rgba(230, 252, 41, 1) 33%,
      rgba(0, 99, 255, 1) 66%
    );
    color: white;
  }
`;

export const Description = styled.div`
  padding: 16px;
`;

export const Avatar = styled.img`
  width: 200px;
  margin: 32px auto;
  border-radius: 150px;
  background-color: white;
`;

export const Username = styled.p`
  font-weight: 700;
  margin-top: 16px;
  margin-bottom: 16px;
`;

export const DescriptionText = styled.p`
  color: #929292;
  font-size: 28px;
  margin-bottom: 16px;
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: center;

  margin-top: 24px;
  border: 1px solid #336699;
  border-radius: 24px;
`;

export const StatItem = styled.li`
  display: flex;
  flex-direction: column;

  padding: 16px;
  width: 100%;
`;

export const StatItemLabel = styled.span`
  color: #929292;
  font-size: 20px;
`;

export const StatItemValue = styled.span`
  font-size: 24px;
  font-weight: 700;
`;
