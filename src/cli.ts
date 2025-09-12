// ts 변환은 tsconfig.json 있는 루트에서
// npm run build -> node dist/cli.js

import { MyQueue } from "./queue";
import { MyStack } from "./stack";

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 저장 방식 -----------------------------------
let dataStructure: MyQueue<any> | MyStack<any> | null = null;

function selectDataStructure() {
  const text = `
  사용할 자료구조를 선택하세요
   - (1): 큐
   - (2): 스택
   - (q): 종료
  > `;

  rl.question(text, (answer: string) => {
    if (answer === "1") {
      dataStructure = new MyQueue<string>();
      askForInputQueue();
    } else if (answer === "2") {
      dataStructure = new MyStack<string>();
      askForInputStack();
    } else if (answer === "q") {
      rl.close();
      return;
    } else {
      console.log("다시 선택해주세요.");
      selectDataStructure();
    }
  });
}

// 큐 ------------------------------
function askForInputQueue() {
  const text = `
  명령어를 입력하세요
   - (e)nqueue [데이터] : 큐의 끝에 데이터 추가
   - (d)equeue : 큐의 앞에서 데이터 삭제
   - (p)eek: 큐의 앞 데이터 확인
   - (s)ize : 리스트 크기
   - (dis)play: 리스트 조회
   - (q) : 프로그램 종료
  > `;

  rl.question(text, inputDataQueue);
}

function inputDataQueue(input: string) {
  const [command, ...args] = input.split(" "); // 'get 1' -> ['get', '1']
  // const index = parseInt(args[0], 10); // args의 첫번째 요소를 10진법으로 변환

  // 입력받은 데이터를 리스트에 추가
  switch (command) {
    case "e":
    case "enqueue":
      if (dataStructure instanceof MyQueue) {
        const data = args.join(" ");
        dataStructure.enqueue(data);
        console.log(`✅ 데이터가 추가되었습니다.`);
      } else {
        console.log(`❌ 큐가 선택되지 않았습니다.`);
      }
      break;
    case "d":
    case "dequeue":
      if (dataStructure instanceof MyQueue) {
        dataStructure.dequeue();
        console.log(`✅ 데이터가 삭제되었습니다.`);
      } else {
        console.log(`❌ 큐가 선택되지 않았습니다.`);
      }
      break;
    case "p":
    case "peek":
      if (dataStructure instanceof MyQueue) {
        const data = dataStructure.peek();
        console.log(`✅ 큐 front 데이터: ${data}`);
      } else {
        console.log(`❌ 큐가 선택되지 않았습니다.`);
      }
      break;
    case "s":
    case "size":
      if (dataStructure instanceof MyQueue) {
        const size = dataStructure.size();
        console.log(`✅ 데이터 크기: ${size}`);
      } else {
        console.log(`❌ 큐가 선택되지 않았습니다.`);
      }
      break;
    case "dis":
    case "display":
      if (dataStructure instanceof MyQueue) {
        dataStructure.display();
      } else {
        console.log(`❌ 큐가 선택되지 않았습니다.`);
      }
      break;
    case "q":
      rl.close();
      return;
    default:
      console.log("알 수 없는 명령어입니다.");
  }

  // 다시 입력을 받기 위해 함수 재귀 호출
  askForInputQueue();
}

// 스택 -------------------------------------------
function askForInputStack() {
  const text = `
  명령어를 입력하세요
   - (pu)sh [데이터] : 스택의 최상단에 데이터 추가
   - (po)p : 스택의 최상단 데이터 삭제
   - (pe)ek: 스택의 최상단 데이터 확인
   - (s)ize : 리스트 크기
   - (dis)play: 리스트 조회
   - (q) : 프로그램 종료
  > `;

  rl.question(text, inputDataStack);
}

function inputDataStack(input: string) {
  const [command, ...args] = input.split(" "); // 'get 1' -> ['get', '1']
  // const index = parseInt(args[0], 10); // args의 첫번째 요소를 10진법으로 변환

  switch (command) {
    case "pu":
    case "push":
      if (dataStructure instanceof MyStack) {
        const data = args.join(" ");
        dataStructure.push(data);
        console.log(`✅ 데이터가 추가되었습니다.`);
      } else {
        console.log(`❌ 스택이 선택되지 않았습니다.`);
      }
      break;
    case "po":
    case "pop":
      if (dataStructure instanceof MyStack) {
        dataStructure.pop();
        console.log(`✅ 데이터가 삭제되었습니다.`);
      } else {
        console.log(`❌ 스택이 선택되지 않았습니다.`);
      }
      break;
    case "pe":
    case "peek":
      if (dataStructure instanceof MyStack) {
        const data = dataStructure.peek();
        console.log(`✅ 스택 최상단 데이터: ${data}`);
      } else {
        console.log(`❌ 스택이 선택되지 않았습니다.`);
      }
      break;
    case "s":
    case "size":
      if (dataStructure instanceof MyStack) {
        const size = dataStructure.size();
        console.log(`✅ 데이터 크기: ${size}`);
      } else {
        console.log(`❌ 스택이 선택되지 않았습니다.`);
      }
      break;
    case "dis":
    case "display":
      if (dataStructure instanceof MyStack) {
        dataStructure.display();
      } else {
        console.log(`❌ 스택이 선택되지 않았습니다.`);
      }
      break;
    case "q":
      rl.close();
      return;
    default:
      console.log("알 수 없는 명령어입니다.");
  }

  askForInputStack();
}

// 프로그램 시작 ---------------------------------------
console.log("--- MyLinkedList 사용자 입력 프로그램 ---");
selectDataStructure();

rl.on("close", () => {
  console.log("프로그램을 종료합니다.");
  process.exit();
});
