import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}

article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}

body {
    font-family: 'Inter', sans-serif;
}

ol, ul {
	list-style: none;
}

blockquote, q {
	quotes: none;
}

blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

table {
	border-collapse: collapse;
	border-spacing: 0;
}

button{
    cursor: pointer;
}

:root{
    --color-primary: #27AE60;
    --color-primary-50: #93D7AF;
    --color-secondary: #EB5757;
    --color-white: #FFFFFF;

    --grey-1: #333333;
    --grey-2: #828282;
    --grey-3: #E0E0E0;
    --grey-4: #F5F5F5;

    --color-negative: #E60000;
    --color-warning: #FFCD07;
    --color-sucess: #168821;
    --color-information: #155BCB;

    --font-title-1: 1.625rem;
    --font-title-2: 1.375rem;
    --font-title-3: 1.125rem;
    --font-title-4: 0.875rem;
    --font-text-1: 1rem;
    --font-text-2: 0.875rem;
    --font-text-3: 0.75rem;

    --font-weight-1: 700;
    --font-weight-2: 600;

    --button-width-default: 6.625rem;
    --button-height-default: 2.5rem;

    --input-width-default: 22.813rem;
    --input-height-default: 3.75rem;

    --card-width-default: 18.75rem;
    --card-height-default: 21.625rem;
    --card-width-small: 5rem;
    --card-height-small: 5rem;

    --margin-default: 7.188rem;
}
`;
