import React from "react";
import Button from "../../atoms/button/Button";
import Text from "../../atoms/text/Text";
import BreadcrumbWrapper, {
  CrumbButtonSection,
  CrumbTitle,
  BranchBtn,
  VirtualAcchBtn,
} from "./Breadcrumb.styles";
import Icon from "../../../assets/Icons.svg";

const Breadcrumb = () => {
  return (
    <BreadcrumbWrapper>
      <CrumbTitle>
        <Text type="h3">Virtual Account Dashboard</Text>
      </CrumbTitle>
      <CrumbButtonSection>
        <BranchBtn>
          <img src={Icon} alt="" />
          <Text>Create New Branch</Text>
        </BranchBtn>
        <VirtualAcchBtn>
          +<Text> Create Virtual Account</Text>
        </VirtualAcchBtn>
      </CrumbButtonSection>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
