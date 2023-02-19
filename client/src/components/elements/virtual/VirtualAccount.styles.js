import styled from "styled-components"

const VAWrapper = styled.div`
    background-color: rgb(255, 255, 255);
    height: 83%;
    border-radius: 8px;
    margin-top: 10px;
`

export const VAHeader = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: justify;
    place-content: stretch space-between;
    -webkit-box-align: center;
    align-items: center;
    order: 0;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    align-self: auto;
    height: auto;
    margin: 0px;
    padding: 12px 24px;
    border-top: 1px solid rgba(225, 225, 225, 0.8);
    border-bottom: 1px solid rgba(225, 225, 225, 0.8);
`

export const VAIcons = styled.div`
    display: flex;
    flex-direction: row;
    -webkit-box-pack: start;
    place-content: stretch flex-start;
    -webkit-box-align: center;
    align-items: center;
    order: 0;
    -webkit-box-flex: 0;
    flex: 0 1 auto;
    align-self: auto;
    height: auto;
    margin: 0px;
    padding: 0px;
    `

export const VAIcon = styled.div`
    border: 1px solid rgba(225, 225, 225, 0.8);
    padding: 5px;
    border-radius: 5px;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
`

export default VAWrapper