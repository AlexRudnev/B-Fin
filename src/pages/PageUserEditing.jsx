import UserEditing from "../userEditing/UserEditing";
import DocumentTitle from 'react-document-title'

function PageUserEditing() {
  return (
    <DocumentTitle title='B-Fin: Изменить клиента'><div>
      <UserEditing />
    </div></DocumentTitle>

  )
}

export default PageUserEditing;