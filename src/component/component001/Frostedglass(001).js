import '../component001/Frostedglass-style.css'
import ComponentImg from'../component013/Search-And-Img-(013)'
import ComponentInput from "../../component/component011/Input(011)"
import ComponentTable from '../../component/component012/Table(012)'
import ComponentButton from "../component014/Button(014)";



function ComponentFrostedglass() {
    return (

            <div className={'container001'}>
                <div className={'container--input-table'}>
                    <ComponentInput/>
                    <ComponentTable/>
                    <ComponentButton/>

                </div>
                <div className={'container--search-img'}>
                    <ComponentImg/>
                </div>
            </div>


    )
}

export default ComponentFrostedglass