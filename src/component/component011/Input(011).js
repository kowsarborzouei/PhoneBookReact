import '../component011/Input-style.css'
function ComponentInput(){
    return(
        <div>
            <h2>Phone Book</h2>
            <form className={'form__Information'}>
                <label htmlFor={'fName'}>First Name : </label>
                <input className={'input--Information'} type={'text'} name={'fName'}/>
                <label htmlFor={'lName'}>Last Name : </label>
                <input className={'input--Information'} type={'text'} name={'lName'} />
                <label htmlFor={'phone'}>Cell Phone : </label>
                <input className={'input--Information'} type={'text'} name={'phone'} />
                <label htmlFor={'email'}>Email Add : </label>
                <input className={'input--Information'} type={'email'} name={'email'} />
            </form>


        </div>
    )
}

export default  ComponentInput