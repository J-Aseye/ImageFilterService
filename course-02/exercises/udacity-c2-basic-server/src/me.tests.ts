import { concat } from './me';

import { expect } from 'chai';
import 'mocha';

describe ('addfunction',() =>
{
    it('should add Joyce and Abena', () => {
        const result = concat('Joyce','Abena');
        expect(result).to.equal('JoyceAbena');
      });

    it('should throw an error if either string is empty', () => {
        const result = concat('','Abena')||concat('Joyce','');
        expect(result).to.equal('JoyceAbena');
      });

      it('should throw an error if either string is empty', () => {
        expect(()=>{ concat('Joyce','')||concat('','Abena') }).to.throw('No string found')
        //expect(()=>{ concat('','Abena') }).to.throw('No String Found')
      });
}

)