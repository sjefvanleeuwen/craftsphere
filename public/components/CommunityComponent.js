import { LitElement, html, css } from 'lit';
import '../vaadin-imports.js';

export class CommunityComponent extends LitElement {
    static styles = css`
        section {
            padding: 1rem;
        }
    `;

    createRenderRoot() {
        return this; // disable shadow DOM
    }

    render() {
        return html`
            <section>
                <h2>Welcome</h2>
                <p>Share your creative projects and connect with others.</p>
                <vaadin-text-field label="This is cooler"></vaadin-text-field>
                <vaadin-button theme="primary">Submit</vaadin-button>
            </section>
        `;
    }
}

customElements.define('community-component', CommunityComponent);
