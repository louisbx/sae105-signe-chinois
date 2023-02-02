var donnees =
[
    {
        id:"color",
        analogie:"couleur",
        valeurAnalogie:"le vert", 
        image:"ressources/images/couleur-verte.png",
        explication:"Synonyme de nature, la couleur verte rassure par sa prospérité et son calme. L'avantage de cette couleur, c'est qu'elle est généralement en adéquation avec toutes les autres. Elle représente l'optimisme, l'espérance et la croissance. Le vert est aussi symbole de l'amour porté à sa famille, celui des liens amicaux et de l'affection donnée à des animaux domestiques car, comme moi, cette couleur est généreuse et aime partager."
    },

    {
        id:"animal",
        analogie:"animal",
        valeurAnalogie: "un caméléon", 
        image:"ressources/images/cameleon-sae105_contour.png",
        explication:"Cet animal a des caractéristiques très atypiques comme changer de couleur en fonction de son environnement ou étirer sa langue pour attraper sa proie. Comme le caméléon je sais être créatif, original et je sais facilement m'adapter à mon environnement."
    },

    {
        id:"moovie",
        analogie:"un film",
        valeurAnalogie: "La Vie Aquatique", 
        image:"ressources/images/La-vie-aquatique.webp",
        explication:"Ce film de Wes Anderson se passe essentiellement en mer, un milieux que j'affectionne particulièrement. Ce film mélange fantaisie et humour, et l'histoire est très inspirante. Seu Jorge, un musicien que j'apprécie, a réalisé la bande son. C'est pourquoi ce film me touche si profondément et qu'il fait partie de mes films préférés."
    }, 

    {
        id:"7 Wonders of the World",
        analogie:"7 merveilles du monde", 
        valeurAnalogie:"les Jardins suspendus de Babylone", 
        image:"ressources/images/Babylone.jpg", 
        explication:"Je serais les jardins suspendus de Babylone car, même si je ne les ai jamais vus, la légende et le mythe me font rêver. J'imagine ce lieu comme un endroit paradisiaque que j'aurais aimé visiter. En tant que Jardins Suspendus de Babylone, mes cascades d'eau et mes arbres fruitiers représentent l'abondance et la générosité."
    }, 

    {
        id:"planêtes",
        analogie:"une planète", 
        valeurAnalogie:"Saturne", 
        image:"ressources/images/saturne-hq.png",
        explication:"car je suis stable, fiable et créatif. De plus, j'aime m'entourer de belles choses. Je suis également très ambitieux et j'ai des rêves grandioses. J'ai une attitude de perfectionnement et je suis toujours en train de chercher à m'améliorer."
    },

    {
        id:"music style",
        analogie:"style de musique", 
        valeurAnalogie:"la salsa",  
        image:"ressources/images/salsa-musique-detour.webp",
        explication:"car je suis passionné et animé. Ma force est ma capacité à faire bouger les gens, à les faire danser et à les amuser. Je suis riche en culture et en traditions, et porteur d'une histoire qui nous invite à voyager à travers les rythmes et les mélodies."
    },

    {
        id:"shrub",
        analogie:"un arbuste", 
        valeurAnalogie:"Corylus avellana Contorta", 
        image:"ressources/images/corylus-avellana-contorta.jpg",
        explication:"Comme cet arbuste, je suis un représentant de la nature avec un caractère décalé. Ma force est ma forme déformée, mes branches tordues et mes feuilles déchiquetées qui attirent l'attention et m'apportent une originalité. Comme le Corylus avellana Contorta, je m'adapte facilement à différentes situations." 
    },
];
donnees.forEach(function(element){

    document.querySelector('.liste-analogies').innerHTML=document.querySelector('.liste-analogies').innerHTML+'<section class="sec" id="sec'+numCase+'"><h2>Si j’étais ' +  element["analogie"] +  ', je serais '  + element["valeurAnalogie"] + '.</h2>\n<img class="images images'+numCase+'" src="' + element["image"] + '"> \n<p class="texte">' + element["explication"] + '</p>\</section>'

    numCase++
    compteur++

    
})


//création d'une section quand on clique sur un button 
document.querySelector('#sub').addEventListener('click', function (event) {
    event.preventDefault();
    document.querySelector('#you').innerHTML += "<section class=\"formu\"><h1>Si j’étais " + document.querySelector("#analogie").value + ", je serais " + document.querySelector("#valeurAnalogie").value + ".<img src=" + document.querySelector("#imganalogie").value + " alt='' class='img'></h1><p class=\"justify\"> " + document.querySelector("#arganalogie").value + " </p></section>";
//API
    fetch("https://perso-etudiant.u-pem.fr/~gambette/portrait/api.php?format=json&login=amezir.messaoud&courriel=" + document.querySelector("#mail").value + "&message=Si j'étais " + document.querySelector("#analogie").value + ",je serais " + document.querySelector("#valeurAnalogie").value + "Parce que " + document.querySelector("#arganalogie").value).then(function (response) {
        response.json().then(function (data) {
            if (data.status == "success") {
                document.querySelector("#message").innerHTML = "Votre message a bien été reçu";
            } else {
                document.querySelector("#message").innerHTML = "Problème : votre message n'a pas été reçu";
            }
        })
    })
});




