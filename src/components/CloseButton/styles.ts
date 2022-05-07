import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 1.25rem;
  right: 1.25rem;

  .close-button-popover-button {
    color: ${({ theme }) => theme.colors.textSecondary};

    &:hover {
      color: ${({ theme }) => theme.colors.textPrimary};
    }

    .icon-x {
      width: 1rem;
      height: 1rem;

      font-weight: bold;
    }
  }
`;
