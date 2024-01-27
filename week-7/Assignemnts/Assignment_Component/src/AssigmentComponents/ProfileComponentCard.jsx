export function ProfileComponentCard(){
    const styles= {
        image: {

            width: "100%",
            height:"200px",
            marginBottom: "50px"
        },
        profileImage:{
            height:"100px",
            width: "100px",
            borderRadius: "50%",
            position: "absolute",
            top: "130px",
            border:"3px solid white"
        },
        Card:{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "350px",
            height: "auto",
            border: "3px solid"
        },
        TextHeader:{
            display: "flex",
            flexDirection: "row",
            width:"100%",
            justifyContent:"space-around"
        },
        TextContainer:{
            margin: "0 0 10px 0",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        },
        Name:{
            marginBottom: "10px"
        },
        Location:{
            marginBottom: "15px",
            opacity: "0.5"
        },
        InsideTextHeader:{
            marginBottom:"5px",
            fontWeight:"600"
        }
        }
    return (
        <div>
            <div className="Card" style={styles.Card}>
            <img src="https://wallpapers.com/images/high/profile-picture-background-737fizh11f9g3uza.webp" 
            alt="Background Profile" style={styles.image} />
            <img src="https://w0.peakpx.com/wallpaper/979/89/HD-wallpaper-purple-smile-design-eye-smily-profile-pic-face.jpg" 
            alt="Profile Picture" style={styles.profileImage} />
            <div className="Name" style={styles.Name}><b>Name</b> <span style={{opacity:"0.5"}}>32</span></div>
            <div className="Location" style={styles.Location}>London</div>
            <hr style={{width:"98%",marginBottom:"25px"}} />
            <div className="Text-header" style={styles.TextHeader}>
                <div className="Text" style={styles.TextContainer}>
                    <div style={styles.InsideTextHeader}>80k</div>
                    <div style={{opacity:"0.5"}}>Followers</div>
                    </div>
                <div className="Text" style={styles.TextContainer}>
                    <div style={styles.InsideTextHeader}>803k</div>
                    <div style={{opacity:"0.5"}}>Likes</div>
                    </div>
                <div className="Text" style={styles.TextContainer}>
                    <div style={styles.InsideTextHeader}>1.4k</div>
                    <div style={{opacity:"0.5"}}>Photos</div>
                    </div>
            </div>
            </div>
        </div>
    )
}