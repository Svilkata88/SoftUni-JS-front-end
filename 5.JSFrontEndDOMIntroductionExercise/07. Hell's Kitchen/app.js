function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      const textElement = document.querySelector('#inputs textarea');
      let restaurants = JSON.parse(textElement.value);
      const bestRestaurantElement = document.querySelector('#bestRestaurant p');
      const workersElement = document.querySelector('#workers p');
      
      // creating array of restaurants objects
      restaurants = restaurants
      .map( restaurant => {
         const obj = {};
         const [name, employees] = restaurant.split(' - ');
         const currentWorkers = employees.split(', ').map(el => (el.split(' ')));
         obj['name'] = name;
         obj['employees'] = currentWorkers.map(worker => {
               const workerObj = {};
               workerObj['worker'] = worker[0], 
               workerObj['salary'] = Number(worker[1]) 
               return workerObj
            });
         obj['bestSalary'] = undefined;
         obj['averageSalary'] = 0;
         return obj;
      })
      .reduce((result, currentRestaurant) => {
         searchRestaurant = result.find(el => el.name === currentRestaurant.name);
         if (!searchRestaurant) {
            result.push(currentRestaurant);
         } else {
            currentRestaurant.employees.forEach(el => {
               searchRestaurant.employees.push(el)
            })
         }
         return result
      } ,[])

      for (let restaurant of restaurants) {
         restaurant.bestSalary = updateBestPrice(restaurant.employees);
         restaurant.averageSalary = updateAverageSalary(restaurant.employees);
      }

      const bestAverageSalaryRestaurant = restaurants
         .reduce((best, restaurant) => best.averageSalary >= restaurant.averageSalary ? best : restaurant, restaurants[0])
      
      bestRestaurantElement.textContent = `Name: ${bestAverageSalaryRestaurant.name} Average Salary: ${bestAverageSalaryRestaurant.averageSalary.toFixed(2)} Best Salary: ${bestAverageSalaryRestaurant.bestSalary.salary.toFixed(2)}`

      workersElement.textContent = bestAverageSalaryRestaurant.employees
         .sort((workerA, workerB) => workerB.salary - workerA.salary)
         .reduce((resultString, employee) => resultString + `Name: ${employee.worker} With Salary: ${employee.salary} `, '')

      function updateBestPrice(objsArrays) {
         result = objsArrays.reduce((best, worker) => {
            return best.salary > worker.salary ? best : worker
         }, objsArrays[0])
         return result;
      }

      function updateAverageSalary(objsArrays) {
         result = objsArrays.reduce((acc, worker) => acc + worker.salary, 0)
         return result / objsArrays.length;
      }
   }
}