import { Injectable } from '@angular/core'

@Injectable()
export class ImageService{
    visibleImages = [];

    getImages(){
        return this.visibleImages = IMAGES.slice(0);
    }

    getImage(id: number){
        return IMAGES.slice(0).find(image => image.id == id)
    }
}

const IMAGES = [
{"id": 1, "category": "beatles", "caption":"LOL ", "url": "http://ultimateclassicrock.com/files/2017/10/Beatles1.jpg"},
{"id": 2, "category": "beatles", "caption":"LOL ", "url": "http://files.greatermedia.com/uploads/sites/12/2017/03/3307989-1400x1097.jpg"},
{"id": 3, "category": "beatles", "caption":"LOL ", "url": "http://media4.s-nbcnews.com/i/streams/2014/January/140123/2D11403865-today-beatles-140123.jpg"},
{"id": 4, "category": "beatles", "caption":"LOL ", "url": "http://www.missmoss.co.za/wp-content/uploads/2016/11/zz-beatles-linda-mccartney.jpg"},
{"id": 5, "category": "beatles", "caption":"LOL ", "url": "http://ultimateclassicrock.com/files/2014/10/Beatles-.jpg "},
{"id": 6, "category": "beatles", "caption":"LOL ", "url": "https://media.npr.org/assets/img/2017/06/01/rs23_05_gatefold-scr_wide-f417a07e810c7bc6d0efa1e909c1fb9b8562608a.jpg?s=1400"},
{"id": 7, "category": "beatles", "caption":"LOL ", "url": "http://ultimateclassicrock.com/files/2017/10/Beatles1.jpg"},
{"id": 8, "category": "member", "caption":"LOL ", "url": "https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/styles/media_responsive_widest/public/tile/image/377-12compressed.jpg?itok=tv8QalyJ"},
{"id": 9, "category": "member", "caption":"LOL ", "url": "https://www.billboard.com/files/video/1125911414_5384791960001_5384756620001-vs.jpg"},
{"id": 10, "category": "member", "caption":"LOL ", "url": "http://c8.alamy.com/comp/B3NKTN/beatles-files-1964-ringo-starr-with-glass-eyes-on-set-of-a-hard-days-B3NKTN.jpg"},
{"id": 11, "category": "member", "caption":"LOL ", "url": "https://i.ytimg.com/vi/YkgkThdzX-8/maxresdefault.jpg"},
{"id": 12, "category": "member", "caption":"LOL ", "url": "https://www.biography.com/.image/t_share/MTE1ODA0OTcxNjk3OTMxNzg5/john-lennon-9379045-2-402.jpg"},
{"id": 13, "category": "member", "caption":"LOL ", "url": "https://www.biography.com/.image/t_share/MTE5NTU2MzE2Mjk4OTcwNjM1/paul-mccartney-9390850-1-402.jpg"},
{"id": 14, "category": "special", "caption":"LOL ", "url": "https://i.ytimg.com/vi/EIbJmwWSAPg/maxresdefault.jpg"},
{"id": 15, "category": "special", "caption":"LOL ", "url": "https://img00.deviantart.net/b33b/i/2013/001/2/5/beatles_graffiti_by_mojomastah-d5q2l15.jpg"},
{"id": 16, "category": "special", "caption":"LOL ", "url": "https://i.ytimg.com/vi/QXCqKAbcEvM/maxresdefault.jpg"},
{"id": 17, "category": "special", "caption":"LOL ", "url": "https://thumbs.dreamstime.com/z/beatles-graffiti-wall-india-49546609.jpg"},
{"id": 18, "category": "special", "caption":"LOL ", "url": "https://pbs.twimg.com/media/CcXRspOW8AAYf_2.jpg"},
{"id": 19, "category": "beatles", "caption":"LOL ", "url": "https://d2s36jztkuk7aw.cloudfront.net/sites/default/files/styles/media_responsive_widest/public/tile/image/Beatles-%20Image%201.jpg?itok=ilH8EnYd"},
{"id": 20, "category": "special", "caption":"LOL ", "url": "https://i.pinimg.com/originals/02/a3/ca/02a3ca923b10048ada5e589dad645a1a.jpg"},
{"id": 21, "category": "beatles", "caption":"LOL ", "url": "https://www.thesun.co.uk/wp-content/uploads/2017/02/nintchdbpict000265329551.jpg?strip=all&w=951"},
{"id": 22, "category": "beatles", "caption":"LOL ", "url": "https://img.wennermedia.com/featured-promo-782/rs-431-the-beatles.jpg"},
{"id": 23, "category": "beatles", "caption":"LOL ", "url": "https://i2-prod.liverpoolecho.co.uk/incoming/article12678881.ece/ALTERNATES/s1200/Beatles02.jpg"},
{"id": 24, "category": "beatles", "caption":"LOL ", "url": "https://usercontent2.hubstatic.com/7371525.jpg"},
{"id": 25, "category": "beatles", "caption":"LOL ", "url": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/The_Beatles_official_logo.svg/1200px-The_Beatles_official_logo.svg.png"},
{"id": 26, "category": "member", "caption":"LOL ", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIaYGM1KOH69uYWCe3XSZ4M2DRltVprhzy9A8fAEjkBUIm4MANBw"},
{"id": 28, "category": "member", "caption":"LOL ", "url": "http://www.beatlesarchive.net/wp-content/uploads/2017/01/george-harrison-pattie-boyd.png"},
{"id": 29, "category": "member", "caption":"LOL ", "url": "http://4.bp.blogspot.com/-yVBUgeyoDXc/UPxje3bP9aI/AAAAAAAABfg/93fe-nqVkmM/s1600/John+Lennon+-+the+beatles.jpg"},
{"id": 30, "category": "member", "caption":"LOL ", "url": "http://img.wennermedia.com/social/paul-mccartney-40-best-songs-listen-see-rolling-stone-05791b0b-22f9-4817-afef-fd281578aae6.jpg"},
{"id": 31, "category": "member", "caption":"LOL ", "url": "http://www.bienfaits-meditation.com/images/john_lennon/john-lennon-yoko-ono-in-new-york-1980_headshot.jpg"},
{"id": 32, "category": "member", "caption":"LOL ", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRegt8BKTMb0iMxFW17L29SmEXW7JS2PxyB1m0MXk4UMJNDKndy"},
{"id": 33, "category": "", "caption":"LOL ", "url": "https://i2-prod.liverpoolecho.co.uk/incoming/article11985977.ece/ALTERNATES/s1200/John-Lennon.jpg"},
{"id": 34, "category": "special", "caption":"LOL ", "url": "https://c1.staticflickr.com/4/3625/3367664003_9ae7bd25fa_b.jpg"},
{"id": 35, "category": "special", "caption":"LOL ", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRJfg_Q035W-wtRzE0EU-EmakzZwyR2Tx0il6wix9WurFgy8gd"},
{"id": 36, "category": "special", "caption":"LOL ", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnBf-TpqreDp3lGXSfDIwAPnAYURp9FatvZhyLApChxMKDqwRIQQ"},
{"id": 37, "category": "special", "caption":"LOL ", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgJlVcCkAQRR_6Zk5XeKFDGCaAuTA5V30ZW8lPGPEQUUPrMm-ScA"},
{"id": 38, "category": "special", "caption":"LOL ", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZhFe3TC32D28sJN4q8Pdj9ooPImUAubY5uf-7OlCNuxUjISM"},
{"id": 39, "category": "special", "caption":"LOL ", "url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2MVbVpR5hyz9d7xtPKe8wcYVGKUhQJzl8X1xIccCn1uaONzlZ"},
{"id": 40, "category": "special", "caption":"LOL ", "url": "http://3.bp.blogspot.com/-Va5iJuIm-Zo/UxZ9kJ6NYtI/AAAAAAAABi4/Ma9isl7KB5w/s1600/theBeatles_union_jack_flag_wall_mural_6.jpg"},
{"id": 41, "category": "special", "caption":"LOL ", "url": "http://img.wennermedia.com/social/why-the-beatles-broke-up-2009-e484add3-63dc-4a66-ba11-7c53be32c673.jpg"}





]
