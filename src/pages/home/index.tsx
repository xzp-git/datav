import { useEffect, useState } from "react"
import styled from "styled-components"
const HomeWrap = styled.div`
    width: 100%;
    height: 100%;
    font-size: 16px;
    position: relative;

`
const HomeWrapImg = styled.img`
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
`
const ImgTop = styled.div`
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
`
const PageHeader = styled.div`
    width: 100%;
    height: 80px;
    border: 1px solid #000;
`
const PageContent = styled.div`
    width:calc(100% - 40px);
    height: calc(100% - 120px);
    display: grid;
    grid-template-areas: 
    "number number number" 
    "t1 t2 t3" 
    " t4 t4 t5";
    grid-template-columns: 300fr 400fr 300fr;
    grid-template-rows: 50px 1fr 1fr;
    gap: 24px;
    padding: 20px;
`
const AreaBase = styled.div<{ areaName: string }>`
    grid-area: ${({ areaName }) => areaName};
    border: 1px solid hotpink;
`
const Loading = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 30px;
`
function Home() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const imgs = document.querySelectorAll("img")

        if(!imgs){
            setLoading(false)
            return
        }
        let imgLength = imgs.length;

        [].forEach.call(imgs, (img: HTMLImageElement) => {
            img.addEventListener("load", (e) => {
                imgLength--
                if (imgLength === 0) {
                    setLoading(false)
                }
            })
        })
    })
    return (
        <HomeWrap>
            {
                loading && <Loading>加载中...</Loading>
            }
            <HomeWrapImg src={require("@/assets/images/common/background.png")} alt="" />
            <ImgTop>
                <PageHeader />
                <PageContent>
                    <AreaBase areaName="number">number</AreaBase>
                    <AreaBase areaName="t1">t1</AreaBase>
                    <AreaBase areaName="t2">t2</AreaBase>
                    <AreaBase areaName="t3">t3</AreaBase>
                    <AreaBase areaName="t4">t4</AreaBase>
                    <AreaBase areaName="t5">t5</AreaBase>
                </PageContent>
            </ImgTop>
        </HomeWrap>
    )
}
export default Home