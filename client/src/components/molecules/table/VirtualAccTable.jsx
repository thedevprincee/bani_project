import React, {useState, useEffect} from 'react'
import Text from '../../atoms/text/Text'
import TableWrapper, { Table, TBody, THead, TRow, THeader, TData, TDataContent } from './Table.styles'

import {MdContentCopy} from 'react-icons/md'
import {HiDotsVertical} from 'react-icons/hi'
import {GiContract} from 'react-icons/gi'
import Badge from '../../atoms/badge/Badge'
import Image from '../../atoms/img/Image'

const VirtualAccTable = ({searchValue}) => {
    const baseUrl = 'http://127.0.0.1:2345'
    const getVirtualUrl = `${baseUrl}/api/user/virtual`
    const [virtualAcc, setVirtualAcc] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const getVirtualAcc = async()=>{
            const token = localStorage.getItem("token");
            const requestOptions = {
              method: 'GET',
              headers: { 
                'Authorization' : `${token}`, 
                'Content-Type': 'application/json' 
              },
            }

            try {
                const response = await fetch(getVirtualUrl, requestOptions);
                const data = await response.json();
                setVirtualAcc(data)
                setIsLoading(false)
            } catch (error) {
                console.log(error.message);
            }
    }
                // virtualAcc.filter((sn)=>(log ))
    useEffect(()=>{
        getVirtualAcc()
    }, [])

    console.log(virtualAcc);
  return (
   <TableWrapper>
    <Table>
        <THead>
            <TRow>
                <THeader>Bank Name</THeader>
                <THeader>Account Number</THeader>
                <THeader>Total Inflow</THeader>
            </TRow>
        </THead>
        <TBody>
        {
            isLoading ? "Loading" : (
                virtualAcc.filter(bank => bank.name.toLowerCase().includes(searchValue.toLowerCase())).map(virtual=>(
                <TRow key={virtual.time} onClick="">
                    <TData>
                        <TDataContent>
                        <Image src={virtual.logo} width="25px" />
                        <Text>{virtual.name}</Text>		
                        </TDataContent>
                    </TData>
                    <TData>
                        <TDataContent>
                            <Text>{virtual.accountNo}</Text>
                            <MdContentCopy />		
                            <Badge icon={<GiContract />} color="blue" bgcolor="skyblue" title={`${virtual?.branch?.name} - ${virtual?.branch?.location}`} />
                        </TDataContent>
                    </TData>
                    <TData>
                        <TDataContent>
                            <Text>NGN {virtual.inflow}</Text>
                            <HiDotsVertical />		
                        </TDataContent>
                    </TData>
                </TRow>
            ))
          )  
        }
            
        </TBody>
    </Table>
  </TableWrapper>
 )
}

export default VirtualAccTable