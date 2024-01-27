import "./BackgroundChangerDesign.css"
export function BackgroundChanger(){

    function changeColor(color){
        document.body.style.backgroundColor = color
    }

    return(
        <div>
            <div className="Container">
                <div className="Colors" >
                    <button className="Color" onClick={()=> changeColor("red")} style={{backgroundColor:"red"}}>Red</button>
                    <button className="Color" onClick={()=> changeColor("yellow")} style={{backgroundColor:"yellow"}}>Yellow</button>
                    <button className="Color" onClick={()=> changeColor("black")} style={{backgroundColor:"black",color:"white"}}>Black</button>
                    <button className="Color" onClick={()=> changeColor("purple")} style={{backgroundColor:"purple"}}>Purple</button>
                    <button className="Color" onClick={()=> changeColor("green")} style={{backgroundColor:"green"}}>Green</button>
                    <button className="Color" onClick={()=> changeColor("blue")} style={{backgroundColor:"blue",color:"white"}}>Blue</button>
                    <button className="Color" onClick={()=> changeColor("orange")} style={{backgroundColor:"orange"}}>Orange</button>
                </div>
            </div>
        </div>
    )
}