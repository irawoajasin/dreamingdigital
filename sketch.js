

let objects = [

  'a photo editor',
  'a voice assistant',
  'an online shopping platform',
  'a comment section',
  'a like button',
  'a user profile',
  'a photo carosel',
  'a text messager',
  'an alarm clock',
  'a contact list',
  'a fitness tracker',
  'a video player',
  'a search engine',
  'a fingerprint scanner'

]

let values = [

  'slower',
  'faster',
  'spiritual',
  'gamified',
  'antisocial',
  'weaponized',
  'sensory',
  'embodied',
  'participatory',
  'intimate',
  'uncomfortable',
  'ecological',
  'surveilled',
  'hierarchical (in a new way)',
  'difficult',
  'nonbinary',
  'ritualistic',
  'domestic',
  'sentimental',
  'communal',
  'private',
  'public'

]

function setup() {
  textFont("Outfit")
  createCanvas(windowWidth, 50);

  background(3, 11, 15);

  fill(113, 151, 171);
  textSize(35);
  textFont("Outfit")
  text('press space to generate a prompt', 12, 0, windowWidth);
  
}

function keyPressed(){
  if (key == ' '){
    background(3, 11, 15);
    generatePrompt();
  }

}
 
function generatePrompt() {

  let prompt = 'imagine ' + random(objects) + " that feels " + random(values);
  textFont("Outfit")
  text(prompt, 12, 0, windowWidth);

}