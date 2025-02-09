class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Craft Sphere</h1>
            </header>
        `;
    }
}

class CommunityComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <section>
                <h2>Welcome to the Craft Sphere Community</h2>
                <p>Share your creative projects and connect with others.</p>
            </section>
        `;
    }
}

customElements.define('header-component', HeaderComponent);
customElements.define('community-component', CommunityComponent);
