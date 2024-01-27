import axios from 'axios';
import { useState } from 'react';

export function ParagraphGenerator(){
    const [noOfPara,setNoOfPara] = useState(0)
    const [noOfParaData,setNoOfParaData] = useState(["data will be displayed here"])
    const styles ={
        topDiv:{
            display:"flex",
            flexDirection: "column",
            alignItems: "center"
        },
        beforeinputDiv:{
            width: "100%",
            display: "flex",
            justifyContent: "center"
        },
        inputDiv:{
            width: "70%",
            height:"30px",
            padding: "0 10px",
            margin: "0 20px"
        },
        button:{
            color: "white",
            backgroundColor: "black",
            border: "0",
            borderRadius: "10px",
            padding: "5px 10px"
        }
    }

    function addParagraph(){
        axios.get(`https://hipsum.co/api/?type=hipster-centric&paras=${noOfPara}`).then((val)=>{
            console.log(val)
            setNoOfParaData(val.data)
        }).catch((err)=>{
            console.error(err);
        })
    }

    return(
        <div>
            <div style={styles.topDiv}>
            <div><h1>Para Generator</h1></div>
            <div style={styles.beforeinputDiv}>
                <input style={styles.inputDiv} type="number" placeholder="Enter Number Of Paragraph" 
                onChange={e => setNoOfPara(e.target.value)} />
                <button onClick={addParagraph} style={styles.button}>Generate</button>
            </div>
            <br />
            {noOfParaData.map((para)=>{
                return(
                    <div>
                        {para}
                        <br />
                        <br />
                    </div>
                )
            })}
            </div>
        </div>
    )
}