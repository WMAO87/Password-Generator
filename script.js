
      // Loop 10 times
      for (var i = 0; i < 10; i++) {
        // Generate a random decimal number between 0 and 1
        var num = Math.random();

        // Display in console
        console.log(num);
      }

      for (var i = 0; i < 10; i++) {
        // Generate a random decimal number between 0 and 1
        var num = (Math.random() * 100);
        // 0 - 99.99999
        var chopped = Math.floor(num) + 100;
        // 100 - 199

        // Display in console
        console.log(num);
        console.log(chopped);
      }

      var arr = ["a", "b", "c", "d", "e"];
      var randomIndex = Math.floor(Math.random() * arr.length);
      console.log("random index: ", randomIndex);
      console.log("random item: ", arr[randomIndex]);

      var str = "abcdefghijklmnopqrstuvwxyz";
      var randomIndex = Math.floor(Math.random() * str.length);
      console.log("random index: ", randomIndex);
      console.log("random item: ", str[randomIndex]);