import styled, { css } from 'styled-components';

export const Container = styled.button<{
  variant?: ButtonProps['variant'];
  color?: ButtonProps['color'];
}>(
  ({ theme, variant, color }) => css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: ${theme.size(2)};
    min-height: ${theme.size(11)};
    min-width: ${theme.size(30)};
    padding: 0 ${theme.size(3)};
    padding-right: ${theme.size(2)};
    margin-top: ${theme.size(2)};
    margin-right: ${theme.size(4)};
    border-radius: ${theme.radius.small};
    transition: opacity 0.2s;
    user-select: none;
    border: none;
    box-shadow: none;

    ${() => {
      switch (variant) {
        case 'solid':
          return css`
            background-color: ${theme.colors.mainBg};
            color: ${theme.colors.white};
            box-shadow: ${theme.shadow.medium};
          `;
        case 'outline':
          return css`
            color: ${theme.colors.text3};
            border: 1px solid ${theme.colors.text3};
            background-color: transparent;
            box-shadow: ${theme.shadow.low};
          `;
      }
    }}

    ${() => {
      switch (color) {
        case 'red':
          return `background-color: ${theme.colors.red};`;
        case 'yellow':
          return `background-color: ${theme.colors.yellow};`;
        case 'green':
          return `background-color: ${theme.colors.green};`;
      }
    }}

    &:hover {
      opacity: 0.8;
    }
  `
);

export const Label = styled.span(
  ({ theme }) => css`
    padding: ${theme.size(0.5)} 0;
    padding-top: ${theme.size(1)};
    font-size: ${theme.fontSize.label};
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: bold;
  `
);

export const Icon = styled.div(
  ({ theme }) => css`
    display: flex;
    font-size: ${theme.size(6)};
  `
);
