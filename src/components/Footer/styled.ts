import styled from 'styled-components';

// Container semântico <footer>, cores e espaçamento puxados do theme.
export const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: ${({ theme }) => theme.spacing.medium};
  text-align: center;
`;
