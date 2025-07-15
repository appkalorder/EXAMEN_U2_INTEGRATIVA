import { LitElement, html, css } from "lit";
import { themes } from '../styles/theme.js';

export class CareerCard extends LitElement {

  static properties = {
    career: { type: Object }
  };

  static styles = css`
    .card {
      border-radius: 10px;
      padding: 1rem;
      border: 2px solid var(--border-color);
      background-color: var(--background);
      color: var(--text-color);
      max-width: 400px;
    }
    .header {
      background-color: var(--header-bg);
      color: var(--text-color);
      padding: 0.5rem;
      border-radius: 8px 8px 0 0;
      font-weight: bold;
    }
    img {
      max-width: 100%;
      border-radius: 8px;
    }
  `;

  constructor() {
    super();
    this.career = null;
  }

  updated() {
    const theme = themes['gris'];
    Object.entries(theme).forEach(([key, value]) => {
      this.style.setProperty(`--${key}`, value);
    });
  }

  render() {
    if (!this.career) return html`<div class="card">Selecciona una carrera</div>`;
    return html`
      <div class="card">
        <div class="header">${this.career.nombre}</div>
        <img src="${this.career.imagen}" alt="${this.career.nombre}" />
        <p><strong>Facultad:</strong> ${this.career.facultad}</p>
        <p>${this.career.descripcion}</p>
      </div>
    `;
  }

}

customElements.define("career-card", CareerCard);