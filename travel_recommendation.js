const btnSearch = document.getElementById('btnSearch');
const btnClear = document.getElementById('btnClear');

function searchRecommendation() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
      .then(response => response.json())
      .then(data => {
        if(input.includes("beach")){//beach
            const beachItems = data.beaches.map(item => item); // Map or filter as needed
            console.log(beachItems);
            if(beachItems){
                // Iterate through each item in the array
                beachItems.forEach(item => {
                    console.log(`Name: ${item.name}`);
                    resultDiv.innerHTML += `
                        <div class="container" style="min-width: 150px; max-width: 350px; height: auto;display: inline-block;">
                            <img src="${item.imageUrl}" alt="image" style="width: 90%;height: auto;margin-left: 5%;">
                            <h2><strong>${item.name}</strong></h2>
                            <p>${item.description}</p>
                            <button type="submit" style="padding: 10px 30px;">Visit</button>
                        </div>
                    `;
                });
            }
            else {
                resultDiv.innerHTML = `
                <div class="container" style="min-width: 150px; max-width: 350px; height: auto;display: inline-block;">
                        <h2><strong>Not Found</strong></h2>
                    </div>
                `;
            }
        }
        else if(input.includes("temple")){//temple
            const templeItems = data.temples.map(item => item); // Map or filter as needed
            console.log(templeItems);
            if(templeItems){
                // Iterate through each item in the array
                templeItems.forEach(item => {
                    console.log(`Name: ${item.name}`);
                    resultDiv.innerHTML += `
                    <div class="container" style="min-width: 150px; max-width: 350px; height: auto;display: inline-block;">
                            <img src="${item.imageUrl}" alt="image" style="width: 90%;height: auto;margin-left: 5%;">
                            <h2><strong>${item.name}</strong></h2>
                            <p>${item.description}</p>
                            <button type="submit" style="padding: 10px 30px;">Visit</button>
                        </div>
                    `;
                });
            }
            else {
                resultDiv.innerHTML = `
                <div class="container" style="min-width: 150px; max-width: 350px; height: auto;display: inline-block;">
                        <h2><strong>Not Found</strong></h2>
                    </div>
                `;
            }
        }
        else if(input.includes("country")){//country
            const countryItems = data.countries.map(item => item); // Map or filter as needed
            console.log(countryItems); 
            if(countryItems){
                // Iterate through each item in the array
                countryItems.forEach(country => {
                    resultDiv.innerHTML += `<h1><strong>${country.name}</strong></h2>`;
                    const cityItems = country.cities.map(item => item); // Map or filter as needed
                    cityItems.forEach(city => {
                        resultDiv.innerHTML += `
                        <div class="container" style="min-width: 150px; max-width: 350px; height: auto;display: inline-block;">
                                <img src="${city.imageUrl}" alt="image" style="width: 90%;height: auto;margin-left: 5%;">
                                <h2><strong>${city.name}</strong></h2>
                                <p>${city.description}</p>
                                <button type="submit" style="padding: 10px 30px;">Visit</button>
                            </div>
                        `;
                    });

                });
            }
            else {
                resultDiv.innerHTML = `
                <div class="container" style="min-width: 150px; max-width: 350px; height: auto;display: inline-block;">
                        <h2><strong>Not Found</strong></h2>
                    </div>
                `;
            }
        }
        else{
            resultDiv.innerHTML =  `
                <div class="container" style="min-width: 150px; max-width: 350px; height: auto;display: inline-block;">
                        <h2><strong>Not Found</strong></h2>
                    </div>
                `;
        }

      })
      .catch(error => {
        console.error('Error:', error);
        resultDiv.innerHTML = 'An error occurred while fetching data.';
      });
  }
    btnSearch.addEventListener('click', searchRecommendation);

function clearRecommendation() {
    const input = document.getElementById('conditionInput').value = "";
    
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';
}
    btnClear.addEventListener('click', clearRecommendation);