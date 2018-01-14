import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {

  members = [
    {

      '_id': '5a2e24d464c1c9c936d8ee7a',
      'title': 'Ringo Sstar',
      'image': 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2jzE8eYrfo6kZos0D21Gl6fFodU7Ksmti57fYriCBLafW3RtNbA',
      'dateOfBirth': 1940,
      'role': 'drummer',
      // tslint:disable-next-line:max-line-length
      'description': ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur mi. Praesent aliquam, lacus vel porttitor commodo, nunc eros condimentum turpis, ut euismod metus dui a ligula. Donec dignissim libero nec pellentesque consectetur. Nulla mollis purus ut vestibulum fermentum. Suspendisse cursus condimentum purus, vel cursus eros venenatis sed. Donec eu varius ipsum. Integer aliquam, nisi id auctor tempor, velit augue vulputate elit, quis tempor lorem lectus vel arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur mi. Praesent aliquam, lacus vel porttitor commodo, nunc eros condimentum turpis, ut euismod metus dui a ligula. Donec dignissim libero nec pellentesque consectetur. Nulla mollis purus ut vestibulum fermentum. Suspendisse cursus condimentum purus, vel cursus eros venenatis sed. Donec eu varius ipsum. Integer aliquam, nisi id auctor tempor, velit augue vulputate elit, quis tempor lorem lectus vel arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur mi. Praesent aliquam, lacus vel porttitor commodo, nunc eros condimentum turpis, ut euismod metus dui a ligula. Donec dignissim libero nec pellentesque consectetur. Nulla mollis purus ut vestibulum fermentum. Suspendisse cursus condimentum purus, vel cursus eros venenatis sed. Donec eu varius ipsum. Integer aliquam, nisi id auctor tempor, velit augue vulputate elit, quis tempor lorem lectus vel arcu.'
    },
    {
      '_id': '5a38e55b612c826b0c85960b',
      'title': 'George Harrison',
      'image': 'https://img.wennermedia.com/920-width/rs-136378-26d052796259ff41b29f7ee1eb4ce20fc6d24384.jpg',
      'dateOfBirth': 1943,
      'role': 'Lead Guitar',
      // tslint:disable-next-line:max-line-length
      'description': ' la la la psum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur mi. Praesent aliquam, lacus vel porttitor commodo, nunc eros condimentum turpis, ut euismod metus dui a ligula. Donec dignissim libero nec pellentesque consectetur. Nulla mollis purus ut vestibulum fermentum. Suspendisse cursus condimentum purus, vel cursus eros venenatis sed. Donec eu varius ipsum. Integer aliquam, nisi id auctor tempor, velit augue vulputate elit, quis tempor lorem lectus vel arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur mi. Praesent aliquam, lacus vel porttitor commodo, nunc eros condimentum turpis, ut euismod metus dui a ligula. Donec dignissim libero nec pellentesque consectetur. Nulla mollis purus ut vestibulum fermentum. Suspendisse cursus condimentum purus, vel cursus eros venenatis sed. Donec eu varius ipsum. Integer aliquam, nisi id auctor tempor, velit augue vulputate elit, quis tempor lorem lectus vel arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu consectetur mi. Praesent aliquam, lacus vel porttitor commodo, nunc eros condimentum turpis, ut euismod metus dui a ligula. Donec dignissim libero nec pellentesque consectetur. Nulla mollis purus ut vestibulum fermentum. Suspendisse cursus condimentum purus, vel cursus eros venenatis sed. Donec eu varius ipsum. Integer aliquam, nisi id auctor tempor, velit augue vulputate elit, quis tempor lorem lectus vel arc'
    }

  ];
  constructor() { }
   getMembers() {
     return this.members;
   }
  getMember(id: string) {
    console.log(id);
    for ( let i = 0; i < this.members.length; i++) {
      if ( this.members[i]._id === id) {
        return this.members[i];
      }
    }
  }

}
