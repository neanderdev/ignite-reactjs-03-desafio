import styled from "styled-components";

export const InfoBannerContainer = styled.div`
  display: flex;
  gap: 2rem;

  width: 100%;
  padding: 2rem;

  transform: translateY(-50%);

  border-radius: 10px;
  box-shadow: 0 0 10px ${(props) => props.theme["profile"]};
  background: ${(props) => props.theme["profile"]};

  a {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    line-height: 100%;
    text-decoration: none;
    text-transform: uppercase;

    font-weight: bold;
    font-size: 0.75rem;

    color: ${(props) => props.theme["blue"]};

    border: 1px solid transparent;

    :hover {
      transition: border-color 0.2s;
      border-bottom-color: ${(props) => props.theme["blue"]};
    }
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    flex: 1;
    width: 100%;
  }

  p {
    margin-block: 1rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;

    transform: translateY(-20%);
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
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;

  button {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    cursor: pointer;
    line-height: 100%;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.75rem;
    background: none;
    color: ${(props) => props.theme["blue"]};

    border: 1px solid transparent;

    :hover {
      transition: border-color 0.2s;
      border-bottom-color: ${(props) => props.theme["blue"]};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 900px) {
    margin-block: 1rem;
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