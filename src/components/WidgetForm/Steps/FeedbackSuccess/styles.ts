import styled from "styled-components";

export const Container = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 2.5rem 0;

    width: 19rem;

    > span {
      margin-top: 0.5rem;

      font-size: 1.25rem;
      line-height: 1.75rem;
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    > button {
      margin-top: 1.5rem;
      padding: 0.5rem 1.5rem;

      font-size: 0.875rem;
      line-height: 1.5rem;
      color: ${({ theme }) => theme.colors.textPrimary};

      background-color: ${({ theme }) => theme.colors.surfaceSecondary};
      border-radius: 0.25rem;

      transition-property: color, background-color;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.surfaceSecondaryHover};
      }

      &:focus {
        outline: none;

        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.surfaceSecondary},
          0 0 0 4px ${({ theme }) => theme.colors.brand};
      }
    }
  }
`;

export const Header = styled.header``;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;

  > span {
    font-size: 0.75rem;
    line-height: 1rem;
    color: ${({ theme }) => theme.colors.textSecondary};

    > a {
      text-decoration: underline;
      text-underline-offset: 2px;
      color: ${({ theme }) => theme.colors.textSecondary};
    }
  }
`;
