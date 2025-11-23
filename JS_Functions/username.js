const userArrow = {
  name: "Yuvraj",
  showName: () => {
    console.log(this.name);
  }
};

userArrow.showName();

const userFixed = {
  name: "Yuvraj",
  showName: function () {
    console.log(this.name);
  }
};

userFixed.showName();
