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
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
                line-height: 70px;
            }
            :host {
                display: block;
                width: 100%;
                background-color: #AC7088;
                font-size: 30px;
                color: white;
                box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            }
            h2 {
                padding: 16px;
            }

            nav {
                float: right;
                font-size: 15px;
                opacity: 0.7;
            } 
            nav ul {
                list-style: none;
            }
            nav ul li {
                float: left;
            }
            nav ul li a {
                color: white;
                font-weight: bold;
                text-align: center;
                padding: 0px 16px 0px 16px;
                text-decoration: none;
            }
            nav ul li a:hover {
                text-decoration: underline;
            }
        </style>

        <h2>Moviegoers
            <nav>
                <ul>
                <li><a href=#>Genre</a></li>
                <li><a href=#>Populer</a></li>
                <li><a href=#>Top Rated</a></li>
                </ul>
            </nav>
        </h2>
        
        `;
    }
}

customElements.define('app-bar', AppBar);