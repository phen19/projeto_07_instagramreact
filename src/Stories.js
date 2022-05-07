function Story(props){
    return(
        <div class="story">
            <div class="imagem">
                <img src={props.image} alt = {props.title}/>
            </div>
            <div class="usuario">
                {props.title}
            </div>
        </div>
    )


}

const story = [ {image : "img/9gag.svg", title: "9gag"},
                {image : "img/meowed.svg", title: "meowed"},
                {image : "img/barked.svg", title: "barked"},
                {image : "img/nathanwpylestrangeplanet.svg", title: "nathanwpylestrangeplanet"},
                {image : "img/wawawicomics.svg", title: "wawawicomics"},
                {image : "img/respondeai.svg", title: "respondeai"},
                {image : "img/filomoderna.svg", title: "filomoderna"},
                {image : "img/memeriagourmet.svg", title: "memeriagourmet"},
                ]


export default function Stories(){
    return (
        <div class = "stories">
            {story.map(story=> <Story image={story.image} title={story.title}/>) }
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );

}