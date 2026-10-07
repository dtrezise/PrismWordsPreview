const books = [
  {
    number: 13,
    title: "The Yellow Envelope",
    character: "Miss Place",
    movement: "discover",
    color: "#f0444c",
    words: ["envelope", "every", "her", "together", "your"],
    summary: "A yellow envelope restarts the adventure and asks the reader to notice what the group misses."
  },
  {
    number: 14,
    title: "The Welcome Invitation",
    character: "Miss Place",
    movement: "discover",
    color: "#f39a31",
    words: ["invitation", "welcome", "how", "just", "use"],
    summary: "The jumping map becomes an invitation whose picture marks only work in the right order."
  },
  {
    number: 15,
    title: "Which Route?",
    character: "Miss Guided",
    movement: "discover",
    color: "#f4d93c",
    words: ["route", "his", "which", "let", "know"],
    summary: "Confident pointing gives way to comparing evidence before choosing a route."
  },
  {
    number: 16,
    title: "When To Open",
    character: "Miss Place",
    movement: "discover",
    color: "#37a66b",
    words: ["answer", "open", "when", "think", "their"],
    summary: "An answer box teaches that finding the right object is not the same as knowing when to act."
  },
  {
    number: 17,
    title: "The Flying Time Clue",
    character: "Miss Place",
    movement: "practice",
    color: "#2e78d2",
    words: ["time", "before", "after", "little", "fly"],
    summary: "A moving clue turns memory and time words into an energetic chase."
  },
  {
    number: 18,
    title: "The People Puzzle",
    character: "Miss Place",
    movement: "practice",
    color: "#f0444c",
    words: ["people", "him", "of", "right", "help"],
    summary: "The group learns that useful help must match the right person and purpose."
  },
  {
    number: 19,
    title: "Stop After the Sign",
    character: "Miss Name",
    movement: "practice",
    color: "#f39a31",
    words: ["sign", "stop", "after", "been", "name"],
    summary: "A changing sign turns ceremonious stopping into a lesson in labels and timing."
  },
  {
    number: 20,
    title: "Take From Here",
    character: "Miss Took",
    movement: "practice",
    color: "#f4d93c",
    words: ["may", "again", "take", "from", "made"],
    summary: "Miss Took discovers that careful taking begins with source, ownership, and permission."
  },
  {
    number: 21,
    title: "The Old Path Part",
    character: "Miss Place",
    movement: "practice",
    color: "#37a66b",
    words: ["old", "part", "ask", "said", "walk"],
    summary: "A useful question helps the group notice the path part they walked right past."
  },
  {
    number: 22,
    title: "Once at the Oil Cart",
    character: "Miss Place",
    movement: "synthesize",
    color: "#2e78d2",
    words: ["oil", "once", "give", "giving", "mark"],
    summary: "Clue habits transfer into practical help, where giving more is not always better."
  },
  {
    number: 23,
    title: "Some Round Clues",
    character: "Miss Place",
    movement: "synthesize",
    color: "#f0444c",
    words: ["some", "any", "had", "round"],
    summary: "The group combines partial clues and learns that no single clue explains everything."
  },
  {
    number: 24,
    title: "Thank You, Map",
    character: "Miss Place",
    movement: "synthesize",
    color: "#f4d93c",
    words: ["thank", "has", "could", "or"],
    summary: "Miss Place explains how the clues work and thanks the map, path, friends, and reader."
  }
];

const grid = document.querySelector("#book-grid");
const segments = [...document.querySelectorAll(".segment")];

function renderBooks(filter = "all") {
  const visibleBooks = filter === "all" ? books : books.filter((book) => book.movement === filter);
  grid.innerHTML = visibleBooks
    .map(
      (book) => `
        <article class="book-card" style="--book-color: ${book.color}">
          <span class="book-number">Book ${book.number} · Level 3</span>
          <h3>${book.title}</h3>
          <p class="book-character">${book.character}</p>
          <p class="book-summary">${book.summary}</p>
          <div class="word-list" aria-label="Target vocabulary">
            ${book.words.map((word) => `<span>${word}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");
}

segments.forEach((segment) => {
  segment.addEventListener("click", () => {
    segments.forEach((item) => {
      const selected = item === segment;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", selected ? "true" : "false");
    });
    renderBooks(segment.dataset.filter);
  });
});

renderBooks();
