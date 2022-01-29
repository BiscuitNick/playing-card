customElements.define(
  "playing-card",
  class extends HTMLElement {
    constructor() {
      self = super();
      self.card = self.getAttribute("card");
      self.width = self.getAttribute("width") || 100;
      self.height = self.getAttribute("height") || 140;
      self.wrapStyle = self.getAttribute("wrapStyle") || false;

      const template = document.createElement("template");

      const templateContent = template.content;
      self
        .attachShadow({ mode: "open" })
        .appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {
      const shadow = this.shadowRoot;

      const div = document.createElement("div");
      div.className = "card-div-wrapper";
      if (self.wrapStyle) {
        console.log("adding style", self.wrapStyle);
        div.style = self.wrapStyle;
      }
      div.style.width = `${self.width}px`;
      div.style.height = `${self.height}px`;

      const img = document.createElement("img");
      img.src = `https://raw.githubusercontent.com/BiscuitNick/playing-card/master/deck/${self.card}.png`;
      img.alt = self.card;
      img.style.width = `100%`;
      img.style.height = `100%`;
      img.className = "card-image";

      div.appendChild(img);
      shadow.appendChild(div);
    }
  }
);
