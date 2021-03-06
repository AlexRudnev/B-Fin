import DocumentTitle from 'react-document-title'
import Sidebar from "../../sidebar/Sidebar";
import TypePrice from '../../directory-components/directory/TypePrice';


const PageTypePrice = () => {
   return (
      <DocumentTitle title='B-Fin: Справочник'>
         <div >
            <Sidebar />
            <TypePrice />
         </div>
      </DocumentTitle>
   )
}
export default PageTypePrice;