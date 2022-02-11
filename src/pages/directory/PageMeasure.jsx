import DocumentTitle from 'react-document-title'
import Sidebar from "../../sidebar/Sidebar";
import Measure from '../../directory-components/directory/Measure';


const PageMeasure = () => {
   return (
      <DocumentTitle title='B-Fin: Справочник'>
         <div >
            <Sidebar />
            <Measure />
         </div>
      </DocumentTitle>
   )
}
export default PageMeasure;