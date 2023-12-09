class Donut {
    constructor() {
      this.count = 0;
      this.autoClickers = 0;
      this.autoClickersCost = 100;
      this.multiplier = 1;
      this.multiplierAmount = 0;
      this.multiplierCost = 10;
    }
    donutClick() {
      this.count += this.multiplier;
    }
    buyAutoClicker() {
      this.count = this.count - this.autoClickersCost;
      this.autoClickers += 1;
    }
    buyMultiplier() {
      this.count = this.count - this.multiplierCost;
      this.multiplier = this.multiplier += 1;
      this.multiplierAmount += 1;
    }
    showAutoClickerButton() {
      clickerButton.classList.add("clicker-button-on");
    }
    hideAutoClickerButton() {
      clickerButton.classList.remove("clicker-button-on");
    }
    showMultiplierButton() {
      multiplierButton.classList.add("multiplier-button-on");
    }
    hideMultiplierButton() {
      multiplierButton.classList.remove("multiplier-button-on");
    }
    updateAutoClicker() {
      const numberOfClicker = document.querySelector(".amount-of-clickers");
      const clickerCost = document.querySelector(".clicker-cost");
      numberOfClicker.innerText = this.autoClickers;
      this.autoClickersCost = this.autoClickersCost * 2;
      clickerCost.innerText = this.autoClickersCost;
    }
    updateDonutMultiplier() {
      const numberOfMultiplier = document.querySelector(".amount-of-multipliers");
      const multiplyCost = document.querySelector(".multiplier-cost");
      const multiplierAmountText = document.querySelector(".multiplier-amount");
      numberOfMultiplier.innerText = this.multiplierAmount;
      multiplierAmountText.innerText = this.multiplier;
      this.multiplierCost = this.multiplierCost * 2;
      multiplyCost.innerText = this.multiplierCost;
    }
    updateDonutCount() {
      const donutCount = document.querySelector(".amount-of-donuts");
      donutCount.innerText = this.count;
      if (this.count >= this.autoClickersCost) {
        this.showAutoClickerButton();
      }
      if (this.count < this.autoClickersCost) {
        this.hideAutoClickerButton();
      }
      if (this.count >= this.multiplierCost) {
        this.showMultiplierButton();
      }
      if (this.count < this.multiplierCost) {
        this.hideMultiplierButton();
      }
    }
  }
  