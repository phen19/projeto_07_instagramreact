function Story(props){
    return(
        <div className="story">
            <div className="imagem">
                <img src={props.image} alt = {props.title}/>
            </div>
            <div className="usuario">
                {props.title}
            </div>
        </div>
    )


}

const story = [ {image : "img/9gag.svg", title: "9gag", id:1},
                {image : "img/meowed.svg", title: "meowed", id:2},
                {image : "img/barked.svg", title: "barked", id:3},
                {image : "img/nathanwpylestrangeplanet.svg", title: "nathanwpylestrangeplanet", id:4},
                {image : "img/wawawicomics.svg", title: "wawawicomics", id:5},
                {image : "img/respondeai.svg", title: "respondeai", id:6},
                {image : "img/filomoderna.svg", title: "filomoderna", id:7},
                {image : "img/memeriagourmet.svg", title: "memeriagourmet", id:8},
                ]


export default function Stories(){
    return (
        <div className = "stories">
            {story.map(story=> <Story image={story.image} title={story.title} key={story.id}/>) }
            <div className="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );

}