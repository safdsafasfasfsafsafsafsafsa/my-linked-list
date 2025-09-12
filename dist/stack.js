"use strict";
// https://aiday.tistory.com/125
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyStack = void 0;
// LIFO
const myLinkedList_1 = require("./myLinkedList");
class MyStack {
    list;
    constructor() {
        this.list = new myLinkedList_1.MyLinkedList();
    }
    // 스택의 끝에 데이터를 추가
    push(data) {
        this.list.addLast(data);
    }
    // 스택의 끝에서 데이터를 제거
    pop() {
        // MyLinkedList의 deleteLast() 메서드를 사용하여 마지막 노드를 삭제
        return this.list.deleteLast();
    }
    // 스택의 최상단 데이터 확인
    peek() {
        // MyLinkedList의 get 메서드로 마지막 요소를 확인
        return this.list.get(this.list.length - 1);
    }
    // 스택의 크기 반환
    size() {
        return this.list.length;
    }
    display() {
        console.log("--- 리스트 전체 데이터 ---");
        let index = 0;
        for (const item of this.list) {
            console.log(`${index++}: ${item}`); // 호출마다 index 추가
        }
        console.log("-------------------------");
    }
}
exports.MyStack = MyStack;
// export class MyStack<T> {
//   // storage: 숫자 키(key: number)를 통해 타입 T의 값을 저장할 수 있는 객체
//   private storage: { [key: number]: T } = {};
//   private size: number = 0;
//   // T를 넣고 리턴은 없음
//   push(element: T): void {
//     this.size++;
//     this.storage[this.size] = element;
//   }
//   // 호출하면 T를 리턴
//   pop(): T {
//     const removed = this.storage[this.size];
//     delete this.storage[this.size]; // 객체의 특정 키 & 연결된 값 삭제
//     this.size--;
//     return removed;
//   }
//   // 최상단 리턴
//   top(): T {
//     return this.storage[this.size];
//   }
// }
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
