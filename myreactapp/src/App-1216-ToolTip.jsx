import { useEffect } from "react"
import $ from 'jquery'

export default function App() {

    // 寫法2:建議的寫法
    useEffect(() => {
        // 移入 => mouseover()
        // 移出 => mouseout()
        // 移動 => mousemove()
        // X、Y座標 => pageX、pageY
        // 取得HTML的內容 => html()
        // 淡入 => fadeIn()
        // 淡出 => fadeOut()
        // 速度 => 毫秒 => (slow, normal, fast)

        // 尋找是否有指定的名稱存在 =>has()
        // 新增html元素 => append()
        // 取得子元素 => children()

        $('a:has(.ttpShow)').mouseover(function (e) {
            $('body').append('<div id="ttpPanel">' + $(this).children('.ttpShow').html() + '</div>');
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            }).fadeIn('fast');
        }).mouseout(function (e) {
            $('#ttpPanel').remove();
        }).mousemove(function (e) {
            $('#ttpPanel').css({
                top: (e.pageY + 10) + 'px',
                left: (e.pageX + 10) + 'px',
            });
        })
    }, [])

    return (
        <>
            <h2>ToolTip顯示說明</h2>
            <p>
                Lorem ipsum dolor sit amet
                <a href="#">consectetur<span className="ttpShow">consectetur內容說明...</span></a>
                adipisicing elit. Hic itaque, vel quod ex ullam vero commodi nulla sint fugit quidem, cumque, quas corporis! Accusamus deleniti repellendus facilis tempore. Dolores sunt fuga culpa et sapiente tenetur temporibus amet, nostrum quos officia vel optio nam veritatis eos velit. Non, commodi unde quo animi, fugiat suscipit ab quidem minus natus qui quos. Neque velit omnis ullam corporis accusantium repellat reprehenderit quidem laudantium modi, saepe debitis cumque consectetur ea voluptatum perferendis adipisci magnam cupiditate hic animi, veritatis beatae ipsa harum laboriosam! Veritatis quam ipsam consectetur eius, ipsa repudiandae nisi laudantium officiis porro! Tempora reiciendis, deserunt vitae autem 
                <a href="#">similiquer<span className="ttpShow">
                    <img src="/images/1.jpg" alt="" />
                    </span></a> 
                quis modi reprehenderit iure dicta ipsum tenetur nihil provident aut officia magnam consectetur et optio ipsa non animi dolor! Tempora quibusdam, corporis veritatis consequuntur quam odio, cum inventore, hic perspiciatis ea iste molestiae harum deserunt dolore pariatur. Sapiente doloribus facilis, expedita obcaecati iusto corrupti id eos accusamus perferendis saepe iste incidunt, minus inventore sequi quisquam voluptates, vel nisi consectetur distinctio maiores suscipit ullam eligendi quo quidem! Commodi in laboriosam est illum aliquid cum voluptas laborum temporibus fugit vero corporis suscipit ullam eos voluptatibus quo recusandae maxime animi vitae exercitationem, ipsa dolores cumque quibusdam consequatur? Distinctio dolore ipsam expedita suscipit aspernatur magni id optio tempore vero. Libero, odit exercitationem in fugiat adipisci dolores minima est. Deleniti laudantium quis unde cum commodi quo ratione ea, placeat quod error, fugit ad! Nisi cumque minima eum? Minus deserunt cumque sapiente vitae voluptatum architecto aut esse adipisci blanditiis, veritatis error distinctio fugiat id. Eaque sequi autem suscipit eius architecto? Architecto sint veritatis facere necessitatibus hic vel repellat totam dolores iure praesentium labore eaque saepe, aliquid quod eligendi quam nulla cupiditate dolor rerum ducimus? Itaque voluptatem iusto illo molestiae modi cumque repellendus pariatur, odio maxime alias quo dolor ab placeat magnam inventore earum nisi, illum distinctio aut repellat magni, cupiditate eaque? Earum et sequi illum doloribus recusandae. Eligendi, delectus similique! Suscipit earum esse cum velit consectetur, nisi hic ratione beatae magnam maxime error veniam fuga quos dolores, quisquam, aut blanditiis. Molestiae neque, magnam error voluptates modi facilis dicta provident veniam sunt, fugiat accusantium in totam quisquam quo accusamus corrupti expedita eius. Eaque voluptatem error ab est fuga assumenda, dolore minima reiciendis architecto in. Voluptates consequuntur odit sequi deleniti sapiente tenetur! Doloremque perferendis perspiciatis possimus tenetur quae velit nulla, a corporis repellat molestias asperiores praesentium repudiandae aperiam nesciunt nam voluptas dolorum voluptate hic. Harum repellat quaerat quisquam magnam dolores reprehenderit? Quaerat, nihil voluptas esse consequatur alias excepturi blanditiis libero fuga deleniti ullam recusandae, ut at unde consequuntur vel non commodi, enim quos. Sint, architecto? Eos veniam quis quod rerum voluptatum blanditiis qui obcaecati! Officiis maxime exercitationem harum nostrum, aperiam ab dolorem voluptas porro recusandae repudiandae non, tempore sequi amet culpa in qui aspernatur assumenda labore provident sit deleniti quam. Earum perspiciatis ipsum illo commodi at aliquid. Libero tempore blanditiis odit voluptas iusto. Facere modi quos perferendis nobis, maxime voluptate sunt vel sequi quibusdam ad enim vero libero molestias dolor adipisci tempore hic officiis?
            </p>

        </>
    )
}