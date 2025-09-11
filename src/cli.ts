// ts 변환은 tsconfig.json 있는 루트에서
// tsc cli.ts -> node cli.js

import { MyLinkedList } from "./myLinkedList.js";
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const myList = new MyLinkedList();

function askForInput() {
  const text = `
  명령어를 입력하세요
   - addLast [데이터] : 리스트의 마지막에 데이터 추가
   - get [인덱스] : 인덱스의 데이터 조회
   - delete [인덱스] : 인덱스의 데이터 삭제
   - display: 리스트 조회
   - q : 프로그램 종료
  > `;

  rl.question(text, inputData);
}

function displayList() {
  console.log("--- 리스트 전체 데이터 ---");
  let index = 0;
  for (const item of myList) {
    console.log(`${index++}: ${item}`);
  }
  console.log("-------------------------");
}

function inputData(input: string) {
  // 입력 분할
  const [command, ...args] = input.split(" "); // 'get 1' -> ['get', '1']
  const index = parseInt(args[0], 10); // args의 첫번째 요소를 10진법으로 변환

  // 입력받은 데이터를 리스트에 추가
  switch (command) {
    case "addLast":
      myList.addLast(args.join(" "));
      console.log(`✅ 데이터가 추가되었습니다.`);
      break;
    case "get":
      const data = myList.get(index);
      if (data) {
        console.log(`➡️ ${index}번째 데이터: ${data}`);
      } else {
        console.log(`❌ 해당 인덱스에 데이터가 없습니다.`);
      }
      break;
    case "delete":
      const deleteData = myList.delete(index);
      if (deleteData) {
        console.log(`✅ 데이터가 삭제되었습니다: ${deleteData}`);
      } else {
        console.log(`❌ 해당 인덱스에 데이터가 없습니다.`);
      }
      break;
    case "display":
      displayList();
      return;
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

rl.on("close", () => {
  console.log("프로그램을 종료합니다.");
  process.exit();
});
