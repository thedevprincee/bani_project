import {
    ScrollableWrapper,
    TableBody, 
    TableHead,
    TableHeader, 
    TableRow, 
    TableWrapper
} from "./Table.Stlyed"

import TableContent from "./TableContent"
function Table() {
  return (
    <ScrollableWrapper>
        <TableWrapper>
                    <TableHeader>
                        <TableRow>
                            <TableHead>
                                Transaction Details
                            </TableHead>
                            <TableHead>
                                Amount
                            </TableHead>
                            <TableHead>
                                Date
                            </TableHead>
                            <TableHead/>
                        </TableRow>
                    </TableHeader>
                <TableBody>
                {
                    [...Array(14).keys()].map(i => {
                        return <TableContent key={i}/>
                    })
                } 
                </TableBody>
        </TableWrapper>
    </ScrollableWrapper>
  )
}

export default Table