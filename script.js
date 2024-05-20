let post = document.getElementById("firstPost");
let postsBox = document.getElementById("postsBox");

let imgurls = [
    "https://s-cdn.sportbox.ru/images/styles/1920_1080/fp_fotos/72/13/5ea018dda539c3ad55d4b4a9eb9ed211633840b7829c2335560717.jpg",
    "https://s0.rbk.ru/v6_top_pics/media/img/2/40/347130244222402.jpeg",
    "https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/1f/db/67a0669aeddba2dffc10f4fbcdafb3bb64569c4c6258f928122420.jpg",
    "https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/6f/3e/87512284f2f7449623bcfd883e20b9546367d9a8b4f0f912543338.jpg",
    "https://s-cdn.sportbox.ru/images/styles/upload/fp_fotos/5a/da/930acd508ee31c1c1016e34b5376acad64e10edb0a874120288380.jpg",
    "https://ss.sport-express.ru/userfiles/materials/193/1939873/volga.jpg",
    "https://img.chelseafc.com/image/upload/f_auto,w_1440,c_fill,g_faces,q_90/editorial/match-reports/2023-24/Tottenham%20home/Chelsea_celebrate_vs_Tottenham.jpg",
    "https://www.hindustantimes.com/ht-img/img/2023/11/09/1600x900/TOPSHOT-FBL-EUR-C1-COPENHAGEN-MAN-UTD-8_1699498629948_1699499021979.jpg",
    "https://imgresizer.eurosport.com/unsafe/1200x0/filters:format(jpeg)/origin-imgresizer.eurosport.com/2023/11/09/3822911-77691148-2560-1440.jpg",
    "https://backend.liverpoolfc.com/sites/default/files/styles/xl/public/2023-10/brighton-lowdown-061023.jpg?itok=aJR8QrXN",
    "https://uk1.sportal365images.com/process/smp-image-api/livescore.com/12012024/47966883-781e-4e89-90e1-beb9f76c4b81.jpg",
    "https://cdn.livesport.ru/l/tips/football/2024/04/21/crystal-palace_westham/picture.jpg?1713521284",
    "https://s.hs-data.com/bilder/teamfotos/640x360/749.jpg",
    "https://prod-cdn-bucket.storage.yandexcloud.net/ars2_11zon_660c716127.webp",
    "https://static.ua-football.com/img/upload/21/2ac8eb.jpeg",
    "https://static.ua-football.com/img/upload/21/2a512f.jpeg",
    "https://sportotvet.ru/wp-content/uploads/2021/12/%D0%9D%D0%BE%D1%82%D1%82%D0%B8%D0%BD%D0%B3%D0%B5%D0%BC-%D0%A4%D0%BE%D1%80%D0%B5%D1%81%D1%82-1.jpg",
    "https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/30/cd/1dd890fd92a0c3e02872506d5d3cf577647256100db34178101061.jpg",
    "https://s-cdn.sportbox.ru/images/styles/1200-auto/fp_fotos/b4/88/804b6d8f995b8b5cb4a8f52f27667445663f9caf95df1595461579.jpg",
    "https://img.sport.bigmir.net/i/74/30/35/8/7430358/2e505b55a74adf8f6bd43531cf6db38e-quality_75Xresize_crop_1Xallow_enlarge_0Xw_740Xh_400.jpg"
];

let comments = [
    "Арсенал",
    "Манчестер Сити",
    "Ливерпуль",
    "Астон Вилла",
    "Тоттенхем",
    "Ньюкасл Юнайтед",
    "Челси",
    "Манчестер Юнайтед",
    "Вест Хем Юнайтед",
    "Брайтон",
    "Борнмут",
    "Кристал Пэлэс",
    "Вулверхемптон",
    "Фулхэм",
    "Евертон",
    "Брентфорд",
    "Форест",
    "Лутон",
    "Бернли",
    "Шеффилд Юнайтед"
];

let likeButton = post.getElementsByClassName("button")[0];
let likeCounter = post.getElementsByClassName("counter")[0];

likeButton.addEventListener("click", function() {
    let count = parseInt(likeCounter.textContent);
    likeCounter.textContent = count + 1;
});

for (let i = 0; i < 100; i++) {
    let newpost = post.cloneNode(true); 
    let imgpost = newpost.getElementsByClassName("img")[0];
    imgpost.setAttribute("src", imgurls[i % 20]);

    let comment = comments[i%20];
    let commentElement = document.createElement("p");
    commentElement.textContent = comment;
    commentElement.className = "comment";
    
    let teamNameElements = newpost.getElementsByTagName("p");
    for (let j = 0; j < teamNameElements.length; j++) {
        if (teamNameElements[j].id == "teamname") {
            teamNameElements[j].remove();
            break;
        }
    }
    
    newpost.appendChild(commentElement);


    
    let likeButton = newpost.getElementsByClassName("button")[0];
    let likeCounter = newpost.getElementsByClassName("counter")[0];

    likeButton.addEventListener("click", function() {
        let count = parseInt(likeCounter.textContent);
        likeCounter.textContent = count + 1;
    });
    postsBox.appendChild(newpost); 
}
