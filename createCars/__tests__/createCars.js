const { CarsController } = require('../src/controllers/CarsController');

const carsController = new CarsController();

describe('Create cars', () => {
  beforeAll(async () => {
    await carsController.login();
  });

  afterAll(async () => {
    const carsResponse = await carsController.getCars();
    const carIds = carsResponse.data.data.map((c) => c.id);
    for (const carId of carIds) {
      await carsController.deleteCar(carId);
    }
  });

  it('Create cars with all models and brands', async () => {
    const brandsResponse = await carsController.getCarsBrands();
    const modelsResponse = await carsController.getCarsModels();

    const brands = brandsResponse.data.data;
    const models = modelsResponse.data.data;

    for (const brand of brands) {
      const brandModels = models.filter(
        (model) => model.carBrandId === brand.id
      );
      for (const model of brandModels) {
        const mileage = Math.floor(Math.random() * 100000);

        const response = await carsController.createCar(
          brand.id,
          model.id,
          mileage
        );
        console.log(response.data);
        expect(response.status).toEqual(201);
        expect(response.data.data).toHaveProperty('carBrandId', brand.id);
        expect(response.data.data.carModelId).toEqual(model.id);
        expect(response.data.data.initialMileage).toEqual(mileage);
      }
    }

    const cars = await carsController.getCars().data;
    console.log(cars);
  });

  it('Create car without mileage', async () => {
    const response = await carsController.createCar(1, 10);
    console.log(response.data);
    expect(response.status).toEqual(400);
    expect(response.data.message).toEqual('Mileage is required');
  });

  it('Create car with Invalid car brand type', async () => {
    const response = await carsController.createCar('test', 10, 123);
    console.log(response.data);
    expect(response.status).toEqual(400);
    expect(response.data.message).toEqual('Invalid car brand type');
  });

  it('Create car without parameters', async () => {
    const response = await carsController.createCar();
    console.log(response.data);
    expect(response.status).toEqual(400);
    expect(response.data.message).toEqual('Car brand id is required');
  });
});
