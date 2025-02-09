export class Router {
    static init() {
        this.loadPage();
        window.addEventListener('popstate', () => this.loadPage());
    }

    static navigate(path) {
        window.history.pushState({}, '', path);
        this.loadPage();
    }

    static loadPage() {
        const path = window.location.pathname;
        const mainContent = document.querySelector('main-content');
        
        // Dispatch a custom event that MainContent will handle
        mainContent.dispatchEvent(new CustomEvent('page-change', {
            detail: { path }
        }));
    }
}
