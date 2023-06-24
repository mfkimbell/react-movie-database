export const genres = [
  { _id: "5b21ca3eeb7f6fbccd471818", name: "Action" },
  { _id: "5b21ca3eeb7f6fbccd471814", name: "Comedy" },
  { _id: "5b21ca3eeb7f6fbccd471820", name: "Thriller" },
  { _id: "5b21ca3eeb7f6fbccd471824", name: "Fantasy" },
  { _id: "5b21ca3eeb7f6fbccd471828", name: "Romance" },
  { _id: "5b21ca3eeb7f6fbccd471832", name: "Sci-Fi" },
];

export function getGenres() {
  return genres.filter(g => g);
}

