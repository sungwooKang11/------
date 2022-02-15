const questions = [
  {
    Q: "The way to get started is to quit talking and begin doing.",
    A: "Walt Disney",
  },
  {
    Q: "Life is what happens when you're busy making other plans.",
    A: "John Lennon",
  },
  {
    Q: "The world is a book and those who do not travel read only one page.",
    A: "Saint Augustine",
  },
  {
    Q: "Life is either a daring adventure or nothing at all.",
    A: "Helen Keller",
  },
  {
    Q: "To Travel is to Live",
    A: "Hans Christian Andersen",
  },
  {
    Q: "Only a life lived for others is a life worthwhile.",
    A: "Albert Einstein",
  },
  {
    Q: "You only live once, but if you do it right, once is enough.",
    A: "Mae West",
  },
  {
    Q: "Never go on trips with anyone you do ntot love.",
    A: "Hemmingway",
  },
  {
    Q: "We wander for distraction, but we travel for fulfilment.",
    A: "Hilaire Belloc",
  },
  {
    Q: "Travel expands the mind and fills the gap.",
    A: "Sheda Savage",
  },
]; 
  
  const Q = document.querySelector(".quote");
  const A = document.querySelector(".author");
  const ramdomQ = Q[Math.floor(Math.random() * questions.length)];

  Q.innerText = ramdomQ.Q;
  A.innerText = ramdomQ.A;
