import styled from 'styled-components';
import { css } from 'styled-components';
import { Title as HeadingContainer } from '../Heading/styles';
import { Container as TextComponent } from '../TextComponent/styles';

export const Container = styled.div`
   ${({ theme }) => css`
   ${TextComponent} {
      margin-bottom: ${theme.spacings.xhuge};
   }
   `}
`;
export const Grid = styled.div`
   ${({ theme }) => css`
    counter-reset: grid-counter;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: ${theme.spacings.xlarge};
    overflow: hidden;


    @media ${theme.media.lteMedium} {
      grid-template-columns: 1fr;
    }
   `}
`;
export const GridElement = styled.div`
   ${() => css`

   ${HeadingContainer} {
    position: relative;
    left: 5rem;
   }

   ${HeadingContainer}::before {
    counter-increment: grid-counter;
    content: counter(grid-counter);
    position: absolute;
    font-size: 8rem;
    top: -4rem;
    left: -6rem;
    transform: rotate(15deg);
   }
   `}
`;
