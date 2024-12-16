import { useEffect } from "react"
import AOS from "aos";
import 'aos/dist/aos.css';

export default function App(){
    
    // 寫法2:建議的寫法
    useEffect(()=>{
        AOS.init(); //初始化
    },[])
    
    return(
        <>
        <h1 data-aos="fade-right">AOS-zoom-in</h1>
        <div className="box" data-aos="fade-up" data-aos-duration="1000">
            <p>data-aos="fade-up"</p>
            <p>data-aos-duration="1000"</p>
            </div>
        </>
    )
}