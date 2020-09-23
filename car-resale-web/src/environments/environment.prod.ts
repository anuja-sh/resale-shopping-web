const server = "http://localhost:8080";
export const environment = {
  production: true,

  urls: {
    getAllCars: `${server}/resale-cars/cars?order=asc&property=date_added`,
    getWareHouseDetails:`${server}/resale-cars/wareHouse`,
  }
};