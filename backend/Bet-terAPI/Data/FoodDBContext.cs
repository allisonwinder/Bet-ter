using Microsoft.EntityFrameworkCore;

namespace Bet_terAPI.Data
{
    public class FoodDBContext : DbContext
    {
        public FoodDBContext (DbContextOptions<FoodDBContext> options) : base(options) { }

        public DbSet<MarriotFood> Foods { get; set; }
    }
}
