'use strict';
var expect = require('chai').expect,
    blockquote = require('./index');

describe('block-quote', () => {
    it('trims beginning/end wheitespace', () => {
        var str = blockquote`      2B or not 2A
        `;
        //console.log(str);
        expect(str).to.equal('2B or not 2A');
    });
    
    it('removes the indent in the beginning of each line', () => {
        var str = blockquote`
            Yennefer
            Triss
            Shani
        `;
        //console.log(str)
        expect(str).to.eql("Yennefer\nTriss\nShani");
    });

    it('keeps indent when its larger that the first lines indent', () => {
        var str = blockquote`
            Friendly Arm
                Khalid
                Jaheira
            Nashkell
                Minsk
        `;
        //console.log(str)
        expect(str).to.equal(
            "Friendly Arm\n    Khalid\n    Jaheira\nNashkell\n    Minsk"
        );
    });

    it('indentation is correct when nesting', () => {
        var friendly_arm = blockquote`
            Khalid
            Jaheira
        `;
        var nashkell = blockquote`
            Minsk
        `;
        var str = blockquote`
            Friendly Arm
                ${friendly_arm}
            Nashkell
                ${nashkell}
        `;
        //console.log(str)
        expect(str).to.equal(
            "Friendly Arm\n    Khalid\n    Jaheira\nNashkell\n    Minsk"
        );
    });

    it.skip('FIXME: im not sure what should happen in this case', () => {
        var str = blockquote`Friendly Arm
            Khalid
            Jaheira
        `;
        //console.log(str);
        expect(str).to.eql(
            "Friendly Arm\n            Khalid\n            Jaheira"
        );
    })
});
