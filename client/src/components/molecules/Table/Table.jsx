import {
    TableBody, 
    TableData, 
    TableHead,
    TableHeader, 
    TableRow, 
    TableWrapper
} from "./Table.Stlyed"
import {FaChevronRight} from 'react-icons/fa'
function Table() {
  return (
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
                <TableRow>
                    <TableData>
                        Olaoluwa S.
                    </TableData>
                    <TableData>
                        Olaoluwa S.
                    </TableData>
                    <TableData>
                        Olaoluwa S.
                    </TableData>
                    <TableData>
                        <FaChevronRight/>
                    </TableData>
                </TableRow>
                <TableRow>
                    <TableData>
                        Olaoluwa S.
                    </TableData>
                    <TableData>
                        Olaoluwa S.
                    </TableData>
                    <TableData>
                        Olaoluwa S.
                    </TableData>
                    <TableData>
                        <FaChevronRight/>
                    </TableData>
                </TableRow>
            </TableBody>
        </TableWrapper>
  )
}

export default Table