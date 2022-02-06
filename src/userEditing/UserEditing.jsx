import React from 'react';
import { useNavigate } from 'react-router-dom'
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import TextField from '@mui/material/TextField';

import { useDispatch } from 'react-redux';
import { addUser, removeUser, changeUser } from '../store/actions/index'; 

import UserForm from './UserFrom';
import InformationForm from './InformationForm';

import Button from '@mui/material/Button';
import Sidebar from '../sidebar/Sidebar';

import styles from './UserEditing.module.css'


function UserEditing() {
  const storeData = useSelector(state => state.userReducer)
  const {state} = useLocation()
  const [isSuccess, setIsSuccess] = React.useState(null)
  let currentUser;
  storeData.map((elem) => {
    const data = Object.entries(elem)
    const id = Number(data[0][0])
    if(id === Number(state.id)){
      currentUser = elem 
    } 
  })
  const [isRedirect, setIsRedirect] = React.useState(false)
  const dispatch = useDispatch()
  let isAdd = state.id === 'Add'

  // User`s data 
  const [name, setName] = React.useState('');
  const [phone, setPhone] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [group, setGroup] = React.useState('');
  // ============================================

  // Information data
  const [mainArreas, setMainArreas] = React.useState(0)
  const [address, setAddress] = React.useState('')
  const [arrears, setArrears] = React.useState(0)
  const [discount, setDiscount] = React.useState('')
  const [notes, setNotes] = React.useState('')
  // ============================================

  const navigate = useNavigate()
  React.useEffect(() => {
    if(isRedirect){
      navigate('/clients')
    }
  }, [isRedirect])

  React.useEffect(() => {
    if(!isAdd && currentUser){
      Object.keys(currentUser).forEach((key) => {
        const values = currentUser[key]
        const {address, company, discount, duty, group, mail, mobile, name, notes} = values;
        setName(name)
        setPhone(mobile)
        setMail(mail)
        setCompany(company)
        setGroup(group)
        setAddress(address)
        setArrears(duty)
        setDiscount(discount)
        setNotes(notes)
      })  
    }
  }, [storeData])

  const handleAdd = () => {
    setIsSuccess('добавили пользователя')
    setTimeout(() => {
      const lastUser = storeData[storeData.length-1]
      const data = Object.entries(lastUser)
      const lastUserId = Number(data[0][0])
      dispatch(addUser({
        [String(lastUserId + 1)]: { 
          name,
          mobile: phone, 
          mail,
          company,
          group,
          address,
          duty: mainArreas,
          discount,
          notes 
        },
      })); 
      setIsSuccess(null)
      setIsRedirect(true)
    }, 1000)
  }
  const handleRemove = () => {
    setIsSuccess('удалили пользователя')
    setTimeout(() => {
      dispatch(removeUser(state.id))
      setIsSuccess(null)
      setIsRedirect(true)
    }, 1000)
  }
  const handleChoose = () => {
    setIsSuccess('изменили пользователя')
    setTimeout(() => {
      dispatch(changeUser({
        [state.id]: {
          name,
          mobile: phone, 
          mail,
          company,
          group,
          address,
          duty: mainArreas,
          discount,
          notes 
        },
      }));
      setIsSuccess(null)  
      setIsRedirect(true)
    }, 1000)
  }

  return <>
    <Sidebar />
    <section className="home-section">
      <div className="home-content" style={{display: 'flex', flexDirection: 'column'}}>
        <div className={styles.buttonsWrapper}>
          <Button onClick={isAdd ? handleAdd : handleChoose} className={styles.button} variant="contained">Сохранить</Button>
          {!isAdd && <Button onClick={handleRemove} className={styles.button} variant="contained">Удалить</Button>} 
        </div>
        {isSuccess && 
          <div className={styles.success}>
            Вы успешно {isSuccess}!
          </div>
        }

        <div className={styles.boxesWrapper}>
          <div className={styles.boxesWrapper__user}> 
            <UserForm  
              name={name} 
              setName={setName}
              phone={phone}
              setPhone={setPhone} 
              mail={mail} 
              setMail={setMail} 
              company={company} 
              setCompany={setCompany} 
              group={group} 
              setGroup={setGroup}
            />
          </div>

          <div className={styles.boxesWrapper__information}>
            <InformationForm 
              address={address} 
              setAddress={setAddress} 
              arrears={arrears} 
              setArrears={setArrears} 
              discount={discount} 
              setDiscount={setDiscount} 
              notes={notes} 
              setNotes={setNotes}   
              setMainArreas={setMainArreas}         
            />
          </div>
        </div>
      </div>
    </section>
  </>
}

export default UserEditing;