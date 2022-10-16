/* eslint-disable @typescript-eslint/no-explicit-any */
import {LitElement, html, css, PropertyValueMap, PropertyValues} from 'lit';
import {customElement, property, state } from 'lit/decorators.js';
import {map} from 'lit/directives/map.js';

@customElement('kar-header')
export class KarHeader extends LitElement {

  @state()
  seccion = 0;

  @state()
  items = ['Home', 'Personajes', 'Historia'];

  @property()
  colorPrincipal ="#1F618D";

  static override styles = css`
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

  override render() {    
    return html`
      <nav>
        <ul>
          ${map(
            this.items, 
            (item)=> html`<li id="marcador_${item.toLowerCase()}" @click=${() => this._cambiarSeccion(item)}> ${item} </li>`
          )}
        </ul>
        <div id="marcador">
            <div id="marcador_selec">
            </div>
        </div>
      </nav>
    `;
  }


  private _cambiarSeccion(item: string){   
    const posicion = this.items.indexOf(item);
    this.seccion = posicion;
  }

  /**
   * Posiciona el marcador de la barra inferior en el lugar correcto
   * @param changedProperties 
   */
  protected override updated(changedProperties: PropertyValues<this>): void {
    //sacamos el ancho del objeto que se ha seleccionado:    
    const elemMarcador = this.renderRoot.querySelector('#marcador_'+this.items[this.seccion].toLowerCase()) as HTMLElement;
    const anchoMarcador = elemMarcador.clientWidth;
    const marginMarcador = elemMarcador.getBoundingClientRect().left;

    //asignamos el ancho y el margen al objeto marcador_selec
    const elem = this.renderRoot.querySelector('#marcador_selec') as HTMLElement;
    elem.style.width = anchoMarcador+"px";
    elem.style.marginLeft = marginMarcador+"px";
    elem.style.backgroundColor = this.colorPrincipal;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'kar-header': KarHeader;
  }
}
