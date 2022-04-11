import { useRouter } from 'next/router'
import Link from 'next/link';
import { withRouter } from 'next/router';


export default function Page() {
    const router = useRouter()
    const { locale } = router;
    const changeLanguage = (e) => {
        const locale = e.target.value
        const path = locale + router.pathname
        router.replace(path, path, { locale })
    }
    return (
        <>
            <select
                onChange={changeLanguage}
                defaultValue={"en"}
                className="form-control form-control-sm"
            >
                <option selected="" class="options" value="en">English</option><option class="options" value="de">German</option><option class="options" value="es">Español</option><option class="options" value="fr">Français</option><option class="options" value="hi">हिन्दी / Hindī</option><option class="options" value="id">Indonesian</option><option class="options" value="it">Italiano</option><option class="options" value="ja">日本語</option><option class="options" value="ko">한국어</option><option class="options" value="my">Myanmar (မြန်မာ)</option><option class="options" value="ms">Malay</option><option class="options" value="nl">Dutch</option><option class="options" value="ph">Filipino</option><option class="options" value="pt">Português</option><option class="options" value="ru">Русский</option><option class="options" value="th">ไทย</option><option class="options" value="tr">Türkçe</option><option class="options" value="vi">Tiếng Việt</option><option class="options" value="zh">简体中文</option><option class="options" value="zt">繁體中文</option><option class="options" value="sa">العربية</option><option class="options" value="bn">বাঙালি</option>
            </select>




            {/* <select className="form-control form-control-sm">
        <option className="options" value="de"onClick={() => router.push('/post/abc')}>German</option>
        </select>
        <button type="button" onClick={() => router.push('/hi')}>
        Click me
      </button> */}

            {/* <div className="dropdown">
                <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false">
                English  
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <Link href={router.pathname + "/de"}><a className="dropdown-item" >German</a></Link>
                    <Link href={router.pathname + "/es"}><a className="dropdown-item" >Español</a></Link>
                    <Link href={router.pathname + "/fr"}><a className="dropdown-item" >Français</a></Link>
                    <Link href={router.pathname + "/hi"}><a className="dropdown-item" >हिन्दी / Hindī</a></Link>
                    <Link href={router.pathname + "/id"}><a className="dropdown-item" >Indonesian</a></Link>
                    <Link href={router.pathname + "/it"}><a className="dropdown-item" >Italiano</a></Link>
                    <Link href={router.pathname + "/ja"}><a className="dropdown-item" >日本語</a></Link>
                    <Link href={router.pathname + "/ko"}><a className="dropdown-item" >한국어</a></Link>
                    <Link href={router.pathname + "/my"}><a className="dropdown-item" >Myanmar (မြန်မာ)</a></Link>
                    <Link href={router.pathname + "/ms"}><a className="dropdown-item" >Malay</a></Link>
                    <Link href={router.pathname + "/nl"}><a className="dropdown-item" >Dutch</a></Link>
                    <Link href={router.pathname + "/ph"}><a className="dropdown-item" >Filipino</a></Link>
                    <Link href={router.pathname + "/pt"}><a className="dropdown-item" >Português</a></Link>
                    <Link href={router.pathname + "/ru"}><a className="dropdown-item" >Русский</a></Link>
                    <Link href={router.pathname + "/th"}><a className="dropdown-item" >ไทย</a></Link>
                    <Link href={router.pathname + "/tr"}><a className="dropdown-item" >Türkçe</a></Link>
                    <Link href={router.pathname + "/zh"}><a className="dropdown-item" >Tiếng Việt</a></Link>
                    <Link href={router.pathname + "/zt"}><a className="dropdown-item" >简体中文</a></Link>
                    <Link href={router.pathname + "/ar"}><a className="dropdown-item" >العربية</a></Link>
                    <Link href={router.pathname + "/bn"}><a className="dropdown-item" >বাঙালি</a></Link>
                </div>
            </div> */}




            {/* <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script> */}

        </>

    );

}

//   import {useRouter} from 'next/router'
// import {useState} from 'react'
// export default function SampleComponent(){
//     const router = useRouter()
//     const [route, setRoute] = useState()
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         router.push("someBasePath/" + route)
//     }
//     return(
//         <div>
//             <h1>Example Form</h1>
//             <form onSubmit={handleSubmit}>
//                 <input type="text" name='route' onChange={(e)=>{setRoute(e.target.value)}} />
//                 <button type="submit">Submit</button>
//             </form>
//         </div>
//     )
// }