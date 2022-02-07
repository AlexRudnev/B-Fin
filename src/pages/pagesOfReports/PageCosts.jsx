import DocumentTitle from 'react-document-title'
import Sidebar from "../../sidebar/Sidebar";
import Costs from "../../reports/linksOfReports/Costs";


const PageCosts = () => {
    return (
      <DocumentTitle title = 'Расходы'>
       <div >
         <Sidebar />
         <Costs/>
       </div>
       </DocumentTitle>
    )
 }
 export default PageCosts;