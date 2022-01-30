customElements.define(
  "playing-card",
  class extends HTMLElement {
    constructor() {
      self = super();
      this.card = this.getAttribute("card");
      this.width = this.getAttribute("width") || 100;
      this.height = this.getAttribute("height") || 140;
      this.wrapStyle = this.getAttribute("wrapStyle") || false;
      this.frontStyle = this.getAttribute("frontStyle") || false;
      this.backStyle = this.getAttribute("backStyle") || false;
      this.imageStyle = this.getAttribute("imageStyle") || false;
      this.flipped = this.getAttribute("flipped") || false;
      this.transition = this.getAttribute("transition") || 0.8;

      const template = document.createElement("template");

      const templateContent = template.content;
      self
        .attachShadow({ mode: "open" })
        .appendChild(templateContent.cloneNode(true));
    }

    connectedCallback() {
      const shadow = this.shadowRoot;
      const card = this.card;
      const width = this.width;
      const height = this.height;
      const imageStyle = this.imageStyle;
      const wrapperStyle = this.wrapperStyle;
      const frontStyle = this.frontStyle;
      const backStyle = this.backStyle;
      const transition = this.transition;

      const cardWrapper = document.createElement("div");
      if (wrapperStyle) {
        cardWrapper.style = wrapperStyle;
      }
      cardWrapper.className = "cardWrapper";
      cardWrapper.style.width = `${width}px`;
      cardWrapper.style.height = `${height}px`;
      cardWrapper.style.perspective = `1000px`;
      cardWrapper.style.transition = `transform ${transition}s`;

      cardWrapper.addEventListener("click", () => {
        this.flip();
      });

      const cardInner = document.createElement("div");
      cardInner.className = "cardInner";

      cardInner.style.transformStyle = `preserve-3d`;
      cardInner.style.transition = `transform ${transition}s`;
      cardInner.style.width = `100%`;
      cardInner.style.height = `100%`;

      const cardFront = document.createElement("div");
      cardFront.className = "cardFront";
      if (frontStyle) {
        cardFront.style = frontStyle;
      }
      cardFront.style.position = `absolute`;
      cardFront.style.backfaceVisibility = "hidden";
      cardFront.style.width = `100%`;
      cardFront.style.height = `100%`;

      const cardImage = document.createElement("img");
      cardImage.className = "cardImage";
      cardImage.src = `https://raw.githubusercontent.com/BiscuitNick/playing-card/master/deck/${card}.png`;
      cardImage.alt = card;
      if (imageStyle) {
        cardImage.style = imageStyle;
      }
      cardImage.style.width = `100%`;
      cardImage.style.height = `100%`;

      const cardBack = document.createElement("div");
      cardBack.style.background = "black";
      if (backStyle) {
        cardBack.style = backStyle;
      }
      cardBack.style.position = `absolute`;
      cardBack.style.width = `100%`;
      cardBack.style.height = `100%`;
      cardBack.style.transform = `rotateY(180deg)`;
      cardBack.style.backfaceVisibility = "hidden";

      this.cardWrapper = cardWrapper;
      this.cardInner = cardInner;
      this.cardFront = cardFront;
      this.cardImage = cardImage;
      this.cardBack = cardBack;

      cardWrapper.appendChild(cardInner);
      cardInner.appendChild(cardFront);
      cardInner.appendChild(cardBack);
      cardFront.appendChild(cardImage);
      shadow.appendChild(cardWrapper);
    }

    flip() {
      const flipped = !this.flipped;
      const cardWrapper = this.cardWrapper;
      const cardInner = this.cardInner;

      this.flipped = flipped;
      cardWrapper.style.transform = flipped ? `rotateY(-180deg)` : null;
      cardInner.style.transform = flipped ? `rotateY(-180deg)` : null;
    }
  }
);
