using Npgsql;
using System;
using System.Collections.Generic;

namespace ModelCollection
{
    public class BatchService
    {
        public IList<SampleModel> GetAllBatchSample(long batch_id)
        {
            IList<SampleModel> SampleCollection = new List<SampleModel>();
            using (NpgsqlConnection conn = new NpgsqlConnection(String.Format("Server={0};Port={1}; " +
                    "User Id={2}; Password={3};Database={4};MinPoolSize=3", "192.168.12.133", 5432, "application",
                    "123", "AS2021")))
            {
                /* 
                SELECT sample_id, sample_type.label, customer_weight, actual_weight, sample_lab_notes, 
                sample_certificate_notes, sample_admin_note, customer_sample_reference, serial_number, is_approved, 
                return_sample, unit.type, bar_id
                FROM public.sample inner join sample_type using (sample_type_id)
                inner join unit on sample.weigth_type = unit.unit_id where batch_id = 349;
                */
                using (var cmd = new NpgsqlCommand($"SELECT sample_id, sample_type.label, customer_weight, actual_weight, " +
                    $"sample_lab_notes, sample_certificate_notes, sample_admin_note, customer_sample_reference, serial_number, " +
                    $"is_approved, return_sample, unit.type, bar_id " +
                    $"FROM public.sample inner join sample_type using (sample_type_id) " +
                    $"inner join unit on sample.weigth_type = unit.unit_id where batch_id = :_batch_id;", conn))
                {
                    try
                    {
                        //open a connection to the database
                        conn.Open();
                        cmd.Parameters.AddWithValue(":_batch_id", batch_id);

                        //execute the sql command
                        NpgsqlDataReader lect = cmd.ExecuteReader();
                        //read the results
                        while (lect.Read())
                        {
                            SampleModel sample = new SampleModel() //lect[read by row]
                            {
                                Sample_Id = Convert.ToInt64(lect["sample_id"]), //check if the value returned is typeof DBNull
                                SampleType = lect["label"].ToString() ?? "n/a",
                                SerialNumber = Convert.ToInt32(lect["serial_number"]), //check if the value returned is typeof DBNull
                                BarNumber = lect["bar_id"].ToString() ?? "n/a",

                                //CustomerSampleWeigth = (decimal?)(lect["customer_weight"]),
                                //ActualSampleWeigth = (decimal?)(lect["actual_weight"]),
                                Weight_Unit = lect["type"].ToString() ?? "n/a",

                                SampleLabNotes = lect["sample_lab_notes"].ToString() ?? "n/a",
                                SampleCertificateNotes = lect["sample_certificate_notes"].ToString() ?? "n/a",
                                SampleAdminNotes = lect["sample_admin_note"].ToString() ?? "n/a",
                                CustomerSampleReference = lect["customer_sample_reference"].ToString() ?? "n/a",

                                Approved = Convert.ToBoolean(lect["is_approved"]),
                                ReturnSample = Convert.ToBoolean(lect["return_sample"]),
                            };
                            SampleCollection.Add(sample);
                        }
                    }
                    catch
                    {
                        //print an error message with what error occured and in what method for ease of deugging later
                        throw;
                    }
                }
            }
            return SampleCollection;
        }
    }
}
