import { createGlobalStyle } from 'styled-components'

const AppWrapper = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}
/* table, tr, tbody, thead, td{
    padding: 0;
    margin: 0;
} */
`

export default AppWrapper