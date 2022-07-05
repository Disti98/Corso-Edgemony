const newEl = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, price, rate, count) => {
  const elWrapper = newEl("div");
  const elTitle = newEl("h6");
  const elPrice = newEl("p");
  const elImg = newEl("img");
  const elRate = newEl("span");
  const elCount = newEl("span");

  elWrapper.className = "wrapper";
  elTitle.className = "title";
  elPrice.className = "price";
  elImg.className = "img";
  elRate.className = "rate";
  elCount.classname = "count";

  elImg.setAttribute("alt", title);
  elImg.setAttribute("src", imgLink);

  elTitle.textContent = title;
  elPrice.textContent = `${price}$`;
  elRate.textContent = `Rate: ${rate}`;
  elCount.textContent = `${count} pz`;

  elWrapper.append(elImg, elTitle, elPrice, elRate, elCount);

  parent.appendChild(elWrapper);
};

export { newEl, createCard, q };
