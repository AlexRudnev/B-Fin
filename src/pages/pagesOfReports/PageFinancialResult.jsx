import DocumentTitle from 'react-document-title'
import Sidebar from "../../sidebar/Sidebar";
import FinancialResult from "../../reports/linksOfReports/FinancialResult";


const PageFinancialResult  = () => {
    return (
      <DocumentTitle title = 'Финансовые результаты'>
       <div >
         <Sidebar />
         <FinancialResult />
       </div>
       </DocumentTitle>
    )
 }
 export default PageFinancialResult ;