import { LitElement, html, css } from 'lit';
import '../vaadin-imports.js';
import { Router } from '../router.js';

export class TopbarComponent extends LitElement {
    static properties = {
        user: { type: Object },
        isLoggedIn: { type: Boolean }
    };

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
        .user-section {
            display: flex;
            align-items: center;
            gap: 1rem;
        }
        .username {
            color: white;
            font-weight: 500;
        }
    `;

    constructor() {
        super();
        this.user = null;
        this.isLoggedIn = false;
        this.checkLoginStatus();

        // Listen for login/logout events
        window.addEventListener('auth-changed', () => this.checkLoginStatus());
    }

    checkLoginStatus() {
        const userStr = localStorage.getItem('user');
        if (userStr) {
            try {
                this.user = JSON.parse(userStr);
                this.isLoggedIn = true;
            } catch (e) {
                this.handleLogout();
            }
        }
    }

    handleLogout() {
        localStorage.removeItem('user');
        localStorage.removeItem('authToken');
        document.cookie = 'auth_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        this.user = null;
        this.isLoggedIn = false;
        Router.navigate('/login');
    }

    render() {
        return html`
            <div class="topbar">
                <div class="logo" @click=${() => Router.navigate('/')}>Craft Sphere</div>
                ${this.isLoggedIn ? html`
                    <div class="user-section">
                        <span class="username">Welcome, ${this.user.username}</span>
                        <vaadin-button theme="error" @click=${this.handleLogout}>
                            Logout
                        </vaadin-button>
                    </div>
                ` : html`
                    <vaadin-button 
                        theme="primary" 
                        @click=${() => Router.navigate('/login')}
                    >Sign In</vaadin-button>
                `}
            </div>
        `;
    }
}

customElements.define('topbar-component', TopbarComponent);
