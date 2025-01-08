import type { Component } from "vue";

interface ModalProps {
  isVisible: boolean;
}

export class Modal {
  id: string;
  isVisible: boolean;
  component: Component;
  // props: ModalProps;

  constructor(id: string, component: Component) {
    this.id = id;
    this.isVisible = false;
    this.component = component;
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
  }
}
