import Layout from "antd/es/layout/layout"

const MainLayout = (props) => {
    return(
        <Layout>
           {/*sidebar*/} 

        <Layout>
        {/*header*/} 
        {/*content*/} 
        {props.children}
        </Layout>


        </Layout>
    )
}

export default MainLayout