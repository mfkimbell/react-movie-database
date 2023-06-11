namespace movie_api.Models
{
    public class Movie
    {
        public string? Id { get; set; }

        public string? Title { get; set; }

        public string? Genre { get; set; }

        public int NumberInStock { get; set; }

        public double DailyRentalRate { get; set; }

        public Boolean IsLiked { get; set; }
    }
}
