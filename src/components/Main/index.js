import "./style.css";
import { NavLink, Route, Routes } from "react-router-dom";

import TopibOldim from "../../layout/TopibOldim";
import Yoqotdim from "../../layout/Yoqotdim";
import Kirish from "../../layout/Kirish";
import NotFound from "../../layout/NotFound";
import Profil from "../../layout/Profil";

import "../../components/Header";

function Main() {
    return (

        <main className='main'>
        <div className='search'>12</div>
        <div className='content'>
        <Routes>
        <Route path="/topiboldim" element={<TopibOldim />} />
        <Route path="/yoqotdim" element={<Yoqotdim/>} />
        <Route path="profil" element={<Profil/>} />
        <Route path="kirish" element={<Kirish/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
        </div>
       </main>
       
    )
}
export default Main