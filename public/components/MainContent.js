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
            <div style="margin-top: 48px;">  <!-- Add margin to clear fixed topbar -->
                ${this.currentPage === '/' ? html`<home-page></home-page>` 
                : this.currentPage === '/login' ? html`<login-page></login-page>`
                : html`<h1>404 Not Found</h1>`}
            </div>
        `;
    }
}

customElements.define('main-content', MainContent);
