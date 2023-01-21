import Layout from "antd/es/layout/layout"
import Sidebar from "../../components/Sidebar/Sidebar"
const MainLayout = (props) => {
    return(
        <Layout>
           <Sidebar style={{left:"200px"}}></Sidebar>

        <Layout>
        {/*header*/} 
        {/*content*/} 
        {props.children}
        </Layout>


        </Layout>
    )
}

export default MainLayout