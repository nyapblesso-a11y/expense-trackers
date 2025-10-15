const expenses = []
let totalAmount = 0

const categorySelect = document.getElementById('category-select')
const amountInput = document.getElementById('amount-input')
const dateInput = document.getElementById('date-input')
const addBtn = document.getElementById('add-btn')
const expenseTableBody = document.getElementById('expense-table-body')
const totalAmountCell = document.getElementById('total-amount')

addBtn.addEventListener('click', function () {
  const category = categorySelect.value
  const amount = Number(amountInput.value)
  const date = dateInput.value
  if (category === '') {
    alert('please select a category')
    return
  }
  if (isNaN(amount) || amount <= 0) {
    alert('Please enter valid amount')
    return
  }
  if (date === '') {
    alert('please select valid date')
    return
  }

  expenses.push({ category, amount, date })
  totalAmount += amount
  totalAmountCell.textContent = totalAmount

  const newRow = expenseTableBody.insertRow()

  const categoryCell = newRow.insertCell()
  const amountCell = newRow.insertCell()
  const dateCell = newRow.insertCell()

  const deleteCell = newRow.insertCell()
  const deleteBnt = document.createElement('button')

  deleteBnt.textContent = 'Delete'
  deleteBnt.classList.add('delete-btn')
  deleteBnt.addEventListener('click', function () {
    expenses.splice(expenses.indexOf(expense), 1)
    totalAmount -= expense.amount
    totalAmountCell.textContent = totalAmount

    expenseTableBody.removeChild(newRow)
  })

  const expense = expenses[expenses.length - 1]
  categoryCell.textContent = expense.category
  amountCell.textContent = expense.amount
  dateCell.textContent = expense.date
  deleteCell.appendChild(deleteBnt)
})

for (const expense of expenses) {
  totalAmount += expense.amount
  totalAmountCell.textContent = totalAmount

  const newRow = expenseTableBody.insertRow()
  const categoryCel = newRow.insertCell()
  const amountCel = newRow.insertCell()
  const dateCel = newRow.insertCell()
  const deleteCel = newRow.insertCell()
  const deleteBt = document.createElement('button')
  deleteBt.textContent = 'Delete'
  deleteBt.classList.add('delete-btn')
  deleteBt.addEventListener('click', function () {
    expenses.splice(expenses.indexOf(expense), 1)
    totalAmount -= expense.amount
    totalAmountCell.textContent = totalAmount
    expenseTableBody.removeChild(newRow)
  })

  categoryCel.textContent = expense.category
  amountCel.textContent = expense.amount
  dateCel.textContent = expense.date
  deleteCel.appendChild(deleteBt)
}
