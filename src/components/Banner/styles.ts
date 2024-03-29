import styled from "styled-components";

export const InfoBannerContainer = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 2rem;

  transform: translateY(-50%);

  border-radius: 10px;
  box-shadow: 0 0 10px ${(props) => props.theme["profile"]};
  background: ${(props) => props.theme["profile"]};

  p {
    margin-block: 1rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;

    transform: translateY(-20%);
  }
`;

export const Main = styled.div`
  display: flex;
  gap: 2rem;

  > div {
    width: 100%;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const Avatar = styled.img`
  width: 148px;
  height: 148px;
  border-radius: 8px;
  margin-inline: auto;
`;

export const NavBar = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2rem;

  button {
    display: flex;
    gap: 0.5rem;
    cursor: pointer;
    line-height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    background: none;
    color: ${(props) => props.theme["blue"]};
    padding-bottom: 0.5rem;

    border: 1px solid transparent;

    :hover {
      transition: border-color 0.2s;
      border-bottom-color: ${(props) => props.theme["blue"]};
    }

    a {
      display: flex;
      color: ${(props) => props.theme["blue"]};
      text-decoration: none;
      gap: 0.5rem;
    }
  }

  @media (max-width: 900px) {
    margin-bottom: 0.5rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  @media (max-width: 900px) {
    margin-top: 1.5rem;
    margin-bottom: 0;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    display: flex;
    align-items: baseline;
    gap: 0.5rem;
    color: ${(props) => props.theme["span"]};
  }

  span {
    ::first-letter {
      text-transform: uppercase;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    margin-top: 1rem;
    gap: 1rem;
  }
`;
