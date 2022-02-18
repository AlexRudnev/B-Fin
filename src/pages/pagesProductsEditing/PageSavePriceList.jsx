import SavePriceList from "../../productsAndServices/productsEditing/SavePriceList"
import Sidebar from "../../sidebar/Sidebar";
import DocumentTitle from 'react-document-title'

function PageSavePriceList() {
  return (
    <DocumentTitle title='B-Fin: Изменить товар'><div>
      <SavePriceList/>
      <Sidebar />
    </div></DocumentTitle>

  )
}

export default PageSavePriceList;