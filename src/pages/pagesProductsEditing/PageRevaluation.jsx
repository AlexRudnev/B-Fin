import Revaluation from "../../productsAndServices/productsEditing/Revaluation"
import Sidebar from "../../sidebar/Sidebar";
import DocumentTitle from 'react-document-title'

function PageRevaluation() {
  return (
    <DocumentTitle title='B-Fin: Изменить товар'><div>
      <Revaluation/>
      <Sidebar />
    </div></DocumentTitle>

  )
}

export default PageRevaluation;