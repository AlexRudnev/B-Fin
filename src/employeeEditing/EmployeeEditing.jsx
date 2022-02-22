import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import useEmployeeId from '../hooks/useEmployeeId';
import Button from '@mui/material/Button';
import EmployeeRights from './EmployeeRights';
import InformationEmployee from './InformationEmployee';
import { rows } from '../directory-components/directory/Employees/Employees';
// import API from '../api/api'

import styles from './employeeEditing.module.css';

const EmployeesEditing = () => {
  const { employeeId } = useEmployeeId();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = React.useState(null)
  const [isRedirect, setIsRedirect] = React.useState(false)
  // =======Раскоментировать==================
  //   const [newUserId, setNewUserId] = React.useState();

  let isAdd = employeeId === 'Add';

  // ========================================
  const [employee, setEmployee] = React.useState({});

  const [f_name, setF_Name] = React.useState();
  const [s_name, setS_Name] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [role, setRole] = React.useState('');
  const defaultOrderSupplier = [
    ['добавить заказ поставщику', 0],
    ['изменить заказ поставщику', 0],
    ['удалить заказ поставщику', 0],
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
  ];
  const [add_order_supplier, setAdd_order_supplier] = React.useState(employeeId === 0 || isAdd ? defaultOrderSupplier : null);

  // Раскоментировать эту строку и импорт на 8
  // const api = new API();
  React.useEffect(() => {
   if(!isAdd){
    //===================Раскоментировать===================
    // api.getEmploye(employeeId).then(data => {
    //  setEmployee(data.message);
    //  const {f_name, s_name, mobile, mail, password, id_role, add_order_supplier} = data.message;
    //  setF_Name(f_name)
    //  setS_Name(s_name)
    //  setPhone(mobile)
    //  setMail(mail)
    //  setPassword(password)
    //  setRole(id_role)
    //  setAdd_order_supplier(add_order_supplier ? add_order_supplier : defaultOrderSupplier);
    // })

    //   api.getEmployees().then(data => {
    //     if (data.status === "error") alert(data.message)
    //       else {
    //          const employees = data.message;
    //          const id = (employees[employees.length-1].id_user)+1
    //          setNewUserId(id)
    //       }
    //   })
    //=======================================================
  
    // =========Закоментировать/Удалить=========
    rows.forEach((elem) => {
      if(elem.id_user === employeeId){ 
        setEmployee(elem);
        const {f_name, s_name, mobile, mail, password, id_role, add_order_supplier} = elem;
        setF_Name(f_name)
        setS_Name(s_name)
        setPhone(mobile)
        setMail(mail)
        setPassword(password)
        setRole(id_role)
        setAdd_order_supplier(add_order_supplier ? add_order_supplier : defaultOrderSupplier);
      }
    })
    // =========================================
  }
  // eslint-disable-next-line
  }, [])
  // =========================================
  React.useEffect(() => {
    if (isRedirect) {
      navigate('/employees')
    }
    // eslint-disable-next-line
  }, [isRedirect])

  // ======================================================================
  const handleAdd = () => {
    employeeId !== 0 ? setIsSuccess('добавили пользователя') : setIsSuccess('')

    setTimeout(() => {
      // =========Закоментировать/Удалить=========
      const newUserId = (rows[rows.length-1].id_user)+1;
      // ========================================

      const body = employee;
      body.id_user = newUserId;
      body.f_name = f_name;
      body.s_name = s_name;
      body.mail = mail;
      body.mobile = phone;
      body.password = password;
      body.id_role = role;
      body.add_order_supplier = add_order_supplier;

      // =========Закоментировать/Удалить=========
      rows.push(body);
      // ===========================================

      // ==========Раскоментировать==============
      // api.addEmployees(body).then(data => {
      //   if (data.status === "error") return alert(data.message)
      //    2 строки ниже оставить раскоментированными
            setIsSuccess(null)  
            setIsRedirect(true)
      // })
      // ========================================
    }, 1000)
  }

  const handleRemove = () => {
    employeeId !== 0 ? setIsSuccess('удалили пользователя') : setIsSuccess('')
    setTimeout(() => {
      // =========Раскоментировать=========
      // api.removeEmployees(employeeId).then(data => {
      //   if (data.status === "error") return alert(data.message)
          setIsSuccess(null)  
          setIsRedirect(true)
      // }

    }, 1000)
  }

  const handleChoose = () => {
    employeeId !== 0 ? setIsSuccess('изменили пользователя') : setIsSuccess('')
    setTimeout(() => {
      const body = employee;
      body.f_name = f_name;
      body.s_name = s_name;
      body.mail = mail;
      body.mobile = phone;
      body.password = password;
      body.id_role = role;
      body.add_order_supplier = add_order_supplier;

      // =========Закоментировать/Удалить=========
      rows.forEach((elem) => {
        if(elem.id_user === employeeId){
          return elem = body;
        }
      })
      // =========================================

      // =========Расоментировать=========
      // api.editEmployees(employeeId, body).then(data => {
      //   if (data.status === "error") return alert(data.message)
      // 2 строки ниже оставить раскоментированными
        setIsSuccess(null)  
        setIsRedirect(true)
      // })
      // ======================================
    }, 1000)
  }
  // ======================================================================

  const handleReturn = () => {
    setIsRedirect(true)
  }

  return (
    <section className="home-section">
      <div className="home-content" style={{ display: 'flex', flexDirection: 'column' }}>
      <div className={styles.buttonsWrapper}>
          <div className={styles.main_btns}>
            <Button onClick={isAdd ? handleAdd : handleChoose} className={styles.button} variant="contained">Сохранить</Button>
          </div>
        </div>
        {isSuccess &&
          <div className={styles.success}>
            Вы успешно {isSuccess}!
          </div>
        }

        <div className={styles.boxesWrapper}>
          <div className={styles.boxesWrapper__user}>
            <InformationEmployee
              f_name={f_name}
              setF_name={setF_Name}
              s_name={s_name}
              setS_Name={setS_Name}
              phone={phone}
              setPhone={setPhone}
              mail={mail}
              setMail={setMail}
              password={password}
              setPassword={setPassword}  
              role={role}
              setRole={setRole}
            />
          </div>
          <div className={styles.boxesWrapper__information}>
            {add_order_supplier && 
              <EmployeeRights 
                add_order_supplier={add_order_supplier}
                setAdd_order_supplier={setAdd_order_supplier}
              />
            }
          </div>
        </div>
        <div className={styles.buttonsWrapper} style={{marginTop: '20px'}}>
          <div className={styles.main_btns}>
            {!isAdd && <Button onClick={handleRemove} className={styles.button} variant="contained">Удалить</Button>}
          </div>
          <div>
            <Button onClick={handleReturn} className={styles.button} style={{ color: '#9C27B0', borderColor: '#9C27B0' }} variant="outlined">Отмена</Button>
          </div>
        </div> 
      </div>
    </section>
  )
}

export default EmployeesEditing;  