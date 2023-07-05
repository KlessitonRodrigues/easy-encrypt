import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity<{ color: ButtonProps['color'] }>(
  ({ theme, color }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
    gap: ${theme.size(2)};
    height: ${theme.size(18)};
    min-width: ${theme.size(40)};
    margin: ${theme.size(4)} 0;
    padding: 0 ${theme.size(4)};
    background-color: ${theme.colors.mainBg};
    border-radius: ${theme.radius.medium};

    ${() => {
      switch (color) {
        case 'yellow':
          return `background-color: ${theme.colors.yellow};`;
        case 'red':
          return `background-color: ${theme.colors.red};`;
        case 'green':
          return `background-color: ${theme.colors.green};`;
        case 'transparent':
          return css`
            background-color: transparent;
            border-width: 1.5px;
            border-color: ${theme.colors.text4};
          `;
      }
    }}
  `
);

export const Icon = styled.View(() => css``);

export const Label = styled.Text<{ color: ButtonProps['color'] }>(
  ({ theme, color }) => css`
    padding-right: ${theme.size(2)};
    padding-bottom: ${theme.size(1)};
    text-transform: capitalize;
    font-weight: bold;
    text-align: center;
    font-size: ${theme.fontSize.body};
    color: ${theme.colors.white};
    ${color === 'transparent' && `color: ${theme.colors.text3};`}
  `
);
