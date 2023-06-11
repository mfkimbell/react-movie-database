
using Microsoft.EntityFrameworkCore;

namespace movie_api.Models
{
    public class MovieContext : DbContext
    {
        public MovieContext(DbContextOptions<MovieContext> options): base(options)
        {
            
        }

        public DbSet<Movie> Movies { get; set; }
        


    }
}


