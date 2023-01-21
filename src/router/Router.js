import Post from "../views/Post/Post/Post";
import PostCreate from "../views/Post/PostCreate/PostCreate";
import Home from "../views/Home/Home";
import Auth from "../views/Auth/Auth";
import SignIn from "../views/Auth/SignIn/SignIn";
import SignUp from "../views/Auth/SignUp/SignUp";
import React from "react";
import { Route,Routes } from "react-router-dom";
import AuthLayout from "../layouts/Auth/AuthLayout"
import MainLayout from "../layouts/Main/MainLayout"


export const AppRoutes=[
    {
      component:<Home/>,
      path:'/',
      protect:true  
    },
    {
        component:<Post/>,
        path:'/Post',
        protect:true,
        children:[{
        component:<PostCreate/>,
        path:'create-post',
        protect:false
        }] 
    },

    {
        component:<Auth/>,
        path:'/auth',
        protect:true,
        children:[{
        component:<SignIn/>,
        path:'sign-in',
        protect:false
        },
    
        {
        component:<SignUp/>,
        path:'sign-up',
        protect:false
        }
    ] 
    },
]

const AppRouter = () => {

    const renderComponent=(item,isSub)=>{
        const protection = item.protect

        if(protection ===false){
            if(item.children){
            return <AuthLayout> {item.component} </AuthLayout>
            }
            return <> {item.component} </>
        }
        if(item.children){
            return <MainLayout>{item.component} </MainLayout>
        }
        if(isSub===false){
            return <MainLayout>{item.component} </MainLayout>

        }

        return <> {item.component} </>
    }



    return(
        <>
        <Routes>
        {AppRoutes.map((item) => {
        return(
            <React.Fragment key={item.path}> 
            {item.children ? <>
          <Route path={item.path}  key={item.path} element={renderComponent(item)}>
            {item.children.map((subItem) => {
                return(
                    <Route path={subItem.path} 
                    key={subItem.path} element={renderComponent(subItem)}></Route>    
                )
            })}

          </Route>
            </>:
             <Route path={item.path} key={item.path} element={renderComponent(item,false)}></Route>}
            </React.Fragment>
        )   
        })}
        </Routes>
        </>
        
    )
}

export default AppRouter