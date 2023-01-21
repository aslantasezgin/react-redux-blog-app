import Layout from "antd/es/layout/layout"
import AppContent from "../../components/AppContent/AppContent"
import AppHeader from "../../components/AppHeader/AppHeader"
import Sidebar from "../../components/Sidebar/Sidebar"
const MainLayout = (props) => {
    return(
        <Layout>
           <Sidebar style={{left:"200px"}}></Sidebar>

        <Layout>
        <AppHeader></AppHeader>
        <AppContent> {props.children}</AppContent>
    
   
        </Layout>


        </Layout>
    )
}

export default MainLayout