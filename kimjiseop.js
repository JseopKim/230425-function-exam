// exampleOne함수는 총 네개의 경우의 수를 분기하며,
// 정수기의 필터처럼 데이터타입과 원하는 값 검출들을 처리하는 함수
// 필요하지 않은 데이터나, 필요한 데이터, 혹은 안정성을 위한
// 조치로 이러한 함수를 작성해 사용할 수 있습니다.
// 몇개의 반복문과 몇개의 조건문이 작성되어 있는데
// 이것을 다른 방식으로 처리가 가능할까요?

// class의 getter와 setter, helper method로 객체지향 방식으로 조합하기도
// 외부함수, 내부함수 구조 혹은 클로저로 '함수지향' 방식으로 조립하기도
// 할 수 있는 자바스크립트의 변형성을 탐구해보시기 바랍니다.

function exampleOne(arr, dataType, itemToFind) {
  if (Array.isArray(arr) === false) {
    console.log("배열이 아닙니다.");
    return false;
  }
  const isDataTypeMatched = (typeof (itemToFind) === dataType);
  const isitemExist = arr.includes(itemToFind);

  if (isDataTypeMatched === true && isitemExist === true) {
    console.log(`${itemToFind} 은(는) 배열에 존재합니다.`);
    return true;
  } else if (isitemExist === false) {
    console.log(`${itemToFind} 은(는) 배열에 존재하지 않습니다.`);
    return false;
  } else if (isDataTypeMatched === false) {
    console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`);
  }

}
// 내부함수 이용
function exampleTwo(arr, dataType, itemToFind) {
  if (Array.isArray(arr) === false) {
    console.log("배열이 아닙니다.");
    return false;
  }

  function isDataTypeMatched() {
    return (typeof (itemToFind) === dataType);
  }

  function isitemExist() {
    return arr.includes(itemToFind);
  }

  if (isDataTypeMatched() === true && isitemExist() === true) {
    console.log(`${itemToFind} 은(는) 배열에 존재하지 않습니다.`);
  } else if (isitemExist() === false) {
    console.log(`${itemToFind} 은(는) 배열에 존재하지 않습니다.`);
  } else if (isDataTypeMatched() === false) {
    console.log(`찾으려는 항목은 ${dataType} 데이터 타입이 아닙니다.`);
  }
}
// class 이용
class exampleThree {
  constructor(arr, dataType, itemToFind) {
    this.arr = arr;
    this.dataType = dataType;
    this.itemToFind = itemToFind;
  }

  get array() {
    return this.arr;
  }

  set array(arr) {
    this._arr = arr;
  }

  get dataType() {
    return this._dataType;
  }

  set dataType(dataType) {
    this._dataType = dataType;
  }

  get itemToFind() {
    return this._itemToFind;
  }

  set itemToFind(itemToFind) {
    this._itemToFind = itemToFind;
  }

  // checker() {
  //   const isDataTypeMatched = (typeof(this.itemToFind) === this.dataType);
  //   const isitemExist = this.arr.includes(this.itemToFind);
  //   if(Array.isArray(this.arr) === false) {
  //     console.log("배열이 아닙니다.");
  //     return false;
  //   }

  //   if(isDataTypeMatched === true && isitemExist === true) {
  //     console.log(`${this.itemToFind} 은(는) 배열에 존재합니다.`);
  //     return true;
  //   } else if(isitemExist === false) {
  //     console.log(`${this.itemToFind} 은(는) 배열에 존재하지 않습니다.`);
  //     return false;
  //   } else if(isDataTypeMatched === false) {
  //     console.log(`찾으려는 항목은 ${this.dataType} 데이터 타입이 아닙니다.`);
  //   }
  // }

  //helper 메서드 부분은 chatgpt로 참고하였습니다.
  //helper 메서드가 무엇인지의 대한 개념도 부족했습니다.
  isDataTypeMatched() {
    return typeof (this.itemToFind) === this.dataType;
  }

  isitemExist() {
    return this.arr.includes(this.itemToFind);
  }

  checker() {
    if (Array.isArray(this.arr) === false) {
      console.log("배열이 아닙니다.");
      return false;
    }

    if (this.isDataTypeMatched() && this.isitemExist()) {
      console.log(`${this.itemToFind} 은(는) 배열에 존재합니다.`);
      return true;
    } else if (!this.isitemExist()) {
      console.log(`${this.itemToFind} 은(는) 배열에 존재하지 않습니다.`);
      return false;
    } else if (!this.isDataTypeMatched()) {
      console.log(`찾으려는 항목은 ${this.dataType} 데이터 타입이 아닙니다.`);
    }
  }
}



const basicData = ["안녕하세요", "어디선가", "입력된", "데이터를", "찾아보는", "함수입니다."];
const bb = "aa";

// console.log(exampleOne(basicData, "string", "어디선가"));
// console.log(exampleOne(basicData, "string", "데이터를"));
let arrcheck = new exampleThree(basicData, "string", "안녕하세요");
arrcheck.checker();


