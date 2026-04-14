import '@testing-library/jest-dom';

// Mock window.scrollTo
window.scrollTo = vi.fn();

// Mock HTMLElement.prototype.scrollTo
HTMLElement.prototype.scrollTo = vi.fn();
