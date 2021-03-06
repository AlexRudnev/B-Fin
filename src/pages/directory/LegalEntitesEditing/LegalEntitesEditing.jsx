import React from 'react';
import { useNavigate } from 'react-router-dom'
import useUserId from '../../../hooks/useUserId';

import LegalEntitesForm from './LegalEntitesForm';
import InformationForm from './InformationForm';

import Button from '@mui/material/Button';
import Sidebar from '../../../sidebar/Sidebar';

import styles from './UserEditing.module.css'
import API from '../../../api/api'


function LegalEntitesEditing() {
  const { userId } = useUserId();
  const [isSuccess, setIsSuccess] = React.useState(null)

  const [isRedirect, setIsRedirect] = React.useState(false)
  let isAdd = userId === 'Add'

  // ========================================
  const [currentLegalEntite, setCurrentLegalEntite] = React.useState(null)
  const api = new API();
  React.useEffect(() => {
    if (!isAdd) {
      api.getLegalEntite(userId).then(data => {
        setCurrentLegalEntite(data.message)
      })
    }
    // eslint-disable-next-line
  }, [])
  // =========================================

  // Legal Entites data 
  const [name, setName] = React.useState('');
  const [account, setAccount] = React.useState('');
  const [mobile, setPhone] = React.useState('');
  const [mail, setMail] = React.useState('');
  const [address, setAddress] = React.useState('')
  const [site, setSite] = React.useState('');
  const [edrpou, setEdrpou] = React.useState('');

  // ============================================

  // Information data
  const [legal_name, setLegal_name] = React.useState('')
  const [inn, setInn] = React.useState('')
  const [low_system, setLow_system] = React.useState('')
  const [nds, setNds] = React.useState(0)
  const [director, setDirector] = React.useState('')
  // ============================================

  const navigate = useNavigate()
  React.useEffect(() => {
    if (isRedirect) {
      navigate('/legal_entities')
    }
    // eslint-disable-next-line
  }, [isRedirect])

  React.useEffect(() => {
    if (!isAdd && currentLegalEntite) {
      // ==============================================================
      const { address, account, site, mail, mobile, name, edrpou, legal_name, inn, low_system, nds, director } = currentLegalEntite;
      setName(name)
      setPhone(mobile)
      setMail(mail)
      setAddress(address)
      setAccount(account)
      setSite(site)
      setEdrpou(edrpou)
      setLegal_name(legal_name)
      setInn(inn)
      setLow_system(low_system)
      setNds(nds)
      setDirector(director)

      // =============================================================== 

    }
    // eslint-disable-next-line
  }, [currentLegalEntite])

  // ======================================================================
  const handleAdd = () => {
    userId !== 0 ? setIsSuccess('???????????????? ????????????????????????') : setIsSuccess('')

    setTimeout(() => {
      let body = {
        name,
        mobile,
        mail,
        address,
        account,
        site,
        edrpou,
        legal_name,
        inn,
        low_system,
        nds,
        director
      }

      api.addLegalEntites(body).then(data => {
        if (data.status === "error") return alert(data.message)
        setIsSuccess(null)
        setIsRedirect(true)
      })
    }, 1000)
  }

  const handleRemove = () => {
    userId !== 0 ? setIsSuccess('?????????????? ????????????????????????') : setIsSuccess('')
    setTimeout(() => {
      api.removeLegalEntites(userId).then(data => {
        if (data.status === "error") return alert(data.message)
        setIsSuccess(null)
        setIsRedirect(true)
      })
    }, 1000)
  }

  const handleChoose = () => {
    userId !== 0 ? setIsSuccess('???????????????? ????????????????????????') : setIsSuccess('')

    setTimeout(() => {
      let body = {
        name,
        mobile,
        mail,
        address,
        account,
        site,
        edrpou,
        legal_name,
        inn,
        low_system,
        nds,
        director
      }

      api.editLegalEntites(userId, body).then(data => {
        if (data.status === "error") return alert(data.message)
        setIsSuccess(null)
        setIsRedirect(true)
      })
    }, 1000)
  }
  // ======================================================================

  const handleReturn = () => {
    setIsRedirect(true)
  }

  return <>
    <Sidebar />
    <section className="home-section">
      <div className="home-content" style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.buttonsWrapper}>
          <div className={styles.main_btns}>
            <Button onClick={isAdd ? handleAdd : handleChoose} className={styles.button} variant="contained">??????????????????</Button>
          </div>
          <div>
          </div>
        </div>
        {isSuccess &&
          <div className={styles.success}>
            ???? ?????????????? {isSuccess}!
          </div>
        }

        <div className={styles.boxesWrapper}>
          <div className={styles.boxesWrapper__user}>
            <LegalEntitesForm
              name={name}
              setName={setName}
              mobile={mobile}
              setPhone={setPhone}
              account={account}
              setAccount={setAccount}
              mail={mail}
              setMail={setMail}
              address={address}
              setAddress={setAddress}
              site={site}
              setSite={setSite}
              edrpou={edrpou}
              setEdrpou={setEdrpou}
            />
          </div>

          <div className={styles.boxesWrapper__information}>
            <InformationForm
              legal_name={legal_name}
              setLegal_name={setLegal_name}
              inn={inn}
              setInn={setInn}
              low_system={low_system}
              setLow_system={setLow_system}
              nds={nds}
              setNds={setNds}
              director={director}
              setDirector={setDirector}
            />
          </div>
        </div>
        <div className={styles.buttonsWrapper}>
          <div className={styles.main_btns}>
            {!isAdd && <Button onClick={handleRemove} className={styles.button} variant="contained">??????????????</Button>}
          </div>
          <div>
            <Button onClick={handleReturn} className={styles.button} style={{ color: '#9C27B0', borderColor: '#9C27B0' }} variant="outlined">????????????</Button>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default LegalEntitesEditing;