import { Component, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../interfaces/post';
import { Subject } from 'rxjs';

@Component({
  selector: "app-posts",
  templateUrl: "./posts.component.html",
  styleUrls: ["./posts.component.scss"],
})
export class PostsComponent implements OnInit {
  posts: Post[] = [];

  dtOptions: DataTables.Settings;

  defaultOptions: DataTables.Settings = {
    pagingType: "full_numbers",
    pageLength: 5,
    lengthMenu: [5, 10, 25, 50, 100],
    scrollX: true,
    paging: true,
    searching: true,
    columns: [
      { width: "50px" },
      { width: "50px" },
      { width: "250px" },
      { width: "700px" },
    ],
    language: {
      processing: "Procesando...",
      search: "Buscar:",
      lengthMenu: "Mostrar _MENU_ elementos",
      info: "",
      infoEmpty: "Mostrando ningún elemento.",
      infoFiltered: "(filtrado _MAX_ elementos total)",
      infoPostFix: "",
      loadingRecords: "Cargando registros...",
      zeroRecords: "No se encontraron registros",
      emptyTable: "No hay datos disponibles en la tabla",
      paginate: {
        first: "Primero",
        previous: "Anterior",
        next: "Siguiente",
        last: "Último",
      },
    },
  };

  constructor(private post: PostService) {}

  ngOnInit() {
    this.dtOptions = this.defaultOptions;

    this.post.getPosts().subscribe((posts) => {
      this.posts = posts;
    });
  }
}
