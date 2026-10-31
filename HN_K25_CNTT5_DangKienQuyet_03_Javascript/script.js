let students =[
{ studentCode: "STU-001", fullName: "Đặng Gia Huy",
courseName: "Tieng Anh Giao Tiep",
age: 19, placementScore: 65 },
{ studentCode: "STU-002", fullName: "Phan Ngọc Lan",
courseName: "Tieng Anh Hoc Thuat",
age: 24, placementScore: 72 },
{ studentCode: "STU-003", fullName: "Trưong Bảo Ngọc",
courseName: "Tieng Anh Thieu Nhi",
age: 9, placementScore: 40 }
];
function findStudentIndex(code) {
  for (let i = 0; i < students.length; i++) {
    if (students[i].studentCode === code) {
      return i;
    }
  }
  return -1;
}
function displayStudents(list) {
  if (list.length === 0) {
    console.log("Danh sách học viên trống");
  }
  for (let i = 0; i < list.length; i++) {
    let student = list[i];
    console.log(
      i + 1,
      student.studentCode,
      student.fullName,
      student.courseName,
      "Tuổi:", student.age,
      "Điểm:", student.placementScore
    );
  }
  console.log("Tổng số học viên:", list.length);
}
function addStudent() {
  let code = prompt("Nhập mã học viên:");
  if (code === null) {
    return;
  }
  code = code.trim().toUpperCase();
  if (code.length < 6 || !code.startsWith("STU-")) {
    console.log("Mã không hợp lệ");
    return;
  }
  if (findStudentIndex(code) !== -1) {
    console.log("Mã đã tồn tại");
    return;
  }
  let name = prompt("Nhập họ tên:");
  if (name === null) {
    return;
  }
  let course = prompt("Nhập khóa học:");
  if (course === null) {
    return;
  }
  name = name.trim();
  course = course.trim();
  if (name === "" || course === "") {
    console.log("Không được để trống");
    return;
  }
  let ageInput = prompt("Nhập tuổi:");
  if (ageInput === null) {
    return;
  }
  let scoreInput = prompt("Nhập điểm đầu vào:");
  if (scoreInput === null) {
    return;
  }
  let age = Number(ageInput);
  let score = Number(scoreInput);
  if (!Number.isInteger(age) || age < 6 || age > 60) {
    console.log("Tuổi không hợp lệ");
    return;
  }
  if (!Number.isInteger(score) || score < 0 || score > 100) {
    console.log("Điểm không hợp lệ");
    return;
  }
  students.push({
    studentCode: code,
    fullName: name,
    courseName: course,
    age: age,
    placementScore: score
  });
  console.log("Thêm thành công");
}
function updateStudent() {
  console.log("Chức năng chưa hoàn thành");
}
function deleteStudent() {
  let code = prompt("Nhập mã cần xóa:");
  if (code === null) {
    return;
  }
  code = code.trim().toUpperCase();
  let index = findStudentIndex(code);

  if (index === -1) {
    console.log("Không tìm thấy học viên có mã " + code);
    return;
  }
  let answer = prompt("Xóa học viên? Y&N:");
  if (answer !== null && answer.trim().toUpperCase() === "Y") {
    students.splice(index, 1);
    console.log("Đã xóa, còn", students.length, "học viên");
  } else {
    console.log("Đã hủy thao tác xóa");
  }
}
function searchStudents() {
  let keyword = prompt("Nhập khóa học:");
  if (keyword === null || keyword.trim() === "") {
    console.log("Chưa nhập từ khóa tìm kiếm");
    return;
  }
  keyword = keyword.trim().toLowerCase();
  let result = [];
  for (let student of students) {
    if (student.courseName.toLowerCase().includes(keyword)) {
      result.push(student);
    }
  }
  if (result.length === 0) {
    console.log("Không tìm thấy học viên phù hợp");
  } else {
    displayStudents(result);
  }
}
let choice;
do {
  choice = prompt(`QUẢN LÝ HỌC VIÊN GLOBAL ENGLISH
1. Danh sách học viên
2. Thêm học viên
3. Cập nhật học viên
4. Xóa học viên
5. Tìm theo khóa học
0. Thoát`);

  if (choice !== null) {
    choice = choice.trim();
  }
  switch (choice) {
    case "1":
      displayStudents(students);
      break;
    case "2":
      addStudent();
      break;
    case "3":
      updateStudent();
      break;
    case "4":
      deleteStudent();
      break;
    case "5":
      searchStudents();
      break;
    case "0":
      console.log("Tạm biệt");
      break;
    default:
      console.log("Lựa chọn không hợp lệ");
  }
} while (choice !== "0");