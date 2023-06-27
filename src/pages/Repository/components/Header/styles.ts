import styled from "styled-components";

export const HeaderContainer = styled.div`
  transform: translateY(-48%);
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 0 28px #00000014;
  background: ${(props) => props.theme["profile"]};

  > div {
    p {
      margin-block: 1.5rem;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    transform: translateY(-18%);
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  h1 {
    font-size: 1.5rem;

    ::first-letter {
      text-transform: uppercase;
    }
  }

  a {
    font-size: 0.75rem;
    font-weight: bold;
    text-decoration: none;
    border-bottom: 1px solid transparent;
    color: ${(props) => props.theme["blue"]};

    svg {
      margin-left: 0.5rem;
    }

    :hover {
      border-color: ${(props) => props.theme["blue"]};
    }
  }

  @media (max-width: 900px) {
    align-items: center;
    margin-bottom: 1rem;
  }
`;

export const Info = styled.div`
  display: flex;
  gap: 1.5rem;

  div {
    color: ${(props) => props.theme["subtitle"]};

    svg {
      margin-right: 0.5rem;
      color: ${(props) => props.theme["label"]};
    }

    span {
      display: inline-block;

      ::first-letter {
        text-transform: uppercase;
      }
    }
  }

  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
