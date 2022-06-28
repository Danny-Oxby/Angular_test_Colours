using Microsoft.AspNetCore.Mvc;
using ModelCollection;

namespace Angular_test_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColourController : ControllerBase
    {
        private readonly ColourService colourService = new();

        [HttpPost] //this method gets called when the post method is called
        public IActionResult Create()
        {
            return Ok("testing return on create");
        }

        [HttpGet] //this method gets called when the get method is called
        public IList<ColourModel> ReturnColourList()
        {
            return colourService.ReturnList();
        }

    }
}

/*
 * https://localhost:7010/
 */