import styled from 'styled-components'

const DashboadWrapper = styled.div`
    /* width: 100vw; */
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    position: relative;
    /* overflow: hidden scroll; */
    @media screen and (min-width: 990px) {
         overflow:hidden; 
        
    }
    
`
export const HeaderWrapper = styled.div`
    width: 100%;
    padding:8px 0;
    border-bottom:1.5px solid rgb(222, 222, 227);
    // height: 8vh;
    /* z-index: 2; */

`
export const BodyWrapper = styled.div`
    width: 100%;
    height: auto;
    display:flex;
    flex-direction: column;
    position: relative;
    background-color: #F5F6FA;
    @media screen and (min-width:990px)  {
        overflow-y:scroll;
        display: grid;
        grid-template-columns:12% 86%;
        gap:18px;
        height: 100%;
        flex-direction: row;
    }
`

export const SidebarLayout = styled.section`
    
    background-color:white;
    padding:20px 24px;
    // height: 92vh;
    // width: 15vw;
    @media screen and (max-width:576px)  {
        padding: 14px 15px 28px 15px;
        width: 100vw;
        height:40%;
        }
`
export const MainWrapper = styled.div`
    height: 90vh;
    padding: 8px 10px 24px 8px;
    // width: 85vw;
    display: block;
    flex-direction: column;
    @media screen and (min-width:990px)  {
        padding-top: 0px; 
    }
`

export const BreadcrumbLayout = styled.div`
    // width: 88vw;
    overflow: hidden;
    height: 100px;
    // margin-top: 5px;
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
    background-color: #fff;
    border-radius: 8px;
    @media screen and (min-width:990px)  {
        width: 30%;
        height: 100%;
        /* background-color: black; */
    }
`

export default DashboadWrapper