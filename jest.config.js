module.exports={
    globals:{
        "ts-jest":{
            tsConfig: "<rootDir>/tsconfig.json"
        }
    },
    'moduleFileExtensions':[
        'js',
        'json',
        'ts'
    ],
    roots:[
        "<rootDir>/_tests_/unit/"
    ],
    'testRegex': '(/__tests__/.*|(\\.|-|/)(test|spec))\\.ts?$'
}