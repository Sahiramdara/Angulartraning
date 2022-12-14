var CountSample = /** @class */ (function () {
    function CountSample(stringValue) {
        this.stringValue = stringValue;
    }
    CountSample.prototype.getCount = function () {
        var vowel = ['a', 'e', 'i', 'o', 'u'];
        var result = 0;
        for (var _i = 0, _a = this.stringValue; _i < _a.length; _i++) {
            var char = _a[_i];
            if (vowel.includes(char, 1)) {
                result = this.getVowelCount(this.stringValue);
                console.log("Total vowel count is " + result);
            }
            else {
                result = this.getConstCount(this.stringValue);
                console.log("Total Const count is " + result);
            }
            break;
        }
    };
    CountSample.prototype.getVowelCount = function (str) {
        var vowelCount = 0;
        var vowel = ['a', 'e', 'i', 'o', 'u'];
        for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
            var char = str_1[_i];
            if (vowel.includes(char)) {
                vowelCount++;
            }
        }
        return vowelCount;
    };
    CountSample.prototype.getConstCount = function (str) {
        var constCount = 0;
        var vowel = ['a', 'e', 'i', 'o', 'u'];
        for (var _i = 0, str_2 = str; _i < str_2.length; _i++) {
            var char = str_2[_i];
            if (!vowel.includes(char)) {
                constCount++;
            }
        }
        return constCount;
    };
    return CountSample;
}());
var response = new CountSample('Sahiram');
response.getCount();
