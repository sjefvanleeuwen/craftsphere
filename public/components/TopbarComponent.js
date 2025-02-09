import { LitElement, html, css } from 'lit';
import '../vaadin-imports.js';
import { Router } from '../router.js';

export class TopbarComponent extends LitElement {
    static styles = css`
        .topbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100vw;
            height: 48px;
            padding: 0 1rem;
            background-color: #333;
            color: white;
            position: fixed;
            top: 0;
            left: 0;
            z-index: 1000;
        }
        .logo {
            font-size: 1.5rem;
            cursor: pointer;
        }
        .sign-in-button {
            margin-left: auto;
        }
    `;

    render() {
        return html`
            <div class="topbar">
                <div class="logo" @click=${() => Router.navigate('/')}>Craft Sphere</div>
                <vaadin-button 
                    theme="primary" 
                    class="sign-in-button" 
                    @click=${() => Router.navigate('/login')}
                >
                    Sign In
                </vaadin-button>
            </div>
        `;
    }
}

customElements.define('topbar-component', TopbarComponent);
