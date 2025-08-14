
// global.d.ts
export {};

declare global {
  interface Window {
    toggleModal: (modalId: string) => void;
  }
}