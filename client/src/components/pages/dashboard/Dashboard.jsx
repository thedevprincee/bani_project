import React from "react";
import Skeleton from "../../atoms/skeleton/Skeleton";
import Breadcrumb from "../../molecules/breadcrumb/Breadcrumb";
import DashboadWrapper, {
  HeaderWrapper,
  BodyWrapper,
  SidebarLayout,
  MainWrapper,
  BreadcrumbLayout,
  ContentWrapper,
  AccountLayout,
  FeedLayout
} from "./Dashboard.style";
import Overview from "../../molecules/overview/Overview";
import VirtualAccount from "../../elements/virtual/VirtualAccount";
import SideBarMenuSection from "../../molecules/sideBarMenuSection/SideBarMenuSection";

import Activities from "../../organisms/Activities/Activities";

import Nav from "../../elements/nav/Nav";
import Text from "../../atoms/text/Text";
import CardModal from "../../organisms/modal/CardModal";
import { AuthForm } from "../../molecules/authform/AuthForm";
import BranchForm from "../../molecules/branchform/BranchForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Dashboard = () => {
  return (
    <DashboadWrapper>
      <ToastContainer />
      <HeaderWrapper>
        <Nav />
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
              <Overview />
              <VirtualAccount />
            </AccountLayout>
            <FeedLayout>
              <Activities />
            </FeedLayout>
          </ContentWrapper>
        </MainWrapper>

        
      </BodyWrapper>
      <CardModal title="Add Branch" >
        <BranchForm />
      </CardModal>
      {/* <CardModal title="Add Virtual Account" >
        <VirtualAccForm />
      </CardModal> */}
    </DashboadWrapper>
  );
};

export default Dashboard;
