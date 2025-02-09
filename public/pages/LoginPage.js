import { LitElement, html } from 'lit';
import '../vaadin-imports.js';
import { REGISTER_USER, GENERATE_CAPTCHA } from '../graphql/auth.js';
import { gqlRequest } from '../graphql/client.js';

export class LoginPage extends LitElement {
    static properties = {
        showLogin: { type: Boolean },
        emailError: { type: String },
        usernameError: { type: String },
        passwordError: { type: String },
        confirmPasswordError: { type: String },
        registrationError: { type: String },
        captchaId: { type: String },
        captchaImage: { type: String }
    };

    constructor() {
        super();
        this.showLogin = true;
        this.clearErrors();
    }

    async connectedCallback() {
        super.connectedCallback();
        // Add global callback for reCAPTCHA
        window.handleRecaptcha = (response) => this.handleRecaptcha(response);
    }

    disconnectedCallback() {
        super.disconnectedCallback();
        // Clean up global callback
        delete window.handleRecaptcha;
    }

    clearErrors() {
        this.emailError = '';
        this.usernameError = '';
        this.passwordError = '';
        this.confirmPasswordError = '';
    }

    createRenderRoot() {
        return this; // disable shadow DOM
    }

    validateEmail(email) {
        if (!email) return 'Email is required';
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email) ? '' : 'Invalid email address';
    }

    validateUsername(username) {
        if (!username) return 'Username is required';
        const usernameRegex = /^[a-zA-Z0-9]+$/;
        return usernameRegex.test(username) ? '' : 'Username can only contain letters and numbers';
    }

    validatePasswords(password, confirm) {
        if (!password) return 'Password is required';
        if (confirm !== undefined && password !== confirm) {
            return 'Passwords do not match';
        }
        return '';
    }

    validateField(field) {
        const value = field.value;
        
        switch(field.id) {
            case 'loginEmail':
            case 'registerEmail':
                this.emailError = this.validateEmail(value);
                break;
            case 'registerUsername':
                this.usernameError = this.validateUsername(value);
                break;
            case 'loginPassword':
                this.passwordError = this.validatePasswords(value);
                break;
            case 'registerPassword':
                const confirm = this.querySelector('#confirmPassword')?.value;
                this.passwordError = this.validatePasswords(value);
                if (confirm) {
                    this.confirmPasswordError = this.validatePasswords(value, confirm);
                }
                break;
            case 'confirmPassword':
                const password = this.querySelector('#registerPassword')?.value;
                if (password) {
                    this.confirmPasswordError = this.validatePasswords(password, value);
                }
                break;
        }
        this.requestUpdate();
    }

    async toggleForm() {
        this.showLogin = !this.showLogin;
        this.clearErrors();
        if (!this.showLogin) {
            await this.loadCaptcha();
        }
    }

    async loadCaptcha() {
        try {
            const result = await gqlRequest(GENERATE_CAPTCHA);
            this.captchaId = result.generateCaptcha.id;
            this.captchaImage = result.generateCaptcha.image;
        } catch (error) {
            console.error('Failed to load captcha:', error);
        }
    }

    handleLogin(e) {
        const email = this.querySelector('#loginEmail').value;
        const password = this.querySelector('#loginPassword').value;
        
        this.emailError = this.validateEmail(email);
        this.passwordError = this.validatePasswords(password);
        
        if (!this.emailError && !this.passwordError) {
            console.log('Login validation passed');
        }
    }

    async handleRegister(e) {
        const username = this.querySelector('#registerUsername').value;
        const email = this.querySelector('#registerEmail').value;
        const password = this.querySelector('#registerPassword').value;
        const confirm = this.querySelector('#confirmPassword').value;
        const captchaAnswer = this.querySelector('#captchaAnswer')?.value;
        
        // Validate fields first
        this.usernameError = this.validateUsername(username);
        this.emailError = this.validateEmail(email);
        this.passwordError = this.validatePasswords(password);
        this.confirmPasswordError = this.validatePasswords(password, confirm);

        // Validate captcha
        if (!captchaAnswer) {
            this.registrationError = 'Please complete the captcha';
            return;
        }
        
        if (!this.usernameError && !this.emailError && !this.passwordError && !this.confirmPasswordError) {
            try {
                const result = await gqlRequest(REGISTER_USER, {
                    username,
                    email,
                    password,
                    captchaId: this.captchaId,
                    captchaAnswer
                });

                if (result.register) {
                    localStorage.setItem('authToken', result.register.token);
                    this.clearForm();
                    window.location.href = '/';
                }
            } catch (error) {
                this.registrationError = error.message;
                if (error.message.includes('captcha')) {
                    await this.loadCaptcha();
                }
            }
        }
    }

    clearForm() {
        this.querySelector('#registerUsername').value = '';
        this.querySelector('#registerEmail').value = '';
        this.querySelector('#registerPassword').value = '';
        this.querySelector('#confirmPassword').value = '';
        this.clearErrors();
    }

    render() {
        return html`
            <div class="login-container">
                ${this.showLogin ? html`
                    <div id="loginForm">
                        <h2>Sign In</h2>
                        <div class="login-form">
                            <vaadin-text-field 
                                id="loginEmail"
                                label="Email" 
                                theme="medium"
                                @input=${e => this.validateField(e.target)}
                                @change=${e => this.validateField(e.target)}
                                .errorMessage=${this.emailError}
                                .invalid=${Boolean(this.emailError)}
                            ></vaadin-text-field>
                            <vaadin-password-field 
                                id="loginPassword"
                                label="Password" 
                                theme="medium"
                                @input=${e => this.validateField(e.target)}
                                @change=${e => this.validateField(e.target)}
                                .errorMessage=${this.passwordError}
                                .invalid=${Boolean(this.passwordError)}
                            ></vaadin-password-field>
                            <vaadin-button 
                                theme="primary" 
                                @click=${this.handleLogin}
                            >Sign In</vaadin-button>
                        </div>
                        <div class="toggle-message">
                            <span>Don't have an account?</span>
                            <vaadin-button theme="tertiary" @click=${this.toggleForm}>Register</vaadin-button>
                        </div>
                    </div>
                ` : html`
                    <div id="registerForm">
                        <h2>Register</h2>
                        ${this.registrationError ? html`
                            <div class="error-message">${this.registrationError}</div>
                        ` : ''}
                        <div class="login-form">
                            <vaadin-text-field 
                                id="registerUsername"
                                label="Username" 
                                theme="medium"
                                @input=${e => this.validateField(e.target)}
                                @change=${e => this.validateField(e.target)}
                                .errorMessage=${this.usernameError}
                                .invalid=${Boolean(this.usernameError)}
                            ></vaadin-text-field>
                            <vaadin-text-field 
                                id="registerEmail"
                                label="Email" 
                                theme="medium"
                                @input=${e => this.validateField(e.target)}
                                @change=${e => this.validateField(e.target)}
                                .errorMessage=${this.emailError}
                                .invalid=${Boolean(this.emailError)}
                            ></vaadin-text-field>
                            <vaadin-password-field 
                                id="registerPassword"
                                label="Password" 
                                theme="medium"
                                @input=${e => this.validateField(e.target)}
                                @change=${e => this.validateField(e.target)}
                                .errorMessage=${this.passwordError}
                                .invalid=${Boolean(this.passwordError)}
                            ></vaadin-password-field>
                            <vaadin-password-field 
                                id="confirmPassword"
                                label="Confirm Password" 
                                theme="medium"
                                @input=${e => this.validateField(e.target)}
                                @change=${e => this.validateField(e.target)}
                                .errorMessage=${this.confirmPasswordError}
                                .invalid=${Boolean(this.confirmPasswordError)}
                            ></vaadin-password-field>
                            ${this.captchaImage ? html`
                                <div class="captcha-container">
                                    <img src="${this.captchaImage}" alt="CAPTCHA">
                                    <div class="captcha-actions">
                                        <vaadin-text-field
                                            id="captchaAnswer"
                                            label="Enter the code above"
                                            theme="medium"
                                        ></vaadin-text-field>
                                        <vaadin-button 
                                            theme="tertiary small" 
                                            @click=${this.loadCaptcha}
                                        >New Code</vaadin-button>
                                    </div>
                                </div>
                            ` : ''}
                            <vaadin-button 
                                theme="primary" 
                                @click=${this.handleRegister}
                            >Register</vaadin-button>
                        </div>
                        <div class="toggle-message">
                            <span>Already have an account?</span>
                            <vaadin-button theme="tertiary" @click=${this.toggleForm}>Login</vaadin-button>
                        </div>
                    </div>
                `}
            </div>
        `;
    }
}

customElements.define('login-page', LoginPage);
