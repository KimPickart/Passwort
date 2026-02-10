let hearts = document.querySelectorAll(".heart");
let divHearts = document.querySelectorAll(".div_heart");
let body = document.querySelector("body");
let textLove = 
    ["Ich frage mich manchmal, wie man es schafft, ein so großartiges Herz zu besitzen und gleichzeitig so wunderschön zu sein.",
     "Immer wenn ich in deine Augen blicke, sehe ich eine wunderbare Welt, wo andere eine Pupille und eine Iris sehen würden.", 
     "Jede Berührung von dir fühlt sich wie ein Traum an, da ich immer noch nicht verstehe, wie du bei mir sein kannst.", 
     "Du hast eine Fähigkeit, in jeder schlimmsten Dunkelheit ein Licht zu bringen, die mir hilft wieder aufzuleuchten.", 
     "Ich verspreche dir, dass ich immer treu, hilfsbereit, lieb, ehrgeizig, mutig, einfühlsam und alles, was in meiner Macht noch möglich ist, an deiner Seite stehen werde.", 
     "Ich verspreche dir, dass, wenn du weinst und trauerst, ich da sein werde. Immer wenn du mich brauchst, will ich da sein, um dir zu helfen. Egal, wie tief du fällst. Ich werde bei dir sein und die nötige Leiter heranschaffen, um dich aus der Tiefe zu holen. Ich bleibe bei dir und werde dir immer Trost und Wärme spenden.", 
     "Einer meiner Träume ist es, dass, wenn ich in die Augen meines Kindes in der Zukunft blicken werde, ich deine Augen in ihm/ihr sehe.", 
     "Nach einem Jahr bin ich bereit zu sagen, was Liebe für mich bedeutet. Wenn ich daran denke, was in 10 Jahren für mich Liebe heißen könnte, bekomme ich jetzt schon Gänsehaut.", 
     "Ich bin stolz auf dich, was du alles geschafft hast und noch schaffen wirst. Ich bin dankbar und unglaublich stolz auf das, was wir aufgebaut haben und noch aufbauen werden. Ich weiß auch nie, wie ich meine Dankbarkeit ausdrücken kann. Doch dann sage ich es dir einfach klar und einfach: Danke Jonas für alles. ❤️", 
     "Ich weiß nicht, ob du es schon weißt, doch ich habe mich in einen Menschen verliebt. Hast du eine Idee? Diese Person kennst du. Ja, ok. Du Jonas 😊"];
let full = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

for (let index = 0; index < hearts.length; index++) {
    hearts[index].addEventListener("click", function () {
        if (full[index] === 0) {
            let memorie = document.createElement("p");
            memorie.className = "memorie";
            memorie.innerHTML = textLove[index];
            divHearts[index].appendChild(memorie);
            hearts[index].style.width = "20vmin";
            hearts[index].style.height = "12vmin";
            full[index] = 1;

            if (full.every(value => value === 1)) {
                let loveBackground = document.createElement("div");
                let loveText = document.createElement("p");

                loveBackground.className = "love";
                loveText.className = "love_text";
                loveText.innerHTML = "Wenn du mich liebst drücke auf ja und wenn nicht...";

                body.appendChild(loveBackground);
                loveBackground.appendChild(loveText);

                let yesButton = document.createElement("button");
                let noButton = document.createElement("button");

                yesButton.classList.add("love_button", "yes_button");
                noButton.classList.add("love_button", "no_button");

                yesButton.innerHTML = "Ja ❤️";
                noButton.innerHTML = "Nein :(";

                loveBackground.appendChild(yesButton);
                loveBackground.appendChild(noButton);

                noButton.addEventListener("mouseenter", () => {
                    noButton.style.transform = `translateX(${Math.random()*40 - 80}vmin)`;
                });

                noButton.addEventListener("click", function () {
                    alert("😔😞😭");
                    alert("Jonas, liebt mich nicht?");
                    alert("Das ist doch eine Lüge😭");
                    alert("Meinst du es ernst!!!")
                    alert("Ich liebe dich🥺")
                })

                let fullLove = 0;
                yesButton.addEventListener("click", function () {
                    if (fullLove === 0) {
                        let textLoveYou = document.createElement("p");
                        textLoveYou.className = "text_love_you";
                        textLoveYou.innerHTML = "Ich liebe dich auch ganz dolle ❤️"
                        textLoveYou.style.fontWeight = "bold";
                        body.appendChild(textLoveYou);
                        
                        let imgLove = document.createElement('img');
                        imgLove.src = "misskalem-heart-25660_256.gif";
                        imgLove.className = "img_love"
                        body.appendChild(imgLove);
                        fullLove = 1;
                    }
                    
                    
                })
            }

        }
    }) 
}