import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  bottom: 1.25rem;
  right: 1.25rem;

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;

    padding: 0.75rem;

    background-color: ${({ theme }) => theme.colors.brand};
    border: none;
    border-radius: 1.75rem;

    color: ${({ theme }) => theme.colors.textOnBrandColor};

    .icon {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      span {
        max-width: 20rem;

        transition: all ease 0.5s;
      }
    }

    span {
      overflow: hidden;

      max-width: 0;

      font-size: 1rem;

      transition: all ease 0.5s;

      span {
        padding-left: 0.5rem;
      }
    }
  }
`;
