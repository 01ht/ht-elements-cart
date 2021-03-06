"use strict";
import { LitElement, html, css } from "lit-element";
import "@polymer/paper-button";
import "@polymer/iron-iconset-svg";
import "@polymer/iron-icon";

import { styles } from "@01ht/ht-theme/styles";

class HTElementsCartEmpty extends LitElement {
  static get styles() {
    return [
      styles,
      css`
        :host {
          display: flex;
          position: relative;
          box-sizing: border-box;
        }

        a,
        a:hover {
          color: inherit;
          text-decoration: none;
        }

        iron-icon {
          width: 15vw;
          height: 15vw;
          max-width: 164px;
          max-height: 164px;
          min-width: 128px;
          min-height: 128px;
          color: #ddd;
        }

        #container {
          display: flex;
          align-items: center;
          flex-direction: column;
          margin-top: 32px;
        }

        #text {
          margin-top: 16px;
        }

        #sub {
          text-align: center;
          margin: 8px 0 16px 0;
          font-size: 16px;
          color: var(--secondary-text-color);
        }
      `
    ];
  }

  render() {
    return html`
    <iron-iconset-svg size="24" name="ht-elements-cart-empty">
        <svg>
            <defs>
                <g id="shopping-cart">
                    <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
                </g>
            </defs>
        </svg>
    </iron-iconset-svg>
    <div id="container">
        <iron-icon icon="ht-elements-cart-empty:shopping-cart"></iron-icon>
        <div id="text" class="mdc-typography--headline5">Ваша корзина пуста</div>
        <div id="sub-text">
          <!--<p>Прежде чем приступить к оформлению заказа, вы должны добавить некоторые товары в корзину.</p>-->
          <div id="sub">Выберите себе элементы в нашем каталоге</div>
        </div>
        <a href="/catalog">
        <paper-button raised>Каталог</paper-button>
        </a>

    </div>
`;
  }
}

customElements.define("ht-elements-cart-empty", HTElementsCartEmpty);
