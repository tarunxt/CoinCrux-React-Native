import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
    font-family: ${theme.fonts.body};
    font-weight: ${theme.fontWeights.regular};
    color: ${theme.colors.text.primary};
    flex-wrap: wrap;
    margin-top: 0px;
    margin-bottom: 0px;
`;

const body = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const hint = (theme) => `
    font-size: ${theme.fontSizes.body};
`;

const error = (theme) => `
    font-size: ${theme.fontSizes.body};
    
    color: ${theme.colors.text.error};
`;

const label = (theme) => `
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.body};
    font-weight: ${theme.fontWeights.medium};
`;

const caption = (theme) => `
    font-family: ${theme.fonts.caption};
    font-weight: ${theme.fontWeights.bold};
`;

const muted = (theme) => `
  font-size: ${theme.fontSizes.body};
  color: ${theme.colors.text.disabled};
`;
const variants = {
  body,
  label,
  caption,
  error,
  hint,
  muted,
};
export const Text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;

Text.defaultProps = {
  variant: "body",
};
