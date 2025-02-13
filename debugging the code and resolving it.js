function createHeavyDataHandler() {
    let largeData = new Array(1000000).fill(0);
    const handler = {
      processData: function () {
        if (largeData) {
          console.log("Processing data of size:", largeData.length);
        } else {
          console.log("Data has been cleared.");
        }
      },
      clearData: function () {
        largeData = null;
        handler.processData = null;
        handler.clearData = null;
      }
    };
    return handler;
  }
  
  const handler = createHeavyDataHandler();
  handler.processData();
  handler.clearData();
  