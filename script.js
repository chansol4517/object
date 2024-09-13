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
	this.name = props.name;
	this.age = props.age || 20; //대입되는 값뒤에 ||연산자를 입력하면 해당 값이 undefined대신 대체값을 설정
	this.isFemale = props.isFemale;
}

//아래와 같이 new 연산자를 이용해서 Student 생성자 함수 호출하면
//인스턴스라는 특별한 복사본 객체를 생성가능
//인스턴스 객체는 같은 생성자함수를 통해서 생성된 모든 인스턴스들이 공유할 수 있는 prototype이라는 공간을 공유
//prototype: 해당 복사본 객체들이 공통적으로 활용해야 되는 함수를 등록 (메서드)
const studentCopy1 = new Student({ name: 'Emily', isFemale: true });
const studentCopy2 = new Student({ name: 'David', isFemale: false });
const studentCopy3 = new Student({ name: 'Michael', isFemale: false, age: 19 });
console.log(studentCopy1);
console.log(studentCopy2);
console.log(studentCopy3);
