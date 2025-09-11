// https://aiday.tistory.com/125

// LIFO

export class MyStack<T> {
  // storage: 숫자 키(key: number)를 통해 타입 T의 값을 저장할 수 있는 객체
  private storage: { [key: number]: T } = {};
  private size: number = 0;

  // T를 넣고 리턴은 없음
  push(element: T): void {
    this.size++;
    this.storage[this.size] = element;
  }

  // 호출하면 T를 리턴
  pop(): T {
    const removed = this.storage[this.size];
    delete this.storage[this.size]; // 객체의 특정 키 & 연결된 값 삭제
    this.size--;
    return removed;
  }

  // 최상단 리턴
  top(): T {
    return this.storage[this.size];
  }
}

// export class MyStack<T> {
//   // 스택의 데이터를 저장할 배열
//   private storage: T[] = [];

//   constructor() {} // constructor는 비어 있어도 됨

//   push(element: T): void {
//     this.storage.push(element);
//   }

//   pop(): T | undefined {
//     return this.storage.pop();
//   }

//   top(): T | undefined {
//     return this.storage[this.storage.length - 1];
//   }

//   get size(): number {
//     return this.storage.length;
//   }
// }
