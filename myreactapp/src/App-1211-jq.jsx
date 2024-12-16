import { useEffect } from 'react';
import $ from 'jquery'

export default function App() {

    // 寫法一：過時寫法
    // useEffect(() => {
    //     $('cssAnim1').hover(function () {
    //         $(this).addClass('imgScale');
    //     }, function () {
    //         $(this).removeClass('imgScale');
    //     })
    // }, [])

    // 寫法二：建議寫法
    useEffect(() => {
        $('.cssAnim1').on('mouseover', function () {
            $(this).addClass('imgScale');
        })
        $('.cssAnim1').on('mouseout', function () {
            $(this).removeClass('imgScale');
        })
    }, [])

    return (
        <div>
            <a href="#" className="cssAnim1">
                <img src="./images/3.jpg" alt="" />
            </a>
        </div>
    )
}