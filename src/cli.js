"use strict";
// tsc cli.ts -> node cli.js
Object.defineProperty(exports, "__esModule", { value: true });
var myLinkedList_1 = require("./myLinkedList");
var readline = require("readline");
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
var myList = new myLinkedList_1.MyLinkedList();
function askForInput() {
    var text = "\n  \uBA85\uB839\uC5B4\uB97C \uC785\uB825\uD558\uC138\uC694\n   - addLast [\uB370\uC774\uD130] : \uB9AC\uC2A4\uD2B8\uC758 \uB9C8\uC9C0\uB9C9\uC5D0 \uB370\uC774\uD130 \uCD94\uAC00\n   - get [\uC778\uB371\uC2A4] : \uC778\uB371\uC2A4\uC758 \uB370\uC774\uD130 \uC870\uD68C\n   - delete [\uC778\uB371\uC2A4] : \uC778\uB371\uC2A4\uC758 \uB370\uC774\uD130 \uC0AD\uC81C\n   - q : \uD504\uB85C\uADF8\uB7A8 \uC885\uB8CC\n  > ";
    rl.question(text, inputData);
}
function inputData(input) {
    // 입력 분할
    var _a = input.split(" "), command = _a[0], args = _a.slice(1); // 'get 1' -> ['get', '1']
    var index = parseInt(args[0], 10); // args의 첫번째 요소를 10진법으로 변환
    // 입력받은 데이터를 리스트에 추가
    switch (command) {
        case "addLast":
            myList.addLast(args.join(" "));
            console.log("\u2705 \uB370\uC774\uD130\uAC00 \uCD94\uAC00\uB418\uC5C8\uC2B5\uB2C8\uB2E4.");
            break;
        case "get":
            var data = myList.get(index);
            if (data) {
                console.log("\u27A1\uFE0F ".concat(index, "\uBC88\uC9F8 \uB370\uC774\uD130: ").concat(data));
            }
            else {
                console.log("\u274C \uD574\uB2F9 \uC778\uB371\uC2A4\uC5D0 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
            }
            break;
        case "delete":
            var deleteData = myList.delete(index);
            if (deleteData) {
                console.log("\u2705 \uB370\uC774\uD130\uAC00 \uC0AD\uC81C\uB418\uC5C8\uC2B5\uB2C8\uB2E4: ".concat(deleteData));
            }
            else {
                console.log("\u274C \uD574\uB2F9 \uC778\uB371\uC2A4\uC5D0 \uB370\uC774\uD130\uAC00 \uC5C6\uC2B5\uB2C8\uB2E4.");
            }
            break;
        case "q":
            rl.close();
            return;
        default:
            console.log("알 수 없는 명령어입니다.");
    }
    // 다시 입력을 받기 위해 함수 재귀 호출
    askForInput();
}
// 프로그램 시작
console.log("--- MyLinkedList 사용자 입력 프로그램 ---");
askForInput();
rl.on("close", function () {
    console.log("프로그램을 종료합니다.");
    process.exit();
});
