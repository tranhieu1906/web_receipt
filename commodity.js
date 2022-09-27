let i = 0;
let arr = []
let count = 0

function clickBtn() {
  document.getElementById("table").innerHTML +=
    '<tr class="nav" >\n' +
    "                    <td class = 'index'>\n" +
    i +
    "                    </td>\n" +
    "                    <td>\n" +
    '                        <input type="text" id="commodityCode">\n' +
    "                    </td>\n" +
    "                    <td>\n" +
    '                         <input type="text" id="nameService">\n' +
    "                   </td>\n" +
    "                    <td>\n" +
    "                        <select>\n" +
    '                            <option value="chọn">--chọn--</option>\n' +
    '                            <option value="Chiếc">Chiếc</option>\n' +
    '                            <option value="Cái">Cái</option>\n' +
    '                            <option value="Chỉ">Chỉ</option>\n' +
    "                        </select>\n" +
    "                    </td>\n" +
    "                    <td>\n" +
    '                        <input type="number" id="amount" onblur="blurInput(i)">\n' +
    "                    </td>\n" +
    "                    <td>\n" +
    '                        <input type="text" id="price" onblur="blurInput(i)">\n' +
    "                    </td>\n" +
    "                    <td id='result'></td>\n" +
    "                    <td>\n" +
    "                        <select>\n" +
    '                            <option value="sl">--chọn--</option>\n' +
    '                            <option value="10">10%</option>\n' +
    '                            <option value="5">5%</option>\n' +
    '                            <option value="0">0%</option>\n' +
    '                            <option value="Không">Không chịu thuế</option>\n' +
    "                        </select>\n" +
    "                    </td>\n" +
    "                    <td></td>\n" +
    "                    <td>\n" +
    '                         <button onclick="deleteCurrent()">Xóa</button>\n' +
    '                          <button onclick="submitBtn()">ADD</button>\n' +
    "                   </td>\n" +
    "                </tr>";
  i++;
}
function deleteCurrent() {
  let td = event.target.parentNode;
  let tr = td.parentNode;
  tr.parentNode.removeChild(tr);
}
function blurInput() {
  let sum = 0;
  let valueAmount = document.getElementById("amount").value;
  let valuePrice = document.getElementById("price").value;
  if (valueAmount !== "" && valuePrice !== "") {
    sum = +valueAmount * +valuePrice;
  }
  document.getElementById("result").innerHTML = sum
}

function submitBtn(){
  let value = document.getElementById("commodityCode").value
  let valueService = document.getElementById("nameService").value
  let valueAmount = document.getElementById("amount").value;
  let valuePrice = document.getElementById("price").value;
  arr.push(value)
  arr.push(valueService)
  arr.push(valueAmount)
  arr.push(valuePrice)
  count++
  if (count > 1){
    arr = []
    arr.push(value)
    arr.push(valueService)
    arr.push(valueAmount)
    arr.push(valuePrice)
  }
  console.log(arr)
}