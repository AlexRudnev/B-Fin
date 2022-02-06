import TextField from '@mui/material/TextField';

function UserForm ({name, setName, phone, setPhone, mail, setMail, company, setCompany, group, setGroup}) {
  return (
    <>
      <TextField 
        sx={{marginBottom: '15px'}} id="standard-multiline-flexible" label="Имя:" multiline maxRows={2} value={name || ''} 
        onChange={(e) => setName(e.target.value)} variant="standard"
      />
      <TextField 
        sx={{marginBottom: '15px'}} id="standard-multiline-flexible" label="Мобильный:" multiline maxRows={2} value={phone || ''} 
        onChange={(e) => setPhone(e.target.value)} variant="standard"
      />
      <TextField 
        sx={{marginBottom: '15px'}} id="standard-multiline-flexible" label="e-mail:" multiline maxRows={2} value={mail || ''} 
        onChange={(e) => setMail(e.target.value)} variant="standard"
      />
      <TextField 
        sx={{marginBottom: '15px'}} id="standard-multiline-flexible" label="Компания:" multiline maxRows={2} value={company || ''} 
        onChange={(e) => setCompany(e.target.value)} variant="standard"
      />
      <TextField 
        sx={{marginBottom: '15px'}} id="standard-multiline-flexible" label="Группа:" multiline maxRows={2} value={group || ''} 
        onChange={(e) => setGroup(e.target.value)} variant="standard"
      /> 
    </>
  )
}
export default UserForm 