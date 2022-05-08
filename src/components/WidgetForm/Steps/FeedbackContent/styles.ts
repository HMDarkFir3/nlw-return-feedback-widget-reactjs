import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  padding-bottom: 1rem;

  > button {
    position: absolute;
    top: 1.25rem;
    left: 1.25rem;

    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    .icon-arrow-left {
      width: 1rem;
      height: 1rem;
    }
  }

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }

  > span {
    font-size: 1.25rem;
    line-height: 1.5rem;
    color: ${({ theme }) => theme.colors.textPrimary};
  }
`;

export const Form = styled.form`
  width: 100%;

  > textarea {
    width: 100%;
    min-width: 19rem;
    min-height: 7rem;

    padding: 1rem;

    font-size: 0.875rem;
    line-height: 1.25rem;
    color: ${({ theme }) => theme.colors.textPrimary};

    background-color: transparent;
    border: solid 0.125rem ${({ theme }) => theme.colors.surfaceSecondaryHover};
    border-radius: 0.375rem;

    resize: none;

    &::placeholder {
      color: ${({ theme }) => theme.colors.textSecondary};
    }

    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.brand};
    }

    &::-webkit-scrollbar {
      width: 0.75rem;
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.surfaceSecondary};
      border-radius: 1rem;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
    }
  }

  > footer {
    display: flex;
    gap: 0.5rem;

    margin-top: 0.5rem;

    .button-submit-photo {
      padding: 0.5rem;

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

        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.surfacePrimary},
          0 0 0 4px ${({ theme }) => theme.colors.brand};
      }

      .icon-camera {
        width: 1.5rem;
        height: 1.5rem;
      }
    }

    .button-submit-feedback {
      flex: 1;
      align-items: center;
      justify-content: center;

      padding: 0.5rem;

      font-size: 0.875rem;
      line-height: 1.25rem;
      color: ${({ theme }) => theme.colors.textPrimary};

      background-color: ${({ theme }) => theme.colors.brand};
      border-radius: 0.25rem;

      transition-property: color, background-color;
      transition-duration: 0.3s;

      &:hover {
        background-color: ${({ theme }) => theme.colors.brandHover};
      }

      &:focus {
        outline: none;

        box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.surfacePrimary},
          0 0 0 4px ${({ theme }) => theme.colors.brand};
      }
    }
  }
`;

export const Footer = styled.footer`
  padding-top: 1rem;

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
