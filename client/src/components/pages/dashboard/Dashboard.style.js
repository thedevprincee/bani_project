import styled from 'styled-components'

const DashboadWrapper = styled.div`
    /* width: 100vw; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
`

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 8vh;
    z-index: 2;
    padding: 8px 24px;
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
    display: flex;
    height: auto;
    width: 100vw;
    @media screen and (min-width:990px)  {
        height: 90vh;
        width: 15%;
    }
`
export const MainWrapper = styled.div`
    width: 100%;
    height: 90vh;
    padding: 8px 24px;
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
        justify-content: space-between;
    }
`

export const AccountLayout = styled.div`
    width: 100%;
    height: auto;
    @media screen and (min-width:990px)  {
        width: 69%;
        height: 100%;
    }
`

export const FeedLayout = styled.div`
    width: 100%;
    height: auto;
    @media screen and (min-width:990px)  {
        width: 29%;
        height: 100%;
    }
`

export default DashboadWrapper