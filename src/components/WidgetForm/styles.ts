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
`;
