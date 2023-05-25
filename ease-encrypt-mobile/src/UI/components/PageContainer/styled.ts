import { css } from 'styled-components';
import styled from 'styled-components/native';

export const Container = styled.View(
  () => css`
    flex: 1;
    width: 100%;
  `
);

export const Content = styled.View(
  () => css`
    flex: 1;
    width: 100%;
    align-items: center;
    justify-content: center;
  `
);