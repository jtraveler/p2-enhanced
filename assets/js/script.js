

// DOM element references to connect the JS to the HTML elements
let narrator = document.getElementById('narrator'); // The text description area
let north = document.getElementById('north');
let south = document.getElementById('south');
let west = document.getElementById('west');
let east = document.getElementById('east');
const roomMedia = document.getElementById('room-media')
let north_shell = document.getElementById('north_shell');
let south_shell = document.getElementById('south_shell');
let east_shell = document.getElementById('east_shell');
let west_shell = document.getElementById('west_shell');
let roomHistory = [];

// We need an array of areas/rooms
// Room data - each one has an id, a name, a description, exits, media/visuals
// If an exit has -1, then that means that it's inactive


// Import room/routes from rooms.js file
import rooms from './rooms.js';



// We'll start in the first room (ID 0)
let currentRoom = 0;


/**
 * This function handles the game flow
 */
function gameMaster() {
  // First fade out everything
  fadeOutElements();
  
  // Then update everything with delayed fade-ins
  setTimeout(() => {
      // Display the current room description
      readDescrption(currentRoom);
      
      // Update the media for the current room
      updateRoomMedia(currentRoom); 
      
      // Set up the available exits/buttons
      handleExits(currentRoom);
      
      // Fade in elements with different delays
      fadeInElements();
  }, 500); // Wait for fade out to complete
}

/**
 * This function updates the narrator text
 *  */ 
function readDescrption(currentRoom) {
  narrator.innerText = rooms[currentRoom].description;
  // Add fade-out initially
  narrator.classList.add('fade-out');
}

/**
 * This function controls which direction buttons are visible
 * and attaches event listeners to them
 */
function handleExits(currentRoom) {
  // Replace each button with a clone and update our reference
  north = replaceButton(north);
  south = replaceButton(south);
  east = replaceButton(east);
  west = replaceButton(west);
  
  // Apply fade-out class to all direction containers initially
  north_shell.classList.add('fade-out');
  south_shell.classList.add('fade-out');
  east_shell.classList.add('fade-out');
  west_shell.classList.add('fade-out');

  // NORTH direction
  if (rooms[currentRoom].north != -1) {
      // There is an exit to the north
      north_shell.style.display = "flex"; // Make button visible
      north.innerText = "Go North"; // Set button text
      console.log("North button text:", north.textContent)

      // Update the north button with the custom text
      north.innerText = rooms[currentRoom].buttonText.north;

      // When clicked, move to the room in that direction
      north.addEventListener('click', () => move(rooms[currentRoom].north));
  } else {
      north_shell.style.display = "none";
  }

  // SOUTH direction
  if (rooms[currentRoom].south != -1) {
      // There is an exit to the south
      south_shell.style.display = "flex"; // Make button visible
      south.innerText = "Go South"; // Set button text
      console.log("South button text:", south.textContent)

      // Update the south button with the custom text
      south.innerText = rooms[currentRoom].buttonText.south;

      // When clicked, move to the room in that direction
      south.addEventListener('click', () => move(rooms[currentRoom].south));
  } else {
      south_shell.style.display = "none";
  }

  // EAST Direction
  if (rooms[currentRoom].east != -1) {
    // There is an exit to the east
    east_shell.style.display = "flex"; // Make button visible
    east.innerText = "Go East"; // Set button text
    console.log("East button text:", east.textContent)

    // Update the east button with the custom text
    east.innerText = rooms[currentRoom].buttonText.east;

    // When clicked, move to the room in that direction
    east.addEventListener('click', () => move(rooms[currentRoom].east));
  } else {
      east_shell.style.display = "none";
  }

  // WEST Direction
  if (rooms[currentRoom].west != -1) {
      // There is an exit to the west
      west_shell.style.display = "flex"; // Make button visible
      west.innerText = "Go West"; // Set button text
      console.log("West button text:", west.textContent)

      // Update the west button with the custom text
      west.innerText = rooms[currentRoom].buttonText.west;

      // When clicked, move to the room in that direction
      west.addEventListener('click', () => move(rooms[currentRoom].west));
  } else {
      west_shell.style.display = "none";
  }
}

/**
 * Update the visual media for the current room
 */
