import styled, { createGlobalStyle } from "styled-components";

export const Style = createGlobalStyle`
        //Reset style
        *,*::after,*::before {
            padding: 0;
            margin: 0;
            box-sizing:border-box ;
         }

         /* Variables */
        :root {
          //colors
         --dark-cyan:hsl(158, 36%, 37%);
         --cream:hsl(30, 38%, 92%);
         --very-dark-blue:hsl(212, 21%, 14%);
         --dark-grayish-blue:hsl(228, 12%, 48%);
         --white:hsl(0, 0%, 100%);
         //typographie
         --main-font-size:14px;
         --fraunces-font-family: 'Fraunces', serif;
         --montserrat-font-family: 'Montserrat', sans-serif;
        }

        body {
          font-family:var(--montserrat-font-family);
          font-size:var(--main-font-size);
          background:var(--cream);
        }
`;

export const Container = styled.section`
  width: 700px;
  margin: 5rem auto 0 auto;

  @media screen and (max-width: 750px) {
    width: 80%;
    margin-top: 1rem;
  }
`;
