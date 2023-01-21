import { Menu, Layout } from "antd"
import { Link } from "react-router-dom"
import './Sidebar.css'

const Sidebar = () => {
return(
        <Layout.Sider className="side-bar">
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['/']}>
        <Menu.Item key="/">Anasayfa</Menu.Item>
          {/*<Link to="/">Anasayfa</Link>  */}         


        <Menu.Item key="/post/create-post">Post Oluştur</Menu.Item>
  {/*<Link to="/">Post OLuştur</Link>  */}         

        </Menu>
        </Layout.Sider>
)
}

export default Sidebar