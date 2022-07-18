using Microsoft.AspNetCore.Mvc;
using ModelCollection;
using System.Windows;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Angular_test_project.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class InputController : ControllerBase
    {
        private BatchService batch;
        public InputController()
        {
            batch = new BatchService();
        }

        // GET: api/<InputController>
        [HttpGet]
        public string Get()
        {
            return "value";
        }

        // GET api/<InputController>/5
        [HttpGet("{id}")]
        public IList<SampleModel> Get(int id)
        {
            return batch.GetAllBatchSample(id);
        }

        [HttpGet]
        [Route("GetTwoInput")] //require extra infomration for the http call 
        public string Get(string value, string input) 
        {
            return "clicked - " + value + " " + input;
        }

        // POST api/<InputController>
        [HttpPost]
        public string Post() 
        {
            return "clicked";
        }
    }
}
