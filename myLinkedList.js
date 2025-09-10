// https://inpa.tistory.com/entry/JAVA-%E2%98%95-LinkedList-%EA%B5%AC%EC%A1%B0-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0
// https://www.freecodecamp.org/korean/news/implementing-a-linked-list-in-javascript/
// https://sj0826.github.io/structure/structure-%EC%97%B0%EA%B2%B0%EB%A6%AC%EC%8A%A4%ED%8A%B8/

// node myLinkedList.js

class Node {
  constructor(data) {
    this.data = data; // 전달받은 데이터를 노드 data에 할당
    this.next = null; // 다음 노드 초기화
  }
}
class MyLinkedList {
  constructor() {
    this.head = null; // 리스트 시작점
    this.length = 0; // 리스트 크기
  }

  // 리스트 순회
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current.data; // yield 키워드를 사용해 값 반환
      current = current.next;
    }
  }

  //   data 추가
  add(index, data) {
    // i가 현재 연결리스트보다 크거나 음수일 때
    if (index > this.length || index < 0) {
      throw new Error("범위 초과");
    }

    let newNode = new Node(data);

    if (index == 0) {
      // 헤드 이동
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;

      //   삽입할 i 전까지 반복문으로 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
  }

  //   마지막 노드에 data 추가
  addLast(data) {
    this.add(this.length, data);
  }

  //   i번째 노드 data return
  get(index) {}

  //   i번째 노드 삭제
  delete(index) {}
}

module.exports = { Node, MyLinkedList };
