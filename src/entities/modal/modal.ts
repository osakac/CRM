import type { Component } from "vue";
import type { IClient } from "../client/types";

export class Modal {
  id: string;
  isVisible: boolean;
  component: Component;
  clientData: IClient | null;

  constructor(id: string, component: Component) {
    this.id = id;
    this.isVisible = false;
    this.component = component;
    this.clientData = null;
  }

  openModal() {
    this.isVisible = true;
  }

  closeModal() {
    this.isVisible = false;
    this.clientData = null;
  }
}
