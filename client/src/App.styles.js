import { createGlobalStyle } from 'styled-components'

const AppWrapper = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Poppins, sans-serif;
}
body{
    overflow: hidden;
}
`

export default AppWrapper