import '../component012/Table-style.css'
import {useState} from "react";
import usersList from "../users/Users";

function ComponentTable() {
    const [users, setUsers] = useState(usersList)
    //Delete
    const handleDelete =(Phone)=>{setUsers(users.filter(item=>item.Phone!==Phone))}
    return (
        <div className={'container--table'}>
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                </tr>
                </thead>
                <tbody>
                {usersList.map(item => (
                    <tr key={item.Phone}>
                        <td>{item.FirstName}</td>
                        <td>{item.LastName}</td>
                        <td>{item.Phone}</td>
                        <td>{item.Email}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    )
}

export default ComponentTable