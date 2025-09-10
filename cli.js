const { MyLinkedList } = require("./myLinkedList");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const myList = new MyLinkedList();

function inputData() {
  rl.question("리스트에 추가할 데이터를 입력하세요 (종료: q) : ", (answer) => {
    // 'q'를 입력하면 프로그램 종료
    if (answer.toLowerCase() === "q") {
      rl.close();
      return;
    }

    // 입력받은 데이터를 리스트에 추가
    myList.add(answer);
    console.log(
      `[${answer}]이(가) 리스트에 추가되었습니다. 현재 리스트 크기: ${myList.size()}`
    );

    // 다시 입력을 받기 위해 함수 재귀 호출
    askForInput();
  });
}

// 프로그램 시작
console.log("--- MyLinkedList 사용자 입력 프로그램 ---");
inputData();

rl.on("close", () => {
  console.log("프로그램을 종료합니다.");
  process.exit();
});
