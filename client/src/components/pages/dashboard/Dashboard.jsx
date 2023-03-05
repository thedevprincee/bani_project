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
import VitualAccForm from "../../molecules/virtualaccform/VirtualAccForm";
import SideBarMenuSection from "../../molecules/sideBarMenuSection/SideBarMenuSection";

import Activities from "../../organisms/Activities/Activities";

import Nav from "../../elements/nav/Nav";
import Text from "../../atoms/text/Text";
import CardModal from "../../organisms/modal/CardModal";
import { AuthForm } from "../../molecules/authform/AuthForm";
import BranchForm from "../../molecules/branchform/BranchForm";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from "react-redux";


const Dashboard = () => {
const isModal = useSelector(({modal})=>modal.isModal)
const modalType = useSelector(({modal})=>modal.modalType)
const modalTitle = useSelector(({modal})=>modal.modalTitle)


const cardContent = () =>{
  switch (modalType) {
    case 'branch': return <BranchForm />;
    case 'virtual': return <VitualAccForm />;
    default: " "
 }
}
// VirtualAccForm
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
      <CardModal title={modalTitle} >
          {
           cardContent()
          }
      </CardModal>
 
    </DashboadWrapper>
  );
};

export default Dashboard;
