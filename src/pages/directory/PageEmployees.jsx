import DocumentTitle from 'react-document-title'
import Sidebar from "../../sidebar/Sidebar";
import Employees from '../../directory-components/directory/Employees';


const PageEmployees = () => {
   return (
      <DocumentTitle title='B-Fin: Справочник'>
         <div >
            <Sidebar />
            <Employees />
         </div>
      </DocumentTitle>
   )
}
export default PageEmployees;