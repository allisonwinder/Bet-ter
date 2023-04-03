using Bet_terAPI.Data;
using Microsoft.AspNetCore.Mvc;

namespace Bet_terAPI.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : Controller
    {
        private FoodDBContext context;
        public FoodController(FoodDBContext temp)
        {
            context = temp;
        }
        public IEnumerable<MarriotFood> Get()
        {
            var x = context.Foods.ToArray();
            return context.Foods.ToArray();
        }
    }
}
