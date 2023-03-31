class App {
  constructor() {
    this.clearButton = document.getElementById("searchBtn");
    this.loadButton = document.getElementById("searchBtn");
    this.carContainerElement = document.getElementById("cars-container");
    this.inputDate = document.getElementById("inputDate");
    this.inputTime = document.getElementById("inputTime");
    this.inputCapacity = document.getElementById("inputCapacity");
    this.cariMobil = document.getElementById("searchBtn");
  }

  async init() {
    await this.load();

    // Register click listener
    this.clearButton.onclick = this.clear;
    this.loadButton.onclick = this.run;
    this.cariMobil.onclick = this.search;
  }

  search = async  () =>{
    this.clear();
    const dateValue = this.inputDate.value;
    const timeValue = this.inputTime.value;
    const capacityValue = this.inputCapacity.value;

    console.log(dateValue,timeValue,capacityValue);

    const datetime = new Date(`${dateValue} ${timeValue}`);
    
    const filterer = (car) => {
      const dateFilter = car.availableAt > datetime;
      const capacityFilter = car.capacity > capacityValue; 
 
      return dateFilter && capacityFilter;
     }
    const cars = await Binar.listCars(filterer);
    Car.init(cars);

    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  }

  run = () => {
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
    if( dateValue === '' ||  timeValue === '' || capacityValue === ''){ 
      document.getElementById("errorMsg").innerHTML = "Lengkapi isi form!";  
      document.getElementById("errorMsg").style.display = "block";
    } else{
      this.load(epochTime, capacityValue);
    document.getElementById("errorMsg").style.display = "none";
    }
  };

  async load() {
    const cars = await Binar.listCars();
    Car.init(cars);
  }

  clear = () => {
    let child = this.carContainerElement.firstElementChild;

    while (child) {
      child.remove();
      child = this.carContainerElement.firstElementChild;
    }
  };
}