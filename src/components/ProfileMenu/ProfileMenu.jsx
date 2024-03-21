import React , {useState} from 'react'
import { Avatar, Menu } from '@mantine/core'
import { useNavigate } from 'react-router-dom'
const ProfileMenu = ({ user, logout }) => {
    const navigate = useNavigate()
    const [opened, setOpened] = useState(true);

    const toggle = () => {
        setOpened(!opened);
    }
    console.log(opened);
    return (
        <div style={{position:"relative"}}>
            <img src={user?.picture} onClick={()=>toggle()} alt='user image' style={{ height: '50px', width: "50px", borderRadius: "50%", cursor: "pointer" }} />
            {
                opened && <div style={{position: "absolute", width:"100%", height:"64px", left:"40px"}}>
                Something
             </div>
            }
        </div>
        // <Menu opened={opened} onChange={setOpened}>
        //     <Menu.Target >
        //         <Avatar radius={"xl"}><img src={user?.picture} alt='user image' style={{ height: '50px', width: "50px", borderRadius: "50%" }} /></Avatar>
        //     </Menu.Target>
        //     <Menu.Dropdown>
        //         <Menu.Item onClick={() => navigate("./favourites", { replace: true })}  >
        //             Favourites
        //         </Menu.Item>

        //         <Menu.Item onClick={() => navigate("./bookings", { replace: true })}>
        //             Bookings
        //         </Menu.Item>

        //         <Menu.Item onClick={() => {
        //             localStorage.clear();
        //             logout()
        //         }}>
        //             Logout
        //         </Menu.Item>
        //     </Menu.Dropdown>
        // </Menu>
    )
}

export default ProfileMenu