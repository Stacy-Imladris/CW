function changeMe(moneyIn){
    let one = "20p 20p 20p 20p 20p";
    if (moneyIn === "£5"){
      return one + " " + one + " " + one + " " + one + " " + one;
    }
    else if (moneyIn === "£2"){
      return one + " " + one;
    }
    else if (moneyIn === "£1"){
      return one;
    }
    else if (moneyIn === "50p"){
      return "20p 20p 10p";
    }
    else if (moneyIn === "20p"){
      return "10p 10p";
    }
    else return moneyIn;
  }