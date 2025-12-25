import { styled } from '@mui/material/styles'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell, { tableCellClasses } from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import { useEffect, useState } from 'react'
import axios  from 'axios'
import { toast } from 'react-toastify'
import type { Resevation } from '../types'

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14
  }
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0
  }
}))

type createData = {
  id: string
  serviceId: string
  date: string
  status: string
  createdAt: string
  name: string
  description: string
  price: number
}


export default function CustomizedTables () {
  const [reservations, setReservations] = useState<createData[]>([])
  useEffect(() => {
    // pegar as minhas solicitações da api e popular a tabela
    const fetchRequests = async () => {
      try {
        const token = localStorage.getItem('token')
        const response = await axios.get(
          'https://bulir.enor.tech/reservation/all',
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        )
  
        if (!response.data || response.data.length === 0) {
          setReservations([])
          return
        }
        const transformedReservations : createData[] = response.data.map((reservation: Resevation) => ({
          id: reservation.id,
          serviceId: reservation.serviceId,
          date: reservation.date,
          status: reservation.status,
          createdAt: reservation.createdAt,
          name: reservation.service.name,
          description: reservation.service.description,
          price: reservation.service.price
        }))
        setReservations(transformedReservations)
      } catch (error) {
        console.error('Erro ao buscar solicitações:', error)
        setReservations([])
        toast.error('Erro ao buscar solicitações')
      }
    }
    fetchRequests()
  }, [])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Serviço</StyledTableCell>
            <StyledTableCell align='right'>status</StyledTableCell>
            <StyledTableCell align='right'>Preço</StyledTableCell>
            <StyledTableCell align='right'>
              Data para se efectuar
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {reservations.map(row => (
            <StyledTableRow key={row.name}>
              <StyledTableCell component='th' scope='row'>
                {row.name}
              </StyledTableCell>
              <StyledTableCell align='right'>{row.status}</StyledTableCell>
              <StyledTableCell align='right'>{row.price}</StyledTableCell>
              <StyledTableCell align='right'>{row.date}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
