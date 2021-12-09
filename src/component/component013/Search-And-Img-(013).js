import '../component013/Search-And-Img-style.css'
import img from '../../images/animation_light.gif'

function ComponentImg() {
    return (
        <div className={'container013'}>
            <form className={'form__search'}>
                <input id={'search--input'} type={'text'} placeholder={'Search...'} name={'search'}/>
                <button id={'search--button'} type={'submit'}><i className="fa fa-search icon-search"/></button>
            </form>
            {/*<video src="https://cdnl.iconscout.com/lottie/free/preview/social-media-influencer-4604926-3821579.mp4"*/}
            {/*       autoPlay="autoplay" muted="muted" loop="loop" playsInline="" type="video/mp4"*/}
            {/*       __idm_id__="1371054081"/>*/}
            <img src={img}/>
        </div>
    )
}

export default ComponentImg