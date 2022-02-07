import DocumentTitle from 'react-document-title'
import Sidebar from "../sidebar/Sidebar";
import Money from '../money/Money';


const PageMoney = () => {
    return (
      <DocumentTitle title = 'Деньги'>
       <div >
         <Sidebar />
         <Money/>
       </div>
       </DocumentTitle>
    )
 }
 export default PageMoney;