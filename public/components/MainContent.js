import { LitElement, html } from 'lit';
import '../pages/HomePage.js';
import '../pages/LoginPage.js';

export class MainContent extends LitElement {
    constructor() {
        super();
        this.currentPage = '/';
        this.addEventListener('page-change', (e) => {
            this.currentPage = e.detail.path;
            this.requestUpdate();
        });
    }

    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <home-page style="display: ${this.currentPage === '/' ? 'block' : 'none'}"></home-page>
            <login-page style="display: ${this.currentPage === '/login' ? 'block' : 'none'}"></login-page>
        `;
    }
}

customElements.define('main-content', MainContent);
