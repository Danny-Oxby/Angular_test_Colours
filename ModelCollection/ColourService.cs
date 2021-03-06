using System.Collections.Generic;

namespace ModelCollection
{
    public class ColourService
    {
        public ColourService() //seed the colour list
        {
            List<ColourModel> colours = new List<ColourModel>();

            colours.Add(new ColourModel { colour = "red", hexvalue = "#red", value = 1 });
            colours.Add(new ColourModel { colour = "blue", hexvalue = "#blue", value = 5 });
            colours.Add(new ColourModel { colour = "green", hexvalue = "#green", value = 10 });

            ColourList = colours;
        }

        private IList<ColourModel> ColourList { get; set; }

        public IList<ColourModel> ReturnList()
        {
            return ColourList;
        }

        public void AddToList(string colour, string hex)
        {
            ColourList.Add(new ColourModel { colour = colour, hexvalue = hex });
        }

    }
}
