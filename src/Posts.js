import React from "react";

function Post(props){
    const [cor, setCor] = React.useState(
                                            <ion-icon
                                            name="heart-outline"
                                            onClick={() => check('heart-outline')}
                                            ></ion-icon>
                                        );
      function check(elemento) {
        elemento === 'heart-outline' ? setCor(
                                        <ion-icon
                                        class="curtido"
                                        name="heart"
                                        onClick={() => check('heart')}
                                        ></ion-icon>
                                        )

                                    :   setCor(
                                            <ion-icon
                                            name="heart-outline"
                                            onClick={() => check('heart-outline')}
                                            ></ion-icon>
                                        );
      }
     
    //não foi possível acessar o props name direto na arrowfunction da linha 42, declarando uma variavel e atribuindo o valor foi a maneira mais fácil de se contornar  
    const name = cor.props.name;
    return(
        <div class="post">
                        <div class="topo">
                        <div class="usuario">
                            <img src={props.userImage} alt={props.title}/>
                            {props.title}
                        </div>
                        <div class="acoes">
                            <ion-icon name="ellipsis-horizontal"></ion-icon>
                        </div>
                        </div>

                        <div class="conteudo">
                        <img src={props.postImage} onClick={() => check(name)}/>
                        </div>

                        <div class="fundo">
                        <div class="acoes">
                            <div>
                            {cor}
                            <ion-icon name="chatbubble-outline"></ion-icon>
                            <ion-icon name="paper-plane-outline"></ion-icon>
                            </div>
                            <div>
                            <ion-icon name="bookmark-outline"></ion-icon>
                            </div>
                        </div>

                        <div class="curtidas">
                            <img src={props.likeImage}/>
                            <div class="texto">
                            Curtido por <strong>{props.likes}</strong> e <strong>{props.totalLikes}</strong>
                            </div>
                        </div>
                        </div>
                    </div>
    )


}

const post = [  {userImage : "img/meowed.svg", title: "meowed", postImage: "img/gato-telefone.svg", likeImage:"img/respondeai.svg", likes: "respondeai", totalLikes: "outras 101.523 pessoas"},
                {userImage : "img/barked.svg", title: "barked", postImage: "img/dog.svg", likeImage:"img/adorable_animals.svg", likes: "adorable_animals", totalLikes: "outras 99.159 pessoas"}
                ]



export default function Posts(){
    
    return (
        <div class = "posts">
            {post.map(post=> <Post userImage={post.userImage} title={post.title} postImage = {post.postImage} likeImage = {post.likeImage} likes = {post.likes} totalLikes ={post.totalLikes}/>) }
        </div>
    );

}