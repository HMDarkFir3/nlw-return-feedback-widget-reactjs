import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: relative;

  width: calc(100vw - 2rem);

  margin-bottom: 1rem;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.surfacePrimary};
  border-radius: 1rem;

  box-shadow: 0 10px 5px -1px rgba(0, 0, 0, 0.15);

  @media (min-width: 768px) {
    width: auto;
  }

  & header {
    padding-bottom: 2rem;
    span {
      font-size: 1.25rem;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.colors.textPrimary};
    }
  }

  & div {
    display: flex;

    gap: 0.5rem;
  }

  & footer {
    padding-top: 2rem;

    & span {
      font-size: 0.75rem;
      line-height: 1rem;
      color: ${({ theme }) => theme.colors.textSecondary};

      a {
        text-decoration: underline;
        text-underline-offset: 2px;
        color: ${({ theme }) => theme.colors.textSecondary};
      }
    }
  }
`;

export const Card = styled.button`
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  width: 6rem;

  padding: 1.25rem 0;

  background-color: ${({ theme }) => theme.colors.surfaceSecondary};
  border-radius: 0.5rem;
  border: solid 2px ${({ theme }) => theme.colors.surfaceSecondary};

  &:hover {
    border-color: ${({ theme }) => theme.colors.brand};
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.brand};
    outline: none;
  }

  & span {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;
