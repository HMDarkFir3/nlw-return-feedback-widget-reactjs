import styled, { css } from "styled-components";

export const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

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
`;

export const HasPhotoContainer = styled.button`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;

  width: 2.5rem;
  height: 2.5rem;

  padding: 0.25rem;

  color: ${({ theme }) => theme.colors.textSecondary};

  border-radius: 0.25rem;

  transition-property: color, background-color;
  transition-duration: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  .icon-trash {
    width: 1.125rem;
    height: 1.125rem;
  }
`;
