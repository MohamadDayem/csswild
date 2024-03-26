class NavComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `Hello world !`
    }

}

export {NavComponent}