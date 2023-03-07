import React, {useState, useEffect} from 'react'
import { TXTInput, NUMInput, FormLeftIcon, Select, FormGroup, Label, LabelPText, LoginBtn } from '../authform/AuthForm.style'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useDispatch } from 'react-redux'
import { setBranchForm } from '../../../store/features/modalSlice'

const VitualAccForm = () => {
    const baseUrl = 'http://127.0.0.1:2345'
    const dispatch = useDispatch()
    const addbranchUrl = `${baseUrl}/api/branch/addbranch`
    const branchListUrl = `${baseUrl}/api/branch`
    const addVirtualUrl = `${baseUrl}/api/user/virtual/addaccount`
    const bankUrl = "https://nigerianbanks.xyz"
    const [bankList, setBankList] = useState([])
    const [branchList, setBranchList] = useState({})
    const [isBankLoad, setIsBankLoad] = useState(false)
    const [isBranchLoad, setIsBranchLoad] = useState(false)
    const [bankName, setBankName] = useState([])
    const [branchName, setBranchName] = useState([])
    const [accNumber, setAccNumber] = useState("")
    const [inFlow, setInFlow] = useState("")

    const token = localStorage.getItem("token");
    // if(token){
    //     config.headers.Authorization = `Bearer ${token}`
    // }
    console.log(token);
    const getBranchList = async() =>{

      try {
        const resposed = await fetch(branchListUrl)
        if(resposed.status === 200){
          const result = await resposed.json()
          setBranchList(result.branch)
          setIsBranchLoad(true)
        }else{
          const notify = () => toast("error in getting bank");
          notify()
        }
      } catch (error) {
        console.log(error.message)
        const notify = () => toast(error.message);
        notify()
      }
      
    }
    const getBank = async() =>{
      let requestOptions = {
        method: 'GET',
            redirect: 'follow'
          };
          try {
            const resposed = await fetch(bankUrl, requestOptions)
            if(resposed.status === 200){
              const result = await resposed.json()
              setBankList(result)
              setIsBankLoad(true)
            }else{
              const notify = () => toast("error in getting bank");
              notify()
            }
        } catch (error) {
            console.log(error.message)
            const notify = () => toast(error.message);
            notify()
        }

    }

    const saveVirtual = async()=>{
        if(accNumber === "" || inFlow ===""){
          const notify = () => toast("All field must be filled out");
          notify()
        }else{
          const bankNameArr = bankName.split(",")
          const branchNNameArr = branchName.split(",")
          const [bnkName, bnkCode, bnkLogo] = bankNameArr
          const [branhId, branhName, branhLocation] = branchNNameArr
            
            const newVirtual = {
              logo: bnkLogo,
              name: bnkName,
              accountNo: accNumber,
              inflow: inFlow,
              branch: {
                  name: branhName,
                  location: branhLocation
              },
            }
            const vitualJSON = JSON.stringify(newVirtual)
            const requestOptions = {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: vitualJSON
            }
            
            try {
              const response = await fetch(addVirtualUrl, requestOptions);
              console.log(response)
              const data = await response.json();
              console.log(data)
                if(data.status === 'ok'){
                    setBankName([])
                    setBranchName([])
                    setAccNumber("")
                    setInFlow("")
                    const notify = () => toast(data.msg);
                    notify()
                    dispatch(setBranchForm({isModal: 'false', modalType: '', modalTitle: ''}))
                }else{
                    const notify = () => toast("Error Connecting. Try again");
                    setBankName([])
                    setBranchName([])
                    setAccNumber("")
                    setInFlow("")
                    notify()
                    dispatch(setBranchForm({isModal: 'false', modalType: '', modalTitle: ''}))

                }
            } catch (error) {
                console.log(error.message)
                const notify = () => toast(error.message);
                notify()
            }

        }
    }


    useEffect(()=>{
        const callBranchList = getBranchList()
        const callBankList = getBank()

    }, [])

  return (
    <>
            <Label>
              <LabelPText>Bank</LabelPText>
              <Select onChange={(e)=>{setBankName(e.target.value)}}>
                {
                    isBankLoad ?
                    <>
                        <option>--Select Bank--</option>
                        {
                            bankList.map((bank)=> <option key={bank.code} value={[bank.name, bank.code, bank.logo]}>{bank.name}</option> )
                        }
                    </>
                    :
                    <option>Loading...</option>    
                }
              </Select>
            </Label>
           
            <Label>
              <LabelPText>Branch</LabelPText>
              <Select onChange={(e)=>{setBranchName(e.target.value)}} >
                {
                    isBranchLoad ?
                    <>
                        <option>--Select Branch--</option>
                        {
                         branchList.map((branch)=> <option key={branch._id} value={[branch._id, branch.name, branch.location]}>{branch.name} - ({branch.location})</option> )
                        }
                    </>
                :
                    <option>Loading...</option>   
                }
              </Select>
            </Label>
            <Label>
              <LabelPText>Account Number</LabelPText>
              <TXTInput maxLength="10" placeholder="Account Number" value={accNumber} onChange={(e)=>{setAccNumber(e.target.value)}} />
            </Label>
            <Label>
              <LabelPText>Inflow</LabelPText>
              <FormGroup>
                <FormLeftIcon>$</FormLeftIcon>
                <NUMInput placeholder='Inflow Amount' value={inFlow} onChange={(e)=>{setInFlow(e.target.value)}} />
              </FormGroup>
            </Label>
            <LoginBtn onClick={()=>{saveVirtual()}}>Add Account</LoginBtn>
            
    </>
  )
}

export default VitualAccForm
