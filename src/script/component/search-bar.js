class SearchBar extends HTMLElement {
    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: 'open'});
    }

    connectedCallback() {
        this.render();
    }

    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchElement').value;
    }
  
    render() {
        this.shadowDOM.innerHTML = `
        <style>
        .search-container {
            max-width: 100%;
            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
            padding: 16px;
            border-radius: 5px;
            display: flex;
            position: sticky;
            top: 10px;
            background-color: white;
          }
          
        .search-container > input {
            width: 78%;
            padding: 16px;
            border: 1;
            border-radius: 10px ;
            font-weight: bold;
          }
          
        .search-container > input:focus {
            outline: 0;
          }
          
        .search-container > input:focus::placeholder {
            font-weight: bold;
          }
          
        .search-container > input::placeholder {
            color: #826F66;
            font-weight: normal;
          }
          
        .search-container > button {
            width: 20%;
            cursor: pointer;
            margin-left: auto;
            padding: 16px;
            background-color: #85586F;
            color: white;
            border: 0;
            border-radius: 10px;
            text-transform: uppercase;
        }
          
        @media screen and (max-width: 550px) {
            .search-container {
              flex-direction: column;
              position: static;
            }
          
            .search-container > input {
              width: 100%;
              margin-bottom: 12px;
            }
          
            .search-container > button {
              width: 100%;
            }

            .icon {
              float: right;
            }
        }
        </style>
        
        <div id="search-container" class="search-container">
            <input placeholder="search by Title" id="searchElement" type="search">
            <button id="searchButtonElement" type="submit" >Search</button>
        </div>
        `;

        this.shadowDOM.querySelector('#searchButtonElement').addEventListener('click', this._clickEvent);
    }
}

customElements.define('search-bar', SearchBar);