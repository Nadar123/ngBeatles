import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  constructor() { }
  albums = [
    {
      '_id': '5a37d6ffdeb085c40628d47b',
      'title': 'Please Please Me',
      'albumYear': 1963,
      'cover': 'https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg',
      'songs': [
        'I Saw Her Standing There',
        'Misery',
        'Anna',
        'Chains',
        'Boys',
        'Ask Me Why',
        'Please Please Me',
        'Love Me Do',
        'P.S. I Love You',
        'Baby It\'s You',
        'Do You Want to Know a Secret',
        'A Taste of Honey',
        'There\'s a Place',
        'Twist and Shout'
      ],
      'musicLink': {
        'url': 'https://www.youtube.com/watch?v=dM15OeoTCN0&list=PLrAk7Hof8hp7ksavm3OrtB0UvRVOLHvw0',
        'name': 'I Saw Her Standing There'
      },
      // tslint:disable-next-line:max-line-length
      'description': 'Lonely Hearts Club Band is the eighth studio album by English rock band the Beatles. Released on 26 May 1967 in the United Kingdom[nb 1] and 2 June 1967 in the United States, it was an immediate commercial and critical success, spending 27 weeks at the top of the UK albums chart and 15 weeks at number one in the US. On release, the album was lauded by the vast majority of critics for its innovations in music production, songwriting and graphic design, for bridging a cultural divide between popular music and legitimate art, and for providing a musical representation of its generation and the contemporary counterculture. It won four Grammy Awards in 1968, including Album of the Year, the first rock LP to receive this honour.\'Sergeant Pepper\' itself didn\'t appear until halfway through making the album. It was Paul\'s song, just an ordinary rock number ... but when we had finished it, Paul said, \'Why don\'t we make the album as though the Pepper band really existed, as though Sergeant Pepper was making the record? We\'ll dub in effects and things.\'I loved the idea, and from that moment on it was as though Pepper had a life of its own. In 1966, the American musician and bandleader Brian Wilsons growing interest in the aesthetics of recording and his admiration for both record producer Phil Spector\'s Wall of Sound and the Beatles\' album Rubber Soul resulted in the Beach Boys\' Pet Sounds LP, which demonstrated his production expertise and his mastery of composition and arrangement.[28][nb 3] The author Thomas MacFarlane credits the release with influencing many musicians of the time, with McCartney in particular singing its praises and drawing inspiration to expand the focus of the Beatles\' work with sounds and textures not usually associated with popular music\'. McCartney thought that his constant playing of the album made it difficult for Lennon to \'escape the influence\', adding: It\'s very cleverly done ... so we were inspired by it and nicked a few ideas.\'Without Pet Sounds, Sgt. Pepper never would have happened ... Pepper was an attempt to equal Pet Sounds. Freak Out! by the Mothers of Invention has also been cited as having influenced Sgt. Pepper.[38] According to the author Philip Norman, during the Sgt. Pepper recording sessions McCartney repeatedly stated: \'This is our Freak Out!\' The music journalist Chet Flippo states that McCartney was inspired to record a concept album after hearing Freak Out!, considered the first rock concept album.'

    },
    {
      '_id': '5a38cd47612c826b0c858f30',
      'title': 'Second Album',
      'albumYear': 1964,
      'cover': 'https://images-na.ssl-images-amazon.com/images/I/81QCG%2Bip8rL._SX522_.jpg',
      'songs': [
        'Roll Over Beethoven',
        'Thank You Girl',
        'You Really Got a Hold on Me',
        'Money (That\'s What I Want)',
        'You Can\'t Do That',
        'Long Tall Sally',
        'Please Mister Postman',
        'I\'ll Get You',
        'She Loves You'
      ],
      'musicLink': {
        'url': 'https://www.youtube.com/watch?v=_awAH-JJx1k',
        'name': 'Money (That\'s What I Want)'
      },
      // tslint:disable-next-line:max-line-length
      'description': 'The Beatles Second Album is the Beatles\' second Capitol Records album, and their third album released in the United States including Introducing. The Beatles released three months earlier on Vee-Jay Records. The Beatles\' Second Album replaced Meet the Beatles! at number one on the album charts in the US. In 2004 The Beatles\' Second Album was issued for the first time on compact disc as part of The Capitol Albums, Volume 1 boxed set and was issued in a miniature cardboard replica of the original album sleeve containing the US mono and stereo mixes. In 2014, the album was released on CD again, individually and included in the Beatles boxed set The U.S. Albums, which contained the albums running order but with UK mixes as remastered in 2009. The album was also issued on the EMI subsidiary label Odeon in 1964 for the Japanese market. That version had the same title and similar cover art but contained different songs than the US release.With the massive popularity of Meet the Beatles! and a desire for additional Beatles product as well as an available backlog of some 25 songs yet to be released by Capitol Records, it was decided to compile a follow-up album as soon as possible. The Beatles\' Second Album was the first album of the group\'s work to be assembled by Capitol Records exclusively for the US market—Meet the Beatles! was a reconfigured, abridged version of With the Beatles. Second Album was a potpourri collection that did not represent the Beatles\' output at the time; the end result was an assembly of material from nearly a half-dozen sessions and sources. Capitol compiled the album using additional songs from four different UK releases. Included were the five remaining tracks from With the Beatles. Also included were \'Thank You Girl\' (the B-side to the single \'From Me to You\'), the single \'She Loves You (the B-side to the single Can\'t Buy Me Love) from the upcoming A Hard Days Night UK soundtrack, and two new songs, Long Tall Sally and  I Call Your Name, both released two months later in the UK on the Long Tall Sally EP. Capitol Records engineers, headed by record executive Dave Dexter, Jr., added considerable echo and reverb to the stereo versions on order to give the songs the sound of a live performance. The effect is more noticeable on the tracks culled from With the Beatles, as those were recorded in two-track stereo. Allmusic said that \'The Beatles\' Second Album stands as probably the best pure rock & roll album ever issued of the groups music because the album \'avoid any trace of the pop ballads favored by Paul McCartney that usually slowed down the group\'s other early albums, and the result was the longest uninterrupted body of then-hard rock & roll and R&B in their entire output.'
    }
  ];

  ngOnInit() {
    let x: Observable <string>;
    x = Observable.from(['world', 'Isreal']);
    x.subscribe((nadar ) => console.log('hello ' + nadar));


    let y: Observable<any>;
    const you = document.querySelector('body');
    y = Observable.fromEvent(you, 'click');
    y.subscribe((event) => {
      console.log('xyz');
    });
  }

}
