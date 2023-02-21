import React from "react";
import Skeleton from "../../atoms/skeleton/Skeleton";
import DashboadWrapper from "./Dashboard.style";
import Breadcrumb from "../../molecules/breadcrumb/Breadcrumb";
import {
  HeaderWrapper,
  BodyWrapper,
  SidebarLayout,
  MainWrapper,
  BreadcrumbLayout,
  ContentWrapper,
  AccountLayout,
  FeedLayout,
} from "./Dashboard.style";
import Overview from "../../molecules/overview/Overview";
import VirtualAccount from "../../elements/virtual/VirtualAccount";
import SideBarMenuSection from "../../molecules/sideBarMenuSection/SideBarMenuSection";

const Dashboard = () => {
  return (
    <DashboadWrapper>
      <HeaderWrapper>
        <Skeleton type="thumbnail" children="Header Nav" />
      </HeaderWrapper>
      <BodyWrapper>
        <SidebarLayout>
          <SideBarMenuSection />
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
              <Skeleton type="thumbnail" children="Activities  Feed" />
            </FeedLayout>
          </ContentWrapper>
        </MainWrapper>
      </BodyWrapper>
    </DashboadWrapper>
  );
};

export default Dashboard;
