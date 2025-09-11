// https://aiday.tistory.com/125

// FIFO: rear로 들어가고 front에서 나감

export class MyQueue<T> {
  // storage: 숫자 키(key: number)를 통해 타입 T의 값을 저장할 수 있는 객체
  private storage: { [key: number]: T } = {};
  private front: number = 0;
  private rear: number = 0;

  size(): number {
    return this.rear - this.front;
  }

  // rear에 넣고 다음 칸으로
  enqueue(element: T): void {
    this.storage[this.rear] = element;
    this.rear++;
  }

  // 추출한 뒤 front 증가, 서로 num 같으면 초기화
  dequeue(): T {
    let removed = this.storage[this.front];
    delete this.storage[this.front];
    this.front++;

    if (this.front === this.rear) {
      this.front = 0;
      this.rear = 0;
    }

    return removed;
  }
}
