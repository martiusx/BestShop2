const Price = {
  productCost: 0.5,
  priceBasic: 30,
  priceProffesional: 60,
  pricePremium: 80,
  priceAccounting: 35,
  priceTerminal: 5,
  priceTotal: 5,
};

const form = document.querySelector(".calc__form");
const calcSummary = document.querySelector(".calc__summary");

form.addEventListener("change", () => {
  const FinallyPrice = {
    productsCost: function () {
      let productsAmount = Number(document.querySelector("#products").value);
      let productsAmountWritting = calcSummary.querySelector(
        "label[for=products] span.calc__selected"
      );

      let productsPrice;
      let productsPriceWritting = calcSummary.querySelector(
        "label[for=products] span.calc__price"
      );

      if (productsAmount > 0) {
        productsPrice = Price.productCost * productsAmount;
        productsAmountWritting.innerHTML =
          productsAmount + " * " + "$" + Price.productCost;
        productsPriceWritting.innerHTML = "$" + productsPrice;
        document.querySelector("label[for=products]").style.opacity = 1;
        return productsPrice;
      } else if (productsAmount <= 0) {
        productsPrice = 0;
        document.querySelector("label[for=products]").style.opacity = 0;

        return productsPrice;
      }
    },
    monthOrders: function () {
      let monthOrdersSize = Number(document.querySelector("#orders").value);
      let monthOrdersWritting = calcSummary.querySelector(
        "label[for=orders] span.calc__selected"
      );
      let orderPrice;
      let orderPriceWritting = calcSummary.querySelector(
        "label[for=orders] span.calc__price"
      );
      if (monthOrdersSize > 0) {
        orderPrice = (Price.productCost / 2) * monthOrdersSize;
        monthOrdersWritting.innerHTML =
          monthOrdersSize + " * " + "$" + Price.productCost / 2;
        orderPriceWritting.innerHTML = "$" + orderPrice;
        document.querySelector("label[for=orders]").style.opacity = 1;

        return orderPrice;
      }
      if (monthOrdersSize <= 0) {
        orderPrice = 0;
        document.querySelector("label[for=orders]").style.opacity = 0;
        return orderPrice;
      }
    },
    selectedpackage: function () {
      let packagePrice;
      let package = document.querySelector("#package");
      let packageTypePrice = calcSummary.querySelector(
        "label[for=package] span.calc__price"
      );
      let packageType = calcSummary.querySelector(
        "label[for=package] span.calc__selected"
      );

      if (package.selectedIndex === 0) {
        packagePrice = 0;
        packageTypePrice.innerHTML = "";
        packageType.innerHTML = "";
        document.querySelector("label[for=package]").style.opacity = 0;
      }
      if (package.selectedIndex === 1) {
        packagePrice = Price.priceBasic;
        packageTypePrice.innerHTML = "$" + packagePrice;
        packageType.innerHTML = "Basic";
        document.querySelector("label[for=package]").style.opacity = 1;
      }
      if (package.selectedIndex === 2) {
        packagePrice = Price.priceProffesional;
        packageTypePrice.innerHTML = "$" + packagePrice;
        document.querySelector("label[for=package]").style.opacity = 1;
        packageType.innerHTML = "Proffesional";
      }
      if (package.selectedIndex === 3) {
        packagePrice = Price.pricePremium;
        packageTypePrice.innerHTML = "$" + packagePrice;
        document.querySelector("label[for=package]").style.opacity = 1;
        packageType.innerHTML = "Premium";
      }

      return packagePrice;
    },
    selectedAccounting: function () {
      let accounting = document.querySelector(".accounting");

      let accountingPrice = calcSummary.querySelector(
        "label[for=accounting] span.calc__price"
      );
      if (accounting.checked === true) {
        accountingPrice.innerHTML = "$" + Price.priceAccounting;
        document.querySelector("label[for=accounting]").style.opacity = 1;

        return Price.priceAccounting;
      } else if (accounting.checked === false) {
        accountingPrice.innerHTML = "";
        document.querySelector("label[for=accounting]").style.opacity = 0;

        return 0;
      }
    },
    selectedTerminal: function () {
      let terminal = document.querySelector(".terminal");

      let terminalPrice = calcSummary.querySelector(
        "label[for=terminal] span.calc__price"
      );
      if (terminal.checked === true) {
        terminalPrice.innerHTML = "$" + Price.priceTerminal;
        document.querySelector("label[for=terminal]").style.opacity = 1;

        return Price.priceTerminal;
      } else if (terminal.checked === false) {
        document.querySelector("label[for=terminal]").style.opacity = 0;

        terminalPrice.innerHTML = "";

        return 0;
      }
    },
    totalPrice: function () {
      let total = document.querySelector(".total span");

      let price =
        this.productsCost() +
        this.monthOrders() +
        this.selectedpackage() +
        this.selectedAccounting() +
        this.selectedTerminal();
      total.innerHTML = "$" + price;
    },
  };
  FinallyPrice.totalPrice();
});
