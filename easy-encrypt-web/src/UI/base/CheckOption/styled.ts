import styled, { css } from 'styled-components';

export const Container = styled.div<{ checked: boolean }>(
  ({ theme, checked }) => css`
    display: inline-flex;
    align-items: center;
    position: relative;
    gap: ${theme.size(4)};
    padding: ${theme.size(3)} ${theme.size(4)};
    margin: ${theme.size(2)} 0;
    margin-right: ${theme.size(4)};
    border: 1px solid transparent;
    border-radius: ${theme.radius.medium};
    cursor: pointer;
    box-shadow: ${theme.shadow.low};
    background-color: ${theme.colors.bg3};
    transition: border 0.3s, box-shadow 0.3s;

    ${checked && `background-color: ${theme.colors.bg1}; border-color: ${theme.colors.main}`};

    ${Title} {
      ${checked && `color: ${theme.colors.main}`};
    }

    :hover {
      box-shadow: ${theme.shadow.medium};
    }
  `
);

export const Icon = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    font-size: ${theme.fontSize.h2};
    opacity: 0.5;
    position: absolute;
    top: 0;
    left: 0;
  `
);

export const Text = styled.div(
  ({ theme }) => css`
    font-size: ${theme.fontSize.label};
    height: 100%;
  `
);

export const Title = styled.div(
  ({ theme }) => css`
    margin-bottom: ${theme.size(1)};
    color: ${theme.colors.text2};
    font-weight: bold;
  `
);

export const Description = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.size(1)};
    font-size: ${theme.fontSize.verySmall};
  `
);
