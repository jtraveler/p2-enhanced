const rooms = [
  {
    id: 0,
    name: "The Book",
    description: `Leo's parents hand him a dusty book. "It belonged to your grandmother," his mom says. Leo clutches it with curiosity.`,
    north: 1,
    south: 3,
    east: 6,
    west: -1,
    buttonText: {
      north: "Read the book",
      south: "Go play video games",
      east: "shortcut to 6"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-0.webp",
      alt: "Leo receives his grandmother's glowing book from his parents on the living room couch"
    }
  },
  {
    id: 1,
    name: "Into the Book",
    description: `Leo snuggles against the couch and opens the book and starts to flip through it. He is intrigued and the pages begin to glow. He reads the book for hours and hours but begins to get drowsy.`,
    north: 2,
    south: 17,
    east: -1,
    west: -1,
    buttonText: {
      north: "Lay down, take a nap \nfor a pleasant dream",
      south: "Tell mom and dad about the book"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-1.webp",
      alt: "Leo sits on a couch in a glowing magical forest, holding the book"
    }
  },
  {
    id: 2,
    name: "The Magic Nap",
    description: "Leo gets comfortable on the couch with the book resting on his lap. As he dozes off, golden light swirls around him. When he opens his eyes, the couch is in the middle of a magical forest.",
    north: 4,
    south: 5,
    east: 16,
    west: -1,
    buttonText: {
      north: "Step off the couch and go straight",
      south: `Go to the forest and shout "Hello?"`,
      east: "Go back to sleep",
      
    },
    media: {
      type: "image",
      src: "assets/images/story-route-2-magical-nap.webp",
      alt: "Leo asleep on the couch surrounded by magical trees and light"
    }
  },
  {
    id: 3,
    name: "The Distraction",
    description: "Leo starts a video game but keeps eyeing the book. He finally powers down and picks it up, opening to the first page.",
    north: 1,
    south: 1,
    east: -1,
    west: -1,
    buttonText: {
      north: "Open the book",
      south: "Flip through the book randomly"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-2.webp",
      alt: "Leo glancing at the glowing book while holding a video game controller"
    }
  },
  
  {
    id: 4,
    name: "First Steps",
    description: "Leo steps off the couch with the book in his left hand. Two paths lie ahead—one leads to a glowing tree, the other to musical chimes.",
    north: 8,
    south: 6,
    east: 16,
    west: -1,
    buttonText: {
      north: "Go to the glowing tree",
      south: "Follow the musical sound",
      east: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-4-two-paths.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 5,
    name: "Shouting Hello!",
    description: `Leo runs to the forest an shouts "Hello?". To his surprise, he hears a voice shouting back saying "Over here, my friend!". But at the same time Leo notices the most peculiar owl up above in the trees and the owl says "Hello, Leo!" and then music starts playing.`,
    north: 9,
    south: 11,
    east: 6,
    west: 16,
    buttonText: {
      north: "Go towards the first voice you heard",
      south: "Have a closer look at the talking owl",
      east: "See where the music is comig from",
      west: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-5-shouting-hello.webp",
      alt: "Leo looking at a glowing bird in the forest"
    }
  },
  {
    id: 6,
    name: "The Mushroom Circle",
    description: "Leo follows the music and nearly steps on thumb-sized houses! The tiny partygoers greet Leo and ask him to help their friends down from the tree to so they can come to their party",
    north: 10,
    south: 5,
    east: 11,
    west: 16,
    buttonText: {
      north: "Answer a riddle",
      south: "Step out of the circle",
      east: `Shout "Help!"`,
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-6-tiny-village.webp",
      alt: "Leo surrounded by glowing mushrooms"
    }
  },
  {
    id: 7,
    name: "The Tiny Village",
    description: `Leo follows the music and nearly steps on thumb-sized houses! The tiny partygoers greet Leo and ask him to help their friends down from the tree to so they can come to their party`,
    north: 10,
    south: 5,
    east: 11,
    west: 16,
    buttonText: {
      north: "Answer a riddle",
      south: "Step out of the circle",
      east: `Shout "Help!"`,
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-6-tiny-village.webp",
      alt: "Leo surrounded by glowing mushrooms"
    }
  },
  {
    id: 8,
    name: "Finding Grandma",
    description: "Leo stands before the glowing tree, its golden leaves shimmering like stars. His grandmother appears in a warm light, regal yet gentle. Oona the owl rests beside her.",
    north: 14,
    south: 18,
    east: 12,
    west: 16,
    buttonText: {
      north: "Hug grandma and \nlearn more about Oona",
      south: "Ask about the tree",
      east: "I thought you died, but how...",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-8-grandma-and-the-glowing-tree.webp",
      alt: "A musical tree with Oona watching nearby"
    }
  },
  {
    id: 9,
    name: "The Trickster",
    description: `Leo meets a sketchy looking dude who interrupts him repeatedly, offering to trade for a better book. Though tempting, the deal seems risky. An owl swoops in and says "Don't listen to him, Leo!"`,
    north: 11,
    south: 23,
    east: -1,
    west: -1,
    buttonText: {
      north: `No, I’ll keep mine, \n(keeping a firm grip on the book)`,
      south: `I can show you mine. \nWhat’s in yours?`,
    },
    media: {
      type: "image",
      src: "assets/images/story-route-9-trickster.webp",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 10,
    name: "The Forgotten Path",
    description: `Leo follows winding vines into a quiet glade. Fog swirls. Paths vanish. A wooden sign asks, “Where is your heart?” The book glows blue.`,
    north: 8,
    south: 13,
    east: 11,
    west: 16,
    buttonText: {
      north: `Say "With my family"`,
      south: "In this world",
      east: "Stay silent and wait",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-10.webp",
      alt: "Oona speaking to Leo near glowing trees"
    }
  },
  {
    id: 11,
    name: "Oona’s Return",
    description: `Oona swoops down. "I am Oona, we've been expecting you, Leo. Hold on to the book, every page you turn writes your story,” she says. “But only your heart can choose the end.” She winks.`,
    north: 12,
    south: 15,
    east: 13,
    west: 16,
    buttonText: {
      north: "Ask what happens next",
      south: `Say "I'm not ready"`,
      east: "Ask about the book",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-11-oonas-intro.webp",
      alt: "Leo reunited with his grandmother under the glowing tree"
    }
  },
  {
    id: 12,
    name: "I Though You Died",
    description: "“Yes, I did” Grandma says softly. “I was the Queen of this land but since my passing, I'm able to come back to be an advisor. The book is your bridge to everything I once protected.”",
    north: 22,
    south: 14,
    east: 18,
    west: 16,
    buttonText: {
      north: "Show me what I have to do next",
      south: "Hug grandma and \nlearn more about Oona",
      east: "Ask about the tree",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-18-about-the-tree.webp",
      alt: "Leo reunited with his grandmother under the glowing tree"
    }
  },
  {
    id: 13,
    name: "The Choice",
    description: "'Adventure, Wisdom, or Home?' Oona asks. The book pulses gently. Leo knows this is his moment.",
    north: 6,
    south: 10,
    east: 16,
    west: 11,
    buttonText: {
      north: "Say 'Adventure'",
      south: "Say 'Wisdom'",
      east: "Say 'Home'",
      west: `Ask "Can I return again?`
    },
    media: {
      type: "image",
      src: "assets/images/story-route-12.webp",
      alt: "Leo stands with the glowing book at a forest fork"
    }
  },
  {
    id: 14,
    name: "Hugging Grandma",
    description: `Leo hugs grandma with a tight embrace. Grandma says "Oh how I missed you, Leo!". She then says "I see that you already met Oona, she is my most trusted friend and she will help guide you".`,
    north: 18,
    south: 12,
    east: 22,
    west: 16,
    buttonText: {
      north: "Ask about the tree",
      south: "I thought you died, but how...",
      east: "Show me what I have to do next",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-14-hugging-grandma.webp",
      alt: "Leo encounters a mischievous jester in the forest"
    }
  },
  {
    id: 15,
    name: "The Forgotten Forest",
    description: "Leo walks into a quiet, cool forest. The silence is comforting. He feels at peace, though the path ahead is uncertain.",
    north: 6,
    south: 9,
    east: 12,
    west: 16,
    buttonText: {
      north: "Sit and reflect",
      south: "Call for Oona",
      east: "Head toward a soft light ",
      west: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-14.webp",
      alt: "Leo in a glade of glowing whispers"
    }
  },
  {
    id: 16,
    name: "Return Home",
    description: "Leo finds himself back on the couch. The book rests in his lap. He's home... and the glow within the book hasn't faded.",
    north: 0,
    south: 17,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End. Would you like to start over?",
      south: "Go tell mom and dad about the book.",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-2-magical-nap-at-home.webp",
      alt: "Leo waking up back on the couch, still holding the glowing book"
    }
  },
  {
    id: 17,
    name: "Talk with the parents",
    description: `Leo excitedly tells his parents about the book, speaking so rapidly they can barely understand. They smile at each other. "Slow down," his dad says. "I see you're enjoying it." Leo shouts, "Yes! I want to keep reading, but first I need a nap!"`,
    north: 0,
    south: 2,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End. Would you like to start over?",
      south: "Lay down to take a nap"
    },
    media: {
      type: "image",
      src: "assets/images/parents-and-leo-in-the-kitchen.webp",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 18,
    name: "About the Glowing Tree",
    description: "“Why is this tree glowing?” Leo asks. She smiles gently. “Because this is where stories are remembered. It’s where I first held the book, just like you.”",
    north: 19,
    south: 21,
    east: 16,
    west: 22,
    buttonText: {
      north: "Can I see your memories in the book?",
      south: "Why do I feel a such a \nstrong connection to the tree",
      east: "Return to the couch",
      west: "Show me what I have to do next"
    },
    media: {
      type: "image",
      src: "assets/images/general-grandmother-talking.webp",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 19,
    name: "The Memory Pages",
    description: "Leo opens the book. Its pages shimmer, then swirl into glowing images. He sees his grandmother as a young girl — laughing, discovering the book, and meeting Oona. “These are my memories,” she whispers. “They’re yours to keep.”",
    north: 20,
    south: 2,
    east: 16,
    west: 22,
    buttonText: {
      north: "Ask Grandma why she \nstopped using the book",
      south: "Close the book and look around",
      east: "Return to the couch",
      west: "Show me what I have to do next"
    },
    media: {
      type: "image",
      src: "assets/images/book-open.webp",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 20,
    name: "The Closed Chapter",
    description: "Grandma’s eyes shimmer. “I didn’t stop using it… it stopped showing me new pages. The land grew quiet. I knew it was waiting—for you.” She gently places her hand on Leo’s. “The story needed your heart now, not mine.”",
    north: 22,
    south: 2,
    east: 21,
    west: 16,
    buttonText: {
      north: "Show me what I have to do next",
      south: "Close the book and look around",
      east: "Why do I feel a such a \nstrong connection to the tree",
      west: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-18-about-the-tree.webp",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 21,
    name: "Strong Connection With the Tree",
    description: `Leo asks softly: "Why do I sense such a strong connection with the tree?" Grandma touches the book. "It remembers you. It waited for someone with curiosity and courage—just like I once had."`,
    north: 20,
    south: 22,
    east: 16,
    west: 21,
    buttonText: {
      north: "Ask Grandma why she \nstopped using the book",
      south: "Show me what I have to do next",
      east: "Return to the couch",
      west: "Why do I feel a such a \nstrong connection to the tree",
    },
    media: {
      type: "image",
      src: "assets/images/story-route-18-about-the-tree.webp",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 22,
    name: "The Next Step",
    description: `Leo asks "What now?" Grandma smiles. "That's up to you, brave boy." Oona nods. "The book guides you but it's your heart decides which page comes next." `,
    north: 27,
    south: 2,
    east: 16,
    west: 16,
    buttonText: {
      north: "Then I want to explore more",
      south: "Can I go home and come back?",
      east: "Will I see you again?",
      west: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/general-leo-grandmother-oona.webp",
      alt: "Leo instantly jumps up and tells his parents about the book."
    }
  },
  {
    id: 23,
    name: "The Trickster Runs",
    description: `Just as Leo kindly shares his book with the dude, he snatches it out of Leo's hands and throws down his fake book. Then he bolts off with Leo's book. Leo begins to chase the dude saying "Hey, give it back!"`,
    north: 24,
    south: 16,
    east: -1,
    west: -1,
    buttonText: {
      north: `Continue running after him`,
      south: `Give up, go home and wake \nup from this bad dream`,
    },
    media: {
      type: "image",
      src: "assets/images/the-trickster---running.webp",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 24,
    name: "The Trickster In Trouble",
    description: `Suddenly out of no where a deep cliff appears ahead. The dude is running too fast and Leo watches him fall over the cliff! Leo arrives to find the dude hanging off of the cliff screaming "Help me, I'm scared of heights!"`,
    north: 25,
    south: 26,
    east: -1,
    west: -1,
    buttonText: {
      north: `Reach out your hand \nand save the dude`,
      south: `Let him be, he looks like \nhe can easily save himself`,
    },
    media: {
      type: "image",
      src: "assets/images/the-trickster---off-the-cliff.webp",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 25,
    name: "Leo Saves the Trickster",
    description: `Leo helps the dude off the cliff to safety. Grateful, the dude apologizes and explains he only wanted the book to read the famous stories to his younger siblings. Leo offers to read to them himself sometime. The dude is delighted and Leo goes on his way.  `,
    north: 11,
    south: 13,
    east: -1,
    west: -1,
    buttonText: {
      north: `Keep running after him`,
      south: `Give up and turn around`,
    },
    media: {
      type: "image",
      src: "assets/images/the-trickster---and-leo-talking.webp",
      alt: "Leo on a quiet path with a glowing sign"
    }
  },
  {
    id: 26,
    name: "Leaving the dude behind (clone of ID 4)",
    description: "Leo leaves the dude behind and he gets far away from him as possible. Then suddenly, he sees two paths lie ahead—one leads to a glowing tree, the other to musical chimes.",
    north: 8,
    south: 6,
    east: 16,
    west: -1,
    buttonText: {
      north: "Go to the glowing tree",
      south: "Follow the musical sound",
      east: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/story-route-4-two-paths.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 27,
    name: "Leaving Grandma and Oona",
    description: "Leo says goodbye to his grandmother and Oona and continues on his way. Up ahead he sees what looks like a sign. He also hears a faint voice in the distance.",
    north: 28,
    south: 29,
    east: 16,
    west: -1,
    buttonText: {
      north: "Go see what the sign says",
      south: "Follow the sound of the faint voice",
      east: "Return to the couch"
    },
    media: {
      type: "image",
      src: "assets/images/leo-walking-general-poses-and-settings-happy.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 28,
    name: "Where Is Your Heart",
    description: `Leo walks further down the path to a sign that reads "Where Is Your Heart". He thinks to himself "what could this mean". Ahh, he thinks he knows! He continues onwards.`,
    north: 16,
    south: 31,
    east: 32,
    west: -1,
    buttonText: {
      north: "With my family",
      south: "In this magical place",
      east: "Wherever the story takes me"
    },
    media: {
      type: "image",
      src: "assets/images/where-is-your-heart-sign.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 29,
    name: "Unicorn and Girl Stuck In Mud",
    description: `Leo walks quite some distance as the landscape changes and he comes across a girl with her unicorn stuck in the mud. She yells "Can you help get us out?!"`,
    north: 28,
    south: 30,
    east: -1,
    west: -1,
    buttonText: {
      north: "I don't think I can help, \nsorry but I must be on my way",
      south: "Hold on, I'll get \nyou both out of there!",
    },
    media: {
      type: "image",
      src: "assets/images/unicorl-girl-stuck.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 30,
    name: "Unicorn and Girl Freed",
    description: `Leo looked around for a rescue tool, then remembered reading about this place. He found rope hidden in the bushes, using it to pull them out. "Oh thank you, my hero!" the girl exclaimed.`,
    north: 28,
    south: 16,
    east: -1,
    west: -1,
    buttonText: {
      north: "No problem! I wish I \ncould chat but I'm on a mission",
      south: "Return to the couch",
    },
    media: {
      type: "image",
      src: "assets/images/unicorl-girl-freed.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 31,
    name: "In this Magical Kingdom",
    description: `Leo reaches a forest clearing and approaches a cliff, gazing at the most pristine land he's ever seen. It was love at first sight—in his heart, he knew this place was home. The adventure is just beginning...`,
    north: 0,
    south: -1,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End (for now). Go back to the \nbeginning to explore another adventure",
    
    },
    media: {
      type: "image",
      src: "assets/images/leo-overlooking-magical-kingdom.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
  {
    id: 32,
    name: "Wherever the Story Takes Me",
    description: `Leo finds a comfy spot to sit down to read the book and let the stories inspire his journey. And what a pleasant surprise, Oona has swooped in to offer any guidance. Her and Leo have a very long conversation about the stories in the book and now Leo knows where he wants to go.`,
    north: 0,
    south: -1,
    east: -1,
    west: -1,
    buttonText: {
      north: "The End (for now). Go back to the \nbeginning to explore another adventure",
    
    },
    media: {
      type: "image",
      src: "assets/images/leo-sitting-with-oona-reading-the-book.webp",
      alt: "Leo holding a book in a magical glowing forest"
    }
  },
];


// Export the rooms array
export default rooms;