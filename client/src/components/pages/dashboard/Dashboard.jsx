import React from 'react'
import Skeleton from '../../atoms/skeleton/Skeleton'
import DashboadWrapper from './Dashboard.style'
import Breadcrumb from '../../molecules/breadcrumb/Breadcrumb'
import { 
    HeaderWrapper, 
    BodyWrapper, 
    SidebarLayout, 
    MainWrapper, 
    BreadcrumbLayout,
    ContentWrapper,
    AccountLayout,
    FeedLayout
 } from './Dashboard.style'


const Dashboard = () => {
  return (
    <DashboadWrapper>
      <HeaderWrapper>
         <Skeleton type="thumbnail"  children="Header Nav" />
      </HeaderWrapper>
      <BodyWrapper>
        <SidebarLayout>
          <Skeleton type="thumbnail" children="SideBar" />
        </SidebarLayout>
        <MainWrapper>
            <BreadcrumbLayout>
                 <Breadcrumb />
            </BreadcrumbLayout>
            <ContentWrapper>
                <AccountLayout>
                    <Skeleton type="thumbnail" children="Accoun Layout" />
                </AccountLayout>
                <FeedLayout>
                    <Skeleton type="thumbnail"  children="Activities  Feed" />
                </FeedLayout>
            </ContentWrapper>
        </MainWrapper>
      </BodyWrapper>
    </DashboadWrapper>
  )
}

export default Dashboard
