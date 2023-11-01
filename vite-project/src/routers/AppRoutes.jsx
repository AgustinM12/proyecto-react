import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import Login from "../pages/Login"
import Error404 from '../pages/error404';
import MasInfo from '../pages/Mas-info';
import {Files} from "../pages/Files"
import { Register } from '../pages/Register';
import { Profile } from "../pages/Profile"
import { Post } from '../pages/Post';


export const AppRoutes = () => {


    return (
        <BrowserRouter>
            {/*RUTAS PUBLICAS*/}
            <Routes>
                <Route path='/Login' element={<Login />} />
                <Route path='*' element={<Error404 />} />
                <Route path='/Mas-info' element={<MasInfo />} />
                <Route path='/' element={<Register />} />
                

                {/*RUTAS PUBLICAS*/}
                <Route path='/' element={<Inicio />} />
                <Route path='/' element={<Files />} />
                <Route path='/' element={<Files />} />
                <Route path='/' element={<Profile />} />
                <Route path='/' element={<Post />} />


            </Routes>
        </BrowserRouter>
    )
}