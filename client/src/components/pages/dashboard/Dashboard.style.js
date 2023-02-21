import styled from 'styled-components'

const DashboadWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`

export const HeaderWrapper = styled.div`
    width: 100vw;
    height: 8vh;
    z-index: 2;
`
export const BodyWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    position: relative;
    background-color: #F5F6FA;
    @media screen and (min-width:990px)  {
        height: 100%;
        flex-direction: row;
    }
`
export const SidebarLayout = styled.div`

    background-color:white;
    padding:20px 24px;
    height: 95vh;
    width: 15vw;
    @media screen and (max-width:576px)  {
    padding-top: 28px;
    align-items: center;
    justify-content: space-evenly;
    display: grid;
    grid-template-columns: 30% 30% 30%;
    height: 40%;
    width: 100vw;
    }
`
export const MainWrapper = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    flex-direction: column;
`

export const BreadcrumbLayout = styled.div`
    width: 100%;
    overflow: hidden;
    height: 100px;
    margin-top: 5px;
    padding: 0;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    @media screen and (min-width:990px)  {
        height: 10vh;

    }
`

export const ContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    @media screen and (min-width:990px)  {
        flex-direction: row;
    }
`

export const AccountLayout = styled.div`
    width: 100%;
    height: auto;
    @media screen and (min-width:990px)  {
        width: 70%;
        height: 100%;
    }
`

export const FeedLayout = styled.div`
    width: 100%;
    height: auto;
    @media screen and (min-width:990px)  {
        width: 30%;
        height: 100%;
    }
`
export default DashboadWrapper