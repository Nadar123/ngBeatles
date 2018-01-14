import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AlbumsComponent } from './albums/albums.component';
import { MembersComponent } from './members/members.component';
import { MediaComponent } from './media/media.component';
import { MemberComponent } from './member/member.component';
import { AlbumComponent } from './album/album.component';
import { BlogService} from './blog.service';
import { GallerybeatlesComponent } from './gallery/gallerybeatles/gallerybeatles.component';
import { ImageComponent } from './gallery/image/image.component';
import { AlbumService} from './album.service';

import { ImageService } from './gallery/image/shared/image.service';
import { ImageFilterPipe } from './gallery/image/shared/filter.pipe';
import { MembersService } from './members.service';

@NgModule({
  declarations: [
    AppComponent,
    BlogListComponent,
    BlogItemComponent,
    NavbarComponent,
    AlbumsComponent,
    MembersComponent,
    MediaComponent,
    MemberComponent,
    AlbumComponent,
    GallerybeatlesComponent,
    ImageComponent,
    ImageFilterPipe

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: BlogListComponent },
      { path: 'blog/:id', component: BlogItemComponent },
      { path: 'albums', component: AlbumsComponent },
      { path: 'members', component: MembersComponent },
      { path: 'media', component: MediaComponent },
      { path: 'member/:id', component: MemberComponent },
      { path: 'album/:id', component: AlbumComponent },
      { path: 'gallerybeatles', component: GallerybeatlesComponent},
      { path: 'image/:id', component: ImageComponent }


    ])
  ],
  providers: [
    BlogService,
    ImageService,
    AlbumService,
    MembersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
