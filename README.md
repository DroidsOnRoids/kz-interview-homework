# How to run it
Run those 3 commands one by one:
```
docker-compose run server setup
docker-compose run frontend setup
docker-compose up
```
Than you can access the page on [localhost:3000](http://localhost:3000).

# Tasks:
1. Bootstrap your favorite node.js FW and create one single API controller with this route: GET /palindrome/:value
Write a small function (80 characters at the maximum) for palindrome detection. 
2. When you call the API with GET /palindrome/anna it should return JSON { result: true, input: $value } with HTTP code 200. If given value is not a palindrome it should return HTTP code 400 with { result: false, input: $value }.
3. Bootstrap angular frontend framework. The page will include one text input and a button. If you click on the button it will fire ajax request with text parameter to the API. If the text is palindrome, print out sentence "$value is a palindrome" somewhere on the page, otherwise print "$value is not a palindrome". Use Bootstrap 3+ with SCSS for styling button and input. 
4. Create another page where there will be one input – city, and one blue button next to it. When you click the button, fire a request to the Open Weather API (choose whatever API you like) and render the response (weather forecast for given city). 
5. There should be menu between these two modules (Palindrome, Forecast). The whole page should be responsive. 
