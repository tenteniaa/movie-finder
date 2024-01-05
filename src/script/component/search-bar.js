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
          width: 50%;
          border-radius: 5px;
          margin-top: 40px;
          padding: 0 25px;
        }

        @media (max-width: 992px) {
          .search-container {
            width: 90%;
          }
        }
        
        .search-container > input {
          width: 78%;
          padding: 13px;
          border-radius: 10px;
          font-size: 15px;
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
          padding: 16px;
          background-color: #85586F;
          color: white;
          border: none;
          border-radius: 10px;
          text-transform: uppercase;
        }
        .search-container > button:hover {
          background: #AC7088;
        }
        
        @media screen and (max-width: 578px) {
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
        }
      </style>
      
      <div id="search-container" class="search-container">
          <input placeholder="search by Title" id="searchElement" type="search">
          <button id="searchButtonElement" type="submit" >Search</button>
      </div>
      `;

      const searchInputElement = this.shadowDOM.querySelector('#searchElement');
      const searchButtonElement = this.shadowDOM.querySelector('#searchButtonElement');

      searchButtonElement.addEventListener('click', this._clickEvent);
      searchInputElement.addEventListener('keydown', this._enterKeyPressEvent.bind(this));
  }
  _enterKeyPressEvent(event) {
    if (event.key === 'Enter') {
        if (this._clickEvent) {
            this._clickEvent();
        }
    }
  }
}

customElements.define('search-bar', SearchBar);