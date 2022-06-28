using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ModelCollection;

namespace Angular_test_project.Controllers
{
    public class RGBController : Controller
    {
        public RGBController()
        {
        }
        public IEnumerable<ColourModel> Colours { get; set; } = new List<ColourModel>();

        private ColourService colourService = new ColourService();

        // GET: RGBController
        public string Index()
        {
            return "Test controller connection";
        }

        public void Details()
        {
            Colours = colourService.ReturnList();
        }

    }
}
        //// GET: RGBController/Details/5
        //public IEnumerable<ColourModel> Details()
        //{
        //    return colourService.ReturnList();
        //}
        //// GET: RGBController/Create
        //public ActionResult Create()
        //{
        //    return View();
        //}

        // POST: RGBController/Create
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Create(IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }

    //    // GET: RGBController/Edit/5
    //    public ActionResult Edit(int id)
    //    {
    //        return View();
    //    }

    //    // POST: RGBController/Edit/5
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Edit(int id, IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }

    //    // GET: RGBController/Delete/5
    //    public ActionResult Delete(int id)
    //    {
    //        return View();
    //    }

    //    // POST: RGBController/Delete/5
    //    [HttpPost]
    //    [ValidateAntiForgeryToken]
    //    public ActionResult Delete(int id, IFormCollection collection)
    //    {
    //        try
    //        {
    //            return RedirectToAction(nameof(Index));
    //        }
    //        catch
    //        {
    //            return View();
    //        }
    //    }
    //}
//}
