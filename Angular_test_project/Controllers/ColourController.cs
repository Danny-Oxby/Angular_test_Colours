using Microsoft.AspNetCore.Mvc;
using ModelCollection;

namespace Angular_test_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColourController : ControllerBase
    {
        [HttpPost]
        public IActionResult Create()
        {
            return Ok("testing return on create");
        }

        [HttpGet] //since it call an sql method
        public IList<ColourModel> Get()
        {
            //List<ColourModel> colours = new List<ColourModel>();

            //colours.Add(new ColourModel { colour = "red", hexvalue = "#red" });
            //colours.Add(new ColourModel { colour = "blue", hexvalue = "#blue" });
            //colours.Add(new ColourModel { colour = "green", hexvalue = "#green" });

            //return colours;

            return colourService.ReturnList();
        }
        private ColourService colourService = new ColourService();
    }
}

/*
 * https://localhost:7010/
 */