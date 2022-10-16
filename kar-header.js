var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LitElement, html, css } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { map } from 'lit/directives/map.js';
let KarHeader = class KarHeader extends LitElement {
    constructor() {
        super(...arguments);
        this.seccion = 0;
        this.items = ['Home', 'Personajes', 'Historia'];
        this.colorPrincipal = "#1F618D";
    }
    render() {
        return html `
      <nav>
        <ul>
          ${map(this.items, (item) => html `<li id="marcador_${item.toLowerCase()}" @click=${() => this._cambiarSeccion(item)}> ${item} </li>`)}
        </ul>
        <div id="marcador">
            <div id="marcador_selec">
            </div>
        </div>
      </nav>
    `;
    }
    _cambiarSeccion(item) {
        const posicion = this.items.indexOf(item);
        this.seccion = posicion;
    }
    /**
     * Posiciona el marcador de la barra inferior en el lugar correcto
     * @param changedProperties
     */
    updated(changedProperties) {
        //sacamos el ancho del objeto que se ha seleccionado:    
        const elemMarcador = this.renderRoot.querySelector('#marcador_' + this.items[this.seccion].toLowerCase());
        const anchoMarcador = elemMarcador.clientWidth;
        const marginMarcador = elemMarcador.getBoundingClientRect().left;
        //asignamos el ancho y el margen al objeto marcador_selec
        const elem = this.renderRoot.querySelector('#marcador_selec');
        elem.style.width = anchoMarcador + "px";
        elem.style.marginLeft = marginMarcador + "px";
        elem.style.backgroundColor = this.colorPrincipal;
    }
};
KarHeader.styles = css `
    :root{
      --colorGris : #ADABAB;
    }
    :host {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;

      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      line-height: 24px;
    }

    ul{
      list-style: none;
      display: flex;
      gap: 2em;      
    }

    ul>li{
        cursor: pointer;
      }

    #marcador{
      border-top: 1px solid #DADADA;
      border-bottom: 1px solid #DADADA;
      height: 5px;
    }

    #marcador_selec{
      height: inherit;
      border-radius: 10px;   
    }
  `;
__decorate([
    state()
], KarHeader.prototype, "seccion", void 0);
__decorate([
    state()
], KarHeader.prototype, "items", void 0);
__decorate([
    property()
], KarHeader.prototype, "colorPrincipal", void 0);
KarHeader = __decorate([
    customElement('kar-header')
], KarHeader);
export { KarHeader };
//# sourceMappingURL=kar-header.js.map