import * as React from 'react';
import { useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import useEmployeeId from '../../../hooks/useEmployeeId';
// import API from '../../../api/api';

import pencilImg from './img/pencil.png';

import styles from './Employees.module.css';

// ===========Закоментировать/Удалить===========
export let rows = [
   {
      id_user: 1,
      f_name: 'ivan',
      s_name: 'ivanov',
      mobile: 88005553535,
      mail: 'ivan@mail.ru', 
      password: '12345',
      id_role: 'Бухгалтер',
      add_order_supplier: [
         ['добавить заказ поставщику', 1],
         ['изменить заказ поставщику', 0],
         ['удалить заказ поставщику', 1],
         ['добавить закупку', 0],
         ['изменить закупку', 0],
         ['удалить закупку', 0],
         ['добавить возврат поставщику', 0],
         ['изменить возврат поставщику', 0],
         ['удалить возврат поставщику', 0],
         ['добавить продажу', 0],
         ['изенить продажу', 0],
         ['удалить продажу', 0],
         ['добавить возврат клиента', 0],
         ['изенить возврат клиента', 0],
         ['удалить возврат клиента', 0],
         ['добавить заказ', 0],
         ['изменить заказ', 0],
         ['удалить заказ', 0],
         ['добавить статьи расходов', 0],
         ['изменить статьи расходов', 0],
         ['удалить статьи расходов', 0],
         ['добавить оплату поставщику', 0],
         ['изменить оплату поставщику', 0],
         ['удалить оплату поставщику', 0],
         ['добавить оплату на расходы', 0],
         ['изменить оплату на расходы', 0],
         ['удалить оплату на расходы', 0]
      ],
      id_cash_acc: 500,
      dachboard: false,
      suppliers: true,
      cash_accounts: false
      },
      {
      id_user: 2,
      f_name: 'andrew',
      s_name: 'ivanov',
      mobile: 89015263321,
      mail: 'andrew@mail.ru', 
      password: '23434',
      id_role: 'Менеджер',
      add_order_supplier: [['добавить заказ поставщику', 0],
      ['изменить заказ поставщику', 0],
      ['удалить заказ поставщику', 0],
      ['добавить закупку', 1],
      ['изменить закупку', 1],
      ['удалить закупку', 1],
      ['добавить возврат поставщику', 0],
      ['изменить возврат поставщику', 0],
      ['удалить возврат поставщику', 0],
      ['добавить продажу', 0],
      ['изенить продажу', 0],
      ['удалить продажу', 0],
      ['добавить возврат клиента', 0],
      ['изенить возврат клиента', 0],
      ['удалить возврат клиента', 0],
      ['добавить заказ', 0],
      ['изменить заказ', 0],
      ['удалить заказ', 0],
      ['добавить статьи расходов', 0],
      ['изменить статьи расходов', 0],
      ['удалить статьи расходов', 0],
      ['добавить оплату поставщику', 0],
      ['изменить оплату поставщику', 0],
      ['удалить оплату поставщику', 0],
      ['добавить оплату на расходы', 0],
      ['изменить оплату на расходы', 0],
      ['удалить оплату на расходы', 0]],
      id_cash_acc: 1200,
      dachboard: false,
      suppliers: true,
      cash_accounts: false
      }
];
// =====================================

export default function Employees() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

// =========Раскоментировать ниже и импорт на 14-ой строке============
//   const [rows, setRows] = React.useState([]);
//   const api = new API()
//   React.useEffect(() => {
//      api.getEmployees().then(data => {
//         if (data.status === "error") alert(data.message)
//         else setRows(data.message)
//      })
//   }, [])

  const [isRedirect, setIsRedirect] = React.useState(false);
  const { setEmployeeId } = useEmployeeId();
  const navigate = useNavigate();

  React.useEffect(() => {
    if(isRedirect){
      navigate('/employees_editing')
    }
    // eslint-disable-next-line
  },[isRedirect])
  const handleNavigate = (id) => {
    setEmployeeId(id);
    setIsRedirect(true);
  }
  const handleAdd = () => {
    setEmployeeId('Add');
    setIsRedirect(true);
  }

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return(
   <>
   <section className="home-section">
      <div className="home-content" style={{display: 'flex', flexDirection: 'column'}}>
      <TextField
               fullWidth
               id="outlined-basic"
               label="Поиск"
               variant="outlined"
               size="small" 
               style={{marginBottom: '40px'}} 
            />
            <div style={{marginBottom: '30px', width: '97%'}}>
               <Button onClick={handleAdd} variant="contained">Добавить</Button>
            </div>
            <Paper sx={{ width: '100%', overflow: 'hidden'}}>
               <TableContainer>
               <Table stickyHeader aria-label="sticky table">
                  <TableHead>
                     <TableRow>
                        <TableCell className={styles.table__head} align={'left'} style={{ minWidth: '100px' }}>
                           Имя
                        </TableCell>
                        <TableCell className={styles.table__head__width} align={'center'} style={{ minWidth: '100px' }}>
                           Роль
                        </TableCell>
                        <TableCell className={styles.table__head__width} align={'center'} style={{ minWidth: '100px' }}>
                           Телефон
                        </TableCell>
                        <TableCell className={styles.table__head} align={'right'} style={{ minWidth: '100px' }}>
                           Долг
                        </TableCell>
                     </TableRow>
                  </TableHead>
                  <TableBody>
                     {rows && rows
                     .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                     .map((row, idx) => {
                        return (
                           <TableRow hover role="checkbox" tabIndex={-1} key={idx}>
                              <TableCell style={{display: 'flex', alignItems: 'center'}} className={styles.table__body} align={'left'}>
                                 <img onClick={() => handleNavigate(row.id_user)} src={pencilImg} alt="edit" className={styles.pen__img}/>
                                 {row.f_name}
                              </TableCell>
                              <TableCell className={styles.table__body__wide} align={'center'}>
                                 {row.id_role}
                              </TableCell> 
                              <TableCell className={styles.table__body__wide} align={'center'}>
                                 {row.mobile}
                              </TableCell> 
                              <TableCell className={styles.table__body} align={'right'}>
                                 {row.id_cash_acc || 0} UAH
                              </TableCell>    
                           </TableRow>
                        );
                     })}
                  </TableBody>
               </Table>
               </TableContainer>
               <TablePagination
               rowsPerPageOptions={[5, 10, 20]}
               component="div"
               count={rows.length}
               rowsPerPage={rowsPerPage}
               page={page}
               onPageChange={handleChangePage}
               onRowsPerPageChange={handleChangeRowsPerPage}
               />
            </Paper>
      </div>
   </section>
   </>
   );
}
