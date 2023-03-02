import React, {useState} from 'react'
import { EMInput, Label, LabelPText, LoginBtn } from '../authform/AuthForm.style'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const BranchForm = () => {
    const url = "http://127.0.0.1:2345/branch/addbranch"
    const [branchName, setBranchName] = useState("")
    const [branchLocation, setBranchLocation] = useState("")

    const notify = () => toast("Branch Added");
    const saveBranch = ()=>{
        if(branchName === "" || branchLocation ===""){

        }else{

            console.log(branchName);
            console.log(branchLocation);
            setBranchName("")
            setBranchLocation("")
            notify()
        }
    }

  return (
    <>
            <Label>
              <LabelPText>Branch Name</LabelPText>
              <EMInput value={branchName} onChange={(e)=>{setBranchName(e.target.value)}} />
            </Label>
            <Label>
              <LabelPText>Branch Location</LabelPText>
              <EMInput value={branchLocation} onChange={(e)=>{setBranchLocation(e.target.value)}} />
            </Label>
            <LoginBtn onClick={()=>{saveBranch()}}>Add Branch</LoginBtn>
            
    </>
  )
}

export default BranchForm
