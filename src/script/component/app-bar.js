class AppBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }
 
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            nav {
                display: flex;
                width: 100%;
                height: 100px;
                background: #AC7088;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            nav h2 {
                font-size: 30px;
                color: white;
                padding: 0 25px;
            }
        </style>

        
        <nav>
            <h2>Moviegoers</h2>
        </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);