// https://inpa.tistory.com/entry/JAVA-%E2%98%95-LinkedList-%EA%B5%AC%EC%A1%B0-%EC%82%AC%EC%9A%A9%EB%B2%95-%EC%99%84%EB%B2%BD-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0
// https://www.freecodecamp.org/korean/news/implementing-a-linked-list-in-javascript/
// https://sj0826.github.io/structure/structure-%EC%97%B0%EA%B2%B0%EB%A6%AC%EC%8A%A4%ED%8A%B8/

// tsc myLinkedList.js

class Node<T> {
  public data: T;
  public next: Node<T> | null;

  constructor(data: T) {
    this.data = data; // 전달받은 데이터를 노드 data에 할당
    this.next = null; // 다음 노드 초기화
  }
}

class MyLinkedList<T> {
  private head: Node<T> | null = null;
  private length: number = 0;

  // constructor() {
  //   this.head = null; // 리스트 시작점
  //   this.length = 0; // 리스트 크기
  // }

  // // 리스트 순회
  // *[Symbol.iterator]() {
  //   let current = this.head;
  //   while (current) {
  //     yield current.data; // yield 키워드를 사용해 값 반환
  //     current = current.next;
  //   }
  // }

  // 1. data 추가 ---------------------------------------
  add(index: number, data: T): void {
    // i가 현재 연결 리스트보다 크거나 음수일 때
    if (index > this.length || index < 0) {
      throw new Error("범위 초과");
    }

    const newNode = new Node<T>(data);

    if (index === 0) {
      // 헤드 이동
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;

      //   삽입할 i 직전까지 반복문으로 이동
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }
      newNode.next = currentNode!.next;
      currentNode!.next = newNode;
    }

    this.length++;
  }

  //   마지막 노드에 data 추가
  addLast(data: T) {
    this.add(this.length, data);
  }

  // 2. i번째 노드 data return -------------------------------
  get(index: number) {
    if (index >= this.length || index < 0) {
      throw new Error("인덱스 없음");
    }

    // 노드 순회
    let current: Node<T> | null = this.head;
    let count = 0;

    while (count < index) {
      if (current === null) {
        throw new Error("예상치 못한 오류: 노드에 접근할 수 없습니다.");
      }
      current = current.next;
      count++;
    }

    // 마지막에 current는 null이 아니므로 !로 단언하여 data에 접근
    return current!.data;
  }

  // 3. i번째 노드 삭제 ------------------------------------
  delete(index: number) {
    if (index >= this.length || index < 0) {
      throw new Error("제거 불가");
    }

    if (index == 0) {
      let deletedNode: Node<T> | null = this.head;
      if (deletedNode === null) {
        throw new Error("예상치 못한 오류: 노드에 접근할 수 없습니다.");
      }
      this.head = this.head!.next;
      this.length--;

      return deletedNode;
    } else {
      let currentNode: Node<T> | null = this.head;
      if (currentNode === null) {
        throw new Error("예상치 못한 오류: 노드에 접근할 수 없습니다.");
      }

      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode!.next;
      }

      // 제거할 노드는 반환되어야 하므로 변수에 저장
      let deletedNode: Node<T> | null = currentNode!.next;
      currentNode!.next = currentNode!.next!.next;
      this.length--;

      return deletedNode;
    }
  }

  deleteLast() {
    return this.delete(this.length - 1);
  }
}

module.exports = { Node, MyLinkedList };
