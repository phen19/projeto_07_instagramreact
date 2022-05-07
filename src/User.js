function UserData(props){
    return(
        <div class= "usuario">
                    <img src={props.image} />
                    <div class="texto">
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