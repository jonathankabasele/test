const movies = [
    {
      id: '1',
      title: 'Oceans 8',
      category: 'Comedy',
      likes: 4,
      dislikes: 1,
 
    }, {
      id: '2',
      title: 'Midnight Sun',
      category: 'Comedy',
      likes: 2,
      dislikes: 0
    }, {
      id: '3',
      title: 'Les indestructibles 2',
      category: 'Animation',
      likes: 3,
      dislikes: 1
    }, {
      id: '4',
      title: 'Sans un bruit',
      category: 'Thriller',
      likes: 6,
      dislikes: 6
    }, {
      id: '5',
      title: 'Creed II',
      category: 'Drame',
      likes: 16,
      dislikes: 2
    }, {
      id: '6',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 11,
      dislikes: 3
    }, {
      id: '7',
      title: 'Pulp Fiction',
      category: 'Thriller',
      likes: 12333,
      dislikes: 32
    }, {
      id: '8',
      title: 'Seven',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '9',
      title: 'Inception',
      category: 'Thriller',
      likes: 2,
      dislikes: 1
    }, {
      id: '10',
      title: 'Gone Girl',
      category: 'Thriller',
      likes: 22,
      dislikes: 12
    },
  ]

 
function ajouterDisLikes(holderDisLokes){
	newDisLikes = document.createElement('span');
    newDisLikes.innerHTML = "<span class=\"zone-dislikes\">DISLIKES</span>";
    	
    holder.appendChild(newDisLikes);
    
    contenuDisLikes = document.createElement('p');
    let idContenuDisLikes = "Dislikes-" + i.toString(); 
    contenuDisLikes.setAttribute("id", idContenuDisLikes);
    contenuDisLikes.innerHTML = "<p>" + movies[i].dislikes + "</p></br></br></br>";
    	
    holder.appendChild(contenuDisLikes);
}

  
function ajouterVideo(i)
{
  let video ={
    id:movies[i].id,
    title: movies[i].title,
    category:movies[i].category,
    likes : movies[i].likes,
    dislikes: movies[i].dislikes
    }
    newDiv = document.createElement('div');
    newDiv.innerHTML = "<div id =\"container\"class=\"video-containertest\">"+"<img src=\"media/icon-video.png\" width=\"180px\" height=\"180px\"/>"+"<div>"+"<h1>"+video.title+"</h1><span>"+video.category+" <br><br><span>Likes : </span>"+video.likes+"<div class=\"zone-btn\"><button>Like</button><button>Dislike</button><button>Delete</button></div></div></div>" ;
    document.body.appendChild(newDiv);

  console.log(video)
}

var element = createElement('Div');
document.body.appendChild(element);

 
 