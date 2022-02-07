import DocumentTitle from 'react-document-title'
import Sidebar from "../../sidebar/Sidebar";
import ReportMoney from "../../reports/linksOfReports/ReportMoney";


const PageReportMoney  = () => {
    return (
      <DocumentTitle title = 'Отчеты Деньги'>
       <div >
         <Sidebar />
         <ReportMoney />
       </div>
       </DocumentTitle>
    )
 }
 export default PageReportMoney ;