import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  moviesDB = [
    {
      title: 'The punisher',
      description:
        'El ex-militar Frank Castle es traicionado por tal y tal y ahora ',
      btnText: 'Ver',
      image: 'https://blog.tribugame.es/wp-content/uploads/2019/01/The-Punisher-temporada-2-1-1024x556.jpg',
      btnColor: 'bg-primary-gradiente',
      type: 'serie', //movie  serie  documental
    },
    {
      title: 'The punisher',
      description:
        'El ex-militar Frank Castle es traicionado por tal y tal y ahora ',
      btnText: 'Ver',
      image: 'https://blog.tribugame.es/wp-content/uploads/2019/01/The-Punisher-temporada-2-1-1024x556.jpg',
      btnColor: 'bg-primary-gradiente',
      type: 'serie', //movie  serie  documental
    },
    {
      title: 'The punisher',
      description:
        'El ex-militar Frank Castle es traicionado por tal y tal y ahora ',
      btnText: 'Ver',
      image: 'https://blog.tribugame.es/wp-content/uploads/2019/01/The-Punisher-temporada-2-1-1024x556.jpg',
      btnColor: 'bg-primary-gradiente',
      type: 'serie', //movie  serie  documental
    },
    {
      title: 'The punisher',
      description:
        'El ex-militar Frank Castle es traicionado por tal y tal y ahora ',
      btnText: 'Ver',
      image: 'https://blog.tribugame.es/wp-content/uploads/2019/01/The-Punisher-temporada-2-1-1024x556.jpg',
      btnColor: 'bg-primary-gradiente',
      type: 'serie', //movie  serie  documental
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
