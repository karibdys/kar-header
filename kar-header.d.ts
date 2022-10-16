import { LitElement, PropertyValues } from 'lit';
export declare class KarHeader extends LitElement {
    seccion: number;
    items: string[];
    colorPrincipal: string;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private _cambiarSeccion;
    /**
     * Posiciona el marcador de la barra inferior en el lugar correcto
     * @param changedProperties
     */
    protected updated(changedProperties: PropertyValues<this>): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'kar-header': KarHeader;
    }
}
//# sourceMappingURL=kar-header.d.ts.map