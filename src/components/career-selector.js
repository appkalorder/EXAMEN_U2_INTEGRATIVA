import { LitElement, html, css } from 'lit';

export class CareerSelector extends LitElement {
  static styles = css`
    ul {
      list-style: none;
      padding: 0;
      display: flex;
      justify-content: center;
      gap: 20px;
      width: 100%;
    }
    li {
      cursor: pointer;
      margin: 0.5rem 0;
      padding: 0.5rem;
      background: #e0e0e0;
      border-radius: 5px;
      transition: 0.3s;
    }
    li:hover {
      background: #c0c0c0;
    }
  `;

  static properties = {
    careers: { type: Array }
  };

  constructor() {
    super();
    this.careers = [];
  }

  async connectedCallback() {
    super.connectedCallback();
    try {
      // Obtiene ruta absoluta del JSON relativo al módulo
      const jsonUrl = new URL('../data/careers.json', import.meta.url);
      const response = await fetch(jsonUrl);

      if (response.ok) {
        this.careers = await response.json();
      } else {
        console.error('No se pudo cargar careers.json');
      }
    } catch (e) {
      console.error('Error al cargar careers.json', e);
    }
  }

  selectCareer(career) {
    this.dispatchEvent(new CustomEvent('career-selected', {
      detail: career,
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <ul>
        ${this.careers.map(c => html`
          <li @click="${() => this.selectCareer(c)}">${c.nombre}</li>
        `)}
      </ul>
    `;
  }
}

customElements.define('career-selector', CareerSelector);