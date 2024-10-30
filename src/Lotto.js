class Lotto {
  #numbers;

  constructor(numbers) {
    this.#validateLength(numbers);
    this.#numbers = numbers;
  }

  #validateLength(numbers) {
    if (numbers.length !== 6) {
      throw new Error('[ERROR] 로또 번호는 6개여야 합니다.');
    }
  }
}

export default Lotto;
