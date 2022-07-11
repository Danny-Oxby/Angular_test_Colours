namespace ModelCollection
{
    public class SampleModel
    {
        public int SerialNumber { get; set; } //UNIQUE pair with FK

        public long Sample_Id { get; set; } //PK UNIQUE
        public string SampleType { get; set; }
        public decimal? CustomerSampleWeigth { get; set; }
        public decimal? ActualSampleWeigth { get; set; }
        public string Weight_Unit { get; set; }
        public string BarNumber { get; set; } //Nullable value is needed here
        public bool ReturnSample { get; set; } //is the sample being returned to the customer
        public bool Approved { get; set; } //has the sample been approved

        public string SampleCertificateNotes { get; set; }
        public string SampleLabNotes { get; set; }
        public string SampleAdminNotes { get; set; }
        public string CustomerSampleReference { get; set; } = "";
    }
}
