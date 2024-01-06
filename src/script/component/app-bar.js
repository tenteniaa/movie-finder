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
                height: 90px;
                background: #AC7088;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            nav h2 {
                font-size: 30px;
                color: white;
            }
            @media (max-width: 578px) {
                nav h2 {
                    text-align: center;
                }
              }

            .container {
                width: 100%;
                margin-right: auto;
                margin-left: auto;
                padding-right: 30px;
                padding-left: 30px;
            }
        </style>

        
        <nav>
            <div class="container">
                <h2>Moviegoers</h2>
            </div>
        </nav>
        `;
    }
}

customElements.define('app-bar', AppBar);