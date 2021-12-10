import '../component014/Button-style.css'
import handleAdd from "./HandleAdd";

function ComponentButton(){
    return(
        <form className={'container--button'}>
            <button  onSubmit={handleAdd} id={'AddButton'} type={'submit'}><i className="fas fa-plus-circle"></i>Add</button>
            <button id={'UpdateButton'} type={'submit'}><i className="fas fa-edit"></i>Update</button>
            <button id={'DeleteButton'} type={'submit'}><i className="fas fa-user-times"></i>Delete</button>
        </form>
    )
}
export default ComponentButton