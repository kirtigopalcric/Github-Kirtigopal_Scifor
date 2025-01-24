 const bookAPI = {
    books: {
      fiction: [
        {
          id: 1,
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg",
          description: "A classic novel of racism and injustice.",
          category: "fiction",
          price: 399
        },
        {
          id: 2,
          title: "1984",
          author: "George Orwell",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780451524935-L.jpg",
          description: "A dystopian novel about totalitarianism.",
          category: "fiction",
          price: 299
        },
        {
          id: 3,
          title: "Pride and Prejudice",
          author: "Jane Austen",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781503290563-L.jpg",
          description: "A romantic classic about love and social standing.",
          category: "fiction",
          price: 350
        },
        {
          id: 4,
          title: "The Great Gatsby",
          author: "F. Scott Fitzgerald",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
          description: "A critique of the American Dream.",
          category: "fiction",
          price: 280
        },
        {
          id: 5,
          title: "The Catcher in the Rye",
          author: "J.D. Salinger",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780316769488-L.jpg",
          description: "A story of teenage rebellion and angst.",
          category: "fiction",
          price: 320
        },
        {
          id: 6,
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780547928227-L.jpg",
          description: "A fantasy adventure about a reluctant hero.",
          category: "fiction",
          price: 450
        },
        {
          id: 7,
          title: "Moby Dick",
          author: "Herman Melville",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781503280786-L.jpg",
          description: "A seafaring tale of obsession and revenge.",
          category: "fiction",
          price: 360
        },
        {
          id: 8,
          title: "Brave New World",
          author: "Aldous Huxley",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780060850524-L.jpg",
          description: "A dystopian vision of a futuristic society.",
          category: "fiction",
          price: 300
        },
        {
          id: 9,
          title: "Crime and Punishment",
          author: "Fyodor Dostoevsky",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780486415871-L.jpg",
          description: "A psychological exploration of guilt and redemption.",
          category: "fiction",
          price: 400
        },
        {
          id: 10,
          title: "The Alchemist",
          author: "Paulo Coelho",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780062315007-L.jpg",
          description: "A philosophical story about pursuing one’s dreams.",
          category: "fiction",
          price: 280
        },
          {
            "id": 11,
            "title": "The Great Gatsby",
            "author": "F. Scott Fitzgerald",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9780743273565-L.jpg",
            "description": "A novel about the American dream and the roaring twenties.",
            "category": "fiction",
            "price": 899
          },
          {
            "id": 12,
            "title": "To Kill a Mockingbird",
            "author": "Harper Lee",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9780060935467-L.jpg",
            "description": "A novel about racial inequality and the moral growth of its young protagonist.",
            "category": "fiction",
            "price": 949
          }
        
      ],
      nonfiction: [
        {
          id: 1,
          title: "Sapiens",
          author: "Yuval Noah Harari",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780062316110-L.jpg",
          description: "A brief history of humankind.",
          category: "nonfiction",
          price: 499
        },
        {
          id: 2,
          title: "Homo Deus",
          author: "Yuval Noah Harari",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780062464316-L.jpg",
          description: "Exploring humanity's future.",
          category: "nonfiction",
          price: 550
        },
        {
          id: 3,
          title: "Educated",
          author: "Tara Westover",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780399590504-L.jpg",
          description: "A memoir of resilience and the power of education.",
          category: "nonfiction",
          price: 450
        },
        {
          id: 4,
          title: "Becoming",
          author: "Michelle Obama",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781524763138-L.jpg",
          description: "The memoir of the former First Lady.",
          category: "nonfiction",
          price: 599
        },
        {
          id: 5,
          title: "The Immortal Life of Henrietta Lacks",
          author: "Rebecca Skloot",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781400052172-L.jpg",
          description: "A story of medical ethics and the legacy of a woman.",
          category: "nonfiction",
          price: 400
        },
        {
          id: 6,
          title: "The Wright Brothers",
          author: "David McCullough",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781476728759-L.jpg",
          description: "The inspiring story of the pioneers of flight.",
          category: "nonfiction",
          price: 380
        },
        {
          id: 7,
          title: "Into the Wild",
          author: "Jon Krakauer",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780385486804-L.jpg",
          description: "The story of a man’s journey into the Alaskan wilderness.",
          category: "nonfiction",
          price: 320
        },
        {
          id: 8,
          title: "Man's Search for Meaning",
          author: "Viktor E. Frankl",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780807014271-L.jpg",
          description: "A Holocaust survivor's reflection on finding purpose.",
          category: "nonfiction",
          price: 350
        },
        {
          id: 9,
          title: "The Glass Castle",
          author: "Jeannette Walls",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780743247542-L.jpg",
          description: "A memoir of an unconventional and troubled childhood.",
          category: "nonfiction",
          price: 400
        },
        {
          id: 10,
          title: "Quiet",
          author: "Susan Cain",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780307352156-L.jpg",
          description: "The power of introverts in a world that can't stop talking.",
          category: "nonfiction",
          price: 420
        },
          {
            "id": 11,
            "title": "Steve Jobs",
            "author": "Walter Isaacson",
            "imageUrl": "https://example.com/steve-jobs.jpg",
            "description": "A biography of Steve Jobs, the co-founder of Apple Inc.",
            "category": "biography",
            "price": 1599
          },
          {
            "id": 12,
            "title": "Becoming",
            "author": "Michelle Obama",
            "imageUrl": "https://example.com/becoming.jpg",
            "description": "A memoir by the former First Lady of the United States.",
            "category": "biography",
            "price": 1649
          }
      ],
      science: [
        {
          id: 1,
          title: "A Brief History of Time",
          author: "Stephen Hawking",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780553380163-L.jpg",
          description: "Understanding the universe's greatest mysteries.",
          category: "science",
          price: 499
        },
        {
          id: 2,
          title: "The Selfish Gene",
          author: "Richard Dawkins",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780198788607-L.jpg",
          description: "Exploring the role of genes in evolution.",
          category: "science",
          price: 599
        },
        {
          id: 3,
          title: "The Gene",
          author: "Siddhartha Mukherjee",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781476733500-L.jpg",
          description: "A history of the genetic revolution.",
          category: "science",
          price: 650
        },
        {
          id: 4,
          title: "Cosmos",
          author: "Carl Sagan",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780345331359-L.jpg",
          description: "A journey through space, time, and the human spirit.",
          category: "science",
          price: 450
        },
        {
          id: 5,
          title: "Astrophysics for People in a Hurry",
          author: "Neil deGrasse Tyson",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780393609394-L.jpg",
          description: "A quick introduction to the universe.",
          category: "science",
          price: 399
        },
        {
          id: 6,
          title: "What If?",
          author: "Randall Munroe",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780544272996-L.jpg",
          description: "Serious answers to absurd scientific questions.",
          category: "science",
          price: 499
        },
        {
          id: 7,
          title: "The Elegant Universe",
          author: "Brian Greene",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780393338102-L.jpg",
          description: "Superstrings, hidden dimensions, and the quest for the ultimate theory.",
          category: "science",
          price: 650
        },
        {
          id: 8,
          title: "The Immortal Life of Henrietta Lacks",
          author: "Rebecca Skloot",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781400052189-L.jpg",
          description: "The true story behind a revolutionary cell line.",
          category: "science",
          price: 499
        },
        {
          id: 9,
          title: "Why We Sleep",
          author: "Matthew Walker",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781501144324-L.jpg",
          description: "Unlocking the power of sleep and dreams.",
          category: "science",
          price: 550
        },
        {
          id: 10,
          title: "The Sixth Extinction",
          author: "Elizabeth Kolbert",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781250062185-L.jpg",
          description: "An exploration of humanity's impact on life.",
          category: "science",
          price: 480
        },
          {
            "id": 11,
            "title": "A Brief History of Time",
            "author": "Stephen Hawking",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9780393609394-L.jpg",
            "description": "Exploring the origins and fate of the universe.",
            "category": "science",
            "price": 1199
          },
          {
            "id": 12,
            "title": "Sapiens: A Brief History of Humankind",
            "author": "Yuval Noah Harari",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9781476733500-L.jpg",
            "description": "How humankind came to dominate the Earth.",
            "category": "science",
            "price": 1449
          }
        
      ],
      selfhelp: [
        {
          id: 1,
          title: "Atomic Habits",
          author: "James Clear",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
          description: "Building good habits and breaking bad ones.",
          category: "selfhelp",
          price: 499
        },
        {
          id: 2,
          title: "The 7 Habits of Highly Effective People",
          author: "Stephen R. Covey",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780743269513-L.jpg",
          description: "Powerful lessons in personal change.",
          category: "selfhelp",
          price: 600
        },
        {
          id: 3,
          title: "How to Win Friends and Influence People",
          author: "Dale Carnegie",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780671027032-L.jpg",
          description: "Timeless principles of interpersonal relationships.",
          category: "selfhelp",
          price: 450
        },
        {
          id: 4,
          title: "Think and Grow Rich",
          author: "Napoleon Hill",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781585424337-L.jpg",
          description: "A guide to success through goal-setting and perseverance.",
          category: "selfhelp",
          price: 399
        },
        {
          id: 5,
          title: "The Power of Now",
          author: "Eckhart Tolle",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781577314806-L.jpg",
          description: "A spiritual journey to living in the present moment.",
          category: "selfhelp",
          price: 550
        },
        {
          id: 6,
          title: "You Are a Badass",
          author: "Jen Sincero",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780762447695-L.jpg",
          description: "How to stop doubting your greatness and start living.",
          category: "selfhelp",
          price: 399
        },
        {
          id: 7,
          title: "The Four Agreements",
          author: "Don Miguel Ruiz",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781878424310-L.jpg",
          description: "A practical guide to personal freedom.",
          category: "selfhelp",
          price: 350
        },
        {
          id: 8,
          title: "Daring Greatly",
          author: "Brené Brown",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781592408412-L.jpg",
          description: "The courage to be vulnerable transforms lives.",
          category: "selfhelp",
          price: 499
        },
        {
          id: 9,
          title: "Deep Work",
          author: "Cal Newport",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781455586691-L.jpg",
          description: "Rules for focused success in a distracted world.",
          category: "selfhelp",
          price: 550
        },
        {
          id: 10,
          title: "The Subtle Art of Not Giving a F*ck",
          author: "Mark Manson",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
          description: "A counterintuitive approach to living a good life.",
          category: "selfhelp",
          price: 450
        },
          {
            "id": 11,
            "title": "Atomic Habits",
            "author": "James Clear",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
            "description": "An easy and proven way to build good habits and break bad ones.",
            "category": "self-help",
            "price": 1299
          },
          {
            "id": 12,
            "title": "The Subtle Art of Not Giving a F*ck",
            "author": "Mark Manson",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9780062457714-L.jpg",
            "description": "A counterintuitive approach to living a good life.",
            "category": "self-help",
            "price": 1049
          }
        
      ],
      psychology: [
        {
          id: 1,
          title: "Thinking, Fast and Slow",
          author: "Daniel Kahneman",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
          description: "A groundbreaking exploration of how the mind works.",
          category: "psychology",
          price: 550
        },
        {
          id: 2,
          title: "The Power of Habit",
          author: "Charles Duhigg",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
          description: "Why we do what we do in life and business.",
          category: "psychology",
          price: 450
        },
        {
          id: 3,
          title: "Grit",
          author: "Angela Duckworth",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9781501111112-L.jpg",
          description: "The power of passion and perseverance.",
          category: "psychology",
          price: 500
        },
        {
          id: 4,
          title: "Man’s Search for Meaning",
          author: "Viktor E. Frankl",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780807014295-L.jpg",
          description: "A psychiatrist's story of finding purpose.",
          category: "psychology",
          price: 399
        },
        {
          id: 5,
          title: "Emotional Intelligence 2.0",
          author: "Travis Bradberry",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780974320625-L.jpg",
          description: "Strategies to increase your emotional intelligence.",
          category: "psychology",
          price: 499
        },
        {
          id: 6,
          title: "Flow",
          author: "Mihaly Csikszentmihalyi",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780061339202-L.jpg",
          description: "The psychology of optimal experience.",
          category: "psychology",
          price: 550
        },
        {
          id: 7,
          title: "Quiet",
          author: "Susan Cain",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780307352156-L.jpg",
          description: "The power of introverts in a noisy world.",
          category: "psychology",
          price: 450
        },
        {
          id: 8,
          title: "Blink",
          author: "Malcolm Gladwell",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780316010665-L.jpg",
          description: "The power of thinking without thinking.",
          category: "psychology",
          price: 400
        },
        {
          id: 9,
          title: "Atomic Habits",
          author: "James Clear",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780735211292-L.jpg",
          description: "An easy way to build good habits and break bad ones.",
          category: "psychology",
          price: 499
        },
        {
          id: 10,
          title: "Switch",
          author: "Chip Heath and Dan Heath",
          imageUrl: "https://covers.openlibrary.org/b/isbn/9780385528757-L.jpg",
          description: "How to change things when change is hard.",
          category: "psychology",
          price: 450
        },
         {
            "id": 11,
            "title": "Thinking, Fast and Slow",
            "author": "Daniel Kahneman",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9780374533557-L.jpg",
            "description": "An exploration of the two systems that drive the way we think.",
            "category": "psychology",
            "price": 885
          },
          {
            "id": 12,
            "title": "The Power of Habit",
            "author": "Charles Duhigg",
            "imageUrl": "https://covers.openlibrary.org/b/isbn/9780812981605-L.jpg",
            "description": "Why we do what we do in life and business, and how habits work.",
            "category": "psychology",
            "price": 1029
          }
        ]
    }
  };
  
  export default bookAPI;