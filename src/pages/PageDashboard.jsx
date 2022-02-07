import DocumentTitle from 'react-document-title'
import Sidebar from "../sidebar/Sidebar";
import Dashboard from "../dashboard/Dashboard";

const PageDashboard = () => {

   return (
      <DocumentTitle title = 'Показатели'>
      <div >
         <Sidebar />
         <Dashboard />
      </div>
      </DocumentTitle>
   )
}
export default PageDashboard;