using System.ComponentModel.DataAnnotations;

namespace Bet_terAPI.Data
{
    public class MarriotFood
    {
        [Key]
        public int FoodId { get; set; }
        public string? EventName { get; set; }

        public string? Vendor { get; set; }
        public int? Rating { get; set; }
    }
}