function updateRoomMedia(roomId) {

  // Get the current room
  const room = rooms[roomId];
  
  // Get the current image if there is one
  const currentImage = roomMedia.querySelector('img');

  if (currentImage) {

    currentImage.classList.add('fade-out');

    setTimeout(() => {

      // Clear the media container
      roomMedia.innerHTML = '';
    
      if (room.media && room.media.type === "image") {
    
        // Create an image elment
        const img = document.createElement('img');
    
        // Set the attributes for the image
        img.src = room.media.src;
        img.alt = room.media.alt || 'Room image';

        img.classList.add('fade-out');
    
        // Add it to the container
        roomMedia.appendChild(img);

        // Force browser to recognize the initial state
        void img.offsetWidth;
        
        // Remove fade-out to trigger transition to visible
        img.classList.remove('fade-out');
    
        console.log("Adding image to:", room.media.src)
      }
    }, 500); // .5 sec transition time
  } else {

      roomMedia.innerHTML = '';

      if (room.media && room.media.type === "image") {
    
        // Create an image elment
        const img = document.createElement('img');
    
        // Set the attributes for the image
        img.src = room.media.src;
        img.alt = room.media.alt || 'Room image';

        // Start with fade-out applied (invisible)
        img.classList.add('fade-out');
    
        // Add it to the container
        roomMedia.appendChild(img);
    
       // Force browser to recognize the initial state
        void img.offsetWidth;
        
        // Remove fade-out to trigger transition to visible
        img.classList.remove('fade-out');
      
      }
  }
}



/**
 * Helper function to replace a button with a clone
 * This removes all event listeners
 */
function replaceButton(button) {

  const newButton = button.cloneNode(true); // Create an exact copy of thr button
  button.parentNode.replaceChild(newButton, button); // Replace the old button with the new
  return newButton; // Return the new button to use
}



/**
 * Move to a new room when a direction button is clicked
 */
function move(destination) {
    // Update the current room
    currentRoom = destination;

    // Update the game display for the new room
    gameMaster();

    // What room are we currently in
    console.log("You're in room: ", destination, rooms[destination].name);
}
gameMaster();




// Call this function to activate the back button
implementBackButton();

function implementBackButton() {
  const back_shell = document.getElementById('back_shell');
  const roomNumber = document.getElementById('room-number');
  
  // Override the move function to track history
  const originalMove = move;
  move = function(destination) {
      // Add current room to history before moving
      roomHistory.push(currentRoom);
      
      // Call the original move function
      originalMove(destination);
      
      // Update room number display
      roomNumber.textContent = `Room: ${currentRoom}`;
      
      // Update back button visibility
      updateBackButtonVisibility();
  };
  
  // Helper function to update back button visibility
  function updateBackButtonVisibility() {
      if (roomHistory.length > 0) {
          back_shell.style.display = "block";
      } else {
          back_shell.style.display = "none";
      }
  }

  // Add back button handler in gameMaster
  const originalGameMaster = gameMaster;
  gameMaster = function() {
      // Call the original gameMaster function
      originalGameMaster();
      
      // Update room number display
      roomNumber.textContent = `Room: ${currentRoom}`;
      
      // Handle back button - use getElementById each time to get a fresh reference
      if (roomHistory.length > 0) {
          back_shell.style.display = "block";
          
          // Get a fresh reference to the back button
          const backButton = document.getElementById('back');
          
          // Replace it with a clone to remove old event listeners
          const backClone = replaceButton(backButton);
          
          // Add click event listener to the new button
          backClone.addEventListener('click', function() {
              // Get the previous room from history
              const previousRoom = roomHistory.pop();
              
              // Update current room
              currentRoom = previousRoom;
              
              // Update the game
              originalGameMaster(); // Use original to avoid recursion
              
              // Update room number
              roomNumber.textContent = `Room: ${currentRoom}`;
              
              // Update back button visibility
              updateBackButtonVisibility();
          });
      } else {
          back_shell.style.display = "none";
      }
  };
  
  // Initial setup
  updateBackButtonVisibility();
  roomNumber.textContent = `Room: ${currentRoom}`;
}


/**
 * Helper function to fade out narrator and direction buttons
 */
function fadeOutElements() {
  // Fade out narrator
  narrator.classList.add('fade-out');
  
  // Fade out all direction containers
  north_shell.classList.add('fade-out');
  south_shell.classList.add('fade-out');
  east_shell.classList.add('fade-out');
  west_shell.classList.add('fade-out');
}

/**
* Helper function to fade in elements with delays
*/
function fadeInElements() {
  // Fade in the narrator with a delay
  setTimeout(() => {
      narrator.classList.remove('fade-out');
  }, 200); // 0.2 second delay
  
  // Fade in the direction buttons with a smaller delay
  setTimeout(() => {
      // Only fade in visible buttons
      if (north_shell.style.display !== "none") {
          north_shell.classList.remove('fade-out');
      }
      if (south_shell.style.display !== "none") {
          south_shell.classList.remove('fade-out');
      }
      if (east_shell.style.display !== "none") {
          east_shell.classList.remove('fade-out');
      }
      if (west_shell.style.display !== "none") {
          west_shell.classList.remove('fade-out');
      }
  }, 400); // 0.4 second delay
}