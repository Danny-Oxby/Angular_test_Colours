export interface ISampleModel {

  SerialNumber: number;

  sample_Id: number;
  sampleType: string;
  customerSampleWeigth: number;
  actualSampleWeigth: number;
  weight_Unit: string;
  barNumber: string;
  returnSample: boolean;
  approved: boolean;

  sampleCertificateNotes: string;
  sampleLabNotes: string;
  sampleAdminNotes: string;
  customerSampleReference: string;
}

export class SampleModel implements ISampleModel {
  SerialNumber: number = 0;
  sample_Id: number = 0;
  sampleType: string = "";
  customerSampleWeigth: number = 0;
  actualSampleWeigth: number = 0;
  weight_Unit: string = "";
  barNumber: string = "";
  returnSample: boolean = false;
  approved: boolean = false;
  sampleCertificateNotes: string = "";
  sampleLabNotes: string = "";
  sampleAdminNotes: string = "";
  customerSampleReference: string = "";

}
