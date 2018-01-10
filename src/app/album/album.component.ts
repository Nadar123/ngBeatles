import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {

  constructor() { }
  album = 
    {
      "_id": "5a37d6ffdeb085c40628d47b",
      "title": "Please Please Me",
      "albumYear": 1963,
      "cover": "https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg",
      "songs": [
        "I Saw Her Standing There",
        "Misery",
        "Anna",
        "Chains",
        "Boys",
        "Ask Me Why",
        "Please Please Me",
        "Love Me Do",
        "P.S. I Love You",
        "Baby It's You",
        "Do You Want to Know a Secret",
        "A Taste of Honey",
        "There's a Place",
        "Twist and Shout"
      ],
      "musicLink": {
        "url": "https://www.youtube.com/watch?v=dM15OeoTCN0&list=PLrAk7Hof8hp7ksavm3OrtB0UvRVOLHvw0",
        "name": "I Saw Her Standing There"
      },
      "description": "Lonely Hearts Club Band is the eighth studio album by English rock band the Beatles. Released on 26 May 1967 in the United Kingdom[nb 1] and 2 June 1967 in the United States, it was an immediate commercial and critical success, spending 27 weeks at the top of the UK albums chart and 15 weeks at number one in the US. On release, the album was lauded by the vast majority of critics for its innovations in music production, songwriting and graphic design, for bridging a cultural divide between popular music and legitimate art, and for providing a musical representation of its generation and the contemporary counterculture. It won four Grammy Awards in 1968, including Album of the Year, the first rock LP to receive this honour.'Sergeant Pepper' itself didn't appear until halfway through making the album. It was Paul's song, just an ordinary rock number ... but when we had finished it, Paul said, 'Why don't we make the album as though the Pepper band really existed, as though Sergeant Pepper was making the record? We'll dub in effects and things.'I loved the idea, and from that moment on it was as though Pepper had a life of its own. In 1966, the American musician and bandleader Brian Wilsons growing interest in the aesthetics of recording and his admiration for both record producer Phil Spector's Wall of Sound and the Beatles' album Rubber Soul resulted in the Beach Boys' Pet Sounds LP, which demonstrated his production expertise and his mastery of composition and arrangement.[28][nb 3] The author Thomas MacFarlane credits the release with influencing many musicians of the time, with McCartney in particular singing its praises and drawing inspiration to expand the focus of the Beatles' work with sounds and textures not usually associated with popular music'. McCartney thought that his constant playing of the album made it difficult for Lennon to 'escape the influence', adding: It's very cleverly done ... so we were inspired by it and nicked a few ideas.'Without Pet Sounds, Sgt. Pepper never would have happened ... Pepper was an attempt to equal Pet Sounds. Freak Out! by the Mothers of Invention has also been cited as having influenced Sgt. Pepper.[38] According to the author Philip Norman, during the Sgt. Pepper recording sessions McCartney repeatedly stated: 'This is our Freak Out!' The music journalist Chet Flippo states that McCartney was inspired to record a concept album after hearing Freak Out!, considered the first rock concept album."

    };
  id = 1234;
  ngOnInit() {
  }

}
