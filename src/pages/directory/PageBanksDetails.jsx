// import DocumentTitle from 'react-document-title'
// import Sidebar from "../../sidebar/Sidebar";
// import BankDetails from '../../directory-components/directory/BankDetails';


// const PageBankDetails = () => {
//    return (
//       <DocumentTitle title='B-Fin: Банки и реквизиты'>
//          <div >
//             <Sidebar />
//             <BankDetails />
//          </div>
//       </DocumentTitle>
//    )
// }
// export default PageBankDetails;

import DocumentTitle from 'react-document-title'
import Sidebar from "../../sidebar/Sidebar";
import Expenditure from '../../directory-components/directory/Expenditure';


const PageExpenditure = () => {
   return (
      <DocumentTitle title='B-Fin: Справочник'>
         <div >
            <Sidebar />
            <Expenditure />
         </div>
      </DocumentTitle>
   )
}
export default PageExpenditure;