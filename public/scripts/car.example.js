class Car{
  static list = [];

  static init(cars) {
    this.list = cars.map((i) => new this(i));
  }

  constructor({
    id,
    plate,
    manufacture,
    model,
    image,
    rentPerDay,
    capacity,
    description,
    transmission,
    available,
    type,
    year,
    options,
    specs,
    availableAt,
  }) {
    this.id = id;
    this.plate = plate;
    this.manufacture = manufacture;
    this.model = model;
    this.image = image;
    this.rentPerDay = rentPerDay;
    this.capacity = capacity;
    this.description = description;
    this.transmission = transmission;
    this.available = available;
    this.type = type;
    this.year = year;
    this.options = options;
    this.specs = specs;
    this.availableAt = availableAt;
  }

  render() {
    return `
    <section class="wrapper">
      <div class="rowCar">
        <div class="columnCar">
          <img src="${this.image}" alt="${this.manufacture}" class="car-img">
          <div class="carDesc">
            <p>Nama dan Tipe: ${this.model}</p>
            <h2>Rp. ${this.rentPerDay}/day</h2>
            <p id="carInfo">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <p><i class="fa-solid fa-user-group"></i> ${this.capacity} orang</p>
            <p><i class="fa-solid fa-gear"></i> ${this.transmission}</p>
            <p><i class="fa-solid fa-calendar-days"></i> Tahun ${this.year}</p>
            <button class="pilihMobil">Pilih Mobil</button>
          </div>
        </div>
      </div>
    </section>

            

        
    `;
  }
}