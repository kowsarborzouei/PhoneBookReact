
const handleAdd=(e)=>{
    e.preventDefault();
    console.log(e)
    const data=new FormData(e.target)
    const firstName=data.get('FirstName')
    const lastName=data.get('LastName')
    const phone=data.get('Phone')
    const email=data.get('Email')
    // setUsers([...users,{firstName,lastName,phone,email}])
}
export default handleAdd