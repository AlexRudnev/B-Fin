import ImportOfGoods from "../../productsAndServices/productsEditing/ImportOfGoods"
import Sidebar from "../../sidebar/Sidebar";
import DocumentTitle from 'react-document-title'

function PageImportOfGoods() {
  return (
    <DocumentTitle title='B-Fin: Изменить товар'><div>
      <Sidebar />
      <ImportOfGoods/>
    </div></DocumentTitle>

  )
}

export default PageImportOfGoods;