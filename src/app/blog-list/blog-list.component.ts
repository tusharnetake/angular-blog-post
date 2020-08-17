import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';

import { BlogPost } from '../blog-post';
import { BlogPostTileComponent } from '../blog-post-tile/blog-post-tile.component';
import { BlogDataService } from '../blog-data.service';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit {
 @ViewChildren('tile') blogPostTileComponents : QueryList<BlogPostTileComponent>;
 blogPosts : BlogPost[][];
 currentPage : number;

 constructor(private service : BlogDataService) { }

  ngOnInit(): void {
    this.currentPage = 0;
    this.blogPosts = this.service.getData();
  }

  updatePage(newPage){
    this.currentPage = newPage;
    
  }

  expandAll(){
    this.blogPostTileComponents.forEach(e=>e.showFullSummary())
  }
}
