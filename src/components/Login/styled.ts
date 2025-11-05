import styled from 'styled-components';
// Grupo de campo (label + input + erro), com espaçamentos amistosos.
export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-bottom: 1rem;
  @media (min-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;
// Formulário base do login/registro (compartilhado).
export const Form = styled.form`
  display: flex;
  flex-direction: column;

  border-radius: 50%;
  width: 100%;
`;
// Rótulos com boa legibilidade.
export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: ${(props) => props.theme.fontSizes.medium};
  color: ${(props) => props.theme.colors.black};
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
// Inputs com foco destacado e cantos arredondados.
export const Input = styled.input`
  padding: ${(props) => props.theme.spacing.small};
  border: 1px solid ${(props) => props.theme.colors.gray};
  border-radius: 12px;
  font-size: ${(props) => props.theme.fontSizes.medium};
  background-color: ${(props) => props.theme.colors.secondary};
  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.primary};
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
// Mensagem de erro simples, usando a cor de perigo do tema.
export const ErrorMessage = styled.p`
  color: ${(props) => props.theme.colors.danger};
  font-size: ${(props) => props.theme.fontSizes.medium};
  margin-top: 0.25rem;
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
// Botão primário do formulário (habilita hover com leve redução de opacidade).
export const SubmitButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: ${(props) => props.theme.spacing.medium};

  border-radius: 12px;
  align-items: center;
  justify-content: center;
  font-size: ${(props) => props.theme.fontSizes.mediumLarge};
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.5;
    transition: opacity 0.3s ease;
  }
  @media (min-width: 1024px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
`;
