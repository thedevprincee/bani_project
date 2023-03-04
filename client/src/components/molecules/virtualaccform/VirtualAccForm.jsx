import React, { useState } from "react";
import {
  EMInput,
  Label,
  LabelPText,
  LoginBtn,
} from "../authform/AuthForm.style";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { setBranchForm } from "../../../store/features/modalSlice";

const VitualAccForm = () => {
  const dispatch = useDispatch();
  const url = "http://127.0.0.1:2345/branch/addbranch";
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [accNumber, setAccNumber] = useState("");
  const [inFlow, setInFlow] = useState("");

  const saveBranch = async () => {
    if (branchName === "" || branchLocation === "") {
      const notify = () => toast("Field cannot be empty");
      notify();
    } else {
      const branch = {
        name: branchName,
        location: branchLocation,
      };
      const branchJSON = JSON.stringify(branch);

      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: branchJSON,
      };

      try {
        const response = await fetch(url, requestOptions);
        const data = await response.json();
        if (data.status === "ok") {
          const notify = () => toast(data.msg);
          setBranchName("");
          setBranchLocation("");
          notify();
          dispatch(setBranchForm("false"));
        } else {
          const notify = () => toast("Error Connecting. Try again");
          setBranchName("");
          setBranchLocation("");
          notify();
          dispatch(setBranchForm("false"));
        }
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  return (
    <>
      <Label>
        <LabelPText>Bank</LabelPText>
        <EMInput
          value={bankName}
          onChange={(e) => {
            setBankName(e.target.value);
          }}
        />
      </Label>
      <Label>
        <LabelPText>Branch</LabelPText>
        <EMInput
          value={branchName}
          onChange={(e) => {
            setBranchName(e.target.value);
          }}
        />
      </Label>
      <Label>
        <LabelPText>Account Number</LabelPText>
        <EMInput
          value={accNumber}
          onChange={(e) => {
            setAccNumber(e.target.value);
          }}
        />
      </Label>
      <Label>
        <LabelPText>Inflow</LabelPText>
        <EMInput
          value={inFlow}
          onChange={(e) => {
            setInFlow(e.target.value);
          }}
        />
      </Label>
      <LoginBtn
        onClick={() => {
          saveBranch();
        }}
      >
        Add Virtual Account
      </LoginBtn>
    </>
  );
};

export default VitualAccForm;
