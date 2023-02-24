import React from "react";
import { SideBarMenuItems } from "../../elements/SideBarMenuItems/SideBarMenuItems";
import {
  MenuSectionHead,
  BreakTxt,
  BottomLinks,
  SidebarCont,
  BottomLinksMob,
  PaymentDiv,
} from "./SideBarMenuSection.style";
import welcome from "../../../assets/welcome.svg";
import Compliance from "../../../assets/Compliance.svg";
import Overview from "../../../assets/Overview.svg";
import Products from "../../../assets/Products.svg";
import Customers from "../../../assets/Customers.svg";
import Orders from "../../../assets/Orders.svg";
import Wallets from "../../../assets/Wallets.svg";
import Transactions from "../../../assets/Transactions.svg";
import VirtualAccount from "../../../assets/VirtualAccount.svg";
import Livemode from "../../../assets/Livemode.svg";
import Settings from "../../../assets/Settings.svg";
import Auditlogs from "../../../assets/Auditlogs.svg";

const SideBarMenuSection = () => {
  return (
    <>
      <SidebarCont>
        <div>
          <SideBarMenuItems pText="Welcome" svgSrc={welcome} />
          <SideBarMenuItems pText="Compliance" svgSrc={Compliance} />
          <SideBarMenuItems pText="Overview" svgSrc={Overview} />
          {/* <BottomLinksMob>
            <SideBarMenuItems pText="Live mode" svgSrc={Livemode} />
          </BottomLinksMob> */}
        </div>
        <div>
          <MenuSectionHead>Business</MenuSectionHead>
          <SideBarMenuItems pText="Products" svgSrc={Products} />
          <SideBarMenuItems pText="Customers" svgSrc={Customers} />
          <SideBarMenuItems pText="Orders" svgSrc={Orders} />
          {/* <BottomLinksMob>
            <SideBarMenuItems pText="Settings" svgSrc={Settings} />
          </BottomLinksMob> */}
        </div>
        <PaymentDiv>
          <MenuSectionHead>Payment</MenuSectionHead>
          <SideBarMenuItems pText="Wallets" svgSrc={Wallets} />
          <SideBarMenuItems pText="Transactions" svgSrc={Transactions} />
          <BreakTxt>
            <SideBarMenuItems
              spanText="New"
              pText="Virtual Account"
              svgSrc={VirtualAccount}
            />
          </BreakTxt>
        </PaymentDiv>
        <BottomLinks>
          <SideBarMenuItems pText="Live mode" svgSrc={Livemode} />
          <SideBarMenuItems pText="Settings" svgSrc={Settings} />
          <SideBarMenuItems pText="Audit logs" svgSrc={Auditlogs} />
        </BottomLinks>
      </SidebarCont>
      <BottomLinksMob>
        <SideBarMenuItems pText="Live mode" svgSrc={Livemode} />
        <SideBarMenuItems pText="Settings" svgSrc={Settings} />
        <SideBarMenuItems pText="Audit logs" svgSrc={Auditlogs} />
      </BottomLinksMob>
    </>
  );
};

export default SideBarMenuSection;
