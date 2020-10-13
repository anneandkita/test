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
  url = "http://bechdeltest.com/api/v1/getMovieByImdbId?imdbid=0367631" 
  loadJSON(url, yayData);
  print('hi');
}


function draw() {
  background(0);
}

function yayData(data) {
  console.log(data);
}