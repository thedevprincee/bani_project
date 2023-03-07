import React, {useState} from 'react'
import { TXTInput, Label, LabelPText, LoginBtn } from '../authform/AuthForm.style'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import { setBranchForm } from '../../../store/features/modalSlice'
import { postBranch } from '../../../store/features/branchAPI'

const BranchForm = () => {
    const baseUrl = 'http://127.0.0.1:2345'
    const dispatch = useDispatch()
    const url = `${baseUrl}/api/branch/addbranch`
    const [branchName, setBranchName] = useState("")
    const [branchLocation, setBranchLocation] = useState("")

    const saveBranch = async()=>{
        if(branchName === "" || branchLocation ===""){
            const notify = () => toast("Field cannot be empty");
            notify()
        }else{
            const branch = {
                name: branchName,
                location: branchLocation,
            }
            const branchJSON = JSON.stringify(branch)
            
            
            // const requestOptions = {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: branchJSON
            // }
            
            try {
                const response = dispatch(postBranch(branch))
                const data = response.json()
                if(data.status === 'ok'){
                    const notify = () => toast(data.msg);
                    setBranchName("")
                    setBranchLocation("")
                    notify()
                    dispatch(setBranchForm({isModal: 'false', modalType: '', modalTitle: ''}))
                }else{
                    const notify = () => toast("Error Connecting. Try again");
                    setBranchName("")
                    setBranchLocation("")
                    notify()
                    dispatch(setBranchForm({isModal: 'false', modalType: '', modalTitle: ''}))
                }
            } catch (error) {
                console.log(error.message);
            }

        }
    }

  return (
    <>
            <Label>
              <LabelPText>Branch Name</LabelPText>
              <TXTInput value={branchName} onChange={(e)=>{setBranchName(e.target.value)}} />
            </Label>
            <Label>
              <LabelPText>Branch Location</LabelPText>
              <TXTInput value={branchLocation} onChange={(e)=>{setBranchLocation(e.target.value)}} />
            </Label>
            <LoginBtn onClick={()=>{saveBranch()}}>Add Branch</LoginBtn>
            
    </>
  )
}

export default BranchForm
