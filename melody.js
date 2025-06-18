
let movies = [
    {
        name:"Jersey",
        rating:"IMDB : 8.5",
        poster:"https://th.bing.com/th/id/OIP.dB2OP_Cyf13lf7DRiD_WfAHaKX?w=206&h=288&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"AjAe_Q1WZ_8",
        actors:"Nani . Mrunal Thakur",
        genre:"Sports , Drama",
        description:"Arjun, a talented but failed cricketer, decides to return to cricket in his late thirties, driven by the desire to represent the Indian cricket team and fulfil his son's wish for a jersey as a gift",    
    },
    {
        name:"Vedam",
        rating:"IMDB : 8.1",
        poster:"https://th.bing.com/th/id/OIP.YqRXqi36LEYs60GEDORk8wHaJ4?w=126&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"-ko6JZFChTg",
        actors:"Allu Arjun . Anuskha",
        genre:"Sports , Drama",
        description:"Raju, Saroja, Ramulu, Vivek Chakravarthy and Raheemuddin Qureshi are five people whose destinies get entangled with each other when they are victims of a terrorist attack that occurs in a hospital.",    
    },
    {
        name:"Khaleha",
        rating:"IMDB : 7.6",
        poster:"https://th.bing.com/th/id/OIP._en06cBQnG9yej9BDxZvYwHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"UrHkqs-BrcQ",
        actors:"Mahesh Babu . Anuskha",
        genre:"Action , Drama , Thriller",
        description:"An unknown disease kills many in a village. According to a prediction, a godsend will arrive to help them. When one of the villagers meets Raju, he realises that Raju is the one who can save them.",    
    },
    {
        name:"Salaar",
        rating:"IMDB : 6.8",
        poster:"https://th.bing.com/th/id/OIP.D87r4OKoCGZyKxmQ84PzfAHaLG?w=208&h=305&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"4GPvYMKtrtI",
        actors:"Prabhas . Sruthi Haasan",
        genre:"Action , Thriller",
        description:"Just when the prince of Khansaar is about to rise to the throne, a plan of overthrowing him is exercised and only one man can help him retrieve power.",    
    },
    {
        name:"Dalapathi",
        rating:"IMDB : 8.5",
        poster:"https://th.bing.com/th/id/OIP.V3VcUOgGRxGQ92nfjW-lkAHaLH?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"-0UtUosywAI",
        actors:"Rajinikanth . Shobana",
        genre:"Gangster , Drama ",
        description:"Surya, a courageous man who gets raised in the slums, fights for the rights of the poor. However, he becomes friends with Deva, who hires him as his commander and changes his life completely.",    
    },
    {
        name:"Orange",
        rating:"IMDB : 6.7",
        poster:"https://th.bing.com/th/id/OIP.K9-UGeMPPUsvWUGVLr1LZQHaKM?w=123&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"q8GcMjkbCjo",
        actors:"Ramcharan . Genelia",
        genre:"Romantic , Comedy , Drama ",
        description:"A man who does not believe in love after going through a heartbreak is in a relationship with a young woman. But when she asks him to be with her all his life, he hesitates to accept her proposal.",    
    },
    {
        name:"Hi, Nanna",
        rating:"IMDB : 8.2",
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/hi-nanna-et00364505-1701678660.jpg",
        trailer:"Iz97_kxHaSc",
        actors:"Nani . Mrunal Thakur",
        genre:"Romantic , Drama ",
        description:"A doting father and his 6-year-old daughter find their lives taking a dramatic turn when the woman he loves marries someone else.",    
    },
    {
        name:"Godavari",
        rating:"IMDB : 7.9",
        poster:"https://th.bing.com/th/id/OIP.RgLV6Zn1SdwalqlCPKHuuwHaKf?w=141&h=199&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"i8SVmHhwWuQ",
        actors:"Sumanth . Kamalinee",
        genre:"Romantic , Drama ",
        description:"Sreeram, an idealist, fails to marry the love of his life due to her engagement to an IPS officer. To get over this, he boards a cruise on the Godavari river and soon meets a young woman named Seetha." 
    },
    {
        name:"Ye Maya Chesave",
        rating:"IMDB : 7.7",
        poster:"https://th.bing.com/th/id/OIP.bUfXlUvEyXmQBTI-UI7iTgHaLG?w=117&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"gDAgEvnopFs",
        actors:"Naga Chaitanya . Samantha",
        genre:"Romantic , Drama ",
        description:"Karthik, an engineering graduate, wants to make films. He falls in love with Jessie, his neighbour, but her father opposes their relationship due to religious differences.",    
    },
    {
        name:"Idiot",
        rating:"IMDB : 7",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSfbrJ7QH_iGF9Xhz5oAp9pH8GARi1GqATuQ&s",
        trailer:"fGXJ3G2dmmk",
        actors:"Raviteja . Rakshitha",
        genre:"Romantic , Action , Drama ",
        description:"Chanti, a young man, is rescued by Suchitra when he is beaten by thugs. He falls in love with her and tries to woo her, but she does not reciprocate his feelings.",    
    },
    {
        name:"Venky",
        rating:"IMDB : 7.5",
        poster:"https://th.bing.com/th/id/OIP.1g5WYbz60wSebaTAD7FW7gHaLH?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"aO0F1_O60iQ",
        actors:"Raviteja . Sneha",
        genre:"Romantic , Comedy , Drama ",
        description:"Venkateswarlu is headed to Hyderabad to join the police force but finds himself embroiled in a double murder on the train. When he joins the academy, he realises that their boss is the murderer.",    
    },
    {
        name:"Tholi prema",
        rating:"IMDB : 8.3",
        poster:"https://th.bing.com/th/id/OIP.AtNaR4SUBvj16lHomBY7UgAAAA?w=124&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"xmtDLzJw3Zs",
        actors:"Pawan Kalyan . Keerthi",
        genre:"Romantic , Drama ",
        description:"Balu falls in love with Anu, who has returned to her grandfather's house from the United States. Despite saving her life during an accident, Balu faces the challenge of expressing his love for her.",    
    },
    {
        name:"Businessman",
        rating:"IMDB : 7.2",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrm7W0mA14DgWXvqN0BxL26asz4C_hE110Gw&s",
        trailer:"1qJRNcouLOY",
        actors:"Mahesh Babu . khajal",
        genre:"Gangster , Drama ",
        description:"A highly ambitious man visits Mumbai with the notion of ruling the city. He turns into a local gangster and manages to become a powerful businessman, though, his intentions are not what they seem.",    
    },
    {
        name:"Varsham",
        rating:"IMDB : 7.3",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9qfXSxCTGFYlPdvgCjY5gbkDXfrAuQBBGFA&s",
        trailer:"Rp8roHvICK4",
        actors:"Prabhas . Trisha",
        genre:"Romantic , Drama ",
        description:"Venkat and Shailaja meet on a train and fall in love. But Shailaja's father disapproves of their relationship and decides to marry her off to Bhadranna, a ruthless landlord, who is obsessed with her.",    
    },
    {
        name:"Midhunam",
        rating:"IMDB : 8.2",
        poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-gIK4Ostk4GSHnBCKwQwTd0BT7HwAntcPZA&s",
        trailer:"b5h8YfdSwD8",
        actors:"SP Balu . Lakshmi",
        genre:"Family, Drama ",
        description:"Appadasu, a retired teacher, lives in a village with his wife Buchchi. While their children live abroad, they lead a blissful life with no insecurity or loneliness and enjoy life to the fullest.",    
    },
    {
        name:"Seethamma Vakitlo Sirimalle Chettu",
        rating:"IMDB : 7.5",
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/seethamma-vakitlo-sirimalle-chettu-et00010088-1740981628.jpg",
        trailer:"KfjXhAB6fkI",
        actors:"Venkatesh . Mahesh Babu",
        genre:"Family , Drama ",
        description:"Two brothers face ridicule due to unemployment and their family's poor financial background. Consequently, their bond with each other and their love lives are deeply affected.",    
    },
    {
        name:"Okkadu",
        rating:"IMDB : 8",
        poster:"https://th.bing.com/th/id/OIP.pPsRki09rBkM9OpbD0bdxAHaLG?w=128&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"KZ0lF_mjSQM",
        actors:"Mahesh Babu . Bhoomika",
        genre:"Sports , Drama ",
        description:"Ajay, a Kabaddi player, saves Swapna from a brutal factionist, Obul Reddy who wants to marry her against her wish. The latter pursues them but Ajay refuses to back down from a confrontation with him.",    
    },
    {
        name:"Baasha",
        rating:"IMDB : 8.3",
        poster:"https://th.bing.com/th/id/OIP.O6QWLGyvdZOlBHaI2SO8EgHaJQ?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"y9KrRH8Pk3A",
        actors:"Rajinikanth . Nagma",
        genre:"Gangster , Action , Drama ",
        description:"Rickshaw driver Manickam is a man who avoids violence at all costs. However, when his brother, a cop, gets into trouble with some goons, it triggers a set of events that revive Manickam's old self.",    
    },
    {
        name:"Rangastalam",
        rating:"IMDB : 8.2",
        poster:"https://th.bing.com/th/id/OIP.mmvkt5LV125WT4MtO8PbjwHaKf?w=208&h=294&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"sueMmTm-M4Y",
        actors:"Ram Charan . Samantha",
        genre:"Romantic , Drama ",
        description:"A young man with impaired hearing and his elder brother decide to oppose the tyrannical rule of Phanindra, the corrupt leader of their village's local government.",    
    },
    {
        name:"Darling",
        rating:"IMDB : 7.4",
        poster:"https://th.bing.com/th/id/OIP.J2be1zqcWO1wPEpq4zCgeQHaKg?w=208&h=296&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"WClEZFcu_Ow",
        actors:"Prabhas . khajal",
        genre:"Romantic , Comedy",
        description:"Prabha prepares to meet Nandini, his childhood friend, at a reunion party organised by his father. However, things take a turn when Nisha, a gangster's daughter, falls in love with him.",    
    },
    {
        name:"Aadavari Matalaku Arthale Verule",
        rating:"IMDB : 7.6",
        poster:"https://th.bing.com/th/id/OIP.MOwT7OAICctwVkIbRy4c9gHaMU?w=208&h=317&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"EjSuLOBskbI",
        actors:"Venkatesh . Trisha",
        genre:"Drama ",
        description:"Ganesh falls in love with Keerthi and lands a job in the software company she works at. However, things take an unexpected turn when he discovers that she is already engaged to someone else.",    
    },
    {
        name:"Happy",
        rating:"IMDB : 7.1",
        poster:"https://m.media-amazon.com/images/M/MV5BMTcwNzA1Mzc0Ml5BMl5BanBnXkFtZTgwNzAxMDAxMzE@._V1_QL75_UX234_.jpg",
        trailer:"1HWZhKSzGDo",
        actors:"Allu Arjun . Genelia D'Souza",
        genre:"Romantic , Comedy",
        description:"An orthodox politician's daughter, about to wed a powerful man, blames her friend, a pizza delivery boy, for her current situation. The boy tries to set things right by pretending to be her lover.",    
    },
    {
        name:"Kushi",
        rating:"IMDB : 8.1",
        poster:"https://th.bing.com/th/id/OIP.-z7v_hBczfB0knsYV4nsxgAAAA?w=116&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"KFHXCvvxL1U",
        actors:"Pawan Kalyan . Bhoomika",
        genre:"Romantic , Comedy",
        description:"College friends, Madhu and Sidhu's friendship is impacted due to a misunderstanding. When circumstances force them to come together for a friend, they realise their love for each other.",    
    },
    {
        name:"Pelli Choopulu",
        rating:"IMDB : 8.2",
        poster:"https://th.bing.com/th/id/OIP.ZquRkzIenKHKZMPlta-NhwAAAA?w=120&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"9v9nESxBpqU",
        actors:"Vijay Devarakonda . Ritu Varma . ",
        genre:"Romantic , Comedy ",
        description:"Fed up with his carefree attitude, Prasanth's father fixes his marriage to make him responsible. However, meeting an ambitious girl changes his life for the better.",    
    },
    {
        name:"Bahubali",
        rating:"IMDB : 8",
        poster:"https://th.bing.com/th/id/OIP.ud1yTqPLyIH8dZoM0u5DUgHaK-?w=205&h=304&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        trailer:"DIXteaA2z-o",
        actors:"Prabhas . Thamannah",
        genre:"Action , Fantacy",
        description:"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",    
    }
]









