export default function init(props){
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            height:"50px",
            width:"50px",
            color:"white",
            backgroundColor:"black",
            borderRadius:"25px",
            margin:"20px",
            fontSize:"2rem"
        }}>
            {props.numero}
        </div>
    )
}