let title; 

function setup() {
  createCanvas(400, 400);
  input = createInput();
  button = createButton('Generate Garden');
  button.mousePressed(generateGarden);

  

  
}

function generateGarden(){
  title = input.value();
  print(title);
  //url = "http://bechdeltest.com/api/v1/getMoviesByTitle?title=" + title
  url = "https://bechdeltest.com/api/v1/getMovieByImdbId?origin=*&imdbid=0367631&callback=yayData" 
  loadJSON(url, yayData, 'jsonp');
  print('hi');
}


function draw() {
  background(0);
}

function yayData(data) {
  console.log(data);
}