customElements.define(
  "playing-card",
  class extends HTMLElement {
    constructor() {
      self = super();
      self.card = self.getAttribute("card");

      const template = document.createElement("template");
      template.innerHTML = `<div>
      ${self.card}
      </div>`;
      const templateContent = template.content;
      self
        .attachShadow({ mode: "open" })
        .appendChild(templateContent.cloneNode(true));
    }

    // connectedCallback() {

    // }
  }
);
