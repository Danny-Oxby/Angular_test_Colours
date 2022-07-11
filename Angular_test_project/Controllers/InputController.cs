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
            //List<SampleModel> value = new List<SampleModel>();
            //try
            //{
            //    value = new List<SampleModel>(batch.GetAllBatchSample(id));
            //}
            //catch(Exception ex)
            //{
            //    _ = MessageBox.Show(ex.Message);
            //}
        }

        // POST api/<InputController>
        [HttpPost]
        public void Post([FromBody] string value) //FromBody allows the values to be passed in as parameters, otherwise its passed in the route 
        {
        }

        // PUT api/<InputController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<InputController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
