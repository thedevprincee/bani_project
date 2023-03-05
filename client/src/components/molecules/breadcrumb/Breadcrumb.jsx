import React from "react";
import Button from "../../atoms/button/Button";
import { AiOutlinePlus } from "react-icons/ai";
import Text from "../../atoms/text/Text";
import BreadcrumbWrapper, {
  CrumbButtonSection,
  CrumbTitle,
  BranchBtn,
  VirtualAcchBtn,
} from "./Breadcrumb.styles";
import { useDispatch } from "react-redux";
import { setBranchForm } from "../../../store/features/modalSlice";
import Icons from "../../../assets/Icons.svg";

const Breadcrumb = () => {
  const dispatch = useDispatch();
  const setBranchModal = () => {
    dispatch(setBranchForm("true"));
  };
  return (
    <BreadcrumbWrapper>
      <CrumbTitle>
        <Text type="h4">Virtual Account Dashboard</Text>
      </CrumbTitle>
      <CrumbButtonSection>
        <BranchBtn onclick={setBranchModal}>
          <img src={Icons} alt="" />
          <Text> Create New Branch</Text>
        </BranchBtn>
        <VirtualAcchBtn>
          {" "}
          <AiOutlinePlus />
          <Text>Create Virtual Account</Text>
        </VirtualAcchBtn>
      </CrumbButtonSection>
    </BreadcrumbWrapper>
  );
};

export default Breadcrumb;
