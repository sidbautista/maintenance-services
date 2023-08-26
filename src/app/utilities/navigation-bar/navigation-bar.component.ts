import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    const mainMenu = document.querySelector('.mainMenu');
    const closeMenu = document.querySelector('.closeMenu');
    const openMenu = document.querySelector('.openMenu');
    const menuItems = document.querySelectorAll('nav .mainMenu li a');

    openMenu?.addEventListener('click', this.show);
    closeMenu?.addEventListener('click', this.close);

    // Close menu when you click on a menu item
    menuItems.forEach(item => {
      item.addEventListener('click', () => {
        this.close();
      });
    });
  }

  show() {
    const mainMenu = document.querySelector('.mainMenu') as HTMLElement;
    mainMenu.style.display = 'flex';
    mainMenu.style.top = '0';
  }

  close() {
    const mainMenu = document.querySelector('.mainMenu') as HTMLElement;
    mainMenu.style.top = '-100%';
  }
}
