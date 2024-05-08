/**
Simple typewriter effect
Pippin Barr

This is a very simple (and not especially flexible) way to display text as if it's being written on a typewriter.
*/

// Here's what it will type (made it multi-line for fun)
let string = `
ABOUT:
I first heard the song "Fade Into You" by Mazzy Star my sophomore year of college. Without knowing what the lyrics were about, the song’s soft melody hit me with feelings and ideas of nostalgia, growing up, and moving onto new beginnings. 

Little did I know that the lyrics are really about not knowing someone to the fullest. The speaker has turned to this partner several times, but fails to learn anything about the person. 

I look to you and I see nothing.
I look to you to see the truth.  
You live your life, you go in shadows. 

Who is the song directly speaking to though? It could be about a loved one, the one that could’ve been, one that past away, a friend, an enemy, or maybe even about yourself - your past or present. 

With the lyrics presented throughout this interactive website, the song could also be about computer and human interaction as well. Our computers know everything about us, yet we know nothing about them. In the evolving world of AI, how long do we have until computers can generate the same feelings and senses we have? Personally, I hope that time never comes. 

Fade Into You can mean anything you want it to be. As I complete my last semester of college here, I’ll probably be replaying this song, reminiscing over the great times and looking forward to new beginnings.`;
// Which character in the string are we up to on the typewriter
let currentCharacter = 0;
// Page margins for a sheet of paper effect
let pageMargin = 25;

/**
Gotta have a canvas
*/
function setup() {
  createCanvas(1200, 800);
}

/**
Draws a sheet of paper and the current amount of the string that's being typed
*/
function draw() {
  background('black');
  
  // Work out the current string we're writing (the substring of the full string that the typewriter has written so far)
  // The substring() method will return all the characters of a string
  // between the starting and ending positions (starts at 0)
  let currentString = string.substring(0, currentCharacter);
  
  // Draw a sheet of paper (using the pageMargin variable)
  push();
  fill(255);
  noStroke();
  rect(pageMargin, pageMargin, width - pageMargin*2, height - pageMargin);
  pop();
  
  // Draw the current string on the page, with some margins
  push();
  textSize(22);
  textFont(`Courier`);
  textAlign(LEFT, TOP);
  text(currentString, pageMargin + 10, pageMargin + 10, width - pageMargin*2, height - pageMargin);
  pop();
  
  // Increase the current character so that we get a longer and
  // longer substring above. Using fractional numbers allows us to
  // slow down the pace.
  currentCharacter += 1;
  // currentCharacter += random(0,0.5); // Try adding random amounts for a more "naturalistic" pace of typing
}