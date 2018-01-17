import { Injectable } from '@angular/core';
  

@Injectable()
export class BlogService {

  items = [
    {
      '_id':  '5a19c76ede1c43306c98e300',
      'title': 'We Love the Beatles',
      'image': 'https://media.giphy.com/media/XXgpXfgBnmlkQ/giphy.gif',
      // tslint:disable-next-line:max-line-length
      'body': 'Hi:) in this Blog we will dive into Our love to Beatles, you r welcome to share stories, pictures, Music and all the information abiut them!!!! have FUN FFFFFROM The Beatles-Blog '

    },
    {
      '_id': '5a19c76ede1c43306c98e368',
      'title': 'The Band',
      'image': 'http://images.genius.com/88c5ded1a0566dff01af570134b73722.1000x1000x1.jpg',
      // tslint:disable-next-line:max-line-length
      'body': 'The Beatles wn 1963 their enMartin suggested rerecording \'Please Please Me\' at a faster tempo,[42] a studio session in late November yielded that recording,[43] of which Martin accurately predicted, \'You\'ve just made your first No.1.\'[44]\r\n\r\nIn December 1962, the Beatles concluded their fifth and final Hamburg residency.[45] By 1963, they had agreed that all four band members would contribute vocals to their albums – including Starr, despite his restricted vocal range, to validate his anngwriting partnershiuccess grew, their dominant collaboration limited Harrison\'s opportunities as a lead vocalist.[47] Epstein, in an effort to maximise the Beatles\' commercial potential, encouraged them to adopt a professional approach to performing.[48] Lennon recalled him saying, \'Look, if you really want to get in these bigger places, you\'re going to have to change – stop eating on stage, stop swearing, stop smoking ...\'[36] Lennon said: \'We used to dress how we liked, on and off stage. He\'d tell us that jeans were not particularly smart and could we possibly manage to wear proper trousers, but he didn\'t want us suddenly looking square. He\'d let us have our own sense of individuality.\'[36]\r\n\r\n1963–1966: Beatlemania and touring years ',
    },
    {
      '_id': '5a1bc9b4597b2939b71dc587',
      'title': 'The Beatles in a Contemporary Dance',
      'image': 'https://media.giphy.com/media/ak2lhoGH9pKqk/giphy.gif',
      // tslint:disable-next-line:max-line-length
      'body': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras euismod dolor sit amet ullamcorper sodales. Sed tincidunt nisi blandit, pretium dolor sed, tempor sapien. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque in eros scelerisque, suscipit mi in, luctus erat. Morbi ut augue ipsum. Donec tempus hendrerit magna, eu finibus nunc dictum ut. In a tristique nunc. Etiam blandit, sapien ac interdum tristique, quam risus suscipit nisl, eget varius sem ex eu massa. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet aliquam lectus, vitae consectetur felis.Sed id volutpat quam, eu porttitor dui. Nullam vestibulum odio nec nunc semper consectetur. Nunc eu ligula eu leo congue fringilla. Aenean tristique ante eget urna eleifend, eget malesuada quam dignissim. Nunc mattis volutpat urna eu pretium. Curabitur ultricies mattis libero sit amet placerat. Aliquam erat volutpat. Cras lobortis feugiat ultrices. Etiam pretium libero ut dolor pulvinar, ac congue ex interdum. Curabitur vel tellus bibendum, suscipit ex sed, iaculis elit. Suspendisse potenti. Pellentesque in arcu elit. Nulla nec nunc sollicitudin, congue purus a, egestas nulla. Curabitur vitae sollicitudin lectus.'
    },
    {
      '_id': '5a1bc9b4597b2939b71dc587',
      'title': 'ThE BEATLES VISITING LOS ANGELES  ',
      'image': 'https://media.pitchfork.com/photos/592f584e14bc83430bf25ab2/master/w_790/c4899154.jpg',
      // tslint:disable-next-line:max-line-length
      'body': ' \'\'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?\'\' ',
    },
  {

    '_id': '5a1bc9b4597b2939b71dc587',
    'title': 'GIFHY: Beatle\'s Albums  ',
    'image': 'https://media.giphy.com/media/HpA9uf8tkW9iM/giphy.gif',
    // tslint:disable-next-line:max-line-length
    'body': 'voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo volup'
  },
    {
      '_id': '5a1d1f84c0124543ff20d7b7',
      'title': 'THE BEATLES: FRANCE TOUR 1965 ',
      'image': 'https://i.pinimg.com/736x/b8/84/71/b884713080a878e677e70a0f87606008--filing-cabinet-george-harrison.jpg',
      'body': ' \'Here they sit in the most sexy cafe at that time \'Rolie Cafe\'\r\nAll the big names use to sit here\' ',

    }
  ];
  constructor() { }
   getItems() {
     return this.items;
   }
  getItem(id: string) {
    console.log(id);
    for ( let i = 0; i < this.items.length; i++) {
      if ( this.items[i]._id === id) {
        return this.items[i];
      }
    }
  }
  delete(id: string) {
    for ( let i = 0; i < this.items.length; i++) {
      if ( this.items[i]._id === id) {
        this.items.splice(i, 1);
        return;
      }
    }

  }
  add(blogitem: any) {
    this.items.push(blogitem);
  }
  create(item: any) {
    item._id = '' + Math.random();
    this.items.push( item );
    return item._id;
  }

    update(item: any ) {
    }
}
