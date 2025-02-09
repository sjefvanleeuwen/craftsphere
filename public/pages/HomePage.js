import { LitElement, html, css } from 'lit';
import '../vaadin-imports.js';
import '../components/CommunityComponent.js';

export class HomePage extends LitElement {
    createRenderRoot() {
        return this;
    }

    render() {
        return html`
            <div class="home-page">
                <community-component></community-component>
            </div>
        `;
    }
}

customElements.define('home-page', HomePage);
