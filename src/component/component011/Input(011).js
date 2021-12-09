import '../component011/Input-style.css'
function ComponentInput(){
    return(
        <div>
            <h1>Phone Book</h1>
            <form className={'form__Information'}>
                {/*<label htmlFor={'fName'}>First Name : </label>*/}
                <input placeholder={'First Name...'} className={'input--Information'} type={'text'} name={'fName'}/>
                {/*<label htmlFor={'lName'}>Last Name : </label>*/}
                <input placeholder={'Last Name...'} className={'input--Information'} type={'text'} name={'lName'} />
                {/*<label htmlFor={'phone'}>Cell Phone : </label>*/}
                <input placeholder={'Cell Phone...'} className={'input--Information'} type={'text'} name={'phone'} />
                {/*<label htmlFor={'email'}>Email Add : </label>*/}
                <input placeholder={'Email Add...'} className={'input--Information'} type={'email'} name={'email'} />
            </form>


        </div>
    )
}

export default  ComponentInput