/*function searchMovie()
{
    let movieName = document.getElementById('search').value;

    if(movieName!=="")
    {
            let result = movies.filter(function(movie)
            {
                return movie.name.toUpperCase().includes(movieName.toUpperCase())
            })

            displayMovies(result);
        
    }
    else
    {
        displayMovies(movies);
    }


}*/


function searchMovie()
{
    let movieName = document.getElementById('search').value;

    if(movieName!=="")
    {
            let result = movies.filter(function(movie)
            {
                let query = movieName.toUpperCase();

                let nameMatch = movie.name.toUpperCase().includes(query);
                let genreMatch = movie.genre.toUpperCase().includes(query);
                let actorsMatch = movie.actors.toUpperCase().includes(query);


                //return movie.name.toUpperCase().includes(movieName.toUpperCase())//
            
            return nameMatch || genreMatch || actorsMatch;
        });
            displayMovies(result);
        
    }
    else
    {
        displayMovies(movies);
    }


}


function displayMovies(data)
{

    document.getElementById("movies").innerHTML="";

    let htmlString = ``;  

        for(let i=0;i<data.length;i++)
        {
          
             


            htmlString=htmlString+`
            <div class="movie">
                <div class="overlay" >
                        <div class="trailer" id="trailer" >
                           <iframe src="https://www.youtube.com/embed/${data[i].trailer}" allow="accelerometer;autoplay;fullscreen" ></iframe>
                        </div>

                        <div class="details">
                            <h1>${data[i].name}</h1>
                            <h2> ${data[i].rating}</h2>
                             <h3>Actors : ${data[i].actors} </h3>
                             <p1>Genre : ${data[i].genre} </p1>
                             <p1>Description: ${data[i].description} </p1>
                        </div>
                </div>

                    <img class="poster" src="${data[i].poster}" alt="poster">
            </div>`
        }

        console.log(htmlString);
   
    document.getElementById("movies").innerHTML=htmlString;
}


displayMovies(movies);


document.getElementById('homebtn').addEventListener('click',function(){
             window.location.href="index.html";

});


/*firstpage*/



















 /*let movie = document.createElement("div");
    movie.classList.add("movie");

    let overlay = document.createElement("div");
    overlay.classList.add("overlay");

    movie.appendChild(overlay);
    
    console.log(movie);*/