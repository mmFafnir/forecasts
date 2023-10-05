

export class Animate {
    animate: any
    element: HTMLDivElement
    width: number
    constructor(div: HTMLDivElement) {
        this.element = div;
        this.width = this.element.offsetWidth + this.element.children[0].clientWidth;
        this.addCopies();
        this.startAnim();    
        this.mouseEvents();
    }


    addCopies() {
        const children = this.element.children;
        Array.from(children).forEach(elem => {
            const copy = elem.cloneNode(true) as HTMLDivElement;
            copy.classList.add('copy');
            this.element.insertAdjacentElement('beforeend', copy)
        })

    }

    startAnim() {
        this.animate = this.element.animate(
            [
                { transform: "translateX(0px)" },
                { transform: `translateX(-${this.width-20}px)` },
            ],
            {
                duration: 20000,
                iterations: Infinity,
                playbackRate: 0.8
            },
        );
    }

    mouseEvents() {
        if(!this.element.parentElement) return;
        this.element.parentElement.addEventListener('mouseout', () => this.animate.playbackRate = 0.2);
        this.element.parentElement.addEventListener('mouseleave', () => this.animate.playbackRate = 0.8);
    }
} 