import { getCoordinates } from "@/utils/getCoordinates"



export class AdaptiveMenu {
    menu: HTMLDivElement
    subMenu: HTMLDivElement|null
    linkList: NodeListOf<HTMLAnchorElement>
    subMenuBtn: HTMLButtonElement|null
    subMenuList: HTMLButtonElement|null
    constructor(menu: HTMLDivElement) {
        this.menu = menu;
        this.linkList = this.menu.querySelectorAll('a');
        this.subMenu = document.querySelector('.sub-menu');
        this.subMenuList = document.querySelector('.sub-menu-list');
        this.subMenuBtn = document.querySelector('.sub-menu-open');
        this.setWidthLink()
        this.resize()
        
    }   


    setWidthLink() {
        const parent = document.querySelector('header .container') as HTMLElement;
        this.linkList.forEach((link, index) => {
            const pos = getCoordinates(link, parent);
            const breakpoint = pos.left + link.clientWidth + 5;

            link.setAttribute('data-width', `${breakpoint <= 500 ? 500 : breakpoint}`);
            link.style.order = String(index)
        })
    }

    handleResize(link:HTMLAnchorElement ) {
        const width = document.querySelector('header .container')!.clientWidth - 40;
        
        if(!this.subMenuList) return;
        if (width <= Number(link.dataset.width)) {
          this.subMenuList.appendChild(link);
        } else {
          this.menu.appendChild(link);
        }
    }

    eachLinksResize() {
        setTimeout(() => {
            this.linkList.forEach(link => {
                this.handleResize(link)
            })
            if(!this.subMenuBtn || !this.subMenu) return;
            if(this.subMenuList?.children.length === 0) {
                this.subMenuBtn.style.display = 'none';
                this.subMenu.style.display = 'none';
            } else {
                this.subMenuBtn.setAttribute('style', 'display:block; opacity: 1') 
                this.subMenu.style.display = 'block';

            }   
        }, 100)
    }

    resize() {
        this.eachLinksResize()
        window.addEventListener('resize', () => this.eachLinksResize());
    }
    destroy() {
        window.removeEventListener('resize', () => this.eachLinksResize());
    }
}
