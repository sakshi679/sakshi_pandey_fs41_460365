function fetchData(){
    return new Promise((resolve , reject) => {
        setTimeout(() => {
        let randomnumber = Math.random();
        if(randomnumber > 0.5) {
            resolve("Data fetched successfully!");
        } else{
            reject("Failed to fetch data.");
        }
        }, 2000);
    });
 async function fetchDataHandler() {
    console.log("Fetching data...");
  
    try {
      let result = await fetchData();
      console.log(result);  // Success case
    } catch (error) {
      console.log("Error fetching data:", error);  // Error case
    }
  }

}
fetchDataHandler();