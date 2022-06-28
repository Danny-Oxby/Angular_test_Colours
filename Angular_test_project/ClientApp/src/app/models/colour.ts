import { Icolour } from './Icolour';



export class colour implements Icolour {
    constructor(public colour: string, public hexvalue: string) {
    }
}
