Old.St Labs Technical Assessment
====
Hello, I'm Christine Deticio. Thank you for the opportunity to take this technical assessment. Although I was not able to implement all the features due to my heavy workload the past week and my limited knowledge on React, I tried my best and implemented what I could given the time that I had. Thank you!

To start the app
----
1. Run `npm install` to install the dependencies.
2. Run `npm run server` to start the server.
3. Run `npm start` to start the app. The app can be accessed through localhost:3000.

Features implemented
----
- Users are given an option to sort the products in ascending order by clicking on one of the three buttons provided. From left to right, the buttons sort the products based on size, price, and ID. The color of each button is also updated to let users know how the products are currently sorted.
- Products are displayed in a grid with 3 columns.
-  Users are able to view the different products, wherein the ascii face, size, price, and date posted are included.
- Users are able to view the ascii faces in the size that they come in.
- Product dates are formatted in days if the product is posted less than a week ago. Otherwise, the dates are shown in a Month Day, Year format.
- Users see an ad after every 20 products. The ad is formatted similarly to a product card for consistency.
- The ads shown are selected randomly and no ad is shown twice in a row, which was done by saving the previous value generated by `Math.random()`.
- After all products are displayed, users see an "end of catalogue" message.

Features not implemented
----
- The loading of products and the loading animation. All products are immediately displayed on the screen. To implement this in the future, I would look into determining how to detect once the user reaches the end of the page. If the user scrolls to the end, this should trigger an additional request to fetch the next few products that will be appended to the existing product list. While this is happening, the animated loading message can be started. Once all the products have been fetched, only then will the "end of catalogue" message pop up, which I can possibly do by updating a state of the component and having the visibility of the message depend on the said state. 


