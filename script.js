//객체 리터럴 방식
const student1 = {
	name: 'andy',
	age: 20,
	isFemale: false
};

//객체명.propertyKey
console.log(student1.name);

//연관배열 형식
console.log(student1['age']);

//객체의 property key에 함수등록 가능

const student2 = {
	name: 'mark',
	age: 26,
	isFemale: true,
	inform: () => {
		// console.log("hi my name is mark i'm siger");
		console.log(this);
	}
};

//객체안에 등록된 함수 : 메서드(prototype에 등록된 함수:메서드)
//자바스크립트에서는 이처럼 객체의 property로 등록가능하거나 함수의 인수로 전달가능하거나
//변수에 대입할 수 있는 함수를 일급 객체라고 표현
student2.inform();

//객체리터럴 안쪽에서의 this: widnow객체 (전역객체)

//생성자를 통한 인스턴스를 복사하는 법
function Student(props) {
	this.name = props.name; // 생성자안쪽의 this: 해당 생성자를 통해서 앞으로 복사가될 인스턴스 객체를 지칭엥ㅇ
	this.age = props.age || 20; //대입되는 값뒤에 ||연산자를 입력하면 해당 값이 undefined대신 대체값을 설정
	this.isFemale = props.isFemale;
}
Student.prototype.inform = function () {
	console.log('my name is ' + this.name + ' and i am ' + this.age + 'year old.');
};

//아래와 같이 new 연산자를 이용해서 Student 생성자 함수 호출하면
//인스턴스라는 특별한 복사본 객체를 생성가능
//인스턴스 객체는 같은 생성자함수를 통해서 생성된 모든 인스턴스들이 공유할 수 있는 prototype이라는 공간을 공유
//prototype: 해당 복사본 객체들이 공통적으로 활용해야 되는 함수를 등록 (메서드)
const studentCopy1 = new Student({ name: 'Emily', isFemale: true });
const studentCopy2 = new Student({ name: 'David', isFemale: false });
const studentCopy3 = new Student({ name: 'Michael', isFemale: false, age: 19 });
const studentCopy4 = new Student({ name: 'Paul', isFemale: false, addres: 'Seoul' }); //address 값은 안나온다 this값 안에 없기 때문에
//생성자 함수를 통해서 인스턴스라는 복사본을 만들면 약속된 정보값과 매칭되지 않는 값을 거를 수 있음
console.log(studentCopy1);
console.log(studentCopy2);
console.log(studentCopy3);
console.log(studentCopy4);

studentCopy1.inform();
studentCopy2.inform();

/*
  new 생성자함수()  --> 인스턴스라는 공통의 틀을 가지고있는 복사본 객체를 대량 생간 가능
  각각의 인스턴스들을 매서드라는 특정 함수를 공유하면서 자유롭게 호출 가능
  인스턴스라는 복사본 객체를 생성해서 작업하는 프로그래밍 방법론 : 객체지향 프로그래밍
  객체지향 프로그래밍을 쓰는 이유 : 동일한 구조의 객체를 안전하게 생성해서 쓰기위함, 반복되는 함수를 인스턴스별로 적용해서 재활용하기 위함
  */
