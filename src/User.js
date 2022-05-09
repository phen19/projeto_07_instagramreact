function UserData(props){
    return(
        <div className= "usuario">
                    <img src={props.image} />
                    <div className="texto">
                    <strong>{props.title}</strong>
                    {props.text}
                    </div>
        </div>
    )


}


export default function User(){
    return (
        
            <UserData image="img/catanacomics.svg" title="catanacomics" text ="Catana"/>
        
    );

}