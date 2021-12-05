import '../component014/Button-style.css'

function ComponentButton(){
    return(
        <div className={'container--button'}>
            <button id={'AddButton'} type={'submit'}><i className="fas fa-plus-circle"></i>Add</button>
            <button id={'UpdateButton'} type={'submit'}><i className="fas fa-edit"></i>Update</button>
            <button id={'DeleteButton'} type={'submit'}><i className="fas fa-user-times"></i>Delete</button>
        </div>
    )
}
export default ComponentButton