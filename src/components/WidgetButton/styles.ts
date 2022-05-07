import styled from "styled-components";
import { Popover } from "@headlessui/react";

export const Container = styled(Popover)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  position: absolute;
  bottom: 1rem;
  right: 1rem;

  @media (min-width: 768px) {
    bottom: 2rem;
    right: 2rem;
  }

  .widget-button-popover-button {
    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;

    padding: 0.75rem;

    background-color: ${({ theme }) => theme.colors.brand};
    border: none;
    border-radius: 1.75rem;

    color: ${({ theme }) => theme.colors.textOnBrandColor};

    .icon-chat-teardrop-dots {
      width: 1.5rem;
      height: 1.5rem;
    }

    &:hover {
      & span {
        max-width: 20rem;

        transition: all ease 0.5s;
      }
    }

    & span {
      overflow: hidden;

      max-width: 0;

      font-size: 1rem;

      transition: all ease 0.5s;

      & span {
        padding-left: 0.5rem;
      }
    }
  }
`;
