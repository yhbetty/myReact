import { useState } from 'react';
import img1 from '/images/1.jpg'
import img2 from '/images/2.jpg'
import img3 from '/images/3.jpg'


export default function App() {
    // 建立目前縮圖的變數
    const [currentImgIndex, setCurrentImgIndex] = useState(0);
    // 建立圖片陣列
    const arrPhotos = [img1, img2, img3];
    return (
        <>
            <div className="wrapper">
                <div style={{
                    // display: "flex",
                    width: "700px",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: "50px auto"
                }}>
                    {/* 大圖區 */}
                    <div>
                        <img src={arrPhotos[currentImgIndex]} alt="photos" width={450} height={600} />
                    </div>
                    {/* 縮圖區 */}
                    <div style={{
                        display: "flex",
                        // flexDirection: "column"
                    }}>
                        {/* <img src={arrPhotos[0]} alt="photos" width={150} height={200} />
                        <img src={arrPhotos[1]} alt="photos" width={150} height={200} />
                        <img src={arrPhotos[2]} alt="photos" width={150} height={200} /> */}
                        {
                            arrPhotos.map((photo, index) => {
                                return (
                                    <img key={index} src={photo} alt="photos" width={150} height={200}
                                        onClick={(e) => setCurrentImgIndex(index)}
                                        style={{ cursor: "pointer" }}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}